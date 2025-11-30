import Image from 'next/image';
import PrimaryButton from './PrimaryButton';
import styles from './DestinationCard.module.scss';

export default function DestinationCard({ destination }) {
  return (
    <div className={styles.card}>
      <div className={styles.imageWrapper}>
        <Image
          src={destination.image}
          alt={destination.name}
          fill
          className={styles.image}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className={styles.overlay}></div>
      </div>
      <div className={styles.content}>
        <h3 className={styles.title}>{destination.name}</h3>
        <p className={styles.summary}>{destination.summary}</p>
        {destination.highlights && (
          <ul className={styles.highlights}>
            {destination.highlights.slice(0, 3).map((highlight, index) => (
              <li key={index}>✓ {highlight}</li>
            ))}
          </ul>
        )}
        <PrimaryButton variant="outline" size="small">
          Learn More
        </PrimaryButton>
      </div>
    </div>
  );
}
