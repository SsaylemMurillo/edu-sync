import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Logo from './components/Logo'

// font of the app
const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'EduSync',
  description: 'EduSync App',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className='flex flex-col flex-auto w-full h-screen'> 
          <div className="h-full">
            <div className="grid lg:grid-cols-3 h-full">
              <div className="bg-yellow-500 items-center lg:flex inline-grid shadow-2xl rounded-xl justify-center hidden">
                <div className="bg-white rounded-full p-10 bg-center shadow-lg shadow-yellow-800/50 ">
                  <Logo/>
                </div>
              </div>
              <div className="col-span-2 flex justify-center items-center">
                <div className="min-w-[450] px-8">
                  <div className="mb-8">
                    <h1 className="text-3xl font-bold">Bienvenido a EduSync</h1>
                    <p className="text-xl">Por favor, digite los datos necesarios para iniciar sesión</p><br />
                    {children}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </body>
    </html>
  )
}
