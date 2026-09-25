'use client'

import { motion } from 'framer-motion'

export default function GameifySection() {
  return (
    <section className="py-16 px-4 bg-retro-teal/20">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-center mb-12 text-retro-orange"
        >
          Gamification Concept
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: "Track Everything",
              description: "Monitor skills, hobbies, and goals through a unified dashboard",
              icon: "📊"
            },
            {
              title: "Earn Rewards",
              description: "Achieve milestones and earn badges for your progress",
              icon: "🏆"
            },
            {
              title: "Visualize Growth",
              description: "See your improvement over time with beautiful charts",
              icon: "📈"
            }
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="bg-white p-6 rounded-2xl shadow-lg text-center retro-card"
            >
              <div className="text-4xl mb-4">{item.icon}</div>
              <h3 className="text-2xl font-bold mb-2 text-retro-pink">{item.title}</h3>
              <p className="text-gray-700">{item.description}</p>
            </motion.div>
          ))}
        </div>
        
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="mt-16 bg-gradient-to-r from-retro-orange to-retro-yellow p-8 rounded-3xl text-center"
        >
          <h3 className="text-3xl font-bold mb-4 text-white">The Sneaky Sasquatch Approach</h3>
          <p className="text-xl text-white max-w-3xl mx-auto">
            Just like a sasquatch hiding in the forest, your habits and progress can be tracked invisibly 
            throughout your daily life. We'll integrate various data streams to create a comprehensive view 
            of your personal growth journey.
          </p>
        </motion.div>
      </div>
    </section>
  )
}