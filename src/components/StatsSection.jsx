import { motion } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'

export default function StatsSection() {
  const stats = [
    { value: '5+', label: 'Years Exp.' },
    { value: '40+', label: 'Projects' },
    { value: '12', label: 'Awards' },
  ]

  const sectionRef = useRef(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
          observer.unobserve(entry.target)
        }
      },
      { threshold: 0.5 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current)
    }
  }, [])

  const counterRefs = useRef([])

  useEffect(() => {
    if (inView) {
      counterRefs.current.forEach((element, idx) => {
        if (!element) return

        const stat = stats[idx]
        const numericValue = parseInt(stat.value)

        gsap.fromTo(
          { value: 0 },
          {
            value: numericValue,
            duration: 1.5,
            ease: 'power3.out',
            onUpdate: function () {
              element.textContent = Math.ceil(this.targets()[0].value)
            },
          }
        )
      })
    }
  }, [inView])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  }

  return (
    <motion.div
      ref={sectionRef}
      className="mt-12 grid grid-cols-3 gap-4 w-full border-t border-slate-100 dark:border-slate-800 pt-8"
      variants={containerVariants}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
    >
      {stats.map((stat, idx) => (
        <motion.div key={idx} className="text-center" variants={itemVariants}>
          <motion.div
            className="text-2xl font-bold text-primary"
            ref={(el) => (counterRefs.current[idx] = el)}
            whileHover={{ scale: 1.1 }}
          >
            {stat.value}
          </motion.div>
          <div className="text-[10px] uppercase tracking-wider text-slate-500 font-semibold">
            {stat.label}
          </div>
        </motion.div>
      ))}
    </motion.div>
  )
}
