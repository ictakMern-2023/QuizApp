import React from 'react'
import { AppBar, Toolbar, Typography } from '@mui/material';
import { useLocation } from 'react-router-dom';
import PersonIcon from '@mui/icons-material/Person';
import { Link } from 'react-router-dom';

const ModeratorHeader = () => {

  const location = useLocation();
  // const {email} = location.state;

  let email = localStorage.getItem("email");

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
            QuiZZ APP
          </Typography>
        </div>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <Typography
          style={{
            fontFamily:'cursive',
            color:'#f5fffa',

          }}
          >
            User :{email}
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

export default ModeratorHeader
