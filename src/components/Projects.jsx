import { MapPin } from 'lucide-react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { projectsData } from '../data/projects'

const tagColor = {
  Substation:   'bg-blue-100 text-blue-800',
  Transmission: 'bg-purple-100 text-purple-800',
  Renewable:    'bg-green-100 text-green-800',
  Automation:   'bg-orange-100 text-orange-800',
}

export default function Projects() {
  return (
    <section id="projects" className="bg-white min-h-screen xl:min-h-0 flex flex-col justify-center py-16">
      <div className="max-w-7xl mx-auto px-6 w-full">

        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-10"
        >
          <span className="label-tag">Our Work</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-neutral-900 mt-3 mb-4">
            Landmark Projects
          </h2>
          <div className="w-16 h-1 bg-brand-900 rounded mb-5" />
          <p className="text-neutral-500 text-base max-w-lg leading-relaxed">
            A selection of significant projects delivered across India, showcasing our
            engineering capability and commitment to quality.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-8">
          {projectsData.slice(0, 4).map(({ id, img, title, location, tag, desc }, idx) => (
            <motion.div
              key={id}
              initial={{ opacity: 0, scale: 0.95, y: 30 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              whileHover={{ y: -5 }}
              className="border border-neutral-200 rounded-xl overflow-hidden hover:shadow-card-hover transition-all duration-300 group cursor-pointer bg-white"
            >
              <Link to={`/projects/${id}`} className="block h-full flex flex-col">
                {/* Image */}
                <div className="relative h-44 overflow-hidden bg-neutral-100 shrink-0">
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
                <div className="p-5 flex flex-col flex-grow">
                  <div className="flex items-center gap-1.5 text-neutral-400 text-xs mb-2 font-medium">
                    <MapPin className="w-3.5 h-3.5 flex-shrink-0" />
                    {location}
                  </div>
                  <h3 className="font-display text-base font-bold text-neutral-900 mb-2 group-hover:text-brand-900 transition-colors duration-200 line-clamp-1">
                    {title}
                  </h3>
                  <p className="text-neutral-500 text-sm leading-relaxed line-clamp-3">{desc}</p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* View all link */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-10 text-center"
        >
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 text-sm font-bold text-brand-900 border-2 border-brand-900 px-8 py-3.5 rounded hover:bg-brand-900 hover:text-white transition-all duration-300"
          >
            View All Projects <span>→</span>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
