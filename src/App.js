import NavigationBar from './components/navbar';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import Banner from './components/banner';
import Skills from './components/skills';
import Projects from './components/projects';
import Footer from './components/footer';
import Contact from './components/contact';

function App() {
  return (
    <div className="App">
      <NavigationBar />
      <Banner />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
