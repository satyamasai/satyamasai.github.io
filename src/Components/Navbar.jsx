import * as React from 'react';

import Button from '@mui/material/Button';


const Navbar =()=>{
const home=()=>{
    window.scrollTo(0,0)
}

    return(
        <div className="NavbarDiv">

            <div onClick={home} className='name_logo'> S<span>G</span></div>
               <div className="NavbarSubDiv">
                   {/* <Button onClick={home} className='homebtn'> 

                    <i class="fa-solid fa-house"></i>
                    </Button> */}

                    <div> <a href="#about"><Button variant="contained">ABOUT</Button></a></div>
                    <div><a href="#skill"><Button variant='contained'>SKILLS</Button></a></div>
                    <div><a href="#projectDiv"><Button variant='contained'>PROJECTS</Button></a></div>
                    <div><a href="#contacts"><Button  variant='contained'>CONTACTS</Button></a></div>
              </div>
        </div>
    )
}
export default Navbar