
import './globals.css'
import Header from './components/header'
import Banner from './components/banner'
import Provider from './provider'
import Footer from './components/footer'



export const metadata = {
  title: 'Feed | SyntaxSoup',
  description: 'a blog about web development, and anything else',
}


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <html lang="en" className='scroll-smooth antialiased'>
      <body className="max-w-screen-2xl mx-auto">
        <Provider>
            <Header />
            <Banner />
               {children}  
            <Footer />
        </Provider>
      </body>
    </html>
  )
}
