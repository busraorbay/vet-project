'use client'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import styles from '@/styles/TestimonialsSlider.module.css'

export default function TestimonialsSlider() {
  const testimonials = [
    {
      name: "Eda F.",
      rating: 5,
      text: "Yaklaşık iki yıldır kızımı bu veterinere getiriyorum. Kısırlaştırma süreciyle yollarımız kesişti, o günden beri de başka bir yer düşünmedik. Her zaman güler yüzlü, ilgili ve gerçekten işini severek yapan bir ekip var. Gönül rahatlığıyla herkese tavsiye ederim, iyi ki varsınız! 🐾"
    },
    {
      name: "Yusuf Y.",
      rating: 5,
      text: "Çok ilgili ve hayvanlara yaklaşımları çok profesyonel hekim kadrosuna sahip 7/24 uluşabildiğim Bahçelievler Bakırköy bölgesindeki en iyi ve temiz klinikler arasında.Bir ay önce oğluşumun operasyonunu yaptılar şuan eskisi gibi koşup oynayabiliyor bütün ekibe teşekkür ederim iyi ki varsınız🙏"
    },
    {
      name: "Ayça U.",
      rating: 5,
      text: "Çocuklarınızı güvenli, işini bilen ve gerçekten hayvan sevgisi olan hekimlere teslim etmek istiyorsanız Onurcan hoca, Alperen hoca ve ekibi en doğru tercih. Bize her konuda çok destek oldular, kendilerine buradan da çok teşekkür ederim."
    },
    {
      name: "Zeynep A.",
      rating: 5,
      text: "Kısırlaştırma operasyonu için Londra Veteriner'i tercih ettik. Operasyon öncesi ve sonrası detaylı bilgilendirme yaptılar."
    },
    {
      name: "Volkan K.",
      rating: 5,
      text: "Samimiyetle söylüyorum daha iyi bir klinik olmadığını düşünüyorum. Tüm çalışanların güler yüzü tüm korku, stres ve endişemizi yok ediyor. İyi ki varlar, iyi ki yollarımız kesişmiş."
    },
    {
      name: "Figen S.",
      rating: 5,
      text: "Şahane bir ekip✨ Kızımla çok güzel ilgilenildi ve ihtiyaçları sağlandı. Çok memnunum ve tüm çevreme tavsiye ediyorum. Onur bey ve ekibine tekrardan güler yüzü ve ilgisi için teşekkürler. Gönül rahatlığıyla gidio yavrularınızın her türlü tedavilerini yaptırabilirsiniz 👍🏼"
    }
  ]

  return (
    <section className={styles.testimonialsSection}>
      <div className="container swiperYorum">
        <div className={styles.sectionHeader}>
          <h2>Evcil Dost Sahiplerinden</h2>
          <p>Sevimli dostlarının sağlığını bize emanet eden ailelerimizin deneyimleri</p>
        </div>

        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={30}
          loop={false}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          breakpoints={{
            768: {
              slidesPerView: 1,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
          className={styles.swiperContainer}
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <div className={styles.testimonialCard}>
                {/* Pati İkonu */}
                <div className={styles.pawIcon}>
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-3-3c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"/>
                  </svg>
                </div>

                {/* İsim */}
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
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  )
}