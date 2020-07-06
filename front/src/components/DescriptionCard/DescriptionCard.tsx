import React from 'react';
import SocialBar from '../SocialBar/SocialBar';

import './DescriptionCard.css';

export default function DescriptionCard() {
  return (
    <div className='card p-3 border-0'>
      <div className='row no-gutters m-2 d-flex justify-content-center align-items-center'>
        <div className='col-lg-7 card-body overflow-auto align-items-center d-flex justify-content-center flex-column px-2 mh-25 order-lg-1 order-2'>
          <h1>About Me</h1>
          <p
            className='lead'
            style={{
              paddingLeft: '10px'
            }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <SocialBar />
        </div>
        <div className='col-md-5 d-flex justify-content-center flex-column p-4 align-items-center order-1 order-lg-2'>
          <img
            src='https://scontent-lga3-1.xx.fbcdn.net/v/t1.0-9/18921747_10207333749700800_3528477509547686550_n.jpg?_nc_cat=106&_nc_sid=09cbfe&_nc_ohc=RewZ0MzPTNcAX8nSUBT&_nc_ht=scontent-lga3-1.xx&oh=5a26d4a8bca1035a9d20f7b1622e77e2&oe=5F0F800A'
            alt='Profile'
            className='card-img-top'
            id='profile-photo'
          />
        </div>
      </div>
    </div>
  );
}
