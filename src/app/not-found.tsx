'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-retro-yellow to-retro-teal px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center max-w-2xl"
      >
        <h1 className="text-6xl font-bold text-retro-orange mb-4">404</h1>
        <h2 className="text-3xl font-bold text-retro-pink mb-6">Page Not Found</h2>
        <p className="text-xl text-gray-700 mb-8">
          Oops! The sneaky Sasquatch seems to have hidden this page too well.
        </p>
        <Link href="/" className="retro-button text-white font-bold text-lg">
          Return to Homepage
        </Link>
      </motion.div>
    </div>
  )
}