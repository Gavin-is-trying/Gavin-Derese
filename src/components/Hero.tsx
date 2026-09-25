'use client'

import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="py-20 px-4 text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto"
      >
        <h1 className="text-5xl md:text-7xl font-bold mb-6 text-retro-orange">
          Gavin Derese by Gavin Derese
        </h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="text-2xl mb-8 text-retro-green"
        >
          Featuring a sneaky Sasquatch IRL for skills, hobbies, and aspirations
        </motion.p>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="bg-white/80 backdrop-blur-sm p-8 rounded-3xl shadow-xl max-w-2xl mx-auto retro-card"
        >
          <h2 className="text-3xl font-bold mb-4 text-retro-pink">Life Gamification Experiment</h2>
          <p className="text-lg mb-4 text-gray-700">
            I'm creating a sneaky Sasquatch IRL to track different skills, hobbies, and aspiration goals in my life.
          </p>
          <p className="text-lg mb-4 text-gray-700">
            Gamifying my life to see what effect it has, if it's useful or not, and how much I need to bring in other data streams.
          </p>
          <p className="text-lg text-gray-700">
            Creating animated characters in the style of early 1970s Dr. Seuss animated cartoons.
          </p>
        </motion.div>
      </motion.div>
    </section>
  )
}