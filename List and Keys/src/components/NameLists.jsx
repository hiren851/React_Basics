import React from 'react'

const NameLists = () => {
    const carName = ["Volvo" ,"BMW" , "Ford" , "Suzuki" ,"Audi"]
  return (
    <div>
      <h1>List and Keys</h1>
      <ul>
        {carName.map((name,index)=>(
            <li key={index}>{name}</li>
        ))}
      </ul>
    </div>
  )
}

export default NameLists
