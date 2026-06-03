import { useState } from 'react'
import { useLang } from '../i18n/LangContext'

// Parties A & B are on the deal; C is not. Clicking the deal "opens" it and
// reveals who can see it — A & B see it, C is blind to its very existence.
export default function Privacy() {
  const { t } = useLang()
  const [open, setOpen] = useState(false)

  const onDeal: Record<string, boolean> = { A: true, B: true, C: false }

  return (
    <section id="privacy">
      <div className="wrap">
        <h2 className="section-title">{t.privacy.title}</h2>
        <p className="lead">{t.privacy.lead}</p>
        <p className="lead" style={{ marginTop: -14, color: 'var(--ink-faint)' }}>
          {t.privacy.instruction}
        </p>

        <div className="privacy-stage">
          <div
            className={`deal-card ${open ? 'open' : ''}`}
            onClick={() => setOpen((o) => !o)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) =>
              (e.key === 'Enter' || e.key === ' ') && setOpen((o) => !o)
            }
          >
            <div className="deal-lock">{open ? '🔓' : '🔒'}</div>
            <div className="deal-label">{t.privacy.dealLabel}</div>
            <div className="deal-hint">
              {open ? '—' : t.privacy.instruction}
            </div>
          </div>

          <div className="parties">
            {t.privacy.parties.map((p) => {
              const sees = onDeal[p.id]
              const cls = !open ? 'idle' : sees ? 'sees' : 'blind'
              return (
                <div className={`party ${cls}`} key={p.id}>
                  <div className="avatar">{p.id}</div>
                  <div className="meta">
                    <div className="pname">{p.name}</div>
                    <div className="prole">{p.role}</div>
                  </div>
                  <div className="badge">
                    {!open ? '?' : sees ? t.privacy.sees : t.privacy.blind}
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        <div className="callout">
          <div className="ct">{t.privacy.explainTitle}</div>
          <div className="cb">{t.privacy.explain}</div>
        </div>
      </div>
    </section>
  )
}
