import styles from './Projects.module.scss';
import { projectsSection } from '@/data/content';
import { projects } from '@/data/projects';

export default function Projects() {
  return (
    <section id="projects" className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.eyebrow}>{projectsSection.eyebrow}</div>
        <h2 className={styles.heading}>{projectsSection.heading}</h2>
        <p className={styles.subheading}>{projectsSection.subheading}</p>
        <div className={styles.grid}>
          {projects.map((p) => (
            <a key={p.num} href={p.link} className={styles.card}>
              <div className={styles.num}>{p.num}</div>
              <div className={styles.name}>{p.name}</div>
              <div className={styles.desc}>{p.desc}</div>
              <div className={styles.tech}>{p.tech} →</div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
