import { books } from '../data'

export default function BookDetail() {
  return (
    <section id="book" className="py-20 bg-[#f5f0e8]">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-block bg-[#e8dcc8] text-[#8b4513] px-4 py-1 mb-4 font-serif text-sm border border-[#c4a882] uppercase tracking-widest">
            The Book
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-[#4a3728] mb-4 font-serif">
            {books[0].title}
          </h2>
          <p className="text-xl text-[#8b4513] font-serif italic">{books[0].subtitle}</p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="relative">
            <div className="bg-[#f5f0e8] p-3 border-2 border-[#8b7355]"
              style={{ boxShadow: '8px 8px 0px #c4a882' }}>
              <div className="aspect-[3/4] bg-[#e8dcc8] border border-[#c4a882]">
                <img 
                  src={books[0].coverImage}
                  alt={books[0].title}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.style.display = 'none'
                    e.target.parentElement.classList.add('flex', 'items-center', 'justify-center', 'p-8')
                    e.target.parentElement.innerHTML = `<div class="text-center text-[#4a3728]"><div class="text-8xl mb-4">📖</div><h3 class="text-2xl font-bold font-serif">${books[0].title}</h3></div>`
                  }}
                />
              </div>
            </div>
          </div>
          
          <div className="space-y-6">
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-[#e8dcc8] text-[#8b4513] text-sm font-semibold border border-[#c4a882] font-serif">Historical</span>
              <span className="px-3 py-1 bg-[#e8dcc8] text-[#8b4513] text-sm font-semibold border border-[#c4a882] font-serif">True Crime</span>
              <span className="px-3 py-1 bg-[#e8dcc8] text-[#8b4513] text-sm font-semibold border border-[#c4a882] font-serif">West Virginia</span>
              <span className="px-3 py-1 bg-[#e8dcc8] text-[#8b4513] text-sm font-semibold border border-[#c4a882] font-serif">1875</span>
            </div>
            
            <p className="text-[#4a3728] leading-relaxed text-lg font-serif">
              {books[0].description}
            </p>
            
            <div className="bg-[#f0ebe0] border-2 border-dashed border-[#c4a882] p-6">
              <h3 className="text-[#8b4513] font-bold text-lg mb-4 font-serif flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
                What's Inside:
              </h3>
              <ul className="space-y-3">
                {[
                  "Shocking new information from court records",
                  "Many 1875 period photographs",
                  "Inside view of how the James-Younger Gang operated",
                  "Written by a descendant of the participants"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-[#5c4a3a] font-serif">
                    <span className="text-[#8b4513] mt-1">✦</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <a 
              href="mailto:lollywog@suddenlink.net"
              className="w-full md:w-auto px-8 py-4 bg-[#8b4513] text-[#f5f0e8] font-bold hover:bg-[#a0522d] transition-all shadow-md inline-flex items-center justify-center gap-2 font-serif text-lg border border-[#6b3410]"
              style={{ boxShadow: '4px 4px 0px #6b3410' }}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
              </svg>
              Order Your Copy
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}