import React, { useState, useEffect } from 'react'

interface AIInsightsProps {
  coin: string
  signal: 'Strong Buy' | 'Buy' | 'Neutral' | 'Sell' | 'Strong Sell'
  confidence: number
  analysis: string
}

const AIInsights: React.FC<AIInsightsProps> = ({ coin, signal, confidence, analysis }) => {
  const [animatedValue, setAnimatedValue] = useState(0)

  useEffect(() => {
    let start = 0
    const end = confidence
    const increment = end / 30
    const timer = setInterval(() => {
      start += increment
      if (start >= end) {
        setAnimatedValue(end)
        clearInterval(timer)
      } else {
        setAnimatedValue(start)
      }
    }, 30)
    return () => clearInterval(timer)
  }, [confidence])

  const getSignalColor = (sig: string) => {
    switch (sig) {
      case 'Strong Buy':
        return 'text-neon-green'
      case 'Buy':
        return 'text-neon-blue'
      case 'Neutral':
        return 'text-yellow-500'
      case 'Sell':
        return 'text-orange-500'
      case 'Strong Sell':
        return 'text-red-500'
      default:
        return 'text-neon-blue'
    }
  }

  const getConfidenceColor = (value: number) => {
    if (value >= 80) return 'bg-neon-green'
    if (value >= 60) return 'bg-neon-blue'
    if (value >= 40) return 'bg-yellow-500'
    return 'bg-red-500'
  }

  return (
    <div className="bg-gradient-to-br from-dark-800 to-dark-900 border border-neon-purple rounded-xl p-6 hover:shadow-glow-purple transition-all">
      <div className="flex items-center justify-between mb-4">
        <div>
          <h3 className="text-xl font-bold text-neon-blue mb-1">{coin}</h3>
          <p className={`text-lg font-semibold ${getSignalColor(signal)}`}>{signal}</p>
        </div>
        <div className="text-4xl font-bold text-neon-purple">{Math.round(animatedValue)}%</div>
      </div>

      <div className="mb-4">
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm text-gray-400">AI Confidence</span>
          <span className="text-sm font-semibold text-neon-blue">{Math.round(animatedValue)}%</span>
        </div>
        <div className="w-full bg-dark-700 rounded-full h-2 overflow-hidden">
          <div
            className={`h-full ${getConfidenceColor(animatedValue)} rounded-full transition-all duration-500`}
            style={{ width: `${animatedValue}%` }}
          />
        </div>
      </div>

      <p className="text-sm text-gray-300 leading-relaxed">{analysis}</p>

      <div className="mt-4 flex gap-2">
        <button className="flex-1 px-4 py-2 bg-neon-green text-dark-900 font-semibold rounded-lg hover:shadow-glow transition-all text-sm">
          View Analysis
        </button>
        <button className="flex-1 px-4 py-2 border border-neon-blue text-neon-blue font-semibold rounded-lg hover:bg-neon-blue hover:text-dark-900 transition-all text-sm">
          Trade
        </button>
      </div>
    </div>
  )
}

export default AIInsights
