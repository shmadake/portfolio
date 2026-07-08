import { useState } from 'react'
import { profile } from '../data/resumeData'

export default function Contact() {
  const [copied, setCopied] = useState(false)

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      // Clipboard API unavailable — the mailto link below still works as a fallback.
    }
  }

  return (
    <section id="contact" className="px-6 py-16 sm:py-28 border-t border-border relative overflow-hidden">
      <div className="absolute inset-0 bg-grid bg-grid opacity-40 [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,black,transparent)]" />
      <div className="relative max-w-3xl mx-auto text-center">
        <div className="eyebrow text-signal mb-3">06 / contact</div>
        <h2 className="font-display font-semibold text-3xl sm:text-4xl text-text mb-4">
          Let's build something worth deploying.
        </h2>
        <p className="text-muted mb-10 max-w-lg mx-auto">
          Open to full-time roles and interesting problems. Reach out — I usually respond within a day.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4 mb-10">
          <a
            href={`mailto:${profile.email}`}
            className="px-6 py-3 bg-signal text-bg font-medium rounded hover:bg-signal/90 transition-colors"
          >
            {profile.email}
          </a>
          <button
            type="button"
            onClick={handleCopyEmail}
            className="px-4 py-3 border border-border text-muted rounded hover:border-signal/50 hover:text-text transition-colors font-mono text-xs w-[110px]"
          >
            {copied ? 'copied ✓' : 'copy email'}
          </button>
          <a
            href={`tel:${profile.phone.replace(/\s/g, '')}`}
            className="px-6 py-3 border border-border text-text rounded hover:border-signal/50 transition-colors font-mono text-sm"
          >
            {profile.phone}
          </a>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-3 sm:gap-6 font-mono text-sm text-muted">
          <a href={profile.github} target="_blank" rel="noreferrer" className="hover:text-signal transition-colors">
            GitHub
          </a>
          <span className="text-border hidden sm:inline">/</span>
          <a href={profile.linkedin} target="_blank" rel="noreferrer" className="hover:text-signal transition-colors">
            LinkedIn
          </a>
          <span className="text-border hidden sm:inline">/</span>
          <a href={profile.leetcode} target="_blank" rel="noreferrer" className="hover:text-signal transition-colors">
            LeetCode
          </a>
          <span className="text-border hidden sm:inline">/</span>
          <a href="/Satyraj_Madake_Resume.pdf" download className="hover:text-signal transition-colors">
            Resume (PDF)
          </a>
        </div>
      </div>
    </section>
  )
}
