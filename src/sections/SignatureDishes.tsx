import SectionHeading from '@/components/ui/SectionHeading'
import MenuCard from '@/components/ui/MenuCard'
import Button from '@/components/ui/Button'
import { signatureDishes } from '@/lib/data'

export default function SignatureDishes() {
  return (
    <section id="dishes" className="py-24 md:py-32 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading subtitle="Xüsusi Seçim" title="İmza Yeməklər" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
          {signatureDishes.map((dish) => (
            <MenuCard key={dish.name} {...dish} />
          ))}
        </div>

        <div className="text-center mt-16">
          <Button href="/menu" variant="outline-dark">
            Tam Menyuya Bax
          </Button>
        </div>
      </div>
    </section>
  )
}
