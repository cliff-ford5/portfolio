export type SkillGroup = {
  title: string;
  items: string[];
};

// Pulled from the real project stack used across this portfolio's entries
// — edit freely, especially the embedded/data rows which are generic
// placeholders (the specific tools used in those projects weren't detailed
// here).
export const SKILL_GROUPS: SkillGroup[] = [
  {
    title: 'Frontend & Mobile',
    items: ['React', 'React Native', 'TypeScript', 'Expo', 'Vite', 'React Router'],
  },
  {
    title: 'Backend & Data',
    items: ['PostgreSQL', 'Supabase', 'Row-Level Security', 'SQL', '[ETL / scripting tools you used]'],
  },
  {
    title: 'Embedded & Hardware',
    items: ['[C / C++]', '[Microcontroller platform]', '[Protocols — I2C, MQTT, BLE, etc.]'],
  },
  {
    title: 'Tools & Practices',
    items: ['Git', 'CI/CD', 'RESTful APIs', 'Agile / iterative delivery'],
  },
];
