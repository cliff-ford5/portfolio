import { SKILL_GROUPS } from '../data/skills';
import { Section } from './Section';

export function Skills() {
  return (
    <Section id="skills">
      <p style={styles.eyebrow}>Skills</p>
      <h2 style={styles.heading}>What I work with</h2>

      <div style={styles.grid}>
        {SKILL_GROUPS.map((group) => (
          <div key={group.title} style={styles.card}>
            <h3 style={styles.groupTitle}>{group.title}</h3>
            <div style={styles.tagRow}>
              {group.items.map((item) => (
                <span key={item} style={styles.tag}>
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}

const styles: Record<string, React.CSSProperties> = {
  eyebrow: {
    fontSize: 13,
    fontWeight: 700,
    letterSpacing: 1.2,
    textTransform: 'uppercase',
    color: 'var(--accent-text)',
    marginBottom: 10,
  },
  heading: {
    fontSize: 'clamp(26px, 3.4vw, 36px)',
    fontWeight: 700,
    letterSpacing: -0.5,
    marginBottom: 36,
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
    gap: 20,
  },
  card: {
    background: 'var(--surface-raised)',
    border: '1px solid var(--border)',
    borderRadius: 'var(--radius-md)',
    padding: 22,
    boxShadow: 'var(--shadow-xs)',
  },
  groupTitle: {
    fontSize: 15,
    fontWeight: 700,
    marginBottom: 14,
  },
  tagRow: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: 8,
  },
  tag: {
    fontSize: 13,
    fontWeight: 500,
    color: 'var(--ink-muted)',
    background: 'var(--bg)',
    border: '1px solid var(--border)',
    borderRadius: 999,
    padding: '5px 12px',
  },
};
