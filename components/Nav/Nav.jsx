'use client';

import { useState } from 'react';
import styles from './Nav.module.scss';
import { nav, site } from '@/data/content';

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <nav className={styles.nav}>
        <div className={styles.logo}>{site.name}</div>
        <div className={styles.links}>
          {nav.map((item) => (
            <a key={item.href} href={item.href} className={styles.link}>
              {item.label}
            </a>
          ))}
          <a href={site.resumeHref} download className={styles.resume}>
            RÉSUMÉ
          </a>
        </div>
        <button
          type="button"
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
          className={styles.hamburger}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span className={styles.bar} />
          <span className={styles.bar} />
        </button>
      </nav>
      <div className={`${styles.mobileMenu} ${menuOpen ? styles.open : ''}`}>
        {nav.map((item) => (
          <a key={item.href} href={item.href} onClick={closeMenu} className={styles.mobileLink}>
            {item.label}
          </a>
        ))}
        <a href={site.resumeHref} download className={styles.mobileResume}>
          RÉSUMÉ
        </a>
      </div>
    </>
  );
}
