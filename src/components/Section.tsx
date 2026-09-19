import type { ReactNode } from 'react';

export function Section({
  id,
  children,
  tight,
}: {
  id?: string;
  children: ReactNode;
  // Hero uses its own padding (needs to sit flush under the nav) —
  // everything else gets the standard section rhythm.
  tight?: boolean;
}) {
  return (
    <section id={id} style={{ ...styles.section, ...(tight ? styles.tight : {}) }}>
      <div style={styles.inner}>{children}</div>
    </section>
  );
}

const styles: Record<string, React.CSSProperties> = {
  section: {
    paddingTop: 'var(--section-gap)',
    paddingBottom: 'var(--section-gap)',
    scrollMarginTop: 72,
  },
  tight: {
    paddingTop: 0,
  },
  inner: {
    maxWidth: 'var(--container)',
    margin: '0 auto',
    padding: '0 24px',
  },
};
