import Hexagon from './Hexagon'

export default function Hero() {
  return (
    <header id="top" className="site-container">
      <nav className="flex flex-wrap items-center justify-between gap-x-8 gap-y-4 border-b border-black py-6" aria-label="Main navigation">
        <a href="#top" className="inline-flex items-center gap-3 font-semibold tracking-tight">
          <Hexagon />
          Gavin Derese
        </a>
        <div className="flex gap-6 text-sm">
          <a href="#work" className="nav-link">Work</a>
          <a href="#systems" className="nav-link">Systems</a>
          <a href="#approach" className="nav-link">Approach</a>
        </div>
      </nav>
      <div className="py-20 sm:py-28">
        <p className="eyebrow">Kerrville, Texas</p>
        <h1 className="mt-6 max-w-3xl text-5xl font-medium leading-[1.05] tracking-[-0.055em] sm:text-7xl">
          Good work.<br />Useful systems.
        </h1>
        <p className="mt-8 max-w-2xl text-lg leading-relaxed sm:text-xl">
          I’m Gavin. I own The Lawn Company and run VIVATION. My interests
          connect hands-on work, durable clothing, and technology that solves
          real problems.
        </p>
        <a href="#work" className="text-link mt-8 inline-block">Explore my work</a>
      </div>
    </header>
  )
}
