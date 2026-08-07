import { useEffect, useRef, useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import { Download, Eye, FileText, X } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import 'react-pdf/dist/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';

pdfjs.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.mjs`;
gsap.registerPlugin(ScrollTrigger);

export default function Resume() {
  const ref = useRef(null); const [open, setOpen] = useState(false); const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    const el = ref.current; if (!el) return;
    const ctx = gsap.context(() => { gsap.from('.resume-card > *', { y: 24, opacity: 0, stagger: 0.1, duration: 0.7, ease: 'power3.out', scrollTrigger: { trigger: el, start: 'top 75%' } }); }, el);
    return () => ctx.revert();
  }, []);
  return <section id="resume" className="resume" ref={ref}><div className="section-head"><span className="section-index">05 — CREDENTIALS</span><h2>Resume</h2></div><div className="resume-card"><div className="resume-preview">{!loaded && <div className="resume-skeleton"><FileText size={40} /><span>Loading preview…</span></div>}<Document file="/Zeyad_Hatem_Atteya_CV.pdf" loading="" onLoad={() => setLoaded(true)}><Page pageNumber={1} width={260} renderTextLayer={false} renderAnnotationLayer={false} /></Document></div><div className="resume-actions"><h3>Zeyad Hatem Atteya</h3><p>Front-end developer focused on React, UI engineering and intelligent interfaces. Download the full CV or expand the inline viewer below.</p><div className="resume-buttons"><a href="/Zeyad_Hatem_Atteya_CV.pdf" download="Zeyad_Hatem_Atteya_CV.pdf" className="btn-primary"><Download size={16} /> Download CV</a><button className="btn-ghost" onClick={() => setOpen(!open)}>{open ? <><X size={16} /> Close viewer</> : <><Eye size={16} /> View full CV</>}</button></div>{open && <div className="resume-viewer"><iframe src="/Zeyad_Hatem_Atteya_CV.pdf" title="Full CV" /></div>}</div></div></section>;
}
