import React from 'react'
import './possibility.css'
import possibilityImage from '../../assets/possibility.png'

const Possibility = () => {
  return (
    <div className="gpt3__possibility section__padding" id="possibility">
      <div className="gpt3__possibility-image">
        <img src={possibilityImage} alt="possiblity" />
      </div>
      <div className="gpt3__possibility-content">
        <h4>Request Early Access to get Started</h4>
        <h1 className="text__gradient">
          The possiblities are beyond your imagination
        </h1>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis
          ut, necessitatibus corrupti illum officia fugiat enim ex quisquam est
          similique ipsa itaque sed, cumque nesciunt, dolores soluta odio sunt
          minima.
        </p>
        <h4>Request Early Access to get Started</h4>
      </div>
    </div>
  )
}

export default Possibility
