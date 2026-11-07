import { useState } from 'react'
import '../../styles/sections/faq.css'

const faqs = [
  {
    question: "What type of videos do you edit?",
    answer: "We create high-quality edits tailored to your brand and audience — including short-form content, cinematic reels, YouTube videos, ads, podcasts, brand promos, social media content, and creative storytelling edits."
  },
  {
    question: "How can I send my footage?",
    answer: "You can share files through Google Drive, Dropbox, WeTransfer, or any cloud storage platform. Once we begin, we'll guide you through the process smoothly."
  },
  {
    question: "Do you offer revisions?",
    answer: "Yes. Revisions are included to ensure the final video matches your vision and brand style. Revision limits depend on the selected package."
  },
  {
    question: "Can you match my brand style?",
    answer: "Absolutely. We carefully match your colors, fonts, captions, transitions, pacing, and editing style to keep your content professional, recognizable, and consistent across all platforms."
  },
  {
    question: "Do you work on monthly retainers or one-time projects?",
    answer: "We offer both. Whether you need a single project edited or ongoing monthly content support, we have flexible packages for creators, businesses, agencies, and personal brands."
  },
  {
    question: "How long does delivery take?",
    answer: "Turnaround time depends on the project size and complexity, but we always aim for fast, high-quality delivery without compromising the final result."
  },
  {
    question: "Can you help with content ideas and strategy too?",
    answer: "Yes. Along with editing, we can help improve hooks, pacing, captions, storytelling, and content structure to make your videos more engaging and platform-friendly."
  }
]

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState(null)

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index)
  }

  return (
    <section className="faq" id="faq">
      <div className="faq-container">
        {/* Header */}
        <div className="faq-header fade-up">
          <h2 className="faq-title">
            FREQUENTLY ASKED
            <span className="faq-highlight"> QUESTIONS</span>
          </h2>
          <p className="faq-subtitle">
          <b> Got questions?</b> Explore the <b>FAQ</b> to learn more about the creative process, pricing, revisions, delivery timelines, and content strategy.
          </p>
          <div className="faq-divider"></div>
        </div>

        {/* FAQ Items */}
        <div className="faq-items">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`faq-item fade-up ${activeIndex === index ? 'active' : ''}`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <button
                className="faq-question"
                onClick={() => toggleFAQ(index)}
                aria-expanded={activeIndex === index}
                aria-controls={`faq-answer-${index}`}
              >
                <span className="faq-number">{String(index + 1).padStart(2, '0')}</span>
                <span className="faq-question-text">{faq.question}</span>
                <span className={`faq-icon ${activeIndex === index ? 'open' : ''}`}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polyline points="6 9 12 15 18 9"></polyline>
                  </svg>
                </span>
              </button>

              <div id={`faq-answer-${index}`} aria-hidden={activeIndex !== index} className={`faq-answer ${activeIndex === index ? 'show' : ''}`}>
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>

        {/* WhatsApp contact CTA */}
        <div className="faq-cta faq-whatsapp-cta fade-up" style={{ animationDelay: '0.7s' }}>
          <a href="https://wa.me/8801744641685" className="faq-whatsapp-button" target="_blank" rel="noreferrer">
            <svg aria-hidden="true" viewBox="0 0 24 24" fill="none">
              <path d="M20.2 11.7a8.15 8.15 0 0 1-12.05 7.16L4 20l1.18-4.02A8.15 8.15 0 1 1 20.2 11.7Z" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M8.7 8.15c.2-.45.42-.46.65-.47h.55c.18 0 .36.06.46.31l.75 1.8c.09.21.07.38-.07.56l-.57.69c-.15.17-.17.32-.05.52.44.73 1.08 1.36 1.82 1.8.2.12.35.1.52-.06l.7-.58c.17-.14.34-.16.55-.07l1.8.75c.25.1.31.28.31.46v.55c-.01.23-.02.45-.47.65-.45.2-1.31.46-2.4.08-1.1-.38-2.55-1.3-3.73-2.48-1.18-1.18-2.1-2.63-2.48-3.73-.38-1.09-.12-1.95.08-2.4Z" fill="currentColor" />
            </svg>
            <span>Chat on WhatsApp</span>
          </a>
          <p className="faq-response-time"><span aria-hidden="true" />Usually replies within <strong>6–12 hours</strong></p>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="faq-decoration faq-decoration-1"></div>
      <div className="faq-decoration faq-decoration-2"></div>
      <div className="faq-decoration faq-decoration-3"></div>
    </section>
  )
}
