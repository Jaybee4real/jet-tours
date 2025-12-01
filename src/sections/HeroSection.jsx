'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import PrimaryButton from '@/components/PrimaryButton';
import styles from './HeroSection.module.scss';

const heroImages = [
  {
    src: '/images/gallery/maasai-mara.jpg',
    alt: 'Maasai Mara - Wildlife Safari'
  },
  {
    src: '/images/gallery/tsavo-park.jpeg',
    alt: 'Tsavo National Park - Red Elephants'
  },
  {
    src: '/images/gallery/samburu-national-reserve-kenya.jpg',
    alt: 'Samburu National Reserve'
  },
  {
    src: '/images/gallery/Mount-Kenya.jpg',
    alt: 'Mount Kenya - Scenic Views'
  }
];

export default function HeroSection({ onBookingClick }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        (prevIndex + 1) % heroImages.length
      );
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, []);

  const handleScrollDown = () => {
    const servicesSection = document.getElementById('services');
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className={styles.hero}>
      <div className={styles.imageWrapper}>
        {heroImages.map((image, index) => (
          <div
            key={index}
            className={`${styles.slideWrapper} ${
              index === currentImageIndex ? styles.active : ''
            }`}
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              priority={index === 0}
              className={styles.heroImage}
              sizes="100vw"
            />
          </div>
        ))}
        <div className={styles.overlay}></div>
      </div>
      
      <div className={styles.content}>
        <div className={styles.container}>
          <h1 className={styles.title}>
            J.E.T Tours and Safari
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

      {/* Slider Navigation Dots */}
      <div className={styles.sliderDots}>
        {heroImages.map((_, index) => (
          <button
            key={index}
            className={`${styles.dot} ${
              index === currentImageIndex ? styles.activeDot : ''
            }`}
            onClick={() => setCurrentImageIndex(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      <div className={styles.scrollIndicator} onClick={handleScrollDown}>
        <div className={styles.mouse}>
          <div className={styles.wheel}></div>
        </div>
        <div className={styles.swipeIcon}>
          <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
            <path d="M20 5L20 30M20 30L15 25M20 30L25 25" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
        <p>Scroll to explore</p>
      </div>
    </section>
  );
}
