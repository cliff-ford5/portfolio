import { Fragment } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  ChevronsLeftIcon,
  ChevronsRightIcon,
  CodeIcon,
  CpuIcon,
  DatabaseIcon,
  HomeIcon,
  MailIcon,
  SmartphoneIcon,
  StarIcon,
} from './icons';

// Same structural pattern as ../crm/src/components/Rail.tsx — a screen key
// + path table, an ungrouped landing item, a grouped middle section, more
// ungrouped items after — not just visually similar, the same shape.
export type ScreenKey = 'about' | 'web' | 'mobile' | 'embedded' | 'data' | 'skills' | 'contact';

export const SCREEN_PATHS: Record<ScreenKey, string> = {
  about: '/',
  web: '/web',
  mobile: '/mobile',
  embedded: '/embedded',
  data: '/data',
  skills: '/skills',
  contact: '/contact',
};

type NavGroup = 'modules' | null;

const GROUP_LABELS: Record<Exclude<NavGroup, null>, string> = {
  modules: 'Project Modules',
};

type NavItem = {
  screen: ScreenKey;
  label: string;
  group: NavGroup;
  icon: (props: { className?: string }) => React.ReactNode;
};

const NAV_ITEMS: NavItem[] = [
  { screen: 'about', label: 'About Me', group: null, icon: HomeIcon },
  { screen: 'web', label: 'Web', group: 'modules', icon: CodeIcon },
  { screen: 'mobile', label: 'Mobile', group: 'modules', icon: SmartphoneIcon },
  { screen: 'embedded', label: 'Embedded / IoT', group: 'modules', icon: CpuIcon },
  { screen: 'data', label: 'Data & Migrations', group: 'modules', icon: DatabaseIcon },
  { screen: 'skills', label: 'Skills', group: null, icon: StarIcon },
  { screen: 'contact', label: 'Contact', group: null, icon: MailIcon },
];

export function screenFromPath(pathname: string): ScreenKey | null {
  const entry = (Object.entries(SCREEN_PATHS) as [ScreenKey, string][]).find(([, path]) => pathname === path);
  return entry ? entry[0] : null;
}

type SidebarProps = {
  collapsed: boolean;
  onToggleCollapsed: () => void;
  mobileOpen: boolean;
  onCloseMobile: () => void;
};

export function Sidebar({ collapsed, onToggleCollapsed, mobileOpen, onCloseMobile }: SidebarProps) {
  const location = useLocation();
  const active = screenFromPath(location.pathname);

  return (
    <nav className={`rail${collapsed ? ' rail-collapsed' : ''}${mobileOpen ? ' rail-mobile-open' : ''}`} aria-label="Primary">
      <div className="rail-header">
        <button
          type="button"
          className="rail-collapse-toggle"
          onClick={onToggleCollapsed}
          aria-label={collapsed ? 'Expand sidebar' : 'Collapse sidebar'}
          title={collapsed ? 'Expand sidebar' : 'Collapse sidebar'}
        >
          {collapsed ? <ChevronsRightIcon /> : <ChevronsLeftIcon />}
        </button>
      </div>

      <div className="rail-brand">
        <span className="rail-brand-mark">YN</span>
        {!collapsed && <span className="rail-brand-name">Your Name</span>}
      </div>

      <ul className="rail-nav">
        {(() => {
          let prevGroup: NavGroup | 'start' = 'start';
          return NAV_ITEMS.map((item) => {
            const isNewGroup = item.group !== prevGroup;
            const showDivider = prevGroup !== 'start' && isNewGroup;
            const groupLabel = isNewGroup && item.group !== null ? GROUP_LABELS[item.group] : null;
            prevGroup = item.group;
            const Icon = item.icon;
            return (
              <Fragment key={item.screen}>
                {showDivider && <li className="rail-divider" role="presentation" />}
                {groupLabel && !collapsed && <li className="rail-group-label">{groupLabel}</li>}
                <li>
                  <Link
                    className="rail-link"
                    to={SCREEN_PATHS[item.screen]}
                    aria-current={active === item.screen ? 'page' : undefined}
                    title={collapsed ? item.label : undefined}
                    onClick={onCloseMobile}
                  >
                    <Icon />
                    {!collapsed && item.label}
                  </Link>
                </li>
              </Fragment>
            );
          });
        })()}
      </ul>
    </nav>
  );
}
