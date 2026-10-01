import Link from 'next/link'
import Hexagon from '../components/Hexagon'

export default function NotFound() {
  return (
    <main className="site-container flex min-h-screen flex-col items-start justify-center py-16">
      <p className="eyebrow"><Hexagon />404</p>
      <h1 className="mt-6 text-4xl font-medium tracking-tight sm:text-5xl">Page not found.</h1>
      <p className="mt-5 leading-7">This address doesn’t lead to a page on this site.</p>
      <Link href="/" className="text-link mt-8">Return home</Link>
    </main>
  )
}
