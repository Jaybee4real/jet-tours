import Image from 'next/image';
import PrimaryButton from '@/components/PrimaryButton';
import styles from './HeroSection.module.scss';

export default function HeroSection({ onBookingClick }) {
  const handleScrollDown = () => {
    const servicesSection = document.getElementById('services');
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className={styles.hero}>
      <div className={styles.imageWrapper}>
        <Image
          src="/images/hero-safari.jpg"
          alt="Kenya Safari"
          fill
          priority
          className={styles.heroImage}
          sizes="100vw"
        />
        <div className={styles.overlay}></div>
      </div>
      
      <div className={styles.content}>
        <div className={styles.container}>
          <h1 className={styles.title}>
            Jet tours safari
          </h1>
          <p className={styles.subtitle}>
            Embark on unforgettable safari adventures and experience seamless airport transfers across Kenya&apos;s most spectacular destinations
          </p>
          <div className={styles.cta}>
            <PrimaryButton 
              variant="primary" 
              size="large"
              onClick={onBookingClick}
            >
              Plan Your Safari
            </PrimaryButton>
            <PrimaryButton 
              variant="secondary" 
              size="large"
              onClick={onBookingClick}
            >
              Book Transfer
            </PrimaryButton>
          </div>
        </div>
      </div>

      <div className={styles.scrollIndicator} onClick={handleScrollDown}>
        <div className={styles.mouse}>
          <div className={styles.wheel}></div>
        </div>
        <p>Scroll to explore</p>
      </div>
    </section>
  );
}
