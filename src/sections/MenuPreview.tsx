'use client'

import { useState } from 'react'
import SectionHeading from '@/components/ui/SectionHeading'
import Button from '@/components/ui/Button'
import { menuCategories } from '@/lib/data'

export default function MenuPreview() {
  const [activeCategory, setActiveCategory] = useState(0)
  const category = menuCategories[activeCategory]

  return (
    <section id="menu" className="py-24 md:py-32 bg-navy text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gold rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gold rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading subtitle="Kəşf Et" title="Menyumuz" light />

        <div className="flex flex-wrap justify-center gap-3 mt-12 mb-16">
          {menuCategories.map((cat, index) => (
            <button
              key={cat.name}
              onClick={() => setActiveCategory(index)}
              className={`px-6 py-2.5 rounded-full text-sm font-medium tracking-wide transition-all duration-300 ${
                activeCategory === index
                  ? 'bg-gold text-navy shadow-lg shadow-gold/20'
                  : 'bg-white/5 text-white/60 hover:bg-white/10 hover:text-white border border-white/10'
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-6">
          {category.items.map((item) => (
            <div
              key={item.name}
              className="flex justify-between items-baseline border-b border-white/10 pb-5 group"
            >
              <div className="flex-1 pr-4">
                <h3 className="text-lg font-medium text-white group-hover:text-gold transition-colors duration-300">
                  {item.name}
                </h3>
                <p className="text-sm text-white/40 mt-1">{item.description}</p>
              </div>
              <span className="text-gold font-bold text-lg whitespace-nowrap">{item.price}</span>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <Button href="/menu" variant="outline">
            Tam Menyuya Bax
          </Button>
        </div>
      </div>
    </section>
  )
}
