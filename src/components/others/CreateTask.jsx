import React, { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthProvider";

const CreateTask = () => {

  const [userData,setUserData] = useContext(AuthContext);
 
  const [taskTitle, setTaskTitle] = useState("");
  const [assignTo, setAssignTo] = useState("")
  const [taskDueDate, setTaskDueDate] = useState("");
  const [category, setCategory] = useState("");
  const [taskDescription, setTaskDescription] = useState("");
  const [newtask, setNewTask] = useState({})
   

  const submitHandler=(e)=>{
    e.preventDefault();

    setNewTask({taskTitle,taskDueDate,taskDescription,category,active:false,newTask:true,failed:false,completed:false})

    const data=userData
    // console.log(data)
    data.forEach(function(elem){
      if(assignTo==elem.firstName){
        elem.tasks.push(newtask)
        elem.taskNumbers.newTask = elem.taskNumbers.newTask+1        
        console.log(elem.tasks)
        setUserData(data)
      }
    })
    

    setAssignTo("")
    setTaskTitle("")
    setTaskDueDate("")
    setCategory("")
    setTaskDescription("")


  }



  return (
    <div>
      <div className="p-10 mt-7 rounded-2xl bg-zinc-950">
        <form onSubmit={(e)=>{
          submitHandler(e);
        }} className="flex w-full items-start justify-between">
          <div className="w-1/2">
            <div className="mt-2">
              <h3 className="text-sm text-gray-300 mb-1">Task Title</h3>
              <input
              value={taskTitle}
              onChange={(e)=>{
                setTaskTitle(e.target.value);
              }}
                className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-3"
                type="text"
                placeholder="Make a UI design"
              />
            </div>
            <div>
              <h3 className="text-sm text-gray-300 mb-1">Date</h3>
              <input
              value={taskDueDate}
              onChange={(e)=>{
                setTaskDueDate(e.target.value);
              }}
                className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-3"
                type="date"
                name=""
                id=""
              />
            </div>
            <div>
              <h3 className="text-sm text-gray-300 mb-1">Assign to</h3>
              <input
              value={assignTo}
              onChange={(e)=>{
                setAssignTo(e.target.value);
              }}
                className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-3"
                type="text"
                placeholder="employee name"
              />
            </div>
            <div>
              <h3 className="text-sm text-gray-300 mb-1">Category</h3>
              <input
              value={category}
              onChange={(e)=>{
                setCategory(e.target.value);
              }}
                className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-3"
                type="text"
                placeholder="design dev etc"
              />
            </div>
          </div>

          <div className="w-2/5 flex flex-col items-start">
            <h3 className="text-sm text-gray-300 mb-0.5">Description</h3>
            <textarea
            value={taskDescription}
            onChange={(e)=>{
              setTaskDescription(e.target.value);
            }}
              className=" w-full h-60 text-sm py-2 px-4 rounded outline-none bg-transparent border-[1px] border-gray-400"
              name=""
              id=""
            ></textarea>

            <button className="bg-emerald-600 py-3 hover:bg-emerald-700 px-5 rounded text-sm mt-4 w-full">
              Create Task
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateTask;
