import Link from 'next/link'
import Image from 'next/image'
import { ArrowRightIcon } from '@heroicons/react/24/outline'

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-orange-100 via-yellow-50 to-red-100 py-20 overflow-hidden">
      {/* African Pattern Background */}
      <div className="absolute inset-0 african-pattern opacity-10"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="text-center lg:text-left">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Beautiful 
              <span className="text-african-gold"> African Print</span>
              <br />
              Journals & Notebooks
            </h1>
            <p className="text-xl text-gray-700 mb-8 leading-relaxed">
              Discover our exquisite collection of handcrafted journals and notebooks 
              featuring authentic African prints. Perfect for capturing your thoughts, 
              dreams, and creative expressions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link
                href="/products"
                className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-african-gold to-african-orange text-white font-semibold rounded-lg hover:from-yellow-600 hover:to-orange-600 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Shop Now
                <ArrowRightIcon className="ml-2 h-5 w-5" />
              </Link>
              <Link
                href="/collections"
                className="inline-flex items-center px-8 py-3 border-2 border-african-gold text-african-gold font-semibold rounded-lg hover:bg-african-gold hover:text-white transition-all duration-300"
              >
                View Collections
              </Link>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative">
            <div className="bg-gradient-to-br from-african-gold to-african-orange rounded-3xl p-8 shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500">
              <div className="bg-white rounded-2xl p-6 shadow-inner">
                <div className="aspect-square relative rounded-xl overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&h=600&fit=crop&crop=center"
                    alt="Beautiful African print journals and notebooks"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-african-gold/20 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4 text-center">
                    <h3 className="text-2xl font-bold text-white drop-shadow-lg">Premium Quality</h3>
                    <p className="text-white/90 drop-shadow-md">Handcrafted Excellence</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Floating Elements */}
            <div className="absolute -top-4 -left-4 w-20 h-20 bg-african-red rounded-full opacity-20 animate-pulse"></div>
            <div className="absolute -bottom-6 -right-6 w-16 h-16 bg-african-green rounded-full opacity-30 animate-bounce"></div>
          </div>
        </div>
      </div>
    </section>
  )
}