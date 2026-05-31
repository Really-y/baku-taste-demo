'use client'

import { useState } from 'react'
import SectionHeading from '@/components/ui/SectionHeading'
import Button from '@/components/ui/Button'

export default function Reservation() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 4000)
  }

  return (
    <section id="reservation" className="py-24 md:py-32 bg-beige">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <SectionHeading subtitle="Masanızı Sifariş Edin" title="Rezervasiya Et" />
        <p className="text-gray-500 mt-4 max-w-md mx-auto">
          Unudulmaz bir yemək təcrübəsi üçün yerinizi rezerv edin. Rezervasiyanızı 24 saat ərzində təsdiqləyəcəyik.
        </p>

        <form
          onSubmit={handleSubmit}
          className="mt-12 text-left bg-white p-8 md:p-12 rounded-2xl shadow-lg shadow-navy/5"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <input
              type="text"
              placeholder="Adınız"
              required
              className="w-full px-5 py-4 rounded-lg border border-gray-200 bg-gray-50/50 text-navy placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold transition-all"
            />
            <input
              type="tel"
              placeholder="Telefon Nömrəniz"
              required
              className="w-full px-5 py-4 rounded-lg border border-gray-200 bg-gray-50/50 text-navy placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold transition-all"
            />
            <input
              type="date"
              required
              className="w-full px-5 py-4 rounded-lg border border-gray-200 bg-gray-50/50 text-navy placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold transition-all"
            />
            <input
              type="time"
              required
              className="w-full px-5 py-4 rounded-lg border border-gray-200 bg-gray-50/50 text-navy placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold transition-all"
            />
            <select
              required
              className="w-full md:col-span-2 px-5 py-4 rounded-lg border border-gray-200 bg-gray-50/50 text-navy focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold transition-all appearance-none"
            >
              <option value="">Qonaq Sayı</option>
              {[1, 2, 3, 4, 5, 6, 7, 8].map((n) => (
                <option key={n} value={n}>
                  {n} {n === 1 ? 'Qonaq' : 'Qonaq'}
                </option>
              ))}
            </select>
          </div>

          <Button
            type="submit"
            variant="primary"
            className="w-full mt-6 py-4 text-base"
          >
            {submitted ? 'Rezervasiya Göndərildi' : 'İndi Rezerv Et'}
          </Button>

          {submitted && (
            <p className="text-center text-sm text-green-600 mt-4 animate-fade-in">
              Təşəkkür edirik! Rezervasiyanızı təsdiqləmək üçün qısa zamanda sizinlə əlaqə saxlayacağıq.
            </p>
          )}
        </form>
      </div>
    </section>
  )
}
