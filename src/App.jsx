import { useEffect, useRef } from 'react';
import Lenis from 'lenis';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Resume from './components/Resume';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { useGitHub } from './hooks/useGitHub';

gsap.registerPlugin(ScrollTrigger);

function Portfolio() {
  const { profile, repos, readme, loading } = useGitHub();
  const cursorRef = useRef(null);

  useEffect(() => {
    const lenis = new Lenis({ duration: 1.1, smoothWheel: true });
    lenis.on('scroll', ScrollTrigger.update);
    gsap.ticker.add((time) => lenis.raf(time * 1000));
    gsap.ticker.lagSmoothing(0);
    return () => { lenis.destroy(); gsap.ticker.remove(lenis.raf); };
  }, []);

  useEffect(() => {
    const nameEl = document.querySelector('.hero-name');
    if (nameEl && !nameEl.querySelector('.char')) {
      const text = nameEl.textContent;
      nameEl.innerHTML = text.split('').map((c) => c === ' ' ? '<span class="char space">&nbsp;</span>' : `<span class="char">${c}</span>`).join('');
    }
    const master = gsap.timeline({ defaults: { ease: 'power3.out' } });
    master.from('.nav-inner > *', { y: -20, opacity: 0, stagger: 0.1, duration: 0.6 }).from('.hero-kicker', { y: 20, opacity: 0, duration: 0.6 }, '-=0.2').from('.hero-name .char', { y: 40, opacity: 0, stagger: 0.04, duration: 0.6 }, '-=0.1').from('.hero-role', { opacity: 0, duration: 0.5 }, '+=0.1').from('.hero-tagline', { y: 20, opacity: 0, duration: 0.6 }).from('.hero-cta > *', { y: 20, opacity: 0, stagger: 0.12, duration: 0.5 }, '-=0.2').from('.scroll-indicator', { opacity: 0, duration: 0.5 });
    const glitch = gsap.timeline({ repeat: -1, repeatDelay: 4 });
    glitch.to('.hero-name', { x: 3, duration: 0.05 }).to('.hero-name', { x: -3, duration: 0.05 }).to('.hero-name', { x: 0, duration: 0.05 });
    return () => { master.kill(); glitch.kill(); };
  }, []);

  useEffect(() => {
    const cursor = cursorRef.current; if (!cursor) return;
    const move = (e) => gsap.to(cursor, { x: e.clientX, y: e.clientY, duration: 0.4, ease: 'power2.out' });
    const enter = () => gsap.to(cursor, { scale: 2.2, duration: 0.3 });
    const leave = () => gsap.to(cursor, { scale: 1, duration: 0.3 });
    window.addEventListener('mousemove', move);
    document.querySelectorAll('a, button, input, textarea').forEach((el) => { el.addEventListener('mouseenter', enter); el.addEventListener('mouseleave', leave); });
    return () => { window.removeEventListener('mousemove', move); };
  }, [loading, repos]);

  return <div className="app-root"><div className="cursor-glow" ref={cursorRef} /><div className="noise-overlay" /><Navbar /><main><Hero profile={profile} /><About profile={profile} readme={readme} /><Skills /><Projects repos={repos} loading={loading} /><Experience /><Resume /><Contact /></main><Footer /></div>;
}

export default function App() { return <ThemeProvider><Portfolio /></ThemeProvider>; }
