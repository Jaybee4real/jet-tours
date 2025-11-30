'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import Image from 'next/image';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import styles from './GalleryCarousel.module.scss';

export default function GalleryCarousel({ items }) {
  return (
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
            <div className={styles.slideContent}>
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
                  <div className={styles.videoThumbnail}>
                    <Image
                      src={item.thumbnail}
                      alt={item.title}
                      fill
                      className={styles.image}
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                    <div className={styles.playButton}>
                      <svg width="48" height="48" viewBox="0 0 48 48" fill="white">
                        <circle cx="24" cy="24" r="24" fill="rgba(0,0,0,0.6)" />
                        <polygon points="18,14 18,34 34,24" fill="white" />
                      </svg>
                    </div>
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
  );
}
