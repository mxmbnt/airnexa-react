# AirNexa (React + Vite)

Reconstruction en React du template Webflow **AirNexa** : 19 pages, design system d'origine, animations GSAP et smooth scroll Lenis.

## Prérequis

- Node.js 18 ou plus récent (testé avec Node 20)
- npm

## Installation

```bash
git clone <url-du-depot>
cd <nom-du-depot>
npm install
```

## Lancer le site

```bash
npm run dev
```

Puis ouvrir http://localhost:5173/

## Build de production

```bash
npm run build     # génère le site dans dist/
npm run preview   # sert dist/ en local pour vérifier
```

Le site utilise des adresses classiques (`/about`, `/post/...`). Sur l'hébergeur, il faut renvoyer `index.html` pour toutes les routes :

- **Netlify** : ajouter un fichier `public/_redirects` contenant `/* /index.html 200`
- **Vercel** : ajouter un `vercel.json` avec `{ "rewrites": [{ "source": "/(.*)", "destination": "/" }] }`

## Pages

| Adresse | Fichier |
|---|---|
| `/` | `src/pages/Home.jsx` |
| `/about` | `src/pages/About.jsx` |
| `/pricing` | `src/pages/PricingPage.jsx` |
| `/resources` | `src/pages/Resources.jsx` |
| `/contact` | `src/pages/Contact.jsx` |
| `/styleguide/licenses` | `src/pages/Licenses.jsx` |
| `/styleguide/privacy-policy` | `src/pages/PrivacyPolicy.jsx` |
| `/styleguide/terms-and-conditions` | `src/pages/TermsAndConditions.jsx` |
| `/post/<slug>` (10 articles) | `src/pages/BlogPost.jsx`, contenus dans `src/data/posts.js` |
| toute autre adresse | `src/pages/NotFound.jsx` |

Les routes sont déclarées dans `src/router.js`.

## Structure

```
src/
├── App.jsx            layout commun (navbar, page, footer)
├── router.js          adresse → page
├── pages/             une page par route
├── sections/          sections réutilisables (Navbar, Hero, Pricing, Faq, Blog, Cta, Footer…)
├── data/posts.js      articles du blog
├── lib/animations.js  animations GSAP (SplitText, ScrollTrigger) + Lenis
├── lib/webflow.js     comportements : onglets pricing, menu mobile, FAQ, vidéos, formulaires
├── styles/webflow.css design system d'origine (variables dans :root)
└── index.css          imports + Tailwind (sans preflight)
public/                images, vidéos, polices
```

## Modifier le contenu

- **Textes et sections** : directement dans `src/sections/` ou `src/pages/`.
- **Articles** : ajouter ou modifier une entrée dans `src/data/posts.js` (le champ `body` est du HTML).
- **Couleurs, typos, espacements** : variables CSS dans `:root` de `src/styles/webflow.css`.
- **Formulaires** : ils affichent le message de succès mais n'envoient rien. Brancher un service (Formspree, API…) dans `src/lib/webflow.js`, fonction `forms`.

## Stack

React 18, Vite 6, Tailwind CSS 4, GSAP 3 (ScrollTrigger, SplitText), Lenis.
