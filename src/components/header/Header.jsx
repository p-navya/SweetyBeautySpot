import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { Button } from '../ui/button'
import coloredLogoImg from '../../assets/colored-logo.png'

function Header() {
  const [isVisible, setIsVisible] = useState(true)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const lastScrollY = useRef(0)

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY || window.pageYOffset
      const isScrollingDown = y > lastScrollY.current
      const crossed = y > 80
      if (isScrollingDown && crossed) {
        setIsVisible(false)
      } else {
        setIsVisible(true)
      }
      lastScrollY.current = y
    }

    const onMouseMove = (e) => {
      if (e.clientY < 90) {
        setIsVisible(true)
      }
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('mousemove', onMouseMove)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('mousemove', onMouseMove)
    }
  }, [])
  return (
    <header className={`fixed top-0 left-0 right-0 z-50 text-white bg-transparent transition-all duration-300 ${isVisible ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0 pointer-events-none'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative flex justify-between items-center py-6">
          {/* Brand Name */}
          <Link to="/" className="flex items-start">
            <img src={coloredLogoImg} alt="Ramya's Beauty Spot Logo" className="h-20 w-auto object-contain" />
            <div className="leading-tight text-center">
              <h1 className="brand-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white">
                Ramya's Beauty Spot
              </h1>
              <p className="text-sm sm:text-base lg:text-lg uppercase tracking-widest text-white/80">
                Skin | Hair | Makeup
              </p>
            </div>
          </Link>
          
          {/* Navigation - positioned after brand name */}
          <nav className="hidden md:flex space-x-15 ">
            <Link 
              to="/" 
              className="text-white hover:text-[hsl(var(--primary))] transition-colors duration-200 font-medium uppercase tracking-wide text-sm"
              onClick={(e) => {
                if (window.location.pathname === '/') {
                  e.preventDefault()
                  window.scrollTo({ top: 0, behavior: 'smooth' })
                }
              }}
            >
              Home
            </Link>
            <Link 
              to="/#about" 
              className="text-white hover:text-[hsl(var(--primary))] transition-colors duration-200 font-medium uppercase tracking-wide text-sm"
              onClick={(e) => {
                if (window.location.pathname === '/') {
                  e.preventDefault()
                  document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })
                }
              }}
            >
              About
            </Link>
            <Link 
              to="/#services" 
              className="text-white hover:text-[hsl(var(--primary))] transition-colors duration-200 font-medium uppercase tracking-wide text-sm"
              onClick={(e) => {
                if (window.location.pathname === '/') {
                  e.preventDefault()
                  document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })
                }
              }}
            >
              Services
            </Link>
            <Link 
              to="/#gallery" 
              className="text-white hover:text-[hsl(var(--primary))] transition-colors duration-200 font-medium uppercase tracking-wide text-sm"
              onClick={(e) => {
                if (window.location.pathname === '/') {
                  e.preventDefault()
                  document.getElementById('gallery')?.scrollIntoView({ behavior: 'smooth' })
                }
              }}
            >
              Gallery
            </Link>
            <Link 
              to="/#contact" 
              className="text-white hover:text-[hsl(var(--primary))] transition-colors duration-200 font-medium uppercase tracking-wide text-sm"
              onClick={(e) => {
                if (window.location.pathname === '/') {
                  e.preventDefault()
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
                }
              }}
            >
              Contact Me
            </Link>
          </nav>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button 
              variant="ghost" 
              size="icon" 
              className="text-white hover:text-[hsl(var(--primary))]"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-black/95 backdrop-blur-md border-t border-white/10 z-50">
            <div className="px-4 py-6 space-y-4">
              <Link 
                to="/" 
                className="block text-white hover:text-[hsl(var(--primary))] transition-colors duration-200 font-medium uppercase tracking-wide text-sm py-2"
                onClick={() => {
                  setIsMobileMenuOpen(false)
                  if (window.location.pathname === '/') {
                    window.scrollTo({ top: 0, behavior: 'smooth' })
                  }
                }}
              >
                Home
              </Link>
              <Link 
                to="/#about" 
                className="block text-white hover:text-[hsl(var(--primary))] transition-colors duration-200 font-medium uppercase tracking-wide text-sm py-2"
                onClick={() => {
                  setIsMobileMenuOpen(false)
                  if (window.location.pathname === '/') {
                    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })
                  }
                }}
              >
                About
              </Link>
              <Link 
                to="/#services" 
                className="block text-white hover:text-[hsl(var(--primary))] transition-colors duration-200 font-medium uppercase tracking-wide text-sm py-2"
                onClick={() => {
                  setIsMobileMenuOpen(false)
                  if (window.location.pathname === '/') {
                    document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })
                  }
                }}
              >
                Services
              </Link>
              <Link 
                to="/#gallery" 
                className="block text-white hover:text-[hsl(var(--primary))] transition-colors duration-200 font-medium uppercase tracking-wide text-sm py-2"
                onClick={() => {
                  setIsMobileMenuOpen(false)
                  if (window.location.pathname === '/') {
                    document.getElementById('gallery')?.scrollIntoView({ behavior: 'smooth' })
                  }
                }}
              >
                Gallery
              </Link>
              <Link 
                to="/#contact" 
                className="block text-white hover:text-[hsl(var(--primary))] transition-colors duration-200 font-medium uppercase tracking-wide text-sm py-2"
                onClick={() => {
                  setIsMobileMenuOpen(false)
                  if (window.location.pathname === '/') {
                    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
                  }
                }}
              >
                Contact Me
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}

export default Header