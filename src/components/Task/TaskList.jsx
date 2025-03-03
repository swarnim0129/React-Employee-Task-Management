import React from 'react'
import AcceptTask from './AcceptTask'
import CompleteTask from './CompleteTask'
import Failed from './Failed'
import NewTask from './NewTask'

const TaskList = ({data}) => {
  return (
    <div id='taskList' className='h-[50%] overflow-x-auto flex justify-start py-5 items-center w-full gap-5 flex-nowrap mt-10 '>
        {/* <AcceptTask/>
        <NewTask/>
        <CompleteTask/>
        <Failed/> */}
        {data.tasks.map((elem,id)=>{
            if(elem.active){
                return <AcceptTask key={id} data={elem}/>
            }
            if(elem.completed){
                return <CompleteTask key={id} data={elem}/>
            }
            if(elem.failed){
                return <Failed key={id} data={elem}/>
            }
            if(elem.NewTask){
                return <NewTask key={id} data={elem}/>
            }
        })}
        

       
    </div>
  )
}

export default TaskList
