import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';



  export default class FooterContiner extends Component {
  render() {
    return (
      <div className='footer'>
        <h1>JAZZ'N PLACE DANCE STUDIO</h1>
        
          <div className='description'>Dance classes for children of all ages including Jazz, Ballet, Pointe, Tumbling, Acro, Hip Hop, Contemporary, Lyrical,
              Combination Classes, Competition Teams, and Pre-school age classes
          </div>
          <btn>Contact us</btn>   
          <div >
          
            <div> 
            <a target="._blank" href="https://www.facebook.com/jazznplacedancestudio/" >facebook</a>  
            <a target="._blank" href="https://instagram.com/jazznplacedancestudio?igshid=1mqs18hz7arcz" >instagram</a>  

            </div>
        </div>
        <NavLink className='link'exact to='/' activeClassName='nav-link-active'>
                  Home  
                </NavLink> 
        <NavLink className='link'to='/contact' activeClassName='nav-link-active'>
                  Contact Us  
        </NavLink> 
        <NavLink className='link'to='/comp-teams' activeClassName='nav-link-active'>
              Competition Teams 
        </NavLink> 
      </div>

    );
  }
}


