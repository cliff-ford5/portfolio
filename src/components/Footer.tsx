export function Footer() {
  return (
    <footer style={styles.footer}>
      <div style={styles.inner}>
        <span style={styles.text}>© {new Date().getFullYear()} Your Name. Built with React.</span>
        <a href="#top" style={styles.backToTop}>
          Back to top
        </a>
      </div>
    </footer>
  );
}

const styles: Record<string, React.CSSProperties> = {
  footer: {
    borderTop: '1px solid var(--border)',
  },
  inner: {
    maxWidth: 'var(--container)',
    margin: '0 auto',
    padding: '24px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    gap: 12,
  },
  text: {
    fontSize: 13,
    color: 'var(--ink-faint)',
  },
  backToTop: {
    fontSize: 13,
    fontWeight: 600,
    color: 'var(--ink-muted)',
    textDecoration: 'none',
  },
};
