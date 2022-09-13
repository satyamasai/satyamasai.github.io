
import './App.css';
import About from './Components/About';
import Contacts from './Components/Contacts';
import Home from './Components/Home';
import Navbar from './Components/Navbar';
import Projects from './Components/Projects';
import Skills from './Components/Skills';

function App() {
  return (
    <div className="App">
           <Navbar/>
           <Home/>
           <About/>
           <Skills/>
           <Projects/>
           <Contacts/>

           <div className='footer'>
            <p> Made with <i class="fa-solid fa-heart"></i> by Satyam Gupta, 2022 </p>
           </div>
           
    </div>
  );
}

export default App;
