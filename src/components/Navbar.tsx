'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState, useEffect } from 'react'

export default function Navbar() {
  const pathname = usePathname()
  const isHome = pathname === '/'
  const [scrolled, setScrolled] = useState(!isHome)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    if (isHome) {
      setScrolled(window.scrollY > 50)
      window.addEventListener('scroll', handleScroll)
      return () => window.removeEventListener('scroll', handleScroll)
    }
    setScrolled(true)
  }, [isHome])

  const navLinks = [
    { href: '/#about', label: 'Haqqımızda' },
    { href: '/menu', label: 'Menyu' },
    { href: '/#reservation', label: 'Rezerv' },
    { href: '/#contact', label: 'Əlaqə' },
  ]

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-navy/95 backdrop-blur-md shadow-lg shadow-navy/20'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20 md:h-24">
          <Link
            href="/"
            className="text-xl md:text-2xl font-serif font-bold text-gold tracking-wide hover:text-gold-light transition-colors"
          >
            Baku Taste
          </Link>

          <div className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-white/70 hover:text-gold transition-colors tracking-wider uppercase font-medium"
              >
                {link.label}
              </a>
            ))}
            <a
              href="/#reservation"
              className="bg-gold text-navy px-7 py-2.5 rounded-sm text-sm font-semibold hover:bg-gold-light transition-colors tracking-wide"
            >
              Rezerv
            </a>
          </div>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden text-white p-2 hover:text-gold transition-colors"
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="md:hidden absolute top-20 left-0 w-full bg-navy border-t border-white/10 shadow-xl">
          <div className="px-6 py-8 space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="block text-white/80 hover:text-gold py-3 text-sm tracking-wider uppercase font-medium transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href="/#reservation"
              onClick={() => setMobileOpen(false)}
              className="block mt-4 bg-gold text-navy text-center py-3 rounded-sm text-sm font-semibold tracking-wide"
            >
              Masa Rezerv Et
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}
