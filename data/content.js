// Static content for the portfolio. Edit these arrays to update the site copy.

export const nav = [
  { href: '#bio', label: 'Bio' },
  { href: '#experience', label: 'Experience' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#education', label: 'Education' },
  { href: '#contact', label: 'Contact' },
];

export const bio = {
  eyebrow: '01 / BIO',
  heading: [
    'Senior Frontend',
    'Developer.',
    "Interfaces that don't",
    'break under pressure.',
  ],
  paragraph:
    'Shipping scalable React and TypeScript products for distributed teams. I design reusable components, wire up REST and GraphQL without drama, and write tests I actually trust. A stint on the backend (Go, Python, microservices) means I argue about API contracts from both sides of the fence.',
  languages: [
    { language: 'Portuguese', level: 'Native' },
    { language: 'English', level: 'Fluent (C1)' },
    { language: 'French', level: 'Professional' },
  ],
};

export const experience = {
  eyebrow: '02 / EXPERIENCE',
  heading: "Where I've been useful",
  roles: [
    {
      period: 'Apr 2024 – Present',
      title: 'Software Engineer — GoFasti',
      subtitle: '(w/ PlanetBids)',
      bullets: [
        'Develop and maintain complex frontend features using React and TypeScript',
        'Design reusable UI components aligned with scalable architecture patterns',
        'Consume and display REST API data with proper error handling',
        'Implement unit and integration tests for reliability',
      ],
    },
    {
      period: 'Oct 2023 – Apr 2024',
      title: 'Backend Developer — Control IT',
      subtitle: '',
      bullets: [
        'Developed REST APIs using Golang in a microservices architecture',
        'Collaborated with frontend teams on API contracts and data models',
        'Worked with Git and agile workflows (Kanban / Scrumban)',
      ],
    },
    {
      period: 'May 2023 – Sep 2023',
      title: 'Software Developer III — Iteris',
      subtitle: '',
      bullets: [
        'Built responsive web and mobile interfaces using React and React Native',
        'Integrated frontend applications with GraphQL and REST services',
        'Implemented automated tests using Jest and React Testing Library',
        'Worked in cloud-based environments using AWS services',
      ],
    },
  ],
};

export const skills = {
  eyebrow: '03 / SKILLS',
  heading: 'Tools of the trade',
  groups: [
    {
      label: 'Frontend',
      items: ['React', 'Angular', 'TypeScript', 'JavaScript (ES6+)', 'Hooks', 'Responsive UI'],
    },
    {
      label: 'Backend',
      items: ['Node.js', 'Python', 'Go', 'Microservices', 'REST APIs'],
    },
    {
      label: 'Testing & tooling',
      items: ['Jest', 'React Testing Library', 'Git / GitHub', 'Figma', 'Chrome DevTools'],
    },
  ],
};

export const projectsSection = {
  eyebrow: '04 / PROJECTS',
  heading: "Things I've shipped",
  subheading: 'Placeholders — swap in your real project names, screenshots and links.',
};

export const education = {
  eyebrow: '05 / EDUCATION',
  heading: 'Paper trail',
  items: [
    {
      num: '01',
      degree: 'B.Sc. in Electrical and Electronic Engineering',
      school: 'Federal University of Campina Grande',
    },
    {
      num: '02',
      degree: 'Technologist Degree in Information Systems',
      note: '(in progress)',
      school: 'UNIESP Centro Universitário',
    },
  ],
};

export const contact = {
  eyebrow: '06 / CONTACT',
  heading: "Let's build something that doesn't 404.",
  paragraph: 'Open to senior frontend roles and interesting remote collaborations.',
  links: [
    { label: 'mariahelenatw@gmail.com', href: 'mailto:mariahelenatw@gmail.com' },
    { label: '+55 83 99662-0166', href: 'tel:+5583996620166' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/mhelenacp' },
  ],
};

export const site = {
  name: 'MARIA HELENA',
  resumeHref: '/resume_maria.pdf',
};
