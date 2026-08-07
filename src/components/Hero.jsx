import { useEffect, useRef } from 'react';
import { ArrowDown, FileText } from 'lucide-react';
import { gsap } from 'gsap';
import { TextPlugin } from 'gsap/TextPlugin';
import { scrollToId } from '../lib/utils';

gsap.registerPlugin(TextPlugin);

const roles = ['Front-end Developer', 'React Engineer', 'UI/UX Enthusiast', 'AI Student'];

export default function Hero({ profile }) {
  const roleRef = useRef(null);
  useEffect(() => {
    const el = roleRef.current; if (!el) return;
    const tl = gsap.timeline({ repeat: -1 });
    roles.forEach((role) => {
      tl.to(el, { duration: 1.4, text: role, ease: 'none' }).to({}, { duration: 1.6 }).to(el, { duration: 0.6, text: '', ease: 'none' });
    });
    return () => tl.kill();
  }, []);
  return <section id="top" className="hero"><div className="hero-grid" /><div className="hero-glow" /><div className="hero-inner"><span className="kicker hero-kicker"><span className="pulse" /> AVAILABLE FOR FREELANCE — {new Date().getFullYear()}</span><h1 className="hero-name" data-text="Zeyad Hatem">Zeyad Hatem</h1><p className="hero-role" ref={roleRef}>Front-end Developer</p><p className="hero-tagline">I build fast, accessible web interfaces with React — currently studying AI to bring intelligent behaviour into the products I design.</p><div className="hero-cta"><button onClick={() => scrollToId('work')}>View my work <ArrowDown size={16} /></button><a href="/Zeyad_Hatem_Atteya_CV.pdf" target="_blank" rel="noreferrer">Download CV <FileText size={16} /></a></div></div><button className="scroll-indicator" aria-label="Scroll down" onClick={() => scrollToId('about')}><span /><span /></button></section>;
}
