import { Link } from 'react-scroll'
import { motion } from 'framer-motion'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2
    }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" }
  }
}

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20">
      {/* Background Image & Overlay */}
      <motion.div 
        initial={{ scale: 1.05, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{ backgroundImage: `url('/src/assets/hero_substation_sunset.png')` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-neutral-900/95 via-neutral-900/70 to-transparent" />
        <div className="absolute inset-0 bg-neutral-900/40" />
      </motion.div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
        <motion.div 
          className="max-w-3xl"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          
          {/* Top Tagline */}
          <motion.div variants={itemVariants} className="flex items-center gap-3 mb-6">
            <div className="w-2 h-2 rotate-45 bg-brand-400 shrink-0" />
            <span className="text-white/90 text-xs font-semibold uppercase tracking-[0.2em]">
              Electrical Infrastructure Specialists
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1 variants={itemVariants} className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] mb-8">
            Reliable Electrical<br />
            Infrastructure<br />
            <span className="text-brand-400">Solutions</span>
          </motion.h1>

          {/* Paragraph */}
          <motion.div variants={itemVariants} className="flex gap-5">
            <div className="w-1 bg-brand-400 shrink-0 my-1 rounded-full" />
            <p className="text-neutral-200 text-lg md:text-xl leading-relaxed max-w-2xl font-light">
              As a leading electrical substation construction company, ElektraServe specializes in delivering turnkey EPC solutions for high-voltage infrastructure across India. By integrating advanced engineering and state-of-the-art technology, we ensure seamless installations that enhance power transmission.
            </p>
          </motion.div>

          {/* Scroll Down / CTA */}
          <motion.div variants={itemVariants} className="mt-12 flex items-center gap-6">
            <Link
              to="about"
              smooth
              duration={500}
              offset={-64}
              className="group cursor-pointer inline-flex items-center justify-center bg-brand-900 hover:bg-brand-800 text-white text-sm font-semibold px-8 py-4 rounded transition-all duration-300 relative overflow-hidden"
            >
              <span className="relative z-10 flex items-center gap-2">Explore Our Services</span>
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out" />
            </Link>
          </motion.div>

        </motion.div>
      </div>
      
      {/* Bottom arrow indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.7 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        >
          <div className="w-[1px] h-12 bg-white/50 mx-auto relative">
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3 h-3 border-r border-b border-white/80 rotate-45 translate-y-1/2" />
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}
