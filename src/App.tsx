import { About } from './components/About';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { Hero } from './components/Hero';
import { Nav } from './components/Nav';
import { Projects } from './components/Projects';
import { Skills } from './components/Skills';

function App() {
  return (
    <div id="top">
      <Nav />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
