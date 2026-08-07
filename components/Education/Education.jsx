import styles from './Education.module.scss';
import { education } from '@/data/content';

export default function Education() {
  return (
    <section id="education" className={styles.section}>
      <div className={styles.eyebrow}>{education.eyebrow}</div>
      <h2 className={styles.heading}>{education.heading}</h2>
      <div className={styles.items}>
        {education.items.map((item) => (
          <div key={item.num} className={styles.item}>
            <div className={styles.num}>{item.num}</div>
            <div>
              <div className={styles.degree}>
                {item.degree}
                {item.note && <span className={styles.note}> {item.note}</span>}
              </div>
              <div className={styles.school}>{item.school}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
