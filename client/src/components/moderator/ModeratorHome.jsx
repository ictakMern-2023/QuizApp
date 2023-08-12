import React from 'react'
import ModeratorHeader from '../Header/ModeratorHeader'
import ModeratorMain from './ModeratorMain'
import { useLocation } from 'react-router-dom';
const ModeratorHome = () => {
  const location = useLocation();

  const {email} = location.state || {email:null};

  const userId = localStorage.setItem("email",email);
  // console.log(userId);
  return (
   <>
   <div>
   <ModeratorHeader username={email}/>
    <ModeratorMain username={email}/>
   </div>
     <div style={{paddingTop:'100px',paddingLeft:'300px'}}>
      <h2>Moderator home</h2>
      <h3>{email}</h3>
    </div>
   </>
  )
}

export default ModeratorHome
