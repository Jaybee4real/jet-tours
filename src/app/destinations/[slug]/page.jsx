'use client';

import { useParams, useRouter } from 'next/navigation';
import Image from 'next/image';
import { destinationsDetailed } from '@/data/destinationsDetailed';
import PrimaryButton from '@/components/PrimaryButton';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import styles from './page.module.scss';
import { useState } from 'react';
import ModalShell from '@/components/ModalShell';

export default function DestinationDetailPage() {
  const params = useParams();
  const router = useRouter();
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const destination = destinationsDetailed[params.slug];

  if (!destination) {
    return (
      <div className={styles.notFound}>
        <Navbar onBookingClick={() => setIsBookingModalOpen(true)} />
        <div className={styles.notFoundContent}>
          <h1>Destination Not Found</h1>
          <p>Sorry, we couldn&apos;t find the destination you&apos;re looking for.</p>
          <PrimaryButton onClick={() => router.push('/')}>
            Return Home
          </PrimaryButton>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className={styles.page}>
      <Navbar onBookingClick={() => setIsBookingModalOpen(true)} />
      
      <main className={styles.main}>
        {/* Hero Section */}
        <section className={styles.hero}>
          <div className={styles.heroImageWrapper}>
            <Image
              src={destination.image}
              alt={destination.name}
              fill
              priority
              className={styles.heroImage}
              sizes="100vw"
            />
            <div className={styles.heroOverlay}></div>
          </div>
          <div className={styles.heroContent}>
            <div className="container">
              <h1 className={styles.heroTitle}>{destination.name}</h1>
              <p className={styles.heroSummary}>{destination.summary}</p>
              <div className={styles.heroCta}>
                <PrimaryButton 
                  variant="primary" 
                  size="large"
                  onClick={() => setIsBookingModalOpen(true)}
                >
                  Book This Experience
                </PrimaryButton>
                <PrimaryButton 
                  variant="secondary" 
                  size="large"
                  onClick={() => router.push('/#destinations')}
                >
                  View All Destinations
                </PrimaryButton>
              </div>
            </div>
          </div>
        </section>

        {/* Overview Section */}
        <section className={styles.overview}>
          <div className="container">
            <div className={styles.overviewGrid}>
              <div className={styles.overviewContent}>
                <h2>Overview</h2>
                <p className={styles.description}>{destination.fullDescription}</p>
                
                {destination.highlights && (
                  <div className={styles.highlights}>
                    <h3>Highlights</h3>
                    <ul>
                      {destination.highlights.map((highlight, index) => (
                        <li key={index}>
                          <span className={styles.checkmark}>✓</span>
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              <div className={styles.infoCards}>
                {destination.bestTimeToVisit && (
                  <div className={styles.infoCard}>
                    <h3>Best Time to Visit</h3>
                    <p>{destination.bestTimeToVisit}</p>
                  </div>
                )}
                
                {destination.entryFees && (
                  <div className={styles.infoCard}>
                    <h3>Entry Fees</h3>
                    <p>{destination.entryFees}</p>
                  </div>
                )}
                
                {destination.gettingThere && (
                  <div className={styles.infoCard}>
                    <h3>Getting There</h3>
                    <p>{destination.gettingThere}</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Wildlife Section */}
        {destination.wildlife && (
          <section className={styles.wildlife}>
            <div className="container">
              <h2>Wildlife & Nature</h2>
              <p>{destination.wildlife}</p>
            </div>
          </section>
        )}

        {/* Activities Section */}
        {destination.activities && destination.activities.length > 0 && (
          <section className={styles.activities}>
            <div className="container">
              <h2>Activities & Experiences</h2>
              <div className={styles.activitiesGrid}>
                {destination.activities.map((activity, index) => (
                  <div key={index} className={styles.activityCard}>
                    <span className={styles.activityIcon}>🎯</span>
                    <p>{activity}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Accommodation Section */}
        {destination.accommodation && (
          <section className={styles.accommodation}>
            <div className="container">
              <h2>Accommodation</h2>
              <p>{destination.accommodation}</p>
            </div>
          </section>
        )}

        {/* Tips Section */}
        {destination.tips && destination.tips.length > 0 && (
          <section className={styles.tips}>
            <div className="container">
              <h2>Travel Tips</h2>
              <ul className={styles.tipsList}>
                {destination.tips.map((tip, index) => (
                  <li key={index}>
                    <span className={styles.tipIcon}>💡</span>
                    {tip}
                  </li>
                ))}
              </ul>
            </div>
          </section>
        )}

        {/* CTA Section */}
        <section className={styles.cta}>
          <div className="container">
            <h2>Ready to Experience {destination.name}?</h2>
            <p>Book your safari adventure today and create memories that will last a lifetime.</p>
            <PrimaryButton 
              variant="primary" 
              size="large"
              onClick={() => setIsBookingModalOpen(true)}
            >
              Book Now
            </PrimaryButton>
          </div>
        </section>
      </main>

      <Footer />

      {/* Booking Modal */}
      <ModalShell
        isOpen={isBookingModalOpen}
        onClose={() => setIsBookingModalOpen(false)}
        title="Book Your Safari"
      >
        <div className={styles.modalContent}>
          <p className={styles.modalDescription}>
            Fill out the booking form below and our team will get back to you within 24 hours to confirm your safari adventure.
          </p>
          <div className={styles.iframeWrapper}>
            <iframe
              src="https://docs.google.com/forms/d/e/YOUR_FORM_ID/viewform?embedded=true"
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
            If the form doesn&apos;t load, please contact us directly at{' '}
            <a href="mailto:info@jettourssafari.com">info@jettourssafari.com</a>
          </p>
        </div>
      </ModalShell>
    </div>
  );
}
