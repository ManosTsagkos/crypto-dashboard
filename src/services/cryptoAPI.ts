import axios from 'axios'

const API_BASE_URL = 'https://api.coingecko.com/api/v3'

export const cryptoAPI = {
  // Get current prices for multiple cryptocurrencies
  getPrices: async (ids: string[], vsCurrency: string = 'usd') => {
    try {
      const response = await axios.get(`${API_BASE_URL}/simple/price`, {
        params: {
          ids: ids.join(','),
          vs_currencies: vsCurrency,
          include_market_cap: true,
          include_24hr_vol: true,
          include_24hr_change: true,
        },
      })
      return response.data
    } catch (error) {
      console.error('Error fetching prices:', error)
      throw error
    }
  },

  // Get market data
  getMarketData: async () => {
    try {
      const response = await axios.get(`${API_BASE_URL}/global`)
      return response.data
    } catch (error) {
      console.error('Error fetching market data:', error)
      throw error
    }
  },

  // Get historical price data
  getHistoricalData: async (id: string, days: number = 30) => {
    try {
      const response = await axios.get(
        `${API_BASE_URL}/coins/${id}/market_chart`,
        {
          params: {
            vs_currency: 'usd',
            days: days,
          },
        }
      )
      return response.data
    } catch (error) {
      console.error('Error fetching historical data:', error)
      throw error
    }
  },

  // Get top cryptocurrencies
  getTopCoins: async (order: string = 'market_cap_desc', perPage: number = 50) => {
    try {
      const response = await axios.get(`${API_BASE_URL}/coins/markets`, {
        params: {
          vs_currency: 'usd',
          order: order,
          per_page: perPage,
          page: 1,
          sparkline: false,
        },
      })
      return response.data
    } catch (error) {
      console.error('Error fetching top coins:', error)
      throw error
    }
  },

  // Get trending coins
  getTrendingCoins: async () => {
    try {
      const response = await axios.get(`${API_BASE_URL}/search/trending`)
      return response.data
    } catch (error) {
      console.error('Error fetching trending coins:', error)
      throw error
    }
  },
}
