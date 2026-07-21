import React from 'react'

interface TooltipProps {
  content: string
  children: React.ReactNode
  position?: 'top' | 'bottom' | 'left' | 'right'
}

const Tooltip: React.FC<TooltipProps> = ({ content, children, position = 'top' }) => {
  const [isVisible, setIsVisible] = React.useState(false)

  const positionClass = {
    top: 'bottom-full mb-2 left-1/2 -translate-x-1/2',
    bottom: 'top-full mt-2 left-1/2 -translate-x-1/2',
    left: 'right-full mr-2 top-1/2 -translate-y-1/2',
    right: 'left-full ml-2 top-1/2 -translate-y-1/2',
  }[position]

  return (
    <div className="relative inline-block">
      <div
        onMouseEnter={() => setIsVisible(true)}
        onMouseLeave={() => setIsVisible(false)}
      >
        {children}
      </div>

      {isVisible && (
        <div
          className={`absolute ${positionClass} bg-dark-800 border border-neon-blue text-neon-blue text-sm px-3 py-2 rounded-lg whitespace-nowrap z-50 pointer-events-none`}
        >
          {content}
          <div className="absolute w-2 h-2 bg-dark-800 border-r border-b border-neon-blue transform rotate-45" />
        </div>
      )}
    </div>
  )
}

export default Tooltip
