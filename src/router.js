// Path based routing. Links are plain <a href>, like on the Webflow site: each click loads the page,
// which also restarts the intro animations. Vite (dev and preview) serves index.html for every path.
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import PricingPage from './pages/PricingPage.jsx'
import Resources from './pages/Resources.jsx'
import Contact from './pages/Contact.jsx'
import NotFound from './pages/NotFound.jsx'
import Licenses from './pages/Licenses.jsx'
import PrivacyPolicy from './pages/PrivacyPolicy.jsx'
import TermsAndConditions from './pages/TermsAndConditions.jsx'
import BlogPost from './pages/BlogPost.jsx'
import { findPost } from './data/posts.js'

const routes = {
  '/': { Page: Home, title: 'AirNexa' },
  '/about': { Page: About, title: 'About' },
  '/pricing': { Page: PricingPage, title: 'Pricing' },
  '/resources': { Page: Resources, title: 'Resources' },
  '/contact': { Page: Contact, title: 'Contact' },
  '/styleguide/licenses': { Page: Licenses, title: 'Licenses' },
  '/styleguide/privacy-policy': { Page: PrivacyPolicy, title: 'Privacy Policy' },
  '/styleguide/terms-and-conditions': { Page: TermsAndConditions, title: 'Terms and Conditions' },
}

const notFound = { Page: NotFound, title: 'Not Found', footer: false }

export function resolve(pathname) {
  const path = pathname.replace(/\/+$/, '') || '/'
  if (routes[path]) return { footer: true, ...routes[path] }
  const post = path.match(/^\/post\/([^/]+)$/)
  if (post) {
    const data = findPost(post[1])
    if (data) return { Page: BlogPost, props: { post: data }, title: data.title, footer: true }
  }
  return notFound
}
