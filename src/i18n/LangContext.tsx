import { createContext, useContext, useState, type ReactNode } from 'react'
import { dict, type Dict, type Lang } from './dict'

interface LangCtx {
  lang: Lang
  setLang: (l: Lang) => void
  toggle: () => void
  t: Dict
}

const Ctx = createContext<LangCtx | null>(null)

// Default to Japanese, matching the page <html lang="ja"> and the user's audience.
export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>('ja')
  const toggle = () => setLang((l) => (l === 'ja' ? 'en' : 'ja'))
  return (
    <Ctx.Provider value={{ lang, setLang, toggle, t: dict[lang] }}>
      {children}
    </Ctx.Provider>
  )
}

// eslint-disable-next-line react-refresh/only-export-components
export function useLang() {
  const ctx = useContext(Ctx)
  if (!ctx) throw new Error('useLang must be used within LangProvider')
  return ctx
}
