import { profile } from '../data/resumeData'
import Terminal from './Terminal'

export default function Hero() {
  return (
    <section id="top" className="relative pt-28 pb-16 sm:pt-40 sm:pb-28 px-6 overflow-hidden">
      <div className="absolute inset-0 bg-grid bg-grid opacity-60 [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,black,transparent)]" />

      <div className="relative max-w-6xl mx-auto">
        <div className="flex items-center gap-2 mb-6 font-mono text-xs text-signal animate-rise">
          <span className="w-1.5 h-1.5 rounded-full bg-signal status-dot animate-blink" />
          SYSTEM STATUS: OPEN TO OPPORTUNITIES
        </div>

        <div className="relative">
          <h1
            className="font-display font-semibold text-4xl sm:text-5xl md:text-6xl xl:text-7xl leading-[1.05] text-text max-w-4xl animate-rise"
            style={{ animationDelay: '80ms', animationFillMode: 'backwards' }}
          >
            {profile.name}
          </h1>

          <div
            className="hidden xl:block absolute top-0 right-0 animate-rise"
            style={{ animationDelay: '160ms', animationFillMode: 'backwards' }}
          >
            <Terminal />
          </div>
        </div>

        <p
          className="mt-5 font-mono text-signal text-sm sm:text-base animate-rise"
          style={{ animationDelay: '160ms', animationFillMode: 'backwards' }}
        >
          {'>'} {profile.role} · Cognizant × Merck KGaA
        </p>

        <p
          className="mt-6 max-w-2xl text-muted text-base sm:text-lg leading-relaxed animate-rise"
          style={{ animationDelay: '240ms', animationFillMode: 'backwards' }}
        >
          {profile.summary}
        </p>

        <div
          className="mt-10 flex flex-wrap items-center gap-4 animate-rise"
          style={{ animationDelay: '320ms', animationFillMode: 'backwards' }}
        >
          <a
            href="#projects"
            className="px-5 py-3 bg-signal text-bg font-medium rounded hover:bg-signal/90 transition-colors"
          >
            View projects
          </a>
          <a
            href="#contact"
            className="px-5 py-3 border border-border text-text rounded hover:border-signal/50 transition-colors"
          >
            Contact me
          </a>
          <a
            href="/Satyraj_Madake_Resume.pdf"
            download
            className="px-5 py-3 border border-border text-text rounded hover:border-signal/50 transition-colors inline-flex items-center gap-2"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="7 10 12 15 17 10" />
              <line x1="12" y1="15" x2="12" y2="3" />
            </svg>
            Download resume
          </a>
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            className="px-5 py-3 text-muted font-mono text-sm hover:text-text transition-colors"
          >
            github.com/shmadake ↗
          </a>
        </div>

        <div
          className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-px bg-border border border-border rounded-lg overflow-hidden max-w-3xl animate-rise"
          style={{ animationDelay: '400ms', animationFillMode: 'backwards' }}
        >
          {[
            { value: '8.55', label: 'CGPA' },
            { value: '3', label: 'Shipped projects' },
            { value: '31%', label: 'Peak traffic-flow gain' },
            { value: '1', label: 'Published paper' },
          ].map((stat) => (
            <div key={stat.label} className="bg-elevated px-5 py-5">
              <div className="font-mono text-2xl text-text">{stat.value}</div>
              <div className="eyebrow text-muted mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
