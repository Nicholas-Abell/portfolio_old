import { useState, createContext } from 'react';
import { useInView } from 'react-intersection-observer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './App.scss';
import Navbar from './Component/Navbar';
import Header from './Component/Header';
import AboutMe from './Component/AboutMe';
import Skills from './Component/Skills';
import Projects from './Component/Projects';
import Contact from './Component/Contact';

export const AppContext = createContext(null);

function App() {
  const [activeNode, setActiveNode] = useState('Hello');
  const { ref, inView, entry } = useInView();
  const [navView, setNavView] = useState({
    header: true,
    aboutMe: false,
    skills: false,
    projects: false,
    contacts: false
  })

  return (
    <div>
      <AppContext.Provider value={{ activeNode, setActiveNode, ref, inView, entry, FontAwesomeIcon, navView, setNavView }}>
        <Navbar />
        <Header />
        <AboutMe />
        <Skills />
        <Projects />
        <Contact />
      </AppContext.Provider>
    </div>
  );
}

export default App;
