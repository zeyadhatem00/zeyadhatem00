import { useEffect, useRef, useState } from 'react';
import { Mail, Send } from 'lucide-react';
import { FiGithub, FiLinkedin, FiInstagram } from 'react-icons/fi';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const socials = [
  { label: 'GitHub', icon: FiGithub, url: 'https://github.com/zeyadhatem00' },
  { label: 'LinkedIn', icon: FiLinkedin, url: 'https://www.linkedin.com/in/zeyad-hatem-569302390/' },
  { label: 'Instagram', icon: FiInstagram, url: 'https://www.instagram.com/zeyad_hatem15/' },
  { label: 'Email', icon: Mail, url: 'mailto:zeyadhatem0079@gmail.com' },
];

export default function Contact() {
  const ref = useRef(null); const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' }); const [sent, setSent] = useState(false); const [errors, setErrors] = useState({});
  useEffect(() => {
    const el = ref.current; if (!el) return;
    const ctx = gsap.context(() => { gsap.from('.contact-form > *', { y: 24, opacity: 0, stagger: 0.1, duration: 0.7, ease: 'power3.out', scrollTrigger: { trigger: el, start: 'top 75%' } }); gsap.from('.social-tile', { scale: 0.8, opacity: 0, stagger: 0.08, duration: 0.6, ease: 'back.out(1.6)', scrollTrigger: { trigger: '.contact-socials', start: 'top 85%' } }); }, el);
    return () => ctx.revert();
  }, []);
  const validate = () => {
    const next = {};
    if (!form.name.trim()) next.name = 'Required';
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(form.email)) next.email = 'Valid email required';
    if (!form.message.trim()) next.message = 'Required';
    setErrors(next); return Object.keys(next).length === 0;
  };
  const submit = (event) => { event.preventDefault(); if (!validate()) return; setSent(true); setForm({ name: '', email: '', subject: '', message: '' }); setTimeout(() => setSent(false), 4000); };
  const update = (key) => (event) => setForm((current) => ({ ...current, [key]: event.target.value }));
  return <section id="contact" className="contact" ref={ref}><div className="section-head"><span className="section-index">06 — GET IN TOUCH</span><h2>Contact</h2></div><div className="contact-grid"><form className="contact-form" onSubmit={submit}><div className="field-row"><div className="field"><label>Name</label><input value={form.name} onChange={update('name')} className={errors.name ? 'error' : ''} /><span>{errors.name}</span></div><div className="field"><label>Email</label><input value={form.email} onChange={update('email')} className={errors.email ? 'error' : ''} /><span>{errors.email}</span></div></div><div className="field"><label>Subject</label><input value={form.subject} onChange={update('subject')} /></div><div className="field"><label>Message</label><textarea rows="5" value={form.message} onChange={update('message')} className={errors.message ? 'error' : ''} /><span>{errors.message}</span></div><button type="submit" className="btn-primary">{sent ? 'Message sent' : <>Send message <Send size={16} /></>}</button></form><aside className="contact-aside"><p>Prefer a direct line? Reach out through any channel below — I usually reply within a day.</p><div className="contact-socials">{socials.map(({ label, icon: Icon, url }) => <a key={label} href={url} target="_blank" rel="noreferrer" className="social-tile"><Icon size={20} /><span>{label}</span></a>)}</div></aside></div></section>;
}
