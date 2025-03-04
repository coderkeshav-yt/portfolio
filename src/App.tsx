import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import ProjectsSection from './components/ProjectsSection';
import HireMeSection from './components/HireMeSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

function App() {
  return (
    <main className="min-h-screen bg-dark">
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <HireMeSection />
      <ContactSection />
      <Footer />
    </main>
  );
}

export default App;
