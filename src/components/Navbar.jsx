import { Menu, Moon, Sun, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import { useTheme } from '../context/ThemeContext';
import { scrollToId } from '../lib/utils';

const links = [['about', 'About'], ['work', 'Work'], ['experience', 'Experience'], ['resume', 'CV'], ['contact', 'Contact']];
export default function Navbar() {
  const { theme, toggleTheme } = useTheme(); const [open, setOpen] = useState(false); const [active, setActive] = useState(''); const [scrolled, setScrolled] = useState(false);
  const navigate = (id) => { scrollToId(id); setOpen(false); };
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    const sections = links.map(([id]) => document.getElementById(id)).filter(Boolean);
    const observer = new IntersectionObserver((entries) => { entries.forEach((entry) => { if (entry.isIntersecting) setActive(entry.target.id); }); }, { rootMargin: '-40% 0px -55% 0px' });
    sections.forEach((section) => observer.observe(section));
    onScroll();
    return () => { window.removeEventListener('scroll', onScroll); observer.disconnect(); };
  }, []);
  return <header className={scrolled ? 'navbar scrolled' : 'navbar'}><div className="nav-inner"><button className="logo" onClick={() => navigate('top')}><span>ZH</span><small>PORTFOLIO / 2025</small></button><nav className={open ? 'nav-links open' : 'nav-links'}>{links.map(([id, label], index) => <button key={id} className={active === id ? 'active' : ''} onClick={() => navigate(id)}><em>0{index + 1}</em>{label}</button>)}</nav><div className="nav-tools"><button className="theme-toggle" aria-label="Toggle color theme" onClick={toggleTheme}>{theme === 'dark' ? <Sun size={17} /> : <Moon size={17} />}</button><button className="menu-toggle" aria-label="Toggle menu" onClick={() => setOpen(!open)}>{open ? <X size={20} /> : <Menu size={20} />}</button></div></div></header>;
}
