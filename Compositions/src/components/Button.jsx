import React from 'react'
import '../components/Button.css'

const Button = (props) => {
  return (
    <div>
      <button className={props.className}>{props.className } Button</button>
    </div>
  )
}

export default Button
