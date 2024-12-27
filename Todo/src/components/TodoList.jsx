import React, { useState } from 'react'
import '../components/TodoList.css'

const TodoList = () => {
    const [inputValues, setInputValues] = useState('')
    const [taskList , setTaskList] = useState([])

    const Add = () =>{
        if(inputValues.trim() == ""){
            alert("Please enter task")
            return;
        }
        setTaskList([...taskList,{id: taskList.length , text : inputValues}])
        setInputValues('')
    }
    const Delete = (id) =>{
        setTaskList(taskList.filter((item)=> item.id !== id))
    }
    const Up = (index)=>{
        if(index == 0) return;
        const updatedTask = [...taskList];
        [updatedTask[index] , updatedTask[index-1]] = [updatedTask[index-1] , updatedTask[index]]
        setTaskList(updatedTask);
    }

    const Down = (index)=>{
        if(index == taskList.length -1) return;
        const updatedTask = [...taskList];
        [updatedTask[index] , updatedTask[index+1]] = [updatedTask[index+1] , updatedTask[index]]
        setTaskList(updatedTask);
    }


  return (
    <>
     <div className='main'>
      <h1>Todo List</h1>
      <input type='text' placeholder='Enter a task' value={inputValues} onChange={(e)=>{setInputValues(e.target.value)}} />
      <button onClick={Add}>Add</button>
      <p>Number of Task : {taskList.length}</p>
      <div className="task-list">
    {
        taskList.map((item,index)=>(
            <div key={item.id} className='taskListContainer'>
                <div>
                <span className='taskName'>{item.text}</span>
                </div>
                <div>
                <button onClick={()=>Delete(item.id )} className='deleteBtn'>Delete</button>
                <button onClick={()=>Up(index)} className='moveBtn'>UP</button>
                <button onClick={()=>Down(index)} className='moveBtn'>Down</button>
                </div>
            </div>
        ))
    }
    </div>
    </div>

    </>
   
    
  )
}

export default TodoList
