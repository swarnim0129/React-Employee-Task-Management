import React from 'react'


const header = (props) => {

  const logoutUser=()=>{
    localStorage.setItem("loggedInUser","")
    props.changeUser("")
    // window.location.reload()
  }
  return (

    <div className='flex justify-between items-center'>

      <h1 className='text-2xl font-semibold'>Hello<br /><span className='text-3xl font-bold'>Username👋</span></h1>
      <button onClick={logoutUser} className='bg-red-600 text-lg font-medium text-white px-5 py-2 rounded-md hover:bg-red-700'>Log out</button>
    </div>
  )
}

export default header
