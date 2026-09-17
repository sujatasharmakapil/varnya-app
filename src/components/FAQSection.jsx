import { useState, useRef } from 'react'
import { useIntersectionObserver } from '../hooks/useIntersectionObserver'

// WhatsApp number (replace with actual number)
const WA_NUMBER = '919999999999'

const FAQS = [
  {
    q: 'What exactly is VARNYA? Is it a cream or a powder?',
    a: 'VARNYA is a pure herbal face mask powder — an Ayurvedic lepa. You mix it fresh before each use with a carrier of your choice (rose water, milk, or curd). This dry-powder format means zero preservatives, zero degradation, and maximum potency at every single use.',
  },
  {
    q: 'How long does one jar last?',
    a: 'One VARNYA brass container holds approximately 50g of the herbal blend. Used 3 times per week as a face mask, one jar lasts 3–4 months comfortably. Used daily as a gentle face wash, it lasts 1–1.5 months.',
  },
  {
    q: 'Is it safe for sensitive skin?',
    a: 'Yes. The formulation contains Moti Pishti (pearl powder) and Gulab (rose) specifically for their calming, barrier-strengthening properties. That said, we always recommend a 24-hour patch test on your inner arm before full application.',
  },
  {
    q: 'When will I see results?',
    a: 'Most users notice a visible brightness and softness from the very first use. Significant improvement in pigmentation, tone, and texture is typically observed within 4–6 weeks of consistent use.',
  },
  {
    q: 'Is this a pre-order? When will it ship?',
    a: 'Yes — Batch 01 is a pre-order. Each unit requires 3–5 days for the Tarkashi wooden box to be handcrafted once ordered. Estimated dispatch is within 2–3 weeks of pre-booking confirmation. You will receive tracking updates via WhatsApp.',
  },
  {
    q: 'What happens after I click "Pre-Book on WhatsApp"?',
    a: 'A WhatsApp message is pre-filled with your batch and unit number. Once you send it, you will receive payment details for the ₹3,000 pre-booking amount. The remaining ₹4,000 is payable on delivery (Cash on Delivery or UPI).',
  },
  {
    q: 'Can I get a refund on my pre-booking amount?',
    a: 'Yes — if your selected unit cannot be fulfilled for any reason, a full refund of the ₹3,000 pre-booking amount will be processed within 3–5 business days.',
  },
  {
    q: 'Does it contain any animal-derived ingredients?',
    a: 'Moti Pishti (pearl) is the only ingredient of animal origin. All other 7 ingredients are 100% botanical. If you prefer to avoid pearl, please ask about our alternative formulation option via WhatsApp.',
  },
]

function FAQItem({ q, a, index }) {
  const [open, setOpen] = useState(false)
  const bodyRef = useRef(null)

  return (
    <div className={`border-b border-gold/10 transition-colors duration-300 ${open ? 'border-gold/25' : ''}`}>
      <button
        className="w-full text-left py-5 flex items-start justify-between gap-4 group"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
      >
        <span className="flex items-start gap-4">
          <span className="font-serif text-gold/30 text-sm font-light flex-shrink-0 mt-0.5">
            {String(index + 1).padStart(2, '0')}
          </span>
          <span className={`font-light text-sm md:text-base transition-colors duration-300 ${open ? 'text-stone-100' : 'text-stone-400 group-hover:text-stone-200'}`}>
            {q}
          </span>
        </span>
        <span className={`flex-shrink-0 w-6 h-6 border border-gold/20 flex items-center justify-center text-gold/50 text-sm transition-all duration-300 ${open ? 'rotate-45 border-gold/50 text-gold bg-gold/10' : 'group-hover:border-gold/40'}`}>
          +
        </span>
      </button>
      <div
        className="overflow-hidden transition-all duration-400 ease-in-out"
        style={{ maxHeight: open ? '300px' : '0px', opacity: open ? 1 : 0 }}
      >
        <div className="pb-5 pl-10 pr-10">
          <p className="text-stone-500 font-light text-sm leading-relaxed">{a}</p>
        </div>
      </div>
    </div>
  )
}

export default function FAQSection() {
  const [ref, visible] = useIntersectionObserver()
  const [question, setQuestion] = useState('')

  const handleAskWhatsApp = () => {
    if (!question.trim()) return
    const msg = encodeURIComponent(`Hi! I have a question about VARNYA: ${question.trim()}`)
    window.open(`https://wa.me/${WA_NUMBER}?text=${msg}`, '_blank')
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') handleAskWhatsApp()
  }

  return (
    <section id="faq" className="relative py-28 md:py-36 bg-charcoal-900 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none"
        style={{ backgroundImage: 'radial-gradient(ellipse at 30% 70%, rgba(201,168,76,0.04) 0%, transparent 55%)' }} />

      <div ref={ref} className="max-w-3xl mx-auto px-6 md:px-16 relative z-10">
        {/* Header */}
        <div className={`text-center mb-16 section-reveal ${visible ? 'visible' : ''}`}>
          <p className="text-xs tracking-[0.5em] text-gold/60 uppercase font-light mb-4">Questions</p>
          <h2 className="font-serif text-4xl md:text-5xl text-stone-100 font-light">
            Frequently Asked
          </h2>
          <div className="gold-divider w-24 mx-auto mt-6" />
        </div>

        {/* FAQ list */}
        <div className={`section-reveal ${visible ? 'visible' : ''}`} style={{ transitionDelay: '0.15s' }}>
          <div className="border-t border-gold/10">
            {FAQS.map((faq, i) => (
              <FAQItem key={i} q={faq.q} a={faq.a} index={i} />
            ))}
          </div>
        </div>

        {/* Custom question via WhatsApp */}
        <div className={`mt-16 section-reveal ${visible ? 'visible' : ''}`} style={{ transitionDelay: '0.3s' }}>
          <div
            className="p-8 md:p-10"
            style={{
              background: 'linear-gradient(135deg, rgba(201,168,76,0.04) 0%, rgba(255,255,255,0.02) 100%)',
              border: '1px solid rgba(201,168,76,0.15)',
            }}
          >
            <div className="flex items-center gap-3 mb-6">
              <svg className="w-5 h-5 text-[#25D366] flex-shrink-0" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              <div>
                <h3 className="font-serif text-xl text-stone-200 font-light">Have another question?</h3>
                <p className="text-stone-500 text-sm font-light">We reply personally from our phone.</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="text"
                value={question}
                onChange={(e) => setQuestion(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Type your question here..."
                aria-label="Your question for VARNYA"
                className="flex-1 bg-charcoal-900 border border-gold/20 text-stone-300 placeholder-stone-600 text-sm font-light px-4 py-3 focus:outline-none focus:border-gold/50 transition-colors duration-300"
              />
              <button
                onClick={handleAskWhatsApp}
                disabled={!question.trim()}
                className="flex items-center justify-center gap-2 px-6 py-3 bg-[#25D366] text-white text-xs tracking-[0.25em] uppercase font-medium disabled:opacity-40 disabled:cursor-not-allowed hover:bg-[#20c05a] transition-colors duration-300 whitespace-nowrap"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Ask on WhatsApp
              </button>
            </div>

            <p className="text-stone-700 text-xs font-light mt-3">
              Your question will open WhatsApp pre-filled so you get a direct, personal reply.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
