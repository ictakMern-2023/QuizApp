import { Box, Button, Card, CardContent, CardHeader, CardMedia, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const ViewAllPending = () => {
    const [dt,setDt] = useState([]);

    const navigate = useNavigate();

    useEffect(()=>{
        axios.get("http://localhost:4010/quiz")
        .then((res)=>{
            const quizdt = res.data.find((quizItem)=>quizItem.status === 'pending');
            if(quizdt)
            {
                console.log(res.data);
                setDt(res.data);
                console.log("appp");
            }
           
        })
        .catch((err)=>{
            console.log(err);
        })
    },[])

    const HandleOpenMore=(id)=>{
        navigate('/viewAndApprove',{
            state:{id:id},
        },
        
        );

    }

    const NavigateToHome=()=>{
        // navigate('/adminhome')
    }

   

  return (
    <div style={{ backgroundColor: 'purple', display: 'flex', flexDirection: 'column', alignItems: 'center',  minHeight: '100vh' }}>
      <Typography variant='h2' style={{ marginBottom: '20px',color:'#ffffff' }}>Approve Q</Typography>

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
          {dt.map((value,i)=>(
             <Card key={i}>
             <CardMedia>
                <Box color='#708090'>
                <Typography variant='h3'>{value.topic}</Typography>

                </Box>
               
             </CardMedia>
             <CardContent>
               <Button variant='contained' color='primary'onClick={()=>HandleOpenMore(value._id)}>
                 Open
               </Button>
               <Button  onClick={NavigateToHome}>Cancel</Button>
               
             </CardContent>
           </Card>
          ))}
         
          {/* End of Card Component */}
        </div>
      </Box>
    </div>
  );
};

export default ViewAllPending;