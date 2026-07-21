import React from 'react'

interface NotificationProps {
  type: 'success' | 'error' | 'warning' | 'info'
  title: string
  message: string
  onClose: () => void
  autoClose?: boolean
  duration?: number
}

const Notification: React.FC<NotificationProps> = ({
  type,
  title,
  message,
  onClose,
  autoClose = true,
  duration = 5000,
}) => {
  React.useEffect(() => {
    if (autoClose) {
      const timer = setTimeout(onClose, duration)
      return () => clearTimeout(timer)
    }
  }, [autoClose, duration, onClose])

  const typeStyles = {
    success: 'border-neon-green bg-green-900/20',
    error: 'border-red-500 bg-red-900/20',
    warning: 'border-neon-orange bg-orange-900/20',
    info: 'border-neon-blue bg-blue-900/20',
  }[type]

  const typeIcons = {
    success: '✓',
    error: '✕',
    warning: '⚠',
    info: 'ℹ',
  }[type]

  const typeColors = {
    success: 'text-neon-green',
    error: 'text-red-500',
    warning: 'text-neon-orange',
    info: 'text-neon-blue',
  }[type]

  return (
    <div className={`fixed top-6 right-6 max-w-md p-4 border rounded-lg ${typeStyles} backdrop-blur-sm z-50 animate-slide-in`}>
      <div className="flex items-start gap-4">
        <span className={`text-xl font-bold ${typeColors} mt-1`}>{typeIcons}</span>
        <div className="flex-1">
          <h3 className="font-semibold text-white mb-1">{title}</h3>
          <p className="text-sm text-gray-300">{message}</p>
        </div>
        <button
          onClick={onClose}
          className="text-gray-500 hover:text-white transition-colors"
        >
          ✕
        </button>
      </div>
    </div>
  )
}

export default Notification
