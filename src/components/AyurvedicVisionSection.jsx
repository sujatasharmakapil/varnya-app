import { useIntersectionObserver } from '../hooks/useIntersectionObserver'

const SKIN_TYPES = [
  { type: 'Normal', hindi: 'सम', icon: '✦', desc: 'Maintains balance year-round. VARNYA refines tone and adds luminosity.' },
  { type: 'Oily', hindi: 'स्निग्ध', icon: '◈', desc: 'Red sandalwood + mulethi regulate excess sebum while brightening.' },
  { type: 'Dry', hindi: 'रूक्ष', icon: '◇', desc: 'Aloe vera + gulab deliver deep moisture without any greasy residue.' },
  { type: 'Combination', hindi: 'मिश्र', icon: '⊕', desc: 'Kamal pushp + sariva balance zones and unify skin texture.' },
  { type: 'Sensitive', hindi: 'संवेदनशील', icon: '○', desc: 'Moti pishti + kesar calm reactivity and strengthen the skin barrier.' },
]

export default function AyurvedicVisionSection() {
  const [ref, visible] = useIntersectionObserver()

  return (
    <section id="vision" className="relative py-28 md:py-36 bg-charcoal-800 overflow-hidden">
      {/* BG ornament */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-full bg-gradient-to-b from-transparent via-gold/10 to-transparent pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full border border-gold/5 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] rounded-full border border-gold/3 pointer-events-none" />

      <div ref={ref} className="max-w-6xl mx-auto px-6 md:px-16 relative z-10">
        {/* Header */}
        <div className={`text-center mb-20 section-reveal ${visible ? 'visible' : ''}`}>
          <p className="text-xs tracking-[0.5em] text-gold/60 uppercase font-light mb-4">The Philosophy</p>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-stone-100 font-light leading-tight">
            Rooted in Classical<br />
            <em className="text-gold/80">Ayurveda</em>
          </h2>
          <div className="gold-divider w-24 mx-auto mt-6" />
        </div>

        {/* Two-column philosophy text */}
        <div className={`grid grid-cols-1 md:grid-cols-2 gap-12 mb-24 section-reveal ${visible ? 'visible' : ''}`} style={{ transitionDelay: '0.15s' }}>
          <div className="space-y-5">
            <p className="font-serif italic text-2xl text-gold/70 leading-relaxed">
              "वर्ण्य — that which bestows a luminous complexion."
            </p>
            <p className="text-stone-400 font-light leading-relaxed text-base">
              The formulation draws directly from the <em>Charaka Samhita</em> and <em>Ashtanga Hridayam</em> — the twin pillars of classical Ayurvedic medicine. Every ingredient belongs to the Varnya Gana: herbs specifically classified for improving skin radiance, tone, and texture.
            </p>
            <p className="text-stone-400 font-light leading-relaxed text-base">
              No parabens. No synthetic fragrance. No artificial brighteners. Just 8 botanicals in their most potent powdered form — exactly as prescribed for millennia.
            </p>
          </div>
          <div className="space-y-5">
            <p className="font-serif italic text-2xl text-gold/70 leading-relaxed">
              "One formula. Every skin type."
            </p>
            <p className="text-stone-400 font-light leading-relaxed text-base">
              The genius of classical Ayurveda is adaptability. VARNYA is not a fixed cream — it is a <em>lepa</em> (therapeutic face mask) that you activate with a carrier chosen for your dosha type: rose water, raw milk, or curd.
            </p>
            <p className="text-stone-400 font-light leading-relaxed text-base">
              The dry-powder base means zero preservatives, infinite shelf stability, and a ritual that reconnects you to your skin's actual needs — not a manufactured formula decided for you.
            </p>
          </div>
        </div>

        {/* Skin type cards */}
        <div className={`section-reveal ${visible ? 'visible' : ''}`} style={{ transitionDelay: '0.3s' }}>
          <p className="text-center text-xs tracking-[0.5em] text-gold/50 uppercase font-light mb-8">
            Formulated for All 5 Skin Types
          </p>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-px bg-gold/10">
            {SKIN_TYPES.map(({ type, hindi, icon, desc }, i) => (
              <div
                key={type}
                className="group bg-charcoal-800 p-6 text-center hover:bg-charcoal-700 transition-colors duration-300 cursor-default"
              >
                <div className="text-2xl text-gold/40 group-hover:text-gold transition-colors duration-300 mb-3">
                  {icon}
                </div>
                <p className="font-serif text-stone-200 text-lg font-light mb-1">{type}</p>
                <p className="text-gold/40 text-xs font-serif italic mb-3">{hindi}</p>
                <p className="text-stone-500 text-xs font-light leading-relaxed group-hover:text-stone-400 transition-colors duration-300">
                  {desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom quote */}
        <div className={`mt-20 text-center section-reveal ${visible ? 'visible' : ''}`} style={{ transitionDelay: '0.45s' }}>
          <div className="inline-block border border-gold/20 px-10 py-8 max-w-2xl">
            <p className="font-serif italic text-stone-300 text-lg leading-relaxed">
              "This is not a product born in a lab.<br />
              It is a prescription born in the pages of the Vedas,<br />
              given a form worthy of your home."
            </p>
            <p className="mt-4 text-xs tracking-[0.4em] text-gold/40 uppercase">— VARNYA Formulation Notes</p>
          </div>
        </div>
      </div>
    </section>
  )
}
