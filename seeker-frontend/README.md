# Seeker Frontend

A Next.js application for the Seeker platform - India's first zero-commission gig marketplace connecting seekers with helpers.

## Features

- **Landing Page**: Beautiful, responsive landing page with animations
- **User Registration**: Modal-based registration for both seekers and helpers
- **Zero Commission Platform**: Helpers keep 100% of their earnings
- **Modern Design**: Tailwind CSS with custom gradients and animations
- **TypeScript**: Full TypeScript support for better development experience

## Tech Stack

- **Framework**: Next.js 15 with App Router
- **Styling**: Tailwind CSS with custom CSS variables
- **Language**: TypeScript
- **Animations**: CSS keyframes with smooth transitions

## Getting Started

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Run Development Server**
   ```bash
   npm run dev
   ```

3. **Open Browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## Project Structure

```
src/
├── app/
│   ├── globals.css          # Global styles with custom CSS variables
│   ├── layout.tsx           # Root layout component
│   └── page.tsx             # Landing page
└── components/
    ├── Navigation.tsx       # Header navigation component
    ├── HeroSection.tsx      # Main hero section with user selection
    ├── FeaturesSection.tsx  # Features showcase section
    └── RegistrationModal.tsx # Registration modal component
```

## Design System

### Colors
- **Primary**: #6366f1 (Indigo)
- **Secondary**: #10b981 (Emerald)
- **Dark**: #1e293b
- **Light**: #f8fafc
- **Gray**: #64748b

### Gradients
- **Main Gradient**: linear-gradient(135deg, #667eea 0%, #764ba2 100%)
- **Seeker Gradient**: linear-gradient(135deg, #667eea 0%, #6366f1 100%)
- **Helper Gradient**: linear-gradient(135deg, #10b981 0%, #059669 100%)

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Next Steps

This landing page is ready for:
1. **Seeker Onboarding**: Multi-step form for seeker profile setup
2. **Helper Onboarding**: Registration flow for service providers
3. **API Integration**: Connect with backend services
4. **Authentication**: User login and session management

## Contributing

This is a design-driven project focusing on user experience and modern web practices.
