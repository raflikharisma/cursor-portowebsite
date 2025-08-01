import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Experiences from '@/components/Experiences'
import Projects from '@/components/Projects'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Experiences />
      <Projects />
    </main>
  )
} 