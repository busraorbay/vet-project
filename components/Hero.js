import styles from '@/styles/Hero.module.css'
import Image from 'next/image'

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.heroContent}>
        <div className={styles.heroText}>
          <h1 className={styles.heroTitle}>
            Sevimli Dostlarınız İçin
            <span className={styles.highlight}> En İyi Bakım</span>
          </h1>
          <p className={styles.heroSubtitle}>
            Londra Veteriner Kliniği olarak, uzman kadromuz ve modern ekipmanlarımızla evcil dostlarınızın sağlığı için 7/24 hizmetinizdeyiz.
          </p>
          <div className={styles.heroButtons}>
            <a href="/iletisim" className={styles.primaryBtn}>
              Randevu Al
            </a>
            <a href="/hizmetlerimiz" className={styles.secondaryBtn}>
              Hizmetlerimiz
            </a>
          </div>
        </div>
        <div className={styles.heroImage}>
          <div className={styles.imageWrapper}>
            <Image 
              src="https://images.unsplash.com/photo-1450778869180-41d0601e046e?w=800&q=80"
              alt="Mutlu köpek ve kedi"
              width={600}
              height={600}
              priority
              style={{ objectFit: 'cover' }}
            />
            <div className={styles.floatingBadge}>
              <span>🏆</span>
              <div>
                <strong>Profesyonel</strong>
                <small>Hizmet</small>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.decorativeShapes}>
        <div className={styles.shape1}></div>
        <div className={styles.shape2}></div>
        <div className={styles.shape3}></div>
      </div>
    </section>
  )
}