import React from 'react'

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string
  error?: string
  helperText?: string
}

const Input: React.FC<InputProps> = ({
  label,
  error,
  helperText,
  ...props
}) => {
  return (
    <div className="flex flex-col gap-2">
      {label && <label className="text-sm font-semibold text-neon-blue">{label}</label>}
      <input
        className={`px-4 py-2.5 bg-dark-800 border rounded-lg text-white placeholder-gray-500 focus:outline-none transition-all ${
          error ? 'border-red-500' : 'border-dark-700 focus:border-neon-blue'
        }`}
        {...props}
      />
      {error && <p className="text-xs text-red-500">{error}</p>}
      {helperText && <p className="text-xs text-gray-400">{helperText}</p>}
    </div>
  )
}

export default Input
