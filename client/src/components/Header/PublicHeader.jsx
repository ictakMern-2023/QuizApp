import React from 'react'
import { AppBar, Button, Toolbar, Typography } from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import { Link } from 'react-router-dom';


const PublicHeader = () => {

 const UserId = localStorage.getItem("email");

  return (
    <div>
    <AppBar
      style={{
        backgroundColor: '#c71585'
      }}
    >
      <Toolbar style={{ display: 'flex', justifyContent: 'space-between' }}>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <Typography
            variant={'h4'}
            sx={{
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: '#f5fffa',
              textDecoration: 'none',
              paddingLeft: '20px',
            }}
          >
            Quizz Application
          </Typography>
        </div>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <Typography
          style={{
            fontFamily:'cursive',
            color:'#f5fffa',

          }}
          >
            User :{UserId}
          </Typography>

        </div>
        <div style={{ display: 'flex', alignItems: 'flex-end' }}>
          <Link to='/profileViewAndEdit'><PersonIcon style={{height:'50px',width:'50px'}}/></Link>
        </div>
        
      </Toolbar>
    </AppBar>
  </div>
  )
}

export default PublicHeader
