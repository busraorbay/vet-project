import styles from '@/styles/Services.module.css'
import Link from 'next/link'
import Image from 'next/image'
import LocationMap from '@/components/LocationMap'

export default function Hizmetlerimiz() {
  const services = [
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none">
          <path d="M9 11L12 14L22 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M21 12V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      title: "Tanı ve Laboratuvar",
      description: "Modern laboratuvar ve görüntüleme sistemleriyle detaylı tanı hizmetleri.",
      features: [
        "Kan, idrar ve dışkı testleri",
        "Biyokimya ve hematoloji analizleri",
        "Röntgen ve ultrason görüntüleme",
        "EKG ve kardiyolojik testler"
      ]
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none">
          <path d="M12 5V19M5 12H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2"/>
        </svg>
      ),
      title: "Aşılama ve Koruma",
      description: "Düzenli aşı takvimine uygun koruyucu sağlık hizmetleri.",
      features: [
        "Karma aşı programları",
        "Kuduz aşısı ve sertifikasyon",
        "İç ve dış parazit kontrolü",
        "Yıllık sağlık kontrolleri"
      ]
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none">
          <path d="M22 12H18L15 21L9 3L6 12H2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      title: "Cerrahi Operasyonlar",
      description: "Modern ameliyathane ve uzman kadromuzla güvenli cerrahi işlemler.",
      features: [
        "Kısırlaştırma operasyonları",
        "Yumuşak doku cerrahisi",
        "Ortopedik müdahaleler",
        "Acil cerrahi operasyonlar"
      ]
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none">
          <rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="2"/>
          <path d="M9 3V21M3 9H21M3 15H21M15 3V21" stroke="currentColor" strokeWidth="2"/>
        </svg>
      ),
      title: "Diş Bakımı",
      description: "Ağız ve diş sağlığı için profesyonel temizlik ve tedavi.",
      features: [
        "Diş taşı temizliği",
        "Diş çekimi ve dolgu işlemleri",
        "Periodontal hastalık tedavisi",
        "Ağız içi muayene ve bakım"
      ]
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none">
          <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      title: "Grooming ve Bakım",
      description: "Profesyonel tıraş, banyo ve estetik bakım hizmetleri.",
      features: [
        "Medikal banyo ve yıkama",
        "Profesyonel tıraş ve kesim",
        "Tırnak kesimi ve kulak temizliği",
        "Koku giderme tedavileri"
      ]
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none">
          <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
          <path d="M12 6V12L16 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      ),
      title: "7/24 Acil Servis",
      description: "Acil durumlarda kesintisiz veteriner hizmetimiz.",
      features: [
        "Gün boyu acil müdahale",
        "Yoğun bakım hizmeti",
        "Ambulans hizmeti",
        "Acil operasyon imkanı"
      ]
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none">
          <path d="M20.84 4.61C20.3292 4.099 19.7228 3.69365 19.0554 3.41708C18.3879 3.14051 17.6725 2.99817 16.95 2.99817C16.2275 2.99817 15.5121 3.14051 14.8446 3.41708C14.1772 3.69365 13.5708 4.099 13.06 4.61L12 5.67L10.94 4.61C9.9083 3.57831 8.50903 2.99871 7.05 2.99871C5.59096 2.99871 4.19169 3.57831 3.16 4.61C2.1283 5.64169 1.54871 7.04097 1.54871 8.5C1.54871 9.95903 2.1283 11.3583 3.16 12.39L4.22 13.45L12 21.23L19.78 13.45L20.84 12.39C21.351 11.8792 21.7563 11.2728 22.0329 10.6054C22.3095 9.93789 22.4518 9.22248 22.4518 8.5C22.4518 7.77752 22.3095 7.06211 22.0329 6.39464C21.7563 5.72718 21.351 5.12075 20.84 4.61Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      title: "Doğum ve Jinekoloji",
      description: "Gebelik süreçlerinden doğum sonrası bakıma kadar destek.",
      features: [
        "Gebelik takibi ve ultrason",
        "Güvenli doğum hizmeti",
        "Sezaryen operasyonları",
        "Yavru bakımı danışmanlığı"
      ]
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none">
          <path d="M19 21V5C19 4.46957 18.7893 3.96086 18.4142 3.58579C18.0391 3.21071 17.5304 3 17 3H7C6.46957 3 5.96086 3.21071 5.58579 3.58579C5.21071 3.96086 5 4.46957 5 5V21M3 21H21M9 7H10M9 11H10M9 15H10M14 7H15M14 11H15M14 15H15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      title: "Pet Otel",
      description: "Güvenli ve konforlu kalış imkanı sunuyoruz.",
      features: [
        "Günlük bakım ve beslenme",
        "Sosyalleşme ve oyun alanı",
        "Veteriner gözetimi",
        "Fotoğraf ve video paylaşımı"
      ]
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none">
          <path d="M21 15C21 15.5304 20.7893 16.0391 20.4142 16.4142C20.0391 16.7893 19.5304 17 19 17H7L3 21V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H19C19.5304 3 20.0391 3.21071 20.4142 3.58579C20.7893 3.96086 21 4.46957 21 5V15Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      title: "Danışmanlık Hizmetleri",
      description: "Evcil dostlarınız için uzman önerileri.",
      features: [
        "Beslenme danışmanlığı",
        "Davranış eğitimi",
        "Sağlık ve bakım önerileri",
        "Cins seçimi danışmanlığı"
      ]
    }
  ]

  return (
    <div className={styles.servicesPage}>
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
          <h1>Hizmetlerimiz</h1>
        </div>
      </section>

      {/* Intro Section */}
      <section className={styles.introSection}>
        <div className={"container"}>
          <h2>Dostlarımızın Sağlığı İçin Kapsamlı Hizmetler</h2>
          <p>"Londra Veteriner Kliniği olarak, modern tıbbi ekipmanlarımız ve uzman kadromuzla evcil dostlarınıza en iyi hizmeti sunuyoruz. Rutin kontrollerden acil müdahalelere, aşılamadan cerrahiye kadar tüm ihtiyaçlar için yanınızdayız."

</p>
</div>
      </section>

      {/* Services Grid */}
      <section className={styles.servicesSection}>
        <div className={"container"}>
          <div className={styles.servicesGrid}>
            {services.map((service, index) => (
              <div key={index} className={styles.serviceCard}>
                <div className={styles.serviceIcon}>
                  {service.icon}
                </div>
                <h3>{service.title}</h3>
                <p className={styles.description}>{service.description}</p>
                <ul className={styles.featureList}>
                  {service.features.map((feature, idx) => (
                    <li key={idx}>
                      <svg viewBox="0 0 20 20" fill="none">
                        <path d="M16.6 7.4L8.6 15.4L3.4 10.2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

        </div>
      </section>
           <LocationMap />

    </div>
  )
}