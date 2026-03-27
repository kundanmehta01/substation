import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { MapPin, ArrowLeft } from 'lucide-react'
import { motion } from 'framer-motion'
import { projectsData } from '../data/projects'

const tagColor = {
  Substation:   'bg-blue-100 text-blue-800',
  Transmission: 'bg-purple-100 text-purple-800',
  Renewable:    'bg-green-100 text-green-800',
  Automation:   'bg-orange-100 text-orange-800',
}

export default function AllProjects() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="pt-24 bg-neutral-50 min-h-screen pb-24">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <div className="mb-6">
            <Link to="/" className="inline-flex items-center gap-2 text-sm font-semibold text-neutral-500 hover:text-brand-900 transition-colors">
              <ArrowLeft className="w-4 h-4" /> Back to Home
            </Link>
          </div>
          <span className="label-tag">Our Portfolio</span>
          <h1 className="font-display text-4xl md:text-5xl font-bold text-neutral-900 mt-3 mb-4">
            All Projects
          </h1>
          <div className="w-16 h-1 bg-brand-900 rounded mb-5" />
          <p className="text-neutral-500 text-base max-w-2xl leading-relaxed">
            A comprehensive look at our engineering capability, execution excellence, 
            and commitment to building India's energy backbone.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {projectsData.map(({ id, img, title, location, tag, desc }, idx) => (
            <motion.div
              key={id}
              initial={{ opacity: 0, scale: 0.95, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -5 }}
              className="border border-neutral-200 rounded-xl overflow-hidden hover:shadow-card-hover transition-all duration-300 group bg-white flex flex-col"
            >
              <Link to={`/projects/${id}`} className="flex flex-col h-full">
                {/* Image */}
                <div className="relative h-56 overflow-hidden bg-neutral-100 shrink-0">
                  <img
                    src={img}
                    alt={title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-brand-900/0 group-hover:bg-brand-900/10 transition-colors duration-300" />
                  <span className={`absolute top-4 left-4 text-xs font-bold px-3 py-1 rounded shadow-sm ${tagColor[tag]}`}>
                    {tag}
                  </span>
                </div>
                {/* Text */}
                <div className="p-6 flex flex-col grow">
                  <div className="flex items-center gap-1.5 text-neutral-400 text-xs mb-3 font-medium">
                    <MapPin className="w-3.5 h-3.5 flex-shrink-0" />
                    {location}
                  </div>
                  <h3 className="font-display text-lg font-bold text-neutral-900 mb-3 group-hover:text-brand-900 transition-colors duration-200">
                    {title}
                  </h3>
                  <p className="text-neutral-500 text-sm leading-relaxed mb-4 grow">{desc}</p>
                  
                  <div className="mt-auto pt-4 border-t border-neutral-100 flex items-center justify-between text-brand-900 font-semibold text-sm">
                    View Project Details <span>→</span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

      </div>
    </div>
  )
}
