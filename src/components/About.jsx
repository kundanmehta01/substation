import { Zap, Wrench, BarChart2, Sun, ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'
import proj1 from '../assets/project_substation_build.png'
import proj2 from '../assets/project_powerline_grid.png'
import proj3 from '../assets/project_solar_plant.png'
import proj4 from '../assets/project_control_room.png'

const services = [
  {
    icon: Zap,
    title: 'Substation Construction',
    desc: 'Design, supply and commission 11kV to 220kV substations with modern switchgear and protection systems for utilities and industry.',
    img: proj1
  },
  {
    icon: Wrench,
    title: 'Operation & Maintenance',
    desc: 'Comprehensive O&M contracts ensuring high availability and safe operation of electrical infrastructure assets.',
    img: proj4
  },
  {
    icon: BarChart2,
    title: 'Power Grid Solutions',
    desc: 'High-voltage transmission line erection, stringing, and grid interconnection for state utilities and private developers.',
    img: proj2
  },
  {
    icon: Sun,
    title: 'Renewable Integration',
    desc: 'Solar and wind energy evacuation infrastructure, bay extensions, and renewable energy grid-code compliance.',
    img: proj3
  },
]

export default function About() {
  return (
    <section id="about" className="bg-white min-h-screen xl:min-h-0 flex flex-col justify-center py-16 border-b border-neutral-100">
      <div className="max-w-7xl mx-auto px-6 w-full">

        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-10 flex flex-col md:flex-row md:items-end justify-between gap-6"
        >
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-1.5 h-1.5 rounded-full bg-brand-900" />
              <span className="text-brand-900 text-sm font-bold tracking-[0.15em] uppercase">Core Expertise</span>
            </div>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-neutral-900 mb-6 leading-[1.1]">
              End-to-End Energy<br />
              <span className="text-neutral-400">Infrastructure.</span>
            </h2>
            <p className="text-neutral-500 text-lg leading-relaxed max-w-xl">
              From project planning to long-term operations, we provide the full spectrum of
              electrical engineering services across India with uncompromised quality and safety.
            </p>
          </div>
          
          <div className="hidden md:block">
            <a href="#projects" className="inline-flex items-center gap-2 text-brand-900 font-bold border-b-2 border-brand-900 pb-1 hover:text-brand-700 hover:border-brand-700 transition-colors">
              Explore Our Work <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </motion.div>

        {/* Cinematic Service Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 h-auto">
          {services.map(({ icon: Icon, title, desc, img }, idx) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              className="group relative h-[280px] md:h-[300px] w-full rounded-2xl overflow-hidden cursor-pointer"
            >
              {/* Background Image */}
              <div className="absolute inset-0">
                <img 
                  src={img} 
                  alt={title} 
                  className="w-full h-full object-cover grayscale-[0.8] group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700 ease-out"
                />
              </div>

              {/* Gradient Overlays */}
              <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-neutral-900/40 to-transparent transition-opacity duration-500 group-hover:opacity-0" />
              <div className="absolute inset-x-0 bottom-0 h-3/5 bg-gradient-to-t from-neutral-900/95 via-neutral-900/80 to-transparent transition-all duration-500 group-hover:h-4/5" />

              {/* Content Box */}
              <div className="absolute inset-0 p-8 flex flex-col justify-end">
                {/* Title */}
                <h3 className="font-display text-xl md:text-2xl font-bold text-white mb-3 transform group-hover:-translate-y-2 transition-transform duration-500 line-clamp-2">
                  {title}
                </h3>

                {/* Hidden Description (Revealed on hover) */}
                <div className="overflow-hidden h-0 group-hover:h-32 transition-all duration-500 ease-in-out">
                  <p className="text-neutral-300 text-sm leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                    {desc}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Dynamic CTA Strip */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-12 relative overflow-hidden rounded-3xl bg-neutral-900 py-10 px-10 md:px-20 text-center shadow-lg"
        >
          {/* Decorative Glows */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[300px] bg-brand-900/40 blur-[100px] rounded-[100%] pointer-events-none" />
          
          <div className="relative z-10 max-w-3xl mx-auto flex flex-col items-center">
            <h3 className="font-display text-2xl md:text-4xl font-bold text-white mb-4">
              Ready to construct <span className="text-brand-400">your robust energy future?</span>
            </h3>
            <p className="text-neutral-400 text-base mb-8 max-w-xl">
              Speak with our senior engineering team to get an end-to-end assessment and quote for your next high-voltage project.
            </p>
            <a
              href="mailto:info@elektraserve.in"
              className="inline-flex items-center gap-3 bg-white text-neutral-900 font-bold px-10 py-4 rounded-full hover:bg-brand-50 hover:scale-105 hover:shadow-xl hover:shadow-white/10 transition-all duration-300 group"
            >
              Request a Consultation
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </motion.div>

      </div>
    </section>
  )
}
