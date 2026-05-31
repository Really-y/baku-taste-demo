import Image from 'next/image'

interface MenuCardProps {
  image: string
  name: string
  description: string
  price: string
  category?: string
}

export default function MenuCard({ image, name, description, price, category }: MenuCardProps) {
  return (
    <div className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500">
      <div className="relative h-64 overflow-hidden bg-gradient-to-br from-beige to-beige-dark">
        <Image
          src={image}
          alt={name}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
        />
        {category && (
          <span className="absolute top-4 left-4 bg-gold text-navy text-[10px] font-bold px-3 py-1.5 rounded-full tracking-wider uppercase">
            {category}
          </span>
        )}
      </div>
      <div className="p-6 md:p-8">
        <div className="flex justify-between items-start mb-3">
          <h3 className="text-lg md:text-xl font-serif font-bold text-navy group-hover:text-gold transition-colors duration-300">
            {name}
          </h3>
          <span className="text-gold font-bold text-lg md:text-xl whitespace-nowrap ml-4">{price}</span>
        </div>
        <p className="text-sm text-gray-500 leading-relaxed">{description}</p>
      </div>
    </div>
  )
}
