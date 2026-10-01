import CharacterPreview from '../components/CharacterPreview'
import Footer from '../components/Footer'
import GameifySection from '../components/GameifySection'
import Hero from '../components/Hero'
import SkillsGrid from '../components/SkillsGrid'

export default function Home() {
  return (
    <>
      <a href="#main" className="sr-only focus:not-sr-only focus:inline-block focus:bg-white focus:p-4 focus:text-black">Skip to content</a>
      <Hero />
      <main id="main" tabIndex={-1}>
        <GameifySection />
        <CharacterPreview />
        <SkillsGrid />
      </main>
      <Footer />
    </>
  )
}
