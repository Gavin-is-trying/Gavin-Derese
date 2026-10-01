import Hexagon from './Hexagon'

export default function CharacterPreview() {
  return (
    <section id="systems" aria-labelledby="systems-heading" className="bg-black text-white">
      <div className="site-container section-space">
        <div className="section-heading">
          <p className="eyebrow"><Hexagon />02 / Systems</p>
          <h2 id="systems-heading">Technology has to earn its complexity.</h2>
          <p className="max-w-2xl leading-7">
            I’m exploring personal and business AI assistants with distinct
            responsibilities. The direction is practical: organize useful
            knowledge, reduce repetitive administration, and build reliable
            foundations before adding chat.
          </p>
        </div>
        <dl className="grid gap-10 sm:grid-cols-2 sm:gap-14">
          <div className="border-t border-white pt-6">
            <dt className="text-2xl font-medium tracking-tight">Calvin</dt>
            <dd className="mt-4 leading-7">
              The personal side: context, goals, projects, learning, and planning.
              A place to keep the information that makes the next decision easier.
            </dd>
          </div>
          <div className="border-t border-white pt-6">
            <dt className="text-2xl font-medium tracking-tight">Hobbes</dt>
            <dd className="mt-4 leading-7">
              The business side: operating knowledge and workflows for The Lawn
              Company. The intended foundation connects Jobber and business data,
              with TypeScript and a read-first approach.
            </dd>
          </div>
        </dl>
        <p className="mt-10 text-sm leading-6">
          Project direction, not a claim of launched products or live integrations.
        </p>
      </div>
    </section>
  )
}
