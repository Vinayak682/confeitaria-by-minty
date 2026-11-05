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
const UM = '/confeitaria-by-minty/user-media';
const RANGE = [
  { name: 'Cakes', tone: 'sage', vid: 5 },
  { name: 'Macarons', tone: 'blush', vid: 4 },
  { name: 'Viennoiserie', tone: 'ivory', vid: 6 },
];
const REELS = [
  { vid: 1, url: 'https://www.instagram.com/reel/CoB-c8aPJta/' },
  { vid: 7, url: 'https://www.instagram.com/reel/CtYntpRthu_/' },
  { vid: 3, url: 'https://www.instagram.com/reel/DY1Qq0cyPuH/' },
  { vid: 2, url: 'https://www.instagram.com/reel/DYV4leey6_W/' },
  { vid: 5, url: 'https://www.instagram.com/reel/DWlBPJNEoYx/' },
  { vid: 4, url: 'https://www.instagram.com/reel/C_9oV9VSi8v/' },
  { vid: 6, url: 'https://www.instagram.com/reel/C_fN_xxyefp/' },
];

/* play videos only while on screen (saves data on phones) */
function useLazyVideos() {
  useEffect(() => {
    const vids = document.querySelectorAll('.fr video[data-lazy]');
    const io = new IntersectionObserver((es) => es.forEach((e) => {
      const v = e.target;
      if (e.isIntersecting) {
        if (!v.src) v.src = v.dataset.lazy;
        v.play().catch(() => {});
      } else v.pause();
    }), { rootMargin: '200px 0px', threshold: 0.01 });
    vids.forEach((v) => io.observe(v));
    return () => io.disconnect();
  }, []);
}
const MENU = ['Croissants', 'Éclairs', 'Macarons', 'Entremets', 'Tarts', 'Mille-feuille', 'Viennoiserie', 'Celebration cakes'];

const isMobile = () => window.matchMedia('(max-width: 820px)').matches;
const buzz = () => { try { navigator.vibrate && navigator.vibrate(8); } catch { /* unsupported */ } };

const go = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

/* reveal-on-scroll for any [data-reveal] */
function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll('.fr [data-reveal]');
    const io = new IntersectionObserver(
      (es) => es.forEach((e) => {
        if (!e.isIntersecting || e.target.classList.contains('is-in')) return;
        e.target.classList.add('is-in');
        if (e.target.classList.contains('fr-band') && isMobile()) buzz();
      }),
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
      if (isMobile()) { track.style.transform = ''; return; }
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
  const [room, setRoom] = useState(0);
  /* mobile: swipe carousel, the settled arch zooms out and writes its caption */
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    const io = new IntersectionObserver((es) => es.forEach((e) => {
      if (e.isIntersecting) {
        e.target.classList.add('is-active');
        setRoom(Number(e.target.dataset.k));
      } else e.target.classList.remove('is-active');
    }), { root: isMobile() ? track : null, threshold: 0.6 });
    track.querySelectorAll('.fr-arch').forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
  const toRoom = (k) => {
    const el = trackRef.current?.querySelectorAll('.fr-arch')[k];
    el && trackRef.current.scrollTo({ left: el.offsetLeft - (trackRef.current.clientWidth - el.clientWidth) / 2, behavior: 'smooth' });
  };
  useReveal();
  useLazyVideos();
  useHorizontal(wrapRef, trackRef);

  useEffect(() => {
    document.title = 'Frasers · European Patisserie · Opening soon in Bhubaneswar';
    if (!intro) return;
    const t = setTimeout(() => { setIntro(false); sessionStorage.setItem('fr-intro', '1'); }, 2900);
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
    let last = window.scrollY, idle = 0;
    const scroll = () => {
      const y = window.scrollY;
      h.style.setProperty('--sy', String(Math.min(1, y / window.innerHeight)));
      h.style.setProperty('--vel', String(Math.max(-1, Math.min(1, (y - last) / 40))));
      last = y; clearTimeout(idle);
      idle = setTimeout(() => h.style.setProperty('--vel', '0'), 140);
    };
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
          <div className="fr-load">
            <div className="fr-flour" aria-hidden="true">
              {Array.from({ length: 16 }).map((_, i) => <i key={i} style={{ '--i': i, left: `${(i * 41 + 9) % 100}%` }} />)}
            </div>
            <div className="fr-load-logo">
              <img src={`${A}/logo-cocoa.png`} alt="" />
              <span className="fr-nib" />
            </div>
            <div className="fr-whisk"><span /></div>
            <small className="fr-load-note">Baking something new</small>
          </div>
          <div className="fr-door fr-door--l"><span /></div>
          <div className="fr-door fr-door--r"><span /></div>
          <div className="fr-flash" />
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
              <figure className="fr-arch" key={r.src} data-k={i} style={{ '--k': i }}>
                <div className="fr-arch-img"><img src={`${A}/${r.src}`} alt={r.word} loading="lazy" /></div>
                <figcaption><span>0{i + 1}</span>{r.word}</figcaption>
              </figure>
            ))}
          </div>
          <div className="fr-progress"><span /></div>
          <div className="fr-dots" role="tablist" aria-label="Photos">
            {ROOMS.map((r, i) => (
              <button key={r.src} className={room === i ? 'on' : ''} onClick={() => toRoom(i)} aria-label={r.word} />
            ))}
          </div>
        </div>
      </section>

      {/* 4 · Signature line */}
      <section className="fr-quote">
        <p data-reveal><span className="fr-shimmer">The art of the crumb</span><small>Frasers · European Patisserie</small></p>
        <div className="fr-crumbs" aria-hidden="true">{Array.from({ length: 12 }).map((_, i) => <i key={i} style={{ '--i': i, left: `${20 + ((i * 47) % 60)}%` }} />)}</div>
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
              <video className="fr-band-vid" data-lazy={`${UM}/minty_full_vid_${r.vid}.mp4`} muted loop playsInline preload="none" aria-hidden="true" />
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

      {/* 5b · Fresh from the kitchen: the Instagram reels */}
      <section className="fr-reels" id="fr-reels">
        <div className="fr-reels-head" data-reveal>
          <h2>Fresh from the kitchen</h2>
          <span className="fr-kicker">From our Instagram</span>
        </div>
        <div className="fr-reels-track">
          {REELS.map((r, i) => (
            <a className="fr-reel" key={i} href={r.url} target="_blank" rel="noreferrer" data-reveal style={{ '--d': `${(i % 4) * 0.08}s` }}>
              <video data-lazy={`${UM}/minty_full_vid_${r.vid}.mp4`} muted loop playsInline preload="none" />
              <span className="fr-reel-play" aria-hidden="true">▶</span>
            </a>
          ))}
        </div>
        <div className="fr-reels-cta"><a className="fr-btn fr-btn--ghost" href={IG} target="_blank" rel="noreferrer">Watch more on Instagram</a></div>
      </section>

      {/* 6 · Final call */}
      <section className="fr-final">
        <div className="fr-final-card" data-reveal>
          <div className="fr-shower" aria-hidden="true">{Array.from({ length: 18 }).map((_, i) => <i key={i} style={{ '--i': i, left: `${(i * 29 + 5) % 100}%` }} />)}</div>
          <span className="fr-pill fr-pill--dark"><span className="fr-dot" /> Opening soon · Bhubaneswar</span>
          <h2>Be first through the door</h2>
          <div className="fr-final-actions">
            <a className="fr-btn fr-btn--cocoa fr-breathe" href={NOTIFY}><Mail size={16} strokeWidth={1.6} /> Notify me</a>
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
