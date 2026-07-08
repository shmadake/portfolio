import { profile, education } from '../data/resumeData'

export default function About() {
  return (
    <section id="about" className="px-6 py-24 border-t border-border">
      <div className="max-w-6xl mx-auto grid md:grid-cols-[1fr_1.3fr] gap-12">
        <div>
          <div className="eyebrow text-signal mb-3">01 / about</div>
          <h2 className="font-display font-semibold text-3xl text-text mb-8">
            Who's running this process
          </h2>

          <div className="space-y-3 font-mono text-xs">
            {[
              { k: 'role', v: profile.role },
              { k: 'location', v: profile.location },
              { k: 'focus', v: 'Java · Spring Boot · React' },
              { k: 'status', v: 'open_to_opportunities' },
            ].map((f) => (
              <div key={f.k} className="flex gap-3 border-b border-border pb-3">
                <span className="text-muted w-20 shrink-0">{f.k}</span>
                <span className="text-signal">{f.v}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-8">
          <p className="text-muted leading-relaxed text-base sm:text-lg">
            {profile.summary} Based in {profile.location}.
          </p>

          <div className="space-y-4">
            {education.map((e) => (
              <div
                key={e.school}
                className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 border-b border-border pb-4"
              >
                <div>
                  <div className="text-text font-medium">{e.school}</div>
                  <div className="text-muted text-sm">{e.degree}</div>
                </div>
                <div className="text-right shrink-0">
                  <div className="font-mono text-sm text-signal">{e.detail}</div>
                  <div className="font-mono text-xs text-muted">{e.period}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
