import React, { useState } from 'react'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'

interface MultiCoinChartProps {
  data: any[]
  coins: string[]
  colors: string[]
  height?: number
}

const MultiCoinChart: React.FC<MultiCoinChartProps> = ({
  data,
  coins,
  colors,
  height = 300,
}) => {
  return (
    <ResponsiveContainer width="100%" height={height}>
      <LineChart data={data}>
        <CartesianGrid strokeDasharray="3 3" stroke="rgba(0, 212, 255, 0.1)" />
        <XAxis dataKey="time" stroke="#666" fontSize={12} />
        <YAxis stroke="#666" fontSize={12} />
        <Tooltip
          contentStyle={{
            backgroundColor: 'rgba(15, 15, 30, 0.95)',
            border: '1px solid #00d4ff',
            borderRadius: '8px',
          }}
          labelStyle={{ color: '#fff' }}
        />
        <Legend wrapperStyle={{ paddingTop: '20px' }} />
        {coins.map((coin, index) => (
          <Line
            key={coin}
            type="monotone"
            dataKey={coin}
            stroke={colors[index]}
            strokeWidth={2}
            dot={false}
            isAnimationActive={true}
          />
        ))}
      </LineChart>
    </ResponsiveContainer>
  )
}

export default MultiCoinChart
