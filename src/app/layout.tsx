import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  metadataBase: new URL('https://gavinderese.com'),
  title: 'Gavin Derese — Work & Systems',
  description: 'Kerrville, Texas. The Lawn Company, VIVATION, and an interest in practical AI, useful systems, and straightforward work.',
  alternates: {
    canonical: '/',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
