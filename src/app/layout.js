import './globals.css'
import { Inter } from 'next/font/google'
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Blog App',
  description: 'The best blog app!',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className='container'>
          <div className='wrapper'>
            {/* start navbar */}
            <Navbar />
            {/* end navbar */}
              {children}
            {/* start footer */}
            <Footer />
            {/* end footer */}
          </div>
        </div>
      </body>
    </html>
  )
}
