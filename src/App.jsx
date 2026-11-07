import { useEffect } from 'react'
import './styles/global.css'
import './index.css'
import Nav from './components/Nav'
import Hero from './components/Hero'
import TheStory from './components/sections/TheStory'
import PortfolioEcosystem from './components/sections/PortfolioEcosystem'
import BehindTheEdits from './components/sections/BehindTheEdits'
import ClientImpact from './components/sections/ClientImpact'
import NextChapter from './components/sections/NextChapter'
import Pricing from './components/sections/Pricing'
import VideoPackages from './components/sections/VideoPackages'
import FAQ from './components/sections/FAQ'
import Contact from './components/Contact'
import Footer from './components/Footer'
import CustomCursor from './components/CustomCursor'
import FloatingWhatsApp from './components/FloatingWhatsApp'

export default function App() {
  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('visible')
          observer.unobserve(e.target)
        }
      })
    }, { threshold: 0.12 })
    
    document.querySelectorAll('.fade-up').forEach(el => observer.observe(el))

    const cleanCurrentLocation = () => {
      const url = new URL(window.location.href)
      url.hash = ''
      url.searchParams.delete('section')
      window.history.replaceState(window.history.state, '', `${url.pathname}${url.search}`)
    }

    const handleSectionLink = (event) => {
      const anchor = event.target instanceof Element ? event.target.closest('a[data-scroll-target]') : null
      if (!anchor) return
      const target = document.getElementById(anchor.dataset.scrollTarget)
      if (!target) return

      event.preventDefault()
      const navHeight = document.getElementById('navbar')?.getBoundingClientRect().height || 0
      const top = Math.max(0, target.getBoundingClientRect().top + window.scrollY - navHeight)
      window.scrollTo({ top, behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth' })
      cleanCurrentLocation()
    }

    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      const sectionId = anchor.getAttribute('href')?.slice(1)
      if (!sectionId || !document.getElementById(sectionId)) return
      anchor.dataset.scrollTarget = sectionId
      const linkUrl = new URL(window.location.href)
      linkUrl.hash = ''
      linkUrl.searchParams.set('section', sectionId)
      anchor.setAttribute('href', `${linkUrl.pathname}${linkUrl.search}`)
    })

    document.addEventListener('click', handleSectionLink)

    const locationUrl = new URL(window.location.href)
    const initialSection = locationUrl.searchParams.get('section') || locationUrl.hash.slice(1)
    if (initialSection) {
      const target = document.getElementById(initialSection)
      if (target) {
        const navHeight = document.getElementById('navbar')?.getBoundingClientRect().height || 0
        const top = Math.max(0, target.getBoundingClientRect().top + window.scrollY - navHeight)
        window.scrollTo({ top, behavior: 'auto' })
        cleanCurrentLocation()
      }
    }
    
    return () => {
      observer.disconnect()
      document.removeEventListener('click', handleSectionLink)
    }
  }, [])

  return (
    <>
      <CustomCursor />
      <Nav />
      <main id="main-content">
      <Hero />
      <TheStory />
      <PortfolioEcosystem />
      <BehindTheEdits />
      <ClientImpact />
      <NextChapter />
      <Pricing />
      <VideoPackages />
      <div className="faq-contact-pair">
        <FAQ />
        <Contact />
      </div>
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  )
}
