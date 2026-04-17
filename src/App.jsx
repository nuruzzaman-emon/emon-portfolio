import { useEffect, useRef } from 'react'
import Lenis from 'lenis'
import Navigation from './components/Navigation'
import ProfileSection from './components/ProfileSection'
import StatsSection from './components/StatsSection'
import BottomNavigation from './components/BottomNavigation'

function App() {
  const lenisRef = useRef(null)

  useEffect(() => {
    // Initialize Lenis for smooth scrolling
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: 'vertical',
      gestureDirection: 'vertical',
      smooth: true,
      mouseMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
      infinite: false,
    })

    lenisRef.current = lenis

    // RAF animation loop for Lenis
    let animationFrameId
    const raf = (time) => {
      lenis.raf(time)
      animationFrameId = requestAnimationFrame(raf)
    }

    animationFrameId = requestAnimationFrame(raf)

    return () => {
      cancelAnimationFrame(animationFrameId)
      lenis.destroy()
    }
  }, [])

  return (
    <div className="bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 min-h-screen">
      <Navigation />

      <main className="pt-24 px-6 pb-32 flex flex-col items-start min-h-screen">
        <div className="w-full max-w-lg">
          <ProfileSection />
          <StatsSection />
        </div>
      </main>

      <BottomNavigation />
    </div>
  )
}

export default App
