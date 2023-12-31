import React from 'react'
import ModeratorHeader from '../Header/ModeratorHeader'
import ModeratorMain from './ModeratorMain'
import { useLocation } from 'react-router-dom';
import backgroundimg from "../moderator/moderator.jpg";
import { Typography } from '@mui/material';
const ModeratorHome = () => {
  const location = useLocation();

  const {email} = location.state || {email:null};

  const userId = localStorage.setItem("email",email);
  // console.log(userId);
  return (
   <>
   <div>
   <ModeratorHeader />
    <ModeratorMain />
   </div>
     <div style={{paddingLeft:'300px'}}>
      <Typography variant='h5' fontStyle='italic' fontWeight='bold' >Welcome ..{email}</Typography>
      <div
        style={{
          backgroundImage: `url(${backgroundimg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          minHeight: '100vh', // Set the minimum height to fill the viewport
          paddingTop: '100px',
        }}
      >
       
      </div>
    </div>
   </>
  )
}

export default ModeratorHome
