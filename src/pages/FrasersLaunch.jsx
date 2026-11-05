import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Camera as Instagram, Mail, ArrowDown } from 'lucide-react';
import './FrasersLaunch.css';

const A = '/confeitaria-by-minty/frasers';
const NOTIFY = 'mailto:mintybhadani@gmail.com?subject=' +
  encodeURIComponent('Notify me: Frasers Bhubaneswar opening') +
  '&body=' + encodeURIComponent('Hi, please let me know when Frasers opens in Bhubaneswar.');
const IG = 'https://instagram.com/confeitaria_by_minty';

const ROOMS = [
  { src: 'still-1.jpg', word: 'Blossom' },
  { src: 'still-3.5.jpg', word: 'Paris on the walls' },
  { src: 'still-8.5.jpg', word: 'The counter' },
  { src: 'still-11.jpg', word: 'Arches of light' },
  { src: 'still-13.5.jpg', word: 'Your seat' },
];
const RANGE = [
  { name: 'Cakes', tone: 'sage' },
  { name: 'Macarons', tone: 'blush' },
  { name: 'Viennoiserie', tone: 'ivory' },
];
const MENU = ['Croissants', 'Éclairs', 'Macarons', 'Entremets', 'Tarts', 'Mille-feuille', 'Viennoiserie', 'Celebration cakes'];

const go = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

/* reveal-on-scroll for any [data-reveal] */
function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll('.fr [data-reveal]');
    const io = new IntersectionObserver(
      (es) => es.forEach((e) => e.isIntersecting && e.target.classList.add('is-in')),
      { threshold: 0.18 }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}

/* pinned horizontal gallery: vertical scroll drives the track sideways */
function useHorizontal(wrapRef, trackRef) {
  useEffect(() => {
    const wrap = wrapRef.current, track = trackRef.current;
    if (!wrap || !track) return;
    let raf = 0;
    const update = () => {
      raf = 0;
      const r = wrap.getBoundingClientRect();
      const total = wrap.offsetHeight - window.innerHeight;
      const p = Math.min(1, Math.max(0, -r.top / Math.max(1, total)));
      const max = track.scrollWidth - window.innerWidth;
      track.style.transform = `translate3d(${-p * Math.max(0, max)}px,0,0)`;
      wrap.style.setProperty('--p', p.toFixed(3));
    };
    const on = () => { if (!raf) raf = requestAnimationFrame(update); };
    update();
    window.addEventListener('scroll', on, { passive: true });
    window.addEventListener('resize', on);
    return () => { window.removeEventListener('scroll', on); window.removeEventListener('resize', on); };
  }, [wrapRef, trackRef]);
}

export default function FrasersLaunch() {
  const [intro, setIntro] = useState(() => !sessionStorage.getItem('fr-intro'));
  const heroRef = useRef(null);
  const [solid, setSolid] = useState(false);
  useEffect(() => {
    const on = () => setSolid(window.scrollY > window.innerHeight * 0.85);
    on(); window.addEventListener('scroll', on, { passive: true });
    return () => window.removeEventListener('scroll', on);
  }, []);
  const wrapRef = useRef(null);
  const trackRef = useRef(null);
  useReveal();
  useHorizontal(wrapRef, trackRef);

  useEffect(() => {
    document.title = 'Frasers · European Patisserie · Opening soon in Bhubaneswar';
    if (!intro) return;
    const t = setTimeout(() => { setIntro(false); sessionStorage.setItem('fr-intro', '1'); }, 3400);
    const esc = (e) => e.key === 'Escape' && setIntro(false);
    window.addEventListener('keydown', esc);
    return () => { clearTimeout(t); window.removeEventListener('keydown', esc); };
  }, [intro]);

  /* hero: warm light follows the cursor, logo drifts on scroll */
  useEffect(() => {
    const h = heroRef.current;
    if (!h) return;
    const move = (e) => {
      const r = h.getBoundingClientRect();
      h.style.setProperty('--mx', `${((e.clientX - r.left) / r.width) * 100}%`);
      h.style.setProperty('--my', `${((e.clientY - r.top) / r.height) * 100}%`);
    };
    const scroll = () => h.style.setProperty('--sy', String(Math.min(1, window.scrollY / window.innerHeight)));
    h.addEventListener('pointermove', move);
    window.addEventListener('scroll', scroll, { passive: true });
    return () => { h.removeEventListener('pointermove', move); window.removeEventListener('scroll', scroll); };
  }, []);

  return (
    <div className="fr">
      <div className="fr-grain" aria-hidden="true" />

      {/* 0 · Doors open, sign lights up */}
      {intro && (
        <div className="fr-intro" onClick={() => setIntro(false)} role="presentation">
          <div className="fr-door fr-door--l"><span /></div>
          <div className="fr-door fr-door--r"><span /></div>
          <img className="fr-intro-logo" src={`${A}/logo-gold.png`} alt="" />
          <button className="fr-skip" onClick={() => setIntro(false)}>Skip</button>
        </div>
      )}

      {/* top bar */}
      <header className={`fr-nav ${solid ? 'is-solid' : ''}`}>
        <img src={`${A}/${solid ? 'logo-cocoa' : 'logo-gold'}.png`} alt="Frasers" className="fr-nav-logo" />
        <nav>
          <button onClick={() => go('fr-inside')}>Inside</button>
          <button onClick={() => go('fr-range')}>The range</button>
          <a className="fr-nav-cta" href={NOTIFY}>Notify me</a>
        </nav>
      </header>

      {/* 1 · Hero */}
      <section className="fr-hero" ref={heroRef}>
        <video className="fr-hero-video" src={`${A}/store.mp4`} poster={`${A}/still-1.jpg`} autoPlay muted loop playsInline aria-hidden="true" />
        <div className="fr-hero-veil" aria-hidden="true" />
        <div className="fr-hero-light" aria-hidden="true" />
        <div className="fr-petals" aria-hidden="true">
          {Array.from({ length: 14 }).map((_, i) => (
            <i key={i} style={{ '--i': i, left: `${(i * 37 + 11) % 100}%` }} />
          ))}
        </div>

        <div className="fr-hero-inner">
          <span className="fr-pill"><span className="fr-dot" /> Opening soon <MapPin size={13} strokeWidth={1.8} /> Bhubaneswar</span>
          <h1 className="fr-hero-logo">
            <img src={`${A}/logo-gold.png`} alt="Frasers, European Patisserie. The art of the crumb." />
          </h1>
          <a className="fr-btn" href={NOTIFY}>Notify me when we open</a>
        </div>
        <button className="fr-scroll" onClick={() => go('fr-inside')} aria-label="Step inside">
          <span>Step inside</span><ArrowDown size={16} strokeWidth={1.5} />
        </button>
      </section>

      {/* 2 · Gold ribbon */}
      <div className="fr-ribbon" aria-hidden="true">
        <div className="fr-ribbon-track">
          {[...MENU, ...MENU].map((m, i) => <span key={i}>{m}<em>✦</em></span>)}
        </div>
      </div>

      {/* 3 · Step inside: pinned horizontal arches */}
      <section className="fr-inside" id="fr-inside" ref={wrapRef}>
        <div className="fr-inside-sticky">
          <div className="fr-inside-head">
            <h2>Step inside</h2>
            <span className="fr-kicker">A first look</span>
          </div>
          <div className="fr-track" ref={trackRef}>
            {ROOMS.map((r, i) => (
              <figure className="fr-arch" key={r.src} style={{ '--k': i }}>
                <div className="fr-arch-img"><img src={`${A}/${r.src}`} alt={r.word} loading="lazy" /></div>
                <figcaption><span>0{i + 1}</span>{r.word}</figcaption>
              </figure>
            ))}
          </div>
          <div className="fr-progress"><span /></div>
        </div>
      </section>

      {/* 4 · Signature line */}
      <section className="fr-quote">
        <p data-reveal><span className="fr-shimmer">The art of the crumb</span><small>Frasers · European Patisserie</small></p>
      </section>

      {/* 5 · The range */}
      <section className="fr-range" id="fr-range">
        <div className="fr-range-head" data-reveal>
          <span className="fr-kicker">The range</span>
          <h2>Three little indulgences</h2>
        </div>
        <div className="fr-range-grid">
          {RANGE.map((r, i) => (
            <div className={`fr-band fr-band--${r.tone}`} key={r.name} data-reveal style={{ '--d': `${i * 0.12}s` }}>
              <span className="fr-band-no">0{i + 1}</span>
              <h3>{r.name}</h3>
            </div>
          ))}
        </div>
        <figure className="fr-maison" data-reveal>
          <img src={`${A}/maison-box.jpg`} alt="The Maison Frasers gift box" loading="lazy" />
          <figcaption>Gifting, in the Maison box</figcaption>
        </figure>
      </section>

      {/* 6 · Final call */}
      <section className="fr-final">
        <div className="fr-final-card" data-reveal>
          <span className="fr-pill fr-pill--dark"><span className="fr-dot" /> Opening soon · Bhubaneswar</span>
          <h2>Be first through the door</h2>
          <div className="fr-final-actions">
            <a className="fr-btn fr-btn--cocoa" href={NOTIFY}><Mail size={16} strokeWidth={1.6} /> Notify me</a>
            <a className="fr-btn fr-btn--ghost" href={IG} target="_blank" rel="noreferrer"><Instagram size={16} strokeWidth={1.6} /> Follow along</a>
          </div>
        </div>
      </section>

      <footer className="fr-foot">
        <img src={`${A}/logo-cocoa.png`} alt="Frasers" />
        <span>European Patisserie · Bhubaneswar</span>
        <Link to="/minty">Confeitaria by Minty →</Link>
      </footer>
    </div>
  );
}
