import { reviews } from '../data'

export default function Reviews() {
  return (
    <section id="reviews" className="py-20 bg-[#f0ebe0]">
      <div className="h-1 bg-[#8b4513]"></div>
      
      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <div className="inline-block bg-[#f5f0e8] text-[#8b4513] px-4 py-1 mb-4 font-serif text-sm border border-[#c4a882] uppercase tracking-widest">
            Reader Reviews
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-[#4a3728] mb-4 font-serif">
            What Readers Say
          </h2>
          <div className="flex items-center justify-center gap-3">
            <div className="h-px w-12 bg-[#c4a882]"></div>
            <div className="w-2 h-2 bg-[#8b4513] rotate-45"></div>
            <div className="h-px w-12 bg-[#c4a882]"></div>
          </div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {reviews.map((review) => (
            <div key={review.id} className="bg-[#f5f0e8] border-2 border-[#c4a882] p-8 hover:border-[#8b7355] transition-all"
              style={{ boxShadow: '4px 4px 0px #d4c4a8' }}>
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-[#8b4513]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                ))}
                <span className="ml-2 text-[#8b4513] font-bold font-serif">{review.title}</span>
              </div>
              
              <div className="flex flex-wrap items-center gap-2 mb-4 text-[#6b5740] text-sm font-serif">
                <span className="font-semibold text-[#4a3728]">{review.name}</span>
                <span className="text-[#c4a882]">|</span>
                <span>{review.date}</span>
                <span className="text-[#c4a882]">|</span>
                <span className="px-2 py-0.5 bg-[#e8dcc8] text-xs border border-[#c4a882]">{review.format}</span>
                {review.verified && (
                  <>
                    <span className="text-[#c4a882]">|</span>
                    <span className="text-[#2d5a27] flex items-center gap-1 text-xs">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                      </svg>
                      Verified
                    </span>
                  </>
                )}
              </div>
              
              <p className="text-[#4a3728] leading-relaxed font-serif italic border-l-4 border-[#c4a882] pl-4">
                "{review.text}"
              </p>
            </div>
          ))}
        </div>
      </div>
      
      <div className="h-1 bg-[#8b4513]"></div>
    </section>
  )
}