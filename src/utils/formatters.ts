export const formatPrice = (price: number): string => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(price)
}

export const formatMarketCap = (value: number): string => {
  if (value >= 1e12) {
    return `$${(value / 1e12).toFixed(2)}T`
  }
  if (value >= 1e9) {
    return `$${(value / 1e9).toFixed(2)}B`
  }
  if (value >= 1e6) {
    return `$${(value / 1e6).toFixed(2)}M`
  }
  return `$${value.toFixed(2)}`
}

export const formatPercentage = (value: number): string => {
  return `${value > 0 ? '+' : ''}${value.toFixed(2)}%`
}

export const getChangeColor = (change: number): string => {
  return change > 0 ? 'text-neon-green' : 'text-red-500'
}

export const getSignalColor = (
  signal: 'Strong Buy' | 'Buy' | 'Neutral' | 'Sell' | 'Strong Sell'
): string => {
  switch (signal) {
    case 'Strong Buy':
      return '#00ff88'
    case 'Buy':
      return '#00d4ff'
    case 'Neutral':
      return '#fbbf24'
    case 'Sell':
      return '#ff6b35'
    case 'Strong Sell':
      return '#ef4444'
    default:
      return '#00d4ff'
  }
}
