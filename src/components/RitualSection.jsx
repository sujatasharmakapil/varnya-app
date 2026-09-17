import { useIntersectionObserver } from '../hooks/useIntersectionObserver'

const STEPS = [
  {
    number: '01',
    title: 'Mix',
    subtitle: 'Choose Your Carrier',
    icon: '🫗',
    description:
      'Take half a teaspoon of VARNYA powder in a clean bowl. Add your chosen mixing liquid until a smooth paste forms.',
    detail: 'Choose based on your skin type and season:',
    options: [
      { label: 'Rose Water', for: 'Oily / Combination', symbol: '🌹' },
      { label: 'Raw Milk', for: 'Dry / Normal', symbol: '🥛' },
      { label: 'Dahi (Curd)', for: 'Sensitive / All types', symbol: '🍶' },
    ],
  },
  {
    number: '02',
    title: 'Apply',
    subtitle: 'The Ritual Application',
    icon: '🤲',
    description:
      'Apply the paste evenly across your cleansed face and neck using gentle upward strokes. Avoid the eye area.',
    detail: 'Leave on for:',
    options: [
      { label: '10–15 minutes', for: 'First-time use', symbol: '⏱' },
      { label: '20–25 minutes', for: 'Regular ritual', symbol: '⏳' },
      { label: '30 minutes', for: 'Deep treatment', symbol: '✦' },
    ],
  },
  {
    number: '03',
    title: 'Cleanse',
    subtitle: 'The Gentle Release',
    icon: '💧',
    description:
      'Rinse off gently with lukewarm water using soft circular motions. Pat dry with a clean cloth. No face wash required.',
    detail: 'Frequency:',
    options: [
      { label: '3x per week', for: 'Brightening goal', symbol: '◈' },
      { label: '2x per week', for: 'Maintenance', symbol: '◇' },
      { label: 'Daily', for: 'As a face wash', symbol: '○' },
    ],
  },
]

export default function RitualSection() {
  const [ref, visible] = useIntersectionObserver()

  return (
    <section id="ritual" className="relative py-28 md:py-36 bg-charcoal-900 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none"
        style={{ backgroundImage: 'radial-gradient(ellipse at 70% 30%, rgba(201,168,76,0.05) 0%, transparent 55%)' }} />

      <div ref={ref} className="max-w-6xl mx-auto px-6 md:px-16">
        {/* Header */}
        <div className={`text-center mb-20 section-reveal ${visible ? 'visible' : ''}`}>
          <p className="text-xs tracking-[0.5em] text-gold/60 uppercase font-light mb-4">How to Use</p>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-stone-100 font-light">
            The Three-Step Ritual
          </h2>
          <div className="gold-divider w-24 mx-auto mt-6" />
          <p className="mt-6 text-stone-400 font-light text-lg max-w-xl mx-auto">
            A ritual, not a routine. Each step is intentional.
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connecting line */}
          <div className="hidden md:block absolute top-16 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent pointer-events-none" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6">
            {STEPS.map((step, i) => (
              <div
                key={step.number}
                className={`group relative section-reveal ${visible ? 'visible' : ''}`}
                style={{ transitionDelay: `${i * 0.18}s` }}
              >
                {/* Top step number */}
                <div className="flex flex-col items-center mb-8">
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center text-lg font-serif text-gold border border-gold/30 bg-charcoal-900 group-hover:bg-gold group-hover:text-charcoal-900 transition-all duration-400 mb-3 relative z-10"
                    style={{ boxShadow: '0 0 0 4px rgba(10,10,10,1), 0 0 0 5px rgba(201,168,76,0.2)' }}
                  >
                    {step.number}
                  </div>
                  <p className="text-xs tracking-[0.4em] text-gold/40 uppercase">{step.subtitle}</p>
                </div>

                {/* Card */}
                <div
                  className="bg-glass p-6 md:p-8 h-full hover-lift"
                  style={{
                    background: 'linear-gradient(160deg, rgba(255,255,255,0.03) 0%, rgba(201,168,76,0.03) 100%)',
                    border: '1px solid rgba(201,168,76,0.12)',
                  }}
                >
                  <div className="text-4xl mb-5 text-center">{step.icon}</div>
                  <h3 className="font-serif text-2xl text-stone-100 font-light text-center mb-4">{step.title}</h3>
                  <p className="text-stone-400 font-light text-sm leading-relaxed mb-5">
                    {step.description}
                  </p>

                  <p className="text-xs tracking-[0.3em] text-gold/50 uppercase font-light mb-3">{step.detail}</p>
                  <ul className="space-y-2">
                    {step.options.map(opt => (
                      <li key={opt.label} className="flex items-center gap-3 text-sm">
                        <span className="text-base flex-shrink-0">{opt.symbol}</span>
                        <span className="text-stone-300 font-light">{opt.label}</span>
                        <span className="text-stone-600 text-xs font-light">— {opt.for}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Pro tip */}
        <div className={`mt-16 section-reveal ${visible ? 'visible' : ''}`} style={{ transitionDelay: '0.6s' }}>
          <div
            className="border border-gold/15 px-8 py-6 flex flex-col sm:flex-row gap-4 items-start sm:items-center"
            style={{ background: 'rgba(201,168,76,0.03)' }}
          >
            <span className="text-2xl flex-shrink-0">💡</span>
            <div>
              <p className="text-xs tracking-[0.4em] text-gold/50 uppercase font-light mb-1">Pro Tip</p>
              <p className="text-stone-400 font-light text-sm leading-relaxed">
                For best results, apply at night before sleep as part of your evening wind-down. The herbs work synergistically with the skin's natural repair cycle during sleep hours. After 4 weeks, expect measurably brighter, more even-toned skin.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
