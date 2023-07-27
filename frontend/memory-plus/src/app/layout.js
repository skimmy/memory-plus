import './globals.css'

export const metadata = {
  title: 'Memory Plus',
  description: 'A fun game to play and learn',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
