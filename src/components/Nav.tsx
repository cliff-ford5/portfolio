import { useState } from 'react';

const LINKS = [
  { href: '#about', label: 'About' },
  { href: '#projects', label: 'Projects' },
  { href: '#skills', label: 'Skills' },
  { href: '#contact', label: 'Contact' },
];

export function Nav() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header style={styles.header}>
      <div style={styles.inner}>
        <a href="#top" style={styles.brand}>
          <span style={styles.brandMark}>YN</span>
          <span style={styles.brandName}>Your Name</span>
        </a>

        <nav className="nav-links" style={styles.navLinks}>
          {LINKS.map((link) => (
            <a key={link.href} href={link.href} className="nav-link" style={styles.link}>
              {link.label}
            </a>
          ))}
          <a href="#contact" className="btn-primary" style={styles.cta}>
            Let's talk
          </a>
        </nav>

        <button
          type="button"
          className="nav-mobile-toggle"
          style={styles.toggle}
          onClick={() => setMobileOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          <span style={{ ...styles.bar, transform: mobileOpen ? 'translateY(6px) rotate(45deg)' : 'none' }} />
          <span style={{ ...styles.bar, opacity: mobileOpen ? 0 : 1 }} />
          <span style={{ ...styles.bar, transform: mobileOpen ? 'translateY(-6px) rotate(-45deg)' : 'none' }} />
        </button>
      </div>

      {mobileOpen && (
        <nav style={styles.mobilePanel}>
          {LINKS.map((link) => (
            <a key={link.href} href={link.href} style={styles.mobileLink} onClick={() => setMobileOpen(false)}>
              {link.label}
            </a>
          ))}
          <a href="#contact" style={styles.mobileCta} onClick={() => setMobileOpen(false)}>
            Let's talk
          </a>
        </nav>
      )}
    </header>
  );
}

const styles: Record<string, React.CSSProperties> = {
  header: {
    position: 'sticky',
    top: 0,
    zIndex: 50,
    background: 'rgba(237, 237, 234, 0.85)',
    backdropFilter: 'blur(10px)',
    borderBottom: '1px solid var(--border)',
  },
  inner: {
    maxWidth: 'var(--container)',
    margin: '0 auto',
    padding: '14px 24px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  brand: {
    display: 'flex',
    alignItems: 'center',
    gap: 10,
    textDecoration: 'none',
    color: 'var(--ink)',
  },
  brandMark: {
    width: 34,
    height: 34,
    borderRadius: 10,
    background: 'var(--accent)',
    color: 'var(--accent-fg)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 13,
    fontWeight: 700,
    letterSpacing: 0.5,
  },
  brandName: {
    fontSize: 15,
    fontWeight: 600,
  },
  navLinks: {
    display: 'flex',
    alignItems: 'center',
    gap: 28,
  },
  link: {
    fontSize: 14,
    fontWeight: 500,
    color: 'var(--ink-muted)',
  },
  cta: {
    textDecoration: 'none',
    fontSize: 13,
    fontWeight: 600,
    color: 'var(--accent-fg)',
    background: 'var(--accent)',
    padding: '9px 18px',
    borderRadius: 999,
  },
  toggle: {
    display: 'none',
    flexDirection: 'column',
    gap: 5,
    border: 'none',
    background: 'none',
    cursor: 'pointer',
    padding: 8,
  },
  bar: {
    width: 20,
    height: 2,
    background: 'var(--ink)',
    borderRadius: 2,
    transition: 'transform 150ms ease, opacity 150ms ease',
  },
  mobilePanel: {
    display: 'flex',
    flexDirection: 'column',
    padding: '8px 24px 20px',
    gap: 4,
    borderTop: '1px solid var(--border)',
  },
  mobileLink: {
    padding: '12px 4px',
    fontSize: 15,
    fontWeight: 500,
    color: 'var(--ink)',
    textDecoration: 'none',
    borderBottom: '1px solid var(--border)',
  },
  mobileCta: {
    marginTop: 12,
    textAlign: 'center',
    textDecoration: 'none',
    fontSize: 14,
    fontWeight: 600,
    color: 'var(--accent-fg)',
    background: 'var(--accent)',
    padding: '12px 18px',
    borderRadius: 999,
  },
};
