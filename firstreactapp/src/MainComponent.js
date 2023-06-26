import React from 'react'
import './index.css'

export default function MainComponent()
{
  const contentValue = (
    <div>
    <h1 className = "header_font"> Reasons I'm excited to learn React </h1>
    <ol>
      <li>It's a popular library, so I'll be able to fit in with the cool kids!</li>
      <li>I'm more likely to get a job as a developer if I know React</li>
    </ol>
    </div>
  )
  return contentValue
}