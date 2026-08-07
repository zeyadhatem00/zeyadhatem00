import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function About({ profile, readme }) {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current; if (!el) return;
    const ctx = gsap.context(() => {
      gsap.from('.about-bio > *', { y: 24, opacity: 0, stagger: 0.12, duration: 0.8, ease: 'power3.out', scrollTrigger: { trigger: el, start: 'top 75%' } });
      gsap.from('.stat-card', { y: 30, opacity: 0, stagger: 0.15, duration: 0.7, ease: 'power2.out', scrollTrigger: { trigger: '.about-stats', start: 'top 85%' } });
      gsap.utils.toArray('.stat-num').forEach((num) => {
        const end = Number(num.dataset.value); const obj = { val: 0 };
        ScrollTrigger.create({ trigger: num, start: 'top 90%', once: true, onEnter: () => gsap.to(obj, { val: end, duration: 1.6, ease: 'power2.out', onUpdate: () => { num.textContent = Math.round(obj.val); } }) });
      });
    }, el);
    return () => ctx.revert();
  }, [readme]);
  const bio = readme.split('\n').filter((line) => line && !line.includes('img.shields.io') && !line.startsWith('<!--') && !line.startsWith('![') && !line.startsWith('[![')).slice(0, 6);
  return <section id="about" className="about" ref={ref}><div className="section-head"><span className="section-index">01 — ABOUT</span><h2>Profile</h2></div><div className="about-grid"><div className="about-bio"><p className="lead">{profile?.bio || 'Front-end developer specialising in React, focused on clean interfaces and smooth, deliberate motion.'}</p>{bio.map((line, index) => <p key={index}>{line.replace(/[#*`>]/g, '').replace(/https?:\/\/\S+/g, '').trim()}</p>)}</div><aside className="about-portrait"><div className="portrait-frame">{profile?.avatar_url && <img src={profile.avatar_url} alt="Zeyad Hatem" />}<div className="portrait-meta"><span>{profile?.name || 'Zeyad Hatem'}</span><small>{profile?.location || 'Cairo, Egypt'}</small></div></div><div className="about-stats"><Stat label="Public repos" value={profile?.public_repos || 0} /><Stat label="Followers" value={profile?.followers || 0} /><Stat label="Years coding" value={4} /><Stat label="Stars earned" value={profile ? Math.max(2, Math.round((profile.public_repos || 1) / 3)) : 0} /></div></aside></div></section>;
}

function Stat({ label, value }) {
  return <div className="stat-card"><span className="stat-num" data-value={value}>0</span><small>{label}</small></div>;
}
