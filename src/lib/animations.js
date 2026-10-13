// Port of the template's Webflow Interactions (GSAP-based "ix3") + Lenis smooth scroll.
// Each block references the original timeline id from the Webflow export.
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { SplitText } from 'gsap/SplitText'
import Lenis from 'lenis'

gsap.registerPlugin(ScrollTrigger, SplitText)

// Webflow ix3 ease ids used by the template: 0 none, 2 power1.out, 3 power1.inOut, 29 sine.out
const EASE = 'power1.out'

function smoothScroll() {
  const lenis = new Lenis({
    duration: 1.5,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    touchMultiplier: 1.5,
  })
  const raf = (time) => lenis.raf(time * 1000)
  gsap.ticker.add(raf)
  gsap.ticker.lagSmoothing(0)
  lenis.on('scroll', ScrollTrigger.update)

  // Anchor links (#features...) go through Lenis
  const onClick = (e) => {
    const a = e.target.closest('a[href^="#"]')
    if (!a || a.getAttribute('href') === '#') return
    const target = document.querySelector(a.getAttribute('href'))
    if (!target) return
    e.preventDefault()
    lenis.scrollTo(target, { offset: -90 })
  }
  document.addEventListener('click', onClick)

  return () => {
    document.removeEventListener('click', onClick)
    gsap.ticker.remove(raf)
    lenis.destroy()
  }
}

const splitLines = (el) => SplitText.create(el, { type: 'lines', mask: 'lines', linesClass: 'split-line' })

// t-3614c2f9 : hero intro on page load
function heroIntro(splits) {
  const tl = gsap.timeline({ defaults: { duration: 0.8, ease: EASE } })
  const lines = (sel) => {
    const out = []
    document.querySelectorAll(sel).forEach((el) => {
      const s = splitLines(el)
      splits.push(s)
      out.push(...s.lines)
    })
    return out
  }
  tl.from(lines('[data-header-eyebrow]'), { opacity: 0, y: '2rem', stagger: 0.08 }, 0)
    .from(lines('[data-header-title]'), { opacity: 0, y: '2rem', stagger: 0.08 }, 0.15)
    .from(lines('[data-header-text]'), { opacity: 0, y: '2rem', stagger: 0.08 }, 0.3)
    .from('[data-header-button]', { opacity: 0, y: '2rem', stagger: 0.08 }, 0.45)
    .from('[data-header-image]', { opacity: 0, scale: 1.1, ease: 'none' }, 0)
  // Restore natural line wrapping once the intro is done (keeps the layout responsive)
  tl.eventCallback('onComplete', () => splits.splice(0).forEach((s) => s.revert()))
}

// t-6cc34eaa : every [data-header-item] reveals its direct children when entering the viewport
function reveals() {
  document.querySelectorAll('[data-header-item]').forEach((item) => {
    const children = item.children
    if (!children.length) return
    gsap.from(children, {
      opacity: 0,
      y: '2rem',
      duration: 0.8,
      stagger: 0.08,
      ease: EASE,
      scrollTrigger: { trigger: item, start: '20% bottom', toggleActions: 'play none none none' },
    })
  })
}

// t-39b75719 : button text roll on hover
function buttonHovers(off) {
  document.querySelectorAll('.button').forEach((btn) => {
    const top = btn.querySelector('[button-text-top]')
    const bottom = btn.querySelector('[button-text-bottom]')
    if (!top || !bottom) return
    const tl = gsap
      .timeline({ paused: true, defaults: { duration: 0.35, ease: 'sine.out' } })
      .to(top, { opacity: 0, scaleY: 0, transformOrigin: '50% 0%' }, 0)
      .fromTo(bottom, { scaleY: 0, transformOrigin: '50% 100%' }, { scaleY: 1, opacity: 1 }, 0)
    const enter = () => tl.play()
    const leave = () => tl.reverse()
    btn.addEventListener('mouseenter', enter)
    btn.addEventListener('mouseleave', leave)
    off.push(() => {
      btn.removeEventListener('mouseenter', enter)
      btn.removeEventListener('mouseleave', leave)
    })
  })
}

// t-3f211ee1 : blog "Read post" arrow slides out / in
function blogHovers(off) {
  document.querySelectorAll('.blog-btn').forEach((btn) => {
    const tl = gsap
      .timeline({ paused: true, defaults: { duration: 0.35, ease: EASE } })
      .to(btn.querySelector('[blog-icon-top]'), { x: 20, y: -20 }, 0)
      .fromTo(btn.querySelector('[blog-icon-left]'), { x: -20, y: 20 }, { x: 0, y: 0 }, 0)
    const enter = () => tl.play()
    const leave = () => tl.reverse()
    btn.addEventListener('mouseenter', enter)
    btn.addEventListener('mouseleave', leave)
    off.push(() => {
      btn.removeEventListener('mouseenter', enter)
      btn.removeEventListener('mouseleave', leave)
    })
  })
}

// t-429c4679 : giant footer wordmark, letters slide in from the left (scrubbed)
function footerWordmark() {
  document.querySelectorAll('.footer-text-wrap').forEach((wrap) => {
    const letters = wrap.querySelectorAll('.footer-text > *')
    gsap.from(letters, {
      opacity: 0,
      x: '-3rem',
      duration: 0.8,
      stagger: 0.04,
      ease: 'none',
      scrollTrigger: { trigger: wrap, start: 'top bottom', end: 'bottom top', scrub: 2 },
    })
  })
}

// t-67919a60 : "You been paid!" card types in, then its button fades up
function featureVideos(splits) {
  document.querySelectorAll('.features-video').forEach((video) => {
    const text = video.querySelector('[features-text]')
    const cta = video.querySelector('.cta-wrapper.cc-smart')
    const tl = gsap.timeline({
      scrollTrigger: { trigger: video, start: 'top bottom', toggleActions: 'play none none none' },
    })
    if (text) {
      const s = SplitText.create(text, { type: 'chars' })
      splits.push(s)
      tl.from(s.chars, { opacity: 0, duration: 0.6, stagger: 0.02, ease: 'power1.inOut' }, 0)
    }
    if (cta) tl.from(cta, { opacity: 0, y: '1rem', duration: 0.8, ease: EASE }, 1.3)
  })
}

// t-b1a690f0 (About page, desktop only) : stacked cards rise at different speeds while scrolling
function aboutCards() {
  ScrollTrigger.matchMedia({
    '(min-width: 992px)': () => {
      document.querySelectorAll('[data-about-card]').forEach((wrap) => {
        const offsets = { '[card-1]': 180, '[card-2]': 90, '[card-3]': 40, '[card-4]': 124 }
        const tl = gsap.timeline({
          defaults: { duration: 0.6, ease: EASE },
          scrollTrigger: { trigger: wrap, start: '20% bottom', end: 'bottom center', scrub: 2 },
        })
        Object.entries(offsets).forEach(([sel, y]) => {
          const el = wrap.querySelectorAll(sel)
          if (el.length) tl.from(el, { y }, 0)
        })
      })
    },
  })
}

// t-201b4444 : logos breathing in / out forever
function logoPulse() {
  const opts = { duration: 2, ease: 'none' }
  gsap
    .timeline({ repeat: -1 })
    .fromTo('[scale-in]', { scale: 0.8 }, { scale: 1.1, ...opts }, 0)
    .fromTo('[scale-out]', { scale: 1.1 }, { scale: 0.8, ...opts }, 0)
    .to('[scale-in]', { scale: 0.8, ...opts }, 2)
    .to('[scale-out]', { scale: 1.1, ...opts }, 2)
}

export function initAnimations() {
  const off = []
  const splits = []
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  let ctx
  let cancelled = false

  if (!reduce) off.push(smoothScroll())

  // Split text only once the custom fonts are in, so line breaks are measured correctly
  document.fonts.ready.then(() => {
    if (cancelled) return
    ctx = gsap.context(() => {
      if (!reduce) {
        heroIntro(splits)
        reveals()
        footerWordmark()
        featureVideos(splits)
        logoPulse()
        aboutCards()
      }
      buttonHovers(off)
      blogHovers(off)
    })
    document.documentElement.classList.add('w-mod-ix3')
    ScrollTrigger.refresh()
  })

  return () => {
    cancelled = true
    off.forEach((fn) => fn())
    splits.forEach((s) => s.revert())
    ctx?.revert()
    document.documentElement.classList.remove('w-mod-ix3')
  }
}
