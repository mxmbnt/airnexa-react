// Re-implements the Webflow runtime behaviours the template relies on:
// tabs (pricing), mobile nav, FAQ accordion, background-video play/pause, form submit, announcement close.
import gsap from 'gsap'

const on = (el, type, fn, list) => {
  el.addEventListener(type, fn)
  list.push(() => el.removeEventListener(type, fn))
}

function tabs(off) {
  document.querySelectorAll('.w-tabs').forEach((root) => {
    const links = [...root.querySelectorAll('.w-tab-link')]
    const panes = [...root.querySelectorAll('.w-tab-pane')]
    const durIn = Number(root.dataset.durationIn || 400) / 1000
    const durOut = Number(root.dataset.durationOut || 300) / 1000
    links.forEach((link) =>
      on(
        link,
        'click',
        (e) => {
          e.preventDefault()
          const name = link.dataset.wTab
          if (link.classList.contains('w--current')) return
          links.forEach((l) => l.classList.toggle('w--current', l === link))
          const current = panes.find((p) => p.classList.contains('w--tab-active'))
          const next = panes.find((p) => p.dataset.wTab === name)
          gsap.to(current, {
            opacity: 0,
            duration: durOut,
            ease: 'sine.inOut',
            onComplete: () => {
              current.classList.remove('w--tab-active')
              next.classList.add('w--tab-active')
              gsap.fromTo(next, { opacity: 0 }, { opacity: 1, duration: durIn, ease: 'sine.inOut' })
            },
          })
        },
        off
      )
    )
  })
}

function nav(off) {
  const navbar = document.querySelector('.navbar.w-nav')
  if (!navbar) return
  const btn = navbar.querySelector('.w-nav-button')
  const menu = navbar.querySelector('.w-nav-menu')
  const top = btn.querySelector('[nav-icon-top]')
  const mid = btn.querySelector('[nav-icon-mid]')
  const bottom = btn.querySelector('[nav-icon-bottom]')
  // Hamburger to cross (Webflow timeline t-ab274092)
  const icon = gsap
    .timeline({ paused: true, defaults: { ease: 'power1.out' } })
    .to(mid, { opacity: 0, duration: 0.15, ease: 'none' }, 0)
    .to(top, { y: 8, duration: 0.25 }, 0)
    .to(top, { rotation: -45, duration: 0.25 }, 0.2)
    .to(bottom, { y: -8, duration: 0.25 }, 0)
    .to(bottom, { rotation: 45, duration: 0.25 }, 0.2)

  let open = false
  const set = (value) => {
    open = value
    btn.classList.toggle('w--open', open)
    if (open) {
      menu.setAttribute('data-nav-menu-open', '')
      gsap.fromTo(menu, { height: 0, overflow: 'hidden' }, { height: 'auto', duration: 0.4, ease: 'sine.out' })
      icon.play()
    } else {
      gsap.to(menu, {
        height: 0,
        duration: 0.4,
        ease: 'sine.in',
        onComplete: () => {
          menu.removeAttribute('data-nav-menu-open')
          gsap.set(menu, { clearProps: 'height,overflow' })
        },
      })
      icon.reverse()
    }
  }
  on(btn, 'click', () => set(!open), off)
  menu.querySelectorAll('a').forEach((a) => on(a, 'click', () => open && set(false), off))
  const mq = window.matchMedia('(min-width: 992px)')
  const reset = () => {
    if (mq.matches && open) {
      open = false
      btn.classList.remove('w--open')
      menu.removeAttribute('data-nav-menu-open')
      gsap.set(menu, { clearProps: 'height,overflow' })
      icon.progress(0).pause()
    }
  }
  mq.addEventListener('change', reset)
  off.push(() => mq.removeEventListener('change', reset), () => icon.kill())

  // Announcement bar close (timeline t-a139f7d2)
  const close = navbar.querySelector('.nav-close-icon')
  const bar = navbar.querySelector('.nav-top-wrap')
  if (close && bar) on(close, 'click', () => gsap.to(bar, { height: 0, duration: 0.5, ease: 'power1.out' }), off)
}

function faq(off) {
  // Timeline t-5da802a8: answer height 0 -> auto, vertical bar rotates 90deg -> 0deg
  document.querySelectorAll('.faq-accordion').forEach((item) => {
    const q = item.querySelector('.faq-question')
    const answer = q.nextElementSibling
    const bar = item.querySelector('.faq-icon.cc-vertical')
    gsap.set(answer, { height: 0 })
    const tl = gsap
      .timeline({ paused: true, defaults: { ease: 'power1.out', duration: 0.5 } })
      .fromTo(answer, { height: 0 }, { height: 'auto' }, 0)
      .fromTo(bar, { rotation: 90 }, { rotation: 0 }, 0)
    q.style.cursor = 'pointer'
    on(q, 'click', () => (tl.progress() === 0 || tl.reversed() ? tl.play() : tl.reverse()), off)
    off.push(() => tl.kill())
  })
}

function backgroundVideos(off) {
  document.querySelectorAll('.w-background-video').forEach((wrap) => {
    const video = wrap.querySelector('video')
    const btn = wrap.querySelector('[data-w-bg-video-control]')
    if (!video) return
    video.muted = true
    video.play().catch(() => {})
    if (!btn) return
    const playState = btn.querySelector('.play-state')
    const pauseState = btn.querySelector('.pause-state')
    const sync = () => {
      playState.hidden = video.paused
      pauseState.hidden = !video.paused
    }
    on(btn, 'click', () => (video.paused ? video.play() : video.pause()), off)
    on(video, 'play', sync, off)
    on(video, 'pause', sync, off)
  })
}

function forms(off) {
  document.querySelectorAll('.w-form').forEach((wrap) => {
    const form = wrap.querySelector('form')
    const done = wrap.querySelector('.w-form-done')
    if (!form) return
    on(
      form,
      'submit',
      (e) => {
        e.preventDefault()
        const submit = form.querySelector('[type=submit]')
        const label = submit.value
        submit.value = submit.dataset.wait || label
        setTimeout(() => {
          submit.value = label
          form.style.display = 'none'
          if (done) done.style.display = 'block'
        }, 600)
      },
      off
    )
  })
}

// Webflow adds w--current / aria-current to links pointing at the current page
function currentLinks() {
  const here = window.location.pathname.replace(/\/+$/, '') || '/'
  document.querySelectorAll('a[href^="/"]').forEach((a) => {
    const target = a.getAttribute('href').replace(/\/+$/, '') || '/'
    const current = target === here
    a.classList.toggle('w--current', current)
    if (current) a.setAttribute('aria-current', 'page')
    else a.removeAttribute('aria-current')
  })
}

export function initWebflow() {
  const off = []
  currentLinks()
  tabs(off)
  nav(off)
  faq(off)
  backgroundVideos(off)
  forms(off)
  return () => off.forEach((fn) => fn())
}
