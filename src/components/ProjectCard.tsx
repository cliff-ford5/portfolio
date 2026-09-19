import type { Project } from '../data/projects';
import { CodeIcon, CpuIcon, DatabaseIcon, ImageIcon, LockIcon, SmartphoneIcon } from './icons';

const CATEGORY_ICON = {
  web: CodeIcon,
  mobile: SmartphoneIcon,
  embedded: CpuIcon,
  data: DatabaseIcon,
};

const CATEGORY_COLOR = {
  web: 'var(--info)',
  mobile: 'var(--teal)',
  embedded: 'var(--purple)',
  data: 'var(--warning)',
};

export function ProjectCard({ project }: { project: Project }) {
  const Icon = CATEGORY_ICON[project.category];
  const color = CATEGORY_COLOR[project.category];

  return (
    <article className="project-card" style={{ ...styles.card, ...(project.placeholder ? styles.cardPlaceholder : {}) }}>
      <div style={styles.visual}>
        <ImageIcon className="icon-md" />
        <span style={styles.visualLabel}>{project.placeholder ? 'Add a screenshot' : 'Screenshot on request'}</span>
      </div>

      <div style={styles.content}>
        <div style={{ ...styles.iconBadge, background: `${color}1A`, color }}>
          <Icon className="icon-sm" />
        </div>

        <h3 style={styles.title}>{project.title}</h3>
        <p style={styles.summary}>{project.summary}</p>

        <div style={styles.stackRow}>
          {project.stack.map((s) => (
            <span key={s} style={styles.stackTag}>
              {s}
            </span>
          ))}
        </div>

        <ul style={styles.highlights}>
          {project.highlights.map((h) => (
            <li key={h} style={styles.highlightItem}>
              {h}
            </li>
          ))}
        </ul>

        {!project.placeholder && (
          <div style={styles.confidentialNote}>
            <LockIcon className="icon-sm" />
            <span>Private client system — no public link, for confidentiality</span>
          </div>
        )}
      </div>
    </article>
  );
}

const styles: Record<string, React.CSSProperties> = {
  card: {
    display: 'flex',
    flexDirection: 'column',
    background: 'var(--surface-raised)',
    border: '1px solid var(--border)',
    borderRadius: 'var(--radius-md)',
    overflow: 'hidden',
    boxShadow: 'var(--shadow-sm)',
  },
  cardPlaceholder: {
    borderStyle: 'dashed',
  },
  visual: {
    height: 140,
    background: 'var(--bg)',
    borderBottom: '1px solid var(--border)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    color: 'var(--ink-faint)',
  },
  visualLabel: {
    fontSize: 12,
    fontWeight: 600,
  },
  content: {
    padding: 22,
    display: 'flex',
    flexDirection: 'column',
    flex: 1,
  },
  iconBadge: {
    width: 34,
    height: 34,
    borderRadius: 10,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 14,
  },
  title: {
    fontSize: 17,
    fontWeight: 700,
    marginBottom: 8,
  },
  summary: {
    fontSize: 14,
    lineHeight: 1.6,
    color: 'var(--ink-muted)',
    marginBottom: 16,
  },
  stackRow: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: 6,
    marginBottom: 16,
  },
  stackTag: {
    fontSize: 12,
    fontWeight: 600,
    color: 'var(--accent-text)',
    background: 'var(--accent-soft)',
    borderRadius: 999,
    padding: '4px 10px',
  },
  highlights: {
    margin: 0,
    marginBottom: 16,
    paddingLeft: 18,
    display: 'flex',
    flexDirection: 'column',
    gap: 6,
  },
  highlightItem: {
    fontSize: 13,
    lineHeight: 1.5,
    color: 'var(--ink-muted)',
  },
  confidentialNote: {
    marginTop: 'auto',
    paddingTop: 14,
    borderTop: '1px solid var(--border)',
    display: 'flex',
    alignItems: 'center',
    gap: 8,
    fontSize: 12,
    fontWeight: 500,
    color: 'var(--ink-faint)',
  },
};
