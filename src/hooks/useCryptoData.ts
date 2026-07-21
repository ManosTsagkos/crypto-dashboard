import { useState, useEffect } from 'react'

interface CryptoPrice {
  symbol: string
  price: number
  change24h: number
}

export const useCryptoPrices = (symbols: string[]) => {
  const [prices, setPrices] = useState<CryptoPrice[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    // Mock data - Replace with real API calls
    const mockPrices: CryptoPrice[] = [
      { symbol: 'BTC', price: 68245.75, change24h: 2.35 },
      { symbol: 'ETH', price: 3512.4, change24h: 1.28 },
      { symbol: 'SOL', price: 148.96, change24h: -1.23 },
      { symbol: 'XRP', price: 0.5987, change24h: 0.85 },
      { symbol: 'BNB', price: 580.25, change24h: -1.15 },
    ]

    // Simulate API call delay
    const timer = setTimeout(() => {
      setPrices(mockPrices)
      setLoading(false)
    }, 500)

    return () => clearTimeout(timer)
  }, [symbols])

  return { prices, loading, error }
}

export const useMarketData = () => {
  const [marketData, setMarketData] = useState({
    marketCap: '$2.45T',
    volume24h: '$98.45B',
    dominance: 54.21,
    fearGreedIndex: 72,
  })
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Mock data - Replace with real API
    const timer = setTimeout(() => {
      setLoading(false)
    }, 1000)

    return () => clearTimeout(timer)
  }, [])

  return { marketData, loading }
}
