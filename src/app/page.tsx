import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Experiences from '@/components/Experiences'
import Projects from '@/components/Projects'
import Skills from '@/components/Skills'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Experiences />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </main>
  )
} 