import { motion } from 'framer-motion';
import { useState } from 'react';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  techStack: string[];
  category: string;
  liveUrl: string;
  githubUrl: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: 'Calculator',
    description: 'Responsive web-based calculator with modern design',
    image: '/projects/calculator.png',
    techStack: ['React', 'TypeScript', 'TailwindCSS'],
    category: 'Web App',
    liveUrl: 'https://calculator-hn3z9kb9w-coderkeshav-yts-projects.vercel.app/',
    githubUrl: '#'
  },
  {
    id: 2,
    title: 'E-commerce Website',
    description: 'Bookstore platform with cart & checkout functionality',
    image: '/projects/ecommerce.png',
    techStack: ['React', 'Node.js', 'MongoDB'],
    category: 'Full Stack',
    liveUrl: 'https://coderkeshav-yt.github.io/Bookore/',
    githubUrl: '#'
  },
  {
    id: 3,
    title: 'Task Manager',
    description: 'Productivity tool with a clean and intuitive UI',
    image: '/projects/task-manager.png',
    techStack: ['React', 'Redux', 'TailwindCSS'],
    category: 'Web App',
    liveUrl: '#',
    githubUrl: 'https://github.com/coderkeshav-yt/Task-Manager'
  },
  {
    id: 4,
    title: 'Timer',
    description: 'Web-based customizable timer application',
    image: '/projects/timer.png',
    techStack: ['React', 'TypeScript'],
    category: 'Web App',
    liveUrl: 'https://coderkeshav-yt.github.io/CoutnDown_Boards/',
    githubUrl: '#'
  },
  {
    id: 5,
    title: 'Portfolio Website',
    description: 'Fully responsive portfolio with a modern stack',
    image: '/projects/port.jpg',
    techStack: ['React', 'TypeScript', 'TailwindCSS', 'Framer Motion'],
    category: 'Web App',
    liveUrl: 'https://coderkeshav-yt.github.io/portfolio/',
    githubUrl: '#'
  }
];

const categories = ['All', 'Web App', 'Full Stack'];

const ProjectsSection = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const filteredProjects = projects.filter(project =>
    selectedCategory === 'All' ? true : project.category === selectedCategory
  );

  return (
    <section id="projects" className="py-32 relative overflow-hidden bg-gradient-to-b from-dark via-gray-900/95 to-dark">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/10 via-purple-500/5 to-transparent opacity-60"></div>
      <div className="section-container relative z-10 px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="space-y-12"
        >
          <div className="text-center">
            <motion.h2 
              className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-purple-500 to-pink-500 text-transparent bg-clip-text animate-gradient tracking-tight drop-shadow-2xl"
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              Featured Projects
            </motion.h2>
            <motion.p 
              className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Explore my latest works showcasing modern web development and design
            </motion.p>
          </div>

          <motion.div 
            className="flex justify-center gap-4 flex-wrap"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            {categories.map((category, index) => (
              <motion.button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-full transition-all duration-300 ${selectedCategory === category
                  ? 'bg-primary text-white shadow-lg shadow-primary/20'
                  : 'bg-gray-800/50 text-gray-300 hover:bg-gray-700/50 hover:shadow-lg hover:shadow-primary/10'}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {category}
              </motion.button>
            ))}
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative group"
                onMouseEnter={() => setHoveredProject(project.id)}
                onMouseLeave={() => setHoveredProject(null)}
              >
                <div className="relative overflow-hidden rounded-2xl backdrop-blur-xl bg-gray-800/20 border border-gray-700/30 p-8 h-full transform transition-all duration-500 hover:scale-[1.03] hover:shadow-2xl hover:shadow-primary/30 hover:bg-gray-800/40 hover:border-primary/20 group">
                  <div className="aspect-video mb-8 overflow-hidden rounded-xl bg-gray-900/50 group-hover:shadow-xl group-hover:shadow-primary/20 transition-all duration-500 transform group-hover:-translate-y-1">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>

                  <h3 className="text-2xl font-bold mb-4 text-gray-100 group-hover:text-primary transition-colors duration-300 drop-shadow-lg">{project.title}</h3>
                  <p className="text-gray-300 mb-8 line-clamp-2 leading-relaxed">{project.description}</p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-4 py-1.5 text-sm rounded-full bg-primary/10 text-primary border border-primary/20 backdrop-blur-sm hover:bg-primary/20 transition-colors duration-300 shadow-lg shadow-primary/5"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-4 relative z-10">
                    <motion.a
                      href={project.liveUrl}
                      className="btn-primary text-sm py-2.5 px-6 rounded-lg"
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05, boxShadow: '0 20px 30px rgba(52, 144, 220, 0.25)' }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Live Demo
                    </motion.a>
                    <motion.a
                      href={project.githubUrl}
                      className="btn-secondary text-sm py-2.5 px-6 rounded-lg"
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05, boxShadow: '0 20px 30px rgba(255, 237, 74, 0.15)' }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Source Code
                    </motion.a>
                  </div>

                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: hoveredProject === project.id ? 1 : 0 }}
                    className="absolute inset-0 bg-gradient-to-t from-dark/40 via-dark/20 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;