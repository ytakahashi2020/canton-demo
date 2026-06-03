import { useLang } from '../i18n/LangContext'

export default function Compare() {
  const { t } = useLang()
  return (
    <section id="compare">
      <div className="wrap">
        <h2 className="section-title">{t.compare.title}</h2>
        <p className="lead">{t.compare.lead}</p>

        <table className="cmp">
          <thead>
            <tr>
              <th>{t.compare.colFeature}</th>
              <th>{t.compare.colPublic}</th>
              <th>{t.compare.colCanton}</th>
            </tr>
          </thead>
          <tbody>
            {t.compare.rows.map((r) => (
              <tr key={r.feature}>
                <td>{r.feature}</td>
                <td>{r.pub}</td>
                <td className="canton">{r.canton}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <p className="cmp-note">{t.compare.disclaimer}</p>
      </div>
    </section>
  )
}
