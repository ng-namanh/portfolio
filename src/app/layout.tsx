import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import './globals.css'
import { cn } from '@/lib/utils'
import Sidebar from '@/components/side-bar'

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
          `bg-white scroll-sm transition-all duration-300 flex min-h-screen flex-row flex-wrap py-4 justify-between p-4 md:max-w-[1280px] mx-auto my-0 ${inter.className}`
        )}
      >
        <Sidebar />
        <main className='w-full px-2 pt-1 sm:w-2/3 md:w-3/4'>
          {/* <Header /> */}
          <div className='flex-1 w-full'>{children}</div>
        </main>
      </body>
    </html>
  )
}
