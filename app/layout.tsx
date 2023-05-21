import Footer from "../components/Footer"
import Header from "../components/Header"
import '../styles/globals.css'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <head />
      <body className="dark:bg-slate-900">
     <div className="min-h-screen h-screen flex flex-col ">
      <Header />
        {children}
    </div>

        </body>
    </html>
  )
}
