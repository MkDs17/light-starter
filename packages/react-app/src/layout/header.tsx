import { Menu, X } from 'lucide-react'
import React, { useEffect, useRef, useState } from 'react'

const navigation = [
  { label: 'Fonctionnalités', href: '#features' },
  { label: 'Tarifs', href: '#pricing' },
  { label: 'À propos', href: '#about' },
]

interface NavLinkProps {
  label: string
  href: string
  onHover: (rect: DOMRect | null) => void
  isActive?: boolean
}

export const NavLink = ({ label, href, onHover, isActive }: NavLinkProps) => {
  const ref = useRef<HTMLAnchorElement>(null)

  return (
    <a
      ref={ref}
      href={href}
      className={`relative px-3 py-2 text-sm transition-colors z-10 ${
        isActive ? 'text-white' : 'hover:text-white'
      }`}
      onMouseEnter={() => onHover(ref.current?.getBoundingClientRect() ?? null)}
      onMouseLeave={() => onHover(null)}
    >
      {label}
    </a>
  )
}

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const navRef = useRef<HTMLDivElement>(null)
  const [indicatorStyle, setIndicatorStyle] = useState<React.CSSProperties>({
    opacity: 0,
  })
  const [activeSection, setActiveSection] = useState<string | null>(null)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100)

      const currentSection = navigation.find((item) => {
        const section = document.querySelector(item.href)
        if (!section) return false
        const rect = section.getBoundingClientRect()
        return rect.top <= 80 && rect.bottom >= 80
      })

      if (currentSection?.label !== activeSection) {
        setActiveSection(currentSection?.label || null)
        if (currentSection) {
          const link = document.querySelector(
            `a[href='${currentSection.href}']`,
          )
          if (link) {
            const rect = link.getBoundingClientRect()
            const navBounds = navRef.current?.getBoundingClientRect()
            if (rect && navBounds) {
              setIndicatorStyle({
                width: rect.width,
                height: rect.height,
                left: rect.left - navBounds.left,
                top: rect.top - navBounds.top,
                opacity: 1,
                position: 'absolute',
                backgroundColor: 'rgba(255,255,255,0.1)',
                borderRadius: 8,
                transition: 'all 200ms ease',
                zIndex: 0,
              })
            }
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [activeSection])

  const handleHover = (rect: DOMRect | null) => {
    if (!navRef.current || !rect) {
      setIndicatorStyle((prev) => ({ ...prev, opacity: 1 }))
      return
    }
    const navBounds = navRef.current.getBoundingClientRect()
    setIndicatorStyle({
      width: rect.width,
      height: rect.height,
      left: rect.left - navBounds.left,
      top: rect.top - navBounds.top,
      opacity: 1,
      position: 'absolute',
      backgroundColor: 'rgba(255,255,255,0.1)',
      borderRadius: 8,
      transition: 'all 200ms ease',
      zIndex: 0,
    })
  }

  return (
    <>
      <div className="fixed top-0 inset-x-0 z-50 w-full">
        <header
          className={`hidden lg:flex flex-row self-start items-center justify-between max-w-7xl mx-auto px-6 relative z-[60] transition-all duration-500 ease-in-out
            ${
              scrolled
                ? 'bg-white/80 dark:bg-neutral-950/80 py-2 rounded-full w-[40%] translate-y-5 backdrop-blur shadow-[rgba(34,42,53,0.06)_0px_0px_24px,_rgba(0,0,0,0.05)_0px_1px_1px,_rgba(34,42,53,0.04)_0px_0px_0px_1px,_rgba(34,42,53,0.08)_0px_0px_4px,_rgba(47,48,55,0.05)_0px_16px_68px,_rgba(255,255,255,0.1)_0px_1px_0px_inset]'
                : 'bg-transparent dark:bg-transparent py-2 rounded-full w-full translate-y-0 backdrop-blur-0 shadow-none'
            }`}
          style={{
            minWidth: '800px',
            willChange: 'auto',
            transform: scrolled ? 'translateY(20px)' : 'none',
          }}
        >
          <h1 className="text-xl font-bold whitespace-nowrap">Aether</h1>
          <nav className="relative" ref={navRef}>
            <div className="flex gap-2 relative">
              {navigation.map((item) => (
                <NavLink
                  key={item.label}
                  label={item.label}
                  href={item.href}
                  onHover={handleHover}
                />
              ))}
              <div
                className="pointer-events-none absolute"
                style={indicatorStyle}
              />
            </div>
          </nav>
          <div>
            <button className="px-4 py-2 rounded-md button bg-white text-black text-sm font-bold relative cursor-pointer hover:-translate-y-0.5 transition duration-200 text-center shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] hidden md:block">
              Planifier un appel
            </button>
          </div>
        </header>
      </div>

      <button
        className="md:hidden p-2"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle Menu"
      >
        {menuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {menuOpen && (
        <div className="md:hidden mt-3">
          <nav className="flex flex-col gap-3 text-sm">
            {navigation.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="hover:text-accent"
              >
                {item.label}
              </a>
            ))}
            <button className="mt-4 px-4 py-2 border border-white/20 rounded-lg hover:bg-white/10 transition">
              Se connecter
            </button>
          </nav>
        </div>
      )}
    </>
  )
}
