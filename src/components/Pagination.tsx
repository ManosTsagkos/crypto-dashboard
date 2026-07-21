import React from 'react'

interface PaginationProps {
  currentPage: number
  totalPages: number
  onPageChange: (page: number) => void
}

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
}) => {
  const getPageNumbers = () => {
    const pages = []
    const delta = 2
    const left = currentPage - delta
    const right = currentPage + delta + 1

    for (let i = 1; i <= totalPages; i++) {
      if (i === 1 || i === totalPages || (i >= left && i < right)) {
        pages.push(i)
      } else if (pages[pages.length - 1] !== '...') {
        pages.push('...')
      }
    }

    return pages
  }

  return (
    <div className="flex items-center justify-center gap-2">
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="px-3 py-2 bg-dark-800 border border-dark-700 text-neon-blue rounded-lg hover:bg-dark-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
      >
        Previous
      </button>

      {getPageNumbers().map((page, idx) => (
        <button
          key={idx}
          onClick={() => typeof page === 'number' && onPageChange(page)}
          disabled={page === '...'}
          className={`px-3 py-2 rounded-lg font-semibold transition-all ${
            page === currentPage
              ? 'bg-neon-blue text-dark-900'
              : page === '...'
              ? 'cursor-default'
              : 'bg-dark-800 border border-dark-700 text-neon-blue hover:bg-dark-700'
          }`}
        >
          {page}
        </button>
      ))}

      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="px-3 py-2 bg-dark-800 border border-dark-700 text-neon-blue rounded-lg hover:bg-dark-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
      >
        Next
      </button>
    </div>
  )
}

export default Pagination
