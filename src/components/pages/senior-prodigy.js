import React, { Component } from 'react';



export default class SeniorProdigy extends Component {
  render() {
    return (
      <div className='page-container'>
        <img className='senior-pic' src="/homepage/pic-file/Savannah+BWB.jpg" />
        <div className='title-wrapper'>
          <h2 className='title'>Senior Prodigy </h2>
        </div>
       <div className='body-wrapper'>
        <p>
          Advanced , 11-13 Hours Per Week
        </p>
        <p>
        • Ages 14-18 Years • Competing 4-6 Routines • 2 Conventions a Year (Required) • 1-2 Guest Choreographers (Required) 
        • Competing at 4-5 Competitions a Year • 4-5 Different Costumes • In Class Outfits 
        (They will wear this to class all year long)
        </p>
        <div className='required-wrapper'>
        <p>
        Required to attend all competitions, conventions, community performances, parades, recitals, etc.
        </p>
        </div>
        </div> 
      </div>
    );
  }
}