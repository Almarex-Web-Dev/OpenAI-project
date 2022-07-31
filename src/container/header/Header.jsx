import React from 'react'
import people from '../../assets/people.png'
import object from '../../assets/OBJECTS.png'

import './header.css'

const Header = () => {
  return (
    <div className="gpt3__header section__padding" id="home">
      <div className="gpt3__header-content">
        <h1 className="text__gradient">
          Let's Build Something Amazing with GPT-3 Open AI
        </h1>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Asperiores
          dolorem blanditiis id, temporibus impedit illum in deleniti
          consequatur! Tenetur facere voluptate perspiciatis modi nobis
          voluptatem ipsa nam laboriosam odio numquam.
        </p>
        <div className="gpt3__header-content__input">
          <input type="email" placeholder="Your Email address" />
          <button type="button">Get started</button>
        </div>
        <div className="gpt3__header-content__people">
          <img src={people} alt="people" />
          <p>1,600 people requested access a visit in last 24 hours</p>
        </div>
      </div>
      <div className="gpt3__header-image">
        <img src={object} alt="" />
      </div>
    </div>
  )
}

export default Header
