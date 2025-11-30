import SectionHeading from '@/components/SectionHeading';
import DestinationCard from '@/components/DestinationCard';
import { destinations } from '@/data/destinations';
import styles from './DestinationsSection.module.scss';

export default function DestinationsSection() {
  return (
    <section id="destinations" className="section section-alt">
      <div className="container">
        <SectionHeading
          subtitle="Explore Kenya"
          title="Our Destinations"
        />
        
        <div className={styles.grid}>
          {destinations.map((destination) => (
            <DestinationCard key={destination.slug} destination={destination} />
          ))}
        </div>
      </div>
    </section>
  );
}
