import { authorInfo, books } from '../data'

export default function Hero() {
  const handleScroll = (e, href) => {
    e.preventDefault()
    const targetId = href.replace('#', '')
    const element = document.getElementById(targetId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <section id="home" className="min-h-screen flex items-center bg-[#f5f0e8] relative overflow-hidden">
      {/* Vintage paper texture */}
      <div className="absolute inset-0 opacity-30" 
        style={{ 
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100' height='100' filter='url(%23noise)' opacity='0.08'/%3E%3C/svg%3E")`
        }}>
      </div>
      
      {/* Decorative border pattern */}
      <div className="absolute top-0 left-0 right-0 h-2 bg-[#8b4513]"></div>
      <div className="absolute bottom-0 left-0 right-0 h-2 bg-[#8b4513]"></div>
      
      <div className="relative z-10 max-w-6xl mx-auto px-4 py-20 md:py-32">
        <div className="grid md:grid-cols-5 gap-12 items-center">
          {/* Author Introduction - Takes 3 columns */}
          <div className="md:col-span-3 text-center md:text-left">
            <div className="inline-block bg-[#e8dcc8] text-[#8b4513] px-4 py-2 mb-6 font-serif text-sm border border-[#c4a882] uppercase tracking-widest">
              Author & Historian
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-[#4a3728] mb-4 font-serif leading-tight">
              {authorInfo.name}
            </h1>
            
            <div className="flex items-center gap-3 mb-6 justify-center md:justify-start">
              <div className="h-px w-16 bg-[#c4a882] hidden md:block"></div>
              <p className="text-xl text-[#8b4513] font-serif italic">
                Descendant of the Participants
              </p>
              <div className="h-px w-16 bg-[#c4a882] hidden md:block"></div>
            </div>
            
            <p className="text-lg text-[#5c4a3a] mb-8 leading-relaxed max-w-xl mx-auto md:mx-0 font-serif">
              Steeped in family lore passed down through generations, {authorInfo.name.split(' ')[0]} brings an unparalleled inside view of one of America's most legendary events — told by someone whose ancestors were actually there.
            </p>
            
            {/* Quick highlights */}
            <div className="flex flex-wrap gap-3 mb-8 justify-center md:justify-start">
              <div className="flex items-center gap-2 bg-[#f0ebe0] px-3 py-2 border border-[#c4a882]">
                <div className="w-2 h-2 bg-[#8b4513] rotate-45"></div>
                <span className="text-[#4a3728] font-serif text-sm">Family Historian</span>
              </div>
              <div className="flex items-center gap-2 bg-[#f0ebe0] px-3 py-2 border border-[#c4a882]">
                <div className="w-2 h-2 bg-[#8b4513] rotate-45"></div>
                <span className="text-[#4a3728] font-serif text-sm">Descendant of Andrew Potter</span>
              </div>
              <div className="flex items-center gap-2 bg-[#f0ebe0] px-3 py-2 border border-[#c4a882]">
                <div className="w-2 h-2 bg-[#8b4513] rotate-45"></div>
                <span className="text-[#4a3728] font-serif text-sm">Civil War History</span>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <a 
                href="#about" 
                onClick={(e) => handleScroll(e, '#about')}
                className="px-8 py-3.5 bg-[#8b4513] text-[#f5f0e8] font-bold hover:bg-[#a0522d] transition-all shadow-md inline-flex items-center justify-center gap-2 font-serif text-lg border border-[#6b3410]"
                style={{ boxShadow: '4px 4px 0px #6b3410' }}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"/>
                </svg>
                About the Author
              </a>
              <a 
                href="#book" 
                onClick={(e) => handleScroll(e, '#book')}
                className="px-8 py-3.5 bg-[#f5f0e8] text-[#8b4513] font-semibold hover:bg-[#e8dcc8] transition-all border-2 border-[#8b4513] inline-flex items-center justify-center gap-2 font-serif text-lg"
                style={{ boxShadow: '4px 4px 0px #c4a882' }}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"/>
                </svg>
                View the Book
              </a>
            </div>
          </div>
          
          {/* Book Cover - Takes 2 columns */}
          <div className="md:col-span-2">
            <div className="relative mx-auto max-w-xs md:max-w-sm">
              <div className="relative bg-[#f5f0e8] p-3 shadow-2xl border-2 border-[#8b7355]"
                style={{ boxShadow: '8px 8px 0px #8b7355' }}>
                <div className="aspect-[3/4] bg-[#e8dcc8] border border-[#c4a882]">
                  <img 
                    src="/images/robbery.jpg"
                    alt={books[0].title}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.style.display = 'none'
                      e.target.parentElement.classList.add('flex', 'items-center', 'justify-center', 'p-8')
                      e.target.parentElement.innerHTML = `<div class="text-center text-[#4a3728]"><div class="text-8xl mb-4">📖</div><h3 class="text-xl font-bold font-serif">${books[0].title}</h3><p class="text-[#8b7355] mt-2 font-serif text-sm">Historical Account</p></div>`
                    }}
                  />
                </div>
              </div>
              
              {/* Book title tag */}
              <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-[#8b4513] text-[#f5f0e8] px-4 py-1.5 shadow-lg font-serif text-sm whitespace-nowrap border border-[#6b3410]">
                {books[0].title}
              </div>
              
              {/* Featured badge */}
              <div className="absolute -top-3 -right-3 bg-[#c41e3a] text-[#f5f0e8] w-19 h-19 flex items-center justify-center shadow-lg transform rotate-12 font-bold text-sm font-serif rounded-full border-2 border-[#f5f0e8]">
                Featured
              </div>
            </div>
          </div>
        </div>
      </div>
      
      
    </section>
  )
}