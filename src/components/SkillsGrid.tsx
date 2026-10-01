import Hexagon from './Hexagon'

const principles = [
  ['Be direct.', 'Clear scope, honest advice, and useful answers. Say what is known and what still needs to be checked.'],
  ['Start small.', 'Use the simplest workable solution. Add another tool only when it solves a real problem.'],
  ['Measure the work.', 'Separate a good idea from a finished result. Choose a concrete next step and a way to check it.'],
]

export default function SkillsGrid() {
  return (
    <section id="approach" aria-labelledby="approach-heading" className="site-container section-space">
      <div className="section-heading">
        <p className="eyebrow"><Hexagon />03 / Approach</p>
        <h2 id="approach-heading">Keep it straightforward.</h2>
      </div>
      <div className="grid gap-8 md:grid-cols-3">
        {principles.map(([title, description]) => (
          <article key={title} className="border-t border-black pt-6">
            <h3 className="text-xl font-medium tracking-tight">{title}</h3>
            <p className="mt-4 leading-7">{description}</p>
          </article>
        ))}
      </div>
      <div className="mt-14 grid gap-6 border-t border-black pt-8 sm:grid-cols-[1fr_2fr]">
        <h3 className="text-xl font-medium tracking-tight">Beyond the business</h3>
        <p className="max-w-2xl leading-7">
          Strength training, running, and basketball keep me moving. Robotic
          mowing and local AI keep me curious. Across both, I’m interested in
          practical capability: getting better at the work, not just collecting
          more tools.
        </p>
      </div>
    </section>
  )
}
