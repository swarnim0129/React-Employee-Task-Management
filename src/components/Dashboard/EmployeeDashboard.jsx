import React from 'react'
import Header from "../others/header"
import TaskNumber from '../others/TaskNumber'
import TaskList from '../Task/TaskList'



const EmployeeDashboard = (props) => {
  return (
    <div className='p-10 bg-[#1C1c1c] h-screen'>
      <Header changeUser={props.changeUser} data={props.data}/>
      <TaskNumber data={props.data}/>
      <TaskList data={props.data}/>
    </div>
  )
}

export default EmployeeDashboard
