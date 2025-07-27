import { ReactNode } from 'react'

interface ButtonProps {
  children: ReactNode
  variant?: 'default' | 'ghost'
  onClick?: () => void
  className?: string
}

export default function Button({ 
  children, 
  variant = 'default', 
  onClick, 
  className = '' 
}: ButtonProps) {
  const baseClasses = 'py-3 px-6 rounded-full font-medium transition-colors duration-200'
  
  const variantClasses = {
    default: 'bg-primary text-white hover:bg-primary-hover',
    ghost: 'bg-[#F4F4F4] text-text-primary hover:bg-gray-200'
  }

  return (
    <button
      onClick={onClick}
      className={`${baseClasses} ${variantClasses[variant]} ${className}`}
    >
      {children}
    </button>
  )
} 