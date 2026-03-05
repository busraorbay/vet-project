import styles from '@/styles/Contact.module.css'
import Image from 'next/image'
import LocationMap from '@/components/LocationMap'

export default function Contact() {
  return (
    <main className={styles.contact}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroImageWrapper}>
         <Image 
        src="https://images.unsplash.com/photo-1472491235688-bdc81a63246e?w=1200&q=80"            alt="Veteriner hizmetleri"
                    fill
                    style={{ objectFit: 'cover' }}
                    priority
                  />
        </div>
        <div className={styles.waveDivider}>
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 0L60 10C120 20 240 40 360 46.7C480 53 600 47 720 43.3C840 40 960 40 1080 46.7C1200 53 1320 67 1380 73.3L1440 80V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0V0Z" fill="white"/>
          </svg>
        </div>
        <div className={styles.heroContent}>
          <h1>İletişim</h1>
        </div>
      </section>

      {/* Intro Section */}
      <section className={styles.intro}>
        <div className="container">
          <h2>Bizimle İletişime Geçin</h2>
          <p>Evcil dostlarınızın sağlığı için sorularınızı bize iletin. Uzman ekibimiz size yardımcı olmaktan mutluluk duyar.</p>
        </div>
      </section>

      {/* Contact Info Cards - LocationMap ile Uyumlu */}
      <section className={styles.contactInfo}>
        <div className="container">
          <div className={styles.infoGrid}>
            {/* Telefon Kartı */}
            <div className={styles.infoCard}>
              <div className={styles.cardIcon}>
                <svg viewBox="0 0 24 24" fill="none">
                  <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" fill="currentColor"/>
                </svg>
              </div>
              <h3>Telefon</h3>
              <p className={styles.emergency}>7/24 Acil Servis</p>
              <div className={styles.phoneFlex}>
              <a href="tel:+905012789444">0501 278 94 44</a>
                            <a href="tel:+902124415895">0212 441 58 95</a></div>

            </div>

            {/* Email Kartı */}
            <div className={styles.infoCard}>
              <div className={styles.cardIcon}>
                <svg viewBox="0 0 24 24" fill="none">
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" fill="currentColor"/>
                </svg>
              </div>
              <h3>E-posta</h3>
              <p>Sorularınız için</p>
              <a href="mailto:info@londravet.com">info@londravet.com</a>
            </div>

            {/* Adres Kartı */}
            <div className={styles.infoCard}>
              <div className={styles.cardIcon}>
                <svg viewBox="0 0 24 24" fill="none">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" fill="currentColor"/>
                </svg>
              </div>
              <h3>Adresimiz</h3>
              <p>Bahçelievler, Adnan Kahveci Blv. No:85/B, 34000 Bahçelievler/İstanbul</p>
              <a href="https://www.google.com/maps/dir//41.002140715576544,28.863871681832357" target="_blank" rel="noopener noreferrer">
                Yol Tarifi Al →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* LocationMap Component */}
      <LocationMap />
    </main>
  )
}