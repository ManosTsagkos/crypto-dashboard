import React from 'react'
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from 'recharts'

interface PortfolioData {
  name: string
  value: number
  color: string
}

interface PortfolioChartProps {
  data: PortfolioData[]
  height?: number
}

const PortfolioChart: React.FC<PortfolioChartProps> = ({ data, height = 300 }) => {
  return (
    <ResponsiveContainer width="100%" height={height}>
      <PieChart>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          innerRadius={60}
          outerRadius={100}
          paddingAngle={2}
          dataKey="value"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={entry.color} />
          ))}
        </Pie>
        <Tooltip
          contentStyle={{
            backgroundColor: 'rgba(15, 15, 30, 0.95)',
            border: '1px solid #00d4ff',
            borderRadius: '8px',
          }}
        />
        <Legend wrapperStyle={{ paddingTop: '20px', color: '#fff' }} />
      </PieChart>
    </ResponsiveContainer>
  )
}

export default PortfolioChart
