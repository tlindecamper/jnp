import React, { Component } from 'react';

export default class ParentPortal extends Component {
  render() {
    return (
      <div className='parent-wrapper'>
        <div className='heading'>
          Parent portal          
        </div>
      <div className='parent-link'>
        <a  target="._blank" href='https://app.jackrabbitclass.com/jr3.0/ParentPortal/Login?orgID=505204' >Click Here for Parent Portal </a> 
        </div>
        <div>   
            <h2>Examples of Dance Attire</h2>               
        </div>
        <div>
            <img src='assets/parent-pic/dance-attire.jpg'></img>
        </div>

      </div>
    );
  }
}
