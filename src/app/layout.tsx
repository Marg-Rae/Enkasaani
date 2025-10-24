import type { Metadata } from 'next'
import { Nunito } from 'next/font/google'
import './globals.css'

const nunito = Nunito({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Enkaasani - African Print Journals & Notebooks',
  description: 'Discover beautiful African print journals and notebooks. Premium quality stationery inspired by African culture and design.',
  keywords: ['African print', 'journals', 'notebooks', 'stationery', 'cultural design'],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={nunito.className}>
        {children}
      </body>
    </html>
  )
}