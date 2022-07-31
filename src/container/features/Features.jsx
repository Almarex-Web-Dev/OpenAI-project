import React from 'react'
import { Feature } from '../../components'
import './features.css'

const featureData = [
  {
    title: 'Improving end Distrust instantly',
    text:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam voluptatem aut accusantium aspernatur obcaecati. Distinctio dolorem ea quae aperiam doloribus, adipisci voluptate earum tempore eos fugiat saepe sapiente quod molestiae!',
  },
  {
    title: 'Become the tended active',
    text:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam voluptatem aut accusantium aspernatur obcaecati. Distinctio dolorem ea quae aperiam doloribus, adipisci voluptate earum tempore eos fugiat saepe sapiente quod molestiae!',
  },
  {
    title: 'Message or am Nothing',
    text:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam voluptatem aut accusantium aspernatur obcaecati. Distinctio dolorem ea quae aperiam doloribus, adipisci voluptate earum tempore eos fugiat saepe sapiente quod molestiae!',
  },
  {
    title: 'Really boy law country',
    text:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam voluptatem aut accusantium aspernatur obcaecati. Distinctio dolorem ea quae aperiam doloribus, adipisci voluptate earum tempore eos fugiat saepe sapiente quod molestiae!',
  },
]

const Features = () => {
  return (
    <div className="gpt3__features section__padding" id="features">
      <div className="gpt3__features-heading">
        <h1 className="text__gradient">
          The Future is Now and You Just Need To Realize ut. Stop into Future
          Today & Make it Happen
        </h1>
        <p>Request Ealy Access to Get Started</p>
      </div>
      <div className="gpt3__features-container">
        {featureData.map((item, index) => {
          return (
            <Feature
              title={item.title}
              text={item.text}
              key={item.title + index}
            />
          )
        })}
      </div>
    </div>
  )
}

export default Features
