import HeroSection from './components/HeroSection'
import CraftsmanshipSection from './components/CraftsmanshipSection'
import IngredientsSection from './components/IngredientsSection'
import AyurvedicVisionSection from './components/AyurvedicVisionSection'
import RitualSection from './components/RitualSection'
import BookingSection from './components/BookingSection'
import FAQSection from './components/FAQSection'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen bg-charcoal-900 text-stone-100">
      {/* Section 1 — Hero */}
      <HeroSection />

      {/* Section 2 — Craftsmanship */}
      <CraftsmanshipSection />

      {/* Section 3 — Ingredients Slider */}
      <IngredientsSection />

      {/* Section 4 — Ayurvedic Vision */}
      <AyurvedicVisionSection />

      {/* Section 5 — The Ritual */}
      <RitualSection />

      {/* Section 6 — Booking Engine */}
      <BookingSection />

      {/* Section 7 — FAQ + WhatsApp */}
      <FAQSection />

      {/* Section 8 — Footer */}
      <Footer />
    </div>
  )
}
