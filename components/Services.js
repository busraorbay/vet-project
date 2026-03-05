import styles from '@/styles/Services.module.css'
import Image from 'next/image'

export default function ServicesPage() {
  const services = [
    {
      icon: '🔬',
      title: 'Tanı ve Laboratuvar',
      description: 'Kapsamlı kan testleri, idrar analizi, dışkı muayenesi ve biyokimyasal testler ile dostlarınızın sağlığını detaylı şekilde değerlendiriyoruz.',
      features: ['Hemogram', 'Biyokimya Paneli', 'Hormon Testleri', 'Mikrobiyolojik Testler'],
      image: 'https://images.unsplash.com/photo-1582719471137-c3967ffb1c42?w=800&q=80',
      color: '#DC143C'
    },
    {
      icon: '💉',
      title: 'Aşılama ve Koruyucu Sağlık',
      description: 'Düzenli aşı takvimine uygun koruyucu sağlık hizmetleri ve iç-dış parazit kontrolü ile dostlarınızı hastalıklardan koruyoruz.',
      features: ['Karma Aşı', 'Kuduz Aşısı', 'İç-Dış Parazit Kontrolü', 'Düzenli Sağlık Kontrolü'],
      image: 'https://images.unsplash.com/photo-1628009368231-7bb7cfcb0def?w=800&q=80',
      color: '#FF4757'
    },
    {
      icon: '🏥',
      title: 'Cerrahi Operasyonlar',
      description: 'Modern ameliyathane, son teknoloji anestezi ünitesi ve uzman kadromuzla güvenli cerrahi işlemler gerçekleştiriyoruz.',
      features: ['Kısırlaştırma Ameliyatı', 'Yumuşak Doku Cerrahisi', 'Ortopedik Cerrahi', 'Tümör Ameliyatları'],
      image: 'https://images.unsplash.com/photo-1551601651-2a8555f1a136?w=800&q=80',
      color: '#EE5A6F'
    },
    {
      icon: '📷',
      title: 'Görüntüleme Hizmetleri',
      description: 'Dijital röntgen, ultrason ve endoskopi ile detaylı görüntüleme yaparak doğru tanı koyuyoruz.',
      features: ['Dijital Röntgen', 'Ultrasonografi', 'EKG', 'Endoskopi'],
      image: 'https://images.unsplash.com/photo-1530026405186-ed1f139313f8?w=800&q=80',
      color: '#FF6B6B'
    },
    {
      icon: '🦷',
      title: 'Diş ve Ağız Bakımı',
      description: 'Ağız ve diş sağlığı için profesyonel temizlik, tedavi ve cerrahi işlemler uyguluyoruz.',
      features: ['Diş Taşı Temizliği', 'Diş Çekimi', 'Periodontal Tedavi', 'Ağız Cerrahisi'],
      image: 'https://images.unsplash.com/photo-1581888227599-779811939961?w=800&q=80',
      color: '#DC143C'
    },
    {
      icon: '✂️',
      title: 'Grooming ve Bakım',
      description: 'Profesyonel tıraş, banyo ve estetik bakım hizmetleri ile dostlarınızın bakımını üstleniyoruz.',
      features: ['Profesyonel Tıraş', 'Medikal Banyo', 'Tırnak Kesimi ve Bakımı', 'Kulak ve Göz Temizliği'],
      image: 'https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=800&q=80',
      color: '#FF4757'
    },
    {
      icon: '🏨',
      title: 'Pet Otel ve Günlük Bakım',
      description: 'Konforlu, güvenli ve hijyenik ortamda pansiyon hizmetleri ile günlük bakım imkanı sunuyoruz.',
      features: ['Uzun Süreli Pansiyon', 'Günlük Bakım', 'Özel İlgi ve Oyun Zamanı', '7/24 Veteriner Gözetimi'],
      image: 'https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=800&q=80',
      color: '#EE5A6F'
    },
    {
      icon: '🚨',
      title: '7/24 Acil Servis',
      description: 'Acil durumlarda 7 gün 24 saat kesintisiz veteriner hizmetimiz ile yanınızdayız.',
      features: ['Anında Acil Müdahale', 'Yoğun Bakım Ünitesi', 'Gece Hizmet', 'Ambulans Hizmeti'],
      image: 'https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?w=800&q=80',
      color: '#FF6B6B'
    },
  ]

  return (
    <main className={styles.servicesPage}>
      {/* Hero Section with Image */}
      <section className={styles.heroSection}>
        <div className={styles.heroImage}>
          <Image 
            src="https://images.unsplash.com/photo-1581888227599-779811939961?w=1920&q=80"
            alt="Veteriner Hizmetleri"
            fill
            style={{ objectFit: 'cover' }}
            priority
          />
          <div className={styles.heroOverlay}></div>
        </div>
        <div className={styles.heroContent}>
          <div className={styles.heroText}>
            <span className={styles.heroBadge}>✨ Profesyonel Hizmetler</span>
            <h1>Kapsamlı Veteriner Hizmetlerimiz</h1>
            <p>Sevimli dostlarınızın sağlığı için modern ekipman ve uzman kadromuzla tam donanımlı hizmet</p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className={styles.servicesSection}>
        <div className="container">
          <div className={styles.sectionIntro}>
            <h2>Neler Sunuyoruz?</h2>
            <p>Her türlü ihtiyaca yönelik geniş hizmet yelpazemiz ile yanınızdayız</p>
          </div>

          <div className={styles.servicesGrid}>
            {services.map((service, index) => (
              <div 
                key={index} 
                className={styles.serviceBox}
                style={{'--delay': `${index * 0.15}s`, '--color': service.color}}
              >
                <div className={styles.serviceBoxImage}>
                  <Image 
                    src={service.image}
                    alt={service.title}
                    width={400}
                    height={300}
                    style={{ objectFit: 'cover' }}
                  />
                  <div className={styles.serviceBoxOverlay}>
                    <span className={styles.serviceBoxIcon}>{service.icon}</span>
                  </div>
                </div>
                <div className={styles.serviceBoxContent}>
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                  <ul className={styles.featureList}>
                    {service.features.map((feature, idx) => (
                      <li key={idx}>
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                          <path d="M13.3332 4L5.99984 11.3333L2.6665 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={styles.ctaSection}>
        <div className="container">
          <div className={styles.ctaContent}>
            <div className={styles.ctaText}>
              <h2>Sevimli Dostunuz İçin Randevu Alın</h2>
              <p>Uzman veteriner hekimlerimizle tanışın ve dostlarınız için en iyi bakımı alın. Hemen randevu oluşturun!</p>
            </div>
            <a href="/iletisim" className={styles.ctaButton}>
              <span>Randevu Al</span>
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M7.5 15L12.5 10L7.5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}