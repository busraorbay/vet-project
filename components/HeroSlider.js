'use client'
import { useState, useEffect } from 'react'
import styles from '@/styles/HeroSlider.module.css'
import Image from 'next/image'

export default function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const slides = [
    {
      image: 'https://images.unsplash.com/photo-1450778869180-41d0601e046e?w=1920&q=80',
      title: 'Londra Veteriner Kliniği',
      buttonText: 'Hizmetlerimiz',
      buttonLink: '/hizmetlerimiz'
    },
    {
      image: 'https://images.unsplash.com/photo-1530281700549-e82e7bf110d6?w=1920&q=80',
      title: 'Profesyonel Veteriner Hizmetleri',
      subtitle: 'Sevimli dostlarınız için en iyi bakım',
      buttonText: 'Hakkımızda',
      buttonLink: '/hakkimizda'
    },
    {
      image: 'https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=1920&q=80',
      title: '7/24 Acil Servis',
      subtitle: 'Her zaman yanınızdayız',
      buttonText: 'İletişim',
      buttonLink: '/iletisim'
    }
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [slides.length])

  const goToSlide = (index) => {
    setCurrentSlide(index)
  }

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  return (
    <div className={styles.heroSlider}>
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`${styles.slide} ${index === currentSlide ? styles.active : ''}`}
        >
          <div className={styles.slideImage}>
            <Image
              src={slide.image}
              alt={slide.title}
              fill
              style={{ objectFit: 'cover' }}
              priority={index === 0}
            />
            <div className={styles.overlay}></div>
          </div>
          <div className={styles.slideContent}>
            <h1 className={styles.slideTitle}>{slide.title}</h1>
            <p className={styles.slideSubtitle}>{slide.subtitle}</p>
            <a href={slide.buttonLink} className={styles.slideButton}>
              {slide.buttonText}
            </a>
          </div>
        </div>
      ))}

      {/* Navigation Arrows */}
      <button className={styles.prevButton} onClick={prevSlide}>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>
      <button className={styles.nextButton} onClick={nextSlide}>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>

      {/* Dots */}
      <div className={styles.dots}>
        {slides.map((_, index) => (
          <button
            key={index}
            className={`${styles.dot} ${index === currentSlide ? styles.activeDot : ''}`}
            onClick={() => goToSlide(index)}
          />
        ))}
      </div>
    </div>
  )
}