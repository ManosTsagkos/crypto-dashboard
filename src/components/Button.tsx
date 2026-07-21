import React from 'react'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  isLoading?: boolean
  children: React.ReactNode
}

const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  isLoading = false,
  children,
  disabled,
  ...props
}) => {
  const variantClass = {
    primary: 'bg-gradient-to-r from-neon-blue to-neon-purple text-dark-900 hover:shadow-glow',
    secondary: 'bg-gradient-to-r from-neon-green to-neon-blue text-dark-900 hover:shadow-glow',
    outline: 'border border-neon-blue text-neon-blue hover:bg-neon-blue hover:text-dark-900',
    ghost: 'text-neon-blue hover:bg-dark-700',
  }[variant]

  const sizeClass = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2.5 text-base',
    lg: 'px-6 py-3 text-lg',
  }[size]

  return (
    <button
      className={`font-semibold rounded-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 ${variantClass} ${sizeClass}`}
      disabled={disabled || isLoading}
      {...props}
    >
      {isLoading && (
        <span className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
      )}
      {children}
    </button>
  )
}

export default Button
