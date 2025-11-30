'use client';

import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import HeroSection from '@/sections/HeroSection';
import ServicesSection from '@/sections/ServicesSection';
import DestinationsSection from '@/sections/DestinationsSection';
import GallerySection from '@/sections/GallerySection';
import PartnersSection from '@/sections/PartnersSection';
import ModalShell from '@/components/ModalShell';
import styles from './page.module.scss';

export default function Home() {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [isPartnersModalOpen, setIsPartnersModalOpen] = useState(false);

  return (
    <div className={styles.page}>
      <Navbar onBookingClick={() => setIsBookingModalOpen(true)} />
      
      <main className={styles.main}>
        <HeroSection onBookingClick={() => setIsBookingModalOpen(true)} />
        <ServicesSection />
        <DestinationsSection />
        <GallerySection />
        <PartnersSection onPartnerClick={() => setIsPartnersModalOpen(true)} />
      </main>

      <Footer />

      {/* Booking Modal */}
      <ModalShell
        isOpen={isBookingModalOpen}
        onClose={() => setIsBookingModalOpen(false)}
        title="Book Your Safari Experience"
      >
        <div className={styles.modalContent}>
          <p className={styles.modalDescription}>
            Ready to embark on an unforgettable safari adventure? Fill out the form below and our team will get back to you within 24 hours.
          </p>
          <div className={styles.iframeWrapper}>
            <iframe
              src="https://docs.google.com/forms/d/e/YOUR_BOOKING_FORM_ID/viewform?embedded=true"
              width="100%"
              height="600"
              frameBorder="0"
              marginHeight="0"
              marginWidth="0"
              title="Booking Form"
            >
              Loading…
            </iframe>
          </div>
          <p className={styles.fallbackMessage}>
            If the form doesn't load, please contact us directly at{' '}
            <a href="mailto:info@safarikenya.com">info@safarikenya.com</a>
          </p>
        </div>
      </ModalShell>

      {/* Partners Modal */}
      <ModalShell
        isOpen={isPartnersModalOpen}
        onClose={() => setIsPartnersModalOpen(false)}
        title="Become a Partner"
      >
        <div className={styles.modalContent}>
          <p className={styles.modalDescription}>
            Join our network of trusted partners and grow your business with us. Fill out the partnership application form below.
          </p>
          <div className={styles.iframeWrapper}>
            <iframe
              src="https://docs.google.com/forms/d/e/YOUR_PARTNER_FORM_ID/viewform?embedded=true"
              width="100%"
              height="600"
              frameBorder="0"
              marginHeight="0"
              marginWidth="0"
              title="Partnership Form"
            >
              Loading…
            </iframe>
          </div>
          <p className={styles.fallbackMessage}>
            If the form doesn't load, please contact us at{' '}
            <a href="mailto:partners@safarikenya.com">partners@safarikenya.com</a>
          </p>
        </div>
      </ModalShell>
    </div>
  );
}
