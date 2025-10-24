'use client'

import { useState } from 'react'
import { StarIcon, ShoppingCartIcon, FunnelIcon } from '@heroicons/react/24/solid'
import { AdjustmentsHorizontalIcon } from '@heroicons/react/24/outline'
import { useCartStore } from '@/store/cartStore'

const products = [
  {
    id: 1,
    name: 'Kente Pattern Journal',
    price: 24.99,
    originalPrice: 29.99,
    image: '/api/placeholder/300/300',
    rating: 5,
    reviews: 42,
    description: 'Beautiful Kente-inspired journal with gold accents',
    category: 'Journals',
    inStock: true,
    isNew: true
  },
  {
    id: 2,
    name: 'Adinkra Notebook Set',
    price: 19.99,
    originalPrice: null,
    image: '/api/placeholder/300/300',
    rating: 4,
    reviews: 28,
    description: 'Set of 3 notebooks featuring traditional Adinkra symbols',
    category: 'Notebooks',
    inStock: true,
    isNew: false
  },
  {
    id: 3,
    name: 'Ankara Print Diary',
    price: 29.99,
    originalPrice: 34.99,
    image: '/api/placeholder/300/300',
    rating: 5,
    reviews: 67,
    description: 'Premium leather-bound diary with vibrant Ankara prints',
    category: 'Diaries',
    inStock: true,
    isNew: false
  },
  {
    id: 4,
    name: 'Mudcloth Journal',
    price: 22.99,
    originalPrice: null,
    image: '/api/placeholder/300/300',
    rating: 4,
    reviews: 35,
    description: 'Authentic mudcloth pattern journal from Mali',
    category: 'Journals',
    inStock: false,
    isNew: false
  },
  {
    id: 5,
    name: 'Dashiki Planner',
    price: 27.99,
    originalPrice: 32.99,
    image: '/api/placeholder/300/300',
    rating: 5,
    reviews: 53,
    description: 'Weekly planner with colorful Dashiki patterns',
    category: 'Planners',
    inStock: true,
    isNew: true
  },
  {
    id: 6,
    name: 'Bogolan Sketchbook',
    price: 18.99,
    originalPrice: null,
    image: '/api/placeholder/300/300',
    rating: 4,
    reviews: 19,
    description: 'Artist sketchbook with traditional Bogolan designs',
    category: 'Sketchbooks',
    inStock: true,
    isNew: false
  }
]

const categories = ['All', 'Journals', 'Notebooks', 'Diaries', 'Planners', 'Sketchbooks']
const sortOptions = ['Newest', 'Price: Low to High', 'Price: High to Low', 'Most Popular']

export default function ProductGrid() {
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [sortBy, setSortBy] = useState('Newest')
  const [showFilters, setShowFilters] = useState(false)
  const { addItem } = useCartStore()

  const filteredProducts = products.filter(product => 
    selectedCategory === 'All' || product.category === selectedCategory
  )

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case 'Price: Low to High':
        return a.price - b.price
      case 'Price: High to Low':
        return b.price - a.price
      case 'Most Popular':
        return b.reviews - a.reviews
      default:
        return b.isNew ? 1 : -1
    }
  })

  return (
    <div>
      {/* Filters and Sort */}
      <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
        {/* Categories */}
        <div className="flex flex-wrap gap-2">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-gradient-to-r from-african-gold to-african-orange text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-200'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Sort and Filter Controls */}
        <div className="flex items-center gap-4">
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-african-gold focus:border-transparent"
          >
            {sortOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
          
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
          >
            <AdjustmentsHorizontalIcon className="h-5 w-5" />
            Filters
          </button>
        </div>
      </div>

      {/* Results Count */}
      <div className="mb-6">
        <p className="text-gray-600">
          Showing {sortedProducts.length} of {products.length} products
        </p>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {sortedProducts.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
          >
            {/* Product Image */}
            <div className="aspect-square bg-gradient-to-br from-orange-100 to-yellow-100 relative overflow-hidden">
              {/* Badges */}
              <div className="absolute top-3 left-3 z-10 flex flex-col gap-2">
                {product.isNew && (
                  <span className="bg-green-500 text-white text-xs font-bold px-2 py-1 rounded">
                    NEW
                  </span>
                )}
                {product.originalPrice && (
                  <span className="bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
                    SALE
                  </span>
                )}
                {!product.inStock && (
                  <span className="bg-gray-500 text-white text-xs font-bold px-2 py-1 rounded">
                    OUT OF STOCK
                  </span>
                )}
              </div>

              <div className="absolute inset-0 bg-african-pattern opacity-30 group-hover:opacity-50 transition-opacity duration-300"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-32 h-32 bg-gradient-to-br from-african-gold to-african-orange rounded-lg shadow-lg transform group-hover:scale-110 transition-transform duration-300"></div>
              </div>
            </div>

            {/* Product Info */}
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-african-gold transition-colors">
                {product.name}
              </h3>
              <p className="text-gray-600 text-sm mb-3">
                {product.description}
              </p>
              
              {/* Rating */}
              <div className="flex items-center mb-3">
                {[...Array(5)].map((_, i) => (
                  <StarIcon
                    key={i}
                    className={`h-4 w-4 ${
                      i < product.rating ? 'text-yellow-400' : 'text-gray-300'
                    }`}
                  />
                ))}
                <span className="ml-2 text-sm text-gray-600">({product.reviews})</span>
              </div>

              {/* Price */}
              <div className="flex items-center gap-2 mb-4">
                <span className="text-xl font-bold text-african-gold">
                  ${product.price}
                </span>
                {product.originalPrice && (
                  <span className="text-sm text-gray-500 line-through">
                    ${product.originalPrice}
                  </span>
                )}
              </div>

              {/* Add to Cart Button */}
              <button
                disabled={!product.inStock}
                onClick={() => product.inStock && addItem({
                  id: product.id,
                  name: product.name,
                  price: product.price,
                  image: product.image,
                  description: product.description
                })}
                className={`w-full flex items-center justify-center gap-2 py-2 px-4 rounded-lg font-medium transition-all duration-300 ${
                  product.inStock
                    ? 'bg-gradient-to-r from-african-gold to-african-orange text-white hover:from-yellow-600 hover:to-orange-600 shadow-lg hover:shadow-xl'
                    : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                }`}
              >
                <ShoppingCartIcon className="h-5 w-5" />
                {product.inStock ? 'Add to Cart' : 'Out of Stock'}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}