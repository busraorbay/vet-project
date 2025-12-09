import styles from '@/styles/Blog.module.css'
import Image from 'next/image'
import Link from 'next/link'

export default function Blog() {
  const blogPosts = [
    {
      id: 1,
      title: "Evcil Hayvanınızın Aşı Takvimi: Ne Zaman, Hangi Aşılar?",
      excerpt: "Evcil dostlarınızın sağlıklı kalması için düzenli aşı takvimine uymak çok önemlidir. Bu yazımızda köpek ve kediler için gerekli aşıları ve zamanlamalarını detaylı şekilde anlatıyoruz.",
      image: "https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=800&q=80",
      category: "Sağlık",
      date: "15 Kasım 2024",
      readTime: "5 dk"
    },
    {
      id: 2,
      title: "Kedi ve Köpeklerde Beslenme Önerileri",
      excerpt: "Evcil hayvanlarınızın sağlıklı bir yaşam sürmesi için doğru beslenme çok kritiktir. Yaş gruplarına göre beslenme önerileri, hangi besinlerden kaçınılması gerektiği ve porsiyon kontrolü.",
      image: "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=800&q=80",
      category: "Beslenme",
      date: "10 Kasım 2024",
      readTime: "6 dk"
    },
    {
      id: 3,
      title: "İç ve Dış Parazitlerden Korunma Yöntemleri",
      excerpt: "Pire, kene, iç parazitler ve kurdlar evcil hayvanlarınızın sağlığını ciddi şekilde tehdit edebilir. Düzenli parazit kontrolü ve koruyucu tedbirler hakkında bilmeniz gerekenler.",
      image: "https://images.unsplash.com/photo-1450778869180-41d0601e046e?w=800&q=80",
      category: "Sağlık",
      date: "5 Kasım 2024",
      readTime: "4 dk"
    },
    {
      id: 4,
      title: "Kısırlaştırma: Avantajları ve Doğru Zamanı",
      excerpt: "Kısırlaştırma, evcil hayvanınızın sağlığı ve yaşam kalitesi için önemli bir karardır. Bu yazımızda kısırlaştırmanın faydaları, ideal yaş ve operasyon sonrası bakım konularını ele alıyoruz.",
      image: "https://images.unsplash.com/photo-1415369629372-26f2fe60c467?w=800&q=80",
      category: "Genel Bakım",
      date: "1 Kasım 2024",
      readTime: "7 dk"
    },
    {
      id: 5,
      title: "Yaşlı Evcil Hayvanlarda Özel Bakım İhtiyaçları",
      excerpt: "Evcil dostlarımız yaşlandıkça özel ihtiyaçları ortaya çıkar. Yaşlı kedi ve köpeklerde karşılaşılabilecek sağlık sorunları, beslenme değişiklikleri ve yaşam kalitesini artırma yöntemleri.",
      image: "https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?w=800&q=80",
      category: "Genel Bakım",
      date: "28 Ekim 2024",
      readTime: "6 dk"
    },
    {
      id: 6,
      title: "Acil Durumda Ne Yapmalı? İlk Yardım İpuçları",
      excerpt: "Evcil hayvanınızın başına beklenmedik bir durum geldiğinde panik yapmadan ne yapmanız gerektiğini bilmek hayati önem taşır. Temel ilk yardım bilgileri ve acil durumda atılması gereken adımlar.",
      image: "https://images.unsplash.com/photo-1530281700549-e82e7bf110d6?w=800&q=80",
      category: "Acil Durum",
      date: "25 Ekim 2024",
      readTime: "8 dk"
    }
  ]

  return (
    <main className={styles.blog}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroImageWrapper}>
          <Image 
            src="https://images.unsplash.com/photo-1450778869180-41d0601e046e?w=1600&q=80"
            alt="Blog"
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
          <h1>Blog</h1>
        </div>
      </section>

      {/* Intro Section */}
      <section className={styles.intro}>
        <div className={styles.container}>
          <h2>Evcil Dostlarınız İçin Faydalı Bilgiler</h2>
          <p>Veteriner hekimlerimizin önerileri ve evcil hayvan bakımı hakkında bilmeniz gereken her şey</p>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className={styles.blogContent}>
        <div className={styles.container}>
          <div className={styles.postsGrid}>
            {blogPosts.map((post) => (
              <article key={post.id} className={styles.postCard}>
                <div className={styles.postImage}>
                  <Image 
                    src={post.image}
                    alt={post.title}
                    width={400}
                    height={250}
                    style={{ objectFit: 'cover' }}
                  />
                  <span className={styles.category}>{post.category}</span>
                </div>
                <div className={styles.postContent}>
                  <div className={styles.postMeta}>
                    <span className={styles.date}>
                      <svg viewBox="0 0 24 24" fill="none">
                        <rect x="3" y="4" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="2"/>
                        <path d="M16 2V6M8 2V6M3 10H21" stroke="currentColor" strokeWidth="2"/>
                      </svg>
                      {post.date}
                    </span>
                    <span className={styles.readTime}>
                      <svg viewBox="0 0 24 24" fill="none">
                        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
                        <path d="M12 6V12L16 14" stroke="currentColor" strokeWidth="2"/>
                      </svg>
                      {post.readTime}
                    </span>
                  </div>
                  <h3>{post.title}</h3>
                  <p>{post.excerpt}</p>
                  <Link href={`/blog/${post.id}`} className={styles.readMore}>
                    Devamını Oku
                    <svg viewBox="0 0 20 20" fill="none">
                      <path d="M7.5 15L12.5 10L7.5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
