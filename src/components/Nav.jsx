import { useEffect, useState } from 'react'

const links = [
  { href: '#about', label: 'about' },
  { href: '#skills', label: 'skills' },
  { href: '#experience', label: 'experience' },
  { href: '#projects', label: 'projects' },
  { href: '#contact', label: 'contact' },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 border-b transition-colors duration-300 ${
        scrolled ? 'bg-bg/90 backdrop-blur border-border' : 'bg-transparent border-transparent'
      }`}
    >
      <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#top" className="font-mono text-sm text-text flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-signal status-dot animate-blink" />
          satyraj@madake
        </a>
        <div className="hidden md:flex items-center gap-8 font-mono text-xs text-muted">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="hover:text-signal transition-colors">
              ./{l.label}
            </a>
          ))}
        </div>
        <a
          href="#contact"
          className="hidden md:inline-block font-mono text-xs px-4 py-2 border border-signal/40 text-signal rounded hover:bg-signal/10 transition-colors"
        >
          get_in_touch()
        </a>
      </nav>
    </header>
  )
}
