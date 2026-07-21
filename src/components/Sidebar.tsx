import React from 'react'

interface SidebarProps {
  isOpen: boolean
  onClose: () => void
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
  const menuItems = [
    { icon: '📊', label: 'Dashboard', active: true },
    { icon: '📈', label: 'Market Overview' },
    { icon: '💼', label: 'Portfolio' },
    { icon: '🔧', label: 'Trade Tools' },
    { icon: '🤖', label: 'AI Insights', badge: 'NEW' },
    { icon: '📊', label: 'Analytics' },
    { icon: '🔍', label: 'DeFi Scanner' },
    { icon: '📰', label: 'News Feed' },
    { icon: '🔔', label: 'Alerts' },
    { icon: '📅', label: 'Calendar' },
    { icon: '⭐', label: 'Watchlist' },
    { icon: '⚙️', label: 'Settings' },
  ]

  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden" onClick={onClose} />
      )}

      {/* Sidebar */}
      <div
        className={`fixed md:relative left-0 top-0 h-screen w-64 bg-gradient-to-b from-dark-900 to-dark-800 border-r border-dark-700 transition-transform duration-300 z-50 md:z-auto ${
          isOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'
        }`}
      >
        <div className="p-6 border-b border-dark-700">
          <div className="flex items-center gap-2 mb-6">
            <div className="w-10 h-10 bg-gradient-to-br from-neon-blue to-neon-purple rounded-lg flex items-center justify-center">
              <span className="text-white font-bold">₿</span>
            </div>
            <h1 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-neon-blue to-neon-purple">
              CryptoUser
            </h1>
          </div>
          <p className="text-xs text-gray-500 flex items-center gap-2">
            <span className="w-2 h-2 bg-neon-green rounded-full"></span>
            LIVE NOW
          </p>
        </div>

        <nav className="p-4 overflow-y-auto h-[calc(100vh-120px)]">
          {menuItems.map((item, idx) => (
            <button
              key={idx}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg mb-2 transition-all ${
                item.active
                  ? 'bg-gradient-to-r from-neon-blue to-transparent text-neon-blue shadow-glow'
                  : 'text-gray-300 hover:text-neon-blue hover:bg-dark-700'
              }`}
            >
              <span className="text-lg">{item.icon}</span>
              <span className="flex-1 text-left font-medium">{item.label}</span>
              {item.badge && (
                <span className="bg-neon-pink text-dark-900 text-xs px-2 py-1 rounded font-bold">
                  {item.badge}
                </span>
              )}
            </button>
          ))}
        </nav>

        <div className="absolute bottom-6 left-6 right-6 bg-gradient-to-r from-neon-blue to-neon-purple rounded-lg p-4">
          <p className="text-sm font-semibold text-dark-900 mb-2">Upgrade to Pro</p>
          <ul className="text-xs text-dark-900 space-y-1 mb-3">
            <li>✓ Advanced AI Predictions</li>
            <li>✓ Backtesting Tools</li>
            <li>✓ Priority Support</li>
          </ul>
          <button className="w-full bg-dark-900 text-neon-blue font-semibold py-2 rounded-lg hover:shadow-glow transition-all">
            Upgrade Now
          </button>
        </div>
      </div>
    </>
  )
}

export default Sidebar
