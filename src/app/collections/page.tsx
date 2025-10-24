import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Link from 'next/link'
import { ArrowRightIcon } from '@heroicons/react/24/outline'

const collections = [
  {
    id: 1,
    name: 'Kente Royalty',
    description: 'Inspired by the royal Kente cloth of Ghana, featuring geometric patterns in gold and vibrant colors.',
    itemCount: 12,
    image: '/api/placeholder/400/300',
    color: 'from-yellow-400 to-orange-500'
  },
  {
    id: 2,
    name: 'Adinkra Wisdom',
    description: 'Traditional Adinkra symbols representing wisdom, strength, and spiritual concepts.',
    itemCount: 8,
    image: '/api/placeholder/400/300',
    color: 'from-green-400 to-blue-500'
  },
  {
    id: 3,
    name: 'Ankara Expressions',
    description: 'Bold and colorful Ankara prints that celebrate modern African fashion and creativity.',
    itemCount: 15,
    image: '/api/placeholder/400/300',
    color: 'from-red-400 to-pink-500'
  },
  {
    id: 4,
    name: 'Mudcloth Heritage',
    description: 'Authentic mudcloth patterns from Mali, featuring earthy tones and traditional motifs.',
    itemCount: 6,
    image: '/api/placeholder/400/300',
    color: 'from-amber-600 to-orange-600'
  },
  {
    id: 5,
    name: 'Dashiki Dreams',
    description: 'Vibrant Dashiki patterns that embody the spirit of celebration and cultural pride.',
    itemCount: 10,
    image: '/api/placeholder/400/300',
    color: 'from-purple-400 to-indigo-500'
  },
  {
    id: 6,
    name: 'Bogolan Stories',
    description: 'Each pattern tells a story, featuring traditional Bogolan designs with deep cultural meaning.',
    itemCount: 7,
    image: '/api/placeholder/400/300',
    color: 'from-gray-600 to-gray-800'
  }
]

export default function CollectionsPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-orange-50 to-yellow-50">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-african-gold to-african-orange text-white">
        <div className="absolute inset-0 african-pattern opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">
            Our Collections
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Explore our curated collections, each inspired by authentic African textile traditions 
            and cultural heritage. Every collection tells a unique story through beautiful design.
          </p>
        </div>
      </section>

      {/* Collections Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {collections.map((collection) => (
              <div
                key={collection.id}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
              >
                {/* Collection Image */}
                <div className={`aspect-video bg-gradient-to-br ${collection.color} relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-african-pattern opacity-30 group-hover:opacity-50 transition-opacity duration-300"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center text-white">
                      <h3 className="text-2xl font-bold mb-2">{collection.name}</h3>
                      <p className="text-white/90">{collection.itemCount} Items</p>
                    </div>
                  </div>
                </div>

                {/* Collection Info */}
                <div className="p-6">
                  <p className="text-gray-600 mb-6">
                    {collection.description}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">
                      {collection.itemCount} products
                    </span>
                    <Link
                      href={`/collections/${collection.id}`}
                      className="inline-flex items-center gap-2 text-african-gold hover:text-african-orange font-medium transition-colors"
                    >
                      View Collection
                      <ArrowRightIcon className="h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Can't Find What You're Looking For?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Browse our complete product catalog or get in touch with us for custom designs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/products"
              className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-african-gold to-african-orange text-white font-semibold rounded-lg hover:from-yellow-600 hover:to-orange-600 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              View All Products
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center px-8 py-3 border-2 border-african-gold text-african-gold font-semibold rounded-lg hover:bg-african-gold hover:text-white transition-all duration-300"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}