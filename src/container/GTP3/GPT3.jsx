import React from 'react'
import { Feature } from '../../components'
import './gpt3.css'

const GPT3 = () => {
  return (
    <div className="gpt3__whatgpt3 section__margin" id="wgpt3">
      <div className="gpt3__whatgpt3-feature">
        <Feature
          title="What is GTP3 ?"
          text="  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias id vero iste in incidunt, vel tempora quas aperiam labore dolor.  Lorem ipsum dolor sit, amet consectetur adipisicing elit."
        />
      </div>
      <div className="gpt3__whatgpt3-heading">
        <h1 className="text__gradient">
          The possiblities are beyond your imagination
        </h1>
        <p>Explore the library</p>
      </div>
      <div className="gpt3__whatgpt3-container">
        <Feature
          title="Chatbots"
          text=" Lorem ipsum dolor sit, amet consectetur adipisicing elit.  Lorem ipsum dolor sit, amet consectetur adipisicing elit.  Lorem ipsum dolor sit, amet consectetur adipisicing elit."
        />
        <Feature
          title="Knowledge"
          text="  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias id vero iste in incidunt, vel tempora quas aperiam labore dolor.  Lorem ipsum dolor sit, amet consectetur adipisicing elit."
        />
        <Feature
          title="Education"
          text="  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias id vero iste in incidunt, vel tempora quas aperiam labore dolor.  Lorem ipsum dolor sit, amet consectetur adipisicing elit."
        />
      </div>
    </div>
  )
}

export default GPT3
