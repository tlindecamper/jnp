import React, { Component } from 'react';
import ImageGallery from 'react-image-gallery';

import { dancers } from  "./compet-images"

export default class CompetitiveTeamContainer extends Component {
    constructor() {
        super();
    }


    render() {
      return (
        
           
        <div >
            <h1 className=''> Competition Season 2019 </h1>
        
        <div className='compet-gallery-wrapper'>                 
            <ImageGallery items={dancers} alt="custom design custom artwork"/>
        </div> 
        </div> 
        

      )
    }
  }