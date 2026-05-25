# Myf Capitals Platform

A premium, minimalistic investment platform designed for high-net-worth individuals and modern retail investors.

## 🎯 Features

### User Features
- **Multi-Asset Investment Plans**: Crypto, Real Estate, Agriculture, and Stocks
- **Automated Profit Calculation**: Real-time ROI tracking and profit distribution
- **Interactive Dashboard**: Portfolio overview, active investments, earnings charts
- **Profit Calculator**: Calculate expected returns before investing
- **Transaction History**: Complete record of all financial activities
- **Responsive Design**: Optimized for desktop, tablet, and mobile

### Admin Features
- **Investment Plan Management**: Create, edit, and manage investment plans
- **User Management**: Monitor and manage user accounts
- **Platform Analytics**: Comprehensive statistics and performance metrics
- **Investment Monitoring**: Track all active and completed investments

## 🎨 Design Philosophy

- **Minimalist Premium**: Clean whitespace, elegant typography, subtle animations
- **Dark Mode First**: Deep navy/charcoal black with gold accents
- **Trust-Driven**: Security badges, transparent ROI, institution-grade feel
- **Mobile-First**: Native app-like experience on all devices

## 🛠️ Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS with custom design system
- **Database**: MongoDB with Mongoose ODM
- **Charts**: Recharts
- **Icons**: React Icons (Feather Icons)
- **Fonts**: Inter, Playfair Display, JetBrains Mono

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd Kings
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Configure environment variables**
   
   Create a `.env.local` file in the root directory:
   ```env
   MONGODB_URI=mongodb+srv://zenithtech50:chi159357@zenith.tiyscom.mongodb.net/?appName=zenith
   JWT_SECRET=your-super-secret-jwt-key-change-this-in-production
   NEXT_PUBLIC_APP_URL=http://localhost:3000
   ```

4. **Run the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
Kings/
├── app/                      # Next.js app directory
│   ├── page.tsx             # Landing page
│   ├── plans/               # Investment plans pages
│   ├── dashboard/           # User dashboard
│   ├── admin/               # Admin panel
│   ├── login/               # Authentication
│   ├── register/            # Registration
│   ├── layout.tsx           # Root layout
│   └── globals.css          # Global styles
├── components/              # Reusable components
│   ├── Navbar.tsx
│   ├── Footer.tsx
│   └── InvestmentPlanCard.tsx
├── models/                  # MongoDB models
│   ├── User.ts
│   ├── InvestmentPlan.ts
│   ├── Investment.ts
│   └── Transaction.ts
├── lib/                     # Utilities
│   └── mongodb.ts           # Database connection
└── public/                  # Static assets
```

## 🎨 Design System

### Colors
- **Primary**: Deep navy (#0a1929 - #102a43)
- **Accent Gold**: #953bad
- **Accent Emerald**: #10B981
- **Background Dark**: #0a0e1a

### Typography
- **Headings**: Playfair Display (Serif)
- **Body**: Inter (Sans-serif)
- **Numbers**: JetBrains Mono (Monospace)

### Components
- Premium buttons with hover effects
- Glassmorphism cards
- Smooth transitions and micro-animations
- Custom scrollbars
- Progress bars with gradients

## 🔐 Security Features

- Bank-level encryption
- Secure authentication
- Protected API routes
- Input validation
- XSS protection

## 📱 Pages

1. **Landing Page** (`/`)
   - Hero section with CTA
   - Investment categories
   - Featured plans
   - How it works
   - Testimonials
   - Performance statistics

2. **Investment Plans** (`/plans`)
   - Filterable plan grid
   - Search functionality
   - Category and duration filters

3. **Plan Details** (`/plans/[id]`)
   - Comprehensive plan information
   - Interactive profit calculator
   - Investment timeline
   - Features list

4. **User Dashboard** (`/dashboard`)
   - Portfolio overview
   - Active investments with progress
   - Earnings charts
   - Transaction history
   - Wallet balance

5. **Admin Panel** (`/admin`)
   - Platform statistics
   - Plan management
   - User management
   - Investment monitoring

6. **Authentication** (`/login`, `/register`)
   - Secure login
   - Registration with validation
   - Password strength indicator

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import project in Vercel
3. Add environment variables
4. Deploy

### Environment Variables for Production
```env
MONGODB_URI=<your-mongodb-connection-string>
JWT_SECRET=<strong-random-secret>
NEXT_PUBLIC_APP_URL=<your-production-url>
```

## 📊 Database Schema

### User
- Email, password (hashed)
- Name, phone
- Wallet balance
- Total invested, total earnings
- Verification status

### Investment Plan
- Name, description
- Category (crypto, real-estate, agriculture, stocks)
- Min/max investment
- Duration, ROI percentage
- Risk level
- Features

### Investment
- User reference
- Plan reference
- Amount, expected return
- Status (active, completed, cancelled)
- Start/end dates

### Transaction
- User reference
- Type (deposit, withdrawal, investment, profit)
- Amount, status
- Description, metadata

## 🎯 Future Enhancements

- [ ] Real-time notifications
- [ ] KYC verification system
- [ ] Payment gateway integration
- [ ] Email notifications
- [ ] Two-factor authentication
- [ ] Advanced analytics
- [ ] API documentation
- [ ] Mobile app

## 📄 License

Proprietary - All rights reserved

## 👥 Support

For support, email support@kingsinvestment.com

---

**Built with ❤️ for premium investment experiences**
