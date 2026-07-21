import React, { createContext, useState, useCallback } from 'react'

interface PortfolioItem {
  id: string
  symbol: string
  amount: number
  price: number
}

interface PortfolioContextType {
  portfolio: PortfolioItem[]
  addItem: (item: PortfolioItem) => void
  removeItem: (id: string) => void
  updateItem: (id: string, item: PortfolioItem) => void
  getTotal: () => number
}

const PortfolioContext = createContext<PortfolioContextType | undefined>(undefined)

export const PortfolioProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [portfolio, setPortfolio] = useState<PortfolioItem[]>([])

  const addItem = useCallback((item: PortfolioItem) => {
    setPortfolio((prev) => [...prev, item])
  }, [])

  const removeItem = useCallback((id: string) => {
    setPortfolio((prev) => prev.filter((item) => item.id !== id))
  }, [])

  const updateItem = useCallback((id: string, item: PortfolioItem) => {
    setPortfolio((prev) => prev.map((p) => (p.id === id ? item : p)))
  }, [])

  const getTotal = useCallback(() => {
    return portfolio.reduce((total, item) => total + item.amount * item.price, 0)
  }, [portfolio])

  return (
    <PortfolioContext.Provider value={{ portfolio, addItem, removeItem, updateItem, getTotal }}>
      {children}
    </PortfolioContext.Provider>
  )
}

export const usePortfolio = () => {
  const context = React.useContext(PortfolioContext)
  if (!context) {
    throw new Error('usePortfolio must be used within PortfolioProvider')
  }
  return context
}
