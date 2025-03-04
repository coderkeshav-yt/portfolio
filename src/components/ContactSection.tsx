import { motion } from 'framer-motion';
import { useState } from 'react';
import SocialLinks from './SocialLinks';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../firebase';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

interface FormData {
  name: string;
  email: string;
  mobile: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  mobile?: string;
  message?: string;
}

const ContactSection = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    mobile: '',
    message: ''
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)) {
      newErrors.email = 'Invalid email address';
    }

    if (!formData.mobile.trim()) {
      newErrors.mobile = 'Mobile number is required';
    } else if (!/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/i.test(formData.mobile)) {
      newErrors.mobile = 'Invalid mobile number';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;

    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const docRef = await addDoc(collection(db, 'contacts'), {
        name: formData.name,
        email: formData.email,
        mobile: formData.mobile,
        message: formData.message,
        timestamp: new Date()
      });
      
      setSubmitStatus('success');
      setFormData({ name: '', email: '', mobile: '', message: '' });
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  const socialLinks = [
    { name: 'GitHub', url: 'https://github.com/coderkeshav-yt', icon: <FaGithub className="text-2xl" /> },
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/keshav-singh-developer/', icon: <FaLinkedin className="text-2xl" /> },
    { name: 'Twitter', url: 'https://twitter.com/coderkeshav', icon: <FaTwitter className="text-2xl" /> },
  ];

  return (
    <section id="contact" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-purple-500/5 to-pink-500/5 animate-gradient"></div>
      <div className="section-container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="space-y-12">
          <div className="text-center">
            <motion.h2
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary via-purple-500 to-pink-500 text-transparent bg-clip-text animate-gradient">
              Get in Touch
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-gray-300 max-w-2xl mx-auto text-lg leading-relaxed">
              Have a question or want to work together? Feel free to reach out!
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12">
            <motion.form
              onSubmit={handleSubmit}
              className="space-y-4 md:space-y-6 backdrop-blur-xl bg-gray-800/20 border border-gray-700/30 rounded-2xl p-4 md:p-8 shadow-xl hover:shadow-primary/20 transition-all duration-500 hover:border-primary/20"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold mb-6 text-gray-200 bg-gradient-to-r from-primary via-purple-500 to-pink-500 text-transparent bg-clip-text animate-gradient">Send a Message</h3>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  className={`w-full px-4 py-3 rounded-lg bg-gray-800/30 backdrop-blur-sm border-2 ${errors.name ? 'border-red-500' : 'border-gray-700/50'} focus:border-primary focus:ring-2 focus:ring-primary/20 focus:outline-none transition-all duration-300 hover:bg-gray-800/40`}
                />
                {errors.name && (
                  <p className="mt-1 text-sm text-red-500">{errors.name}</p>
                )}
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your Email"
                  className={`w-full px-4 py-3 rounded-lg bg-gray-800/30 backdrop-blur-sm border-2 ${errors.email ? 'border-red-500' : 'border-gray-700/50'} focus:border-primary focus:ring-2 focus:ring-primary/20 focus:outline-none transition-all duration-300 hover:bg-gray-800/40`}
                />
                {errors.email && (
                  <p className="mt-1 text-sm text-red-500">{errors.email}</p>
                )}
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.15 }}
                viewport={{ once: true }}
              >
                <input
                  type="tel"
                  name="mobile"
                  value={formData.mobile}
                  onChange={handleChange}
                  placeholder="Your Mobile Number"
                  className={`w-full px-4 py-3 rounded-lg bg-gray-800/30 backdrop-blur-sm border-2 ${errors.mobile ? 'border-red-500' : 'border-gray-700/50'} focus:border-primary focus:ring-2 focus:ring-primary/20 focus:outline-none transition-all duration-300 hover:bg-gray-800/40`}
                />
                {errors.mobile && (
                  <p className="mt-1 text-sm text-red-500">{errors.mobile}</p>
                )}
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your Message"
                  rows={5}
                  className={`w-full px-4 py-3 rounded-lg bg-gray-800/30 backdrop-blur-sm border-2 ${errors.message ? 'border-red-500' : 'border-gray-700/50'} focus:border-primary focus:ring-2 focus:ring-primary/20 focus:outline-none transition-all duration-300 hover:bg-gray-800/40 resize-none`}
                />
                {errors.message && (
                  <p className="mt-1 text-sm text-red-500">{errors.message}</p>
                )}
              </motion.div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                className={`btn-primary w-full py-4 rounded-lg ${isSubmitting ? 'opacity-75 cursor-not-allowed' : ''}`}
                whileHover={{ scale: 1.02, boxShadow: '0 20px 30px rgba(52, 144, 220, 0.25)' }}
                whileTap={{ scale: 0.98 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </motion.button>

              {submitStatus === 'success' && (
                <motion.p
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-green-500 text-center"
                >
                  Message sent successfully!
                </motion.p>
              )}
              {submitStatus === 'error' && (
                <motion.p
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-red-500 text-center"
                >
                  Failed to send message. Please try again.
                </motion.p>
              )}
            </motion.form>

            <motion.div
              className="space-y-4 md:space-y-8"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <motion.div
                className="backdrop-blur-xl bg-gray-800/20 border border-gray-700/30 rounded-2xl p-4 md:p-8 shadow-xl hover:shadow-primary/20 transition-all duration-500 hover:border-primary/20 hover:scale-[1.02] group bg-gradient-to-br from-gray-800/30 via-gray-800/20 to-gray-800/30 hover:from-primary/5 hover:via-purple-500/5 hover:to-pink-500/5 space-y-6 md:space-y-8"
                whileHover={{ scale: 1.03, y: -5 }}
              >
                <SocialLinks />
              </motion.div>

              <motion.div
                className="backdrop-blur-xl bg-gray-800/20 border border-gray-700/30 rounded-2xl p-8 shadow-xl hover:shadow-primary/20 transition-all duration-500 hover:border-primary/20 hover:scale-[1.02] group bg-gradient-to-br from-gray-800/30 via-gray-800/20 to-gray-800/30 hover:from-primary/5 hover:via-purple-500/5 hover:to-pink-500/5"
                whileHover={{ scale: 1.03, y: -5 }}
              >
                <h3 className="text-2xl font-bold mb-4 text-gray-200 bg-gradient-to-r from-primary via-purple-500 to-pink-500 text-transparent bg-clip-text animate-gradient">Location</h3>
                <div className="space-y-2">
                  <p className="text-gray-300 flex items-center gap-3 group-hover:text-primary transition-colors duration-300">
                    <span className="text-primary">📍</span>
                    Based in New Delhi, India
                  </p>
                  <p className="text-gray-300 flex items-center gap-3 group-hover:text-primary transition-colors duration-300">
                    <span className="text-primary">🌍</span>
                    Available for remote work worldwide
                  </p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;