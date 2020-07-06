import React from 'react'
import GreetingCard from '../GreetingCard/GreetingCard'

import './Banner.css'


export default function Banner() {
  return (
    <div className="container align-self-center">
      <div className="row">
        <div className="col-md-6">
          <GreetingCard />
        </div>
        <div className="col-md-6">
          <GreetingCard />
        </div>
      </div>
    </div>
  )
}