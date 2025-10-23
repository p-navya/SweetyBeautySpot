import React from 'react'
import Footer from '../footer/Footer'

const Services = () => {
  const services = [
    {
      title: "Makeup Artistry",
      description: "Professional makeup services for all occasions",
      price: "Starting at $75",
      features: [
        "Special Event Makeup",
        "Wedding Makeup",
        "Photoshoot Makeup",
        "Everyday Beauty Enhancement",
        "Makeup Consultation"
      ]
    },
    {
      title: "Facial Treatments",
      description: "Rejuvenating skincare treatments",
      price: "Starting at $85",
      features: [
        "Deep Cleansing Facial",
        "Anti-Aging Treatment",
        "Hydrating Facial",
        "Acne Treatment",
        "Custom Skincare Routine"
      ]
    },
    {
      title: "Bridal Packages",
      description: "Complete bridal beauty services",
      price: "Starting at $200",
      features: [
        "Bridal Trial Session",
        "Wedding Day Makeup",
        "Bridal Party Styling",
        "Touch-up Kit Included",
        "Timeline Coordination"
      ]
    },
    {
      title: "Eyebrow Services",
      description: "Perfectly shaped and styled brows",
      price: "Starting at $45",
      features: [
        "Eyebrow Shaping",
        "Tinting",
        "Lamination",
        "Microblading Consultation",
        "Maintenance Appointments"
      ]
    },
    {
      title: "Lash Services",
      description: "Enhance your natural lashes",
      price: "Starting at $65",
      features: [
        "Lash Extensions",
        "Lash Lift & Tint",
        "Strip Lashes Application",
        "Lash Care Consultation",
        "Maintenance & Fills"
      ]
    },
    {
      title: "Hair Styling",
      description: "Professional hair styling services",
      price: "Starting at $55",
      features: [
        "Blowouts & Styling",
        "Updos & Special Styles",
        "Hair Accessories",
        "Bridal Hair Styling",
        "Event Hair Preparation"
      ]
    }
  ]

  return (
    <div className="min-h-screen text-[hsl(var(--foreground))]">
      {/* Header Section */}
      <section className="relative py-20 overflow-hidden bg-gradient-to-br from-[hsl(var(--background))] via-[hsl(var(--gradient-via))] to-[hsl(var(--background))]">
        {/* Gradient overlay effects */}
        <div className="absolute inset-0 opacity-40 bg-[radial-gradient(ellipse_at_top_right,hsl(var(--primary))/0.3,transparent_50%)]" />
        <div className="absolute inset-0 opacity-40 bg-[radial-gradient(ellipse_at_bottom_left,hsl(var(--gradient-end))/0.3,transparent_50%)]" />
        
        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Services
          </h1>
         
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-gradient-to-br from-[hsl(var(--background))] via-[hsl(var(--gradient-via))] to-[hsl(var(--background))]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="glass-card lift rounded-xl overflow-hidden">
                <div className="p-8">
                  <div className="text-center mb-6">
                    <div className="w-16 h-16 bg-[hsl(var(--primary))] rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold mb-2">{service.title}</h3>
                    <p className="text-white/80 mb-4">{service.description}</p>
                    <div className="text-2xl font-bold text-[hsl(var(--primary))] mb-6">{service.price}</div>
                  </div>
                  
                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <svg className="w-5 h-5 text-[hsl(var(--primary))] mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-white/85">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <button className="w-full bg-[hsl(var(--primary))] hover:opacity-90 text-white py-3 px-6 rounded-lg font-semibold transition-colors duration-200 shine">
                    Book Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Booking Information */}
      
      <Footer />
    </div>
  )
}

export default Services