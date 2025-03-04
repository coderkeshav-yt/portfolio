import { motion } from 'framer-motion';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 bg-dark/50 border-t border-gray-800">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="flex flex-col items-center space-y-4"
        >
          <p className="text-gray-400 text-center">
            Crafting digital experiences with modern web technologies
          </p>
          <div className="text-sm text-gray-500">
            © {currentYear} Keshav Kumar Singh. All rights reserved.
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;