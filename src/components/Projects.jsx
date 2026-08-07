import { useEffect, useMemo, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ProjectCard from './ProjectCard';

gsap.registerPlugin(ScrollTrigger);

export default function Projects({ repos, loading }) {
  const ref = useRef(null); const [filter, setFilter] = useState('All');
  const languages = useMemo(() => ['All', ...new Set(repos.map((repo) => repo.language).filter(Boolean))], [repos]);
  const visible = useMemo(() => filter === 'All' ? repos : repos.filter((repo) => repo.language === filter), [repos, filter]);
  useEffect(() => {
    const el = ref.current; if (!el || loading) return;
    const ctx = gsap.context(() => {
      gsap.from('.reveal-card', { y: 40, opacity: 0, stagger: 0.1, duration: 0.7, ease: 'power3.out', scrollTrigger: { trigger: '.projects-grid', start: 'top 80%' } });
    }, el);
    return () => ctx.revert();
  }, [loading, filter]);
  return <section id="work" className="projects" ref={ref}><div className="section-head"><span className="section-index">03 — SELECTED WORK</span><h2>Projects</h2></div><div className="filter-bar">{languages.map((lang) => <button key={lang} className={lang === filter ? 'active' : ''} onClick={() => setFilter(lang)}>{lang}</button>)}</div><div className="projects-grid">{loading ? <p className="state-text">Loading repositories…</p> : visible.length === 0 ? <p className="state-text">No public repositories yet.</p> : visible.map((repo) => <ProjectCard key={repo.id} repo={repo} />)}</div></section>;
}
