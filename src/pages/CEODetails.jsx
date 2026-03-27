import { useEffect } from 'react'
import { BookOpen, GraduationCap, TrendingUp, Cpu, Briefcase, LayoutTemplate, Brain, HeartHandshake, ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'
import ceoImg from '../assets/ceo_avatar.png'

const bookCategories = [
  {
    title: 'Education, Case Method & Modern Learning',
    icon: GraduationCap,
    desc: 'For faculty, students, trainers, and education leaders.',
    books: [
      'Crack the Case: A Practical Playbook for Winning',
      'Master the Case Writing: A Practical Guide',
      'Master the Case: A Self-Help Guide',
      'Don’t Teach Me: Rise of the Google-it Generation',
    ]
  },
  {
    title: 'Sales Management & Revenue',
    icon: TrendingUp,
    desc: 'For sales leaders, founders, and enterprise teams.',
    books: [
      'Selling the Invisible (Services)',
      'Money Left on the Table',
      'NEAT Selling Blueprint',
      'The JOLT Playbook',
      'MEDDIC Playbook',
      'Gap Selling & Echo Selling',
      'Never Hear "No" Again',
    ]
  },
  {
    title: 'AI for Business & Sales',
    icon: Cpu,
    desc: 'For CEOs, entrepreneurs, and managers.',
    books: [
      'AI for the CEO',
      'AI for the Solo Entrepreneur',
      'AI for Teachers, Trainers and Educators',
      'AI-Powered Project Manager',
      'The AI Sales Advantage',
    ]
  },
  {
    title: 'Entrepreneurship & MSME',
    icon: Briefcase,
    desc: 'For founders, family businesses, and MSME leaders.',
    books: [
      'SME IPO Ready',
      'MSME’s 10× Growth',
      'Family Business 10×',
    ]
  },
  {
    title: 'Product Design & Innovation',
    icon: LayoutTemplate,
    desc: 'For product managers, engineers, and designers.',
    books: [
      'Design That Works',
      'The Product Design Code',
      'Design Thinking in Action',
    ]
  },
  {
    title: 'Strategy & Leadership',
    icon: Brain,
    desc: 'For CXOs, senior managers, and consultants.',
    books: [
      'Disruptive Strategy Decoded',
      'Clarity is the Advantage',
      'Growth Gremlins',
      'The Accountability Crisis',
    ]
  },
  {
    title: 'Negotiation & Human Skills',
    icon: HeartHandshake,
    desc: 'For professionals navigating complex dynamics.',
    books: [
      'The Negotiation Self',
      'The Compression Code',
      'The Distance Bridge (Relationships)',
    ]
  }
]

export default function CEODetails() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="pt-20 bg-neutral-50 min-h-screen">
      
      {/* Bio Header */}
      <section className="bg-white border-b border-neutral-200">
        <div className="max-w-5xl mx-auto px-6 py-20 pb-24">
          <div className="flex flex-col md:flex-row gap-12 items-center md:items-start max-w-4xl mx-auto">
            
            {/* Image */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
              className="w-56 h-56 md:w-72 md:h-72 shrink-0 rounded-full overflow-hidden border-[6px] border-white shadow-card-hover group relative"
            >
              <img 
                src={ceoImg} 
                alt="Ketan Gandhi" 
                className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-110" 
              />
              <div className="absolute inset-0 rounded-full ring-1 ring-inset ring-black/10" />
            </motion.div>

            {/* Text */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            >
              <span className="label-tag">Founder & Visionary Leader</span>
              <h1 className="font-display text-4xl md:text-5xl font-bold text-neutral-900 mt-3 mb-5">
                Ketan Gandhi
              </h1>
              
              <div className="space-y-5 text-neutral-600 text-base leading-relaxed">
                <p>
                  Welcome to ElektraServe Energy Services. At the heart of our organization 
                  is Ketan Gandhi, a visionary leader and seasoned professional with over 
                  three decades of rich industry experience in power infrastructure and substations.
                </p>
                <p>
                  Ketan Gandhi is a Graduate Engineer in Instrumentation & Control and an 
                  alumnus of the prestigious Indian Institute of Management, Ahmedabad (IIM-A). 
                  He has further enriched his expertise through the Executive Program at Harvard 
                  Business School, a Diploma in Wind Power from Sweden, and is recognized as a 
                  Chartered Engineer, registered with the Engineering Council, UK.
                </p>
                <p>
                  With 33 years of experience spanning diverse sectors, Ketan's vision for ElektraServe 
                  is to build India's most reliable high-voltage grids. He brings a unique blend of 
                  technical acumen, strategic insight, and operational excellence to ensuring 
                  world-class execution for every substation and transmission line project.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Books Section */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6">
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16 max-w-2xl mx-auto"
          >
            <div className="w-16 h-16 bg-brand-50 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <BookOpen className="w-8 h-8 text-brand-900" />
            </div>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
              Books by Ketan Gandhi
            </h2>
            <p className="text-neutral-500 max-w-lg mx-auto leading-relaxed">
              Practical, field-tested books for leaders, entrepreneurs, educators & professionals.
              Grounded in practice, case studies, and execution tools.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {bookCategories.map(({ title, desc, books }, idx) => (
              <motion.div 
                key={title} 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className="group bg-white border border-neutral-100 rounded-2xl p-6 hover:border-brand-200 hover:shadow-xl hover:shadow-brand-900/5 transition-all duration-300 flex flex-col"
              >
                <div className="mb-4 pb-4 border-b border-neutral-50 grow">
                  <h3 className="font-display font-bold text-neutral-900 mb-2 leading-tight group-hover:text-brand-900 transition-colors">{title}</h3>
                  <p className="text-xs text-neutral-400 leading-relaxed">{desc}</p>
                </div>
                <ul className="space-y-2.5">
                  {books.map(book => (
                    <li key={book} className="flex gap-2.5 text-xs text-neutral-600 group-hover:text-neutral-900 transition-colors">
                      <div className="w-1 h-1 rounded flex-shrink-0 bg-brand-300 mt-1.5" />
                      <span className="leading-snug tracking-wide">{book}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          {/* Store CTA */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="mt-20 bg-brand-900 rounded-2xl p-10 md:p-14 text-center text-white max-w-4xl mx-auto shadow-xl relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 pointer-events-none" />
            
            <div className="relative z-10">
              <h3 className="font-display text-3xl font-bold mb-4">Available on WhatsApp Store</h3>
              <p className="text-brand-100 mb-8 max-w-xl mx-auto text-lg leading-relaxed">
                All books are available directly via WhatsApp for quick ordering, personal 
                recommendations, and institutional support.
              </p>
              <a 
                href="https://wa.me/c/917972692474" 
                target="_blank" 
                rel="noreferrer"
                className="inline-flex items-center gap-2 bg-white text-brand-900 font-bold px-10 py-4 rounded hover:bg-neutral-100 hover:scale-105 transition-all duration-300 shadow-lg"
              >
                Order on WhatsApp <ArrowRight className="w-5 h-5" />
              </a>
            </div>
          </motion.div>

        </div>
      </section>

    </div>
  )
}
