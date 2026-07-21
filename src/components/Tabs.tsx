import React from 'react'

interface TabsProps {
  tabs: { label: string; content: React.ReactNode }[]
  defaultTab?: number
}

const Tabs: React.FC<TabsProps> = ({ tabs, defaultTab = 0 }) => {
  const [activeTab, setActiveTab] = React.useState(defaultTab)

  return (
    <div>
      {/* Tab Headers */}
      <div className="flex gap-2 border-b border-dark-700 overflow-x-auto">
        {tabs.map((tab, idx) => (
          <button
            key={idx}
            onClick={() => setActiveTab(idx)}
            className={`px-4 py-3 font-semibold text-sm transition-all border-b-2 whitespace-nowrap ${
              activeTab === idx
                ? 'border-neon-blue text-neon-blue'
                : 'border-transparent text-gray-400 hover:text-neon-blue'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="mt-4">{tabs[activeTab]?.content}</div>
    </div>
  )
}

export default Tabs
