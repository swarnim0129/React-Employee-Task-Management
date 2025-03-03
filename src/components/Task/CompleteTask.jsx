import React from 'react'

const CompleteTask = ({data}) => {
  return (
    <div className="flex-shrink-0 h-full rounded-xl p-5 bg-orange-400 w-[350px]">
            <div className='flex justify-between items-center text-sm'>
            <h3 className='bg-red-600 text-white px-3 rounded-md shadow-lg py-1'>{data.category}</h3>
                <h4 className='text-sm'>{data.taskDate}</h4>
            </div>
            <h2 className='mt-10 text-2xl font-semibold'>{data.taskTitle}</h2>
            <p className='mt-5 text-sm '>{data.taskDescription}</p><div className='mt-3'>
                <button className='w-full px-2 py-1 bg-green-500 rounded-md shadow-lg'>Complete</button>
            </div>
        </div>
  )
}

export default CompleteTask
