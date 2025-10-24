'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ShoppingCartIcon, UserIcon, Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { useCartStore } from '@/store/cartStore'
import ShoppingCart from './ShoppingCart'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { getTotalItems, toggleCart } = useCartStore()
  const totalItems = getTotalItems()

  return (
    <header className="bg-gradient-to-r from-african-gold to-african-orange shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="text-2xl font-bold text-white">
              Enkaasani
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link href="/" className="text-white hover:text-yellow-200 transition-colors">
              Home
            </Link>
            <Link href="/products" className="text-white hover:text-yellow-200 transition-colors">
              Products
            </Link>
            <Link href="/collections" className="text-white hover:text-yellow-200 transition-colors">
              Collections
            </Link>
            <Link href="/about" className="text-white hover:text-yellow-200 transition-colors">
              About
            </Link>
            <Link href="/contact" className="text-white hover:text-yellow-200 transition-colors">
              Contact
            </Link>
          </nav>

          {/* Cart and User Icons */}
          <div className="flex items-center space-x-4">
            <button className="text-white hover:text-yellow-200 transition-colors">
              <UserIcon className="h-6 w-6" />
            </button>
            <button 
              className="text-white hover:text-yellow-200 transition-colors relative"
              onClick={toggleCart}
            >
              <ShoppingCartIcon className="h-6 w-6" />
              {totalItems > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </button>
            
            {/* Mobile menu button */}
            <button
              className="md:hidden text-white hover:text-yellow-200 transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <XMarkIcon className="h-6 w-6" /> : <Bars3Icon className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-african-brown bg-opacity-20 rounded-lg mt-2">
              <Link href="/" className="block px-3 py-2 text-white hover:text-yellow-200 transition-colors">
                Home
              </Link>
              <Link href="/products" className="block px-3 py-2 text-white hover:text-yellow-200 transition-colors">
                Products
              </Link>
              <Link href="/collections" className="block px-3 py-2 text-white hover:text-yellow-200 transition-colors">
                Collections
              </Link>
              <Link href="/about" className="block px-3 py-2 text-white hover:text-yellow-200 transition-colors">
                About
              </Link>
              <Link href="/contact" className="block px-3 py-2 text-white hover:text-yellow-200 transition-colors">
                Contact
              </Link>
            </div>
          </div>
        )}
      </div>
      <ShoppingCart />
    </header>
  )
}