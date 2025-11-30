import styles from './ServiceCard.module.scss';

export default function ServiceCard({ service }) {
  return (
    <div className={styles.card}>
      <div className={styles.icon}>{service.icon}</div>
      <h3 className={styles.title}>{service.title}</h3>
      <p className={styles.description}>{service.description}</p>
      
      {service.features && (
        <ul className={styles.features}>
          {service.features.map((feature, index) => (
            <li key={index}>{feature}</li>
          ))}
        </ul>
      )}

      {service.tiers && (
        <div className={styles.tiers}>
          <h4 className={styles.tiersHeading}>Available Options:</h4>
          {service.tiers.map((tier, index) => (
            <div key={index} className={styles.tier}>
              <h5 className={styles.tierName}>{tier.name}</h5>
              <p className={styles.tierDescription}>{tier.description}</p>
              {tier.highlights && (
                <ul className={styles.tierHighlights}>
                  {tier.highlights.map((highlight, idx) => (
                    <li key={idx}>{highlight}</li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
