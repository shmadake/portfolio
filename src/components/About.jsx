import { profile, education } from '../data/resumeData'

const LOG_LINES = [
  {
    tag: 'day_job',
    text: "At Cognizant, building web apps for Merck KGaA — Java, Spring Boot, React, the usual enterprise stack. Went from intern to full-time in under a year.",
  },
  {
    tag: 'side_project',
    text: 'After hours, shipped HalfLife — a spaced-repetition tracker with a Spring Boot 4 + PostgreSQL backend and stateless JWT auth, live and in daily use.',
  },
  {
    tag: 'research',
    text: "Co-built an AI traffic-signal system with YOLOv8 that cut wait times ~31% over fixed-time signals, and co-authored the paper that came out of it.",
  },
  {
    tag: 'philosophy',
    text: 'Prefers work with a number attached to it — fewer manual queries, faster response times, safer access control — over work that just looks busy.',
  },
]

export default function About() {
  return (
    <section id="about" className="px-6 py-16 sm:py-24 border-t border-border">
      <div className="max-w-6xl mx-auto grid md:grid-cols-[1fr_1.3fr] gap-10 md:gap-12">
        <div>
          <div className="eyebrow text-signal mb-3">01 / about</div>
          <h2 className="font-display font-semibold text-2xl sm:text-3xl text-text mb-6 sm:mb-8">
            Who's running this process
          </h2>

          <div className="space-y-3 font-mono text-xs">
            {[
              { k: 'role', v: profile.role },
              { k: 'location', v: profile.location },
              { k: 'focus', v: 'Java · Spring Boot · React' },
              { k: 'status', v: 'open_to_opportunities' },
            ].map((f) => (
              <div
                key={f.k}
                className="flex gap-3 border-b border-border pb-3"
              >
                <span className="text-muted w-20 shrink-0">{f.k}</span>
                <span className="text-signal break-words">{f.v}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-6 sm:space-y-8">
          <div className="space-y-3 sm:space-y-4">
            {LOG_LINES.map((line) => (
              <div
                key={line.tag}
                className="flex flex-col sm:flex-row gap-1.5 sm:gap-4 border-b border-border pb-3 sm:pb-4"
              >
                <span className="font-mono text-[10px] sm:text-xs text-signal shrink-0 sm:w-28 pt-0.5">
                  {line.tag}
                </span>
                <p className="text-muted leading-relaxed text-sm sm:text-base">
                  {line.text}
                </p>
              </div>
            ))}
          </div>

          <div className="space-y-4">
            {education.map((e) => (
              <div
                key={e.school}
                className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 border-b border-border pb-4"
              >
                <div>
                  <div className="text-text font-medium text-sm sm:text-base">
                    {e.school}
                  </div>
                  <div className="text-muted text-xs sm:text-sm">
                    {e.degree}
                  </div>
                </div>
                <div className="sm:text-right shrink-0">
                  <div className="font-mono text-sm text-signal">
                    {e.detail}
                  </div>
                  <div className="font-mono text-xs text-muted">
                    {e.period}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
