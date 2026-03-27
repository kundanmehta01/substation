import { useState, useEffect } from 'react'
import { Link as ScrollLink } from 'react-scroll'
import { Link as RouterLink, useLocation, useNavigate } from 'react-router-dom'
import { Menu, X, Zap } from 'lucide-react'
import logoImg from '../assets/logo.png'

const navLinks = [
  { label: 'Home', to: 'home' },
  { label: 'About Us', to: 'about' },
  { label: 'Projects', to: 'projects' },
  { label: 'Vision', to: 'vision' },
  { label: 'Contact', to: 'contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()
  const navigate = useNavigate()

  const isHome = location.pathname === '/'

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', fn)
    // Run once on mount in case we are loaded already scrolled
    fn()
    return () => window.removeEventListener('scroll', fn)
  }, [])

  const handleNavClick = (to) => {
    setMenuOpen(false)
    if (!isHome) {
      navigate('/')
      setTimeout(() => {
        const element = document.getElementById(to)
        if (element) {
          const y = element.getBoundingClientRect().top + window.scrollY - 64
          window.scrollTo({ top: y, behavior: 'smooth' })
        }
      }, 100)
    }
  }

  // Determine styling based on scroll state & current page
  // Transparent if on Home page and at the top, otherwise solid white
  const isTransparent = isHome && !scrolled
  const navBgClass = isTransparent ? 'bg-transparent' : 'bg-white shadow-sm border-b border-neutral-200'
  const textClass = isTransparent ? 'text-white' : 'text-neutral-900'
  const linkClass = isTransparent ? 'text-white/90 hover:text-white' : 'text-neutral-600 hover:text-brand-900'
  const logoBgClass = isTransparent ? 'bg-white text-brand-900 border border-white/20' : 'bg-brand-900 text-white'

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${navBgClass}`}>
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">

        {/* Logo */}
        <RouterLink to="/" className="flex items-center cursor-pointer">
          <img 
            src={logoImg} 
            alt="ElektraServe Logo" 
            className={`h-10 md:h-12 w-auto transition-all duration-300 ${isTransparent ? 'brightness-0 invert' : ''}`} 
          />
        </RouterLink>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map(({ label, to }) => (
            <li key={to}>
              {isHome ? (
                <ScrollLink
                  to={to}
                  smooth
                  duration={200}
                  offset={-64}
                  spy
                  activeClass={isTransparent ? 'font-bold opacity-100 border-b-2 border-white' : 'text-brand-900 font-bold border-b-2 border-brand-900'}
                  className={`text-sm cursor-pointer transition-all duration-150 font-medium py-2 ${linkClass}`}
                >
                  {label}
                </ScrollLink>
              ) : (
                <button
                  onClick={() => handleNavClick(to)}
                  className={`text-sm cursor-pointer transition-all duration-150 font-medium py-2 ${linkClass}`}
                >
                  {label}
                </button>
              )}
            </li>
          ))}
          <li>
            <RouterLink
              to="/ketan-gandhi"
              className={`text-sm cursor-pointer transition-all duration-150 font-medium py-2 ${!isHome && location.pathname === '/ketan-gandhi' ? (isTransparent ? 'font-bold' : 'text-brand-900 font-bold') : linkClass}`}
            >
              Ketan Gandhi
            </RouterLink>
          </li>
        </ul>

        {/* CTA */}
        <a
          href="mailto:info@elektraserve.in"
          className={`hidden md:inline-flex items-center gap-2 text-sm font-semibold px-6 py-2.5 rounded-full border transition-all duration-300 ${isTransparent ? 'border-white/40 text-white hover:bg-white hover:text-brand-900' : 'border-brand-900 bg-brand-900 text-white hover:bg-brand-800'}`}
        >
          Contact Us
        </a>

        {/* Hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className={`md:hidden p-2 transition-colors ${textClass}`}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X className="w-6 h-6 text-neutral-900" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile drawer */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-neutral-100 px-6 py-4 flex flex-col gap-3 shadow-lg absolute w-full top-16 left-0">
          {navLinks.map(({ label, to }) => (
            isHome ? (
              <ScrollLink
                key={to}
                to={to}
                smooth
                duration={500}
                offset={-64}
                onClick={() => setMenuOpen(false)}
                className="text-sm font-medium text-neutral-700 hover:text-brand-900 cursor-pointer transition-colors py-2 border-b border-neutral-100 last:border-0"
              >
                {label}
              </ScrollLink>
            ) : (
              <button
                key={to}
                onClick={() => handleNavClick(to)}
                className="text-sm text-left font-medium text-neutral-700 hover:text-brand-900 cursor-pointer transition-colors py-2 border-b border-neutral-100 last:border-0"
              >
                {label}
              </button>
            )
          ))}
          <RouterLink
            to="/ketan-gandhi"
            onClick={() => setMenuOpen(false)}
            className="text-sm font-medium text-neutral-700 hover:text-brand-900 cursor-pointer transition-colors py-2 border-b border-neutral-100 last:border-0"
          >
            Ketan Gandhi
          </RouterLink>
        </div>
      )}
    </nav>
  )
}
