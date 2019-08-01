import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF } from '@fortawesome/free-brands-svg-icons' 
import { faInstagram } from '@fortawesome/free-brands-svg-icons'

library.add(faFacebookF, faInstagram); 


  export default class FooterContiner extends Component {
  render() {
    return (
      <div className='footer'>
        <h1>JAZZ'N PLACE DANCE STUDIO</h1>
        
          <div className='description'>
            Dance classes for children of all ages including Jazz, Ballet, Pointe, Tumbling,
            Acro, Hip Hop, Contemporary, Lyrical,
            Combination Classes, Competition Teams, and Pre-school age classes.
          </div>
          <btn>Contact us</btn>   
          <div >
          
            <div className='social-media-links'> 
              <div className='facebook'>
                <a  target="._blank" href="https://www.facebook.com/jazznplacedancestudio/" ><FontAwesomeIcon icon={['fab', 'facebook-f']} /></a>  
              </div>
              <div className='instagram'>
                <a target="._blank" href="https://instagram.com/jazznplacedancestudio?igshid=1mqs18hz7arcz" ><FontAwesomeIcon icon={['fab', 'instagram']} /></a>  
              </div>
            </div>
        </div>
        <div className='page-links'>
          {/* <NavLink className='link'exact to='/' activeClassName='nav-link-active'>
            Home  
          </NavLink>  */}

          <NavLink className='link'to='/contact' activeClassName='nav-link-active'>
            Contact Us  
          </NavLink> 

          <NavLink className='link'to='/comp-teams' activeClassName='nav-link-active'>
            Competition Teams 
          </NavLink> 
        </div>
      </div>

    );
  }
}


