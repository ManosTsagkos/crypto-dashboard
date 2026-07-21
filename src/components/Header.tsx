import React from 'react'

interface HeaderProps {
  onMenuToggle: () => void
}

const Header: React.FC<HeaderProps> = ({ onMenuToggle }) => {
  const stats = [
    { label: 'BTC Dominance', value: '54.21%', change: '+1.28%', positive: true },
    { label: 'Total Market Cap', value: '$2.45T', change: '+3.21%', positive: true },
    { label: '24h Volume', value: '$98.45B', change: '+2.35%', positive: true },
    { label: 'Fear & Greed Index', value: '72 (Greed)', change: 'Normal', positive: true },
  ]

  return (
    <div className="bg-gradient-to-r from-dark-900 to-dark-800 border-b border-dark-700 sticky top-0 z-30">
      {/* Stats Bar */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-4 border-b border-dark-700">
        {stats.map((stat, idx) => (
          <div key={idx} className="flex flex-col">
            <span className="text-xs text-gray-500 uppercase tracking-wide">{stat.label}</span>
            <div className="flex items-baseline gap-2">
              <span className="text-sm md:text-lg font-bold text-neon-blue">{stat.value}</span>
              <span className={`text-xs ${stat.positive ? 'text-neon-green' : 'text-red-500'}`}>
                {stat.positive ? '▲' : '▼'} {stat.change}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Top Navigation */}
      <div className="flex items-center justify-between px-6 py-4">
        <div className="flex items-center gap-4">
          <button
            onClick={onMenuToggle}
            className="md:hidden p-2 hover:bg-dark-800 rounded-lg transition-colors"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
          <div className="hidden md:flex items-center gap-2 flex-1 max-w-md bg-dark-800 rounded-lg px-4 py-2">
            <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <input
              type="text"
              placeholder="Search coins, markets, news or tools..."
              className="bg-transparent text-sm text-gray-300 placeholder-gray-600 outline-none flex-1"
            />
          </div>
        </div>

        <div className="flex items-center gap-4">
          <button className="relative p-2 hover:bg-dark-800 rounded-lg transition-colors">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
            </svg>
            <span className="absolute top-1 right-1 w-2 h-2 bg-neon-pink rounded-full"></span>
          </button>
          <button className="relative p-2 hover:bg-dark-800 rounded-lg transition-colors">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8a6 6 0 016-6h8a6 6 0 016 6v9a6 6 0 01-6 6H9a6 6 0 01-6-6V8z" />
            </svg>
            <span className="absolute top-1 right-1 w-2 h-2 bg-neon-pink rounded-full"></span>
          </button>
          <div className="w-10 h-10 bg-gradient-to-br from-neon-blue to-neon-purple rounded-full cursor-pointer hover:shadow-glow transition-all"></div>
        </div>
      </div>
    </div>
  )
}

export default Header
