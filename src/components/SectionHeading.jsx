import styles from './SectionHeading.module.scss';

export default function SectionHeading({ 
  title, 
  subtitle, 
  centered = true 
}) {
  return (
    <div className={`${styles.heading} ${centered ? styles.centered : ''}`}>
      {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
      <h2 className={styles.title}>{title}</h2>
      <div className={styles.divider}></div>
    </div>
  );
}
