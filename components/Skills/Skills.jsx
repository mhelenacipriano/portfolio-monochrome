import styles from './Skills.module.scss';
import { skills } from '@/data/content';

export default function Skills() {
  return (
    <section id="skills" className={styles.section}>
      <div className={styles.eyebrow}>{skills.eyebrow}</div>
      <h2 className={styles.heading}>{skills.heading}</h2>
      <div className={styles.groups}>
        {skills.groups.map((group) => (
          <div key={group.label} className={styles.group}>
            <div className={styles.label}>{group.label}</div>
            <div className={styles.items}>
              {group.items.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
