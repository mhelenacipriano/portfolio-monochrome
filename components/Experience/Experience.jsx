import styles from './Experience.module.scss';
import { experience } from '@/data/content';

export default function Experience() {
  return (
    <section id="experience" className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.eyebrow}>{experience.eyebrow}</div>
        <h2 className={styles.heading}>{experience.heading}</h2>
        <div className={styles.roles}>
          {experience.roles.map((role) => (
            <div key={role.title} className={styles.role}>
              <div className={styles.period}>{role.period}</div>
              <div>
                <div className={styles.title}>
                  {role.title}
                  {role.subtitle && <span className={styles.subtitle}> {role.subtitle}</span>}
                </div>
                <ul className={styles.bullets}>
                  {role.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
