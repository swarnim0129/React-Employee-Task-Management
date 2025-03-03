import Login from "./components/Auth/Login";
import AdminDashboard from "./components/Dashboard/AdminDashboard";
import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard";
import "./index.css";
import React, { use, useContext, useEffect, useState } from "react";
import { setLocalStorage } from "./utils/localStorage";
import { AuthContext } from "./context/AuthProvider";

const App = () => {
  // localStorage.clear()
  const [user, setUser] = useState(null);
  const [loggedInUserData ,setLoggedInUserData]=useState(null)
  const [userData,setUserData]=useContext(AuthContext)
  
  useEffect(function(){
    // setLocalStorage()
    const loggedUser=localStorage.getItem("loggedInUser")
    if(loggedUser){
      const userData=JSON.parse(loggedUser)
      setUser(userData.role)
      setLoggedInUserData(userData.data)
    }
  },[]) 
  
 


  const handleLogin = (email, password) => {
    if (email == "admin@g.com" && password == "0129") {
      setUser("admin");
      localStorage.setItem('loggedInUser',JSON.stringify({role:"admin"}))
    } else if (userData) {
      const employee= userData.find((e)=>email==e.email && password==e.password)
      if(employee){
        setUser("employee");
        setLoggedInUserData(employee)
        localStorage.setItem('loggedInUser',JSON.stringify({role:"employee ",data:employee }))
      }
      if(!employee){
        window.alert("invalid credentialss");

      }
    }
  };

  
  return (
    <>
      {!user ? <Login handleLogin={handleLogin} /> : ""}
      {user === "admin" ? <AdminDashboard changeUser={setUser} /> : (user=="employee"?<EmployeeDashboard changeUser={setUser} data={loggedInUserData}/>:null)}

    </>
  );
};

export default App;
