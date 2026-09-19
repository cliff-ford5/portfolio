import { SKILL_GROUPS } from '../data/skills';

export function SkillsScreen() {
  return (
    <div>
      <p style={styles.eyebrow}>Skills</p>
      <h1 style={styles.heading}>What I work with</h1>

      <div style={styles.grid}>
        {SKILL_GROUPS.map((group) => (
          <div key={group.title} style={styles.card}>
            <h2 style={styles.groupTitle}>{group.title}</h2>
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
    </div>
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
    fontSize: 'clamp(24px, 3.2vw, 32px)',
    fontWeight: 700,
    letterSpacing: -0.5,
    marginBottom: 32,
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
