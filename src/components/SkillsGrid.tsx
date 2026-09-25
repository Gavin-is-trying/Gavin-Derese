'use client'

import { motion } from 'framer-motion'

export default function SkillsGrid() {
  const categories = [
    {
      title: "Skills",
      description: "Technical and professional abilities",
      color: "bg-retro-orange",
      items: ["Programming", "Design", "Writing", "Analysis"]
    },
    {
      title: "Hobbies",
      description: "Personal interests and activities",
      color: "bg-retro-yellow",
      items: ["Photography", "Cooking", "Gaming", "Reading"]
    },
    {
      title: "Aspirations",
      description: "Long-term goals and dreams",
      color: "bg-retro-teal",
      items: ["Fitness Goals", "Creative Projects", "Travel Plans", "Learning"]
    }
  ]

  return (
    <section className="py-16 px-4 bg-retro-green/10">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-center mb-12 text-retro-orange"
        >
          Life Areas to Track
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="bg-white p-6 rounded-2xl shadow-lg retro-card"
            >
              <div className={`w-16 h-16 rounded-full ${category.color} flex items-center justify-center mb-4`}>
                <span className="text-2xl">🎯</span>
              </div>
              <h3 className="text-2xl font-bold mb-2 text-retro-pink">{category.title}</h3>
              <p className="text-gray-700 mb-4">{category.description}</p>
              <ul className="space-y-2">
                {category.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex items-center">
                    <span className="mr-2">⭐</span>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
        
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="mt-16 text-center"
        >
          <h3 className="text-3xl font-bold mb-4 text-retro-orange">Future Data Integration</h3>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            As we integrate more data streams from various sources, this dashboard will become 
            your comprehensive view of personal growth across all areas of life.
          </p>
        </motion.div>
      </div>
    </section>
  )
}