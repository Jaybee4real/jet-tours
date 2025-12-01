import styles from './LoadingSpinner.module.scss';

export default function LoadingSpinner({ aspectRatio = '1/1' }) {
  return (
    <div className={styles.skeleton} style={{ aspectRatio }}>
      <div className={styles.shimmer}></div>
    </div>
  );
}
