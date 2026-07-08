import { experience } from '../data/resumeData'

export default function Experience() {
  return (
    <section id="experience" className="px-6 py-24 border-t border-border">
      <div className="max-w-6xl mx-auto">
        <div className="eyebrow text-signal mb-3">03 / experience</div>
        <h2 className="font-display font-semibold text-3xl text-text mb-12">
          Deploy history
        </h2>

        <div className="space-y-6">
          {experience.map((job) => (
            <div
              key={job.role + job.period}
              className="relative pl-8 border-l border-border"
            >
              <span
                className={`absolute -left-[5px] top-1.5 w-2.5 h-2.5 rounded-full status-dot ${
                  job.status === 'LIVE' ? 'bg-signal animate-blink' : 'bg-muted'
                }`}
              />
              <div className="flex flex-wrap items-baseline justify-between gap-2 mb-1">
                <h3 className="font-display font-semibold text-xl text-text">{job.role}</h3>
                <span className="font-mono text-xs text-muted">{job.period}</span>
              </div>
              <div className="font-mono text-sm text-signal mb-1">{job.org}</div>
              {job.client && <div className="text-muted text-sm mb-4">{job.client}</div>}
              <ul className="space-y-2 mt-3">
                {job.points.map((p) => (
                  <li key={p} className="text-muted text-sm leading-relaxed flex gap-2">
                    <span className="text-signal shrink-0">›</span>
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
