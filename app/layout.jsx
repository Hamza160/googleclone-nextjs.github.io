import './globals.css'

export const metadata = {
  title: 'Google Clone NextJs 13',
  description: 'Google Clone Created By NextJs 13',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
