import React from 'react';
import GreetingCard from '../GreetingCard/GreetingCard';

import './Home.css';

export default function Home() {
  return (
    <div className='container-fluid overflow-auto' id='main-view'>
      <div className='row h-100 d-flex justify-content-center align-items-center mx-auto'>
        <div className='col-md-6'>
          <GreetingCard />
        </div>
        <div className='col-md-6' id='description-text'>
          <p className='lead text-center'>CONTENT HERE</p>
        </div>
      </div>
    </div>
  );
}
