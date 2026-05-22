import { contactInfo } from '../data'

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-[#f5f0e8]">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-block bg-[#e8dcc8] text-[#8b4513] px-4 py-1 mb-4 font-serif text-sm border border-[#c4a882] uppercase tracking-widest">
            Get in Touch
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-[#4a3728] mb-4 font-serif">
            Order the Book
          </h2>
          <div className="flex items-center justify-center gap-3">
            <div className="h-px w-12 bg-[#c4a882]"></div>
            <div className="w-2 h-2 bg-[#8b4513] rotate-45"></div>
            <div className="h-px w-12 bg-[#c4a882]"></div>
          </div>
        </div>
        
        <div className="max-w-xl mx-auto">
          <div className="bg-[#f0ebe0] border-2 border-dashed border-[#8b7355] p-8 md:p-12 text-center"
            style={{ boxShadow: '6px 6px 0px #d4c4a8' }}>
            <div className="w-20 h-20 bg-[#8b4513] flex items-center justify-center mx-auto mb-6"
              style={{ clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)' }}>
              <svg className="w-10 h-10 text-[#f5f0e8]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
              </svg>
            </div>
            
            <h3 className="text-2xl font-bold text-[#4a3728] mb-4 font-serif">Contact the Author</h3>
            <p className="text-[#6b5740] mb-8 font-serif">
              For inquiries, interviews, or to order a copy:
            </p>
            
            <a 
              href={`mailto:${contactInfo.email}`}
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#8b4513] text-[#f5f0e8] font-bold hover:bg-[#a0522d] transition-all shadow-md text-lg font-serif border border-[#6b3410]"
              style={{ boxShadow: '4px 4px 0px #6b3410' }}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
              </svg>
              {contactInfo.email}
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}