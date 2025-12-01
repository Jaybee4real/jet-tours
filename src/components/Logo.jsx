import styles from './Logo.module.scss';

export default function Logo({ variant = 'default', size = 'medium' }) {
  const sizeClass = styles[`size-${size}`];
  const variantClass = styles[`variant-${variant}`];

  return (
    <div className={`${styles.logoContainer} ${sizeClass} ${variantClass}`}>
      <div className={styles.logoIcon}>
        <svg viewBox="0 0 40 40" className={styles.logoSvg}>
          {/* Airplane icon */}
          <path d="M38 18L22 12L18 2L16 2L18 12L4 8L2 4L0 4L2 10L0 16L2 16L4 12L18 16L16 26L18 26L22 16L38 22L40 20L38 18Z" fill="currentColor"/>
        </svg>
      </div>
      <div className={styles.logoTextWrapper}>
        <span className={styles.logoTextTop}>J.E.T TOURS</span>
        <span className={styles.logoTextBottom}>
          <span className={styles.ampersand}>&</span> SAFARI
        </span>
      </div>
      <div className={styles.logoAccent}></div>
    </div>
  );
}
