import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ProductGrid from '@/components/ProductGrid'

export default function ProductsPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-orange-50 to-yellow-50">
      <Header />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Our Products
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover our complete collection of beautiful African print journals and notebooks
          </p>
        </div>
        <ProductGrid />
      </div>
      <Footer />
    </main>
  )
}