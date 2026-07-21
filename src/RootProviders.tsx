import React from 'react'
import App from './App'
import { ThemeProvider } from './context/ThemeContext'
import { UserProvider } from './context/UserContext'
import { NotificationProvider } from './context/NotificationContext'
import { PortfolioProvider } from './context/PortfolioContext'

const RootProviders: React.FC = () => {
  return (
    <ThemeProvider>
      <UserProvider>
        <NotificationProvider>
          <PortfolioProvider>
            <App />
          </PortfolioProvider>
        </NotificationProvider>
      </UserProvider>
    </ThemeProvider>
  )
}

export default RootProviders
