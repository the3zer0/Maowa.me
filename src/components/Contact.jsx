import { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'

const questions = [
  { key: 'service', title: 'What can I help you create?', hint: 'Select one or more services that fit your project.', options: ['YouTube video editing', 'Short-form videos (Reels / Shorts / TikTok)', 'Podcast editing', 'Commercial / brand video', 'Motion graphics', 'Content strategy', 'Something else'] },
  { key: 'platform', title: 'Where will your video live?', hint: 'Select all platforms that apply.', options: ['YouTube', 'Instagram', 'TikTok', 'Facebook', 'LinkedIn', 'Other'] },
  { key: 'duration', title: 'How much content do you need?', hint: 'A rough runtime or number of videos is perfect.', options: ['Under 1 minute', '1–5 minutes', '5–10 minutes', '10+ minutes', 'Ongoing / monthly', 'Not sure yet'] },
  { key: 'style', title: 'What should the edit feel like?', hint: 'Pick a direction, then add any references or details below.', options: ['Cinematic', 'Fast-paced & energetic', 'Clean & minimal', 'Podcast / conversational', 'Tell me what works best'] },
  { key: 'timeline', title: 'When do you need the first delivery?', hint: 'This helps me plan the right timeline.', options: ['Within 3 days', 'Within a week', 'Within 2 weeks', 'Flexible', 'Let’s discuss'] },
]

const initialData = { name: '', user_email: '', whatsapp: '', service: [], platform: [], duration: '', style: '', timeline: '', message: '' }

export default function Contact() {
  const [formData, setFormData] = useState(initialData)
  const [step, setStep] = useState(0)
  const [submitStatus, setSubmitStatus] = useState(null)
  const form = useRef(null)
  const question = questions[step]

  const update = (key, value) => setFormData((previous) => ({ ...previous, [key]: value }))
  const toggleMultiChoice = (key, option) => setFormData((previous) => ({
    ...previous,
    [key]: previous[key].includes(option)
      ? previous[key].filter((item) => item !== option)
      : [...previous[key], option],
  }))

  const handleSubmit = (event) => {
    event.preventDefault()
    if (submitStatus === 'sending') return
    setSubmitStatus('sending')
    emailjs.sendForm('service_7lnpz6s', 'template_s151ndh', form.current, 'wCh7FXXSwtdAl1S_l')
      .then(() => { setSubmitStatus('sent'); setFormData(initialData); setStep(0); form.current?.reset() })
      .catch(() => setSubmitStatus('failed'))
  }

  return (
    <section className="contact" id="contact">
      <div className="contact-header">
        <p className="contact-kicker">START A PROJECT</p>
        <h2 className="contact-title">Let’s plan your <span className="contact-highlight">project.</span></h2>
        <p className="contact-subtitle">Share a few details about the video you have in mind.</p>
      </div>
      <div className="contact-layout contact-layout--single">
        <form ref={form} className="contact-form contact-brief" onSubmit={handleSubmit}>
          {questions.map(({ key }) => <input key={key} type="hidden" name={key} value={Array.isArray(formData[key]) ? formData[key].join(', ') : formData[key]} />)}
          <input type="hidden" name="message" value={formData.message} />
          {step < questions.length ? (
            <>
              <div className="brief-topline"><span>PROJECT BRIEF</span><span>0{step + 1} / 0{questions.length + 1}</span></div>
              <div className="brief-progress"><span style={{ width: `${((step + 1) / (questions.length + 1)) * 100}%` }} /></div>
              <div className="brief-question">
                <p className="brief-step">QUESTION 0{step + 1}</p>
                <h3>{question.title}</h3>
                <p>{question.hint}</p>
              </div>
              <div className="brief-options">
                {question.options.map((option) => {
                  const multiple = question.key === 'platform' || question.key === 'service'
                  const selected = multiple ? formData[question.key].includes(option) : formData[question.key] === option
                  return <button key={option} type="button" aria-pressed={selected} className={`brief-option ${selected ? 'selected' : ''}`} onClick={() => multiple ? toggleMultiChoice(question.key, option) : update(question.key, option)}><span>{option}</span><span className="brief-option-mark">{selected ? '✓' : ''}</span></button>
                })}
              </div>
              {step === 3 && <textarea className="form-textarea brief-notes" placeholder="Any references, goals, or extra details? (optional)" value={formData.message} onChange={(event) => update('message', event.target.value)} />}
              <div className="brief-actions">
                {step > 0 ? <button type="button" className="brief-back" onClick={() => setStep(step - 1)}>← Back</button> : <span className="brief-assurance">No long brief needed · Usually replies within 24 hours</span>}
                <button type="button" className="brief-continue" disabled={Array.isArray(formData[question.key]) ? formData[question.key].length === 0 : !formData[question.key]} onClick={() => setStep(step + 1)}>Continue</button>
              </div>
            </>
          ) : (
            <>
              <div className="brief-topline"><span>YOUR DETAILS</span><span>06 / 06</span></div>
              <div className="brief-progress"><span style={{ width: '100%' }} /></div>
              <div className="brief-question"><p className="brief-step">LAST STEP</p><h3>Where can I reach you?</h3><p>Share your details and I’ll get back to you with next steps.</p></div>
              <div className="brief-fields">
                <input className="form-input" name="name" placeholder="Your name" required value={formData.name} onChange={(event) => update('name', event.target.value)} />
                <input className="form-input" name="user_email" type="email" placeholder="Email address" required value={formData.user_email} onChange={(event) => update('user_email', event.target.value)} />
                <input className="form-input" name="whatsapp" placeholder="WhatsApp (optional)" value={formData.whatsapp} onChange={(event) => update('whatsapp', event.target.value)} />
              </div>
              <div className="brief-actions">
                <button type="button" className="brief-back" onClick={() => setStep(step - 1)}>← Back</button>
                <button type="submit" className="brief-continue" disabled={submitStatus === 'sending'}>{submitStatus === 'sending' ? 'Sending…' : submitStatus === 'sent' ? 'Sent ✓' : submitStatus === 'failed' ? 'Try again' : 'Send project brief'}</button>
              </div>
              <p className="brief-privacy">Your project details are only used to reply to your inquiry.</p>
            </>
          )}
        </form>

      </div>
    </section>
  )
}
