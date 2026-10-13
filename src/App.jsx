import { useEffect } from 'react'
import Navbar from './sections/Navbar.jsx'
import Footer from './sections/Footer.jsx'
import { resolve } from './router.js'
import { initWebflow } from './lib/webflow.js'
import { initAnimations } from './lib/animations.js'

const { Page, props, title, footer } = resolve(window.location.pathname)

export default function App() {
  useEffect(() => {
    document.title = title === 'AirNexa' ? title : `${title} | AirNexa`
    const cleanups = [initWebflow(), initAnimations()]
    return () => cleanups.forEach((fn) => fn())
  }, [])

  return (
    <div className="page">
      <Navbar />
      <main className="main">
        <Page {...props} />
      </main>
      {footer && <Footer />}
    </div>
  )
}
