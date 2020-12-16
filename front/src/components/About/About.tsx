import React from 'react';
import DescriptionCard from '../DescriptionCard/DescriptionCard';

import './About.css';

export default function About() {
  return (
    <div className='container overflow-auto' id='main-view'>
      <div className='row my-2'>
        <div className='col' id='card-container'>
          <DescriptionCard />
        </div>
      </div>
    </div>
  );
}
