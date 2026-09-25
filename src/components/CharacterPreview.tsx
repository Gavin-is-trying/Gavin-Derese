'use client'

import { motion } from 'framer-motion'

export default function CharacterPreview() {
  return (
    <section className="py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-center mb-12 text-retro-orange"
        >
          Meet Your Sasquatch Companion
        </motion.h2>
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex-1"
          >
            <div className="bg-gray-200 border-2 border-dashed rounded-xl w-full h-96 flex items-center justify-center text-gray-500">
              Sasquatch Character Illustration
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex-1"
          >
            <h3 className="text-3xl font-bold mb-4 text-retro-pink">Your 1970s Dr. Seuss-Style Guide</h3>
            <p className="text-lg mb-4 text-gray-700">
              Inspired by the whimsical characters of early 1970s Dr. Seuss animations, your Sasquatch companion 
              will guide you through your gamified life journey with playful animations and encouraging messages.
            </p>
            <p className="text-lg mb-4 text-gray-700">
              This character will represent your progress, celebrate your victories, and gently nudge you toward 
              your goals with charming 1970s aesthetic and vibrant colors.
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>Playful animations for different achievements</li>
              <li>Custom reactions to your progress</li>
              <li>Whimsical interactions inspired by classic cartoons</li>
              <li>Vibrant color scheme reflecting the 1970s aesthetic</li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  )
}