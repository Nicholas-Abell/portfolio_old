import './App.scss';
import Navbar from './Component/Navbar';
import Header from './Component/Header';
import AboutMe from './Component/AboutMe';
import Skills from './Component/Skills';
import Projects from './Component/Projects';
import Contact from './Component/Contact';

function App() {
  return (
    <body>
      <Navbar />
      <Header />
      <AboutMe />
      <Skills />
      <Projects />
      <Contact />
    </body>
  );
}

export default App;
