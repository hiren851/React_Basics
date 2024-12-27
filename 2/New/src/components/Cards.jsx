import React from 'react'

const Cards = (props) => {
  return (
    <div className='Cards'>
      <h1>{props.title}</h1>
      <p>{props.description}</p>
    </div>
  )
}

export default Cards