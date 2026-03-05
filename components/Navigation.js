'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import styles from '@/styles/Navigation.module.css'

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={`${styles.nav} ${isScrolled ? styles.scrolled : ''}`}>
      <div className={`container ${styles.headerContainer}`}>
        <Link href="/" className={styles.logo}>
          <Image 
            src="/images/londra-logo.jpg" 
            alt="Londra Veteriner Kliniği" 
            width={180} 
            height={60}
            className={styles.logoImage}
            style={{ objectFit: 'contain' }}
          />
        </Link>

        <button 
          className={`${styles.mobileToggle} ${isMobileMenuOpen ? styles.open : ''}`}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Menü"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <ul className={`${styles.navLinks} ${isMobileMenuOpen ? styles.active : ''}`}>
          <li><Link href="/" onClick={() => setIsMobileMenuOpen(false)}>Ana Sayfa</Link></li>
          <li><Link href="/hakkimizda" onClick={() => setIsMobileMenuOpen(false)}>Hakkımızda</Link></li>
          <li><Link href="/hizmetlerimiz" onClick={() => setIsMobileMenuOpen(false)}>Hizmetlerimiz</Link></li>
          <li><Link href="/iletisim" onClick={() => setIsMobileMenuOpen(false)}>İletişim</Link></li>
        </ul>
      </div>
    </nav>
  )
}