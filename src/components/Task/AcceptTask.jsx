import React from 'react'

const AcceptTask = ({data}) => {
  return (

      <div className="flex-shrink-0 h-full rounded-xl p-5 bg-purple-400 w-[350px]">
            <div className='flex justify-between items-center text-sm'>
                <h3 className='bg-red-600 text-white px-3 rounded-md shadow-lg py-1'>{data.category}</h3>
                <h4 className='text-sm'>{data.taskDate}</h4>
            </div>
            <h2 className='mt-10 text-2xl font-semibold'>{data.taskTitle}</h2>
            <p className='mt-5 text-sm '>{data.taskDescription}</p>
            <div className='flex justify-between mt-4'>
            <button className='bg-green-500 text-sm px-2 py-1 rounded-md shadow-lg'>Mark as Completed</button>
            <button className='bg-red-500 text-sm px-2 py-1 rounded-md shadow-lg'>Mark as Failed</button>
            </div>
        </div>
 
  
  )
}

export default AcceptTask
