import React from 'react'
import { Card } from '../ui/card'
import Footer from '../footer/Footer'

const Gallery = () => {
  // Placeholder gallery items - replace with actual images
  const galleryItems = [
    {
      id: 1,
      title: "Bridal Makeup",
      category: "Makeup",
      image: "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=600&q=80"
    },
    {
      id: 2,
      title: "Hair Styling",
      category: "Hair",
      image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=600&q=80"
    },
    {
      id: 3,
      title: "Facial Treatment",
      category: "Skincare",
      image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=600&q=80"
    },
    {
      id: 4,
      title: "Event Makeup",
      category: "Makeup",
      image: "https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?w=600&q=80"
    },
    {
      id: 5,
      title: "Hair Color",
      category: "Hair",
      image: "https://images.unsplash.com/photo-1562322140-8baeececf3df?w=600&q=80"
    },
    {
      id: 6,
      title: "Skin Glow",
      category: "Skincare",
      image: "https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=600&q=80"
    },
    {
      id: 7,
      title: "Wedding Look",
      category: "Bridal",
      image: "https://images.unsplash.com/photo-1519741497674-611481863552?w=600&q=80"
    },
    {
      id: 8,
      title: "Natural Makeup",
      category: "Makeup",
      image: "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?w=600&q=80"
    },
    {
      id: 9,
      title: "Professional Styling",
      category: "Hair",
      image: "https://images.unsplash.com/photo-1560066984-138dadb4c035?w=600&q=80"
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
            Gallery
          </h1>
          
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-20 bg-gradient-to-br from-[hsl(var(--background))] via-[hsl(var(--gradient-via))] to-[hsl(var(--background))]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryItems.map((item) => (
              <Card 
                key={item.id} 
                className="glass-card overflow-hidden group cursor-pointer lift rounded-xl"
              >
                <div className="relative aspect-square overflow-hidden">
                  {/* Image */}
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  
                  {/* Overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <div className="inline-block px-3 py-1 bg-[hsl(var(--primary))]/90 rounded-full text-xs font-semibold text-white mb-2">
                        {item.category}
                      </div>
                      <h3 className="text-xl font-bold text-white">
                        {item.title}
                      </h3>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Info Text */}
          
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default Gallery

