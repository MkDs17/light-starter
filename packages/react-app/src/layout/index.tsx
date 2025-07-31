import React from 'react'

import visibilityImg from '@/assets/images/visibility.webp'
import { BentoGrid, BentoGridItem } from '@/components/ui/bento-grid'
import { Carousel } from '@/components/ui/carousel'
import { HeroParallax } from '@/components/ui/hero-parallax'
import { ContainerScroll } from '@/components/ui/scroll-container'
import { Title } from '@/components/ui/title'
import { Eye, TrendingUp } from 'lucide-react'
import Footer from './footer'
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

const Skeleton = () => (
  <div className="w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100"></div>
)

const items = [
  {
    title: 'Visibilité et crédibilité',
    description:
      'Un site web bien conçu renforce votre image de marque et inspire confiance à vos clients. Il sert de vitrine accessible 24/7.',
    header: (
      <img
        src={visibilityImg}
        className="w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100 object-cover"
      />
    ),
    icon: <Eye className="icon h-4 w-4" />,
  },
  {
    title: 'Acquisition et conversion',
    description:
      'Attirez de nouveaux prospects grâce au référencement (SEO) et convertissez-les en clients avec un parcours optimisé.',
    header: <Skeleton />,
    icon: <TrendingUp className="icon" />,
  },
  {
    title: 'Contrôle total',
    description:
      'Contrairement aux réseaux sociaux, votre site vous appartient. Vous maîtrisez son contenu, son design et son évolution.',
    header: <Skeleton />,
  },
  {
    title: 'Rentabilité',
    description:
      'Un site bien optimisé peut devenir un canal de vente puissant, réduisant votre dépendance aux publicités payantes.',
    header: <Skeleton />,
  },
  {
    title: 'Connectivité et automatisation',
    description:
      "Intégrez des outils comme la prise de rendez-vous, les paiements en ligne ou encore l'automatisation des emails pour gagner du temps.",

    header: <Skeleton />,
  },
]

export default function Layout({ children }: IProps) {
  return (
    // <div className="layout">
    //   <Main>{children}</Main>
    //   <Footer />
    // </div>
    <div className="bg-white/80 dark:bg-slate-950 text-white font-sans relative">
      {/* Navbar */}
      <Header />

      <HeroParallax products={products} />

      <section
        id="services"
        className="py-24 px-6 max-w-7xl mx-auto text-center"
      >
        <Title
          type={'h2'}
          text="Nos services"
          subtitle="Des solutions sur mesure pour vos besoins numériques."
        />
        <Carousel />
      </section>

      <section id="values" className="py-24 px-6 max-w-7xl mx-auto text-center">
        <Title
          type={'h2'}
          text="Présence digitale"
          subtitle="Les avantages incontournables de créer et posséder votre propre site internet."
        />
        <BentoGrid className="max-w-6xl mx-auto">
          {items.map((item, i) => (
            <BentoGridItem
              key={i}
              title={item.title}
              description={item.description}
              header={item.header}
              className={i === 3 || i === 6 ? 'md:col-span-2' : ''}
              icon={item.icon}
            />
          ))}
        </BentoGrid>
      </section>

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

      {/* À propos */}
      <section id="about" className="py-24 px-6 max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">Qui suis-je ?</h2>
        <p className="text-white/80">
          Je suis un développeur indépendant spécialisé en interfaces modernes.
          Ce template est une base rapide, accessible et élégante pour vos
          projets personnels ou professionnels.
        </p>
      </section>

      <Footer />
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
