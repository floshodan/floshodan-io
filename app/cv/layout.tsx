export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <head />
      <body className="">
       <div className="min-h-screen h-screen flex flex-col">
        {children}
    </div>
        
        </body>
    </html>
  )
}
