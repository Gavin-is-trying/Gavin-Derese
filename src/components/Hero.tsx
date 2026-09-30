'use client'

import { motion } from 'framer-motion'

function BrainMark() {
  return (
    <svg viewBox="0 0 420 420" role="img" aria-label="Abstract line drawing of a brain" className="h-full w-full">
      <circle cx="210" cy="210" r="196" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.2" />
      <path className="brain-stroke" strokeWidth="2.4" d="M198 97c-27-23-72-10-78 28-34-2-57 30-45 61-26 25-14 69 20 76-2 36 37 57 68 37 12 31 53 38 76 15 22 25 64 16 76-15 31 20 70-1 68-37 34-7 46-51 20-76 12-31-11-63-45-61-7-38-51-51-78-28-5-24-35-25-42 0Z" />
      <path className="brain-stroke" strokeWidth="1.8" d="M198 97c14 22 10 43-4 59 24 3 37 19 35 43-30-12-53 3-56 28-27-7-49 10-50 35m75-106c13 27 7 50-2 69 23 4 41 19 43 46m-76-72c-10 17-12 36-3 54-21 10-29 29-22 48m-18-69c14-16 14-39-1-54m141-80c-14 22-10 43 4 59-24 3-37 19-35 43 30-12 53 3 56 28 27-7 49 10 50 35m-75-106c-13 27-7 50 2 69-23 4-41 19-43 46m76-72c10 17 12 36 3 54 21 10 29 29 22 48m18-69c-14-16-14-39 1-54M210 116v177m0-73c-16 12-20 32-10 49m10-49c16 12 20 32 10 49" />
      <path className="brain-stroke" strokeWidth="1.5" d="M131 142c18 9 30 25 31 45m-33 50c18 1 34 12 42 28m118-123c-18 9-30 25-31 45m33 50c-18 1-34 12-42 28" opacity="0.75" />
    </svg>
  )
}

export default function Hero() {
  return (
    <header className="min-h-[760px] px-6 pb-20 pt-6 md:px-12 lg:px-16">
      <nav className="mx-auto flex max-w-7xl items-center justify-between border-b rule py-5" aria-label="Main navigation">
        <a href="#top" className="font-editorial text-xl tracking-tight text-ink">Gavin Derese</a>
        <div className="hidden items-center gap-8 text-xs font-bold uppercase tracking-[0.16em] text-[#56605b] md:flex">
          <a href="#practice" className="transition-colors hover:text-oxblood">The practice</a>
          <a href="#areas" className="transition-colors hover:text-oxblood">Areas of focus</a>
          <a href="#notes" className="transition-colors hover:text-oxblood">Notes</a>
        </div>
        <span className="text-[0.65rem] font-bold uppercase tracking-[0.18em] text-oxblood">Est. 2026</span>
      </nav>

      <div id="top" className="mx-auto grid max-w-7xl items-center gap-12 pt-20 md:grid-cols-[1.15fr_.85fr] md:pt-28">
        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, ease: 'easeOut' }}>
          <p className="eyebrow">A life in practice</p>
          <h1 className="font-editorial mt-7 max-w-3xl text-5xl leading-[0.96] tracking-[-0.045em] text-ink sm:text-6xl lg:text-8xl">
            Attend to what <em className="font-normal text-oxblood">matters.</em>
          </h1>
          <p className="mt-8 max-w-xl text-lg leading-8 text-[#53605a]">
            A personal study in attention, capability, and the quiet work of becoming. Built one considered practice at a time.
          </p>
          <div className="mt-10 flex items-center gap-5">
            <a href="#practice" className="bg-moss px-6 py-3 text-xs font-bold uppercase tracking-[0.16em] text-paper transition-colors hover:bg-oxblood">Explore the study</a>
            <span className="h-px w-10 bg-[#a69d8e]" />
            <span className="text-xs font-bold uppercase tracking-[0.14em] text-[#6d746f]">Volume I</span>
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, scale: 0.94 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.9, delay: 0.15, ease: 'easeOut' }} className="relative mx-auto aspect-square w-full max-w-md text-moss">
          <div className="absolute inset-[7%] rounded-full border border-[#b9b1a4]" />
          <div className="absolute inset-[14%] rounded-full border border-[#b9b1a4]" />
          <div className="absolute inset-[20%] text-oxblood"><BrainMark /></div>
          <span className="absolute left-1/2 top-0 -translate-x-1/2 bg-paper px-3 text-[0.6rem] font-bold uppercase tracking-[0.2em] text-[#69716b]">The mind at work</span>
          <span className="absolute bottom-[16%] left-[-2%] border-y rule bg-paper px-3 py-2 text-[0.6rem] font-bold uppercase tracking-[0.16em] text-[#69716b]">Observation / 01</span>
        </motion.div>
      </div>
    </header>
  )
}
