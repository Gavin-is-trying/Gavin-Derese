export default function Footer() {
  return (
    <footer id="notes" className="bg-black px-6 py-12 text-white md:px-12 lg:px-16">
      <div className="mx-auto flex max-w-7xl flex-col justify-between gap-10 border-t border-white pt-10 md:flex-row md:items-end"><div><p className="font-editorial text-2xl text-white">Gavin Derese</p><p className="mt-3 max-w-sm text-sm leading-6 text-white">Notes toward a more attentive, capable, and deliberately lived life.</p></div><div className="flex flex-col gap-3 text-xs font-bold uppercase tracking-[0.15em] text-white md:items-end"><a href="mailto:hello@gavinderese.com" className="underline underline-offset-4">hello@gavinderese.com</a><p>© {new Date().getFullYear()} Gavin Derese</p></div></div>
    </footer>
  )
}
