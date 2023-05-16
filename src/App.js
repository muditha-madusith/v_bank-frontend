import './App.css';
import NavBar from './components/NavBar/NavBar';
import About from './components/Pages/About/About';
import Discover from './components/Pages/Discover/Discover';
import Hero from './components/Pages/HeroPage/Hero';
import Services from './components/Pages/Services/Services';

function App() {
  return (
    <>
      <NavBar/>
      <Hero/>
      <About/>
      <Discover/>
      <Services/>
    </>
  );
}

export default App;
