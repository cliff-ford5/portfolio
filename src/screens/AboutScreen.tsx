import { Link } from 'react-router-dom';
import { ArrowRightIcon, CodeIcon, CpuIcon, DatabaseIcon, SmartphoneIcon } from '../components/icons';

const MODULE_LINKS = [
  { to: '/web', label: 'Web', icon: CodeIcon, color: 'var(--info)' },
  { to: '/mobile', label: 'Mobile', icon: SmartphoneIcon, color: 'var(--teal)' },
  { to: '/embedded', label: 'Embedded / IoT', icon: CpuIcon, color: 'var(--purple)' },
  { to: '/data', label: 'Data & Migrations', icon: DatabaseIcon, color: 'var(--warning)' },
];

export function AboutScreen() {
  return (
    <div>
      <div className="hero-grid" style={styles.heroGrid}>
        <div>
          <p style={styles.eyebrow}>Full-stack developer</p>
          <h1 style={styles.heading}>I build real infrastructure for real businesses.</h1>
          <p style={styles.subhead}>
            From data migrations to custom software to full mobile and web products — I design and ship systems
            businesses actually run on, not demos.
          </p>
          <div style={styles.actions}>
            <Link to="/contact" className="btn-primary" style={styles.primaryBtn}>
              Get in touch
              <ArrowRightIcon className="icon-sm" />
            </Link>
          </div>
        </div>

        <div className="hero-portrait" style={styles.portrait}>
          <div style={styles.portraitInner}>
            <span style={styles.portraitPlaceholder}>Photo</span>
          </div>
        </div>
      </div>

      <section style={styles.bioSection}>
        <h2 style={styles.sectionHeading}>About me</h2>
        <p style={styles.paragraph}>
          {/* Placeholder bio — replace with your own background. */}
          [Add a short bio here — how you got into software, what kind of problems you like solving, and what
          makes your approach different. 2–3 sentences is usually enough.]
        </p>
        <p style={styles.paragraph}>
          My work spans from low-level embedded systems to full production web and mobile products — CRMs,
          internal tools, data migrations, and the mobile apps that go with them. I care more about whether
          something actually works for the people using it every day than about using the newest framework.
        </p>

        <div style={styles.factRow}>
          <div style={styles.fact}>
            <span style={styles.factLabel}>Based in</span>
            <span style={styles.factValue}>[City, Country]</span>
          </div>
          <div style={styles.fact}>
            <span style={styles.factLabel}>Focus</span>
            <span style={styles.factValue}>Full-stack, mobile, data</span>
          </div>
          <div style={styles.fact}>
            <span style={styles.factLabel}>Available for</span>
            <span style={styles.factValue}>[Freelance / full-time / etc.]</span>
          </div>
        </div>
      </section>

      <section>
        <h2 style={styles.sectionHeading}>Explore my work</h2>
        <div style={styles.moduleGrid}>
          {MODULE_LINKS.map((m) => (
            <Link key={m.to} to={m.to} className="project-card" style={styles.moduleCard}>
              <div style={{ ...styles.moduleIcon, background: `${m.color}1A`, color: m.color }}>
                <m.icon className="icon-sm" />
              </div>
              <span style={styles.moduleLabel}>{m.label}</span>
              <ArrowRightIcon className="icon-sm" />
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}

const styles: Record<string, React.CSSProperties> = {
  heroGrid: {
    display: 'grid',
    gridTemplateColumns: '1.2fr 0.8fr',
    gap: 40,
    alignItems: 'center',
    marginBottom: 64,
  },
  eyebrow: {
    fontSize: 13,
    fontWeight: 700,
    letterSpacing: 1.2,
    textTransform: 'uppercase',
    color: 'var(--accent-text)',
    marginBottom: 14,
  },
  heading: {
    fontSize: 'clamp(28px, 4vw, 44px)',
    fontWeight: 700,
    lineHeight: 1.12,
    letterSpacing: -0.8,
    marginBottom: 16,
  },
  subhead: {
    fontSize: 16,
    lineHeight: 1.6,
    color: 'var(--ink-muted)',
    maxWidth: 480,
    marginBottom: 24,
  },
  actions: {
    display: 'flex',
  },
  primaryBtn: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: 8,
    textDecoration: 'none',
    fontSize: 14,
    fontWeight: 600,
    color: 'var(--accent-fg)',
    background: 'var(--accent)',
    padding: '13px 24px',
    borderRadius: 999,
  },
  portrait: {
    display: 'flex',
    justifyContent: 'center',
  },
  portraitInner: {
    width: '100%',
    maxWidth: 260,
    aspectRatio: '1 / 1',
    borderRadius: 'var(--radius-lg)',
    background: 'var(--surface-raised)',
    border: '1px solid var(--border)',
    boxShadow: 'var(--shadow-lg)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  portraitPlaceholder: {
    fontSize: 14,
    fontWeight: 600,
    color: 'var(--ink-faint)',
  },
  bioSection: {
    marginBottom: 64,
    maxWidth: 680,
  },
  sectionHeading: {
    fontSize: 22,
    fontWeight: 700,
    letterSpacing: -0.3,
    marginBottom: 18,
  },
  paragraph: {
    fontSize: 15,
    lineHeight: 1.7,
    color: 'var(--ink-muted)',
    marginBottom: 14,
  },
  factRow: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: 32,
    marginTop: 20,
    paddingTop: 20,
    borderTop: '1px solid var(--border)',
  },
  fact: {
    display: 'flex',
    flexDirection: 'column',
    gap: 4,
  },
  factLabel: {
    fontSize: 12,
    fontWeight: 600,
    textTransform: 'uppercase',
    letterSpacing: 0.6,
    color: 'var(--ink-faint)',
  },
  factValue: {
    fontSize: 14,
    fontWeight: 600,
    color: 'var(--ink)',
  },
  moduleGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
    gap: 14,
  },
  moduleCard: {
    display: 'flex',
    alignItems: 'center',
    gap: 12,
    textDecoration: 'none',
    color: 'var(--ink)',
    background: 'var(--surface-raised)',
    border: '1px solid var(--border)',
    borderRadius: 'var(--radius-md)',
    padding: '16px 18px',
    boxShadow: 'var(--shadow-xs)',
  },
  moduleIcon: {
    width: 32,
    height: 32,
    borderRadius: 9,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 0,
  },
  moduleLabel: {
    fontSize: 14,
    fontWeight: 600,
    flex: 1,
  },
};
