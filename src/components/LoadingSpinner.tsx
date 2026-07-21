import React from 'react'

interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg'
  fullScreen?: boolean
}

const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({ size = 'md', fullScreen = false }) => {
  const sizeClass = {
    sm: 'w-6 h-6',
    md: 'w-12 h-12',
    lg: 'w-16 h-16',
  }[size]

  return (
    <div className={fullScreen ? 'fixed inset-0 flex items-center justify-center bg-dark-900 bg-opacity-80 z-50' : 'flex items-center justify-center'}>
      <div className={`${sizeClass} border-4 border-dark-700 border-t-neon-blue rounded-full animate-spin`}></div>
    </div>
  )
}

export default LoadingSpinner
