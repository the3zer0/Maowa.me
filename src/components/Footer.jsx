import { useEffect, useRef } from 'react'
import { asset } from '../utils/asset'

const socials = [
  { label: 'Instagram', href: 'https://www.instagram.com/maowa.me', icon: 'instagram.png' },
  { label: 'YouTube', href: 'https://www.youtube.com/@maowa2.0', icon: 'youtube.png' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/maowame', icon: 'linkedin.png' },
]

export default function Footer() {
  const footerRef = useRef(null)

  useEffect(() => {
    const footer = footerRef.current
    if (!footer) return undefined
    const observer = new IntersectionObserver(([entry]) => footer.classList.toggle('is-visible', entry.isIntersecting), { threshold: 0.08 })
    observer.observe(footer)
    return () => observer.disconnect()
  }, [])

  return (
    <footer ref={footerRef} className="maowa-footer">
      <div className="maowa-footer-inner">
        <div className="maowa-footer-main">
          <h2>LET’S BUILD<br />SOMETHING<br /><span>EXCEPTIONAL</span></h2>
          <div className="maowa-footer-contact">
            <p>CONTACT</p>
            <a className="maowa-footer-email" href="mailto:jannatulmaowa.me@gmail.com">jannatulmaowa.me@gmail.com</a>
            <div className="maowa-footer-socials">
              {socials.map(({ label, href, icon }) => <a key={label} href={href} target="_blank" rel="noreferrer" aria-label={label}><img src={asset(icon)} alt="" />{label}</a>)}
              <a className="maowa-footer-video-link" href="https://wa.me/8801744641685" target="_blank" rel="noopener noreferrer"><img src={asset('whatsapp.svg')} alt="" /> WhatsApp</a>
            </div>
          </div>
        </div>

        <div className="maowa-footer-watermark" aria-hidden="true">MAOWA.ME</div>

        <div className="maowa-footer-bottom">
          <div className="maowa-footer-signature">
            <a href="#home" className="maowa-footer-logo">MAO<span>WA</span>.ME</a>
            <small>Stories in every frame.</small>
            <span className="maowa-footer-region">DHAKA · WORLDWIDE</span>
          </div>
          <div className="maowa-footer-meta">
            <a href="https://the3zer0.github.io/Webmotion/" target="_blank" rel="noreferrer" className="maowa-footer-credit">BUILT BY <strong>WEBMOTION</strong></a>
            <p>© 2026 MAOWA.ME · JANNATUL MAOWA RUNA</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
