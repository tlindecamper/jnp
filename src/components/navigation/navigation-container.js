import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

export default class NavigationComponent extends Component {
    constructor() {
        super();
    }


render() {
    return (
        <div className='nav-wrapper'>   
          <div className='nav-bar-banner'>  
            <h2 className="nav-words">REGISTER NOW!!! FALL CLASSES ARE FILLING  UP QUICK </h2>
            <div className="nav-bar-link">
              <a target="._blank" href="https://app.jackrabbitclass.com/regv2.asp?id=505204" >Register Here</a>
            </div>
          </div>

          <div className="left-side">
            <img className="logo" src ="./homepage/pic-file/LogoPNG+8+copy.png" />
         
            
            <div className = 'nav-link-wrapper'>
                <NavLink className='link'exact to='/' activeClassName='nav-link-active'>
                  Home  
                </NavLink> 

                <div className='dropdown'>                 
                    <NavLink className='link'to='/comp-teams' activeClassName='nav-link-active'>
                      Competition Teams 
                    </NavLink> 
                  <div className='dropdown-content'>
                    <NavLink className='link'to='/senior-prodigy' activeClassName='nav-link-active'>
                      Senior Prodigy
                    </NavLink> 
                    <NavLink className='link'to='/teen-prodigy' activeClassName='nav-link-active'>
                      Teen Prodigy 
                    </NavLink> 
                    <NavLink className='link'to='/teen-prodigy-prep' activeClassName='nav-link-active'>
                      Teen Prodigy Prep 
                    </NavLink> 
                    <NavLink className='link'to='/junior-prodigy' activeClassName='nav-link-active'>
                      Junior Prodigy 
                    </NavLink> 
                    <NavLink className='link'to='/small-prodigy' activeClassName='nav-link-active'>
                      Small Prodigy 
                    </NavLink> 
                    <NavLink className='link'to='/mini-prodigy' activeClassName='nav-link-active'>
                      Mini Prodigy 
                    </NavLink> 
                    <NavLink className='link'to='/teen-prep' activeClassName='nav-link-active'>
                      Teen Prep
                    </NavLink> 
                    <NavLink className='link'to='/junior-prep' activeClassName='nav-link-active'>
                      Junior Prep 
                    </NavLink> 
                    <NavLink className='link'to='/small-elite' activeClassName='nav-link-active'>
                      Small Elite 
                    </NavLink> 
                    <NavLink className='link'to='/mini-elite' activeClassName='nav-link-active'>
                      Mini Elite 
                    </NavLink> 
                    <NavLink className='link'to='/junior-troupe' activeClassName='nav-link-active'>
                      Junior Troupe
                    </NavLink> 
                    <NavLink className='link'to='/mini-troupe' activeClassName='nav-link-active'>
                      Mini Troupe
                    </NavLink> 
                    </div>
                </div>
               
              <div className='dropdown'>   
                <NavLink className='link'to='/combination' activeClassName='nav-link-active'>
                  Combination Dance
                </NavLink>     
                  <div className='dropdown-content'>
                  <NavLink className='link'to='/tiny-tots' activeClassName='nav-link-active'>
                    Tiny Tots, 3-4 yr olds
                  </NavLink>
                  <NavLink className='link'to='/mini-stars' activeClassName='nav-link-active'>
                    Mini Stars, 4-6 yr olds
                  </NavLink>
                  <NavLink className='link'to='/junior-stars' activeClassName='nav-link-active'>
                    Junior Stars, 7-12 yr olds
                  </NavLink>
                  <NavLink className='link'to='/hip-hop' activeClassName='nav-link-active'>
                    Hip Hop, 5-12
                  </NavLink>
                  </div>
              </div>

                <NavLink className='link'to='/gallery' activeClassName='nav-link-active'>
                  Gallery 
                </NavLink> 

                <NavLink className='link'to='/news' activeClassName='nav-link-active'>
                  Studio News  
                </NavLink> 

                <NavLink className='link'to='/staff' activeClassName='nav-link-active'>
                  Staff 
                </NavLink> 
                <NavLink className='link'to='/contact' activeClassName='nav-link-active'>
                  Contact Us  
                </NavLink> 
                <NavLink className='link'to='/parent-portal' activeClassName='nav-link-active'>
                  Parent Portal  
                </NavLink> 
              </div>
              </div>
          </div>
     
                          
            
        )
    } 
}
