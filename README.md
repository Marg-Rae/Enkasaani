# Enkaasani - African Print Journals & Notebooks

A beautiful, fully-functional ecommerce website built with Next.js 14, featuring African print journals and notebooks that celebrate cultural heritage through modern design.

![Enkaasani Banner](https://via.placeholder.com/1200x400/D4AF37/FFFFFF?text=Enkaasani+-+African+Print+Journals)

## ✨ Features

### 🛍️ **Complete Ecommerce Functionality**
- Product catalog with filtering and sorting
- Shopping cart with persistent state
- Checkout process with order management
- Responsive design for all devices

### 🎨 **African-Inspired Design**
- Authentic African color palettes (Kente gold, vibrant oranges, earth tones)
- Custom CSS patterns inspired by traditional African textiles
- Beautiful gradients and cultural design elements
- Accessibility-first approach

### 📱 **Modern Tech Stack**
- **Framework**: Next.js 14 with App Router
- **Styling**: Tailwind CSS with custom African themes
- **State Management**: Zustand for cart functionality
- **UI Components**: Headless UI for modals and interactions
- **Icons**: Heroicons for consistent iconography
- **TypeScript**: Full type safety throughout

### 🏪 **Product Collections**
- **Kente Royalty**: Royal Ghanaian patterns in gold and vibrant colors
- **Adinkra Wisdom**: Traditional symbols representing wisdom and strength
- **Ankara Expressions**: Bold, colorful modern African prints
- **Mudcloth Heritage**: Authentic earthy Mali patterns
- **Dashiki Dreams**: Celebratory cultural pride patterns
- **Bogolan Stories**: Traditional designs with deep cultural meaning

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/enkaasani.git
   cd enkaasani
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
enkaasani/
├── src/
│   ├── app/                    # Next.js App Router
│   │   ├── checkout/          # Checkout page
│   │   ├── collections/       # Collections page
│   │   ├── products/          # Products page
│   │   ├── globals.css        # Global styles
│   │   ├── layout.tsx         # Root layout
│   │   └── page.tsx          # Home page
│   ├── components/            # React components
│   │   ├── About.tsx         # About section
│   │   ├── FeaturedProducts.tsx
│   │   ├── Footer.tsx        # Site footer
│   │   ├── Header.tsx        # Navigation header
│   │   ├── Hero.tsx          # Hero section
│   │   ├── ProductGrid.tsx   # Product listing
│   │   └── ShoppingCart.tsx  # Cart modal
│   └── store/                # State management
│       └── cartStore.ts      # Zustand cart store
├── public/                   # Static assets
├── tailwind.config.js       # Tailwind configuration
├── tsconfig.json           # TypeScript configuration
└── package.json           # Dependencies
```

## 🎨 Design System

### Colors
```css
African Gold: #D4AF37
African Orange: #FF8C00  
African Red: #DC143C
African Green: #228B22
African Brown: #8B4513
```

### Typography
- **Primary Font**: Nunito (Google Fonts)
- **Font Weights**: 200-1000 (variable)

### Components
- **Buttons**: Gradient backgrounds with hover effects
- **Cards**: Rounded corners with subtle shadows
- **Patterns**: Custom CSS patterns inspired by African textiles

## 🛒 Cart Functionality

The shopping cart uses Zustand for state management with the following features:
- **Persistent Storage**: Cart items persist across browser sessions
- **Add/Remove Items**: Full CRUD operations
- **Quantity Management**: Increase/decrease item quantities
- **Price Calculations**: Automatic subtotal, tax, and shipping calculations
- **Cart Modal**: Slide-out cart with smooth animations

## 📱 Responsive Design

- **Mobile First**: Optimized for mobile devices
- **Breakpoints**: 
  - Mobile: < 768px
  - Tablet: 768px - 1024px  
  - Desktop: > 1024px
- **Touch Friendly**: Large touch targets and smooth interactions

## 🔧 Available Scripts

```bash
npm run dev        # Start development server
npm run build      # Build for production
npm run start      # Start production server
npm run lint       # Run ESLint
```

## 🌍 Cultural Inspiration

Each design element in Enkaasani is thoughtfully inspired by authentic African textile traditions:

- **Kente Cloth**: Geometric patterns from Ghana representing royalty
- **Adinkra Symbols**: West African symbols with deep philosophical meanings
- **Ankara Prints**: Vibrant wax-print fabrics popular across Africa
- **Mudcloth (Bògòlanfini)**: Traditional Malian textile with earth-based dyes
- **Dashiki Patterns**: Celebratory prints representing cultural pride

## 🤝 Contributing

We welcome contributions that honor and celebrate African culture while improving the technical aspects of the project.

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Inspired by the rich textile traditions of Africa
- Thanks to the African artisans whose cultural heritage inspires our designs
- Built with modern web technologies to bridge tradition and innovation

## 📞 Contact

For questions about Enkaasani or to discuss custom African print designs:

- **Email**: hello@enkaasani.com
- **Phone**: +1 (555) 123-4567
- **Address**: 123 Cultural Avenue, Heritage District, Art City, AC 12345

---

**Made with ❤️ for African culture**