import SectionHeading from '@/components/SectionHeading';
import PrimaryButton from '@/components/PrimaryButton';
import { partners, partnershipBenefits } from '@/data/partners';
import Image from 'next/image';
import styles from './PartnersSection.module.scss';

export default function PartnersSection({ onPartnerClick }) {
  return (
    <section id="partners" className="section section-alt">
      <div className="container">
        <SectionHeading
          subtitle="Trusted Partnerships"
          title="Our Partners"
        />
        
        <div className={styles.content}>
          <p className={styles.intro}>
            We collaborate with leading organizations in wildlife conservation, tourism, and hospitality to deliver exceptional safari experiences.
          </p>

          <div className={styles.partnersGrid}>
            {partners.map((partner) => (
              <div key={partner.id} className={styles.partnerCard}>
                <div className={styles.logoWrapper}>
                  <Image
                    src={partner.logo}
                    alt={partner.name}
                    width={150}
                    height={80}
                    className={styles.logo}
                  />
                </div>
                <h4 className={styles.partnerName}>{partner.name}</h4>
                <p className={styles.partnerDescription}>{partner.description}</p>
              </div>
            ))}
          </div>

          <div className={styles.benefits}>
            <h3 className={styles.benefitsTitle}>Partnership Benefits</h3>
            <ul className={styles.benefitsList}>
              {partnershipBenefits.map((benefit, index) => (
                <li key={index}>{benefit}</li>
              ))}
            </ul>
          </div>

          <div className={styles.cta}>
            <PrimaryButton 
              variant="primary" 
              size="large"
              onClick={onPartnerClick}
            >
              Become a Partner
            </PrimaryButton>
          </div>
        </div>
      </div>
    </section>
  );
}
