import React, { Component } from 'react';
import ImageGallery from 'react-image-gallery';

import { dancers } from  "./gallery_images"


export default class DancersGalleryContainer extends Component {
    constructor() {
        super();
    }


    render() {
      return (
        
           
        <div className='competition-header'>
            <h1 className='comp-header-words'> Gallery 2019</h1>
        
        <div className='dancers-gallery-wrapper'>                 
            <ImageGallery items={dancers} alt="custom design custom artwork"/>
        </div> 
        </div> 
        

      )
    }
  }
  