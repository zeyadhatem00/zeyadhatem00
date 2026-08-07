import { Menu, Moon, Sun, X } from 'lucide-react';
import { useState } from 'react';
import { useTheme } from '../context/ThemeContext';
import { scrollToId } from '../lib/utils';

const links = [['about', 'About'], ['work', 'Work'], ['experience', 'Experience'], ['resume', 'CV'], ['contact', 'Contact']];
export default function Navbar() {
  const { theme, toggleTheme } = useTheme(); const [open, setOpen] = useState(false);
  const navigate = (id) => { scrollToId(id); setOpen(false); };
  return <header className="navbar"><div className="nav-inner"><button className="logo" onClick={() => navigate('top')}><span>ZH</span><small>PORTFOLIO / 2025</small></button><nav className={open ? 'nav-links open' : 'nav-links'}>{links.map(([id, label], index) => <button key={id} onClick={() => navigate(id)}><em>0{index + 1}</em>{label}</button>)}</nav><div className="nav-tools"><button className="theme-toggle" aria-label="Toggle color theme" onClick={toggleTheme}>{theme === 'dark' ? <Sun size={17} /> : <Moon size={17} />}</button><button className="menu-toggle" aria-label="Toggle menu" onClick={() => setOpen(!open)}>{open ? <X size={20} /> : <Menu size={20} />}</button></div></div></header>;
}
