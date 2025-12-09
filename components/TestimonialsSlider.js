'use client'
import { useState } from 'react'
import styles from '@/styles/TestimonialsSlider.module.css'

export default function TestimonialsSlider() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const testimonials = [
    {
      name: "Mehmet Yılmaz",
      date: "1 hafta önce",
      rating: 5,
      text: "Bahçelievler'de böyle kaliteli bir veteriner kliniği olması çok güzel. Köpeğimin ameliyatı için geldik, her şey çok profesyonel ilerledi."
    },
    {
      name: "Ayşe Demir",
      date: "2 hafta önce",
      rating: 5,
      text: "Kedim için acil durumda gece yarısı gittik. 7/24 hizmet vermeleri çok büyük avantaj. Ekip son derece ilgili ve profesyonel."
    },
    {
      name: "Can Öztürk",
      date: "3 hafta önce",
      rating: 5,
      text: "Yıllardır köpeğimin kontrollerini burada yaptırıyorum. Modern ekipmanları ve deneyimli veterinerleri var. Fiyatları da çok uygun."
    },
    {
      name: "Zeynep Arslan",
      date: "1 ay önce",
      rating: 5,
      text: "Kısırlaştırma operasyonu için Londra Veteriner'i tercih ettik. Operasyon öncesi ve sonrası detaylı bilgilendirme yaptılar."
    },
    {
      name: "Ahmet Kaya",
      date: "2 hafta önce",
      rating: 5,
      text: "Köpeğimin diş temizliği için gittik. Çok titiz çalışıyorlar ve sonuç mükemmel oldu. Fiyatlar da makul. Kesinlikle tavsiye ederim."
    },
    {
      name: "Elif Şahin",
      date: "1 hafta önce",
      rating: 5,
      text: "Pet otel hizmeti için tercih ettik. Tatile giderken gönül rahatlığıyla kedimi bıraktım. Günlük fotoğraf bile gönderdiler."
    },
    {
      name: "Murat Yavuz",
      date: "3 hafta önce",
      rating: 5,
      text: "Aşı takvimi konusunda çok yardımcı oldular. Her şeyi detaylı anlattılar. Köpeğim için güvenle tercih ediyorum."
    },
    {
      name: "Selin Özdemir",
      date: "2 hafta önce",
      rating: 5,
      text: "Laboratuvar sonuçları çok hızlı çıkıyor. Modern cihazları ve profesyonel yaklaşımları var. Çok memnunuz."
    },
    {
      name: "Kemal Arslan",
      date: "1 hafta önce",
      rating: 5,
      text: "Kedi mamalarından diş fırçasına kadar her şey var. Fiyatlar uygun ve personel çok yardımcı. Süper bir klinik!"
    }
  ]

  const cardsPerSlide = 3
  const totalSlides = Math.ceil(testimonials.length / cardsPerSlide)

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % totalSlides)
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + totalSlides) % totalSlides)
  }

  const goToSlide = (index) => {
    setCurrentIndex(index)
  }

  const getVisibleCards = () => {
    const startIndex = currentIndex * cardsPerSlide
    return testimonials.slice(startIndex, startIndex + cardsPerSlide)
  }

  return (
    <section className={styles.testimonialsSection}>
      <div className={styles.container}>
        <div className={styles.sectionHeader}>
          <h2>Evcil Dost Sahiplerinden</h2>
          <p>Sevimli dostlarının sağlığını bize emanet eden ailelerimizin deneyimleri</p>
        </div>

        <div className={styles.sliderWrapper}>
          <button 
            className={`${styles.navButton} ${styles.prevButton}`} 
            onClick={prevSlide} 
            aria-label="Önceki"
          >
            <svg viewBox="0 0 24 24" fill="none">
              <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>

          <div className={styles.cardsGrid}>
            {getVisibleCards().map((testimonial, index) => (
              <div key={index} className={styles.testimonialCard}>
                {/* Pati İkonu */}
                <div className={styles.pawIcon}>
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-3-3c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"/>
                  </svg>
                </div>

                {/* İsim ve Tarih */}
                <div className={styles.header}>
                  <h4>{testimonial.name}</h4>
                </div>

                {/* Rating */}
                <div className={styles.rating}>
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg key={i} className={styles.star} viewBox="0 0 24 24">
                      <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"/>
                    </svg>
                  ))}
                </div>

                {/* Yorum */}
                <p className={styles.testimonialText}>"{testimonial.text}"</p>
              </div>
            ))}
          </div>

          <button 
            className={`${styles.navButton} ${styles.nextButton}`} 
            onClick={nextSlide} 
            aria-label="Sonraki"
          >
            <svg viewBox="0 0 24 24" fill="none">
              <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>

        <div className={styles.dots}>
          {[...Array(totalSlides)].map((_, index) => (
            <button
              key={index}
              className={`${styles.dot} ${index === currentIndex ? styles.dotActive : ''}`}
              onClick={() => goToSlide(index)}
              aria-label={`${index + 1}. sayfaya git`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}