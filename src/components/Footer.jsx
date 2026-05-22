import { authorInfo, navLinks } from '../data'

export default function Footer() {
  const handleScroll = (e, href) => {
    e.preventDefault()
    const targetId = href.replace('#', '')
    const element = document.getElementById(targetId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <footer className="bg-[#4a3728] text-[#f5f0e8]">
      <div className="h-1 bg-[#8b4513]"></div>
      
      {/* Launch Portal Banner */}
      <div className="bg-[#3d2b1f] border-b border-[#8b7355]">
        <div className="max-w-6xl mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-center md:text-left">
              <h3 className="text-xl font-bold text-[#f5f0e8] font-serif">Ready to Publish?</h3>
              <p className="text-[#c4a882] font-serif text-sm">Access the go-live portal for your book</p>
            </div>
            <a
              href="https://buy.stripe.com/7sY5kEdVm6vNfRU8Ey2kw07"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center gap-2 px-8 py-3 bg-[#daa520] text-[#4a3728] font-bold font-serif text-lg hover:bg-[#c4941e] transition-all shadow-lg border border-[#b8860b]"
              style={{ boxShadow: '4px 4px 0px #8b6914' }}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
              Launch & Go-Live Portal
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
            </a>
          </div>
        </div>
      </div>
      
      {/* Main Footer Content */}
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-[#8b4513] flex items-center justify-center text-[#f5f0e8] font-bold text-lg"
                style={{ clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)' }}>
                BW
              </div>
              <h3 className="text-xl font-bold text-[#f5f0e8] font-serif">
                {authorInfo.name}
              </h3>
            </div>
            <p className="text-[#c4a882] leading-relaxed font-serif text-sm">
              Historical author bringing untold stories of the James-Younger Gang to light through family accounts and original research.
            </p>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-[#f5f0e8] font-serif border-b border-[#8b7355] pb-2">Quick Links</h4>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href}
                    onClick={(e) => handleScroll(e, link.href)}
                    className="text-[#c4a882] hover:text-[#f5f0e8] transition-colors font-serif text-sm flex items-center gap-2 group"
                  >
                    <span className="text-[#8b7355] group-hover:text-[#daa520] transition-colors">▸</span>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-[#f5f0e8] font-serif border-b border-[#8b7355] pb-2">Get in Touch</h4>
            <div className="space-y-3">
              <a 
                href={`mailto:${authorInfo.email}`} 
                className="flex items-center gap-2 text-[#c4a882] hover:text-[#f5f0e8] transition-colors font-serif text-sm group"
              >
                <svg className="w-4 h-4 text-[#8b7355] group-hover:text-[#daa520] transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                </svg>
                {authorInfo.email}
              </a>
              <p className="flex items-center gap-2 text-[#c4a882] font-serif text-sm">
                <svg className="w-4 h-4 text-[#8b7355]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"/>
                </svg>
                Historical Author
              </p>
            </div>
            
            {/* Book reference */}
            <div className="mt-6 pt-4 border-t border-[#8b7355]">
              <p className="text-[#8b7355] font-serif text-xs italic">
                "Do not mistake this book as just another rehash of old news."
              </p>
            </div>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="border-t border-[#8b7355] pt-8 text-center">
          <p className="text-[#8b7355] font-serif text-sm">
            &copy; {new Date().getFullYear()} {authorInfo.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}