import React, { useState, useEffect } from 'react'
import heroImg from '../../assets/hero.png'
import aboutImg from '../../assets/about.png'
import facialMaskImg from '../../assets/facial-mask.png'
import hairCuttingImg from '../../assets/hair-cutting.png'
import makeUpImg from '../../assets/make-up.png'
import { Link } from 'react-router-dom'
import { Button } from '../ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card'
import Typewriter from '../ui/Typewriter'

const Home = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: '',
    date: '',
    time: '',
    message: ''
  })

  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  const testimonials = [
    {
      initials: 'AR',
      name: 'Aisha R.',
      service: 'Bridal Makeup',
      text: 'Sweety made me feel absolutely stunning on my wedding day. The makeup lasted all night and looked flawless in photos!'
    },
    {
      initials: 'KM',
      name: 'Karin M.',
      service: 'Skincare Treatments',
      text: 'My skin has never felt better. The facial was relaxing and the aftercare tips made a huge difference.'
    },
    {
      initials: 'JS',
      name: 'Julia S.',
      service: 'Hair & Lashes',
      text: 'Loved my lashes and hair styling! Super professional service and a really welcoming atmosphere.'
    },
    {
      initials: 'PS',
      name: 'Priya S.',
      service: 'Complete Makeover',
      text: 'Amazing transformation! Sweety understood exactly what I wanted and delivered beyond my expectations.'
    },
    {
      initials: 'RM',
      name: 'Rita M.',
      service: 'Home Service',
      text: 'So convenient having the service at home! Professional, clean, and the results were perfect.'
    },
    {
      initials: 'SK',
      name: 'Sneha K.',
      service: 'Party Makeup',
      text: 'Got so many compliments at the party! The makeup was flawless and lasted the entire evening.'
    },
    {
      initials: 'AM',
      name: 'Anita M.',
      service: 'Skincare Consultation',
      text: 'Best skincare advice I\'ve ever received. My skin is glowing now thanks to Sweety\'s expertise.'
    },
    {
      initials: 'DK',
      name: 'Deepika K.',
      service: 'Hair Styling',
      text: 'Love my new hairstyle! Sweety has such great taste and knows exactly what suits your face shape.'
    }
  ]

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const whatsappNumber = '919100350293'
    const lines = [
      `New Booking Request`,
      `Name: ${formData.name}`,
      `Phone: +91${formData.phone}`,
      `Service: ${formData.service || 'Not specified'}`,
      `Preferred Date: ${formData.date || 'Not specified'}`,
      `Preferred Time: ${formData.time || 'Not specified'}`,
      `Message: ${formData.message || 'N/A'}`,
    ]
    const text = encodeURIComponent(lines.join('\n'))
    const url = `https://wa.me/${whatsappNumber}?text=${text}`
    window.open(url, '_blank')
  }

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view')
        } else {
          entry.target.classList.remove('in-view')
        }
      })
    }, { threshold: 0.25 })

    document.querySelectorAll('.reveal-card').forEach((el, i) => {
      // slight stagger
      el.style.animationDelay = `${i * 120}ms`
      observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  // Scroll to section if hash is present in URL
  useEffect(() => {
    const hash = window.location.hash
    if (hash === '#about') {
      setTimeout(() => {
        const element = document.getElementById('about')
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' })
        }
      }, 100)
    }
  }, [])
  return (
    <div className="min-h-screen">
      {/* Hero Section - Full Bleed Background Template */}
      <section
        className="relative min-h-[100vh] flex items-center pt-16 pb-8 md:pt-28"
        style={{ backgroundImage: `url(${heroImg})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundAttachment: 'fixed' }}
      >
        {/* Dark vignette overlay for readability */}
        <div className="absolute inset-0 bg-[rgba(0,0,0,0.3)]" />

        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center text-center md:items-start md:text-left">
            <div className="flex flex-col gap-1 mb-6 md:mb-8">
              <Typewriter as="h1" className="text-white/40 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-wide leading-tight" text="SELF-CARE IS" startDelayMs={200} speedMs={70} />
              <Typewriter as="h1" className="text-white/40 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-wide leading-tight" text="IMPORTANT." startDelayMs={1100} speedMs={70} />
          </div>
            <p className="text-white/85 text-base sm:text-lg md:text-xl max-w-2xl mb-6">
            Look good, feel great — personal beauty care made just for you.
            </p>
            <div className="mb-8">
              <div className="inline-block px-4 py-3 md:px-6 md:py-4 bg-purple-600/10 backdrop-blur-sm border border-purple-400/20 rounded-lg text-white/90 text-xs md:text-sm font-medium">
                Ladies Only Salon | Home Service Available
              </div>
            </div>
            {/* CTA button */}
            <div className="w-full max-w-sm md:max-w-none md:w-[320px]">
              <div className="bg-[hsl(var(--primary))]/30 backdrop-blur-md border border-[hsl(var(--primary))]/40 rounded-3xl shadow-lg p-3 md:p-4 hover:shadow-2xl hover:shadow-purple-500/25 transition-all duration-300 hover:scale-105">
                <Button asChild size="lg" className="w-full bg-[hsl(var(--primary))] hover:bg-gradient-to-r hover:from-purple-600 hover:to-pink-600 text-white rounded-2xl font-bold text-sm md:text-base transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/50 hover:scale-105">
                  <Link to="/contact" className="block w-full text-center" style={{fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif', fontWeight: 'bold'}}>BOOK YOUR APPOINTMENT NOW!</Link>
              </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 text-[hsl(var(--foreground))] bg-[hsl(var(--background))]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="brand-heading text-2xl md:text-3xl lg:text-5xl font-extrabold leading-tight mb-2 text-white/85 whitespace-nowrap">
                About Sweety's Beauty Spot
              </h2>
              
              {/* Your Glow, My Passion - Special Tagline */}
              <div className="mb-6">
                <p className="text-2xl md:text-3xl lg:text-3xl font-bold italic text-[hsl(var(--primary))] tracking-wide">
                  "Your Glow, My Passion"
                </p>
              </div>
              
              <p className="text-lg text-white mb-4">
              Hello, I'm Ramya! This isn't a big salon—it's just me, doing what I love. I'm all about helping you feel confident and beautiful in your own skin. Whether it's glowing skin, healthy hair, or a fresh new look, every treatment is personal, with love and care in every detail.
              </p>
              <p className="text-lg text-white mb-8">
              <span className="text-[hsl(var(--primary))] font-semibold">Ladies Only Salon</span> • Home Service Available for your convenience
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-[hsl(var(--primary))]">10+</div>
                  <div className="text-white">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-[hsl(var(--primary))]">1000+</div>
                  <div className="text-white">Happy Clients</div>
                </div>
              </div>
            </div>
            <div className="glass-card p-6 rounded-xl shadow-lg max-w-md mx-auto">
              <div className="aspect-square rounded-lg overflow-hidden">
                <img src={aboutImg} alt="Professional Beauty Services" className="w-full h-full object-cover" />
              </div>
        
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview Section */}
      <section className="py-20 text-white" style={{backgroundColor: '#32194a'}} id="services">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Simple Services Heading */}
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Services</h2>
        
          </div>
          
          {/* Vertical Cards Grid */}
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Service Card 1 - Skin Care */}
            <Card className="bg-purple-600/20 backdrop-blur-md border border-purple-400/20 text-center transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(255,255,255,0.3)] hover:shadow-white/20 rounded-xl">
              <CardHeader>
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4">
                  <img src={facialMaskImg} alt="Facial Mask" className="w-10 h-10 object-contain" />
                </div>
                <CardTitle className="text-2xl mb-4 text-white">Skin Care </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed text-left text-white">
                  <ul className="space-y-1">
                    <li>• Facials (glow, clean-up, acne care)</li>
                    <li>• De-tan treatments</li>
                    <li>• Bleach & exfoliation</li>
                    <li>• Skin polishing</li>
                    <li>• Face massage</li>
                    <li>• Threading & waxing</li>
                  </ul>
                </CardDescription>
              </CardContent>
            </Card>

            {/* Service Card 2 - Hair Care */}
            <Card className="bg-purple-600/20 backdrop-blur-md border border-purple-400/20 text-center transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(255,255,255,0.3)] hover:shadow-white/20 rounded-xl">
              <CardHeader>
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4">
                  <img src={hairCuttingImg} alt="Hair Cutting" className="w-10 h-10 object-contain" />
                </div>
                <CardTitle className="text-2xl mb-4 text-white">Hair Care</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed text-left text-white">
                  <ul className="space-y-1">
                    <li>• Hair spa & deep conditioning</li>
                    <li>• Haircuts & trims</li>
                    <li>• Blow dry & styling</li>
                    <li>• Oil massage</li>
                    <li>• Dandruff treatment</li>
                    <li>• Henna(red & Black)/ hair color</li>
                  </ul>
                </CardDescription>
              </CardContent>
            </Card>

            {/* Service Card 3 - Makeup */}
            <Card className="bg-purple-600/20 backdrop-blur-md border border-purple-400/20 text-center transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(255,255,255,0.3)] hover:shadow-white/20 rounded-xl">
              <CardHeader>
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4">
                  <img src={makeUpImg} alt="Make Up" className="w-10 h-10 object-contain" />
                </div>
                <CardTitle className="text-xl mb-4 text-white">Makeup & Bridal Packages</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed text-left text-white">
                  <ul className="space-y-1">
                    <li>• Party makeup</li>
                    <li>• Engagement makeup/Reception Makeup</li>
                    <li>• Bridal makeup</li>
                    <li>• Light daytime looks/Light Makeup</li>
                    <li>• Eye makeup & lashes</li>
                    <li>• Saree draping & hair styling</li>
                  </ul>
                </CardDescription>
              </CardContent>
            </Card>
          </div>
          
          <div className="text-center mt-12">
            <Button asChild size="lg" className="bg-[hsl(var(--primary))] hover:bg-gradient-to-r hover:from-purple-600 hover:to-pink-600 text-[hsl(var(--primary-foreground))] shine transition-all duration-300 hover:shadow-2xl hover:shadow-white hover:scale-105">
              <Link to="/services">Explore All Services</Link>
            </Button>
          </div>
        </div>
      </section>


      {/* Testimonials Section */}
      <section className="py-20 bg-gradient-to-br from-[hsl(var(--background))] via-[hsl(var(--gradient-via))] to-[hsl(var(--background))] text-[hsl(var(--foreground))]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">What my Clients Say</h2>
          </div>

          <div className="relative overflow-hidden">
            {/* Navigation Arrows */}
            <button 
              onClick={() => setCurrentTestimonial((prev) => prev === 0 ? testimonials.length - 1 : prev - 1)}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full p-3 hover:bg-white/20 transition-colors"
            >
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            
            <button 
              onClick={() => setCurrentTestimonial((prev) => prev === testimonials.length - 1 ? 0 : prev + 1)}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full p-3 hover:bg-white/20 transition-colors"
            >
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>

            {/* Testimonials Carousel */}
            <div className="flex transition-transform duration-700 ease-in-out" style={{transform: `translateX(-${currentTestimonial * 100}%)`}}>
              {/* First set - 3 cards */}
              <div className="w-full flex-shrink-0 px-4">
                <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
                    {testimonials.slice(0, 3).map((test, cardIndex) => (
                      <div key={cardIndex} className="glass-card lift rounded-xl p-8 transform transition-all duration-300 hover:scale-105 hover:rotate-1">
              <div className="flex items-center mb-4">
                          <div className="w-12 h-12 rounded-full bg-[hsl(var(--primary))] text-white flex items-center justify-center font-bold mr-3">
                            {test.initials}
                          </div>
                <div>
                            <div className="font-semibold">{test.name}</div>
                            <div className="text-white/70 text-sm">{test.service}</div>
                </div>
              </div>
              <div className="flex text-yellow-300 mb-3" aria-hidden="true">
                {Array.from({ length: 5 }).map((_, i) => (
                            <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.802 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118L10 13.348l-2.984 2.134c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L3.38 8.72c-.783-.57-.38-1.81.588-1.81H7.43a1 1 0 00.95-.69l1.07-3.292z"/>
                            </svg>
                ))}
              </div>
                        <p className="text-white/90">{test.text}</p>
                      </div>
                    ))}
            </div>
                </div>
            </div>

              {/* Second set - 3 cards */}
              <div className="w-full flex-shrink-0 px-4">
                <div className="max-w-4xl mx-auto">
                  <div className="grid md:grid-cols-3 gap-8">
                    {testimonials.slice(3, 6).map((test, cardIndex) => (
                      <div key={cardIndex} className="glass-card lift rounded-xl p-8 transform transition-all duration-300 hover:scale-105 hover:rotate-1">
              <div className="flex items-center mb-4">
                          <div className="w-12 h-12 rounded-full bg-[hsl(var(--primary))] text-white flex items-center justify-center font-bold mr-3">
                            {test.initials}
                          </div>
                <div>
                            <div className="font-semibold">{test.name}</div>
                            <div className="text-white/70 text-sm">{test.service}</div>
                </div>
              </div>
              <div className="flex text-yellow-300 mb-3" aria-hidden="true">
                {Array.from({ length: 5 }).map((_, i) => (
                            <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.802 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118L10 13.348l-2.984 2.134c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L3.38 8.72c-.783-.57-.38-1.81.588-1.81H7.43a1 1 0 00.95-.69l1.07-3.292z"/>
                            </svg>
                ))}
              </div>
                        <p className="text-white/90">{test.text}</p>
                      </div>
                    ))}
            </div>
                </div>
            </div>

              {/* Third set - 2 cards in 3-card layout */}
              <div className="w-full flex-shrink-0 px-4">
                <div className="max-w-4xl mx-auto">
                  <div className="grid md:grid-cols-3 gap-8">
                    {testimonials.slice(6, 8).map((test, cardIndex) => (
                      <div key={cardIndex} className="glass-card lift rounded-xl p-8 transform transition-all duration-300 hover:scale-105 hover:rotate-1">
              <div className="flex items-center mb-4">
                          <div className="w-12 h-12 rounded-full bg-[hsl(var(--primary))] text-white flex items-center justify-center font-bold mr-3">
                            {test.initials}
                          </div>
                <div>
                            <div className="font-semibold">{test.name}</div>
                            <div className="text-white/70 text-sm">{test.service}</div>
                </div>
              </div>
              <div className="flex text-yellow-300 mb-3" aria-hidden="true">
                {Array.from({ length: 5 }).map((_, i) => (
                            <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.802 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118L10 13.348l-2.984 2.134c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L3.38 8.72c-.783-.57-.38-1.81.588-1.81H7.43a1 1 0 00.95-.69l1.07-3.292z"/>
                            </svg>
                          ))}
                        </div>
                        <p className="text-white/90">{test.text}</p>
                      </div>
                    ))}
                    {/* Empty space for third card position */}
                    <div className="hidden md:block"></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Dots Indicator */}
            <div className="flex justify-center mt-8 space-x-2">
              {[0, 1, 2].map((index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    currentTestimonial === index 
                      ? 'bg-[hsl(var(--primary))] scale-125' 
                      : 'bg-white/30 hover:bg-white/50'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Combined CTA & Footer Section */}
      <footer className="text-[hsl(var(--foreground))] bg-gradient-to-b from-[hsl(var(--gradient-via))] to-[hsl(var(--background))]">
        {/* Image Gallery Section */}
        <section className="py-20 text-white" style={{backgroundColor: '#32194a'}} id="gallery">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Gallery</h2>
</div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {/* Gallery Image 1 */}
            <div className="glass-card p-4 rounded-xl hover:scale-105 transition-all duration-300">
              <div className="aspect-square rounded-lg overflow-hidden">
                <img src={aboutImg} alt="Beauty Service 1" className="w-full h-full object-cover" />
              </div>
            </div>
            
            {/* Gallery Image 2 */}
            <div className="glass-card p-4 rounded-xl hover:scale-105 transition-all duration-300">
              <div className="aspect-square rounded-lg overflow-hidden">
                <img src={heroImg} alt="Beauty Service 2" className="w-full h-full object-cover" />
              </div>
            </div>
            
            {/* Gallery Image 3 */}
            <div className="glass-card p-4 rounded-xl hover:scale-105 transition-all duration-300">
              <div className="aspect-square rounded-lg overflow-hidden">
                <img src={aboutImg} alt="Beauty Service 3" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <Button asChild size="lg" className="bg-purple-600 hover:bg-gradient-to-r hover:from-purple-600 hover:to-pink-600 text-white shine transition-all duration-300 hover:shadow-2xl hover:shadow-white hover:scale-105">
              <Link to="/gallery">View Full Gallery</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gradient-to-br from-[hsl(var(--background))] via-[hsl(var(--gradient-via))] to-[hsl(var(--background))] text-[hsl(var(--foreground))]" id="contact">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Contact Me</h2>
            </div>
          
          <div className="max-w-4xl mx-auto">
            {/* Book Appointment Form */}
            <div className="bg-purple-600/20 backdrop-blur-md border border-purple-400/20 rounded-xl p-5">
              <h3 className="text-2xl font-semibold text-white mb-4" style={{fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif'}}>Book an Appointment</h3>
              <form className="space-y-4" onSubmit={handleSubmit}>
                <div>
                  <label className="block text-white text-sm font-medium mb-1" style={{fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif'}}>Name *</label>
                  <input 
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-3 py-2 bg-purple-700/30 border border-purple-400/30 rounded-lg text-white/60 placeholder-white/60 focus:outline-none focus:border-purple-400"
                    placeholder="Your full name"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-white text-sm font-medium mb-2" style={{fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif'}}>Phone Number *</label>
                  <div className="flex">
                    <div className="flex items-center px-4 py-3 bg-purple-700/30 border border-purple-400/30 border-r-0 rounded-l-lg text-white font-medium">
                      +91
                    </div>
                    <input 
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="flex-1 px-4 py-3 bg-purple-700/30 border border-purple-400/30 rounded-r-lg text-white/60 placeholder-white/60 focus:outline-none focus:border-purple-400"
                      placeholder="12345 67890"
                      required
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-white text-sm font-medium mb-2" style={{fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif'}}>Preferred Service</label>
                  <select 
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-purple-700/30 border border-purple-400/30 rounded-lg text-white focus:outline-none focus:border-purple-400"
                  >
                    <option value="" className="bg-purple-800 text-white/60">Select a service</option>
                    <option value="skin" className="bg-purple-800 text-white">Skin Care</option>
                    <option value="hair" className="bg-purple-800 text-white">Hair Care</option>
                    <option value="makeup" className="bg-purple-800 text-white">Makeup & Bridal</option>
                    <option value="other" className="bg-purple-800 text-white">Other</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-white text-sm font-medium mb-2" style={{fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif'}}>Preferred Date & Time</label>
                  <div className="grid grid-cols-2 gap-3">
                    <input 
                      type="date"
                      name="date"
                      value={formData.date}
                      onChange={handleChange}
                      className="px-4 py-3 bg-purple-700/30 border border-purple-400/30 rounded-lg text-white/60 focus:outline-none focus:border-purple-400"
                      style={{colorScheme: 'dark'}}
                    />
                    <select 
                      name="time"
                      value={formData.time}
                      onChange={handleChange}
                      className="px-4 py-3 bg-purple-700/30 border border-purple-400/30 rounded-lg text-white/60 focus:outline-none focus:border-purple-400"
                    >
                      <option value="" className="bg-purple-800 text-white/60">Select time</option>
                      <option value="09:00" className="bg-purple-800 text-white">9:00 AM</option>
                      <option value="09:30" className="bg-purple-800 text-white">9:30 AM</option>
                      <option value="10:00" className="bg-purple-800 text-white">10:00 AM</option>
                      <option value="10:30" className="bg-purple-800 text-white">10:30 AM</option>
                      <option value="11:00" className="bg-purple-800 text-white">11:00 AM</option>
                      <option value="11:30" className="bg-purple-800 text-white">11:30 AM</option>
                      <option value="12:00" className="bg-purple-800 text-white">12:00 PM</option>
                      <option value="12:30" className="bg-purple-800 text-white">12:30 PM</option>
                      <option value="13:00" className="bg-purple-800 text-white">1:00 PM</option>
                      <option value="13:30" className="bg-purple-800 text-white">1:30 PM</option>
                      <option value="14:00" className="bg-purple-800 text-white">2:00 PM</option>
                      <option value="14:30" className="bg-purple-800 text-white">2:30 PM</option>
                      <option value="15:00" className="bg-purple-800 text-white">3:00 PM</option>
                      <option value="15:30" className="bg-purple-800 text-white">3:30 PM</option>
                      <option value="16:00" className="bg-purple-800 text-white">4:00 PM</option>
                      <option value="16:30" className="bg-purple-800 text-white">4:30 PM</option>
                      <option value="17:00" className="bg-purple-800 text-white">5:00 PM</option>
                      <option value="17:30" className="bg-purple-800 text-white">5:30 PM</option>
                      <option value="18:00" className="bg-purple-800 text-white">6:00 PM</option>
                      <option value="18:30" className="bg-purple-800 text-white">6:30 PM</option>
                      <option value="19:00" className="bg-purple-800 text-white">7:00 PM</option>
                      <option value="19:30" className="bg-purple-800 text-white">7:30 PM</option>
                      <option value="20:00" className="bg-purple-800 text-white">8:00 PM</option>
                    </select>
                  </div>
                </div>
                
                <div>
                  <label className="block text-white text-sm font-medium mb-2" style={{fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif'}}>Message</label>
                  <textarea 
                    rows={4}
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-purple-700/30 border border-purple-400/30 rounded-lg text-white/60 placeholder-white/60 focus:outline-none focus:border-purple-400 resize-none"
                    placeholder="Tell us about your specific needs or any questions you have..."
                  ></textarea>
                </div>
                
                <button 
                  type="submit"
                  className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 shine"
                  style={{fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif'}}
                >
                  Send Request
            </button>
              </form>
            </div>
          </div>
        </div>
      </section>

        {/* Footer Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-4 pt-4 border-t border-white/10">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Brand Name and Description */}
            <div className="md:col-span-2 md:order-1">
              <Link to="/" className="flex items-center mb-3">
                <h2 className="text-2xl font-bold text-[hsl(var(--foreground))]">
                  Sweety's Beauty Spot
                </h2>
              </Link>
              <p className="text-white/80 mb-3 max-w-md">
                Your go-to spot for personalized beauty services. At Sweety's Beauty Spot, it's all about making you look and feel your best with expert hands, high-quality treatments and affordable pricing.
              </p>
            </div>

            {/* Contact Info */}
            <div className="md:col-span-1 md:order-2">
              <h3 className="text-xl font-semibold mb-3">Contact Info</h3>
              <div className="space-y-3">
                <div className="flex items-start">
                  <svg className="w-5 h-5 text-[hsl(var(--primary))] mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <div>
                    <p className="text-gray-300">Kukatpally, Hyderabad</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <svg className="w-5 h-5 text-[hsl(var(--primary))] mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <p className="text-gray-300">+91 9100350293</p>
                </div>
                
                <div className="flex items-start">
                  <svg className="w-5 h-5 text-[hsl(var(--primary))] mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <a 
                    href="mailto:sweety.beautyspot@gmail.com"
                    className="text-gray-300 hover:text-[hsl(var(--primary))] transition-colors"
                  >
                    sweety.beautyspot@gmail.com
                  </a>
                </div>
                
                <div className="flex items-start">
                  <svg className="w-5 h-5 text-[hsl(var(--primary))] mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                  <a 
                    href="https://www.instagram.com/sweety.beautyspot?igsh=c24yajFqaDhnaWU0" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-[hsl(var(--primary))] transition-colors"
                  >
                    @sweety.beautyspot
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-white/10 mt-3 pt-2">
            <div className="flex justify-center items-center">
              <p className="text-white/70 text-xs">
                © 2025 Sweety's Beauty Spot. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Home
