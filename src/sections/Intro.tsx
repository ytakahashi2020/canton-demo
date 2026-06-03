import { useLang } from '../i18n/LangContext'

export default function Intro() {
  const { t } = useLang()
  return (
    <section id="intro">
      <div className="wrap">
        <h2 className="section-title">{t.intro.title}</h2>
        <p className="lead">{t.intro.lead}</p>
        <div className="cards">
          {t.intro.cards.map((c) => (
            <div className="card" key={c.term}>
              <div className="term">{c.term}</div>
              <div className="body">{c.body}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
