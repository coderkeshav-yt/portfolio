import { motion } from 'framer-motion';

interface Skill {
  name: string;
  level: number;
  color: string;
  icon: string;
}

const skills: Skill[] = [
  { name: 'React', level: 90, color: '#61DAFB', icon: '⚛️' },
  { name: 'TypeScript', level: 85, color: '#3178C6', icon: '📘' },
  { name: 'Node.js', level: 80, color: '#339933', icon: '🟢' },
  { name: 'UI/UX Design', level: 75, color: '#FF61F6', icon: '🎨' },
  { name: 'TailwindCSS', level: 85, color: '#06B6D4', icon: '🌊' },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-32 relative overflow-hidden bg-gradient-to-b from-dark via-gray-900 to-dark">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent opacity-70"></div>
      
      <div className="section-container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="space-y-20"
        >
          <div className="text-center max-w-3xl mx-auto">
            <motion.h2 
              className="text-5xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-primary via-purple-500 to-pink-500 text-transparent bg-clip-text animate-gradient tracking-tight"
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              About Me
            </motion.h2>
            <motion.p 
              className="text-2xl text-gray-300 leading-relaxed font-medium"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Transforming ideas into exceptional digital experiences
            </motion.p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <motion.div
              className="space-y-8"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <motion.div 
                className="backdrop-blur-xl bg-gray-800/20 p-8 rounded-2xl border border-gray-700/50 hover:border-primary/30 transition-all duration-500 shadow-xl hover:shadow-primary/10 transform hover:scale-[1.02] group"
                whileHover={{ y: -5 }}
              >
                <h3 className="text-2xl font-bold text-gray-200 mb-6 flex items-center gap-3">
                  <span className="text-primary text-3xl">👨‍💻</span>
                  Professional Journey
                </h3>
                <div className="space-y-6 text-lg text-gray-300 leading-relaxed">
                  <p>
                    As a passionate web developer, I specialize in creating responsive, user-friendly applications
                    that combine elegant design with efficient functionality. My expertise spans both frontend and
                    backend development, allowing me to build complete, scalable solutions.
                  </p>
                  <p>
                    I'm dedicated to staying at the forefront of web technologies, constantly learning and
                    implementing the latest tools and best practices to deliver exceptional results.
                  </p>
                </div>
              </motion.div>

              <motion.div 
                className="backdrop-blur-xl bg-gray-800/20 p-8 rounded-2xl border border-gray-700/50 hover:border-primary/30 transition-all duration-500 shadow-xl hover:shadow-primary/10 transform hover:scale-[1.02] group"
                whileHover={{ y: -5 }}
              >
                <h3 className="text-2xl font-bold text-gray-200 mb-6 flex items-center gap-3">
                  <span className="text-primary text-3xl">🎯</span>
                  My Approach
                </h3>
                <div className="space-y-6 text-lg text-gray-300 leading-relaxed">
                  <p>
                    I believe in creating solutions that not only meet technical requirements but also
                    provide intuitive, enjoyable user experiences. Every project is an opportunity to
                    innovate and push the boundaries of what's possible on the web.
                  </p>
                </div>
              </motion.div>

              <motion.div
                className="flex gap-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <motion.a
                  href="/resume.pdf"
                  className="btn-primary text-lg font-semibold px-10 py-4 rounded-xl shadow-lg shadow-primary/20 inline-flex items-center gap-3 group"
                  whileHover={{ scale: 1.05, boxShadow: '0 20px 30px rgba(52, 144, 220, 0.25)' }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span>Download Resume</span>
                  <motion.svg
                    className="w-6 h-6 transform group-hover:translate-y-1 transition-transform"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    initial={{ y: 0 }}
                    animate={{ y: [0, 2, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                  </motion.svg>
                </motion.a>
              </motion.div>
            </motion.div>

            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <motion.div
                className="backdrop-blur-xl bg-gray-800/20 p-8 rounded-2xl border border-gray-700/50 hover:border-primary/30 transition-all duration-500 shadow-xl hover:shadow-primary/10"
                whileHover={{ scale: 1.02 }}
              >
                <h3 className="text-2xl font-bold text-gray-200 mb-8 flex items-center gap-3">
                  <span className="text-primary text-3xl">⚡</span>
                  Technical Expertise
                </h3>
                <div className="space-y-8">
                  {skills.map((skill, index) => (
                    <motion.div
                      key={skill.name}
                      className="group"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center gap-3">
                          <span className="text-2xl group-hover:scale-125 transition-transform duration-300">
                            {skill.icon}
                          </span>
                          <span className="text-xl font-semibold text-gray-200">
                            {skill.name}
                          </span>
                        </div>
                        <span
                          className="text-lg font-medium"
                          style={{ color: skill.color }}
                        >
                          {skill.level}%
                        </span>
                      </div>
                      <div className="h-3 bg-gray-700/30 rounded-full overflow-hidden backdrop-blur-sm">
                        <motion.div
                          className="h-full rounded-full"
                          style={{
                            background: `linear-gradient(90deg, ${skill.color}88 0%, ${skill.color} 100%)`,
                            boxShadow: `0 0 20px ${skill.color}50`
                          }}
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          transition={{ duration: 1.5, delay: index * 0.2 }}
                          viewport={{ once: true }}
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;