import React, { Component } from 'react';

export default class News extends Component {
  render() {
    return (
      <div className='news-wrapper'>
        <div className='header'>Studio News</div>
        <div className='news-banner'>
          <img className='banner-pic' src='/assets/news-pic/banner-edited.jpg' ></img>
        </div>
        <div className='news-column'>
          <div className='column-pic'>
            <img className='leaping' src='/assets/news-pic/bailey.jpg'></img>
          </div>
          <div className='words-wrapper'>
            <div className='column-header'>THINGS TO REMEMBER</div>
            <h2>
            * All tuition and fees are due the 25th of each month. Please call the studio if you have any questions about your account. We are always here to help with questions or concerns. We will be emailing out a link shortly to create your account on Parent Portal to access your account more conveniently.
            </h2>
            <h2>
            * Follow us on Facebook and Instagram for updates, studio information, and fun captured dance memories. Please keep an updated email with us so we can update information with you as well.  
            </h2>

          </div>
        </div>

        <div className='news-column'>
          
          <div className='words-wrapper'>
            <div className='column-header'>STUDIO UPCOMING DATES</div>
            <ul className='news-dates'>
              <li>July 22nd-July 28th- Happy Pioneer Day!!!</li>
              <li>July 29th - August 10th - Competing Team Summer Intensives</li>
              <li> August 12-15th - JNP Summer Camps Start</li>
              <li>September 3rd - Fall Dance Classes Begin</li>
              
            </ul>
            </div>
          <div className='column-pic'>
            <img className='titus' src='/assets/news-pic/024_2441+EDIT.jpg'></img>
          </div>
        </div>
      </div>
    );
  }
}
