import React, { Component } from 'react';

export default function Home() { 
    return (
      <div className='home-page-wrapper'>
      <h1 className="memory-quote">Building memories to last a lifetime</h1>
       <div className="picture">
        <img className="home-page-pic" src="homepage/pic-file/Harper8.jpg" ></img>
         </div> 
        <div className='homepage-quotes'>
          <h1 className='homepage-quote'>SERVING UTAH’S COMMUNITY FOR <br></br>OVER 30 YEARS</h1>
          <h2 className='homepage-montra'>At the Jazz'n Place, we are dedicated to offering quality instruction, in a motivating and positive environment. Your dancer will learn so much more than just dance steps and routines. If fully committed, she will come away from this experience with a strong work ethic, a sense of teamwork, dedication, respect, self-discipline, and responsibility. She will gain self-confidence, self-motivation, and so many other crucial tools that she will carry throughout the rest of her li
            If you and your daughter are looking for lifelong friendships and memories, look no further! JNP is for you!</h2>
        </div>   
        <div className='testimonials'>
        <h1>testimonials</h1>
          
        </div>
        
      </div>
    );
  }
