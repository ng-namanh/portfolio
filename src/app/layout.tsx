import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import './globals.css'
import { cn } from '@/lib/utils'

const inter = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '700']
})

export const metadata: Metadata = {
  title: 'Nguyen Nam Anh',
  description: 'Welcome to my portfolio'
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body
        className={cn(
          `flex min-h-screen flex-col items-center justify-between p-4 max-w-[1280px] mx-auto my-0 ${inter.className}`
        )}
      >
        {children}
      </body>
    </html>
  )
}
