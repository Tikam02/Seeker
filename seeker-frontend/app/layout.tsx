import type { Metadata, Viewport } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Seeker - Connect Directly, Pay Directly',
  description: 'India\'s first service marketplace where helpers keep 100% of their earnings. Zero commission platform connecting seekers with verified helpers.',
  keywords: ['service marketplace', 'helpers', 'zero commission', 'home services', 'repairs', 'cleaning', 'tech support'],
  authors: [{ name: 'Seeker Team' }],
  creator: 'Seeker',
  publisher: 'Seeker',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  manifest: '/manifest.json',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: 'Seeker',
  },
  other: {
    'mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-status-bar-style': 'default',
    'apple-mobile-web-app-title': 'Seeker',
    'application-name': 'Seeker',
    'msapplication-TileColor': '#6366f1',
    'msapplication-config': '/browserconfig.xml',
    'theme-color': '#6366f1',
  },
  icons: {
    icon: [
      { url: '/icons/icon-192x192.png', sizes: '192x192', type: 'image/png' },
      { url: '/icons/icon-512x512.png', sizes: '512x512', type: 'image/png' },
    ],
    apple: [
      { url: '/icons/icon-152x152.png', sizes: '152x152', type: 'image/png' },
    ],
  },
}

export const viewport: Viewport = {
  themeColor: '#6366f1',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  viewportFit: 'cover',
}

import PWAPrompt from '../components/PWAPrompt'
import ServiceWorkerRegistration from '../components/ServiceWorkerRegistration'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="manifest" href="/manifest.json" />
        <link rel="apple-touch-icon" href="/icons/icon-152x152.png" />
        <meta name="theme-color" content="#6366f1" />
      </head>
      <body>
        {children}
        <PWAPrompt />
        <ServiceWorkerRegistration />
      </body>
    </html>
  )
}