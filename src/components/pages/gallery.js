import React, { Component } from 'react';

import DancersGalleryContainer from '../gallery/dancers-gallery-container';

export default function Gallery(){
  
    return (
      <div className='gallery-pic-wrapper'>
        
        <div className="gallery-pics">
            <DancersGalleryContainer/>
            </div>    
        
      </div>
    );
  }

