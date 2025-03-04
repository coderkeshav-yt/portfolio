import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { useCallback } from 'react';
import Particles from "react-particles";
import { loadFull } from "tsparticles";
import type { Container, Engine } from "tsparticles-engine";

const HeroSection = () => {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadFull(engine);
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-b from-dark to-gray-900">
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          background: {
            color: {
              value: 'transparent',
            },
          },
          fpsLimit: 60,
          particles: {
            color: {
              value: ['#3490dc', '#805ad5', '#d53f8c', '#38b2ac'],
            },
            links: {
              color: '#3490dc',
              distance: 150,
              enable: true,
              opacity: 0.12,
              width: 1,
              triangles: {
                enable: true,
                opacity: 0.03,
              },
            },
            move: {
              enable: true,
              outModes: {
                default: 'bounce',
              },
              random: false,
              speed: 1,
              straight: false,
              trail: {
                enable: true,
                length: 4,
                fillColor: '#000',
              },
            },
            number: {
              density: {
                enable: true,
                area: 1000,
              },
              value: 70,
            },
            opacity: {
              value: 0.35,
              animation: {
                enable: true,
                speed: 0.3,
                minimumValue: 0.1,
              },
            },
            shape: {
              type: ['circle', 'triangle', 'star', 'polygon'],
            },
            size: {
              value: { min: 1, max: 2.5 },
              animation: {
                enable: true,
                speed: 1.5,
                minimumValue: 0.5,
              },
            },
          },
          detectRetina: true,
          interactivity: {
            events: {
              onHover: {
                enable: true,
                mode: 'grab',
              },
            },
            modes: {
              grab: {
                distance: 175,
                links: {
                  opacity: 0.6,
                  color: '#38b2ac',
                },
              },
            },
          },
        }}
        className="absolute inset-0 -z-10"
      />
      
      <div className="section-container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: 'easeOut' }}
            className="text-left space-y-8"
          >
            <div className="space-y-4">
              <h2 className="text-4xl font-bold text-gray-300 tracking-tight">
                Hello! I'm
              </h2>
              <h1 className="text-5xl md:text-6xl font-extrabold mb-6 bg-gradient-to-r from-primary via-purple-500 to-pink-500 text-transparent bg-clip-text animate-gradient tracking-tight inline-block">
                Keshav Singh
              </h1>
              <h3 className="text-3xl md:text-4xl font-bold text-gray-300 tracking-normal">
                <TypeAnimation
                  sequence={[
                    'Web Developer',
                    2500,
                    'UI/UX Designer',
                    2500,
                    'Problem Solver',
                    2500
                  ]}
                  wrapper="span"
                  speed={40}
                  repeat={Infinity}
                />
              </h3>
            </div>
            
            <motion.p 
              className="text-xl text-gray-400 leading-relaxed max-w-xl font-medium"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              Crafting exceptional digital experiences with modern design principles and cutting-edge technology.
            </motion.p>

            <motion.div 
              className="flex gap-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              <motion.a
                href="#projects"
                className="btn-primary text-lg font-semibold px-10 py-4 rounded-xl shadow-lg shadow-primary/20"
                whileHover={{ scale: 1.05, boxShadow: '0 20px 30px rgba(52, 144, 220, 0.25)' }}
                whileTap={{ scale: 0.95 }}
              >
                View Projects
              </motion.a>
              <motion.a
                href="#contact"
                className="btn-secondary text-lg font-semibold px-10 py-4 rounded-xl shadow-lg shadow-yellow-500/10"
                whileHover={{ scale: 1.05, boxShadow: '0 20px 30px rgba(255, 237, 74, 0.15)' }}
                whileTap={{ scale: 0.95 }}
              >
                Contact Me
              </motion.a>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: 'easeOut' }}
            className="relative hidden lg:block"
          >
            <div className="relative w-full aspect-square flex flex-col items-center justify-center gap-4">
              <div className="absolute right-0 w-[600px] h-[600px] bg-gradient-to-br from-primary/20 via-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse"></div>
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent rounded-full blur-2xl"></div>
              <div className="relative z-10 w-[500px] h-[500px] rounded-full overflow-hidden border-2 border-primary/20 shadow-2xl shadow-primary/20 transform hover:scale-[1.02] transition-transform duration-500">
                <img
                  src="/hero-image.jpg"
                  alt="Professional headshot"
                  className="w-full h-full object-cover"
                />
              </div>
              <motion.div
                className="flex items-center justify-center gap-2 px-3 py-1 rounded-full bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 hover:border-green-500/30 transition-all duration-300 group transform hover:scale-105 w-fit"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2, duration: 0.5 }}
              >
                <motion.div
                  className="w-2 h-2 rounded-full bg-green-500"
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [1, 0.7, 1]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
                <span className="text-sm font-medium text-green-500 group-hover:text-green-400 transition-colors duration-300">Online</span>
              </motion.div>
            </div>

            <div className="absolute right-0 top-1/2 -translate-y-1/2 flex flex-col gap-6 mr-6">
              {['about', 'projects', 'contact'].map((section, index) => (
                <motion.a
                  key={section}
                  href={`#${section}`}
                  className="w-4 h-4 rounded-full bg-gray-600 hover:bg-primary transition-all duration-300"
                  whileHover={{ scale: 1.3 }}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.8 + index * 0.1 }}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
      
      <div className="absolute inset-0 bg-gradient-to-br from-dark via-gray-800/80 to-dark opacity-90">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent opacity-60"></div>
      </div>
    </section>
  );
};

export default HeroSection;