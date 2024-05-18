// import 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css'

import { useState } from "react";

function App () {
  
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
  const items = [...tasks];


  const addTask = () => {    
    const elInput = document.querySelector('#inputElement')
    const inputValue = elInput.value.trim()
    if(inputValue !== "") items.push({
      text: inputValue,
      status: 0
    });
    elInput.value = ''
    setTasks(items)

  }

  
  const handleCheckboxChange = (index, status) => {
    const updatedTasks = tasks.map((task, i) => {
      if (i === index) {
        
        return { ...task, status: status }; 
      }
      return task; 
    });
    setTasks(updatedTasks); 
  };
  


  return (
    <div className="w-[390px] mx-auto mt-[22px]">
      <div className="h-[40px] border border-[#E1E1E1] x-full flex items-center mb-[15px]">
        <input id="inputElement" className="w-full h-full outline-none" type="text" />
        <button onClick={addTask} className="size-[40px] bg-green-500 p-[12px] font-bold text-white flex items-center justify-center">+</button>
      </div>      
      <div className="flex items-center space-x-[9px] h-[30px] mb-[13px]">
        <div className="h-full w-full rounded-[6px] border-[#E1E1E1] border flex items-center justify-center">All</div>
        <div className="h-full w-full rounded-[6px] border-[#E1E1E1] border flex items-center justify-center">Completed</div>
        <div className="h-full w-full rounded-[6px] border-[#E1E1E1] border flex items-center justify-center">Pending</div>
      </div>
      <div className="space-y-[6px]">
        {tasks.map((task, index)=> (
          <div key={index} className="border border-[#E1E1E1] w-full h-[40px] flex justify-between items-center">
          <div className="flex space-x-[10px] h-full items-center">
            <div className="ml-[10px]"><input type="checkbox" checked={task.status} onChange={() => handleCheckboxChange(index, !task.status)}  /></div>
            <div className={`${task.status ? 'line-through': ''}`}>{task.text}</div>
          </div>
          <div className="flex items-center space-x-[8px] mr-[8px]">
            {/* <i className="fa-solid fa-bars"></i> */}
            <div className="bg-blue-500 size-[20px] rounded-[5px] p-[5px]"><img className="object-cover size-full" src="./assets/images/pen.svg" alt="" /></div>
            <div className="bg-red-500 size-[20px] rounded-[5px] p-[5px]"><img className="object-cover size-full" src="./assets/images/Frame.svg" alt="" /></div>
          </div>
        </div>
        ))}
      </div>
    </div>
  )
    
  
  

}

export default App;