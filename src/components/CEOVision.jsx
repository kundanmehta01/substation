import { Quote, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import ceoImg from '../assets/ceo_avatar.png'

export default function CEOVision() {
  return (
    <section id="vision" className="bg-neutral-50 min-h-screen xl:min-h-0 flex flex-col justify-center py-16 border-t border-neutral-100 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 w-full">

        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <span className="label-tag">Leadership Vision</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-neutral-900 mt-3 mb-4">
            A Message from Our Leader
          </h2>
          <div className="w-16 h-1 bg-brand-900 mx-auto rounded" />
        </motion.div>

        {/* Content Box */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.98, y: 40 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="bg-white border border-neutral-200 rounded-2xl shadow-sm hover:shadow-card-hover transition-shadow duration-500 overflow-hidden flex flex-col md:flex-row items-stretch relative group"
        >

          {/* Image */}
          <div className="w-full md:w-2/5 shrink-0 relative overflow-hidden bg-neutral-100">
            <motion.img
              initial={{ scale: 1.1, filter: "grayscale(100%) blur(4px)" }}
              whileInView={{ scale: 1, filter: "grayscale(100%) blur(0px)" }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              src={ceoImg}
              alt="Ketan Gandhi"
              className="w-full h-80 md:h-full object-cover object-top transition-all duration-700 group-hover:grayscale-0 group-hover:scale-105"
            />
            {/* Overlay gradient for image depth */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </div>

          {/* Quote & Credentials */}
          <div className="w-full md:w-3/5 p-8 md:p-10 flex flex-col justify-center">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <Quote className="w-10 h-10 text-brand-100 mb-6" />

              <blockquote className="text-neutral-700 text-lg md:text-xl leading-relaxed mb-6 italic">
                "At ElektraServe, we don't just build infrastructure — we build the backbone of
                India's energy future. Over my three decades in the industry, my vision has always
                been to drive operational excellence and reliability in every substation and transmission
                project we deliver."
              </blockquote>
            </motion.div>

            {/* Name */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mb-6"
            >
              <p className="font-display text-neutral-900 font-bold text-xl">Ketan Gandhi</p>
              <p className="text-brand-900 font-semibold text-sm mt-0.5">Founder & Visionary Leader</p>
              <p className="text-neutral-500 text-xs mt-1">ElektraServe Energy Services</p>
            </motion.div>

            {/* Credentials Grid */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="grid grid-cols-2 gap-6 pb-5 mb-5 border-b border-neutral-100"
            >
              <div>
                <p className="text-neutral-900 font-bold text-sm">IIM Ahmedabad & HBS</p>
                <p className="text-neutral-500 text-xs mt-0.5">Alumnus</p>
              </div>
              <div>
                <p className="text-neutral-900 font-bold text-sm">33+ Years</p>
                <p className="text-neutral-500 text-xs mt-0.5">Industry Experience</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.7 }}
            >
              <Link
                to="/ketan-gandhi"
                className="inline-flex items-center gap-2 text-brand-900 font-bold text-sm hover:text-brand-700 transition-colors group/link"
              >
                Read full biography & view books 
                <ArrowRight className="w-4 h-4 transform group-hover/link:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </div>

        </motion.div>

      </div>
    </section>
  )
}
