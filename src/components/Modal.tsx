import React from 'react'

interface ModalProps {
  isOpen: boolean
  title: string
  children: React.ReactNode
  onClose: () => void
  size?: 'sm' | 'md' | 'lg' | 'xl'
  footer?: React.ReactNode
}

const Modal: React.FC<ModalProps> = ({
  isOpen,
  title,
  children,
  onClose,
  size = 'md',
  footer,
}) => {
  if (!isOpen) return null

  const sizeClass = {
    sm: 'w-full max-w-sm',
    md: 'w-full max-w-md',
    lg: 'w-full max-w-lg',
    xl: 'w-full max-w-2xl',
  }[size]

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Overlay */}
      <div
        className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal Content */}
      <div className={`relative bg-gradient-to-br from-dark-800 to-dark-900 border border-dark-700 rounded-xl shadow-2xl ${sizeClass}`}>
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-dark-700">
          <h2 className="text-xl font-bold text-neon-blue">{title}</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-dark-700 rounded-lg transition-colors"
          >
            ✕
          </button>
        </div>

        {/* Body */}
        <div className="p-6 max-h-96 overflow-y-auto">{children}</div>

        {/* Footer */}
        {footer && (
          <div className="flex items-center justify-end gap-3 p-6 border-t border-dark-700">
            {footer}
          </div>
        )}
      </div>
    </div>
  )
}

export default Modal
