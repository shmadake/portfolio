import { achievements } from '../data/resumeData'

export default function Achievements() {
  return (
    <section className="px-6 py-24 border-t border-border">
      <div className="max-w-6xl mx-auto">
        <div className="eyebrow text-signal mb-3">05 / recognition</div>
        <h2 className="font-display font-semibold text-3xl text-text mb-12">
          Logs & badges
        </h2>

        <div className="grid sm:grid-cols-2 gap-6">
          {achievements.map((a) => (
            <div
              key={a.title}
              className="bg-elevated border border-border rounded-lg p-6 hover:border-amber/40 transition-colors"
            >
              <div className="flex items-center justify-between mb-3">
                <span className="text-amber text-xl">★</span>
                <span className="font-mono text-xs text-muted">{a.year}</span>
              </div>
              <h3 className="font-display font-semibold text-text mb-2">
                {a.link ? (
                  <a
                    href={a.link}
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-signal transition-colors inline-flex items-center gap-1.5"
                  >
                    {a.title}
                    <span className="text-xs text-muted">↗</span>
                  </a>
                ) : (
                  a.title
                )}
              </h3>
              <p className="text-muted text-sm leading-relaxed">{a.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
