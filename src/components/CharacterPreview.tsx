'use client'

import { motion } from 'framer-motion'

export default function CharacterPreview() {
  return (
    <section className="px-6 py-24 md:px-12 lg:px-16">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[.9fr_1.1fr] lg:gap-24">
        <motion.div initial={{ opacity: 0, x: -18 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.55 }} className="relative min-h-[390px] overflow-hidden bg-moss p-8 text-paper sm:p-12">
          <div className="absolute inset-5 border border-[#93a093]/40" />
          <p className="relative text-xs font-bold uppercase tracking-[0.18em] text-[#d7ddd2]">Field note / 01</p>
          <p className="font-editorial relative mt-24 max-w-sm text-4xl leading-tight tracking-[-0.03em]">The brain is not a machine to perfect.</p>
          <p className="relative mt-6 max-w-xs text-sm leading-6 text-[#d7ddd2]">It is a landscape to know: layered, adaptive, and always in conversation with its environment.</p>
          <div className="absolute bottom-9 right-9 h-16 w-16 rounded-full border border-[#d7ddd2]/70" />
          <div className="absolute bottom-[5.5rem] right-[5.5rem] h-8 w-8 rounded-full border border-[#d7ddd2]/50" />
        </motion.div>
        <div className="flex flex-col justify-center">
          <p className="eyebrow">The inner instrument</p>
          <h2 className="font-editorial mt-7 max-w-2xl text-4xl leading-tight tracking-[-0.035em] sm:text-5xl">Thought, feeling, and habit are all part of the same living system.</h2>
          <div className="mt-10 grid gap-7 border-t rule pt-7 sm:grid-cols-2">
            <div><p className="text-xs font-bold uppercase tracking-[0.15em] text-oxblood">Attention</p><p className="mt-3 leading-7 text-[#5f6862]">Protect space for the things that ask more of you than a glance.</p></div>
            <div><p className="text-xs font-bold uppercase tracking-[0.15em] text-oxblood">Memory</p><p className="mt-3 leading-7 text-[#5f6862]">Use small records to give your efforts a history worth returning to.</p></div>
          </div>
        </div>
      </div>
    </section>
  )
}
