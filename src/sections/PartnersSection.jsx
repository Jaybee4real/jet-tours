import SectionHeading from '@/components/SectionHeading';
import PrimaryButton from '@/components/PrimaryButton';
import { partnershipBenefits } from '@/data/partners';
import styles from './PartnersSection.module.scss';

export default function PartnersSection({ onPartnerClick }) {
  return (
    <section id="partners" className="section section-alt">
      <div className="container">
        <SectionHeading
          subtitle="Trusted Partnerships"
          title="Partner With Us"
        />
        
        <div className={styles.content}>
          <p className={styles.intro}>
            We collaborate with leading organizations in wildlife conservation, tourism, and hospitality to deliver exceptional safari experiences.
          </p>

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
