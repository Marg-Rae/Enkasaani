'use client'

import Link from 'next/link'
import { StarIcon, ShoppingCartIcon } from '@heroicons/react/24/solid'
import { useCartStore } from '@/store/cartStore'

const featuredProducts = [
  {
    id: 1,
    name: 'Kente Pattern Journal',
    price: '$24.99',
    image: '/api/placeholder/300/300',
    rating: 5,
    description: 'Beautiful Kente-inspired journal with gold accents'
  },
  {
    id: 2,
    name: 'Adinkra Notebook Set',
    price: '$19.99',
    image: '/api/placeholder/300/300',
    rating: 4,
    description: 'Set of 3 notebooks featuring traditional Adinkra symbols'
  },
  {
    id: 3,
    name: 'Ankara Print Diary',
    price: '$29.99',
    image: '/api/placeholder/300/300',
    rating: 5,
    description: 'Premium leather-bound diary with vibrant Ankara prints'
  },
  {
    id: 4,
    name: 'Mudcloth Journal',
    price: '$22.99',
    image: '/api/placeholder/300/300',
    rating: 4,
    description: 'Authentic mudcloth pattern journal from Mali'
  }
]

export default function FeaturedProducts() {
  const { addItem } = useCartStore()

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Featured Products
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Explore our handpicked selection of the most popular African print journals and notebooks
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuredProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden group"
            >
              {/* Product Image */}
              <div className="aspect-square bg-gradient-to-br from-orange-100 to-yellow-100 relative overflow-hidden">
                <div className="absolute inset-0 bg-african-pattern opacity-30 group-hover:opacity-50 transition-opacity duration-300"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-32 h-32 bg-gradient-to-br from-african-gold to-african-orange rounded-lg shadow-lg transform group-hover:scale-110 transition-transform duration-300"></div>
                </div>
              </div>

              {/* Product Info */}
              <div className="p-6">
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
                  <span className="ml-2 text-sm text-gray-600">({product.rating})</span>
                </div>

                {/* Price and Add to Cart */}
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-african-gold">
                    {product.price}
                  </span>
                  <button 
                    className="bg-gradient-to-r from-african-gold to-african-orange text-white p-2 rounded-lg hover:from-yellow-600 hover:to-orange-600 transition-all duration-300 shadow-lg hover:shadow-xl"
                    onClick={() => addItem({
                      id: product.id,
                      name: product.name,
                      price: parseFloat(product.price.replace('$', '')),
                      image: product.image,
                      description: product.description
                    })}
                  >
                    <ShoppingCartIcon className="h-5 w-5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/products"
            className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-african-gold to-african-orange text-white font-semibold rounded-lg hover:from-yellow-600 hover:to-orange-600 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            View All Products
          </Link>
        </div>
      </div>
    </section>
  )
}