# 🎓 FunEdu - Interactive Educational Platform

<div align="center">

![FunEdu Logo](https://img.shields.io/badge/FunEdu-Educational%20Platform-orange?style=for-the-badge&logo=graduation-cap)

A modern, interactive educational platform built with React, TypeScript, and beautiful animations. FunEdu provides an engaging learning experience with user authentication, personalized dashboards, and comprehensive educational content.

[![React](https://img.shields.io/badge/React-18.3.1-blue?style=flat-square&logo=react)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.5.3-blue?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-5.4.2-purple?style=flat-square&logo=vite)](https://vitejs.dev/)
[![Bootstrap](https://img.shields.io/badge/Bootstrap-5.3.8-purple?style=flat-square&logo=bootstrap)](https://getbootstrap.com/)

</div>

## 🌟 Features

### 🔐 Authentication System
- **2-Step Registration Process**
  - Step 1: Email, Password, Confirm Password validation
  - Step 2: Personal details (Name, Class, Contact, Organization)
- **Secure Login System** with form validation
- **Persistent Authentication** using localStorage
- **Dynamic Navbar** that adapts based on auth state
- **Logout Functionality** with state cleanup

### 📊 User Dashboard
- **Progress Tracking** with interactive charts
- **Points System** with achievement badges
- **Activity Calendar** with real-time updates
- **Course Management** with enrollment tracking
- **Game Statistics** for educational games
- **Recent Activities** timeline
- **Responsive Design** for all devices

### 🎨 UI/UX Features
- **Beautiful Animations** using Framer Motion
- **Floating Icons** with smooth CSS animations
- **Gradient Backgrounds** with modern color schemes
- **Interactive Components** with hover effects
- **Scroll Animations** for engaging user experience
- **Responsive Design** optimized for mobile and desktop

### 📱 Landing Page Sections
- **Hero Section** with call-to-action
- **Content Cards** showcasing features
- **Teacher Profiles** with testimonials
- **Statistics** with animated counters
- **Testimonials** from students
- **Fun Learning Section** with games
- **Footer** with links and information

## 🚀 Quick Start

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn package manager
- Git

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/frankmathewsajan/FunEdu.git
   cd FunEdu
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   ```
   http://localhost:5173
   ```

### Build for Production

```bash
npm run build
npm run preview
```

## 📁 Project Structure

```
FunEdu/
├── public/                     # Static assets
├── src/
│   ├── components/            # React components
│   │   ├── auth/             # Authentication components
│   │   │   ├── Login.tsx     # Login form component
│   │   │   ├── Register.tsx  # 2-step registration form
│   │   │   └── auth.css      # Authentication styles
│   │   ├── dashboard/        # Dashboard components
│   │   │   └── Dashboard.tsx # User dashboard with charts
│   │   ├── layout/           # Layout components
│   │   │   ├── Navbar.tsx    # Navigation with auth state
│   │   │   └── Footer.tsx    # Site footer
│   │   ├── sections/         # Landing page sections
│   │   │   ├── Hero.tsx      # Hero banner
│   │   │   ├── ContentCards.tsx # Feature cards
│   │   │   ├── Teachers.tsx  # Teacher profiles
│   │   │   ├── Stats.tsx     # Animated statistics
│   │   │   ├── Testimonials.tsx # User testimonials
│   │   │   ├── FunSection.tsx # Games section
│   │   │   └── ScrollAnimation.tsx # Scroll effects
│   │   └── index.ts          # Component exports
│   ├── contexts/             # React contexts
│   │   └── AuthContext.tsx   # Authentication state management
│   ├── App.tsx               # Main app component with routing
│   ├── App.css               # Global styles
│   ├── index.css             # CSS variables and base styles
│   └── main.tsx              # App entry point
├── package.json              # Dependencies and scripts
├── tsconfig.json             # TypeScript configuration
├── vite.config.ts            # Vite configuration
├── tailwind.config.js        # Tailwind CSS configuration
├── postcss.config.js         # PostCSS configuration
└── eslint.config.js          # ESLint configuration
```

## 🛠️ Technologies Used

### Frontend Framework
- **React 18.3.1** - Modern React with hooks and functional components
- **TypeScript 5.5.3** - Type-safe JavaScript for better development experience
- **Vite 5.4.2** - Fast build tool and development server

### UI Libraries & Styling
- **Bootstrap 5.3.8** - Responsive grid system and components
- **React Bootstrap 2.10.10** - Bootstrap components for React
- **Tailwind CSS 3.4.1** - Utility-first CSS framework
- **CSS Variables** - Custom theming and consistent colors

### Icons & Animations
- **Lucide React 0.344.0** - Beautiful SVG icons
- **Framer Motion 12.23.12** - Production-ready motion library
- **React CountUp 6.5.3** - Animated number counters
- **Custom CSS Animations** - Floating elements and transitions

### Routing & State Management
- **React Router DOM 7.9.1** - Client-side routing
- **React Context API** - Global authentication state
- **LocalStorage** - Persistent user sessions

### Development Tools
- **ESLint** - Code linting and formatting
- **PostCSS** - CSS processing
- **Autoprefixer** - CSS vendor prefixes
- **TypeScript ESLint** - TypeScript-specific linting rules

## 🎯 Key Components

### Authentication Flow
```typescript
// AuthContext provides global authentication state
const { isAuthenticated, login, logout } = useAuth();

// 2-step registration with validation
const Register = () => {
  const [currentStep, setCurrentStep] = useState<1 | 2>(1);
  // Step 1: Email & Password
  // Step 2: Personal Details
};
```

### Dashboard Features
```typescript
// Interactive dashboard with multiple widgets
const Dashboard = () => {
  return (
    <Container>
      <ProgressCard />
      <PointsCard />
      <ActivityCalendar />
      <CoursesCard />
      <GamesCard />
      <RecentActivities />
    </Container>
  );
};
```

### Dynamic Navbar
```typescript
// Navbar adapts based on authentication state
const Navbar = () => {
  const { isAuthenticated, logout } = useAuth();
  
  return (
    <Nav>
      {isAuthenticated ? (
        <LogoutButton onClick={logout} />
      ) : (
        <LoginButton />
      )}
    </Nav>
  );
};
```

## 🎨 Design System

### Color Palette
```css
:root {
  --primary-peach: #FFB5A7;
  --secondary-peach: #FCD5CE;
  --accent-coral: #F8AD9D;
  --warm-beige: #F9DCC4;
  --soft-cream: #FEC89A;
  --text-dark: #2D3748;
  --text-light: #718096;
}
```

### Typography
- **Primary Font**: System fonts for optimal performance
- **Font Weights**: 400 (regular), 500 (medium), 600 (semibold), 700 (bold)
- **Responsive Sizing**: Fluid typography that scales with viewport

### Components
- **Interactive Buttons** with hover effects and animations
- **Form Controls** with focus states and validation
- **Cards** with subtle shadows and rounded corners
- **Navigation** with smooth transitions

## 📱 Responsive Design

- **Mobile First** approach with progressive enhancement
- **Breakpoints**:
  - Mobile: 320px - 767px
  - Tablet: 768px - 1023px
  - Desktop: 1024px+
- **Flexible Grid System** using Bootstrap and custom CSS
- **Touch-Friendly** interface elements

## 🔧 Development Scripts

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Run linting
npm run lint
```

## 🌐 Deployment

### Netlify (Recommended)
1. Connect your GitHub repository
2. Set build command: `npm run build`
3. Set publish directory: `dist`
4. Deploy automatically on git push

### Vercel
1. Import project from GitHub
2. Configure build settings (auto-detected)
3. Deploy with zero configuration

### Manual Deployment
```bash
npm run build
# Upload dist/ folder to your hosting provider
```

## 🤝 Contributing

1. **Fork the repository**
2. **Create a feature branch**
   ```bash
   git checkout -b feature/amazing-feature
   ```
3. **Commit your changes**
   ```bash
   git commit -m 'Add some amazing feature'
   ```
4. **Push to the branch**
   ```bash
   git push origin feature/amazing-feature
   ```
5. **Open a Pull Request**

### Development Guidelines
- Follow TypeScript best practices
- Use meaningful component and variable names
- Write responsive CSS with mobile-first approach
- Test authentication flows thoroughly
- Maintain consistent code formatting with ESLint

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Frank Mathew Sajan**
- GitHub: [@frankmathewsajan](https://github.com/frankmathewsajan)
- Email: frankmathewsajan@example.com

## 🙏 Acknowledgments

- **React Team** for the amazing framework
- **Vite Team** for the fast build tool
- **Bootstrap Team** for the UI components
- **Lucide** for the beautiful icons
- **Framer Motion** for smooth animations

## 📊 Project Stats

- **Lines of Code**: ~2,500+
- **Components**: 15+
- **Pages**: 4 (Home, Login, Register, Dashboard)
- **Authentication States**: Persistent with localStorage
- **Responsive Breakpoints**: 3
- **Animation Effects**: 10+

---

<div align="center">

**Made with ❤️ for educational excellence**

[⭐ Star this repository](https://github.com/frankmathewsajan/FunEdu) if you found it helpful!

</div>
