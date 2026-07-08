import { projects } from '../data/resumeData'

const statusColor = {
  DEPLOYED: 'text-signal border-signal/40 bg-signal/10',
  PUBLISHED: 'text-amber border-amber/40 bg-amber/10',
}

export default function Projects() {
  return (
    <section id="projects" className="px-6 py-24 border-t border-border bg-elevated/30">
      <div className="max-w-6xl mx-auto">
        <div className="eyebrow text-signal mb-3">04 / projects</div>
        <h2 className="font-display font-semibold text-3xl text-text mb-12">
          Shipped builds
        </h2>

        <div className="grid gap-6">
          {projects.map((p) => (
            <div
              key={p.name}
              className="bg-elevated border border-border rounded-lg p-6 sm:p-8 hover:border-signal/30 transition-colors"
            >
              <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                <h3 className="font-display font-semibold text-xl sm:text-2xl text-text max-w-xl">
                  {p.name}
                </h3>
                <span
                  className={`eyebrow px-2.5 py-1 rounded border shrink-0 ${
                    statusColor[p.status] || 'text-muted border-border bg-elevated2'
                  }`}
                >
                  ● {p.status}
                </span>
              </div>

              <div className="flex flex-wrap gap-2 mb-6">
                {p.stack.map((s) => (
                  <span
                    key={s}
                    className="font-mono text-xs px-2.5 py-1 bg-elevated2 text-muted rounded border border-border"
                  >
                    {s}
                  </span>
                ))}
              </div>

              <div className="grid sm:grid-cols-[auto_1fr] gap-6">
                <div className="flex sm:flex-col gap-4 sm:gap-3 sm:min-w-[160px]">
                  {p.metrics.map((m) => (
                    <div key={m.label} className="border-l-2 border-signal/40 pl-3">
                      <div className="font-mono text-2xl text-text">{m.value}</div>
                      <div className="text-xs text-muted leading-tight">{m.label}</div>
                    </div>
                  ))}
                </div>

                <ul className="space-y-2">
                  {p.points.map((pt) => (
                    <li key={pt} className="text-muted text-sm leading-relaxed flex gap-2">
                      <span className="text-signal shrink-0">›</span>
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {(p.demo || p.github) && (
                <div className="flex flex-wrap gap-3 mt-6 pt-6 border-t border-border">
                  {p.demo && (
                    <a
                      href={p.demo}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 bg-signal text-bg font-mono text-xs font-medium rounded hover:bg-signal/90 transition-colors"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-bg" />
                      Live demo ↗
                    </a>
                  )}
                  {p.github && (
                    <a
                      href={p.github}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 border border-border text-text font-mono text-xs rounded hover:border-signal/50 transition-colors"
                    >
                      Source ↗
                    </a>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
