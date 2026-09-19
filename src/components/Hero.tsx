import { ArrowRightIcon } from './icons';
import { Section } from './Section';

export function Hero() {
  return (
    <Section tight>
      <div className="hero-grid" style={styles.grid}>
        <div>
          <p style={styles.eyebrow}>Full-stack developer</p>
          <h1 style={styles.heading}>
            I build real infrastructure for real businesses.
          </h1>
          <p style={styles.subhead}>
            From data migrations to custom software to full mobile and web products — I design and ship systems
            businesses actually run on, not demos.
          </p>

          <div style={styles.chipRow}>
            {['Web', 'Mobile', 'Embedded / IoT', 'Data & Migrations'].map((label) => (
              <span key={label} style={styles.chip}>
                {label}
              </span>
            ))}
          </div>

          <div style={styles.actions}>
            <a href="#projects" className="btn-primary" style={styles.primaryBtn}>
              View projects
              <ArrowRightIcon className="icon-sm" />
            </a>
            <a href="#contact" className="btn-secondary" style={styles.secondaryBtn}>
              Get in touch
            </a>
          </div>
        </div>

        <div className="hero-portrait" style={styles.portrait}>
          <div style={styles.portraitInner}>
            <span style={styles.portraitPlaceholder}>Photo</span>
          </div>
        </div>
      </div>
    </Section>
  );
}

const styles: Record<string, React.CSSProperties> = {
  grid: {
    display: 'grid',
    gridTemplateColumns: '1.2fr 0.8fr',
    gap: 48,
    alignItems: 'center',
    paddingTop: 72,
    paddingBottom: 32,
  },
  eyebrow: {
    fontSize: 13,
    fontWeight: 700,
    letterSpacing: 1.2,
    textTransform: 'uppercase',
    color: 'var(--accent-text)',
    marginBottom: 16,
  },
  heading: {
    fontSize: 'clamp(34px, 5vw, 56px)',
    fontWeight: 700,
    lineHeight: 1.08,
    letterSpacing: -1,
    marginBottom: 20,
  },
  subhead: {
    fontSize: 17,
    lineHeight: 1.6,
    color: 'var(--ink-muted)',
    maxWidth: 520,
    marginBottom: 28,
  },
  chipRow: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: 8,
    marginBottom: 32,
  },
  chip: {
    fontSize: 13,
    fontWeight: 600,
    color: 'var(--ink-muted)',
    background: 'var(--surface-raised)',
    border: '1px solid var(--border)',
    borderRadius: 999,
    padding: '6px 14px',
  },
  actions: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: 12,
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
  secondaryBtn: {
    display: 'inline-flex',
    alignItems: 'center',
    textDecoration: 'none',
    fontSize: 14,
    fontWeight: 600,
    color: 'var(--ink)',
    background: 'transparent',
    border: '1px solid var(--border)',
    padding: '13px 24px',
    borderRadius: 999,
  },
  portrait: {
    display: 'flex',
    justifyContent: 'center',
  },
  portraitInner: {
    width: '100%',
    maxWidth: 340,
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
};
