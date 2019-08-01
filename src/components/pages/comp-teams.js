import React, { Component } from 'react';
import CompetitiveTeamContainer from '../gallery/compet-team-container';


export default function CompTeams(){
  
    return (
      <div >
        <h1>Competition Teams </h1>
        <div className="comp-gallery-pics">
            <CompetitiveTeamContainer/>
        </div>    
        
      </div>
    );
  }

