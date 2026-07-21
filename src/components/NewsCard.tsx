import React from 'react'

interface NewsCardProps {
  title: string
  description: string
  category: 'Bitcoin' | 'Ethereum' | 'Market' | 'Regulation'
  time: string
  image?: string
}

const NewsCard: React.FC<NewsCardProps> = ({
  title,
  description,
  category,
  time,
  image,
}) => {
  const getCategoryColor = (cat: string) => {
    switch (cat) {
      case 'Bitcoin':
        return 'bg-neon-orange text-dark-900'
      case 'Ethereum':
        return 'bg-neon-purple text-white'
      case 'Market':
        return 'bg-neon-blue text-dark-900'
      case 'Regulation':
        return 'bg-red-500 text-white'
      default:
        return 'bg-neon-green text-dark-900'
    }
  }

  return (
    <div className="bg-gradient-to-br from-dark-800 to-dark-900 border border-dark-700 rounded-lg overflow-hidden hover:shadow-glow transition-all">
      {image && (
        <div className="w-full h-32 bg-dark-700 overflow-hidden">
          <img src={image} alt={title} className="w-full h-full object-cover" />
        </div>
      )}
      <div className="p-4">
        <div className="flex items-center gap-2 mb-2">
          <span className={`text-xs font-bold px-2 py-1 rounded ${getCategoryColor(category)}`}>
            {category}
          </span>
          <span className="text-xs text-gray-500">{time}</span>
        </div>
        <h3 className="font-semibold text-neon-blue mb-2 text-sm line-clamp-2 hover:text-neon-purple transition-colors cursor-pointer">
          {title}
        </h3>
        <p className="text-xs text-gray-400 line-clamp-2">{description}</p>
        <button className="mt-3 text-xs text-neon-blue hover:text-neon-purple transition-colors font-semibold">
          Read More →
        </button>
      </div>
    </div>
  )
}

export default NewsCard
