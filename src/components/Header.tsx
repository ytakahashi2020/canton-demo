import { useLang } from '../i18n/LangContext'

export default function Header() {
  const { t, lang, toggle } = useLang()
  return (
    <header className="site-header">
      <div className="wrap bar">
        <span className="brand">
          Canton<span className="dot">.</span>demo
        </span>
        <nav className="nav">
          <a href="#intro">{t.nav.intro}</a>
          <a href="#privacy">{t.nav.privacy}</a>
          <a href="#synchronizer">{t.nav.synchronizer}</a>
          <a href="#atomic">{t.nav.atomic}</a>
          <a href="#compare">{t.nav.compare}</a>
        </nav>
        <button
          className="lang-toggle"
          onClick={toggle}
          aria-label="Switch language"
        >
          {lang === 'ja' ? 'EN' : '日本語'}
        </button>
      </div>
    </header>
  )
}
