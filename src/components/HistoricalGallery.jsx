import { useState } from 'react'
import { historicalPhotos } from '../data'

export default function HistoricalGallery() {
  const [selectedPhoto, setSelectedPhoto] = useState(null)

  return (
    <section id="gallery" className="py-20 bg-[#f5f0e8]">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-block bg-[#e8dcc8] text-[#8b4513] px-4 py-1 mb-4 font-serif text-sm border border-[#c4a882] uppercase tracking-widest">
            Historical Gallery
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-[#4a3728] mb-4 font-serif">
            Period Photographs
          </h2>
          <div className="flex items-center justify-center gap-3">
            <div className="h-px w-12 bg-[#c4a882]"></div>
            <div className="w-2 h-2 bg-[#8b4513] rotate-45"></div>
            <div className="h-px w-12 bg-[#c4a882]"></div>
          </div>
          <p className="text-[#6b5740] mt-4 font-serif max-w-2xl mx-auto">
            Rare historical photographs from the era of the James-Younger Gang and the Huntington Bank Robbery
          </p>
        </div>

        {/* Photo Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {historicalPhotos.map((photo) => (
            <div 
              key={photo.id}
              onClick={() => setSelectedPhoto(photo)}
              className="group cursor-pointer h-full"
            >
              <div className="bg-[#f5f0e8] border-2 border-[#c4a882] p-3 hover:border-[#8b7355] transition-all h-full flex flex-col"
                style={{ boxShadow: '4px 4px 0px #d4c4a8' }}>
                
                {/* Image Container - Fixed Aspect Ratio */}
                <div className="aspect-[4/3] bg-[#e8dcc8] overflow-hidden flex-shrink-0">
                  <img 
                    src={photo.src}
                    alt={photo.alt}
                    className="w-full h-full object-contain p-2 group-hover:scale-105 transition-transform duration-500 sepia-[0.3]"
                    onError={(e) => {
                      e.target.style.display = 'none'
                      e.target.parentElement.classList.add('flex', 'items-center', 'justify-center')
                      e.target.parentElement.innerHTML = `
                        <div class="text-center p-8">
                          <svg class="w-16 h-16 text-[#c4a882] mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"/>
                          </svg>
                          <p class="text-[#8b7355] font-serif text-sm">Historical Photo</p>
                          <p class="text-[#c4a882] text-xs mt-1">Image coming soon</p>
                        </div>
                      `
                    }}
                  />
                </div>
                
                {/* Caption - Fixed Height */}
                <div className="mt-3 px-2 flex-1 flex flex-col justify-between min-h-[80px]">
                  <p className="text-[#4a3728] font-serif text-sm leading-relaxed line-clamp-2">
                    {photo.caption}
                  </p>
                  <p className="text-[#8b4513] text-xs mt-2 font-serif flex items-center gap-1 group-hover:gap-2 transition-all">
                    Click to enlarge 
                    <svg className="w-3 h-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"/>
                    </svg>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedPhoto && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#2F363F]/80 backdrop-blur-sm"
          onClick={() => setSelectedPhoto(null)}
        >
          <div 
            className="bg-[#f5f0e8] max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border-2 border-[#8b7355]"
            onClick={(e) => e.stopPropagation()}
            style={{ boxShadow: '8px 8px 0px #6b5740' }}
          >
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b border-[#c4a882]">
              <span className="text-[#8b4513] text-xs font-serif uppercase tracking-wider">Historical Photograph</span>
              <button 
                onClick={() => setSelectedPhoto(null)}
                className="text-[#8b7355] hover:text-[#8b4513] transition-colors"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Image */}
            <div className="p-6">
              <div className="bg-[#e8dcc8] border border-[#c4a882] p-3">
                <img 
                  src={selectedPhoto.src}
                  alt={selectedPhoto.alt}
                  className="w-full h-auto max-h-[60vh] object-contain mx-auto sepia-[0.3]"
                  onError={(e) => {
                    e.target.style.display = 'none'
                    e.target.parentElement.classList.add('flex', 'items-center', 'justify-center', 'min-h-[300px]')
                    e.target.parentElement.innerHTML = `
                      <div class="text-center p-12">
                        <svg class="w-20 h-20 text-[#c4a882] mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"/>
                        </svg>
                        <p class="text-[#8b7355] font-serif">Image not available</p>
                      </div>
                    `
                  }}
                />
              </div>
              
              {/* Caption */}
              <div className="mt-4 bg-[#f0ebe0] border border-[#c4a882] p-4">
                <p className="text-[#4a3728] font-serif leading-relaxed">
                  {selectedPhoto.caption}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}