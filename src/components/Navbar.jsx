'use client';

import { useState } from 'react';
import Link from 'next/link';
import styles from './Navbar.module.scss';

export default function Navbar({ onBookingClick }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navLinks = [
    { href: '#home', label: 'Home' },
    { href: '#destinations', label: 'Destinations' },
    { href: '#gallery', label: 'Gallery' },
    { href: '#services', label: 'Services' },
    { href: '#partners', label: 'Partners' },
  ];

  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <Link href="/" className={styles.logo}>
          <span className={styles.logoText}>Safari</span>
          <span className={styles.logoAccent}>Kenya</span>
        </Link>

        <button
          className={styles.menuToggle}
          onClick={toggleMenu}
          aria-label="Toggle menu"
          aria-expanded={isMenuOpen}
        >
          <span className={styles.hamburger}></span>
          <span className={styles.hamburger}></span>
          <span className={styles.hamburger}></span>
        </button>

        <div className={`${styles.navMenu} ${isMenuOpen ? styles.active : ''}`}>
          <ul className={styles.navList}>
            {navLinks.map((link) => (
              <li key={link.href} className={styles.navItem}>
                <a
                  href={link.href}
                  className={styles.navLink}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <button
            className={styles.ctaButton}
            onClick={() => {
              onBookingClick();
              setIsMenuOpen(false);
            }}
          >
            Book Now
          </button>
        </div>
      </div>
    </nav>
  );
}
