import { motion } from 'framer-motion'
import { Quote, Star } from 'lucide-react'

const testimonials = [
  {
    quote: "Cut our report delivery time by 80%. What used to take days now takes hours. Atomik is a game-changer for our team.",
    author: "Sarah Chen",
    title: "Lead Security Consultant",
    company: "SecureForce",
    avatar: "SC",
    rating: 5,
    gradient: 'from-purple-500 to-indigo-600',
  },
  {
    quote: "The best investment our security team made this year. The AI-generated narratives are surprisingly accurate and save us countless hours.",
    author: "Michael Torres",
    title: "Director of Penetration Testing",
    company: "CyberGuard Solutions",
    avatar: "MT",
    rating: 5,
    gradient: 'from-emerald-500 to-teal-600',
  },
  {
    quote: "Finally, a tool built by pentesters, for pentesters. The CVSS calculator and template library alone are worth the subscription.",
    author: "Emily Watson",
    title: "Senior Security Analyst",
    company: "TechShield Inc",
    avatar: "EW",
    rating: 5,
    gradient: 'from-orange-500 to-red-600',
  },
  {
    quote: "Our clients love the professional reports. The branded templates make us look even more professional than before.",
    author: "David Kim",
    title: "Founder",
    company: "RedTeam Labs",
    avatar: "DK",
    rating: 5,
    gradient: 'from-blue-500 to-cyan-600',
  },
  {
    quote: "The collaboration features have transformed how we work with clients. Real-time updates and the client portal are excellent.",
    author: "Amanda Foster",
    title: "Security Practice Lead",
    company: "Nexus Security",
    avatar: "AF",
    rating: 5,
    gradient: 'from-pink-500 to-rose-600',
  },
  {
    quote: "Importing from Nessus and Burp directly into findings? Brilliant. Saves us so much manual data entry work.",
    author: "James Rodriguez",
    title: "Principal Consultant",
    company: "AppSec Partners",
    avatar: "JR",
    rating: 5,
    gradient: 'from-violet-500 to-purple-600',
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 50, rotateX: 20 },
  visible: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
}

export default function Testimonials() {
  return (
    <section className="py-24 md:py-32 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: 'spring', stiffness: 200 }}
            className="inline-flex items-center gap-1 mb-4"
          >
            {[...Array(5)].map((_, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0, rotate: -180 }}
                whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <Star className="w-6 h-6 fill-yellow-400 text-yellow-400" />
              </motion.div>
            ))}
          </motion.div>
          <h2 className="section-title mb-4">Loved by Security Professionals</h2>
          <p className="section-subtitle">
            Join thousands of pentesters who've transformed their reporting workflow
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.author}
              variants={itemVariants}
              whileHover={{ 
                y: -10,
                transition: { type: 'spring', stiffness: 400 }
              }}
              className="group relative bg-white rounded-2xl border border-slate-200 p-6 cursor-pointer overflow-hidden"
            >
              {/* Hover gradient overlay */}
              <motion.div
                className={`absolute inset-0 bg-gradient-to-br ${testimonial.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
              />

              {/* Quote icon */}
              <motion.div 
                className="absolute top-6 right-6"
                animate={{ 
                  rotate: [0, 10, -10, 0],
                  scale: [1, 1.1, 1],
                }}
                transition={{ duration: 4, repeat: Infinity, repeatDelay: 2 }}
              >
                <Quote className="w-8 h-8 text-emerald-100 group-hover:text-emerald-200 transition-colors" />
              </motion.div>

              {/* Rating */}
              <div className="flex gap-1 mb-4 relative">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ scale: 1.3, rotate: 15 }}
                    transition={{ type: 'spring', stiffness: 400 }}
                  >
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  </motion.div>
                ))}
              </div>

              {/* Quote */}
              <p className="text-slate-700 leading-relaxed mb-6 relative">
                "{testimonial.quote}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 relative">
                <motion.div 
                  className={`w-12 h-12 rounded-full bg-gradient-to-br ${testimonial.gradient} flex items-center justify-center text-white font-semibold shadow-lg`}
                  whileHover={{ scale: 1.1, rotate: [0, -5, 5, 0] }}
                  transition={{ duration: 0.3 }}
                >
                  {testimonial.avatar}
                </motion.div>
                <div>
                  <p className="font-semibold text-slate-800">{testimonial.author}</p>
                  <p className="text-sm text-slate-500">
                    {testimonial.title}, {testimonial.company}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
