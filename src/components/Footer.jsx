export default function Footer() {
  return (
    <footer className="px-6 py-8 border-t border-border">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2 font-mono text-xs text-muted">
        <span>© {new Date().getFullYear()} Satyraj Madake. All processes terminated gracefully.</span>
        <span className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-signal status-dot" />
          build: stable
        </span>
      </div>
    </footer>
  )
}
