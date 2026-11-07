import { useState } from 'react'
import '../../styles/sections/video-packages.css'

const individualPlans = [
  { name: 'Starter Reel', price: '1,699', billing: 'Per video', detail: 'Up to 60 seconds, basic captions, subtitles, color and audio correction. Delivery: 2–3 business days.', features: ['Up to 60 seconds', 'Basic captions & subtitles', 'Color & audio correction', '2–3 business day delivery'] },
  { name: 'Creator Pro', price: '2,599', billing: 'Per video', detail: 'Hook-focused editing, animated captions, text callouts, dynamic zooms, and refined pacing. Delivery: 3–4 business days.', features: ['Hook-focused editing', 'Animated captions & callouts', 'Dynamic zooms', '3–4 business day delivery'], featured: true },
  { name: 'Signature Edit', price: '3,999', billing: 'Per video', detail: 'Advanced subtitle styling, custom motion graphics within scope, and enhanced visual storytelling. Delivery: 4–5 business days.', features: ['Advanced subtitle styling', 'Custom motion graphics', 'Enhanced visual storytelling', '4–5 business day delivery'] },
]

const monthlyPlans = [
  { name: 'Consistency', price: 'BDT 8,900', billing: '8 reels / month', detail: 'Professional short-form editing to keep your channels active and consistent.', features: ['Professional trimming', 'Subtitles & basic captions', 'Color & audio enhancement', 'Organized monthly delivery'] },
  { name: 'Growth', price: 'BDT 16,900', billing: '16 reels / month', detail: 'A stronger publishing rhythm with more engaging, hook-focused edits.', features: ['Everything in Consistency', 'Hook-focused editing', 'Dynamic captions & callouts', 'Motion graphics', 'Priority scheduling'], featured: true },
  { name: 'Brand Partner', price: 'BDT 29,900', billing: '24 reels / month', detail: 'Flexible editing support shaped around your brand and campaigns.', features: ['24 reels each month', 'Brand-specific caption styling', 'More visual customization', 'Campaign flexibility', 'Creative coordination'] },
]

const whatsapp = '8801744641685'
const planHref = (name) => `https://wa.me/${whatsapp}?text=${encodeURIComponent(`Hi, I’m interested in the ${name} video editing package.`)}`

function PlanTabs({ plans, activeIndex, setActiveIndex, label }) {
  return <div className="video-package-tabs" role="tablist" aria-label={label}>
    {plans.map((plan, index) => <button key={plan.name || plan.tier} type="button" role="tab" aria-selected={activeIndex === index} className={activeIndex === index ? 'active' : ''} onClick={() => setActiveIndex(index)}>{plan.name || plan.tier}{(plan.featured || plan.badge) && <small>{plan.featured ? 'POPULAR' : 'POPULAR'}</small>}</button>)}
  </div>
}

export default function VideoPackages() {
  const [activeIndividual, setActiveIndividual] = useState(1)
  const [activeMonthly, setActiveMonthly] = useState(1)

  const renderPlans = (plans, activeIndex, group) => <>
    <PlanTabs plans={plans} activeIndex={activeIndex} setActiveIndex={group === 'individual' ? setActiveIndividual : setActiveMonthly} label={group === 'individual' ? 'Individual video editing packages' : 'Monthly short-form subscriptions'} />
    <div className={`pricing-grid video-pricing-grid ${group}-pricing-grid`}>
      {plans.map((plan, index) => <article className={`pricing-card ${plan.featured ? 'popular' : ''} ${activeIndex === index ? 'mobile-active' : ''}`} key={plan.name}>
        {plan.featured && <div className="pricing-badge"><span>MOST POPULAR</span></div>}
        <div className="pricing-card-top">
          <div className="pricing-amount"><span className="pricing-currency">BDT</span><span className="pricing-value">{plan.price.replace('BDT ', '')}</span><span className="pricing-period">/{group === 'individual' ? 'video' : 'month'}</span></div>
          <h3 className="pricing-card-title">{plan.name}</h3>
          <p className="pricing-card-description">{plan.billing}</p>
          <p className="pricing-card-copy">{plan.detail}</p>
        </div>
        <div className="pricing-features">
          {plan.features.map((feature) => <div className="pricing-feature" key={feature}><span className="pricing-feature-label">{feature}</span><span className="pricing-feature-value is-check">✓</span></div>)}
        </div>
        <div className="pricing-card-bottom"><a href={planHref(plan.name)} target="_blank" rel="noreferrer" className="pricing-button">Choose {plan.name}</a></div>
      </article>)}
    </div>
  </>

  return (
    <section className="video-packages" id="video-packages">
      <div className="video-packages-inner">
        <header className="video-packages-header">
          <p>SHORT-FORM STUDIO</p>
          <h2>Make every frame <span>count.</span></h2>
          <p className="video-packages-description">Consistent short-form edits, planned around your publishing rhythm. Music-free editing using your footage.</p>
        </header>

        <div className="video-package-group">
          <div className="monthly-heading"><div><p>INDIVIDUAL EDITS</p><h3>Video editing packages</h3></div><span>One-off edits, shaped around the story in each video.</span></div>
          {renderPlans(individualPlans, activeIndividual, 'individual')}
        </div>

        <div className="video-package-group monthly-group">
          <div className="monthly-heading"><div><p>MONTHLY CONTENT</p><h3>Monthly short-form subscriptions</h3></div><span>Consistent edits, planned around your publishing rhythm.</span></div>
          {renderPlans(monthlyPlans, activeMonthly, 'monthly')}
        </div>
      </div>
    </section>
  )
}
