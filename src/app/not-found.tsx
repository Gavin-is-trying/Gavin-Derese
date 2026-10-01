import Link from 'next/link'

export default function NotFound() {
  return (
    <main className="paper-grain flex min-h-screen items-center justify-center px-6 py-12"><div className="w-full max-w-2xl border-y border-black py-14 text-center"><p className="eyebrow justify-center before:hidden">A brief detour</p><p className="font-editorial mt-8 text-8xl tracking-[-0.08em] text-black">404</p><h1 className="font-editorial mt-4 text-4xl tracking-[-0.035em] text-black">This page has slipped from the archive.</h1><p className="mx-auto mt-5 max-w-md leading-7 text-black">The path you were looking for is no longer here, or perhaps it was never meant to be.</p><Link href="/" className="mt-9 inline-block bg-black px-6 py-3 text-xs font-bold uppercase tracking-[0.16em] text-white transition-colors hover:bg-white hover:text-black hover:ring-1 hover:ring-black">Return home</Link></div></main>
  )
}
