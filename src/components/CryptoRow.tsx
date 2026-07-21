import React from 'react'

interface CryptoRowProps {
  symbol: string
  name: string
  price: string
  change: string
  changePositive: boolean
  marketCap: string
  volume: string
}

const CryptoRow: React.FC<CryptoRowProps> = ({
  symbol,
  name,
  price,
  change,
  changePositive,
  marketCap,
  volume,
}) => {
  return (
    <tr className="border-b border-dark-700 hover:bg-dark-800 transition-colors">
      <td className="px-4 py-3">
        <div>
          <div className="font-semibold text-neon-blue">{symbol}</div>
          <div className="text-xs text-gray-500">{name}</div>
        </div>
      </td>
      <td className="px-4 py-3 text-right font-semibold">{price}</td>
      <td className={`px-4 py-3 text-right ${changePositive ? 'text-neon-green' : 'text-red-500'}`}>
        {changePositive ? '▲' : '▼'} {change}
      </td>
      <td className="px-4 py-3 text-right text-gray-400 text-sm">{marketCap}</td>
      <td className="px-4 py-3 text-right text-gray-400 text-sm">{volume}</td>
    </tr>
  )
}

export default CryptoRow
