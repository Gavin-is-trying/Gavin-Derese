import Hexagon from './Hexagon'

const businesses = [
  {
    name: 'The Lawn Company',
    category: 'Lawn & property care',
    description: 'Lawn maintenance and property services in the Kerrville area. The focus is recurring service, clear agreements, and an operation that can grow without compromising the quality of the work.',
    detail: 'Innovative. Honorable. Experts. Attentive. Urgency.',
  },
  {
    name: 'VIVATION',
    category: 'Clothing',
    description: 'A clothing brand built around a simple idea: circumstances are not always in your control, but your response is a choice. An interest in durable clothing gives that idea a practical form.',
    detail: 'IT’S YOUR CHOICE.',
  },
]

export default function GameifySection() {
  return (
    <section id="work" aria-labelledby="work-heading" className="site-container section-space border-t border-black">
      <div className="section-heading">
        <p className="eyebrow"><Hexagon />01 / Work</p>
        <h2 id="work-heading">Two businesses. Real-world work.</h2>
      </div>
      <div className="grid gap-10 md:grid-cols-2 md:gap-14">
        {businesses.map((business) => (
          <article key={business.name} className="border-t border-black pt-6">
            <p className="eyebrow">{business.category}</p>
            <h3 className="mt-4 text-2xl font-medium tracking-tight">{business.name}</h3>
            <p className="mt-4 leading-7">{business.description}</p>
            <p className="mt-6 text-sm font-semibold leading-6">{business.detail}</p>
          </article>
        ))}
      </div>
    </section>
  )
}
