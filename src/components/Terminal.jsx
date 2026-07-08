import { useEffect, useState } from 'react'

const LINES = [
  { prompt: 'whoami', output: 'satyraj_madake' },
  { prompt: 'based_in', output: 'pune, india' },
  { prompt: 'role --current', output: 'software_engineer @ cognizant' },
  { prompt: 'client', output: 'merck_kgaa' },
  { prompt: 'education', output: 'b.e_computer_engg · cgpa_8.55' },
  { prompt: 'languages', output: 'java, python, javascript, sql' },
  { prompt: 'stack', output: 'spring_boot + react.js + node.js' },
  { prompt: 'shipped', output: '3_full-stack_projects' },
  { prompt: 'paper', output: 'published_in_jnrid_2025' },
  { prompt: 'award', output: 'cheers_award_cognizant_2026' },
  { prompt: 'cert', output: 'full-stack_web_dev_bootcamp' },
  { prompt: 'fun_fact', output: 'ships_ai_side_projects_by_night' },
  { prompt: 'status', output: 'open_to_opportunities ✓' },
]

const TYPE_SPEED = 45
const PAUSE_AFTER_LINE = 1300
const PAUSE_AFTER_OUTPUT = 900
const PAUSE_BEFORE_OUTPUT = 350

export default function Terminal() {
  const [lineIndex, setLineIndex] = useState(0)
  const [promptText, setPromptText] = useState('')
  const [outputText, setOutputText] = useState('')
  const [phase, setPhase] = useState('typing-prompt')
  const [history, setHistory] = useState([])

  useEffect(() => {
    const current = LINES[lineIndex]
    let timeout

    if (phase === 'typing-prompt') {
      if (promptText.length < current.prompt.length) {
        timeout = setTimeout(() => {
          setPromptText(current.prompt.slice(0, promptText.length + 1))
        }, TYPE_SPEED)
      } else {
        timeout = setTimeout(() => setPhase('typing-output'), PAUSE_BEFORE_OUTPUT)
      }
    } else if (phase === 'typing-output') {
      if (outputText.length < current.output.length) {
        timeout = setTimeout(() => {
          setOutputText(current.output.slice(0, outputText.length + 1))
        }, TYPE_SPEED)
      } else {
        timeout = setTimeout(() => setPhase('pausing'), PAUSE_AFTER_OUTPUT)
      }
    } else if (phase === 'pausing') {
      timeout = setTimeout(() => {
        setHistory((h) => [...h, current].slice(-2))
        setPromptText('')
        setOutputText('')
        setLineIndex((i) => (i + 1) % LINES.length)
        setPhase('typing-prompt')
      }, PAUSE_AFTER_LINE)
    }

    return () => clearTimeout(timeout)
  }, [phase, promptText, outputText, lineIndex])

  return (
    <div className="w-[280px] shrink-0 rounded-lg border border-border bg-elevated/80 backdrop-blur overflow-hidden shadow-lg shadow-black/30">
      <div className="flex items-center gap-1.5 px-3 py-2 border-b border-border bg-elevated2">
        <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F56]" />
        <span className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]" />
        <span className="w-2.5 h-2.5 rounded-full bg-[#27C93F]" />
        <span className="ml-2 font-mono text-[10px] text-muted truncate">satyraj@portfolio:~</span>
      </div>
      <div className="p-4 font-mono text-xs leading-relaxed h-[168px] overflow-hidden flex flex-col justify-end">
        {history.map((h, i) => (
          <div key={i} className="mb-2 opacity-60 shrink-0">
            <div className="text-signal break-words">
              <span className="text-muted">$</span> {h.prompt}
            </div>
            <div className="text-text/80 break-words">{h.output}</div>
          </div>
        ))}
        <div className="shrink-0">
          <div className="text-signal break-words">
            <span className="text-muted">$</span> {promptText}
            {phase === 'typing-prompt' && <span className="animate-blink">▍</span>}
          </div>
          {(phase === 'typing-output' || phase === 'pausing') && (
            <div className="text-text/80 break-words">
              {outputText}
              {phase === 'typing-output' && <span className="animate-blink">▍</span>}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
