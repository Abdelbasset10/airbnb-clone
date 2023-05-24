import { Providers } from '@/redux/provider'
import Navbar from './components/navbar/Navbar'
import './globals.css'
import { Nunito } from 'next/font/google'
import RegisterModal from './components/modals/RegisterModal'
import LoginModal from './components/modals/LoginModal'
import ToastifyProvider from './providers/ToastifyProvider'
import getCurrentUser from './actions/getCurrentUser'



const font = Nunito({
  subsets: ["latin"]
})

export const metadata = {
  title: 'airbnb',
  description: 'airbnb clone',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const currentUser = await getCurrentUser();
  

  return (
    <html lang="en">
      <body className={font.className}>
        <Providers>
          <ToastifyProvider />
          <RegisterModal />
          <LoginModal />
          <Navbar currentUser={currentUser}/>
          {children}
          
        </Providers>
        
      </body>
    
    </html>
  )
}
