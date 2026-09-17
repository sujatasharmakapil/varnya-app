import { useState } from 'react'
import { useIntersectionObserver } from '../hooks/useIntersectionObserver'

// Units 01–21. Pre-reserved (sold-out) units:
const RESERVED_UNITS = [4, 11, 17]
// Batch number
const BATCH = '01'
// WhatsApp number (replace with actual number, no + or spaces)
const WA_NUMBER = '919999999999'

const TOTAL_UNITS = 21

export default function BookingSection() {
  const [ref, visible] = useIntersectionObserver()
  const [selectedUnit, setSelectedUnit] = useState(null)

  const isReserved = (n) => RESERVED_UNITS.includes(n)

  const handleUnitClick = (n) => {
    if (isReserved(n)) return
    setSelectedUnit(n === selectedUnit ? null : n)
  }

  const handleWhatsApp = () => {
    if (!selectedUnit) return
    const unitStr = String(selectedUnit).padStart(2, '0')
    const msg = encodeURIComponent(
      `Hi! I want to pre-book VARNYA Batch #${BATCH}, Unit #${unitStr}. I am ready to pay the ₹3,000 pre-booking amount.`
    )
    window.open(`https://wa.me/${WA_NUMBER}?text=${msg}`, '_blank')
  }

  return (
    <section id="booking" className="relative py-28 md:py-36 bg-charcoal-800 overflow-hidden">
      {/* BG glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] rounded-full bg-gold/4 blur-[100px] pointer-events-none" />

      <div ref={ref} className="max-w-4xl mx-auto px-6 md:px-16 relative z-10">
        {/* Header */}
        <div className={`text-center mb-16 section-reveal ${visible ? 'visible' : ''}`}>
          <p className="text-xs tracking-[0.5em] text-gold/60 uppercase font-light mb-4">Limited Edition</p>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-stone-100 font-light">
            Reserve Your Unit
          </h2>
          <div className="gold-divider w-24 mx-auto mt-6" />
          <p className="mt-6 text-stone-400 font-light text-lg max-w-xl mx-auto leading-relaxed">
            Batch 01 is strictly limited to <strong className="text-gold font-normal">21 units worldwide</strong>. Each unit is numbered, signed, and yours alone.
          </p>

          {/* Price block */}
          <div className="mt-10 inline-flex flex-col sm:flex-row items-center gap-6 border border-gold/20 px-8 py-6" style={{ background: 'rgba(201,168,76,0.04)' }}>
            <div className="text-center sm:text-left">
              <p className="text-xs tracking-[0.4em] text-gold/50 uppercase font-light mb-1">Total Price</p>
              <p className="font-serif text-4xl text-stone-200 font-light">₹7,000</p>
            </div>
            <div className="hidden sm:block w-px h-12 bg-gold/20" />
            <div className="text-center sm:text-left">
              <p className="text-xs tracking-[0.4em] text-gold/50 uppercase font-light mb-1">Pre-Booking Amount</p>
              <p className="font-serif text-4xl text-gold font-light">₹3,000</p>
            </div>
            <div className="hidden sm:block w-px h-12 bg-gold/20" />
            <div className="text-center sm:text-left">
              <p className="text-xs tracking-[0.4em] text-gold/50 uppercase font-light mb-1">Balance Due</p>
              <p className="font-serif text-4xl text-stone-400 font-light">₹4,000</p>
              <p className="text-xs text-stone-600 font-light mt-1">on delivery</p>
            </div>
          </div>
        </div>

        {/* Unit grid */}
        <div className={`section-reveal ${visible ? 'visible' : ''}`} style={{ transitionDelay: '0.2s' }}>
          <p className="text-center text-xs tracking-[0.4em] text-gold/40 uppercase font-light mb-6">
            Select Your Unit Number — Batch 01
          </p>

          <div className="grid grid-cols-7 gap-2 md:gap-3">
            {Array.from({ length: TOTAL_UNITS }, (_, i) => i + 1).map((n) => {
              const reserved = isReserved(n)
              const selected = selectedUnit === n
              return (
                <button
                  key={n}
                  onClick={() => handleUnitClick(n)}
                  disabled={reserved}
                  aria-label={reserved ? `Unit ${String(n).padStart(2,'0')} Reserved` : `Select Unit ${String(n).padStart(2,'0')}`}
                  className={`
                    relative aspect-square flex flex-col items-center justify-center text-sm font-light border transition-all duration-300 font-serif
                    ${reserved
                      ? 'border-stone-800 bg-stone-900/50 text-stone-700 cursor-not-allowed'
                      : selected
                        ? 'border-gold bg-gold text-charcoal-900 shadow-[0_0_30px_rgba(201,168,76,0.4)] cursor-pointer scale-105'
                        : 'border-gold/20 bg-charcoal-900 text-stone-300 hover:border-gold/50 hover:bg-gold/8 cursor-pointer hover:scale-105'
                    }
                  `}
                >
                  <span className="text-xs leading-none mb-0.5">{String(n).padStart(2, '0')}</span>
                  {reserved && (
                    <span className="text-[8px] tracking-wider uppercase text-stone-700 leading-none mt-0.5">
                      Sold
                    </span>
                  )}
                  {selected && !reserved && (
                    <span className="text-[8px] tracking-wider uppercase text-charcoal-800 leading-none mt-0.5">
                      Yours
                    </span>
                  )}
                </button>
              )
            })}
          </div>

          {/* Legend */}
          <div className="flex justify-center gap-6 mt-5 text-xs text-stone-500 font-light">
            <span className="flex items-center gap-2">
              <span className="w-3 h-3 border border-gold/50 bg-charcoal-900 inline-block" />
              Available
            </span>
            <span className="flex items-center gap-2">
              <span className="w-3 h-3 bg-gold inline-block" />
              Your selection
            </span>
            <span className="flex items-center gap-2">
              <span className="w-3 h-3 border border-stone-800 bg-stone-900/50 inline-block" />
              Sold / Reserved
            </span>
          </div>
        </div>

        {/* CTA */}
        <div className={`mt-12 text-center section-reveal ${visible ? 'visible' : ''}`} style={{ transitionDelay: '0.35s' }}>
          {selectedUnit ? (
            <div className="animate-fade-up">
              <p className="text-stone-400 font-light text-sm mb-4">
                You selected <span className="text-gold font-serif text-lg">Unit #{String(selectedUnit).padStart(2, '0')}</span> — Batch 01
              </p>
              <button
                onClick={handleWhatsApp}
                className="group relative inline-flex items-center gap-3 px-12 py-5 bg-[#25D366] text-white text-sm tracking-[0.25em] uppercase font-medium hover:shadow-[0_0_50px_rgba(37,211,102,0.4)] transition-all duration-400 animate-pulse-gold"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Pre-Book on WhatsApp
              </button>
              <p className="mt-4 text-xs text-stone-600 font-light tracking-wider">
                Clicking will open WhatsApp with a pre-filled booking message
              </p>
            </div>
          ) : (
            <div className="border border-gold/15 px-6 py-5 inline-block">
              <p className="text-stone-500 font-light text-sm tracking-wide">
                ↑ Select a unit number above to proceed
              </p>
            </div>
          )}
        </div>

        {/* Reassurance */}
        <div className={`mt-14 grid grid-cols-1 sm:grid-cols-3 gap-px bg-gold/10 section-reveal ${visible ? 'visible' : ''}`} style={{ transitionDelay: '0.5s' }}>
          {[
            { icon: '🔐', title: 'Secure Pre-Booking', text: 'Fully refundable if unit is unavailable' },
            { icon: '📦', title: 'Direct Dispatch', text: 'Ships directly from the workshop to you' },
            { icon: '✦', title: 'Numbered Certificate', text: 'Authenticity certificate with every unit' },
          ].map(({ icon, title, text }) => (
            <div key={title} className="bg-charcoal-800 px-6 py-6 text-center">
              <div className="text-2xl mb-2">{icon}</div>
              <p className="text-stone-200 text-sm font-light mb-1">{title}</p>
              <p className="text-stone-600 text-xs font-light">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
