
import './App.css';
import ".//mediaQuery/small.css";
import ".//mediaQuery/large.css";
import ".//mediaQuery/medium.css";  

import About from './Components/About';
import Contacts from './Components/Contacts';
import GitHubCal from './Components/GitHubCal';
import Home from './Components/Home';

import Projects from './Components/Projects';
import Skills from './Components/Skills';
import NewNavbar from './Components/NewNavbar';
import Practice from './Components/Practice';




function App() {
  return (
    <div className="App">
    <NewNavbar/>
    <Home/>
    <About/>
    <Skills/>
    <Practice/>
    <Projects/>
    <GitHubCal/>
    <Contacts/>
          
         

           <div className='footer'>
            <p> Made with <i class="fa-solid fa-heart"></i> by Satyam Gupta, 2022 </p>
           </div>
           
    </div>
  );
}

export default App;
