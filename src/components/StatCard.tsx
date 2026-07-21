import React from 'react'

interface StatCardProps {
  icon: React.ReactNode
  label: string
  value: string
  change: string
  changePositive: boolean
}

const StatCard: React.FC<StatCardProps> = ({ icon, label, value, change, changePositive }) => {
  return (
    <div className="bg-gradient-to-br from-dark-800 to-dark-900 border border-dark-700 rounded-lg p-4 hover:border-neon-blue transition-all hover:shadow-glow">
      <div className="flex items-center justify-between mb-3">
        <span className="text-gray-400 text-sm">{label}</span>
        <div className="text-neon-blue">{icon}</div>
      </div>
      <div className="text-2xl font-bold text-white mb-2">{value}</div>
      <div className={`text-sm ${changePositive ? 'text-neon-green' : 'text-red-500'}`}>
        {changePositive ? '▲' : '▼'} {change}
      </div>
    </div>
  )
}

export default StatCard
