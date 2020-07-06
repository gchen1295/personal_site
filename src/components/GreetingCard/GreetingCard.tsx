import React from 'react';

import './GreetingCard.css';

export default function GreetingCard() {
  return (
    <div className='card border-0 w-100'>
      <div className='row'>
      <div className='col' id='intro-container'>
            <h1 className='text-center' id='typed-intro'>
            <span role='img' aria-label='Wave' id='wave' className='mx-3'>
              👋
              </span>
              Hello, &nbsp; &nbsp;
            </h1>
            <h1 className='text-center' id='typed-intro2'>
              my name is Gary.
            </h1>
          </div>
      </div>
      <div className="row mt-2">
        <p className='lead text-center'>
          I build efficient backend systems for websites and applications.
        </p>
      </div>
      
    </div>
  );
}