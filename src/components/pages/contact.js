import React, { Component } from 'react';


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


export default class Contact extends Component {
  render() {
    return (
      <div className='contact-page-wrapper'>
        <div className='title'>Contact Us </div>
        <div className='pretty-wrapper'>
          <div className='contact-info background-image' >
            <img className='background' ></img>
            <div className='logo-wrapper'>
              <img src='/homepage/LogoPNG+8+copy.png'></img>
            </div>
            <div className='phone-wrapper'>
            <FontAwesomeIcon icon='phone'/>
             801-766-4441 
            </div>

            <div className='email-wrapper'>
            <FontAwesomeIcon icon='envelope'/>
             JazznPlaceDanceStudio@gmail.com
            </div>

            <div className='address-wrapper'>
            400 Millpond Dr, Lehi, UT
            </div>
            <div className='summer-hours'>
             <div className='hours'>Summer Hours</div>
             
               <li>Monday 8:00 am- 5:00 pm</li>
               <li>Tuesday 7:30 am- 6:30 pm</li>
               <li>Wednesday 8:00 am- 4:00 pm</li>
               <li>Thursday 7:30 am- 5:00 pm</li>
            

            </div>

          </div> 
        </div> 
     
        <iframe className='google-map' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3039.167867724935!2d-111.83510568460513!3d40.38297197936905!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x874d81c7a41e46ad%3A0x15fb91a704b34bd2!2sJazz&#39;n+Place+Dance+Studio!5e0!3m2!1sen!2sus!4v1564338410794!5m2!1sen!2sus" ></iframe>
         
         
        
      </div> 
    );
  }
}

