'use client'

import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faBars, faHouse, faXmark } from '@fortawesome/free-solid-svg-icons'

const links = [
  { label: 'الرئيسية', href: '#home' },
  { label: 'المشاريع', href: '#projects' },
  { label: 'عن الشركة', href: '#about' },
  { label: 'اتصل بنا', href: '#contact' },
]

export function SiteHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const closeMenu = () => setIsMenuOpen(false)

  return <header className="topbar">
    <div className="container nav-wrap">
      <a className="brand" href="#home" onClick={closeMenu}><span>Aqar Modern</span><small>عقار مودرن</small><FontAwesomeIcon icon={faHouse} /></a>
      <nav className="desktop-nav" aria-label="التنقل الرئيسي">{links.map((link) => <a key={link.href} href={link.href}>{link.label}</a>)}</nav>
      <a className="gold-btn nav-cta" href="#contact" onClick={closeMenu}>احجز استشارتك المجانية <FontAwesomeIcon icon={faArrowLeft} /></a>
      <button className="menu-toggle" type="button" aria-label={isMenuOpen ? 'إغلاق القائمة' : 'فتح القائمة'} aria-expanded={isMenuOpen} onClick={() => setIsMenuOpen((open) => !open)}>
        <FontAwesomeIcon icon={isMenuOpen ? faXmark : faBars} />
      </button>
    </div>
    <div className={`mobile-menu ${isMenuOpen ? 'is-open' : ''}`} aria-hidden={!isMenuOpen}>
      <nav aria-label="قائمة الهاتف">{links.map((link) => <a key={link.href} href={link.href} onClick={closeMenu}>{link.label}</a>)}</nav>
      <a className="mobile-menu-cta gold-btn" href="#contact" onClick={closeMenu}>احجز استشارتك المجانية</a>
    </div>
  </header>
}
