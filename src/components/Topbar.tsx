import { Link } from 'react-router-dom';
import { MenuIcon } from './icons';

export function Topbar({ onOpenMobileMenu }: { onOpenMobileMenu: () => void }) {
  return (
    <header className="topbar">
      <button type="button" className="topbar-menu-btn" onClick={onOpenMobileMenu} aria-label="Open menu">
        <MenuIcon />
      </button>
      <span className="topbar-spacer" />
      <Link to="/contact" className="btn-primary" style={styles.cta}>
        Let's talk
      </Link>
    </header>
  );
}

const styles: Record<string, React.CSSProperties> = {
  cta: {
    textDecoration: 'none',
    fontSize: 13,
    fontWeight: 600,
    color: 'var(--accent-fg)',
    background: 'var(--accent-gradient)',
    padding: '9px 18px',
    borderRadius: 999,
  },
};
