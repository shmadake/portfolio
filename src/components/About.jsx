import { profile, education } from '../data/resumeData'

const FACTS = [
  { k: 'role', v: profile.role },
  { k: 'location', v: profile.location },
  { k: 'focus', v: 'Java · Spring Boot · React' },
  { k: 'status', v: 'open_to_opportunities' },
]

export default function About() {
  return (
    <section id="about" className="px-6 py-16 sm:py-24 border-t border-border">
      <div className="max-w-6xl mx-auto">
        <div className="eyebrow text-signal mb-3">01 / about</div>
        <h2 className="font-display font-semibold text-2xl sm:text-3xl text-text mb-8 sm:mb-12">
          Who's running this process
        </h2>

        <div className="grid lg:grid-cols-[1.3fr_1fr] gap-6">
          <div className="bg-elevated border border-border rounded-lg p-6 sm:p-8 hover:border-signal/30 transition-colors">
            <div className="font-mono text-xs text-muted mb-4">// summary</div>
            <p className="text-text leading-relaxed text-base sm:text-lg">
              Ships enterprise software for Merck KGaA at Cognizant by day —
              Java, Spring Boot, React — and builds his own tools at night,
              like a spaced-repetition tracker running on Spring Boot 4 and
              stateless JWT auth. Co-authored a published paper on an
              AI-driven traffic system that cut wait times by roughly 31%.
              Cares more about the number a project moves than how it looks
              on a slide.
            </p>

            <div className="flex flex-wrap gap-2 mt-6">
              {FACTS.map((f) => (
                <span
                  key={f.k}
                  className="font-mono text-xs px-3 py-1.5 bg-elevated2 text-signal rounded border border-border"
                >
                  {f.k}: {f.v}
                </span>
              ))}
            </div>
          </div>

          <div className="bg-elevated border border-border rounded-lg p-6 sm:p-8 hover:border-signal/30 transition-colors">
            <div className="font-mono text-xs text-muted mb-5">// education</div>
            <div className="space-y-5">
              {education.map((e) => (
                <div key={e.school} className="relative pl-5 border-l border-border">
                  <span className="absolute -left-[4.5px] top-1.5 w-2 h-2 rounded-full bg-signal status-dot" />
                  <div className="text-text font-medium text-sm">{e.school}</div>
                  <div className="text-muted text-xs mt-0.5">{e.degree}</div>
                  <div className="flex items-center gap-2 mt-1.5 font-mono text-xs">
                    <span className="text-signal">{e.detail}</span>
                    <span className="text-muted">· {e.period}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
