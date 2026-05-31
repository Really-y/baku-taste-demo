import Image from 'next/image'
import SectionHeading from '@/components/ui/SectionHeading'
import { stats } from '@/lib/data'

export default function About() {
  return (
    <section id="about" className="py-24 md:py-32 bg-beige">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl order-2 lg:order-1">
            <Image
              src="https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=800&q=80"
              alt="Chef preparing traditional Azerbaijani cuisine"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>

          <div className="order-1 lg:order-2">
            <SectionHeading subtitle="Our Story" title="Where Tradition Meets Elegance" centered={false} />
            <div className="mt-8 space-y-5 text-gray-600 leading-relaxed">
              <p>
                Founded in 2018, Baku Taste brings the authentic flavors of Azerbaijan to the heart of the city. 
                Our chefs combine centuries-old recipes with modern techniques to create dishes that honor the past 
                while embracing the present.
              </p>
              <p>
                Every ingredient is carefully sourced — from the saffron in our plov to the walnuts in our pakhlava. 
                We believe that great food starts with respect for tradition and a passion for excellence.
              </p>
              <p>
                Whether you are joining us for an intimate dinner or a grand celebration, Baku Taste promises 
                an experience that engages all the senses.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12 pt-10 border-t border-beige-dark">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <div className="text-3xl md:text-4xl font-serif font-bold text-gold">{stat.value}</div>
                  <div className="text-sm text-gray-500 mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
