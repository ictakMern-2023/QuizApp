import React, { useEffect, useState } from 'react'
import PublicHeader from '../Header/PublicHeader'
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Box, Button, Card, CardContent, CardMedia, Typography } from '@mui/material';

const PublicHome = () => {

  const location = useLocation();
  const {email} = location.state;
  localStorage.setItem("email",email);

  const navigate = useNavigate();

  const [dt,setDt] = useState([]);

  const HandleOpenMore=(id)=>{
    navigate('/attemptquiz',{
        state:{id:id,email:email},
    }
    
    );

}


  useEffect(()=>{axios.get("http://localhost:4010/quiz")
  .then((res)=>{ 
          console.log(res.data);
          setDt(res.data);   
  })
  .catch((err)=>{
      console.log(err);
  })
},[])

  return (
   <>
    <PublicHeader/>
     <div style={{paddingTop:'150px'}}>
      <h3>Public Home</h3>
      <h4>welcome {email}</h4>

      <Box
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#c71585',
          padding: '20px',
        }}
      >
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(6, 1fr)', gap: '20px', padding: '20px' }}>
          {/* Card Component */}
          {dt.map((value,i)=>{
            if(value.status === 'approved')
            return(
             <Card key={i}>
             <CardMedia>
                <Box color='#708090'>
                <Typography variant='h3'>{value.topic}</Typography>
                <Typography variant='h4'>{value.sub}</Typography>

                </Box>
               
             </CardMedia>
             <CardContent>
               <Button variant='contained' color='primary'onClick={()=>HandleOpenMore(value._id)}>
                 START QUIZ
               </Button>
               
               
             </CardContent>
           </Card>
            )
})}
         
          {/* End of Card Component */}
        </div>
      </Box>

    </div>
   </>
  )
}

export default PublicHome
