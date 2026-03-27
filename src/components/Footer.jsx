import { Zap, Mail, Phone, MapPin, Linkedin, Twitter, Facebook, ArrowUpRight } from 'lucide-react'
import { Link } from 'react-scroll'
import { motion } from 'framer-motion'

const links = ['Home', 'About', 'Projects', 'Vision', 'Contact']
const services = [
  'Substation Construction',
  'Transmission Lines',
  'O&M Services',
  'Solar Integration',
  'SCADA & Automation',
  'Consultancy',
]

export default function Footer() {
  return (
    <footer id="contact" className="bg-neutral-900 border-t border-neutral-200">
      <div className="max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

        {/* Brand Info */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-2"
        >
          <h4 className="font-display font-semibold text-white text-lg mb-6">Company Info</h4>

          <p className="text-neutral-400 text-sm leading-relaxed max-w-md mb-8">
            ElektraServe Energy Services Pvt. Ltd. — delivering world-class electrical
            infrastructure solutions across India since 2009. Precision engineering for a powerful future.
          </p>

          <div className="space-y-5">
            <div className="flex items-start gap-4 text-sm text-neutral-400 group">
              <div className="w-8 h-8 rounded bg-white/5 flex items-center justify-center shrink-0 group-hover:bg-brand-900/20 transition-colors">
                <MapPin className="w-4 h-4 text-brand-400" />
              </div>
              <span className="pt-1.5 leading-relaxed">G1-702, Jasminimum, Magarpatta City,<br />Hadapsar, Pune - 411028, India</span>
            </div>
            <div className="flex items-center gap-4 text-sm text-neutral-400 group">
              <div className="w-8 h-8 rounded bg-white/5 flex items-center justify-center shrink-0 group-hover:bg-brand-900/20 transition-colors">
                <Phone className="w-4 h-4 text-brand-400" />
              </div>
              <span>+91-7972692474</span>
            </div>
            <div className="flex items-center gap-4 text-sm text-neutral-400 group">
              <div className="w-8 h-8 rounded bg-white/5 flex items-center justify-center shrink-0 group-hover:bg-brand-900/20 transition-colors">
                <Mail className="w-4 h-4 text-brand-400" />
              </div>
              <span>info@kgguruji.com</span>
            </div>
          </div>
        </motion.div>

        {/* Quick Links */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <h4 className="font-display font-semibold text-white text-lg mb-6">Quick Links</h4>
          <ul className="space-y-4">
            {links.map((label) => (
              <li key={label}>
                <Link
                  to={label.toLowerCase()}
                  smooth
                  duration={500}
                  offset={-80}
                  className="text-neutral-400 hover:text-white text-sm cursor-pointer transition-colors duration-150 flex items-center gap-1.5 group w-fit"
                >
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all duration-200 text-brand-400" />
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Services */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h4 className="font-display font-semibold text-white text-lg mb-6">Services</h4>
          <ul className="space-y-4">
            {services.map((s) => (
              <li key={s} className="text-neutral-400 text-sm hover:text-white transition-colors cursor-default">
                {s}
              </li>
            ))}
          </ul>
        </motion.div>

      </div>

      {/* Bottom strip */}
      <div className="border-t border-neutral-800">
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-neutral-500 text-sm">
            © {new Date().getFullYear()} ElektraServe Energy Services Pvt. Ltd. All rights reserved.
          </p>

          <div className="flex items-center gap-3">
            {[Linkedin, Twitter, Facebook].map((Icon, idx) => (
              <a 
                key={idx} 
                href="#" 
                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-neutral-400 hover:text-white hover:bg-brand-900 hover:scale-110 transition-all duration-300"
              >
                <Icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
