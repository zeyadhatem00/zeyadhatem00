import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const groups = [
  { name: 'Frontend', items: ['React', 'TypeScript', 'JavaScript', 'Tailwind CSS', 'HTML5', 'CSS3', 'React Router'] },
  { name: 'Tooling', items: ['Vite', 'NPM', 'Vercel', 'GSAP'] },
  { name: 'Foundations', items: ['Bootstrap', 'UI/UX', 'Animations', 'Responsive Design'] },
];

export default function Skills() {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current; if (!el) return;
    const ctx = gsap.context(() => {
      gsap.from('.skill-group', { y: 30, opacity: 0, stagger: 0.12, duration: 0.7, ease: 'power2.out', scrollTrigger: { trigger: el, start: 'top 75%' } });
      gsap.from('.skill-chip', { scale: 0.85, opacity: 0, stagger: 0.04, duration: 0.5, ease: 'back.out(1.6)', scrollTrigger: { trigger: '.skills-grid', start: 'top 80%' } });
    }, el);
    return () => ctx.revert();
  }, []);
  return <section id="skills" className="skills" ref={ref}><div className="section-head"><span className="section-index">02 — CAPABILITIES</span><h2>Skills</h2></div><div className="skills-grid">{groups.map((group) => <div key={group.name} className="skill-group"><h3>{group.name}</h3><div className="chip-row">{group.items.map((item) => <span key={item} className="skill-chip">{item}</span>)}</div></div>)}</div></section>;
}
