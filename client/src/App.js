import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from "./components/Common/Home";
import AdminHeader from "./components/Header/AdminHeader";
import ModeratorHeader from "./components/Header/ModeratorHeader";
import PublicHeader from "./components/Header/PublicHeader";
import Heder from "./components/Common/Heder";

import Login from "./components/Login/Login";
import Registration from "./components/Registration/Registration";
import AdminHome from "./components/admin/AdminHome";
import ModeratorHome from "./components/moderator/ModeratorHome";
import PublicHome from "./components/public/PublicHome";




const  App=()=> {

  // // const userRole = '';
  // const userRole = window.history.state?.userRole || '';
  

  // const getHeaderComponent = (userRole)=>{
  //   switch(userRole){
  //     case 'admin':
  //       return <AdminHeader/>;
  //     case 'moderator':
  //       return<ModeratorHeader/>;
  //     case 'public':
  //       return <PublicHeader/>;
  //     default:
  //       return <Heder/>
      
  //   }

  // };
  return (
    <Router>
      {/* {getHeaderComponent()} */}
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path ="/publicReg" element={<Registration/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/adminhome" element={<AdminHome/>} />
        <Route path="/moderatorhome" element={<ModeratorHome/>} />
        <Route path="publichome" element ={<PublicHome/>} />
     
      </Routes>
      
        

      
    
    </Router>
    
  );
}

export default App;
