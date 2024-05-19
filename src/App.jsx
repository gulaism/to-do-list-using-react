

import { useState } from "react";

function App () {
  

  const [text, setText] = useState('')
 
  const [editIndex, setEditIndex] = useState(false)
  const [tasks, setTasks] = useState([
    {
      text: "Task 1",
      status: 0
    },
    {
      text: "Task 2",
      status: 0
    },
    {
      text: "Task 1",
      status: 1
    }
    
  ]); 
    const [filtered, setFiltered] = useState('all')

  const addTask = () => { 

    if(text.trim()) {
      if(editIndex >= 0 && tasks[editIndex]) {
        tasks[editIndex].text = text
        setEditIndex('')
      }
      else {
        tasks.push({
        text: text,
        status: 0
      })
      }
      
    } 
    setText('')
    setTasks([...tasks])
  }

  
  const handleCheckboxChange = (index, taskStatus) => {
    tasks[index].status = taskStatus===0 ? 1 : 0
    setTasks([...tasks])
  };
  
  const deleteTask = (index) => {
    tasks.splice(index, 1)
    setTasks([...tasks])

  }

  const editTask = (index) => {
    setEditIndex(index)
    setText(tasks[index].text)

  }

  const filteredTasks = () => {
    if(filtered === 'completed') {
      const completed = tasks.filter(task => task.status === 1)
      return completed
    }
    else if(filtered === 'pending') {
      const pending = tasks.filter(task => task.status === 0)
      return pending
    }
    else return tasks
  }

  return (
    <div className="w-[390px] mx-auto mt-[22px]">
      <div className="h-[40px] border border-[#E1E1E1] x-full flex items-center mb-[15px]">
        <input value={text} onChange={(e) => setText(e.target.value)} className="w-full h-full outline-none" type="text" />
        <button onClick={addTask} className="size-[40px] bg-green-500 p-[12px] font-bold text-white flex items-center justify-center">+</button>
      </div>      
      <div className="flex items-center space-x-[9px] h-[30px] mb-[13px]">
        <button onClick={() => setFiltered('all')} className="h-full w-full rounded-[6px] border-[#E1E1E1] border flex items-center justify-center">All</button>
        <button onClick={() => setFiltered('completed')} className="h-full w-full rounded-[6px] border-[#E1E1E1] border flex items-center justify-center">Completed</button>
        <button onClick={() => setFiltered('pending')} className="h-full w-full rounded-[6px] border-[#E1E1E1] border flex items-center justify-center">Pending</button>
      </div>
      <div className="space-y-[6px]">
        {filteredTasks().map((task, index)=> (
          <div key={index} className="border border-[#E1E1E1] w-full h-[40px] flex justify-between items-center">
          <div className="flex space-x-[10px] h-full items-center">
            <div className="ml-[10px]"><input type="checkbox" checked={task.status} onChange={() => handleCheckboxChange(index, task.status)}  /></div>
            <div className={`${task.status ? 'line-through': ''}`}>{task.text}</div>
          </div>
          <div className="flex items-center space-x-[8px] mr-[8px]">
            <button onClick={() => editTask(index)} className="bg-blue-500 size-[20px] rounded-[5px] flex items-center justify-center"><i className="text-xs text-white fa-solid fa-pen"></i></button>
            <button onClick={() => deleteTask(index)} className="bg-red-500 size-[20px] rounded-[5px] flex items-center justify-center"><i className="text-xs text-white fa-solid fa-trash"></i></button>
          </div>
        </div>
        ))}
      </div>
    </div>
  )
    
  
  

}

export default App;