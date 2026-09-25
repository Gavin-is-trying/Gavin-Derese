'use client'

import { motion } from 'framer-motion'
import Hero from '../components/Hero'
import GameifySection from '../components/GameifySection'
import CharacterPreview from '../components/CharacterPreview'
import SkillsGrid from '../components/SkillsGrid'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-retro-yellow to-retro-teal">
      <Hero />
      <GameifySection />
      <CharacterPreview />
      <SkillsGrid />
      <Footer />
    </main>
  )
}