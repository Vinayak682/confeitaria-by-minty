import { useEffect, useRef, useState } from 'react';
import { MapPin, Sparkles } from 'lucide-react';
import './ComingSoonBhubaneswar.css';

const BASE = '/confeitaria-by-minty/bhubaneswar';

export default function ComingSoonBhubaneswar() {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setInView(true),
      { threshold: 0.2 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <section id="bhubaneswar" ref={ref} className={`csb ${inView ? 'csb--in' : ''}`}>
      {/* Atmosphere: the real store, softened, filling the whole section */}
      <video
        className="csb-ambient"
        src={`${BASE}/store-walkthrough.mp4`}
        poster={`${BASE}/store-poster.jpg`}
        autoPlay
        muted
        loop
        playsInline
        aria-hidden="true"
      />
      <div className="csb-veil" aria-hidden="true" />
      <div className="csb-sparkles" aria-hidden="true">
        {Array.from({ length: 18 }).map((_, i) => (
          <i key={i} style={{ '--i': i, left: `${(i * 53 + 7) % 100}%` }} />
        ))}
      </div>

      <div className="container csb-inner">
        <div className="csb-copy">
          <span className="csb-chip">
            <span className="csb-dot" /> Opening soon · Bhubaneswar
          </span>

          <div className="csb-logo-wrap">
            <img
              className="csb-logo"
              src={`${BASE}/frasers-logo-gold.png`}
              alt="Frasers, European Patisserie. The art of the crumb."
            />
          </div>

          <div className="csb-actions">
            <a href="#newsletter" className="btn btn-primary csb-btn">
              <Sparkles size={16} strokeWidth={1.8} /> Notify me
            </a>
          </div>
        </div>

        {/* Arched window into the store, echoing the arches inside */}
        <figure className="csb-arch">
          <video
            src={`${BASE}/store-walkthrough.mp4`}
            poster={`${BASE}/store-poster.jpg`}
            autoPlay
            muted
            loop
            playsInline
          />
        </figure>
      </div>
    </section>
  );
}
