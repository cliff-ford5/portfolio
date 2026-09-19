import { CATEGORY_DESCRIPTION, CATEGORY_LABEL, PROJECTS, type ProjectCategory } from '../data/projects';
import { ProjectCard } from '../components/ProjectCard';

// One screen, reused for all four sidebar module routes — each "module" is
// the exact same shape (a filtered project grid), so this is a single
// parametrized screen rather than four near-identical copies.
export function ModuleScreen({ category }: { category: ProjectCategory }) {
  const items = PROJECTS.filter((p) => p.category === category);

  return (
    <div>
      <p style={styles.eyebrow}>Project Module</p>
      <h1 style={styles.heading}>{CATEGORY_LABEL[category]}</h1>
      <p style={styles.description}>{CATEGORY_DESCRIPTION[category]}</p>

      {items.length === 0 ? (
        <p style={styles.empty}>Nothing here yet.</p>
      ) : (
        <div style={styles.grid}>
          {items.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      )}
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
    marginBottom: 10,
  },
  description: {
    fontSize: 15,
    color: 'var(--ink-muted)',
    marginBottom: 32,
    maxWidth: 560,
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: 20,
  },
  empty: {
    color: 'var(--ink-faint)',
    fontSize: 14,
  },
};
