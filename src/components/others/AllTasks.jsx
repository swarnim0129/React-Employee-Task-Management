import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";

const AllTasks = () => {
  const [userData,setUserData] = useContext(AuthContext);
  // console.log(userData.employees)
  return (
    <div className="mt-5 p-5 h-60 " id="verticalScroll">
      <div className="bg-#1c1c1c] p-5 flex justify-between mb-3 text-md rounded-md py-2 px-4 bg-purple-600">
        <h2 className="text-lg font-medium w-1/5">Employee Name</h2>
        <h3 className="text-lg font-medium w-1/5">New Tasks</h3>
        <h5 className="text-lg font-medium w-1/5">Active</h5>
        <h5 className="text-lg font-medium w-1/5">Completed</h5>
        <h5 className="text-lg font-medium w-1/5">Failed</h5>
      </div>
      <div className="h-[100%] overflow-auto" id="verticalScroll">
        {userData.map(function (elem, idx) {
          return (
            <div
              key={idx}
              className="bg-#1c1c1c] p-5 flex justify-between mb-3 text-md rounded-md py-2 px-4 border-2 border-emerald-500"
            >
              <h2 className="text-lg font-medium w-1/5 text-white">
                {elem.firstName}
              </h2>
              <h3 className="text-lg font-medium w-1/5 text-green-400">
                {elem.taskNumbers.newTask}
              </h3>
              <h5 className="text-lg font-medium w-1/5 text-yellow-400">
                {elem.taskNumbers.active}
              </h5>
              <h5 className="text-lg font-medium w-1/5 text-blue-400">
                {elem.taskNumbers.completed}
              </h5>
              <h5 className="text-lg font-medium w-1/5 text-red-400">
                {elem.taskNumbers.failed}
              </h5>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AllTasks;
