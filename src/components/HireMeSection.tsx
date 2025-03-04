import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../firebase';

interface HireFormData {
  name: string;
  email: string;
  projectType: string;
  budget: string;
  timeline: string;
  description: string;
}

interface Service {
  title: string;
  description: string;
  features: string[];
  icon: string;
}

const services: Service[] = [
  {
    title: 'Web Development',
    description: 'Full-stack web applications with modern technologies',
    features: [
      'Landing Pages',
      'E-commerce Solutions',
      'Portfolio Websites',
      'Web Applications',
      'API Integration'
    ],
    icon: '💻'
  },
  {
    title: 'UI/UX Design',
    description: 'Beautiful and intuitive user interfaces',
    features: [
      'User Interface Design',
      'User Experience Design',
      'Wireframing & Prototyping',
      'Design Systems',
      'Interactive Animations'
    ],
    icon: '🎨'
  },
  {
    title: 'Consultation',
    description: 'Technical guidance and project planning',
    features: [
      'Technical Architecture',
      'Code Review',
      'Performance Audits',
      'Project Planning',
      'Team Training'
    ],
    icon: '🤝'
  }
];

const HireMeSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState<HireFormData>({
    name: '',
    email: '',
    projectType: '',
    budget: '',
    timeline: '',
    description: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await addDoc(collection(db, 'hire-requests'), {
        ...formData,
        timestamp: new Date()
      });
      setSubmitStatus('success');
      setTimeout(() => {
        setIsModalOpen(false);
        setFormData({
          name: '',
          email: '',
          projectType: '',
          budget: '',
          timeline: '',
          description: ''
        });
        setSubmitStatus('idle');
      }, 2000);
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <section id="hire" className="py-32 relative overflow-hidden bg-gradient-to-b from-gray-900 via-dark to-dark">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent opacity-70"></div>
      
      <div className="section-container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="space-y-20"
        >
          <div className="text-center mb-16">
          <motion.h2
            className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-purple-500 to-pink-500 text-transparent bg-clip-text animate-gradient"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Hire Me
          </motion.h2>
          <motion.p
            className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Let's collaborate to bring your vision to life
          </motion.p>
          <motion.div
            className="mt-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <motion.a
              href={`mailto:coderkeshavyt@gmail.com?subject=${encodeURIComponent('Consultation Request')}&body=${encodeURIComponent('Hi Keshav,\n\nI would like to schedule a consultation to discuss my project requirements.\n\nBest regards,')}`}
              className="btn-primary text-lg font-semibold px-10 py-4 rounded-xl shadow-lg shadow-primary/20 inline-flex items-center gap-3 group"
              whileHover={{ scale: 1.05, boxShadow: '0 20px 30px rgba(52, 144, 220, 0.25)' }}
              whileTap={{ scale: 0.95 }}
            >
              <span>Schedule a Consultation</span>
              <span className="text-2xl group-hover:rotate-12 transition-transform">📅</span>
            </motion.a>
          </motion.div>
        </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="backdrop-blur-xl bg-gray-800/20 rounded-2xl p-8 border border-gray-700/50 hover:border-primary/30 transition-all duration-500 shadow-xl hover:shadow-primary/10 group"
                whileHover={{ y: -10, scale: 1.02 }}
              >
                <div className="space-y-6">
                  <span className="text-4xl block mb-4 transform group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </span>
                  <h3 className="text-2xl font-bold text-gray-200">{service.title}</h3>
                  <p className="text-gray-400">{service.description}</p>
                  <ul className="space-y-3">
                    {service.features.map((feature, featureIndex) => (
                      <motion.li
                        key={featureIndex}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: index * 0.1 + featureIndex * 0.1 }}
                        viewport={{ once: true }}
                        className="flex items-center gap-2 text-gray-300"
                      >
                        <span className="text-primary">✓</span>
                        {feature}
                      </motion.li>
                    ))}
                  </ul>
                  <motion.button
                    onClick={() => setIsModalOpen(true)}
                    className="btn-primary w-full py-3 rounded-lg text-center inline-block mt-4 shadow-lg shadow-primary/20"
                    whileHover={{ scale: 1.05, boxShadow: '0 20px 30px rgba(52, 144, 220, 0.25)' }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Get Started
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>


        </motion.div>
      </div>

      <AnimatePresence>
        {isModalOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
              onClick={() => setIsModalOpen(false)}
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none"
            >
              <div className="bg-gray-900/95 backdrop-blur-xl border border-gray-700/50 p-8 rounded-2xl shadow-2xl max-w-2xl w-full pointer-events-auto relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-purple-500/5 to-pink-500/5 animate-gradient"></div>
                <div className="relative z-10">
                  <div className="flex justify-between items-center mb-6">
                    <h3 className="text-2xl font-bold text-gray-200">Start Your Project</h3>
                    <button
                      onClick={() => setIsModalOpen(false)}
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      ✕
                    </button>
                  </div>
                  
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="Your Name"
                          required
                          className="w-full px-4 py-3 rounded-lg bg-gray-800/50 border-2 border-gray-700/50 focus:border-primary focus:ring-2 focus:ring-primary/20 focus:outline-none transition-all duration-300 hover:bg-gray-800/40"
                        />
                      </div>
                      <div>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="Your Email"
                          required
                          className="w-full px-4 py-3 rounded-lg bg-gray-800/50 border-2 border-gray-700/50 focus:border-primary focus:ring-2 focus:ring-primary/20 focus:outline-none transition-all duration-300 hover:bg-gray-800/40"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <select
                          name="projectType"
                          value={formData.projectType}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 rounded-lg bg-gray-800/30 backdrop-blur-sm border-2 border-gray-700/30 focus:border-primary/50 focus:ring-2 focus:ring-primary/20 focus:outline-none transition-all duration-300 hover:bg-gray-800/40 appearance-none cursor-pointer bg-[url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2224%22%20height%3D%2224%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22%23718096%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%3E%3Cpolyline%20points%3D%226%209%2012%2015%2018%209%22%3E%3C%2Fpolyline%3E%3C%2Fsvg%3E')] bg-no-repeat bg-[length:24px] bg-[center_right_1rem] hover:bg-[url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2224%22%20height%3D%2224%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22%233490dc%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%3E%3Cpolyline%20points%3D%226%209%2012%2015%2018%209%22%3E%3C%2Fpolyline%3E%3C%2Fsvg%3E')]"
                        >
                          <option value="">Select Project Type</option>
                          <option value="landing">Landing Page</option>
                          <option value="ecommerce">E-commerce Website</option>
                          <option value="portfolio">Portfolio Website</option>
                          <option value="webapp">Web Application</option>
                          <option value="mobile">Mobile App</option>
                          <option value="ui">UI/UX Design</option>
                          <option value="consultation">Consultation</option>
                          <option value="other">Other</option>
                        </select>
                      </div>
                      <div>
                        <select
                          name="budget"
                          value={formData.budget}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 rounded-lg bg-gray-800/30 backdrop-blur-sm border-2 border-gray-700/30 focus:border-primary/50 focus:ring-2 focus:ring-primary/20 focus:outline-none transition-all duration-300 hover:bg-gray-800/40 appearance-none cursor-pointer bg-[url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2224%22%20height%3D%2224%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22%23718096%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%3E%3Cpolyline%20points%3D%226%209%2012%2015%2018%209%22%3E%3C%2Fpolyline%3E%3C%2Fsvg%3E')] bg-no-repeat bg-[length:24px] bg-[center_right_1rem] hover:bg-[url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2224%22%20height%3D%2224%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22%233490dc%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%3E%3Cpolyline%20points%3D%226%209%2012%2015%2018%209%22%3E%3C%2Fpolyline%3E%3C%2Fsvg%3E')]"
                        >
                          <option value="">Select Budget Range</option>
                          <option value="xs">Less than $1,000</option>
                          <option value="small">$1,000 - $5,000</option>
                          <option value="medium">$5,000 - $10,000</option>
                          <option value="large">$10,000 - $20,000</option>
                          <option value="xl">$20,000+</option>
                          <option value="custom">Custom Budget</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <select
                        name="timeline"
                        value={formData.timeline}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg bg-gray-800/30 backdrop-blur-sm border-2 border-gray-700/30 focus:border-primary/50 focus:ring-2 focus:ring-primary/20 focus:outline-none transition-all duration-300 hover:bg-gray-800/40 appearance-none cursor-pointer bg-[url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2224%22%20height%3D%2224%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22%23718096%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%3E%3Cpolyline%20points%3D%226%209%2012%2015%2018%209%22%3E%3C%2Fpolyline%3E%3C%2Fsvg%3E')] bg-no-repeat bg-[length:24px] bg-[center_right_1rem] hover:bg-[url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2224%22%20height%3D%2224%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22%233490dc%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%3E%3Cpolyline%20points%3D%226%209%2012%2015%2018%209%22%3E%3C%2Fpolyline%3E%3C%2Fsvg%3E')]"
                      >
                        <option value="">Select Timeline</option>
                        <option value="urgent">Less than 2 weeks</option>
                        <option value="short">2-4 weeks</option>
                        <option value="normal">1-2 months</option>
                        <option value="extended">2-3 months</option>
                        <option value="flexible">3+ months</option>
                      </select>
                    </div>

                    <div>
                      <textarea
                        name="description"
                        value={formData.description}
                        onChange={handleChange}
                        placeholder="Tell me about your project requirements, goals, and any specific features you need..."
                        required
                        rows={4}
                        className="w-full px-4 py-3 rounded-lg bg-gray-800/50 border-2 border-gray-700/50 focus:border-primary focus:ring-2 focus:ring-primary/20 focus:outline-none transition-all duration-300 hover:bg-gray-800/40 resize-none"
                      ></textarea>
                    </div>

                    <motion.button
                      type="submit"
                      disabled={isSubmitting}
                      className={`btn-primary w-full py-4 rounded-lg ${isSubmitting ? 'opacity-75 cursor-not-allowed' : ''}`}
                      whileHover={{ scale: 1.02, boxShadow: '0 20px 30px rgba(52, 144, 220, 0.25)' }}
                      whileTap={{ scale: 0.98 }}
                    >
                      {isSubmitting ? 'Submitting...' : 'Submit Project Request'}
                    </motion.button>

                    {submitStatus === 'success' && (
                      <motion.p
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-green-500 text-center"
                      >
                        Project request submitted successfully!
                      </motion.p>
                    )}
                    {submitStatus === 'error' && (
                      <motion.p
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-red-500 text-center"
                      >
                        Failed to submit request. Please try again.
                      </motion.p>
                    )}
                  </form>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
};

export default HireMeSection;