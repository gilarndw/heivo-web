import type { Metadata } from 'next'
import { Inter, Montserrat } from 'next/font/google'
import './global.css'
import Header from '@/components/layout/header'
import Footer from '@/components/layout/footer'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const montserrat = Montserrat({ 
  subsets: ['latin'], 
  variable: '--font-montserrat',
  weight: ['500', '600', '700'] 
})

export const metadata: Metadata = {
  title: 'PT Hiro Electric Industries | Solusi Infrastruktur Kelistrikan',
  description: 'Manufaktur dan distribusi peralatan listrik berkualitas tinggi seperti MCB, kWh Meter, dan sistem penunjang kabel dengan komitmen TKDN.',

  icons: {
    icon: "/images/Logo-Icon.png",
    shortcut: "/images/Logo-Icon.png",
    apple: "/images/Logo-Icon.png",
  },

}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="id">
      <body className={`${inter.variable} ${montserrat.variable} font-sans bg-white text-brand-dark antialiased`}>
        <Header />
        <main className="min-h-screen pt-24">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}