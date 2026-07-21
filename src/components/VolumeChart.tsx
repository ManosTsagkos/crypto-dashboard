import React from 'react'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'

interface VolumeChartProps {
  data: { name: string; value: number }[]
  height?: number
}

const VolumeChart: React.FC<VolumeChartProps> = ({ data, height = 250 }) => {
  return (
    <ResponsiveContainer width="100%" height={height}>
      <BarChart data={data}>
        <CartesianGrid strokeDasharray="3 3" stroke="rgba(0, 212, 255, 0.1)" />
        <XAxis dataKey="name" stroke="#666" fontSize={12} />
        <YAxis stroke="#666" fontSize={12} />
        <Tooltip
          contentStyle={{
            backgroundColor: 'rgba(15, 15, 30, 0.95)',
            border: '1px solid #00d4ff',
            borderRadius: '8px',
          }}
          labelStyle={{ color: '#fff' }}
        />
        <Bar dataKey="value" fill="#00d4ff" radius={[8, 8, 0, 0]} />
      </BarChart>
    </ResponsiveContainer>
  )
}

export default VolumeChart
