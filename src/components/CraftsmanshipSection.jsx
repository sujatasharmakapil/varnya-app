import { useIntersectionObserver } from '../hooks/useIntersectionObserver'

export default function CraftsmanshipSection() {
  const [ref, visible] = useIntersectionObserver()

  return (
    <section id="craftsmanship" className="relative py-28 md:py-36 bg-charcoal-800 overflow-hidden">
      {/* Background texture */}
      <div className="absolute inset-0 pointer-events-none opacity-30"
        style={{ backgroundImage: 'radial-gradient(ellipse at 80% 50%, rgba(201,168,76,0.06) 0%, transparent 60%)' }} />

      <div ref={ref} className="max-w-7xl mx-auto px-6 md:px-16">
        {/* Section header */}
        <div className={`text-center mb-20 section-reveal ${visible ? 'visible' : ''}`}>
          <p className="text-xs tracking-[0.5em] text-gold/60 uppercase font-light mb-4">
            The Art of Packaging
          </p>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-stone-100 font-light leading-tight">
            Crafted by Indian Masters
          </h2>
          <div className="gold-divider w-24 mx-auto mt-6" />
          <p className="mt-6 text-stone-400 font-light text-lg max-w-2xl mx-auto leading-relaxed">
            Every VARNYA unit is housed in two layers of heritage craft — each a collector's piece before the formula even touches your skin.
          </p>
        </div>

        {/* Two-column craft cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">

          {/* Card 1 — Brass Container */}
          <div
            className={`group relative rounded-sm overflow-hidden hover-lift section-reveal ${visible ? 'visible' : ''}`}
            style={{ transitionDelay: '0.15s' }}
          >
            <div className="relative h-80 md:h-96 overflow-hidden">
              <img
                src="/assets/brass-container.png"
                alt="Moradabad Brass Container"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900 via-charcoal-900/40 to-transparent" />
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-8">
              <p className="text-xs tracking-[0.4em] text-gold/70 uppercase font-light mb-2">
                Inner Vessel
              </p>
              <h3 className="font-serif text-2xl md:text-3xl text-stone-100 font-light mb-3">
                Moradabad Brass
              </h3>
              <p className="text-stone-400 text-sm font-light leading-relaxed">
                Hand-turned by master kaarigars of Moradabad — India's brass capital — using centuries-old lathe craft. The pure brass vessel is skin-safe, antimicrobial, and engraved with the VARNYA lotus seal.
              </p>
              <div className="mt-4 flex gap-4">
                {['Pure Brass', 'Hand-Turned', 'Lotus Engraved'].map(tag => (
                  <span key={tag} className="text-[10px] tracking-[0.25em] border border-gold/30 text-gold/60 px-3 py-1 uppercase">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Card 2 — Tarkashi Box */}
          <div
            className={`group relative rounded-sm overflow-hidden hover-lift section-reveal ${visible ? 'visible' : ''}`}
            style={{ transitionDelay: '0.3s' }}
          >
            <div className="relative h-80 md:h-96 overflow-hidden">
              <img
                src="/assets/tarkashi-box.png"
                alt="Mainpuri Tarkashi Wooden Box"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900 via-charcoal-900/40 to-transparent" />
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-8">
              <p className="text-xs tracking-[0.4em] text-gold/70 uppercase font-light mb-2">
                Outer Sanctum
              </p>
              <h3 className="font-serif text-2xl md:text-3xl text-stone-100 font-light mb-3">
                Mainpuri Tarkashi
              </h3>
              <p className="text-stone-400 text-sm font-light leading-relaxed">
                A dying art of inlaying gold-brass wire into seasoned rosewood. Each box is hand-crafted in Mainpuri, UP — taking 3–5 days per piece. No two boxes are identical. Yours is a one-of-a-kind heirloom.
              </p>
              <div className="mt-4 flex gap-4">
                {['Rosewood', 'Brass Inlay', 'Heirloom Craft'].map(tag => (
                  <span key={tag} className="text-[10px] tracking-[0.25em] border border-gold/30 text-gold/60 px-3 py-1 uppercase">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom provenance strip */}
        <div className={`mt-16 grid grid-cols-1 sm:grid-cols-3 gap-px bg-gold/10 section-reveal ${visible ? 'visible' : ''}`} style={{ transitionDelay: '0.45s' }}>
          {[
            { num: '2', label: 'Heritage Crafts', sub: 'Moradabad + Mainpuri' },
            { num: '21', label: 'Units Only', sub: 'Batch 01 — 2026' },
            { num: '3–5', label: 'Days Per Box', sub: 'Handcrafted duration' },
          ].map(({ num, label, sub }) => (
            <div key={label} className="bg-charcoal-800 px-8 py-8 text-center">
              <p className="font-serif text-4xl text-gold font-light">{num}</p>
              <p className="text-stone-200 text-sm tracking-widest uppercase font-light mt-2">{label}</p>
              <p className="text-stone-600 text-xs mt-1">{sub}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
