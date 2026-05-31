import Hero from '@/sections/Hero'
import About from '@/sections/About'
import SignatureDishes from '@/sections/SignatureDishes'
import MenuPreview from '@/sections/MenuPreview'
import Reservation from '@/sections/Reservation'
import Reviews from '@/sections/Reviews'
import FindUs from '@/sections/FindUs'
import ContactInfo from '@/sections/ContactInfo'

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <SignatureDishes />
      <MenuPreview />
      <Reservation />
      <Reviews />
      <FindUs />
      <ContactInfo />
    </>
  )
}
