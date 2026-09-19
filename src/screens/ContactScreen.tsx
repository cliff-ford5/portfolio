import { GithubIcon, LinkedinIcon, MailIcon } from '../components/icons';

const SOCIALS = [
  { icon: MailIcon, label: 'Email', href: 'mailto:you@example.com' },
  { icon: GithubIcon, label: 'GitHub', href: 'https://github.com/your-username' },
  { icon: LinkedinIcon, label: 'LinkedIn', href: 'https://linkedin.com/in/your-profile' },
];

// The one place the gradient covers a whole surface, not just text/borders
// — a deliberate "wow" moment for the CTA, not overused elsewhere on the
// site. White-on-gradient inverts the usual button colors (white pill,
// dark text) since a gradient-on-gradient button would disappear.
export function ContactScreen() {
  return (
    <div style={styles.card}>
      <p style={styles.eyebrow}>Contact</p>
      <h1 style={styles.heading}>Have a project in mind?</h1>
      <p style={styles.subhead}>
        I'm open to freelance work and new opportunities — reach out and let's talk about what you're building.
      </p>

      <a href="mailto:you@example.com" className="btn-primary" style={styles.emailBtn}>
        <MailIcon className="icon-sm" />
        you@example.com
      </a>

      <div style={styles.socialRow}>
        {SOCIALS.map((s) => (
          <a key={s.label} href={s.href} className="social-link" style={styles.socialLink} aria-label={s.label}>
            <s.icon className="icon-sm" />
          </a>
        ))}
      </div>
    </div>
  );
}

const styles: Record<string, React.CSSProperties> = {
  card: {
    background: 'var(--accent-gradient)',
    color: '#ffffff',
    borderRadius: 'var(--radius-lg)',
    padding: 'clamp(36px, 6vw, 64px)',
    textAlign: 'center',
    maxWidth: 640,
    margin: '0 auto',
    boxShadow: '0 24px 64px var(--accent-glow)',
  },
  eyebrow: {
    fontSize: 13,
    fontWeight: 700,
    letterSpacing: 1.2,
    textTransform: 'uppercase',
    color: 'rgba(255, 255, 255, 0.85)',
    marginBottom: 14,
  },
  heading: {
    fontSize: 'clamp(24px, 3.2vw, 32px)',
    fontWeight: 700,
    letterSpacing: -0.5,
    marginBottom: 14,
    color: '#ffffff',
  },
  subhead: {
    fontSize: 15,
    lineHeight: 1.6,
    color: 'rgba(255, 255, 255, 0.85)',
    maxWidth: 420,
    margin: '0 auto 28px',
  },
  emailBtn: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: 8,
    textDecoration: 'none',
    fontSize: 15,
    fontWeight: 700,
    color: 'var(--accent-from)',
    background: '#ffffff',
    padding: '14px 28px',
    borderRadius: 999,
    marginBottom: 28,
  },
  socialRow: {
    display: 'flex',
    justifyContent: 'center',
    gap: 12,
  },
  socialLink: {
    width: 42,
    height: 42,
    borderRadius: '50%',
    background: 'rgba(255, 255, 255, 0.16)',
    color: '#ffffff',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    textDecoration: 'none',
  },
};
