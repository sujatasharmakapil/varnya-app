import { useEffect, useState } from 'react'

export default function HeroSection() {
  const [loaded, setLoaded] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 100)
    return () => clearTimeout(t)
  }, [])

  const navLinks = [
    { href: '#craftsmanship', label: 'Craft' },
    { href: '#ingredients', label: 'Formula' },
    { href: '#booking', label: 'Pre-Book' },
  ]

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-charcoal-900">
      {/* Ambient background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-gold/5 blur-[120px]" />
        <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] rounded-full bg-amber-900/10 blur-[100px]" />
      </div>

      {/* Decorative corner lines — hidden on very small screens */}
      <div className="hidden sm:block absolute top-8 left-8 w-12 h-12 md:w-16 md:h-16 border-t border-l border-gold/30" />
      <div className="hidden sm:block absolute top-8 right-8 w-12 h-12 md:w-16 md:h-16 border-t border-r border-gold/30" />
      <div className="hidden sm:block absolute bottom-8 left-8 w-12 h-12 md:w-16 md:h-16 border-b border-l border-gold/30" />
      <div className="hidden sm:block absolute bottom-8 right-8 w-12 h-12 md:w-16 md:h-16 border-b border-r border-gold/30" />

      {/* Nav */}
      <nav
        className={`absolute top-0 left-0 right-0 z-50 transition-all duration-1000 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'}`}
      >
        <div className="flex items-center justify-between px-5 sm:px-8 md:px-16 py-5">
          <span className="text-xs tracking-[0.3em] text-gold/60 uppercase font-light">Est. 2026</span>

          {/* Desktop nav links */}
          <div className="hidden sm:flex gap-6 md:gap-8 text-xs tracking-[0.25em] text-stone-400 uppercase font-light">
            {navLinks.map(({ href, label }) => (
              <a key={label} href={href} className="hover:text-gold transition-colors duration-300">{label}</a>
            ))}
          </div>

          {/* Mobile hamburger */}
          <button
            className="sm:hidden flex flex-col gap-1.5 p-1 text-gold/70"
            onClick={() => setMenuOpen(o => !o)}
            aria-label="Toggle menu"
          >
            <span className={`block w-6 h-px bg-gold/70 transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`block w-6 h-px bg-gold/70 transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
            <span className={`block w-6 h-px bg-gold/70 transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </button>
        </div>

        {/* Mobile dropdown menu */}
        {menuOpen && (
          <div className="sm:hidden bg-charcoal-900/95 backdrop-blur border-t border-gold/10 px-6 py-4 flex flex-col gap-4">
            {navLinks.map(({ href, label }) => (
              <a
                key={label}
                href={href}
                onClick={() => setMenuOpen(false)}
                className="text-xs tracking-[0.3em] text-stone-400 uppercase font-light hover:text-gold transition-colors duration-300 py-1"
              >
                {label}
              </a>
            ))}
          </div>
        )}
      </nav>

      {/* Main hero content */}
      <div className="relative z-10 flex flex-col items-center text-center px-5 sm:px-6 max-w-5xl mx-auto pt-24 sm:pt-0">

        {/* Logo mark */}
        <div
          className={`mb-6 sm:mb-8 transition-all duration-1000 delay-200 ${loaded ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}
        >
          <div className="relative inline-block">
            <div className="absolute inset-0 rounded-full bg-gold/10 blur-2xl scale-150 animate-pulse" />
            <img
              src="/assets/logo.png"
              alt="VARNYA Logo"
              className="relative w-20 h-20 sm:w-28 sm:h-28 md:w-36 md:h-36 object-contain drop-shadow-2xl animate-float"
            />
          </div>
        </div>

        {/* Brand name */}
        <div
          className={`transition-all duration-1000 delay-400 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
        >
          <p className="text-[10px] sm:text-xs md:text-sm tracking-[0.4em] sm:tracking-[0.6em] text-gold/60 uppercase font-light mb-3">
            Ultra-Luxury Ayurvedic Skincare
          </p>
          <h1 className="font-serif text-6xl sm:text-7xl md:text-9xl lg:text-[10rem] font-light tracking-widest text-gold-gradient leading-none">
            VARNYA
          </h1>
          <p className="text-[10px] sm:text-xs tracking-[0.3em] sm:tracking-[0.5em] text-stone-500 uppercase font-light mt-3">
            वर्ण्य — The Radiance Formula
          </p>
        </div>

        {/* Tagline */}
        <div
          className={`mt-6 sm:mt-10 transition-all duration-1000 delay-600 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
        >
          <p className="font-serif italic text-base sm:text-xl md:text-2xl text-stone-300 font-light max-w-xs sm:max-w-xl leading-relaxed">
            "Where ancient scripture meets the art of Moradabad brass and the soul of Mainpuri tarkashi."
          </p>
        </div>

        {/* CTA row */}
        <div
          className={`mt-8 sm:mt-12 flex flex-col sm:flex-row gap-3 sm:gap-4 items-center w-full sm:w-auto transition-all duration-1000 delay-700 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
        >
          <a
            href="#booking"
            className="group relative w-full sm:w-auto text-center px-8 sm:px-10 py-4 bg-gold text-charcoal-900 text-xs tracking-[0.3em] uppercase font-semibold rounded-none overflow-hidden transition-all duration-300 hover:shadow-[0_0_40px_rgba(201,168,76,0.4)]"
          >
            <span className="relative z-10">Pre-Book Now — ₹3,000</span>
            <div className="absolute inset-0 bg-gold-300 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-300" />
          </a>
          <a
            href="#ingredients"
            className="w-full sm:w-auto text-center px-8 sm:px-10 py-4 border border-gold/40 text-gold text-xs tracking-[0.3em] uppercase font-light hover:border-gold hover:bg-gold/5 transition-all duration-300"
          >
            Discover the Formula
          </a>
        </div>

        {/* Scarcity note */}
        <div
          className={`mt-6 sm:mt-8 transition-all duration-1000 delay-[800ms] ${loaded ? 'opacity-100' : 'opacity-0'}`}
        >
          <p className="text-[10px] sm:text-xs tracking-[0.3em] text-stone-500 uppercase">
            <span className="text-gold/70">✦</span>&nbsp; Strictly 21 Units. Batch 01. &nbsp;<span className="text-gold/70">✦</span>
          </p>
        </div>
      </div>

      {/* Product image — brass container */}
      <div
        className={`relative mt-10 sm:mt-16 transition-all duration-1200 delay-[900ms] ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
      >
        <div className="absolute inset-0 bg-gold/8 blur-3xl rounded-full scale-75 translate-y-8" />
        <img
          src="/assets/brass-container.png"
          alt="VARNYA Moradabad Brass Container"
          className="relative w-48 sm:w-72 md:w-96 lg:w-[420px] object-contain drop-shadow-[0_30px_80px_rgba(201,168,76,0.25)] animate-float"
          style={{ animationDelay: '1s' }}
        />
      </div>

      {/* Scroll indicator */}
      <div className={`absolute bottom-6 sm:bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 transition-all duration-1000 delay-1000 ${loaded ? 'opacity-100' : 'opacity-0'}`}>
        <span className="text-[10px] tracking-[0.4em] text-stone-600 uppercase">Scroll</span>
        <div className="w-px h-8 sm:h-12 bg-gradient-to-b from-gold/50 to-transparent animate-pulse" />
      </div>
    </section>
  )
}
