import { motion } from 'framer-motion'
import { useEffect, useRef } from 'react'
import gsap from 'gsap'

export default function ProfileSection() {
  const profileImageRef = useRef(null)
  const rings = [
    { delay: 0, offset: 0 },
    { delay: 0.2, offset: 16 },
  ]

  useEffect(() => {
    if (profileImageRef.current) {
      // GSAP animation for profile image
      gsap.fromTo(
        profileImageRef.current,
        {
          opacity: 0,
          scale: 0.8,
          filter: 'blur(10px)',
        },
        {
          opacity: 1,
          scale: 1,
          filter: 'blur(0px)',
          duration: 1,
          ease: 'power3.out',
        }
      )
    }
  }, [])

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  }

  return (
    <div className="w-full space-y-8">
      {/* Profile Ring Animation */}
      <motion.div
        className="relative w-full aspect-square max-w-[320px] mx-auto mb-10 mt-4 flex items-center justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        {rings.map((ring, idx) => (
          <motion.div
            key={idx}
            className="absolute inset-0 rounded-full border-2 border-primary/10"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: 3,
              delay: ring.delay,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        ))}

        <motion.div
          className="absolute inset-4 rounded-full border border-primary/20"
          animate={{ rotate: 360 }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'linear',
          }}
        />

        <div className="relative w-4/5 h-4/5 rounded-full overflow-hidden border-4 border-white dark:border-slate-800 shadow-2xl">
          <motion.img
            ref={profileImageRef}
            alt="Luca - Frontend Developer Profile"
            className="w-full h-full object-cover grayscale"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAZaXQns5cD3Ly_23wRGdz_znos9hD8IZsXWMCmffxq0izYrN6-VQu6bzJOnv3nKEuWn42x8vDzOQ9aHLzqdXZPJx8EMryKBArkW7rwfH4zhCG2lwUHECQ298UQvlYRXqVlPMH4uwnFcnhTW9trYeacumRcd2iSvGHcPiZa4b_lQ1x-32uINiOJ6HJwNM5OMcPz95KhdrlFkRKS9l70HUGafONRIHIlgsQVQr6u17Sk1sp6KUUOwdPdt8gQ8vFVMa45eM9nOTvcKRQ"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          />
        </div>
      </motion.div>

      {/* Text Content */}
      <motion.div
        className="w-full space-y-4"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary font-medium text-sm"
          variants={itemVariants}
          whileHover={{ scale: 1.05, backgroundColor: 'rgba(109, 40, 217, 0.2)' }}
        >
          <span>Hey, I'm Luca</span>
          <span className="text-base">👋</span>
        </motion.div>

        <motion.h1
          className="text-5xl font-extrabold tracking-tight leading-[1.1]"
          variants={itemVariants}
        >
          <span className="text-primary">Frontend</span>
          <br />
          <span className="dark:text-white">Developer</span>
        </motion.h1>

        <motion.p
          className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed max-w-sm"
          variants={itemVariants}
        >
          I'm a frontend developer based in Italy. I'll help you build beautiful websites your users
          will love.
        </motion.p>

        <motion.div className="flex flex-col gap-3 pt-6" variants={itemVariants}>
          <motion.button
            whileHover={{ scale: 1.02, boxShadow: '0 10px 30px rgba(0,0,0,0.3)' }}
            whileTap={{ scale: 0.98 }}
            className="w-full bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-semibold py-4 rounded-2xl shadow-lg transition-transform"
          >
            Get In Touch
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.02, borderColor: '#6D28D9' }}
            whileTap={{ scale: 0.98 }}
            className="w-full bg-white dark:bg-slate-800 text-slate-900 dark:text-white font-semibold py-4 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm transition-transform"
          >
            Browse Projects
          </motion.button>
        </motion.div>
      </motion.div>
    </div>
  )
}
