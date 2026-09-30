'use client'

import { motion } from 'framer-motion'

const principles = [
  ['01', 'Notice', 'Make the patterns visible. A useful life starts with honest observation.'],
  ['02', 'Practice', 'Return to the work, gently and often. Consistency has a longer memory than motivation.'],
  ['03', 'Reflect', 'Keep what serves. Let the rest become a lesson rather than a verdict.'],
]

export default function GameifySection() {
  return (
    <section id="practice" className="border-y rule bg-[#ded8cb]/50 px-6 py-24 md:px-12 lg:px-16">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 border-b rule pb-14 md:grid-cols-[.8fr_1.2fr]">
          <div><p className="eyebrow">The premise</p></div>
          <div>
            <h2 className="font-editorial max-w-3xl text-4xl leading-tight tracking-[-0.03em] sm:text-5xl">A more thoughtful alternative to the quantified self.</h2>
            <p className="mt-5 max-w-2xl text-base leading-7 text-[#5f6862]">This is not about optimizing every hour. It is a private framework for recognizing effort, tending curiosity, and giving meaningful progress a place to accumulate.</p>
          </div>
        </div>
        <div className="grid md:grid-cols-3">
          {principles.map(([number, title, description], index) => (
            <motion.article key={title} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.45, delay: index * 0.1 }} className="border-b rule py-10 md:border-b-0 md:px-8 md:first:pl-0 md:not(:last-child):border-r md:last:pr-0">
              <p className="text-xs font-bold tracking-[0.16em] text-oxblood">{number}</p>
              <h3 className="font-editorial mt-12 text-3xl tracking-[-0.03em]">{title}</h3>
              <p className="mt-4 max-w-xs leading-7 text-[#606a64]">{description}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
