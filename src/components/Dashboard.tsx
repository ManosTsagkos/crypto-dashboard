import React, { useState } from 'react'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'
import CryptoChart from './CryptoChart'
import PortfolioChart from './PortfolioChart'
import TechnicalIndicators from './TechnicalIndicators'
import AIInsights from './AIInsights'
import CryptoRow from './CryptoRow'

const Dashboard: React.FC = () => {
  const [timeframe, setTimeframe] = useState('1D')

  // Mock data for charts
  const chartData = [
    { time: '00:00', BTC: 68245, ETH: 3512, SOL: 148.96 },
    { time: '06:00', BTC: 68900, ETH: 3580, SOL: 152.34 },
    { time: '12:00', BTC: 67800, ETH: 3450, SOL: 145.67 },
    { time: '18:00', BTC: 69200, ETH: 3620, SOL: 155.89 },
    { time: '24:00', BTC: 68500, ETH: 3512, SOL: 148.96 },
  ]

  const technicalData = [
    { name: 'RSI', value: 65, fullMark: 100 },
    { name: 'MACD', value: 72, fullMark: 100 },
    { name: 'Bollinger', value: 68, fullMark: 100 },
    { name: 'EMA', value: 70, fullMark: 100 },
    { name: 'SMA', value: 75, fullMark: 100 },
  ]

  const portfolioData = [
    { name: 'BTC', value: 40, color: '#ff6b35' },
    { name: 'ETH', value: 30, color: '#b946f5' },
    { name: 'SOL', value: 15, color: '#00d4ff' },
    { name: 'Others', value: 15, color: '#00ff88' },
  ]

  const cryptoData = [
    { symbol: 'BTC', name: 'Bitcoin', price: '$68,245.75', change: '+2.35%', positive: true, marketCap: '$1.34T', volume: '$29.5B' },
    { symbol: 'ETH', name: 'Ethereum', price: '$3,512.40', change: '+1.28%', positive: true, marketCap: '$421.5B', volume: '$15.2B' },
    { symbol: 'SOL', name: 'Solana', price: '$148.96', change: '-1.23%', positive: false, marketCap: '$68.5B', volume: '$2.1B' },
    { symbol: 'XRP', name: 'Ripple', price: '$0.5987', change: '+0.85%', positive: true, marketCap: '$32.1B', volume: '$1.9B' },
    { symbol: 'BNB', name: 'Binance Coin', price: '$580.25', change: '-1.15%', positive: false, marketCap: '$89.2B', volume: '$1.5B' },
  ]

  return (
    <div className="space-y-6 p-6">
      {/* Welcome Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-2 bg-gradient-to-br from-dark-800 to-dark-900 border border-dark-700 rounded-xl p-8">
          <h2 className="text-3xl font-bold mb-2">Welcome back, Trader! 👋</h2>
          <p className="text-gray-400 mb-6">Your portfolio is up 12.45% this month. Great performance!</p>
          <div className="flex gap-4">
            <button className="px-6 py-3 bg-gradient-to-r from-neon-blue to-neon-purple text-dark-900 font-semibold rounded-lg hover:shadow-glow transition-all">
              Start Trading
            </button>
            <button className="px-6 py-3 border border-neon-blue text-neon-blue font-semibold rounded-lg hover:bg-neon-blue hover:text-dark-900 transition-all">
              View Portfolio
            </button>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="bg-gradient-to-br from-dark-800 to-dark-900 border border-dark-700 rounded-xl p-6">
          <h3 className="text-lg font-bold mb-4 text-neon-blue">Quick Stats</h3>
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-gray-400">Portfolio Value</span>
              <span className="font-bold text-neon-green">$125,430.50</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-400">24h Change</span>
              <span className="font-bold text-neon-green">+$19,125.50</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-400">Monthly Profit</span>
              <span className="font-bold text-neon-green">+12.45%</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* BTC Chart */}
        <div className="lg:col-span-1 bg-gradient-to-br from-dark-800 to-dark-900 border border-dark-700 rounded-xl p-6">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-bold">BTC / USDT</h3>
            <span className="text-2xl font-bold text-neon-orange">$68,245.75</span>
          </div>
          <p className="text-neon-green text-sm mb-4">▲ +2.35%</p>
          <CryptoChart data={chartData} dataKey="BTC" color="#ff6b35" height={200} />
        </div>

        {/* ETH Chart */}
        <div className="lg:col-span-1 bg-gradient-to-br from-dark-800 to-dark-900 border border-dark-700 rounded-xl p-6">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-bold">ETH / USDT</h3>
            <span className="text-2xl font-bold text-neon-blue">$3,512.40</span>
          </div>
          <p className="text-neon-green text-sm mb-4">▲ +1.28%</p>
          <CryptoChart data={chartData} dataKey="ETH" color="#00d4ff" height={200} />
        </div>

        {/* SOL Chart */}
        <div className="lg:col-span-1 bg-gradient-to-br from-dark-800 to-dark-900 border border-dark-700 rounded-xl p-6">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-bold">SOL / USDT</h3>
            <span className="text-2xl font-bold text-neon-purple">$148.96</span>
          </div>
          <p className="text-red-500 text-sm mb-4">▼ -1.23%</p>
          <CryptoChart data={chartData} dataKey="SOL" color="#b946f5" height={200} />
        </div>
      </div>

      {/* Portfolio & Technical Analysis */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Portfolio */}
        <div className="bg-gradient-to-br from-dark-800 to-dark-900 border border-dark-700 rounded-xl p-6">
          <h3 className="text-xl font-bold mb-4 text-neon-blue">Portfolio Breakdown</h3>
          <PortfolioChart data={portfolioData} height={300} />
        </div>

        {/* Technical Indicators */}
        <div className="bg-gradient-to-br from-dark-800 to-dark-900 border border-dark-700 rounded-xl p-6">
          <h3 className="text-xl font-bold mb-4 text-neon-purple">Technical Overview</h3>
          <TechnicalIndicators data={technicalData} height={300} />
        </div>
      </div>

      {/* AI Insights */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <AIInsights
          coin="Ethereum (ETH)"
          signal="Strong Buy"
          confidence={85}
          analysis="AI analysis detects a strong buy signal based on market trends, news, and technical chart data."
        />
        <AIInsights
          coin="Bitcoin (BTC)"
          signal="Buy"
          confidence={72}
          analysis="Bullish momentum detected. Support level holding strong. Consider entry on dips."
        />
        <AIInsights
          coin="Solana (SOL)"
          signal="Neutral"
          confidence={58}
          analysis="Mixed signals. Waiting for confirmation. Monitor resistance levels closely."
        />
      </div>

      {/* Market Trends Table */}
      <div className="bg-gradient-to-br from-dark-800 to-dark-900 border border-dark-700 rounded-xl p-6">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-xl font-bold">Market Trend</h3>
          <div className="flex gap-2">
            {['1H', '1D', '1W', '1M', '1Y', 'ALL'].map((tf) => (
              <button
                key={tf}
                onClick={() => setTimeframe(tf)}
                className={`px-4 py-2 rounded-lg font-semibold transition-all ${
                  timeframe === tf
                    ? 'bg-neon-blue text-dark-900'
                    : 'bg-dark-700 text-gray-400 hover:text-neon-blue'
                }`}
              >
                {tf}
              </button>
            ))}
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="border-b border-dark-700">
              <tr>
                <th className="px-4 py-3 text-left text-gray-500 font-semibold">Coin</th>
                <th className="px-4 py-3 text-right text-gray-500 font-semibold">Price</th>
                <th className="px-4 py-3 text-right text-gray-500 font-semibold">Change</th>
                <th className="px-4 py-3 text-right text-gray-500 font-semibold">Market Cap</th>
                <th className="px-4 py-3 text-right text-gray-500 font-semibold">Volume</th>
              </tr>
            </thead>
            <tbody>
              {cryptoData.map((crypto, idx) => (
                <CryptoRow key={idx} {...crypto} />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
