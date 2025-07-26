import '../assets/globals.css'
import { Inter, Roboto } from 'next/font/google'
import Sidebar from '@/layout/sidebar/Sidebar'
import { MainSidebar } from '@/layout/main-sidebar/Mainsidebar'

export const metadata = {
  title: 'Account',
  description: 'Accounting software',
}

const inter = Inter({ subsets: ['latin'] })

const roboto = Roboto({
  subsets: ['latin'],
  weight: '100'
})


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className} >
        <div className='lg:flex bg-gray-100'>
          <div className='hidden lg:flex fixed'>
            <MainSidebar />
            <Sidebar />
          </div>
          <div className='w-full lg:ml-[22rem] bg-gray-100'>
            {children}
          </div>
        </div>
      </body>
    </html>
  )
}
