import { menuCategories } from '@/lib/data'

export default function MenuPage() {
  return (
    <div className="min-h-screen bg-cream pt-32 pb-24 md:pt-40 md:pb-32">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20 md:mb-24">
          <p className="text-gold text-xs md:text-sm tracking-[0.25em] uppercase mb-4 font-medium">
            Culinary Excellence
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-navy">            Our Menu</h1>
          <p className="text-gray-400 mt-4 max-w-md mx-auto">
            A curated selection of traditional Azerbaijani dishes, prepared with the finest ingredients.
          </p>
        </div>

        {menuCategories.map((category) => (
          <div key={category.name} className="mb-20 md:mb-24">
            <div className="flex items-center gap-6 mb-10">
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-navy whitespace-nowrap">
                {category.name}
              </h2>
              <div className="flex-1 h-px bg-gray-200" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-8">
              {category.items.map((item) => (
                <div
                  key={item.name}
                  className="flex justify-between items-baseline border-b border-gray-100 pb-5 group"
                >
                  <div className="flex-1 pr-6">
                    <h3 className="text-base md:text-lg font-medium text-navy group-hover:text-gold transition-colors duration-300">
                      {item.name}
                    </h3>
                    <p className="text-sm text-gray-400 mt-1">{item.description}</p>
                  </div>
                  <span className="text-gold font-bold text-base md:text-lg whitespace-nowrap">
                    {item.price}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}

        <div className="text-center mt-16 pt-10 border-t border-gray-100">
          <p className="text-gray-400 text-sm mb-6">
            All prices are in USD. A 10% service charge will be added to your bill.
          </p>
          <a
            href="/"
            className="inline-flex items-center justify-center px-8 py-3.5 text-sm font-medium tracking-wide bg-gold text-navy hover:bg-gold-light transition-all duration-300 rounded-sm hover:shadow-lg hover:-translate-y-0.5"
          >
            Back to Home
          </a>
        </div>
      </div>
    </div>
  )
}
