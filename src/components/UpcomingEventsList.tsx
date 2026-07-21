import React from 'react'

interface EventProps {
  title: string
  date: string
  description: string
  importance: 'high' | 'medium' | 'low'
}

const UpcomingEventsList: React.FC<{ events: EventProps[] }> = ({ events }) => {
  const getImportanceColor = (importance: string) => {
    switch (importance) {
      case 'high':
        return 'border-l-red-500'
      case 'medium':
        return 'border-l-neon-orange'
      case 'low':
        return 'border-l-neon-green'
      default:
        return 'border-l-neon-blue'
    }
  }

  return (
    <div className="space-y-3">
      {events.map((event, idx) => (
        <div
          key={idx}
          className={`bg-dark-800 border-l-4 ${getImportanceColor(
            event.importance
          )} rounded-r-lg p-3 hover:shadow-glow transition-all`}
        >
          <div className="flex justify-between items-start mb-1">
            <h4 className="font-semibold text-neon-blue text-sm">{event.title}</h4>
            <span className="text-xs text-gray-500">{event.date}</span>
          </div>
          <p className="text-xs text-gray-400">{event.description}</p>
        </div>
      ))}
    </div>
  )
}

export default UpcomingEventsList
