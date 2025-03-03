import React from 'react'

const TaskNumber = ({data}) => {
  return (
    <div className='flex screen gap-5 justify-between mt-10'>
      <div className=' w-[45%] bg-blue-500 text-white rounded-xl py-6 px-9 '>
        <h2 className="text-3xl font-semibold">{data.taskNumbers.newTask}</h2>
        <h3 className="text-xl font-medium text-shadow-lg">New Task</h3>
      </div>
      <div className=' w-[45%] bg-green-500 text-white rounded-xl py-6 px-9 '>
        <h2 className="text-3xl font-semibold">{data.taskNumbers.completed}</h2>
        <h3 className="text-xl font-medium text-shadow-lg">Completed Task</h3>
      </div>
      <div className=' w-[45%] bg-red-500 text-white rounded-xl py-6 px-9 '>
        <h2 className="text-3xl font-semibold">{data.taskNumbers.failed}</h2>
        <h3 className="text-xl font-medium text-shadow-lg">Failed Task</h3>
      </div>
      <div className=' w-[45%] bg-yellow-500 text-white rounded-xl py-6 px-9 '>
        <h2 className="text-3xl font-semibold">{data.taskNumbers.active}</h2>
        <h3 className="text-xl font-medium text-shadow-lg">Active Task</h3>
      </div>
    </div>
  )
}

export default TaskNumber
