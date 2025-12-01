'use client';

import { useState } from 'react';
import Image from 'next/image';
import SectionHeading from '@/components/SectionHeading';
import LoadingSpinner from '@/components/LoadingSpinner';
import { galleryItems } from '@/data/gallery';
import styles from './GallerySection.module.scss';

export default function GallerySection() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loadedItems, setLoadedItems] = useState({});

  const openModal = (index) => {
    setCurrentIndex(index);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % galleryItems.length);
  };

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? galleryItems.length - 1 : prevIndex - 1
    );
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Escape') closeModal();
    if (e.key === 'ArrowRight') goToNext();
    if (e.key === 'ArrowLeft') goToPrevious();
  };

  return (
    <section id="gallery" className="section">
      <div className="container">
        <SectionHeading
          subtitle="Memories"
          title="Safari Gallery"
        />
        
        <div className={styles.galleryWrapper}>
          <div className={styles.galleryGrid}>
            {galleryItems.slice(0, 8).map((item, index) => (
              <div 
                key={item.id} 
                className={styles.galleryItem}
                onClick={() => openModal(index)}
              >
                {!loadedItems[item.id] && <LoadingSpinner aspectRatio="1/1" />}
                {item.type === 'image' ? (
                  <Image
                    src={item.src}
                    alt={item.title}
                    fill
                    className={styles.galleryImage}
                    sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
                    onLoad={() => setLoadedItems(prev => ({ ...prev, [item.id]: true }))}
                    style={{ opacity: loadedItems[item.id] ? 1 : 0 }}
                  />
                ) : (
                  <>
                    <video 
                      className={styles.galleryVideo}
                      muted
                      playsInline
                      preload="metadata"
                      onLoadedMetadata={() => setLoadedItems(prev => ({ ...prev, [item.id]: true }))}
                      onError={(e) => {
                        console.error('Video load error:', item.src, e);
                        setLoadedItems(prev => ({ ...prev, [item.id]: true }));
                      }}
                      style={{ opacity: loadedItems[item.id] ? 1 : 0 }}
                    >
                      <source src={item.src} type="video/mp4" />
                    </video>
                    {loadedItems[item.id] && (
                      <div className={styles.playIcon}>
                        <svg width="48" height="48" viewBox="0 0 48 48" fill="white">
                          <circle cx="24" cy="24" r="24" fill="rgba(0,0,0,0.6)" />
                          <polygon points="18,14 18,34 34,24" fill="white" />
                        </svg>
                      </div>
                    )}
                  </>
                )}
              </div>
            ))}
          </div>
          <div className={styles.fadeOverlay}></div>
          <button className={styles.viewGalleryButton} onClick={() => openModal(0)}>
            View Full Gallery
          </button>
        </div>
      </div>

      {/* Fullscreen Modal */}
      {isModalOpen && (
        <div 
          className={styles.modal} 
          onClick={closeModal}
          onKeyDown={handleKeyDown}
          tabIndex={0}
        >
          <button className={styles.closeButton} onClick={closeModal}>
            ×
          </button>
          
          <div className={styles.modalWrapper}>
            <button 
              className={`${styles.navButton} ${styles.navButtonLeft}`} 
              onClick={(e) => { e.stopPropagation(); goToPrevious(); }}
            >
              ‹
            </button>
            
            <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
              {galleryItems[currentIndex].type === 'image' ? (
                <div className={styles.modalImageWrapper}>
                  <Image
                    src={galleryItems[currentIndex].src}
                    alt={galleryItems[currentIndex].title}
                    fill
                    className={styles.modalImage}
                    sizes="100vw"
                  />
                </div>
              ) : (
                <video 
                  className={styles.modalVideo}
                  controls
                  autoPlay
                  key={currentIndex}
                >
                  <source src={galleryItems[currentIndex].src} type="video/mp4" />
                </video>
              )}
            </div>
            
            <button 
              className={`${styles.navButton} ${styles.navButtonRight}`} 
              onClick={(e) => { e.stopPropagation(); goToNext(); }}
            >
              ›
            </button>
          </div>
          
          <div className={styles.counter}>
            {currentIndex + 1} / {galleryItems.length}
          </div>
        </div>
      )}
    </section>
  );
}
