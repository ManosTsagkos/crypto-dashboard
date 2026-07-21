export const generateChartData = (days: number = 7) => {
  const data = []
  const now = Date.now()

  for (let i = days; i >= 0; i--) {
    const date = new Date(now - i * 24 * 60 * 60 * 1000)
    const hours = date.getHours().toString().padStart(2, '0')
    const minutes = date.getMinutes().toString().padStart(2, '0')

    data.push({
      time: `${hours}:${minutes}`,
      BTC: 65000 + Math.random() * 5000,
      ETH: 3200 + Math.random() * 400,
      SOL: 140 + Math.random() * 20,
    })
  }

  return data
}

export const generatePortfolioData = () => [
  { name: 'Bitcoin (BTC)', value: 40, color: '#ff6b35' },
  { name: 'Ethereum (ETH)', value: 30, color: '#b946f5' },
  { name: 'Solana (SOL)', value: 15, color: '#00d4ff' },
  { name: 'Others', value: 15, color: '#00ff88' },
]

export const generateTechnicalIndicators = () => [
  { name: 'RSI', value: Math.random() * 100, fullMark: 100 },
  { name: 'MACD', value: Math.random() * 100, fullMark: 100 },
  { name: 'Bollinger', value: Math.random() * 100, fullMark: 100 },
  { name: 'EMA', value: Math.random() * 100, fullMark: 100 },
  { name: 'SMA', value: Math.random() * 100, fullMark: 100 },
]
