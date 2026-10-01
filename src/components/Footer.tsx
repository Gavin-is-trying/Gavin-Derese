import Hexagon from './Hexagon'

export default function Footer() {
  return (
    <footer className="site-container">
      <div className="flex flex-wrap items-center justify-between gap-6 border-t border-black py-8 text-sm">
        <p className="inline-flex items-center gap-3">
          <Hexagon className="h-4 w-4" />
          © {new Date().getFullYear()} Gavin Derese
        </p>
        <a href="#top" className="text-link">Back to top</a>
      </div>
    </footer>
  )
}
