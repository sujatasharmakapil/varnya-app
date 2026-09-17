import { useState, useRef, useEffect } from 'react'
import { useIntersectionObserver } from '../hooks/useIntersectionObserver'

const INGREDIENTS = [
  {
    name: 'Kamal Pushp',
    sanskrit: 'कमल पुष्प',
    english: 'Sacred Lotus Powder',
    origin: 'Pan-India',
    benefit: 'Brightens complexion, reduces hyperpigmentation, balances sebum. Revered in Ayurveda as the supreme Varnya herb.',
    emoji: '🪷',
    color: 'from-pink-950/60 to-charcoal-900',
  },
  {
    name: 'Gulab Petal',
    sanskrit: 'गुलाब पुष्प',
    english: 'Rose Petal Powder',
    origin: 'Kannauj, UP',
    benefit: 'Deeply soothes inflammation, hydrates, and imparts the legendary "gulabi" glow. Rich in Vitamin C and tannins.',
    emoji: '🌹',
    color: 'from-rose-950/60 to-charcoal-900',
  },
  {
    name: 'Mulethi',
    sanskrit: 'मुलेठी',
    english: 'Licorice Root',
    origin: 'Himalayan Foothills',
    benefit: 'Powerfully depigmenting. Inhibits melanin synthesis at the root. The gold standard of Ayurvedic skin-lightening.',
    emoji: '🌿',
    color: 'from-amber-950/60 to-charcoal-900',
  },
  {
    name: 'Sariva',
    sanskrit: 'सारिवा',
    english: 'Anantmool Root',
    origin: 'Western Ghats',
    benefit: 'Known as the "eternal root" — purifies blood, detoxifies skin from within, treats chronic acne and uneven tone.',
    emoji: '🌱',
    color: 'from-emerald-950/60 to-charcoal-900',
  },
  {
    name: 'Raktachandan',
    sanskrit: 'रक्तचन्दन',
    english: 'Red Sandalwood',
    origin: 'Andhra Pradesh',
    benefit: 'Anti-inflammatory, astringent, deeply cooling. Reduces redness, tightens pores, restores pH balance.',
    emoji: '🪵',
    color: 'from-red-950/60 to-charcoal-900',
  },
  {
    name: 'Ghritkumari',
    sanskrit: 'घृतकुमारी',
    english: 'Aloe Vera Powder',
    origin: 'Rajasthan',
    benefit: 'Master hydrator and carrier. Delivers all active herbs deep into the dermal layers. Heals, calms, and protects.',
    emoji: '🌵',
    color: 'from-green-950/60 to-charcoal-900',
  },
  {
    name: 'Moti Pishti',
    sanskrit: 'मोती पिष्टी',
    english: 'Pearl Powder',
    origin: 'Classical Alchemy',
    benefit: 'Ultra-rare Rasayana ingredient. Imparts luminosity at the cellular level. Calms pitta, builds ojas (vital essence).',
    emoji: '🫧',
    color: 'from-slate-800/60 to-charcoal-900',
  },
  {
    name: 'Kashmiri Kesar',
    sanskrit: 'कश्मीरी केसर',
    english: 'Saffron — Crocus sativus',
    origin: 'Pampore, Kashmir',
    benefit: 'The crown jewel. Safranal and crocin activate radiance, fight oxidative stress, and give the formula its signature golden warmth.',
    emoji: '🏵️',
    color: 'from-orange-950/60 to-charcoal-900',
  },
]

export default function IngredientsSection() {
  const [active, setActive] = useState(0)
  const [animating, setAnimating] = useState(false)
  const [sectionRef, visible] = useIntersectionObserver()
  const timerRef = useRef(null)

  const goTo = (idx) => {
    if (idx === active || animating) return
    setAnimating(true)
    setTimeout(() => {
      setActive(idx)
      setAnimating(false)
    }, 300)
  }

  const prev = () => goTo((active - 1 + INGREDIENTS.length) % INGREDIENTS.length)
  const next = () => goTo((active + 1) % INGREDIENTS.length)

  // Auto-advance
  useEffect(() => {
    if (!visible) return
    timerRef.current = setInterval(next, 4000)
    return () => clearInterval(timerRef.current)
  }, [visible, active])

  const ing = INGREDIENTS[active]

  return (
    <section id="ingredients" className="relative py-28 md:py-36 bg-charcoal-900 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none"
        style={{ backgroundImage: 'radial-gradient(ellipse at 20% 60%, rgba(201,168,76,0.05) 0%, transparent 55%)' }} />

      <div ref={sectionRef} className="max-w-6xl mx-auto px-6 md:px-16">
        {/* Header */}
        <div className={`text-center mb-16 section-reveal ${visible ? 'visible' : ''}`}>
          <p className="text-xs tracking-[0.5em] text-gold/60 uppercase font-light mb-4">The Formula</p>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-stone-100 font-light">
            8 Sacred Ingredients
          </h2>
          <div className="gold-divider w-24 mx-auto mt-6" />
          <p className="mt-6 text-stone-400 font-light text-lg max-w-xl mx-auto leading-relaxed">
            Each herb selected from its finest natural origin. Zero synthetics. Zero fillers. Pure classical Ayurveda.
          </p>
        </div>

        {/* Glass card slider */}
        <div className={`section-reveal ${visible ? 'visible' : ''}`} style={{ transitionDelay: '0.2s' }}>
          {/* Navigation arrows sit outside the card on md+, inline on mobile */}
          <div className="relative px-0 md:px-10">
            {/* Main card */}
            <div
              className={`bg-glass-strong rounded-sm p-6 sm:p-8 md:p-12 flex flex-col md:flex-row gap-6 md:gap-10 items-center transition-opacity duration-300 ${animating ? 'opacity-0' : 'opacity-100'}`}
              style={{
                background: 'linear-gradient(135deg, rgba(255,255,255,0.04) 0%, rgba(201,168,76,0.04) 100%)',
                backdropFilter: 'blur(30px)',
                border: '1px solid rgba(201,168,76,0.2)',
                boxShadow: '0 8px 60px rgba(0,0,0,0.5), inset 0 1px 0 rgba(201,168,76,0.1)',
              }}
            >
              {/* Emoji / icon side */}
              <div className="flex-shrink-0 flex flex-col items-center gap-3">
                <div
                  className="w-20 h-20 sm:w-28 sm:h-28 md:w-36 md:h-36 rounded-full flex items-center justify-center text-4xl sm:text-5xl md:text-6xl"
                  style={{
                    background: 'radial-gradient(circle, rgba(201,168,76,0.15) 0%, rgba(0,0,0,0.3) 100%)',
                    border: '1px solid rgba(201,168,76,0.25)',
                    boxShadow: '0 0 40px rgba(201,168,76,0.1)',
                  }}
                >
                  {ing.emoji}
                </div>
                <span className="text-[10px] sm:text-xs tracking-[0.2em] text-gold/40 uppercase font-light text-center">Origin: {ing.origin}</span>
              </div>

              {/* Text side */}
              <div className="flex-1 text-center md:text-left">
                <p className="text-[10px] sm:text-xs tracking-[0.4em] text-gold/50 uppercase font-light mb-2">
                  Ingredient {String(active + 1).padStart(2, '0')} of 08
                </p>
                <h3 className="font-serif text-2xl sm:text-3xl md:text-4xl text-stone-100 font-light mb-1">
                  {ing.name}
                </h3>
                <p className="text-gold/70 font-serif italic text-base sm:text-lg mb-1">{ing.sanskrit}</p>
                <p className="text-stone-500 text-xs sm:text-sm tracking-wider uppercase mb-4">{ing.english}</p>
                <div className="gold-divider w-16 mb-4 mx-auto md:mx-0" style={{ display: 'block' }} />
                <p className="text-stone-300 font-light leading-relaxed text-sm sm:text-base md:text-lg">
                  {ing.benefit}
                </p>
              </div>
            </div>

            {/* Navigation arrows — inside container on mobile, outside on md+ */}
            <button
              onClick={prev}
              className="absolute left-0 top-1/2 -translate-y-1/2 md:-translate-x-0 w-9 h-9 sm:w-11 sm:h-11 border border-gold/30 bg-charcoal-900/90 hover:bg-gold/10 hover:border-gold/60 transition-all duration-300 flex items-center justify-center text-gold/60 hover:text-gold text-xl"
              aria-label="Previous ingredient"
            >
              ‹
            </button>
            <button
              onClick={next}
              className="absolute right-0 top-1/2 -translate-y-1/2 w-9 h-9 sm:w-11 sm:h-11 border border-gold/30 bg-charcoal-900/90 hover:bg-gold/10 hover:border-gold/60 transition-all duration-300 flex items-center justify-center text-gold/60 hover:text-gold text-xl"
              aria-label="Next ingredient"
            >
              ›
            </button>
          </div>

          {/* Dot indicators */}
          <div className="flex justify-center gap-2 sm:gap-3 mt-6 sm:mt-8">
            {INGREDIENTS.map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                aria-label={`Go to ingredient ${i + 1}`}
                className={`transition-all duration-300 rounded-full ${
                  i === active
                    ? 'w-6 sm:w-8 h-2 bg-gold'
                    : 'w-2 h-2 bg-gold/20 hover:bg-gold/40'
                }`}
              />
            ))}
          </div>

          {/* All ingredient pills */}
          <div className="mt-8 sm:mt-10 flex flex-wrap justify-center gap-2 sm:gap-3">
            {INGREDIENTS.map((ing, i) => (
              <button
                key={ing.name}
                onClick={() => goTo(i)}
                className={`text-[10px] sm:text-xs px-3 sm:px-4 py-1.5 sm:py-2 border transition-all duration-300 tracking-widest uppercase font-light ${
                  i === active
                    ? 'border-gold/60 text-gold bg-gold/10'
                    : 'border-gold/15 text-stone-500 hover:border-gold/30 hover:text-stone-300'
                }`}
              >
                {ing.emoji} {ing.name}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
