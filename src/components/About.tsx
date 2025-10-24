import { HeartIcon, GiftIcon, SparklesIcon } from '@heroicons/react/24/outline'

export default function About() {
  return (
    <section className="py-16 bg-gradient-to-br from-orange-50 to-yellow-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Why Choose Enkaasani?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We're passionate about bringing authentic African culture to your everyday writing experience
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {/* Feature 1 */}
          <div className="text-center p-8 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="w-16 h-16 bg-gradient-to-br from-african-gold to-african-orange rounded-full flex items-center justify-center mx-auto mb-6">
              <HeartIcon className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Authentic Designs</h3>
            <p className="text-gray-600">
              Each design is carefully crafted to honor traditional African patterns and cultural significance, 
              bringing authentic beauty to your stationery collection.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="text-center p-8 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="w-16 h-16 bg-gradient-to-br from-african-red to-african-orange rounded-full flex items-center justify-center mx-auto mb-6">
              <SparklesIcon className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Premium Quality</h3>
            <p className="text-gray-600">
              Made with high-quality materials and attention to detail, our journals and notebooks are 
              designed to last and provide the best writing experience.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="text-center p-8 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="w-16 h-16 bg-gradient-to-br from-african-green to-african-gold rounded-full flex items-center justify-center mx-auto mb-6">
              <GiftIcon className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Perfect Gifts</h3>
            <p className="text-gray-600">
              Whether for yourself or someone special, our African print stationery makes meaningful 
              gifts that celebrate culture and creativity.
            </p>
          </div>
        </div>

        {/* Story Section */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* Text Content */}
            <div className="p-8 lg:p-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Our Story</h3>
              <p className="text-gray-600 mb-6">
                Enkaasani was born from a deep appreciation for African culture and the power of written expression. 
                Our founders, inspired by the rich textile traditions of Africa, wanted to create stationery that 
                celebrates this heritage while serving the modern need for beautiful, functional writing materials.
              </p>
              <p className="text-gray-600 mb-6">
                Each product in our collection tells a story - from the vibrant Kente patterns of Ghana to the 
                symbolic Adinkra designs, every journal and notebook carries the wisdom and beauty of African artistry.
              </p>
              <p className="text-gray-600">
                We believe that beautiful stationery inspires beautiful thoughts, and we're committed to providing 
                you with products that honor both tradition and innovation.
              </p>
            </div>

            {/* Image/Pattern Section */}
            <div className="bg-gradient-to-br from-african-gold to-african-orange relative overflow-hidden">
              <div className="absolute inset-0 african-pattern opacity-30"></div>
              <div className="relative p-8 lg:p-12 h-full flex items-center justify-center">
                <div className="text-center text-white">
                  <h4 className="text-3xl font-bold mb-4">Celebrating Culture</h4>
                  <p className="text-xl opacity-90">Through Beautiful Design</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}