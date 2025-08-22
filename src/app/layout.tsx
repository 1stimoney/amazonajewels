import type { Metadata } from 'next'
import { Poppins as FontSans } from 'next/font/google'
import './globals.css'

const fontSans = FontSans({
  subsets: ['latin'],
  weight: ['400', '600'],
  variable: '--font-sans',
})
export const metadata: Metadata = {
  title: 'Amazona',
  description: 'Your No 1 Clothing & Accessories Store',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body
        className={`min-h-screen bg-background font-sans ${fontSans.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  )
}
