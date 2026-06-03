import { useState } from 'react'
import { useLang } from '../i18n/LangContext'

type Mode = 'public' | 'canton'

// Four nodes near the corners, with a hub in the middle. Corners keep every
// node well clear of the center hub so nothing overlaps (A used to sit right on
// top of the hub).
const NODES = [
  { id: 'A', x: 18, y: 24 },
  { id: 'B', x: 82, y: 24 },
  { id: 'C', x: 82, y: 76 },
  { id: 'D', x: 18, y: 76 },
]
const HUB = { x: 50, y: 50 }

export default function Hero() {
  const { t } = useLang()
  const [mode, setMode] = useState<Mode>('public')
  const isPublic = mode === 'public'

  // Public: every node connected to every other (full mesh) = broadcast.
  // Canton: only A & B (the parties) connected through the hub = private routing.
  const litNodes = isPublic ? NODES.map((n) => n.id) : ['A', 'B']

  return (
    <section className="hero" id="top">
      <div className="wrap">
        <span className="kicker">{t.hero.kicker}</span>
        <h1>{t.hero.title}</h1>
        <p className="subtitle">{t.hero.subtitle}</p>

        <div className="toggle-stage">
          <div className="mode-switch" role="tablist">
            <button
              className={isPublic ? 'active' : ''}
              onClick={() => setMode('public')}
            >
              {t.hero.publicMode}
            </button>
            <button
              className={!isPublic ? 'active' : ''}
              onClick={() => setMode('canton')}
            >
              {t.hero.cantonMode}
            </button>
          </div>
          <span className="switch-hint">{t.hero.toggleLabel}</span>

          <div className="ledger-viz" aria-hidden>
            <svg
              width="100%"
              height="100%"
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
              style={{ position: 'absolute', inset: 0 }}
            >
              {isPublic
                ? // full mesh between all nodes
                  NODES.flatMap((a, i) =>
                    NODES.slice(i + 1).map((b) => (
                      <line
                        key={`${a.id}${b.id}`}
                        className="viz-line"
                        x1={a.x}
                        y1={a.y}
                        x2={b.x}
                        y2={b.y}
                        stroke="var(--accent-2)"
                        opacity={0.5}
                      />
                    )),
                  )
                : // only A and B routed via hub
                  NODES.filter((n) => n.id === 'A' || n.id === 'B').map((n) => (
                    <line
                      key={n.id}
                      className="viz-line"
                      x1={n.x}
                      y1={n.y}
                      x2={HUB.x}
                      y2={HUB.y}
                      stroke="var(--accent)"
                      opacity={0.9}
                    />
                  ))}
            </svg>

            {/* hub only meaningful in canton mode */}
            <div
              className={`node ${!isPublic ? 'lit' : ''}`}
              style={{
                left: `${HUB.x}%`,
                top: `${HUB.y}%`,
                opacity: isPublic ? 0.25 : 1,
                fontSize: '0.62rem',
              }}
            >
              Sync
            </div>

            {NODES.map((n) => (
              <div
                key={n.id}
                className={`node ${litNodes.includes(n.id) ? 'lit' : ''}`}
                style={{
                  left: `${n.x}%`,
                  top: `${n.y}%`,
                  opacity: litNodes.includes(n.id) ? 1 : 0.4,
                }}
              >
                {n.id}
              </div>
            ))}
          </div>

          <p className="viz-caption">
            {isPublic ? t.hero.publicCaption : t.hero.cantonCaption}
          </p>
        </div>

        <a className="hero-cta" href="#intro">
          {t.hero.cta}
        </a>
        <p className="hero-note">{t.hero.note}</p>
      </div>
    </section>
  )
}
