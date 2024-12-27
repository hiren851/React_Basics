import React, { useState } from "react";

const Form = () => {
    const [form, setForm] = useState({name : "" , phone : ""})
    const handleChange = (e)=>{
        setForm({...form,[e.target.name] : e.target.value})
        console.log(form)
    }
    const handleSubmit = (e)=>{
        alert(`Name: ${form.name} Phone: ${form.phone}`)
    }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Enter Your Name : 
          <input type="text" value={form.name} name="name"  onChange={handleChange} />
        </label>
        <label>Enter Phone Number : 
          <input type="text" value={form.phone} name="phone" onChange={handleChange} />
        </label>

        <input type="submit"/> 
      </form>
    </div>
  );
};

export default Form;
