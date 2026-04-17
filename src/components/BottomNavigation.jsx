import { motion } from 'framer-motion'
import { useState } from 'react'

export default function BottomNavigation() {
  const [activeTab, setActiveTab] = useState('home')

  const tabs = [
    { id: 'home', icon: 'home', label: 'Home' },
    { id: 'projects', icon: 'grid_view', label: 'Projects' },
    { id: 'about', icon: 'person', label: 'About' },
    { id: 'contact', icon: 'mail', label: 'Contact' },
  ]

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.3 }}
      className="fixed bottom-0 left-0 right-0 h-20 bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl border-t border-slate-200 dark:border-slate-800 flex items-center justify-around px-6 pb-4 z-40"
    >
      {tabs.map((tab) => (
        <motion.button
          key={tab.id}
          onClick={() => setActiveTab(tab.id)}
          className={`flex flex-col items-center gap-1 text-sm font-medium transition-colors ${
            activeTab === tab.id
              ? 'text-primary'
              : 'text-slate-400 dark:text-slate-500'
          }`}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <motion.span
            className="material-icons-outlined"
            layoutId={activeTab === tab.id ? 'active-icon' : undefined}
          >
            {tab.icon}
          </motion.span>
          <span className="text-[10px] font-bold">{tab.label}</span>
        </motion.button>
      ))}

      <motion.div
        className="fixed bottom-1 left-1/2 w-32 h-1 bg-slate-300 dark:bg-slate-700 rounded-full"
        layoutId="underline"
        initial={{ x: '-50%' }}
        animate={{ x: '-50%' }}
      />
    </motion.div>
  )
}
