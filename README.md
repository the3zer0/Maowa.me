<div align="center">

# MAOWA.ME

### STORIES THAT MOVE. EDITS THAT STAY.

**A cinematic portfolio for video editor and content creator Jannatul Maowa Runa.**

[![Live Website](https://img.shields.io/badge/EXPLORE_PORTFOLIO-maowa.me-F8D95E?style=for-the-badge&labelColor=171717)](https://maowa.me/)
[![Source Code](https://img.shields.io/badge/SOURCE-GitHub-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/the3zer0/Maowa.me)

<br>

![React](https://img.shields.io/badge/React-20232A?style=flat-square&logo=react&logoColor=61DAFB)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=flat-square&logo=vite&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black)
![CSS](https://img.shields.io/badge/CSS-1572B6?style=flat-square&logo=css&logoColor=white)
![Motion](https://img.shields.io/badge/Framer_Motion-0055FF?style=flat-square)
![GSAP](https://img.shields.io/badge/GSAP-0A0A0A?style=flat-square&logo=greensock&logoColor=88CE02)
![EmailJS](https://img.shields.io/badge/EmailJS-Contact-orange?style=flat-square)

</div>

---

## ✦ Overview

**MAOWA.ME** is a responsive, motion-driven portfolio built to showcase **Jannatul Maowa Runa's** video editing, motion graphics, creative direction, and visual storytelling. The experience goes beyond a static gallery with animated sections, browsable video work, interactive project previews, and direct client enquiry options.

**[🌐 Live Website](https://maowa.me/)** · **[💻 GitHub Repository](https://github.com/the3zer0/Maowa.me)** · **[🎬 Portfolio Gallery](https://maowa.me/#portfolio)**

## 🎞️ Selected work

<div align="center">

<a href="https://maowa.me/#portfolio"><img src="./public/typo.png" alt="Typography in Motion project artwork" width="30%" /></a>
&nbsp;
<a href="https://maowa.me/#portfolio"><img src="./public/ai1.png" alt="AI advertising video project artwork" width="30%" /></a>
&nbsp;
<a href="https://maowa.me/#portfolio"><img src="./public/client.png" alt="Podcast editing project artwork" width="30%" /></a>

<br>
<sub>Existing portfolio project artwork from this repository — these are not screenshots of the full website.</sub>

</div>

## ✨ Features

| Feature | Details |
| --- | --- |
| **Cinematic landing page** | Bold typography, animated visuals, featured work, and clear calls to action |
| **Interactive video portfolio** | Category filters, project details, video previews, and YouTube playback |
| **Featured video** | YouTube IFrame API integration with a poster fallback |
| **Motion-rich experience** | Framer Motion, scroll reveals, custom cursor, and transitions |
| **Creative process** | A behind-the-scenes presentation of the editing workflow |
| **Client testimonials** | Animated reviews carousel |
| **Service packages** | Basic, Standard, and Premium editing tiers with comparisons |
| **FAQ** | Expandable answers about services, revisions, and working together |
| **Contact form** | Name, email, WhatsApp, service, and message fields powered by EmailJS |
| **WhatsApp CTA** | Floating quick-contact shortcut |
| **Responsive navigation** | Mobile menu and section-based navigation |

### Portfolio categories

The gallery includes work in **Practice**, **Podcast**, **Advertising**, and **Using AI**. Visitors can browse projects and explore linked YouTube videos.

## 🛠️ Tech stack

| Area | Technologies |
| --- | --- |
| Frontend | React, JavaScript (JSX), HTML5 |
| Build | Vite, @vitejs/plugin-react |
| Styling | CSS3, custom responsive layouts |
| Animation | Framer Motion, GSAP |
| Video | YouTube IFrame API; React Player is listed as a project dependency |
| Contact | EmailJS Browser SDK |
| Deployment tooling | gh-pages |

### Dependencies

The following packages are declared in [package.json](./package.json):

**Dependencies:** `@emailjs/browser`, `framer-motion`, `gsap`, `react-player`

**Dev dependencies:** `@vitejs/plugin-react`, `vite`, `gh-pages`

> **Dependency note:** The application source imports `react` and `react-dom`, but these are not explicitly listed as direct dependencies in the current package manifest. For a reliable clean installation, add the matching packages to the manifest in a separate source/configuration update. This README update does not change dependencies or project code.

## 📁 Project structure

```text
Maowa.me/
├── public/                      # Portfolio posters, icons, visual assets
├── src/
│   ├── components/
│   │   ├── Hero.jsx              # Landing and featured video
│   │   ├── Nav.jsx               # Site navigation
│   │   ├── Contact.jsx           # EmailJS form
│   │   ├── Footer.jsx            # Contact and social links
│   │   ├── FloatingWhatsApp.jsx  # Quick WhatsApp access
│   │   ├── CustomCursor.jsx      # Interactive cursor
│   │   └── sections/             # Gallery, pricing, FAQ, reviews, process
│   ├── hooks/                    # Animation hooks
│   ├── styles/                   # CSS stylesheets
│   ├── utils/                    # Asset and YouTube API helpers
│   ├── App.jsx                   # Main page composition
│   └── main.jsx                  # React entry point
├── index.html
├── vite.config.js
├── package.json
└── README.md
```

## 🚀 Getting started

**Prerequisites:** Git, npm, and a Node.js version compatible with the project's Vite version.

**1. Clone the repository**

```bash
git clone https://github.com/the3zer0/Maowa.me.git
cd Maowa.me
```

**2. Install dependencies**

```bash
npm install
```

**3. Start the local development server**

```bash
npm run dev
```

Open the local address shown in the terminal (typically **http://localhost:5173**).

**4. Build and preview**

```bash
npm run build
npm run preview
```

If a fresh installation reports missing React packages, update `package.json` to declare `react` and `react-dom` explicitly before retrying.

### NPM scripts

| Command | Action |
| --- | --- |
| `npm run dev` | Launch Vite development server |
| `npm run build` | Build the site into `dist/` |
| `npm run preview` | Preview the production build locally |
| `npm run deploy` | Build and publish `dist/` using gh-pages (requires deployment access/configuration) |

## 🔌 Integrations and configuration

**EmailJS:** The contact form uses `@emailjs/browser`. Service ID, template ID, and browser public key are currently configured inside `src/components/Contact.jsx`. If you deploy a fork, replace them with your own EmailJS setup. Never embed secret server credentials in client-side code.

**YouTube:** Featured and portfolio videos use YouTube embeds. Playback depends on YouTube and the visitor's network/browser settings.

**WhatsApp:** Package enquiry links and the floating CTA open WhatsApp with prefilled messages. Check the recipient number before publishing a fork.

**Fonts:** The site loads Google Fonts; these and the external video integrations require an internet connection.

## 🌍 Deployment

MAOWA.ME is a Vite application that produces static build output.

1. Run `npm run build`.
2. Deploy the generated `dist/` directory to your chosen static host.
3. Configure the custom domain and hosting base path as needed.
4. Test the contact form, video embeds, and asset paths after deployment.

The repository includes a `gh-pages` deployment script, but this README does not assume the production site's current hosting provider.

**Production website: [maowa.me](https://maowa.me/)**

## 🔗 Contact and social links

<div align="center">

[![Website](https://img.shields.io/badge/Website-maowa.me-F8D95E?style=for-the-badge&labelColor=171717)](https://maowa.me/)
[![Instagram](https://img.shields.io/badge/Instagram-@meaw__maowa-E4405F?style=for-the-badge&logo=instagram&logoColor=white)](https://www.instagram.com/meaw_maowa)
[![YouTube](https://img.shields.io/badge/YouTube-Maowa-FF0000?style=for-the-badge&logo=youtube&logoColor=white)](https://www.youtube.com/@maowa2.0)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Maowa-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/maowame)
[![Email](https://img.shields.io/badge/Email-Get_in_Touch-4A5568?style=for-the-badge&logo=gmail&logoColor=white)](mailto:jannatulmaowa.me@gmail.com)

</div>

---

<div align="center">

### Made for stories worth watching.

Creative portfolio of **Jannatul Maowa Runa** · Repository maintained at **[@the3zer0](https://github.com/the3zer0)**

**[↗ Explore MAOWA.ME](https://maowa.me/)**

</div>
