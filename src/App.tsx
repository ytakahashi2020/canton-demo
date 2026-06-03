import Header from './components/Header'
import Footer from './components/Footer'
import Hero from './sections/Hero'
import Intro from './sections/Intro'
import Privacy from './sections/Privacy'
import Synchronizer from './sections/Synchronizer'
import Atomic from './sections/Atomic'
import Compare from './sections/Compare'

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Intro />
        <Privacy />
        <Synchronizer />
        <Atomic />
        <Compare />
      </main>
      <Footer />
    </>
  )
}
