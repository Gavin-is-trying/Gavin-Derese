import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Gavin Derese by Gavin Derese',
  description: 'Gamifying life with a sneaky Sasquatch IRL',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}