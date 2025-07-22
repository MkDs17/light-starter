import React from 'react'

import { HeroParallax } from '@/components/ui/hero-parallax'
import { HoverEffect } from '@/components/ui/hover-effect'
import { ContainerScroll } from '@/components/ui/scroll-container'
import Header from './header'

interface IProps {
  children: React.ReactNode
}

export const products = [
  {
    title: 'Moonbeam',
    link: 'https://gomoonbeam.com',
    thumbnail:
      'https://aceternity.com/images/products/thumbnails/new/moonbeam.png',
  },
  {
    title: 'Cursor',
    link: 'https://cursor.so',
    thumbnail:
      'https://aceternity.com/images/products/thumbnails/new/cursor.png',
  },
  {
    title: 'Rogue',
    link: 'https://userogue.com',
    thumbnail:
      'https://aceternity.com/images/products/thumbnails/new/rogue.png',
  },

  {
    title: 'Editorially',
    link: 'https://editorially.org',
    thumbnail:
      'https://aceternity.com/images/products/thumbnails/new/editorially.png',
  },
]

export default function Layout({ children }: IProps) {
  return (
    // <div className="layout">
    //   <Main>{children}</Main>
    //   <Footer />
    // </div>
    <div className="bg-slate-950 text-white font-sans overflow-x-hidden">
      {/* Navbar */}
      <Header />

      <HeroParallax products={products} />

      {/* Scroll Showcase */}
      <ContainerScroll
        titleComponent={
          <>
            <h2 className="text-3xl md:text-5xl font-bold">
              Design immersif.
              <br />
              Défilement dynamique.
            </h2>
          </>
        }
      >
        <img src="/mockup.png" alt="Demo" className="rounded-2xl shadow-xl" />
      </ContainerScroll>

      {/* Bento Grid / Features */}
      <section id="features" className="py-24 px-6 max-w-7xl mx-auto">
        <HoverEffect
          items={[
            {
              title: 'Blocs modulaires',
              description: 'Composants flexibles pour chaque section.',
            },
            {
              title: 'Effets animés',
              description: 'Des transitions et interactions douces.',
            },
            {
              title: 'Code minimaliste',
              description: 'Intégration rapide et propre.',
            },
            {
              title: 'Design tendance',
              description: "Look 2025 prêt à l'emploi.",
            },
          ]}
        />
      </section>

      {/* À propos */}
      <section id="about" className="py-24 px-6 max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">Qui suis-je ?</h2>
        <p className="text-white/80">
          Je suis un développeur indépendant spécialisé en interfaces modernes.
          Ce template est une base rapide, accessible et élégante pour vos
          projets personnels ou professionnels.
        </p>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 py-6 px-6 text-center text-sm text-white/40">
        © 2025 Aether. Tous droits réservés.
      </footer>
    </div>
  )
}

// const Container = styled(Div100vh)`
//   align-items: center;
//   background-color: ${({ theme }) => theme.palette.secondary};
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   overflow-x: hidden;
//   overflow-y: auto;
//   width: 100vw;
// `
