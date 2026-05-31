import { ReactNode } from 'react'

interface ButtonProps {
  href?: string
  type?: 'button' | 'submit'
  variant?: 'primary' | 'outline' | 'outline-dark'
  className?: string
  children: ReactNode
  onClick?: () => void
}

export default function Button({ href, type = 'button', variant = 'primary', className = '', children, onClick }: ButtonProps) {
  const baseClasses = 'inline-flex items-center justify-center px-8 py-3.5 text-sm font-medium tracking-wide transition-all duration-300 rounded-sm'
  
  const variants = {
    primary: 'bg-gold text-navy hover:bg-gold-light hover:shadow-lg hover:-translate-y-0.5',
    outline: 'border border-white/30 text-white hover:bg-white/10 hover:border-white/50 hover:-translate-y-0.5',
    'outline-dark': 'border border-navy/20 text-navy hover:bg-navy hover:text-white hover:-translate-y-0.5',
  }
  
  const classes = `${baseClasses} ${variants[variant]} ${className}`
  
  if (href) {
    return <a href={href} className={classes}>{children}</a>
  }
  
  return <button type={type} onClick={onClick} className={classes}>{children}</button>
}
