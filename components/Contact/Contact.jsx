import styles from './Contact.module.scss';
import { contact } from '@/data/content';

export default function Contact() {
  return (
    <section id="contact" className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.eyebrow}>{contact.eyebrow}</div>
        <h2 className={styles.heading}>{contact.heading}</h2>
        <p className={styles.paragraph}>{contact.paragraph}</p>
        <div className={styles.links}>
          {contact.links.map((link) => (
            <a key={link.label} href={link.href} className={styles.link}>
              {link.label} →
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
