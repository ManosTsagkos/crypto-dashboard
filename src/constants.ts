// Constants for API endpoints
export const API_ENDPOINTS = {
  COINGECKO_BASE: 'https://api.coingecko.com/api/v3',
  BINANCE_BASE: 'https://api.binance.com/api/v3',
}

// Cryptocurrency symbols and names
export const CRYPTOCURRENCIES = [
  { symbol: 'BTC', name: 'Bitcoin', id: 'bitcoin' },
  { symbol: 'ETH', name: 'Ethereum', id: 'ethereum' },
  { symbol: 'SOL', name: 'Solana', id: 'solana' },
  { symbol: 'XRP', name: 'Ripple', id: 'ripple' },
  { symbol: 'BNB', name: 'Binance Coin', id: 'binancecoin' },
  { symbol: 'ADA', name: 'Cardano', id: 'cardano' },
  { symbol: 'DOT', name: 'Polkadot', id: 'polkadot' },
  { symbol: 'DOGE', name: 'Dogecoin', id: 'dogecoin' },
]

// Trading pairs
export const TRADING_PAIRS = [
  { pair: 'BTC/USDT', base: 'BTC', quote: 'USDT' },
  { pair: 'ETH/USDT', base: 'ETH', quote: 'USDT' },
  { pair: 'SOL/USDT', base: 'SOL', quote: 'USDT' },
  { pair: 'XRP/USDT', base: 'XRP', quote: 'USDT' },
]

// Chart timeframes
export const TIMEFRAMES = [
  { label: '1H', value: '1h' },
  { label: '4H', value: '4h' },
  { label: '1D', value: '1d' },
  { label: '1W', value: '1w' },
  { label: '1M', value: '1m' },
]

// Neon color palette
export const NEON_COLORS = {
  blue: '#00d4ff',
  purple: '#b946f5',
  orange: '#ff6b35',
  green: '#00ff88',
  pink: '#ff006e',
}

// Trading signals
export const TRADING_SIGNALS = {
  STRONG_BUY: 'Strong Buy',
  BUY: 'Buy',
  NEUTRAL: 'Neutral',
  SELL: 'Sell',
  STRONG_SELL: 'Strong Sell',
} as const
