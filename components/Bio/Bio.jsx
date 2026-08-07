import styles from './Bio.module.scss';
import { bio } from '@/data/content';

export default function Bio() {
  return (
    <section id="bio" className={styles.section}>
      <div className={styles.shape} aria-hidden="true" />
      <div className={styles.eyebrow}>{bio.eyebrow}</div>
      <h1 className={styles.heading}>
        {bio.heading.map((line, i) => (
          <span key={i}>
            {line}
            {i < bio.heading.length - 1 && <br />}
          </span>
        ))}
      </h1>
      <p className={styles.paragraph}>{bio.paragraph}</p>
      <div className={styles.languages}>
        {bio.languages.map((item) => (
          <div key={item.language} className={styles.language}>
            <div className={styles.languageLabel}>{item.language}</div>
            <div className={styles.languageLevel}>{item.level}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
