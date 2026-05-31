import Image from 'next/image'
import Button from '@/components/ui/Button'

export default function Hero() {
  return (
    <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1920&q=80"
          alt="Elegant restaurant interior"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-navy/70 via-navy/40 to-navy/80" />
      </div>

      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto animate-fade-in">
        <p className="text-gold text-xs md:text-sm tracking-[0.35em] uppercase mb-6 font-medium">
          Fine Azerbaijani Cuisine
        </p>
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold mb-6 tracking-tight">
          Baku Taste
        </h1>
        <p className="text-base md:text-lg text-white/70 mb-12 max-w-lg mx-auto leading-relaxed">
            Discover the rich flavors of Azerbaijan in an elegant, contemporary setting. Every dish tells a story.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button href="#reservation" variant="primary">
            Reserve a Table
          </Button>
          <Button href="#menu" variant="outline">
            View Menu
          </Button>
        </div>
      </div>

      <a
        href="#about"
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/40 hover:text-gold transition-colors animate-bounce"
        aria-label="Scroll down"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </a>
    </section>
  )
}
