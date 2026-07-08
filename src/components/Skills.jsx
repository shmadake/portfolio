import { skills } from '../data/resumeData'

export default function Skills() {
  return (
    <section id="skills" className="px-6 py-24 border-t border-border bg-elevated/30">
      <div className="max-w-6xl mx-auto">
        <div className="eyebrow text-signal mb-3">02 / stack</div>
        <h2 className="font-display font-semibold text-3xl text-text mb-12">
          Dependencies
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {Object.entries(skills).map(([category, items]) => (
            <div
              key={category}
              className="bg-elevated border border-border rounded-lg p-6 hover:border-signal/30 transition-colors"
            >
              <div className="font-mono text-xs text-muted mb-4">// {category}</div>
              <div className="flex flex-wrap gap-2">
                {items.map((item) => (
                  <span
                    key={item}
                    className="font-mono text-xs px-3 py-1.5 bg-elevated2 text-text rounded border border-border"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
