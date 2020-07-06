import React from 'react';

import './SocialBar.css';


export default function SocialBar() {
  return (
    <ul className="list-group list-group-horizontal" id='socialbar'>
      <li className="list-group-item border-0 social">
        <a href="https://twitter.com/_Wooof_">
          <i className="fab fa-twitter fa-2x"/>
        </a>
      </li>
      <li className="list-group-item border-0 social">
        <a href="https://www.facebook.com/M1cha31olol/">
        <i className="fab fa-facebook-square fa-2x" />
        </a>
      </li>
      <li className="list-group-item border-0 social">
        <a href="https://twitter.com/_Wooof_">
        <i className="fab fa-linkedin fa-2x" />
        </a>
      </li>
      <li className="list-group-item border-0 social">
        <a href="https://github.com/woof1001">
        <i className="fab fa-github fa-2x" />
        </a>
      </li>
    </ul>
  )
}