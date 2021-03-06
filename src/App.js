import './App.css';

// imports 
import Banner from './Components/Banner.js';
import About from './Components/About.js';
import Navbar from './Components/Navbar.js';
import Project from './Components/Project.js';



function App() {

  return (
    <div className="App">
      <Banner />
      <Navbar />
      <About />
      <Project />
      Home page
    </div>
  );
}

export default App;
