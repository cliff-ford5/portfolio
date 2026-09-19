export type ProjectCategory = 'web' | 'mobile' | 'embedded' | 'data';

export type Project = {
  id: string;
  category: ProjectCategory;
  title: string;
  summary: string;
  stack: string[];
  highlights: string[];
  // True for entries with placeholder copy — real projects the user has
  // done but weren't detailed in this conversation, so the content here is
  // a fill-in-the-blank scaffold, not a fabricated case study.
  placeholder?: boolean;
};

export const CATEGORY_LABEL: Record<ProjectCategory, string> = {
  web: 'Web',
  mobile: 'Mobile',
  embedded: 'Embedded / IoT',
  data: 'Data & Migrations',
};

export const CATEGORY_DESCRIPTION: Record<ProjectCategory, string> = {
  web: 'Full-stack web applications and admin dashboards, built for real businesses.',
  mobile: 'Native mobile apps handling real-world constraints — location, permissions, offline-first UX.',
  embedded: 'Hardware-adjacent work — firmware, sensors, and the software that talks to them.',
  data: 'Migrating, cleaning, and reconciling business data between systems without losing anything that matters.',
};

export const PROJECTS: Project[] = [
  {
    id: 'crm',
    category: 'web',
    title: 'Automotive Service CRM',
    summary:
      'A custom CRM built for a real automotive service business — leads, opportunities, and technician job tracking through a full repair-order pipeline (booking → diagnosis → quotation → parts → work → verification → release).',
    stack: ['React', 'TypeScript', 'Vite', 'Postgres', 'Row-Level Security'],
    highlights: [
      'Full opportunity pipeline mapped to how the shop actually operates, not a generic sales-CRM template',
      'Technician/job assignment with labor cost and work-stage tracking built into the schema',
      'Own design system — no component library, hand-built for full control over the UI',
    ],
  },
  {
    id: 'attendance-app',
    category: 'mobile',
    title: 'Staff Attendance App',
    summary:
      'An internal iOS/Android app for staff check-in/out, task assignment, and leave requests — GPS-verified check-in, automatic checkout when someone leaves the work site, and a full admin review flow.',
    stack: ['React Native', 'Expo', 'Supabase', 'PostgreSQL', 'expo-location'],
    highlights: [
      'Background geofencing that auto-checks-out an employee who leaves the work site without manually checking out',
      'Biometric app lock, offline-tolerant sync, and a full leave-request approval workflow',
      'Distributed internally via direct APK install — no app-store listing needed for an internal tool',
    ],
  },
  {
    id: 'attendance-admin',
    category: 'web',
    title: 'Attendance Admin Dashboard',
    summary:
      "The desk-based counterpart to the attendance app — a real admin console for staff management, attendance records, task oversight, and leave approvals, built for the workflows a phone screen can't do well.",
    stack: ['React', 'TypeScript', 'Vite', 'React Router', 'Supabase'],
    highlights: [
      'Same backend as the mobile app, built as a separate product instead of forcing native components into a browser',
      'CSV export, bulk attendance correction, and multi-select filtering across every list view',
      'Deliberately scoped to what a desktop UI does better than mobile — not a feature-for-feature port',
    ],
  },
  {
    id: 'iot-placeholder',
    category: 'embedded',
    title: '[Embedded / IoT project name]',
    summary:
      '[Add a short summary here — what the device/system did, what problem it solved, and who it was for.]',
    stack: ['[e.g. C / C++]', '[microcontroller]', '[protocol — I2C, MQTT, BLE, etc.]'],
    highlights: ['[Add 2–3 concrete details — sensors used, constraints solved, scale/deployment]'],
    placeholder: true,
  },
  {
    id: 'data-migration-placeholder',
    category: 'data',
    title: 'Salesforce → Zoho CRM Migration',
    summary:
      '[Add a short summary here — approximate data volume, what made the migration hard (custom fields, duplicate records, broken relationships), and the approach taken.]',
    stack: ['[e.g. Salesforce API]', '[e.g. Zoho CRM API]', '[ETL / scripting language used]'],
    highlights: ['[Add concrete outcomes — e.g. records migrated, data issues caught/cleaned, downtime avoided]'],
    placeholder: true,
  },
];
