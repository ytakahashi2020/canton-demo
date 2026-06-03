import { useState } from 'react'
import { useLang } from '../i18n/LangContext'

type Result = 'idle' | 'ok' | 'fail'

// DvP: two legs that must both commit or both roll back.
export default function Atomic() {
  const { t } = useLang()
  const [result, setResult] = useState<Result>('idle')

  // In the failure case, leg B "fails", so BOTH legs roll back — the key lesson.
  const legAClass =
    result === 'ok' ? 'ok' : result === 'fail' ? 'rolled' : ''
  const legBClass =
    result === 'ok' ? 'ok' : result === 'fail' ? 'fail rolled' : ''

  const statusClass =
    result === 'ok' ? 'ok' : result === 'fail' ? 'fail' : ''
  const statusText =
    result === 'ok'
      ? t.atomic.statusOk
      : result === 'fail'
        ? t.atomic.statusFail
        : t.atomic.statusIdle

  return (
    <section id="atomic">
      <div className="wrap">
        <h2 className="section-title">{t.atomic.title}</h2>
        <p className="lead">{t.atomic.lead}</p>

        <div className="dvp-stage">
          <div className="legs">
            <div className={`leg ${legAClass}`}>
              <div className="leg-title">{t.atomic.legA}</div>
              <div className="leg-state">
                {result === 'ok'
                  ? '✓'
                  : result === 'fail'
                    ? '↩ rollback'
                    : '—'}
              </div>
            </div>
            <div className={`leg ${legBClass}`}>
              <div className="leg-title">{t.atomic.legB}</div>
              <div className="leg-state">
                {result === 'ok'
                  ? '✓'
                  : result === 'fail'
                    ? '✗ failed'
                    : '—'}
              </div>
            </div>
          </div>

          <div className={`dvp-status ${statusClass}`}>{statusText}</div>

          <div className="controls">
            <button className="btn primary" onClick={() => setResult('ok')}>
              {t.atomic.runOk}
            </button>
            <button
              className="btn danger"
              onClick={() => setResult('fail')}
            >
              {t.atomic.runFail}
            </button>
            <button className="btn" onClick={() => setResult('idle')}>
              {t.atomic.reset}
            </button>
          </div>
        </div>

        <div className="callout">
          <div className="ct">{t.atomic.explainTitle}</div>
          <div className="cb">{t.atomic.explain}</div>
        </div>
      </div>
    </section>
  )
}
