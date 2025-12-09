'use client'
import styles from '@/styles/LocationMap.module.css'

export default function LocationMap() {
  return (
    <section className={styles.locationSection}>
      <div className={styles.container}>
        <div className={styles.sectionHeader}>
          <h2>Bize Ulaşın</h2>
          <p>Bahçelievler'de sizlere hizmet veriyoruz</p>
        </div>

        {/* Google Maps */}
        <div className={styles.mapContainer}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3009.9!2d28.863871681832357!3d41.002140715576544!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f17!3m3!1m2!1s0x0%3A0x0!2zNDHCsDAwJzA3LjciTiAyOMKwNTEnNDkuOSJF!5e0!3m2!1str!2str!4v1234567890!5m2!1str!2str&markers=color:red%7Clabel:L%7C41.002140715576544,28.863871681832357"
            width="100%"
            height="100%"
            style={{ border: 0, borderRadius: '15px' }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Londra Veteriner Kliniği Harita"
          />
        </div>

        {/* Konum Bilgisi - Harita Altında */}
        <div className={styles.locationInfo}>
          <div className={styles.locationCard}>
            <svg viewBox="0 0 24 24" fill="none">
              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" fill="currentColor"/>
            </svg>
            <div className={styles.locationText}>
              <h3>Londra Veteriner Kliniği</h3>
              <p>Bahçelievler Mah, Bahçelievler, İstanbul</p>
            </div>
            <a 
              href="https://www.google.com/maps/dir//41.002140715576544,28.863871681832357" 
              target="_blank" 
              rel="noopener noreferrer"
              className={styles.directionBtn}
            >
              Yol Tarifi Al
              <svg viewBox="0 0 20 20" fill="none">
                <path d="M7.5 15L12.5 10L7.5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </div>
        </div>

    
      </div>
    </section>
  )
}