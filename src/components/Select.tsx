import React from 'react'

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label?: string
  error?: string
  options: { value: string; label: string }[]
}

const Select: React.FC<SelectProps> = ({
  label,
  error,
  options,
  ...props
}) => {
  return (
    <div className="flex flex-col gap-2">
      {label && <label className="text-sm font-semibold text-neon-blue">{label}</label>}
      <select
        className={`px-4 py-2.5 bg-dark-800 border rounded-lg text-white focus:outline-none transition-all ${
          error ? 'border-red-500' : 'border-dark-700 focus:border-neon-blue'
        }`}
        {...props}
      >
        <option value="">Select an option</option>
        {options.map((opt) => (
          <option key={opt.value} value={opt.value} className="bg-dark-800">
            {opt.label}
          </option>
        ))}
      </select>
      {error && <p className="text-xs text-red-500">{error}</p>}
    </div>
  )
}

export default Select
