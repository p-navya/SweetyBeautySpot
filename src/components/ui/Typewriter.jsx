import React, { useEffect, useRef, useState } from 'react'

/**
 * Typewriter renders text one character at a time.
 * Props:
 * - text: string to type
 * - className: classes for the wrapping heading/span
 * - speedMs: delay between characters
 * - startDelayMs: initial delay before typing begins
 * - as: tag name to render, e.g., 'h1', 'span'
 * - sound: whether to play click sound per character (WebAudio)
 */
export default function Typewriter({
  text,
  className = '',
  speedMs = 70,
  startDelayMs = 0,
  as: Tag = 'span',
  sound = true,
}) {
  const [index, setIndex] = useState(0)
  const audioCtxRef = useRef(null)
  const hasTriedAudioRef = useRef(false)

  useEffect(() => {
    let mounted = true
    let timeoutId
    let intervalId

    const start = () => {
      intervalId = setInterval(() => {
        if (!mounted) return
        setIndex((i) => {
          const next = Math.min(text.length, i + 1)
          if (sound) {
            playTick()
          }
          if (next === text.length) {
            clearInterval(intervalId)
          }
          return next
        })
      }, speedMs)
    }

    if (startDelayMs > 0) {
      timeoutId = setTimeout(start, startDelayMs)
    } else {
      start()
    }

    return () => {
      mounted = false
      if (timeoutId) clearTimeout(timeoutId)
      if (intervalId) clearInterval(intervalId)
    }
  }, [text, speedMs, startDelayMs, sound])

  const playTick = () => {
    try {
      if (!audioCtxRef.current) {
        audioCtxRef.current = new (window.AudioContext || window.webkitAudioContext)()
      }
      const ctx = audioCtxRef.current
      if (ctx.state === 'suspended' && !hasTriedAudioRef.current) {
        // Attempt to resume once; browsers may block without user gesture
        hasTriedAudioRef.current = true
        ctx.resume().catch(() => {})
      }
      if (ctx.state !== 'running') return

      const duration = 0.03
      const oscillator = ctx.createOscillator()
      const gain = ctx.createGain()
      oscillator.type = 'square'
      oscillator.frequency.setValueAtTime(600, ctx.currentTime)
      gain.gain.setValueAtTime(0.0001, ctx.currentTime)
      gain.gain.exponentialRampToValueAtTime(0.06, ctx.currentTime + 0.005)
      gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + duration)
      oscillator.connect(gain)
      gain.connect(ctx.destination)
      oscillator.start()
      oscillator.stop(ctx.currentTime + duration)
    } catch (_) {
      // Ignore audio errors silently
    }
  }

  return <Tag className={className}>{text.slice(0, index)}</Tag>
}


