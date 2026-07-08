import { useEffect, useRef, useState } from 'react'

const STARTER_PROMPTS = [
  'What has he worked on recently?',
  "What's his tech stack?",
  'Is he open to opportunities?',
]

export default function AskAI() {
  const [open, setOpen] = useState(false)
  const [messages, setMessages] = useState([
    {
      role: 'assistant',
      content:
        "Hi, I'm an AI assistant trained on Satyraj's resume. Ask me anything about his experience, skills, or projects.",
    },
  ])
  const [input, setInput] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const scrollRef = useRef(null)

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight
    }
  }, [messages, loading])

  const sendMessage = async (text) => {
    const content = text.trim()

    if (!content || loading) return

    const nextMessages = [...messages, { role: 'user', content }]

    setMessages(nextMessages)
    setInput('')
    setLoading(true)
    setError(null)

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          messages: nextMessages,
        }),
      })

      const data = await res.json()

      if (!res.ok) {
        throw new Error(data.error || 'Something went wrong.')
      }

      setMessages((prev) => [
        ...prev,
        {
          role: 'assistant',
          content: data.reply,
        },
      ])
    } catch (err) {
      setError(
        err.message ||
          'Unable to connect to the AI service. Please try again later.'
      )
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-signal text-bg shadow-lg shadow-black/30 flex items-center justify-center hover:bg-signal/90 transition-colors"
        aria-label={open ? 'Close AI assistant' : 'Ask AI about Satyraj'}
      >
        {open ? (
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        ) : (
          <svg
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
          </svg>
        )}
      </button>

      {open && (
        <div className="fixed bottom-24 right-6 z-50 w-[340px] max-w-[calc(100vw-3rem)] rounded-lg border border-border bg-elevated shadow-xl shadow-black/40 flex flex-col overflow-hidden">
          <div className="flex items-center gap-2 px-4 py-3 border-b border-border bg-elevated2">
            <span className="w-2 h-2 rounded-full bg-signal status-dot animate-blink" />
            <span className="font-mono text-xs text-text">ask_ai.exe</span>
            <span className="ml-auto font-mono text-[10px] text-muted">
              beta
            </span>
          </div>

          <div
            ref={scrollRef}
            className="flex-1 max-h-[360px] overflow-y-auto px-4 py-4 space-y-3"
          >
            {messages.map((m, i) => (
              <div
                key={i}
                className={m.role === 'user' ? 'text-right' : 'text-left'}
              >
                <span
                  className={`inline-block px-3 py-2 rounded-lg max-w-[85%] text-sm leading-relaxed text-left ${
                    m.role === 'user'
                      ? 'bg-signal/15 text-text border border-signal/30'
                      : 'bg-elevated2 text-muted border border-border'
                  }`}
                >
                  {m.content}
                </span>
              </div>
            ))}

            {loading && (
              <div className="text-left">
                <span className="inline-block px-3 py-2 rounded-lg bg-elevated2 border border-border text-muted font-mono text-xs">
                  thinking<span className="animate-blink">...</span>
                </span>
              </div>
            )}

            {error && (
              <div className="rounded-md border border-amber/40 bg-amber/10 px-3 py-2 text-xs text-amber font-mono">
                {error}
              </div>
            )}
          </div>

          {messages.length === 1 && (
            <div className="px-4 pb-3 flex flex-wrap gap-2">
              {STARTER_PROMPTS.map((p) => (
                <button
                  key={p}
                  type="button"
                  onClick={() => sendMessage(p)}
                  className="font-mono text-[10px] px-2.5 py-1.5 bg-elevated2 text-muted rounded border border-border hover:border-signal/50 hover:text-text transition-colors"
                >
                  {p}
                </button>
              ))}
            </div>
          )}

          <form
            onSubmit={(e) => {
              e.preventDefault()
              sendMessage(input)
            }}
            className="flex items-center gap-2 p-3 border-t border-border"
          >
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask about Satyraj..."
              className="flex-1 bg-elevated2 border border-border rounded px-3 py-2 text-sm text-text placeholder:text-muted focus:outline-none focus:border-signal/50"
              disabled={loading}
            />

            <button
              type="submit"
              disabled={loading || !input.trim()}
              className="px-3 py-2 bg-signal text-bg rounded font-medium text-sm disabled:opacity-40 hover:bg-signal/90 transition-colors"
            >
              →
            </button>
          </form>
        </div>
      )}
    </>
  )
}
