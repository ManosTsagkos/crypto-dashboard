import React from 'react'

interface BadgeProps {
  variant?: 'primary' | 'success' | 'warning' | 'error' | 'info'
  size?: 'sm' | 'md' | 'lg'
  children: React.ReactNode
}

const Badge: React.FC<BadgeProps> = ({ variant = 'primary', size = 'md', children }) => {
  const variantClass = {
    primary: 'bg-neon-blue text-dark-900',
    success: 'bg-neon-green text-dark-900',
    warning: 'bg-neon-orange text-dark-900',
    error: 'bg-red-500 text-white',
    info: 'bg-neon-purple text-white',
  }[variant]

  const sizeClass = {
    sm: 'px-2 py-1 text-xs',
    md: 'px-3 py-1.5 text-sm',
    lg: 'px-4 py-2 text-base',
  }[size]

  return (
    <span className={`font-semibold rounded-full inline-block ${variantClass} ${sizeClass}`}>
      {children}
    </span>
  )
}

export default Badge
