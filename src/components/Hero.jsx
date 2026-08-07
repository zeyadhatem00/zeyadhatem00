import { ArrowDown, FileText } from 'lucide-react';
import { scrollToId } from '../lib/utils';

export default function Hero({ profile }) {
  return <section id="top" className="hero"><div className="hero-grid" /><div className="hero-glow" /><div className="hero-inner"><span className="kicker"><span className="pulse" /> AVAILABLE FOR FREELANCE — {new Date().getFullYear()}</span><h1 className="hero-name" data-text="Zeyad Hatem">Zeyad Hatem</h1><p className="hero-role" id="typewriter">Front-end Developer</p><p className="hero-tagline">I build fast, accessible web interfaces with React — currently studying AI to bring intelligent behaviour into the products I design.</p><div className="hero-cta"><button onClick={() => scrollToId('work')}>View my work <ArrowDown size={16} /></button><a href="/Zeyad_Hatem_Atteya_CV.pdf" target="_blank" rel="noreferrer">Download CV <FileText size={16} /></a></div></div><button className="scroll-indicator" aria-label="Scroll down" onClick={() => scrollToId('about')}><span /><span /></button></section>;
}
