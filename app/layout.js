import { Inter, Playfair_Display } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navigation'
import Footer from '@/components/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
})

const playfair = Playfair_Display({ 
  subsets: ['latin'],
  variable: '--font-playfair',
})

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
}

export const metadata = {
  title: {
    default: 'Londra Veteriner Kliniği | Bahçelievler',
    template: '%s | Londra Veteriner Kliniği',
  },
  description:
    "Bahçelievler Londra Veteriner Kliniği. 7/24 acil veteriner, muayene, kısırlaştırma, aşı ve cerrahi hizmetleri.",
  keywords: [
    'londra veteriner',
    'bahçelievler veteriner',
    'acil veteriner',
    'istanbul veteriner',
    '7/24 veteriner',
  ],
  authors: [{ name: 'Londra Veteriner Kliniği' }],
  creator: 'Londra Veteriner Kliniği',
  publisher: 'Londra Veteriner Kliniği',

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    title: 'Londra Veteriner Kliniği',
    description:
      "Bahçelievler'de 7/24 acil veteriner hizmetleri.",
    url: 'https://londraveteriner.com',
    siteName: 'Londra Veteriner Kliniği',
    locale: 'tr_TR',
    type: 'website',
  },

  alternates: {
    canonical: 'https://londraveteriner.com',
  },
}


export default function RootLayout({ children }) {
  return (
    <html lang="tr">
      <body className={`${inter.variable} ${playfair.variable}`}>
        <Navbar />
        {children}
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  )
}