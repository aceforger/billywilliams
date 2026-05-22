import { useState, useEffect } from 'react'
import { navLinks, authorInfo } from '../data'

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
      const sections = navLinks.map(link => link.href.replace('#', ''))
      const scrollPosition = window.scrollY + 100
      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = (e, href) => {
    e.preventDefault()
    const targetId = href.replace('#', '')
    const element = document.getElementById(targetId)
    if (element) {
      setIsMobileMenuOpen(false)
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-[#f5f0e8] shadow-md border-b-2 border-[#8b7355]' 
        : 'bg-[#f5f0e8]/90 backdrop-blur-sm'
    }`}>
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          <a href="#home" onClick={(e) => handleNavClick(e, '#home')} className="flex items-center gap-3 group">
            <div className="w-10 h-10 bg-[#8b4513] flex items-center justify-center text-[#f5f0e8] font-bold text-lg group-hover:bg-[#a0522d] transition-colors"
              style={{ clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)' }}>
              BW
            </div>
            <span className="font-bold text-lg text-[#4a3728] font-serif tracking-wide">
              {authorInfo.name}
            </span>
          </a>

          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`px-4 py-2 text-sm font-medium transition-all font-serif border-b-2 ${
                  activeSection === link.href.replace('#', '')
                    ? 'text-[#8b4513] border-[#8b4513]'
                    : 'text-[#6b5740] border-transparent hover:text-[#8b4513] hover:border-[#c4a882]'
                }`}
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, '#contact')}
              className="ml-4 px-6 py-2.5 bg-[#8b4513] text-[#f5f0e8] font-semibold text-sm hover:bg-[#a0522d] transition-all shadow-md font-serif border border-[#6b3410]"
              style={{ boxShadow: '3px 3px 0px #6b3410' }}
            >
              Get the Book
            </a>
          </div>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-[#4a3728] hover:bg-[#e8dcc8] rounded transition-colors"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        <div className={`md:hidden transition-all duration-300 overflow-hidden ${
          isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className="bg-[#f5f0e8] border-2 border-[#8b7355] mt-2 p-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`block px-4 py-3 font-medium transition-colors font-serif ${
                  activeSection === link.href.replace('#', '')
                    ? 'text-[#8b4513] bg-[#e8dcc8]'
                    : 'text-[#6b5740] hover:text-[#8b4513] hover:bg-[#f0ebe0]'
                }`}
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, '#contact')}
              className="block mt-2 px-4 py-3 bg-[#8b4513] text-[#f5f0e8] text-center font-semibold hover:bg-[#a0522d] transition-colors font-serif"
            >
              Get the Book
            </a>
          </div>
        </div>
      </div>
    </nav>
  )
}