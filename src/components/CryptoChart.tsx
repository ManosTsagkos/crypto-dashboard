import React from 'react'
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Area,
  AreaChart,
} from 'recharts'

interface ChartDataPoint {
  time: string
  [key: string]: string | number
}

interface CryptoChartProps {
  data: ChartDataPoint[]
  dataKey: string
  color?: string
  height?: number
}

const CryptoChart: React.FC<CryptoChartProps> = ({
  data,
  dataKey,
  color = '#00d4ff',
  height = 200,
}) => {
  return (
    <ResponsiveContainer width="100%" height={height}>
      <AreaChart data={data}>
        <defs>
          <linearGradient id={`gradient-${dataKey}`} x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor={color} stopOpacity={0.8} />
            <stop offset="95%" stopColor={color} stopOpacity={0} />
          </linearGradient>
        </defs>
        <CartesianGrid strokeDasharray="3 3" stroke="rgba(0, 212, 255, 0.1)" />
        <XAxis dataKey="time" stroke="#666" fontSize={12} />
        <YAxis stroke="#666" fontSize={12} />
        <Tooltip
          contentStyle={{
            backgroundColor: 'rgba(15, 15, 30, 0.95)',
            border: `1px solid ${color}`,
            borderRadius: '8px',
          }}
          labelStyle={{ color: '#fff' }}
        />
        <Area
          type="monotone"
          dataKey={dataKey}
          stroke={color}
          fill={`url(#gradient-${dataKey})`}
          strokeWidth={2}
        />
      </AreaChart>
    </ResponsiveContainer>
  )
}

export default CryptoChart
