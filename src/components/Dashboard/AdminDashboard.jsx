import React from "react";
import Header from "../others/header";
import CreateTask from "../others/CreateTask";
import AllTasks from "../others/AllTasks";

const AdminDashboard = (props) => {
  return (
    <div className="p-10 bg-[#1C1c1c] h-screen">
      <Header changeUser={props.changeUser} />
      <CreateTask/>
      <AllTasks/>
    </div>
  );
};

export default AdminDashboard;
