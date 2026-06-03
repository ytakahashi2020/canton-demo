import { useLang } from '../i18n/LangContext'

export default function Footer() {
  const { t } = useLang()
  return (
    <footer className="site-footer">
      <div className="wrap">
        <div>{t.footer.builtWith}</div>
        <div style={{ marginTop: 18, fontWeight: 600, color: 'var(--ink-dim)' }}>
          {t.footer.sourcesTitle}
        </div>
        <div className="sources">
          {t.footer.sources.map((s) => (
            <a key={s.url} href={s.url} target="_blank" rel="noreferrer">
              {s.label} ↗
            </a>
          ))}
        </div>
        <div>{t.footer.disclaimer}</div>
      </div>
    </footer>
  )
}
