import React, { useState } from 'react'
import Footer from '../footer/Footer'
import skinImg from '../../assets/skin.png'
import hairImg from '../../assets/hair.png'
import makeupImg from '../../assets/makeup.png'

const Services = () => {
  const [currentCard, setCurrentCard] = useState(0)

  const mainServiceCards = [
    {
      id: 0,
      title: "Skin",
      image: skinImg,
      services: ["Threading", "Waxing", "Facials", "De-tan", "Bleach & Polishing"]
    },
    {
      id: 1,
      title: "Hair", 
      image: hairImg,
      
      services: ["Hair Cut", "Hair Spa", "Henna & Color", "Styling", "Oil Massage"]
    },
    {
      id: 2,
      title: "Makeup & Bridal",
      image: makeupImg,
     
      services: ["Party Makeup", "Engagement", "Reception", "Bridal", "Light Makeup"]
    }
  ]

  const serviceCategories = [
    {
      category: "Skin Care",
      services: [
        {
          title: "Threading",
          description: "Precise hair removal technique for perfect brows and face",
          features: ["Eyebrow Threading", "Upper Lip", "Chin", "Forehead", "Full Face"]
        },
        {
          title: "Waxing",
          description: "Smooth, long-lasting hair removal",
          features: ["Full Arms", "Half Arms", "Full Legs", "Half Legs", "Underarms", "Bikini Line"]
        },
        {
          title: "Facials",
          description: "Rejuvenating facial treatments for glowing skin",
          features: ["Glow Facial", "Clean-up", "Anti-Acne Facial", "Gold Facial", "Fruit Facial", "Diamond Facial"]
        },
        {
          title: "De-tan Treatment",
          description: "Remove tan and restore natural skin tone",
          features: ["Face De-tan", "Full Body De-tan", "Hands & Legs", "Back De-tan"]
        },
        {
          title: "Bleach & Polishing",
          description: "Brighten and even out your skin tone",
          features: ["Face Bleach", "Full Body Bleach", "Skin Polishing", "Exfoliation"]
        }
      ]
    },
    {
      category: "Hair Care",
      services: [
        {
          title: "Hair Cut",
          description: "Professional haircuts and styling",
          features: ["Regular Cut", "Layered Cut", "Step Cut", "U-Cut", "V-Cut", "Fringe/Bangs"]
        },
        {
          title: "Hair Spa",
          description: "Deep conditioning and nourishment",
          features: ["Basic Hair Spa", "Keratin Spa", "Anti-Dandruff Spa", "Hair Fall Control", "Scalp Treatment"]
        },
        {
          title: "Henna & Hair Color",
          description: "Natural and chemical hair coloring",
          features: ["Red Henna", "Black Henna", "Full Hair Color", "Root Touch-up", "Highlights", "Global Color"]
        },
        {
          title: "Hair Styling",
          description: "Beautiful hairstyles for any occasion",
          features: ["Blow Dry", "Straightening", "Curling", "Updos", "Braiding", "Party Hairstyles"]
        },
        {
          title: "Oil Massage",
          description: "Relaxing scalp and hair oil treatment",
          features: ["Hot Oil Massage", "Coconut Oil", "Almond Oil", "Herbal Oil", "Anti-Dandruff Oil"]
        }
      ]
    },
    {
      category: "Makeup & Bridal",
      services: [
        {
          title: "Party Makeup",
          description: "Glamorous looks for parties and events",
          features: ["HD Makeup", "Airbrush Makeup", "Eye Makeup", "Bold Lips", "Contouring"]
        },
        {
          title: "Engagement Makeup",
          description: "Special makeup for your engagement ceremony",
          features: ["Pre-Engagement Glow", "Engagement Look", "Hair Styling", "Draping", "Accessories Setting"]
        },
        {
          title: "Reception Makeup",
          description: "Elegant and long-lasting reception look",
          features: ["Reception HD Makeup", "Hair Setting", "Saree Draping", "Touch-up Kit", "False Lashes"]
        },
        {
          title: "Bridal Makeup",
          description: "Complete bridal beauty package",
          features: ["Bridal Trial", "Wedding Day Makeup", "Hair Styling", "Draping", "Accessories", "Touch-ups"]
        },
        {
          title: "Light Makeup",
          description: "Natural and subtle makeup for daily wear",
          features: ["Natural Look", "Office Makeup", "Minimal Makeup", "No-Makeup Look", "Daytime Fresh"]
        }
      ]
    }
  ]

  return (
    <div className="min-h-screen text-[hsl(var(--foreground))]">
      {/* Header Section */}
      <section className="relative py-12 md:py-16 overflow-hidden bg-gradient-to-br from-[hsl(var(--background))] via-[hsl(var(--gradient-via))] to-[hsl(var(--background))]">
        {/* Gradient overlay effects */}
        <div className="absolute inset-0 opacity-40 bg-[radial-gradient(ellipse_at_top_right,hsl(var(--primary))/0.3,transparent_50%)]" />
        <div className="absolute inset-0 opacity-40 bg-[radial-gradient(ellipse_at_bottom_left,hsl(var(--gradient-end))/0.3,transparent_50%)]" />
        
        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-0 mt-8 md:mt-12">
            All Services
          </h1>
         
        </div>
      </section>

      {/* Main Service Cards Transition */}
      <section className="py-12 md:py-16 bg-gradient-to-br from-[hsl(var(--background))] via-[hsl(var(--gradient-via))] to-[hsl(var(--background))]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          

          <div className="relative max-w-4xl mx-auto">
            {/* Navigation Arrows */}
            <button 
              onClick={() => setCurrentCard((prev) => prev - 1)}
              disabled={currentCard === 0}
              className={`absolute left-4 top-1/2 -translate-y-1/2 z-10 rounded-full p-3 transition-colors ${
                currentCard === 0 
                  ? 'bg-white/5 backdrop-blur-sm border border-white/10 cursor-not-allowed opacity-50' 
                  : 'bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20'
              }`}
            >
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            
            <button 
              onClick={() => setCurrentCard((prev) => prev + 1)}
              disabled={currentCard === mainServiceCards.length - 1}
              className={`absolute right-4 top-1/2 -translate-y-1/2 z-10 rounded-full p-3 transition-colors ${
                currentCard === mainServiceCards.length - 1 
                  ? 'bg-white/5 backdrop-blur-sm border border-white/10 cursor-not-allowed opacity-50' 
                  : 'bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20'
              }`}
            >
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>

            {/* Cards Container */}
            <div className="relative overflow-hidden">
              <div className="flex transition-transform duration-700 ease-in-out" style={{transform: `translateX(-${currentCard * 100}%)`}}>
                {mainServiceCards.map((card) => (
                  <div key={card.id} className="w-full flex-shrink-0 px-4">
                    <div className="glass-card lift rounded-2xl overflow-hidden">
                      <div className="grid md:grid-cols-2 gap-0">
                        {/* Image Section */}
                        <div className="relative h-80 md:h-96">
                          <img 
                            src={card.image} 
                            alt={card.title}
                            className="w-full h-full object-cover"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                          <div className="absolute bottom-6 left-6 right-6">
                            <h3 className="text-3xl md:text-4xl font-bold text-white mb-2">{card.title}</h3>
                            <p className="text-white/90 text-lg">{card.description}</p>
                          </div>
                        </div>
                        
                        {/* Services List */}
                        <div className="p-8 bg-white/5">
                          <h4 className="text-xl font-semibold text-white mb-6">Services Include:</h4>
                          <ul className="space-y-3">
                            {card.services.map((service, index) => (
                              <li key={index} className="flex items-center">
                                <svg className="w-5 h-5 text-[hsl(var(--primary))] mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                                <span className="text-white/85">{service}</span>
                              </li>
                            ))}
                          </ul>
                          <button className="w-full mt-8 bg-[hsl(var(--primary))] hover:opacity-90 text-white py-3 px-6 rounded-lg font-semibold transition-colors duration-200">
                            Book {card.title}
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Dots Indicator */}
            <div className="flex justify-center mt-8 space-x-2">
              {mainServiceCards.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentCard(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    currentCard === index 
                      ? 'bg-[hsl(var(--primary))] scale-125' 
                      : 'bg-white/30 hover:bg-white/50'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Services Grid */}
      <section className="py-8 md:py-12 bg-gradient-to-br from-[hsl(var(--background))] via-[hsl(var(--gradient-via))] to-[hsl(var(--background))]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {serviceCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-[hsl(var(--primary))]">
                {category.category}
              </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {category.services.map((service, serviceIndex) => (
                  <div key={serviceIndex} className="glass-card lift rounded-xl overflow-hidden">
                    <div className="p-6">
                  <div className="text-center mb-6">
                        <h3 className="text-xl font-bold mb-3 text-white">{service.title}</h3>
                        <p className="text-white/80 mb-4 text-sm">{service.description}</p>
                  </div>
                  
                      <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                            <svg className="w-4 h-4 text-[hsl(var(--primary))] mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                            <span className="text-white/85 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                      <button className="w-full bg-[hsl(var(--primary))] hover:opacity-90 text-white py-2 px-4 rounded-lg font-semibold transition-colors duration-200 text-sm">
                    Book Now
                  </button>
                </div>
              </div>
            ))}
          </div>
            </div>
          ))}
        </div>
      </section>

      {/* Booking Information */}
      
      <Footer />
    </div>
  )
}

export default Services