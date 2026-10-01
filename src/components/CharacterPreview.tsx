'use client'

import { motion } from 'framer-motion'

export default function CharacterPreview() {
  return (
    <section className="bg-white px-6 py-24 md:px-12 lg:px-16">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[.9fr_1.1fr] lg:gap-24">
        <motion.div initial={{ x: -18 }} whileInView={{ x: 0 }} viewport={{ once: true }} transition={{ duration: 0.55 }} className="relative min-h-[390px] overflow-hidden bg-black p-8 text-white sm:p-12">
          <div className="absolute inset-5 border border-white" /><p className="relative text-xs font-bold uppercase tracking-[0.18em] text-white">Field note / 01</p><p className="font-editorial relative mt-24 max-w-sm text-4xl leading-tight tracking-[-0.03em]">The brain is not a machine to perfect.</p><p className="relative mt-6 max-w-xs text-sm leading-6 text-white">It is a landscape to know: layered, adaptive, and always in conversation with its environment.</p><div className="absolute bottom-9 right-9 h-16 w-16 rounded-full border border-white" /><div className="absolute bottom-[5.5rem] right-[5.5rem] h-8 w-8 rounded-full border border-white" />
        </motion.div>
        <div className="flex flex-col justify-center"><p className="eyebrow">The inner instrument</p><h2 className="font-editorial mt-7 max-w-2xl text-4xl leading-tight tracking-[-0.035em] sm:text-5xl">Thought, feeling, and habit are all part of the same living system.</h2><div className="mt-10 grid gap-7 border-t border-black pt-7 sm:grid-cols-2"><div><p className="text-xs font-bold uppercase tracking-[0.15em] text-black">Attention</p><p className="mt-3 leading-7 text-black">Protect space for the things that ask more of you than a glance.</p></div><div><p className="text-xs font-bold uppercase tracking-[0.15em] text-black">Memory</p><p className="mt-3 leading-7 text-black">Use small records to give your efforts a history worth returning to.</p></div></div></div>
      </div>
    </section>
  )
}
