import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import React from 'react'

function Myapp(){
  return(
    <div>
      <h1>Custom App !</h1>
    </div>
  )
}

const anotherUser = "Amardeep"

// const anotherElement = (
//   <a href='https://google.com' target='_blank'>visit google</a>
// )

const reactElement = React.createElement(
  'a',
  {href: 'https://google.com',target:'_blank'},
  'click me to visit google',
  anotherUser
  
)

createRoot(document.getElementById('root')).render(
  reactElement
)
