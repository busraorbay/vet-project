import HeroSlider from '@/components/HeroSlider'
import TestimonialsSlider from '@/components/TestimonialsSlider'
import LocationMap from '@/components/LocationMap'
import styles from '@/styles/Home.module.css'
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <main>
      <HeroSlider />
      
      {/* Hizmetlerimiz Bölümü - 3'lü Grid */}
      <section className={styles.servicesSection}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <span className={styles.badge}>✨ Neler Yapıyoruz</span>
            <h2>Hizmetlerimiz</h2>
            <p>Evcil dostlarınız için kapsamlı veteriner hizmetleri</p>
          </div>

          <div className={styles.servicesGrid}>
            <div className={styles.serviceBox}>
              <div className={styles.serviceIcon}>
                <svg viewBox="0 0 24 24" fill="none">
                  <path d="M9 11L12 14L22 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M21 12V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3>Tanı ve Laboratuvar</h3>
              <p>Modern laboratuvar ve görüntüleme sistemleriyle detaylı tanı hizmetleri. Kan, idrar testleri ve biyokimya analizleri.</p>
            </div>

            <div className={styles.serviceBox}>
              <div className={styles.serviceIcon}>
                <svg viewBox="0 0 24 24" fill="none">
                  <path d="M12 5V19M5 12H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2"/>
                </svg>
              </div>
              <h3>Aşılama ve Koruma</h3>
              <p>Düzenli aşı takvimine uygun koruyucu sağlık hizmetleri. Karma aşı, kuduz aşısı ve parazit kontrolü.</p>
            </div>

            <div className={styles.serviceBox}>
              <div className={styles.serviceIcon}>
                <svg viewBox="0 0 24 24" fill="none">
                  <path d="M22 12H18L15 21L9 3L6 12H2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3>Cerrahi Operasyonlar</h3>
              <p>Modern ameliyathane ve uzman kadromuzla güvenli cerrahi işlemler. Kısırlaştırma ve yumuşak doku cerrahisi.</p>
            </div>

            <div className={styles.serviceBox}>
              <div className={styles.serviceIcon}>
                <svg viewBox="0 0 24 24" fill="none">
                  <rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="2"/>
                  <path d="M9 3V21M3 9H21M3 15H21M15 3V21" stroke="currentColor" strokeWidth="2"/>
                </svg>
              </div>
              <h3>Diş Bakımı</h3>
              <p>Ağız ve diş sağlığı için profesyonel temizlik ve tedavi. Diş taşı temizliği, çekim ve periodontal tedavi.</p>
            </div>

            <div className={styles.serviceBox}>
              <div className={styles.serviceIcon}>
                <svg viewBox="0 0 24 24" fill="none">
                  <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3>Grooming ve Bakım</h3>
              <p>Profesyonel tıraş, banyo ve estetik bakım hizmetleri. Medikal banyo, tırnak kesimi ve kulak temizliği.</p>
            </div>

            <div className={styles.serviceBox}>
              <div className={styles.serviceIcon}>
                <svg viewBox="0 0 24 24" fill="none">
                  <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
                  <path d="M12 6V12L16 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </div>
              <h3>7/24 Acil Servis</h3>
              <p>Acil durumlarda kesintisiz veteriner hizmetimiz. Acil müdahale, yoğun bakım ve ambulans hizmeti.</p>
            </div>
          </div>

          <div className={styles.servicesFooter}>
            <Link href="/hizmetlerimiz" className={styles.servicesBtn}>
              <span>Tüm Hizmetlerimizi Görüntüle</span>
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M7.5 15L12.5 10L7.5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Neden Biz Bölümü */}
      <section className={styles.whyUsSection}>
        <div className="container">
          <div className={styles.whyUsContent}>
            <div className={styles.whyUsImage}>
              <Image 
                src="https://images.unsplash.com/photo-1530281700549-e82e7bf110d6?w=800&q=80"
                alt="Mutlu köpek"
                width={600}
                height={600}
                style={{ objectFit: 'cover', borderRadius: '20px' }}
              />
              <div className={styles.experienceBadge}>
                <span className={styles.badgeNumber}>5+</span>
                <span className={styles.badgeText}>Yıllık<br/>Deneyim</span>
              </div>
            </div>
            <div className={styles.whyUsText}>
              <span className={styles.badge}>💝 Neden Bizi Seçmelisiniz</span>
              <h2>Londra Veteriner Kliniği</h2>
              <p>Bahçelievlerde uzman kadromuz ve sevgi dolu yaklaşımımızla dostlarınızın sağlığı için buradayız. Modern ekipmanlarımız ve deneyimli veteriner hekimlerimizle en iyi hizmeti sunuyoruz.</p>
              
              <div className={styles.featureGrid}>
                <div className={styles.feature}>
                  <div className={styles.featureIcon}>
                    <svg viewBox="0 0 24 24" fill="none">
                      <path d="M20 21V19C20 17.9391 19.5786 16.9217 18.8284 16.1716C18.0783 15.4214 17.0609 15 16 15H8C6.93913 15 5.92172 15.4214 5.17157 16.1716C4.42143 16.9217 4 17.9391 4 19V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <circle cx="12" cy="7" r="4" stroke="currentColor" strokeWidth="2"/>
                    </svg>
                  </div>
                  <div>
                    <h4>Uzman Kadro</h4>
                    <p>Deneyimli veteriner hekimlerimiz</p>
                  </div>
                </div>
                <div className={styles.feature}>
                  <div className={styles.featureIcon}>
                    <svg viewBox="0 0 24 24" fill="none">
                      <rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="2"/>
                      <path d="M9 3V21" stroke="currentColor" strokeWidth="2"/>
                      <path d="M15 3V21" stroke="currentColor" strokeWidth="2"/>
                    </svg>
                  </div>
                  <div>
                    <h4>Modern Klinik</h4>
                    <p>Son teknoloji ekipmanlar</p>
                  </div>
                </div>
                <div className={styles.feature}>
                  <div className={styles.featureIcon}>
                    <svg viewBox="0 0 24 24" fill="none">
                      <path d="M20.84 4.61C20.3292 4.099 19.7228 3.69365 19.0554 3.41708C18.3879 3.14051 17.6725 2.99817 16.95 2.99817C16.2275 2.99817 15.5121 3.14051 14.8446 3.41708C14.1772 3.69365 13.5708 4.099 13.06 4.61L12 5.67L10.94 4.61C9.9083 3.57831 8.50903 2.99871 7.05 2.99871C5.59096 2.99871 4.19169 3.57831 3.16 4.61C2.1283 5.64169 1.54871 7.04097 1.54871 8.5C1.54871 9.95903 2.1283 11.3583 3.16 12.39L4.22 13.45L12 21.23L19.78 13.45L20.84 12.39C21.351 11.8792 21.7563 11.2728 22.0329 10.6054C22.3095 9.93789 22.4518 9.22248 22.4518 8.5C22.4518 7.77752 22.3095 7.06211 22.0329 6.39464C21.7563 5.72718 21.351 5.12075 20.84 4.61Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <div>
                    <h4>Sevgi Dolu Bakım</h4>
                    <p>Dostlarınıza özel ilgi</p>
                  </div>
                </div>
                <div className={styles.feature}>
                  <div className={styles.featureIcon}>
                    <svg viewBox="0 0 24 24" fill="none">
                      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
                      <path d="M12 6V12L16 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                    </svg>
                  </div>
                  <div>
                    <h4>7/24 Hizmet</h4>
                    <p>Her zaman yanınızdayız</p>
                  </div>
                </div>
              </div>

              <Link href="/hakkimizda" className={styles.whyUsBtn}>
                Hakkımızda Daha Fazla Bilgi
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Yorumlar Slider */}
      <TestimonialsSlider />


  <section className={styles.ctaSection}>
        <div className="container">
          <div className={styles.ctaWrapper}>
            <div className={styles.ctaContent}>
              <h2>Can Dostlarınıza Gönülden Bağlıyız</h2>
              <p>7/24 hizmet veriyor ve geniş hizmet yelpazemiyle dostlarınızın her türlü sağlık ihtiyacına çözüm üretiyoruz. Dahiliye (İç Hastalıklar) ile organ sağlığını, Genel Cerrahi ile cerrahi müdahaleleri, Ortopedi ve Travmatoloji ile kemik ve eklem tedavilerini uzmanlıkla gerçekleştiriyoruz. Ayrıca, Doğum ve Jinekoloji hizmetlerimizle gebelik süreçlerinden doğum sonrası bakımına kadar her aşamada yanınızdayız.</p>
             
            </div>
            <div className={styles.ctaImage}>
           <Image 
                src="/images/cat-transparent.png"
                alt="Veteriner ve kedi"
                width={600}
                height={500}
                style={{ objectFit: 'contain' }}
              />
              <div className={styles.ctaBadge}>
                <svg viewBox="0 0 24 24" fill="none">
                  <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
                  <path d="M12 6V12L16 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
                <div>
                  <strong>7/24</strong>
                  <span>Acil Servis</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Konum Haritası */}
      <LocationMap />

      {/* CTA Bölümü */}
    
    </main>
  )
}