'use client'

import { motion } from 'framer-motion'

const areas = [
  { number: 'I', title: 'Craft', detail: 'The disciplines that turn care into capability.', examples: 'Design · Writing · Analysis' },
  { number: 'II', title: 'Curiosity', detail: 'The pursuits that keep the mind porous and awake.', examples: 'Reading · Cooking · Photography' },
  { number: 'III', title: 'Vitality', detail: 'The conditions that make a sustainable life possible.', examples: 'Movement · Rest · Connection' },
]

export default function SkillsGrid() {
  return (
    <section id="areas" className="bg-[#1e2926] px-6 py-24 text-paper md:px-12 lg:px-16">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col justify-between gap-8 border-b border-[#8b958c]/40 pb-12 md:flex-row md:items-end">
          <div><p className="eyebrow !text-[#d9b877]">Areas of focus</p><h2 className="font-editorial mt-6 text-4xl tracking-[-0.03em] sm:text-5xl">A life has many rooms.</h2></div>
          <p className="max-w-sm text-sm leading-6 text-[#b9c1b9]">The practice is broad enough to hold work, wonder, and wellbeing without mistaking any one for the whole.</p>
        </div>
        <div className="grid md:grid-cols-3">
          {areas.map((area, index) => (
            <motion.article key={area.title} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.45, delay: index * 0.1 }} className="min-h-72 border-b border-[#8b958c]/40 py-10 md:border-b-0 md:px-8 md:first:pl-0 md:not(:last-child):border-r md:last:pr-0">
              <span className="font-editorial text-2xl text-[#d9b877]">{area.number}</span>
              <h3 className="font-editorial mt-12 text-3xl">{area.title}</h3>
              <p className="mt-4 max-w-xs leading-7 text-[#c4cbc4]">{area.detail}</p>
              <p className="mt-7 text-xs font-bold uppercase tracking-[0.13em] text-[#9daa9f]">{area.examples}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
