'use client';

import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import Image from 'next/image';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import styles from './GalleryCarousel.module.scss';

export default function GalleryCarousel({ items }) {
  const [selectedMedia, setSelectedMedia] = useState(null);

  const handleMediaClick = (item) => {
    setSelectedMedia(item);
  };

  const closeModal = () => {
    setSelectedMedia(null);
  };

  return (
    <>
      <div className={styles.carouselWrapper}>
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={20}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          loop={true}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
          }}
          className={styles.swiper}
        >
          {items.map((item) => (
            <SwiperSlide key={item.id} className={styles.slide}>
              <div 
                className={styles.slideContent}
                onClick={() => handleMediaClick(item)}
              >
                {item.type === 'image' ? (
                  <div className={styles.imageWrapper}>
                    <Image
                      src={item.src}
                      alt={item.title}
                      fill
                      className={styles.image}
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  </div>
                ) : (
                  <div className={styles.videoWrapper}>
                    <video 
                      className={styles.videoPreview}
                      muted
                      loop
                      playsInline
                    >
                      <source src={item.src} type="video/mp4" />
                    </video>
                    <div className={styles.playButton}>
                      <svg width="48" height="48" viewBox="0 0 48 48" fill="white">
                        <circle cx="24" cy="24" r="24" fill="rgba(0,0,0,0.6)" />
                        <polygon points="18,14 18,34 34,24" fill="white" />
                      </svg>
                    </div>
                  </div>
                )}
                <div className={styles.caption}>
                  <h4>{item.title}</h4>
                  {item.category && <span className={styles.category}>{item.category}</span>}
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Media Modal */}
      {selectedMedia && (
        <div className={styles.modal} onClick={closeModal}>
          <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
            <button className={styles.closeButton} onClick={closeModal}>
              ×
            </button>
            {selectedMedia.type === 'image' ? (
              <div className={styles.modalImageWrapper}>
                <Image
                  src={selectedMedia.src}
                  alt={selectedMedia.title}
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
              >
                <source src={selectedMedia.src} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            )}
            <div className={styles.modalCaption}>
              <h3>{selectedMedia.title}</h3>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
