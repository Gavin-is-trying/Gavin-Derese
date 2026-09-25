'use client'

export default function Footer() {
  return (
    <footer className="py-8 px-4 bg-retro-pink text-white">
      <div className="max-w-6xl mx-auto text-center">
        <p className="text-lg mb-4">
          © {new Date().getFullYear()} Gavin Derese by Gavin Derese
        </p>
        <p className="mb-4">
          Exploring the intersection of gamification and personal growth
        </p>
        <div className="flex justify-center space-x-6">
          <a href="#" className="hover:text-retro-yellow transition-colors">
            GitHub
          </a>
          <a href="#" className="hover:text-retro-yellow transition-colors">
            Twitter
          </a>
          <a href="#" className="hover:text-retro-yellow transition-colors">
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  )
}