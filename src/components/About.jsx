import { authorInfo } from '../data'

export default function About() {
  return (
    <section id="about" className="py-20 bg-[#f0ebe0]">
      {/* Top border decoration */}
      <div className="h-1 bg-[#8b4513]"></div>
      
      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <div className="inline-block bg-[#f5f0e8] text-[#8b4513] px-4 py-1 mb-4 font-serif text-sm border border-[#c4a882] uppercase tracking-widest">
            About the Author
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-[#4a3728] mb-4 font-serif">
            {authorInfo.name}
          </h2>
          <div className="flex items-center justify-center gap-3">
            <div className="h-px w-12 bg-[#c4a882]"></div>
            <div className="w-2 h-2 bg-[#8b4513] rotate-45"></div>
            <div className="h-px w-12 bg-[#c4a882]"></div>
          </div>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {/* Main Bio - Spans 2 columns */}
          <div className="md:col-span-2 space-y-6">
            <div className="bg-[#f5f0e8] border-2 border-[#c4a882] p-8 md:p-10"
              style={{ boxShadow: '6px 6px 0px #d4c4a8' }}>
              <div className="flex items-start gap-4 mb-6">
                <div className="text-6xl text-[#8b4513] font-serif leading-none font-bold">"</div>
                <p className="text-[#4a3728] leading-relaxed text-lg font-serif">
                  {authorInfo.bio}
                </p>
              </div>
              
              {/* Signature */}
              <div className="border-t border-[#c4a882] pt-6 mt-6">
                <p className="text-[#8b4513] font-serif text-2xl italic">— {authorInfo.name}</p>
                <p className="text-[#8b7355] font-serif text-sm mt-1">Author & Historian</p>
              </div>
            </div>
            
            {/* Family Connection Card */}
            <div className="bg-[#f5f0e8] border-2 border-dashed border-[#8b7355] p-6"
              style={{ boxShadow: '4px 4px 0px #d4c4a8' }}>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-[#8b4513] flex items-center justify-center"
                  style={{ clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)' }}>
                  <svg className="w-5 h-5 text-[#f5f0e8]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/>
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-[#4a3728] font-serif">Direct Family Connection</h3>
              </div>
              <p className="text-[#5c4a3a] leading-relaxed font-serif">
                A descendant of <span className="text-[#8b4513] font-semibold">Andrew Potter</span> and related to others who played part in the 1875 James-Younger gang robbery of the Bank of Huntington. As a boy, he was entertained by <span className="text-[#8b4513] font-semibold">James Potter</span>, son of Andrew and his Great-Grandfather, who knew Jesse and others of the James-Younger gang in his youth.
              </p>
            </div>
          </div>
          
          {/* Sidebar - Stats & Highlights */}
          <div className="space-y-6">
            {/* Key Stats */}
            <div className="bg-[#8b4513] text-[#f5f0e8] p-6"
              style={{ boxShadow: '6px 6px 0px #6b3410' }}>
              <h3 className="text-lg font-bold mb-4 font-serif border-b border-[#a0522d] pb-2">Key Facts</h3>
              <div className="space-y-4">
                <div className="text-center py-3 border border-[#a0522d]">
                  <div className="text-3xl font-bold font-serif">1875</div>
                  <p className="text-sm text-[#e8dcc8] font-serif mt-1">The Historic Year</p>
                </div>
                <div className="text-center py-3 border border-[#a0522d]">
                  <div className="text-3xl font-bold font-serif">1st</div>
                  <p className="text-sm text-[#e8dcc8] font-serif mt-1">Family Account Published</p>
                </div>
                <div className="text-center py-3 border border-[#a0522d]">
                  <div className="text-3xl font-bold font-serif">100+</div>
                  <p className="text-sm text-[#e8dcc8] font-serif mt-1">Period Photographs</p>
                </div>
              </div>
            </div>
            
            {/* Quote Card */}
            <div className="bg-[#f5f0e8] border-2 border-[#c4a882] p-6"
              style={{ boxShadow: '4px 4px 0px #d4c4a8' }}>
              <svg className="w-8 h-8 text-[#c4a882] mb-3" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
              <p className="text-[#4a3728] font-serif italic leading-relaxed text-sm mb-3">
                "Being a curious lad, the author asked many questions and received exact and detailed answers."
              </p>
              <p className="text-[#8b4513] font-serif text-xs font-semibold">— From the Author's Story</p>
            </div>
            
            {/* Research Methods */}
            <div className="bg-[#f5f0e8] border-2 border-[#c4a882] p-6"
              style={{ boxShadow: '4px 4px 0px #d4c4a8' }}>
              <h3 className="text-lg font-bold text-[#4a3728] mb-3 font-serif flex items-center gap-2">
                <svg className="w-5 h-5 text-[#8b4513]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
                </svg>
                Research Sources
              </h3>
              <ul className="space-y-2">
                {[
                  "Original court records",
                  "Family oral histories",
                  "Period photographs",
                  "KGC documentation",
                  "First-hand accounts"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-2 text-[#5c4a3a] font-serif text-sm">
                    <svg className="w-4 h-4 text-[#8b4513] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4"/>
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        
        {/* Bottom highlight banner */}
        <div className="mt-12 bg-[#f5f0e8] border-2 border-dashed border-[#8b7355] p-6 text-center"
          style={{ boxShadow: '4px 4px 0px #d4c4a8' }}>
          <p className="text-[#4a3728] font-serif text-lg">
            <span className="text-[#8b4513] font-bold">✦</span> Now well into his golden years, the author presents his 
            <span className="text-[#8b4513] font-semibold"> unparalleled inside view</span> of how the Knights of the Golden Circle and their "A-Team", the James-Younger Gang, really operated. 
            <span className="text-[#8b4513] font-bold"> ✦</span>
          </p>
        </div>
      </div>
      
      <div className="h-1 bg-[#8b4513]"></div>
    </section>
  )
}