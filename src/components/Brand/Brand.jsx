import React from 'react'
import { google, slack, dropbox, shopify, atlassian } from './import'
import './brand.css'

const Brand = () => {
  return (
    <div className="gpt3__brand section__padding">
      <div>
        <img src={google} alt="google" />
        <img src={slack} alt="google" />
        <img src={dropbox} alt="google" />
        <img src={shopify} alt="google" />
        <img src={atlassian} alt="google" />
      </div>
    </div>
  )
}

export default Brand
