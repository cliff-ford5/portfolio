import { Section } from './Section';

export function About() {
  return (
    <Section id="about">
      <div style={styles.grid}>
        <div>
          <p style={styles.eyebrow}>About me</p>
          <h2 style={styles.heading}>Software that businesses actually run on.</h2>
        </div>
        <div style={styles.body}>
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
        </div>
      </div>
    </Section>
  );
}

const styles: Record<string, React.CSSProperties> = {
  grid: {
    display: 'grid',
    gridTemplateColumns: '0.8fr 1.2fr',
    gap: 48,
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
    fontSize: 'clamp(26px, 3.4vw, 36px)',
    fontWeight: 700,
    lineHeight: 1.2,
    letterSpacing: -0.5,
  },
  body: {
    display: 'flex',
    flexDirection: 'column',
    gap: 18,
  },
  paragraph: {
    fontSize: 16,
    lineHeight: 1.7,
    color: 'var(--ink-muted)',
  },
  factRow: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: 32,
    marginTop: 8,
    paddingTop: 24,
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
    fontSize: 15,
    fontWeight: 600,
    color: 'var(--ink)',
  },
};
