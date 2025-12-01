'use client';

import { useState } from 'react';
import Link from 'next/link';
import Logo from './Logo';
import styles from './Navbar.module.scss';

export default function Navbar({ onBookingClick }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navLinks = [
    { href: '#home', label: 'Home' },
    { href: '#services', label: 'Services' },
    { href: '#destinations', label: 'Destinations' },
    { href: '#gallery', label: 'Gallery' },
    { href: '#partners', label: 'Partners' },
  ];

  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <Link href="/" className={styles.logo}>
          <Logo variant="default" size="medium" />
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

        {isMenuOpen && (
          <div 
            className={styles.backdrop} 
            onClick={() => setIsMenuOpen(false)}
          />
        )}

        <div className={`${styles.navMenu} ${isMenuOpen ? styles.active : ''}`}>
          <button
            className={styles.closeButton}
            onClick={() => setIsMenuOpen(false)}
            aria-label="Close menu"
          >
            ×
          </button>

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
