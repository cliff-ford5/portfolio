import { useState } from 'react';
import { CATEGORY_DESCRIPTION, CATEGORY_LABEL, PROJECTS, type ProjectCategory } from '../data/projects';
import { CodeIcon, CpuIcon, DatabaseIcon, SmartphoneIcon } from './icons';
import { ProjectCard } from './ProjectCard';
import { Section } from './Section';

const CATEGORY_ICON = {
  web: CodeIcon,
  mobile: SmartphoneIcon,
  embedded: CpuIcon,
  data: DatabaseIcon,
};

const CATEGORIES: ProjectCategory[] = ['web', 'mobile', 'embedded', 'data'];

export function Projects() {
  const [filter, setFilter] = useState<ProjectCategory | 'all'>('all');
  const visibleCategories = filter === 'all' ? CATEGORIES : [filter];

  return (
    <Section id="projects">
      <p style={styles.eyebrow}>Projects</p>
      <h2 style={styles.heading}>Work, organized by what it actually is</h2>
      <p style={styles.intro}>
        Four kinds of work, one throughline — real systems for real businesses, not demos.
      </p>

      <div style={styles.filterRow}>
        <button
          type="button"
          onClick={() => setFilter('all')}
          className="filter-chip"
          style={{ ...styles.filterChip, ...(filter === 'all' ? styles.filterChipActive : {}) }}
        >
          All
        </button>
        {CATEGORIES.map((cat) => (
          <button
            key={cat}
            type="button"
            onClick={() => setFilter(cat)}
            className="filter-chip"
            style={{ ...styles.filterChip, ...(filter === cat ? styles.filterChipActive : {}) }}
          >
            {CATEGORY_LABEL[cat]}
          </button>
        ))}
      </div>

      {visibleCategories.map((cat) => {
        const items = PROJECTS.filter((p) => p.category === cat);
        if (items.length === 0) return null;
        const Icon = CATEGORY_ICON[cat];

        return (
          <div key={cat} style={styles.module}>
            <div style={styles.moduleHeader}>
              <div style={styles.moduleIconBadge}>
                <Icon className="icon-sm" />
              </div>
              <div>
                <h3 style={styles.moduleTitle}>{CATEGORY_LABEL[cat]}</h3>
                <p style={styles.moduleDescription}>{CATEGORY_DESCRIPTION[cat]}</p>
              </div>
            </div>

            <div style={styles.grid}>
              {items.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </div>
        );
      })}
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
    marginBottom: 10,
  },
  intro: {
    fontSize: 15,
    color: 'var(--ink-muted)',
    marginBottom: 28,
    maxWidth: 560,
  },
  filterRow: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: 8,
    marginBottom: 48,
  },
  filterChip: {
    fontSize: 13,
    fontWeight: 600,
    color: 'var(--ink-muted)',
    background: 'var(--surface-raised)',
    border: '1px solid var(--border)',
    borderRadius: 999,
    padding: '8px 16px',
    cursor: 'pointer',
  },
  filterChipActive: {
    background: 'var(--accent)',
    color: 'var(--accent-fg)',
    borderColor: 'var(--accent)',
  },
  module: {
    marginBottom: 56,
  },
  moduleHeader: {
    display: 'flex',
    alignItems: 'flex-start',
    gap: 14,
    marginBottom: 24,
  },
  moduleIconBadge: {
    width: 38,
    height: 38,
    borderRadius: 10,
    background: 'var(--accent-soft)',
    color: 'var(--accent-text)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 0,
  },
  moduleTitle: {
    fontSize: 19,
    fontWeight: 700,
    marginBottom: 4,
  },
  moduleDescription: {
    fontSize: 14,
    color: 'var(--ink-muted)',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: 20,
  },
};
