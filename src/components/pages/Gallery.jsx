import React, { useState } from 'react'
import { Card } from '../ui/card'
import Footer from '../footer/Footer'

// Import all gallery images
import img1 from '../../assets/gallery/1.jpeg'
import img2 from '../../assets/gallery/2.jpeg'
import img3 from '../../assets/gallery/3.jpeg'
import img4 from '../../assets/gallery/4.jpeg'
import img5 from '../../assets/gallery/5.jpeg'
import img6 from '../../assets/gallery/6.jpeg'
import img7 from '../../assets/gallery/7.jpeg'
import img8 from '../../assets/gallery/8.jpeg'
import img9 from '../../assets/gallery/9.jpeg'
import img10 from '../../assets/gallery/10.jpeg'
import img11 from '../../assets/gallery/11.jpeg'
import img12 from '../../assets/gallery/12.jpeg'
import img13 from '../../assets/gallery/13.jpeg'
import img14 from '../../assets/gallery/14.jpeg'
import img16 from '../../assets/gallery/16.jpeg'
import img17 from '../../assets/gallery/17.jpeg'
import img19 from '../../assets/gallery/19.jpeg'
import img20 from '../../assets/gallery/20.jpeg'
import img21 from '../../assets/gallery/21.jpeg'
import img22 from '../../assets/gallery/22.jpeg'
import img24 from '../../assets/gallery/24.jpeg'
import img25 from '../../assets/gallery/25.jpeg'
import img26 from '../../assets/gallery/26.jpeg'
import img27 from '../../assets/gallery/27.jpeg'
import img28 from '../../assets/gallery/28.jpeg'
import img29 from '../../assets/gallery/29.jpeg'
import img30 from '../../assets/gallery/30.jpeg'
import img31 from '../../assets/gallery/31.jpeg'
import img32 from '../../assets/gallery/32.jpeg'
import img33 from '../../assets/gallery/33.jpeg'
import img34 from '../../assets/gallery/34.jpeg'
import img35 from '../../assets/gallery/35.jpeg'
import img36 from '../../assets/gallery/36.jpeg'
import img37 from '../../assets/gallery/37.jpeg'
import img38 from '../../assets/gallery/38.jpeg'
import img39 from '../../assets/gallery/39.jpeg'
import img40 from '../../assets/gallery/40.jpeg'
import img41 from '../../assets/gallery/41.jpeg'
import img42 from '../../assets/gallery/42.jpeg'
import img43 from '../../assets/gallery/43.jpeg'
import img44 from '../../assets/gallery/44.jpeg'
import img46 from '../../assets/gallery/46.jpeg'
import img47 from '../../assets/gallery/47.jpeg'
import img48 from '../../assets/gallery/48.jpeg'
import img49 from '../../assets/gallery/49.jpeg'
import img50 from '../../assets/gallery/50.jpeg'
import img51 from '../../assets/gallery/51.jpeg'
import img52 from '../../assets/gallery/52.jpeg'
import img53 from '../../assets/gallery/53.jpeg'
import img54 from '../../assets/gallery/54.jpeg'
import img55 from '../../assets/gallery/55.jpeg'
import img56 from '../../assets/gallery/56.jpeg'

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null)
  const [currentIndex, setCurrentIndex] = useState(0)

  // Gallery items with actual images from the gallery folder
  const galleryItems = [
    { id: 1, image: img1 },
    { id: 2, image: img2 },
    { id: 3, image: img3 },
    { id: 4, image: img4 },
    { id: 5, image: img5 },
    { id: 6, image: img6 },
    { id: 7, image: img7 },
    { id: 8, image: img8 },
    { id: 9, image: img9 },
    { id: 10, image: img10 },
    { id: 11, image: img11 },
    { id: 12, image: img12 },
    { id: 13, image: img13 },
    { id: 14, image: img14 },
    { id: 16, image: img16 },
    { id: 17, image: img17 },
    { id: 19, image: img19 },
    { id: 20, image: img20 },
    { id: 21, image: img21 },
    { id: 22, image: img22 },
    { id: 24, image: img24 },
    { id: 25, image: img25 },
    { id: 26, image: img26 },
    { id: 27, image: img27 },
    { id: 28, image: img28 },
    { id: 29, image: img29 },
    { id: 30, image: img30 },
    { id: 31, image: img31 },
    { id: 32, image: img32 },
    { id: 33, image: img33 },
    { id: 34, image: img34 },
    { id: 35, image: img35 },
    { id: 36, image: img36 },
    { id: 37, image: img37 },
    { id: 38, image: img38 },
    { id: 39, image: img39 },
    { id: 40, image: img40 },
    { id: 41, image: img41 },
    { id: 42, image: img42 },
    { id: 43, image: img43 },
    { id: 44, image: img44 },
    { id: 46, image: img46 },
    { id: 47, image: img47 },
    { id: 48, image: img48 },
    { id: 49, image: img49 },
    { id: 50, image: img50 },
    { id: 51, image: img51 },
    { id: 52, image: img52 },
    { id: 53, image: img53 },
    { id: 54, image: img54 },
    { id: 55, image: img55 },
    { id: 56, image: img56 }
  ]

  const openLightbox = (index) => {
    setCurrentIndex(index)
    setSelectedImage(galleryItems[index].image)
  }

  const closeLightbox = () => {
    setSelectedImage(null)
  }

  const goToPrevious = () => {
    const newIndex = currentIndex === 0 ? galleryItems.length - 1 : currentIndex - 1
    setCurrentIndex(newIndex)
    setSelectedImage(galleryItems[newIndex].image)
  }

  const goToNext = () => {
    const newIndex = currentIndex === galleryItems.length - 1 ? 0 : currentIndex + 1
    setCurrentIndex(newIndex)
    setSelectedImage(galleryItems[newIndex].image)
  }

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
            Gallery
          </h1>
          
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-8 md:py-12 bg-gradient-to-br from-[hsl(var(--background))] via-[hsl(var(--gradient-via))] to-[hsl(var(--background))]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3">
            {galleryItems.map((item, index) => (
              <Card 
                key={item.id} 
                className="glass-card overflow-hidden group cursor-pointer lift rounded-lg"
                onClick={() => openLightbox(index)}
              >
                <div className="relative aspect-square overflow-hidden">
                  {/* Image */}
                  <img 
                    src={item.image} 
                    alt={`Gallery image ${item.id}`}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  
                  {/* Overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center"
          onClick={closeLightbox}
        >
          {/* Close Button */}
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 z-50 text-white hover:text-gray-300 transition-colors"
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Previous Button */}
          <button
            onClick={(e) => {
              e.stopPropagation()
              goToPrevious()
            }}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-50 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full p-3 text-white transition-all"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Image */}
          <div 
            className="relative max-w-6xl max-h-[90vh] mx-auto px-16"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selectedImage}
              alt={`Gallery image ${currentIndex + 1}`}
              className="max-w-full max-h-[90vh] object-contain rounded-lg"
            />
            {/* Image Counter */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/70 text-white px-4 py-2 rounded-full text-sm">
              {currentIndex + 1} / {galleryItems.length}
            </div>
          </div>

          {/* Next Button */}
          <button
            onClick={(e) => {
              e.stopPropagation()
              goToNext()
            }}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-50 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full p-3 text-white transition-all"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      )}

      <Footer />
    </div>
  )
}

export default Gallery

