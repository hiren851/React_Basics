import React,{useState} from 'react'

const Form = () => {
    const [form, setForm] = useState({
        userName : "",
        email : "",
        password : "",
    })

    const handleChange = (e) => {
        setForm({...form,[e.target.name] :e.target.value})
    }

    const handleSubmit = (e)=>{
        alert(`You have entered Name: ${form.userName} , Email : ${form.email} , Password : ${form.password}`)
    }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Username: <br />
            <input type="text" 
            name='userName' 
            value={form.userName}
            onChange={handleChange}/>
        </label> <br />
        <label>
            Email: <br />
            <input type="email" 
            name='email'
            value={form.email}
            onChange={handleChange}/>
        </label> <br />
        <label > Password: <br />
            <input type="password"
            name='password'
            value={form.password}
            onChange={handleChange} />
        </label> <br />
       <input type='submit'/>
      </form>
    </div>
  )
}

export default Form
