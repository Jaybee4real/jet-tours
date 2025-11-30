import SectionHeading from '@/components/SectionHeading';
import ServiceCard from '@/components/ServiceCard';
import { services } from '@/data/services';
import styles from './ServicesSection.module.scss';

export default function ServicesSection() {
  return (
    <section id="services" className="section">
      <div className="container">
        <SectionHeading
          subtitle="What We Offer"
          title="Our Services"
        />
        
        <div className={styles.grid}>
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
}
