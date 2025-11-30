import SectionHeading from '@/components/SectionHeading';
import GalleryCarousel from '@/components/GalleryCarousel';
import { galleryItems } from '@/data/gallery';
import styles from './GallerySection.module.scss';

export default function GallerySection() {
  return (
    <section id="gallery" className="section">
      <div className="container">
        <SectionHeading
          subtitle="Memories"
          title="Safari Gallery"
        />
        
        <div className={styles.carouselContainer}>
          <GalleryCarousel items={galleryItems} />
        </div>
      </div>
    </section>
  );
}
