interface SectionHeadingProps {
  subtitle: string
  title: string
  light?: boolean
  centered?: boolean
}

export default function SectionHeading({ subtitle, title, light = false, centered = true }: SectionHeadingProps) {
  return (
    <div className={`max-w-3xl ${centered ? 'mx-auto text-center' : ''}`}>
      <p className={`text-xs md:text-sm tracking-[0.25em] uppercase mb-4 font-medium ${light ? 'text-gold' : 'text-gold'}`}>
        {subtitle}
      </p>
      <h2 className={`text-3xl md:text-4xl lg:text-5xl font-serif font-bold leading-tight ${light ? 'text-white' : 'text-navy'}`}>
        {title}
      </h2>
    </div>
  )
}
