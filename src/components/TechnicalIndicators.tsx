import React from 'react'
import { RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, ResponsiveContainer } from 'recharts'

interface TechnicalIndicator {
  name: string
  value: number
  fullMark: number
}

interface TechnicalIndicatorsProps {
  data: TechnicalIndicator[]
  height?: number
}

const TechnicalIndicators: React.FC<TechnicalIndicatorsProps> = ({ data, height = 300 }) => {
  return (
    <ResponsiveContainer width="100%" height={height}>
      <RadarChart data={data}>
        <PolarGrid stroke="rgba(0, 212, 255, 0.2)" />
        <PolarAngleAxis dataKey="name" stroke="#666" />
        <PolarRadiusAxis stroke="#666" />
        <Radar name="Technical Analysis" dataKey="value" stroke="#b946f5" fill="#b946f5" fillOpacity={0.3} />
      </RadarChart>
    </ResponsiveContainer>
  )
}

export default TechnicalIndicators
