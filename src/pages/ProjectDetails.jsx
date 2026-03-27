import { useEffect } from 'react'
import { useParams, Link, Navigate } from 'react-router-dom'
import { MapPin, ArrowLeft, Clock, Zap, Building } from 'lucide-react'
import { motion } from 'framer-motion'
import { projectsData } from '../data/projects'

export default function ProjectDetails() {
  const { id } = useParams()
  const project = projectsData.find(p => p.id === id)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [id])

  if (!project) {
    return <Navigate to="/projects" replace />
  }

  return (
    <div className="pt-24 min-h-screen bg-white pb-32">
      <div className="max-w-5xl mx-auto px-6">
        
        {/* Navigation */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="mb-10"
        >
          <Link to="/projects" className="inline-flex items-center gap-2 text-sm font-semibold text-neutral-500 hover:text-brand-900 transition-colors">
            <ArrowLeft className="w-4 h-4" /> Back to Projects
          </Link>
        </motion.div>

        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <span className="label-tag mb-4 inline-block">{project.tag}</span>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-neutral-900 mb-6 leading-tight">
            {project.title}
          </h1>
          
          <div className="flex flex-wrap gap-6 text-sm md:text-base font-medium text-neutral-600">
            <div className="flex items-center gap-2">
              <MapPin className="w-5 h-5 text-brand-400" />
              {project.location}
            </div>
            <div className="flex items-center gap-2">
              <Building className="w-5 h-5 text-brand-400" />
              Client: {project.client}
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5 text-brand-400" />
              Duration: {project.duration}
            </div>
          </div>
        </motion.div>

        {/* Hero Image */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="rounded-2xl overflow-hidden h-[400px] md:h-[500px] lg:h-[600px] mb-16 shadow-xl"
        >
          <img 
            src={project.img} 
            alt={project.title} 
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* Content */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="max-w-3xl flex gap-6"
        >
          <div className="hidden sm:block w-1.5 bg-brand-900 rounded-full shrink-0" />
          <div className="prose prose-lg prose-neutral max-w-none">
            <h3 className="font-display text-2xl font-bold text-neutral-900 mb-4">Project Overview</h3>
            <p className="text-neutral-600 leading-relaxed whitespace-pre-line text-lg">
              {project.fullDesc}
            </p>
          </div>
        </motion.div>

      </div>
    </div>
  )
}
