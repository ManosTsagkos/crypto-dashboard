# Crypto Dashboard 🚀

An interactive cryptocurrency trading dashboard built with React, TypeScript, Three.js, and Tailwind CSS.

## Features ✨

- **Interactive 3D Globe** - Real-time rotating globe with mouse interaction
- **Live Market Data** - Bitcoin, Ethereum, Solana, and other cryptocurrencies
- **AI Insights** - Smart trading signals and confidence levels
- **Portfolio Tracking** - Visual breakdown of your portfolio
- **Technical Analysis** - Radar charts for technical indicators
- **Market Trends** - Real-time chart data with multiple timeframes
- **Responsive Design** - Works seamlessly on desktop and mobile
- **Dark Theme** - Eye-friendly neon color scheme

## Tech Stack 🛠️

- **React 18** - UI framework
- **TypeScript** - Type-safe development
- **Three.js** - 3D graphics for the globe
- **Recharts** - Data visualization
- **Tailwind CSS** - Utility-first styling
- **Vite** - Lightning-fast build tool

## Getting Started 🎯

### Prerequisites

- Node.js 16+ and npm/yarn

### Installation

1. Clone the repository
```bash
git clone https://github.com/ManosTsagkos/crypto-dashboard.git
cd crypto-dashboard
```

2. Install dependencies
```bash
npm install
```

3. Start the development server
```bash
npm run dev
```

4. Open [http://localhost:5173](http://localhost:5173) in your browser

### Build for Production

```bash
npm run build
npm run preview
```

## Project Structure 📁

```
src/
├── components/
│   ├── Globe.tsx              # 3D interactive globe
│   ├── Dashboard.tsx          # Main dashboard layout
│   ├── Header.tsx             # Top navigation bar
│   ├── Sidebar.tsx            # Left sidebar menu
│   ├── CryptoChart.tsx        # Area chart component
│   ├── PortfolioChart.tsx     # Donut chart for portfolio
│   ├── TechnicalIndicators.tsx # Radar chart
│   ├── AIInsights.tsx         # AI trading signals
│   ├── StatCard.tsx           # Statistics card
│   └── CryptoRow.tsx          # Table row component
├── App.tsx                    # Main app component
├── main.tsx                   # Entry point
├── index.css                  # Global styles
├── vite.config.ts             # Vite configuration
├── tailwind.config.js         # Tailwind config
├── tsconfig.json              # TypeScript config
└── postcss.config.js          # PostCSS config
```

## Features in Detail 🔍

### Interactive Globe
- **3D Rendering** - Built with Three.js for smooth 60fps animation
- **Mouse Interaction** - Rotate globe by moving your mouse
- **Procedural Texture** - Dynamic Earth texture with cities
- **Glow Effect** - Wireframe overlay for sci-fi aesthetics

### AI Insights
- Real-time trading signals (Strong Buy, Buy, Neutral, Sell, Strong Sell)
- Confidence scores with animated progress bars
- Data-driven analysis descriptions
- Action buttons for quick trading

### Market Overview
- Live cryptocurrency prices
- 24-hour percentage changes
- Market cap and trading volume
- Color-coded performance indicators

### Portfolio Management
- Visual pie chart breakdown
- Asset allocation percentage
- Performance metrics
- Quick access to trading tools

## Customization 🎨

### Colors
Edit `tailwind.config.js` to customize the neon color scheme:

```javascript
colors: {
  neon: {
    blue: "#00d4ff",
    purple: "#b946f5",
    orange: "#ff6b35",
    green: "#00ff88",
    pink: "#ff006e",
  },
}
```

### API Integration
Replace mock data with real API calls:

```typescript
import axios from 'axios';

const fetchCryptoData = async () => {
  const response = await axios.get('https://api.coingecko.com/api/v3/...');
  return response.data;
};
```

## Performance 🚀

- Lightweight bundle size
- Optimized Three.js rendering
- Lazy-loaded components
- Responsive images
- Production-ready build

## Browser Support 🌐

- Chrome/Chromium (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License 📄

MIT License - feel free to use this project for personal or commercial purposes.

## Contributing 🤝

Contributions are welcome! Please feel free to submit a Pull Request.

## Roadmap 🗺️

- [ ] Real API integration (CoinGecko, Binance)
- [ ] WebSocket for live updates
- [ ] User authentication
- [ ] Portfolio tracking with database
- [ ] Advanced technical indicators
- [ ] Trading bot integration
- [ ] Mobile app version
- [ ] Dark/Light theme toggle

## Support 💬

If you have any questions or issues, please open a GitHub issue or contact the maintainer.

---

**Built with ❤️ by ManosTsagkos**
