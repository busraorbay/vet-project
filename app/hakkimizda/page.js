import LocationMap from '@/components/LocationMap'
import styles from '@/styles/About.module.css'
import Image from 'next/image'

export default function About() {
  return (
    <main className={styles.about}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroImageWrapper}>
          <Image 
            src="https://images.unsplash.com/photo-1576201836106-db1758fd1c97?w=1600&q=80"
            alt="Hakkımızda"
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
          <h1>Hakkımızda</h1>
        </div>
      </section>

      {/* Intro Section */}
      <section className={styles.intro}>
        <div className={styles.container}>
          <h2>Sevgi ve Uzmanlıkla Hizmet Ediyoruz</h2>
          <p>Londra Veteriner Kliniği olarak, evcil dostlarınızın sağlığı için modern tıbbi ekipmanlar ve deneyimli kadromuzla hizmet veriyoruz. Her hastamıza özel yaklaşım ve sevgi dolu bakım anlayışımızla yanınızdayız.</p>
        </div>
      </section>

      {/* Story Section */}
      <section className={styles.story}>
        <div className={styles.container}>
          <div className={styles.storyGrid}>
            <div className={styles.storyText}>
              <h2>Hikayemiz</h2>
              <p>
                2022 yılında küçük bir klinik olarak başladığımız yolculuğumuzda, 
                evcil dostlarımıza olan sevgimiz ve sağlıklarına olan bağlılığımız bizi her zaman ileri taşıdı.
              </p>
              <p>
                Bugün, modern ekipmanlarımız, uzman kadromuz ve geniş hizmet yelpazemizle 
                Bahçelievler'in güvenilir veteriner kliniğiyiz. Her gün onlarca patili dostun 
                sağlığını korumak ve tedavi etmek bizim için bir ayrıcalık.
              </p>
              <p>
                Misyonumuz, evcil hayvanlarınıza en kaliteli veteriner hizmetini sunarak 
                onların sağlıklı ve mutlu bir yaşam sürmesini sağlamaktır.
              </p>
            </div>
            <div className={styles.storyImage}>
              <Image 
                src="https://images.unsplash.com/photo-1581888227599-779811939961?w=800&q=80"
                alt="Veteriner kliniği"
                width={600}
                height={500}
                style={{ objectFit: 'cover', borderRadius: '20px' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className={styles.values}>
        <div className={styles.container}>
          <h2>Değerlerimiz</h2>
          <div className={styles.valuesGrid}>
            <div className={styles.valueCard}>
              <div className={styles.valueIcon}>
                <svg viewBox="0 0 24 24" fill="none">
                  <path d="M20.84 4.61C20.3292 4.099 19.7228 3.69365 19.0554 3.41708C18.3879 3.14051 17.6725 2.99817 16.95 2.99817C16.2275 2.99817 15.5121 3.14051 14.8446 3.41708C14.1772 3.69365 13.5708 4.099 13.06 4.61L12 5.67L10.94 4.61C9.9083 3.57831 8.50903 2.99871 7.05 2.99871C5.59096 2.99871 4.19169 3.57831 3.16 4.61C2.1283 5.64169 1.54871 7.04097 1.54871 8.5C1.54871 9.95903 2.1283 11.3583 3.16 12.39L4.22 13.45L12 21.23L19.78 13.45L20.84 12.39C21.351 11.8792 21.7563 11.2728 22.0329 10.6054C22.3095 9.93789 22.4518 9.22248 22.4518 8.5C22.4518 7.77752 22.3095 7.06211 22.0329 6.39464C21.7563 5.72718 21.351 5.12075 20.84 4.61Z" stroke="currentColor" strokeWidth="2"/>
                </svg>
              </div>
              <h3>Sevgi ve Şefkat</h3>
              <p>Her hayvana kendi dostumuzmuş gibi sevgiyle yaklaşıyoruz</p>
            </div>
            <div className={styles.valueCard}>
              <div className={styles.valueIcon}>
                <svg viewBox="0 0 24 24" fill="none">
                  <path d="M22 10V15C22 20 20 22 15 22H9C4 22 2 20 2 15V9C2 4 4 2 9 2H14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M22 10H18C15 10 14 9 14 6V2L22 10Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3>Profesyonellik</h3>
              <p>Sürekli eğitim ve gelişimle en iyi hizmeti sunuyoruz</p>
            </div>
            <div className={styles.valueCard}>
              <div className={styles.valueIcon}>
                <svg viewBox="0 0 24 24" fill="none">
                  <circle cx="11" cy="11" r="8" stroke="currentColor" strokeWidth="2"/>
                  <path d="M21 21L16.65 16.65" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  <path d="M11 8C12.7 8 14 9.3 14 11" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </div>
              <h3>Modern Teknoloji</h3>
              <p>Son teknoloji ekipmanlarla doğru tanı ve tedavi</p>
            </div>
            <div className={styles.valueCard}>
              <div className={styles.valueIcon}>
                <svg viewBox="0 0 24 24" fill="none">
                  <path d="M16 21V19C16 17.9391 15.5786 16.9217 14.8284 16.1716C14.0783 15.4214 13.0609 15 12 15H5C3.93913 15 2.92172 15.4214 2.17157 16.1716C1.42143 16.9217 1 17.9391 1 19V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <circle cx="8.5" cy="7" r="4" stroke="currentColor" strokeWidth="2"/>
                  <path d="M20 8V14M23 11H17" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </div>
              <h3>Güven</h3>
              <p>Şeffaf iletişim ve dürüst yaklaşım</p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className={styles.stats}>
        <div className={styles.container}>
          <div className={styles.statsGrid}>
            <div className={styles.statCard}>
              <h3>5+</h3>
              <p>Uzman Hekim</p>
            </div>
            <div className={styles.statCard}>
              <h3>5,000+</h3>
              <p>Mutlu Hasta</p>
            </div>
            <div className={styles.statCard}>
              <h3>1000+</h3>
              <p>Başarılı Operasyon</p>
            </div>
            <div className={styles.statCard}>
              <h3>7/24</h3>
              <p>Acil Servis</p>
            </div>
          </div>
        </div>
      </section>

      <LocationMap />
    </main>
  )
}