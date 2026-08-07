import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const timeline = [
  { period: '2024 — Present', title: 'Front-end Developer', org: 'Independent / Freelance', detail: 'Building production React interfaces with a focus on motion, accessibility and component-driven architecture.' },
  { period: '2023 — 2024', title: 'UI Engineer', org: 'Project Collaborations', detail: 'Shipped responsive marketing dashboards and design-system components for early-stage product teams.' },
  { period: '2022 — 2024', title: 'AI Student', org: 'Self-directed study', detail: 'Exploring machine-learning fundamentals to combine intelligent behaviour with thoughtful front-end work.' },
];

export default function Experience() {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current; if (!el) return;
    const ctx = gsap.context(() => {
      gsap.from('.timeline-line', { scaleY: 0, transformOrigin: 'top', ease: 'none', scrollTrigger: { trigger: '.timeline', start: 'top 70%', end: 'bottom 80%', scrub: 0.6 } });
      gsap.utils.toArray('.timeline-item').forEach((item) => {
        gsap.from(item, { x: -30, opacity: 0, duration: 0.8, ease: 'power3.out', scrollTrigger: { trigger: item, start: 'top 85%' } });
      });
    }, el);
    return () => ctx.revert();
  }, []);
  return <section id="experience" className="experience" ref={ref}><div className="section-head"><span className="section-index">04 — JOURNEY</span><h2>Experience</h2></div><div className="timeline"><div className="timeline-line" />{timeline.map((entry) => <div key={entry.title} className="timeline-item"><div className="timeline-node" /><span className="timeline-period">{entry.period}</span><h3>{entry.title}</h3><small>{entry.org}</small><p>{entry.detail}</p></div>)}</div></section>;
}
