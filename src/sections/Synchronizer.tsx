import { useEffect, useState } from 'react'
import { useLang } from '../i18n/LangContext'

const STEP_COUNT = 4

// Horizontal position (%) of the packet for each step, and whether it is still
// encrypted (grey) — it stays encrypted until the parties decrypt at step 3.
const PACKET_POS = ['6%', '36%', '64%', '90%']
const ENCRYPTED_UNTIL = 2 // steps 0,1,2 encrypted; step 3 finalized/clear

export default function Synchronizer() {
  const { t } = useLang()
  const [step, setStep] = useState(0)
  const [playing, setPlaying] = useState(false)

  // Auto-advance when playing.
  useEffect(() => {
    if (!playing) return
    if (step >= STEP_COUNT - 1) {
      setPlaying(false)
      return
    }
    const id = setTimeout(() => setStep((s) => s + 1), 1400)
    return () => clearTimeout(id)
  }, [playing, step])

  const atEnd = step >= STEP_COUNT - 1
  const cur = t.sync.steps[step]
  const encrypted = step <= ENCRYPTED_UNTIL

  return (
    <section id="synchronizer">
      <div className="wrap">
        <h2 className="section-title">{t.sync.title}</h2>
        <p className="lead">{t.sync.lead}</p>

        <div className="sync-flow">
          <div className="flow-track">
            {/* lanes */}
            <div className="lane" style={{ top: 56 }}>
              <span className="lane-label">Party A / B</span>
              <span className={`box ${step === 0 || step === 2 ? 'active' : ''}`}>
                {step >= 2 ? '✓ confirm' : '🔒 tx'}
              </span>
            </div>
            <div className="lane" style={{ top: 120 }}>
              <span className="lane-label">{t.sync.roleSequencer}</span>
              <span className={`box ${step === 1 ? 'active' : ''}`}>
                order encrypted batches
              </span>
            </div>
            <div className="lane" style={{ top: 184 }}>
              <span className="lane-label">{t.sync.roleMediator}</span>
              <span className={`box ${step === 3 ? 'active' : ''}`}>
                two-phase commit → finality
              </span>
            </div>

            {/* moving packet */}
            <div
              className={`packet ${encrypted ? 'encrypted' : ''}`}
              style={{ left: PACKET_POS[step] }}
            >
              {encrypted ? '🔒' : '✓'}
            </div>
          </div>

          <div className="step-info">
            <div className="step-label">{cur.label}</div>
            <div style={{ color: 'var(--ink-dim)', marginTop: 4 }}>{cur.body}</div>
          </div>

          <div className="controls">
            <button
              className="btn primary"
              onClick={() => {
                if (atEnd) setStep(0)
                setPlaying(true)
              }}
              disabled={playing}
            >
              {t.sync.play}
            </button>
            <button
              className="btn"
              onClick={() => setStep((s) => Math.min(STEP_COUNT - 1, s + 1))}
              disabled={playing || atEnd}
            >
              {t.sync.next}
            </button>
            <button
              className="btn"
              onClick={() => {
                setPlaying(false)
                setStep(0)
              }}
            >
              {t.sync.reset}
            </button>
            <div className="step-dots">
              {Array.from({ length: STEP_COUNT }).map((_, i) => (
                <i key={i} className={i <= step ? 'on' : ''} />
              ))}
            </div>
          </div>
        </div>

        <div className="fact-grid">
          {t.sync.facts.map((f) => (
            <div className="fact" key={f.k}>
              <div className="k">{f.k}</div>
              <div className="v">{f.v}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
