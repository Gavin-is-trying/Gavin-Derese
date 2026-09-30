import CharacterPreview from '../components/CharacterPreview'
import Footer from '../components/Footer'
import GameifySection from '../components/GameifySection'
import Hero from '../components/Hero'
import SkillsGrid from '../components/SkillsGrid'

export default function Home() {
  return (
    <main className="paper-grain overflow-hidden">
      <Hero />
      <GameifySection />
      <CharacterPreview />
      <SkillsGrid />
      <Footer />
    </main>
  )
}
