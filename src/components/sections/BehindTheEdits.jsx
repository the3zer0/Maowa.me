import { useRef } from 'react';
import { motion } from 'framer-motion';
import { useStaggerReveal } from '../../hooks/useAnimations';
import '../../styles/sections/behind-the-edits.css';

const steps = [
  {
    number: '01',
    title: 'Concept & Vision',
    description: 'Defining the creative direction, audience psychology, and visual identity behind every project.',
    icon: 'concept',
  },
  {
    number: '02',
    title: 'Storyboarding',
    description: 'Structuring scenes, pacing, and visual flow to create engaging viewer experiences.',
    icon: 'storyboard',
  },
  {
    number: '03',
    title: 'Production',
    description: 'Bringing ideas to life through precise execution, creative direction, and high-quality content production.',
    icon: 'production',
  },
  {
    number: '04',
    title: 'Color Grading',
    description: 'Enhancing mood and visual consistency through cinematic color treatment and finishing.',
    icon: 'color',
  },
  {
    number: '05',
    title: 'Motion Design',
    description: 'Adding motion graphics, transitions, and visual elements that elevate engagement.',
    icon: 'motion',
  },
  {
    number: '06',
    title: 'Final Delivery',
    description: 'Optimized exports and platform-ready delivery designed for maximum performance.',
    icon: 'delivery',
  },
];

const stepIcons = {
  concept: <><circle cx="12" cy="12" r="7.5" /><circle cx="12" cy="12" r="3" /><path d="M12 1.8v2M12 20.2v2M1.8 12h2m16.4 0h2M4.8 4.8l1.4 1.4m11.6 11.6 1.4 1.4m0-14.4-1.4 1.4M6.2 17.8l-1.4 1.4" /></>,
  storyboard: <><rect x="3.5" y="4" width="17" height="16" rx="2" /><path d="M8 4v16M3.5 9h4.5m-4.5 6h4.5m4-7h5m-5 4h5m-5 4h3" /></>,
  production: <><rect x="3" y="7" width="14" height="12" rx="2" /><path d="m17 11 4-2v8l-4-2M7 7l1.5-3h4L14 7" /></>,
  color: <><circle cx="12" cy="12" r="9" /><path d="M12 3a9 9 0 0 1 8.4 5.8L12 12V3Z" /><circle cx="8" cy="9" r=".8" /><circle cx="8" cy="14" r=".8" /><circle cx="12" cy="17" r=".8" /></>,
  motion: <><path d="M3 17c3-8 6-10 9-7s5 3 9-4" /><path d="m16 6 5 0-1 5" /><circle cx="4" cy="17" r="1.5" /></>,
  delivery: <><path d="M4 5.5A2.5 2.5 0 0 1 6.5 3H20v16H6.5A2.5 2.5 0 0 0 4 21V5.5Z" /><path d="M4 6v14m5-12h7m-7 4h7m-7 4h4" /></>,
}

export default function BehindTheEdits() {
  const containerRef = useRef(null);

  useStaggerReveal(containerRef);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: 'easeOut',
      },
    },
  };

  return (
    <section className="behind-the-edits" ref={containerRef}>
      <div className="container">
        {/* Section Header */}
        <motion.div
          className="edits-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <p className="edits-eyebrow">THE CRAFT, FRAME BY FRAME</p>
          <h2 className="edits-title">Behind the Edits</h2>
          <p className="edits-subtitle">
           From strategy to final delivery, every edit is crafted to capture attention, elevate storytelling, and maximize audience retention.
          </p>
        </motion.div>

        {/* Timeline Steps */}
        <motion.div
          className="steps-timeline"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {steps.map((step, idx) => (
            <motion.div
              key={step.number}
              className="step-item"
              variants={itemVariants}
              whileHover={{ y: -4 }}
            >              <div className="step-header">
                <div className="step-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">{stepIcons[step.icon]}</svg>
                </div>
                <div className="step-heading-copy">
                  <div className="step-number">{step.number} <span> / PROCESS</span></div>
                  <h3 className="step-title">{step.title}</h3>
                </div>
              </div>

              <p className="step-description">{step.description}</p>

              {idx < steps.length - 1 && (
                <div className="step-connector">
                  <motion.div
                    className="connector-line"
                    initial={{ scaleY: 0 }}
                    whileInView={{ scaleY: 1 }}
                    transition={{ duration: 0.8, delay: idx * 0.1 }}
                    viewport={{ once: true }}
                  />
                </div>
              )}
            </motion.div>
          ))}
        </motion.div>        {/* Bottom CTA */}
        <motion.div
          className="process-cta"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <p>Ready to turn your content into something people actually remember?</p>
          <a href="#pricing" className="btn btn-primary">LET’S BUILD SOMETHING</a>
        </motion.div>
      </div>
    </section>
  );
}
