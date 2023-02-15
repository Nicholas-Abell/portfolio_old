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
  const { ref: headerRef, inView: headerInView } = useInView();
  const { ref: aboutMeRef, inView: aboutMeInView } = useInView();


  return (
    <div>
      <AppContext.Provider value={{ activeNode, setActiveNode, FontAwesomeIcon, }}>
        <Navbar headerInView={headerInView} aboutMeInView={aboutMeInView} />
        <Header headerref={headerRef} />
        <AboutMe aboutMeRef={aboutMeRef} />
        <Skills />
        <Projects />
        <Contact />
      </AppContext.Provider>
    </div>
  );
}

export default App;
