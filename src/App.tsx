import React, { useState } from 'react'
import Sidebar from './components/Sidebar'
import Header from './components/Header'
import Dashboard from './components/Dashboard'
import Globe from './components/Globe'

const App: React.FC = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <div className="flex h-screen bg-dark-900 text-white">
      {/* Sidebar */}
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <Header onMenuToggle={() => setSidebarOpen(!sidebarOpen)} />

        {/* Content Area */}
        <div className="flex-1 overflow-y-auto">
          {/* Global Market Overview with Globe */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 p-6 bg-gradient-to-b from-dark-800 to-dark-900">
            {/* Left side - Market Overview */}
            <div className="lg:col-span-2 space-y-6">
              {/* Market Overview Title */}
              <div>
                <h2 className="text-2xl font-bold text-neon-blue mb-2">GLOBAL MARKET OVERVIEW</h2>
                <p className="text-gray-500">Real-time cryptocurrency market data and insights</p>
              </div>

              {/* Market Stats */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-gradient-to-br from-dark-700 to-dark-800 border border-dark-600 rounded-lg p-4">
                  <p className="text-gray-500 text-sm mb-2">Market Cap</p>
                  <h3 className="text-2xl font-bold text-neon-blue">$2.45T</h3>
                  <p className="text-neon-green text-sm mt-1">▲ +3.21%</p>
                </div>
                <div className="bg-gradient-to-br from-dark-700 to-dark-800 border border-dark-600 rounded-lg p-4">
                  <p className="text-gray-500 text-sm mb-2">24h Volume</p>
                  <h3 className="text-2xl font-bold text-neon-blue">$98.45B</h3>
                  <p className="text-neon-green text-sm mt-1">▲ +23.5%</p>
                </div>
              </div>

              {/* Market Trend Chart */}
              <div className="bg-gradient-to-br from-dark-700 to-dark-800 border border-dark-600 rounded-lg p-6">
                <h3 className="text-lg font-bold mb-4 text-neon-purple">Market Trend</h3>
                <div className="h-40 bg-dark-900 rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <svg className="w-24 h-24 mx-auto text-neon-purple opacity-50 mb-2" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M13 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V9z"></path>
                      <polyline points="13 2 13 9 20 9" stroke="currentColor" strokeWidth="2" fill="none"></polyline>
                    </svg>
                    <p className="text-gray-500">Chart data loading...</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right side - Interactive Globe */}
            <div className="bg-gradient-to-br from-dark-700 to-dark-800 border border-dark-600 rounded-lg p-6 flex flex-col items-center justify-center">
              <h3 className="text-lg font-bold mb-4 text-neon-blue text-center">Global Markets</h3>
              <div className="w-full h-64 flex items-center justify-center">
                <Globe width={300} height={300} />
              </div>
              <p className="text-xs text-gray-500 text-center mt-4">Move your mouse to rotate the globe</p>
            </div>
          </div>

          {/* Dashboard Content */}
          <Dashboard />
        </div>
      </div>
    </div>
  )
}

export default App
