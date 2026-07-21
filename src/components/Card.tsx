import React from 'react'

interface CardProps {
  title?: string
  children: React.ReactNode
  className?: string
  noBorder?: boolean
}

const Card: React.FC<CardProps> = ({
  title,
  children,
  className = '',
  noBorder = false,
}) => {
  return (
    <div
      className={`bg-gradient-to-br from-dark-800 to-dark-900 rounded-xl p-6 ${
        !noBorder && 'border border-dark-700 hover:border-neon-blue transition-colors'
      } ${className}`}
    >
      {title && <h3 className="text-lg font-bold text-neon-blue mb-4">{title}</h3>}
      {children}
    </div>
  )
}

export default Card
