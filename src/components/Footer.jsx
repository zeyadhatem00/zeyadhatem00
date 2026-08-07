import { ArrowUp } from 'lucide-react';
import { scrollToId } from '../lib/utils';

export default function Footer() {
  return <footer className="footer"><div className="footer-inner"><span>Built with React + GSAP</span><button className="back-to-top" onClick={() => scrollToId('top')}><ArrowUp size={16} /> Back to top</button></div></footer>;
}
