import { Box, Button, Card, CardContent, CardMedia, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const ViewQuiz = () => {
    
    const [quizData, setQuizData] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        axios.get("http://localhost:4010/quiz")
        .then((res) => {
            console.log(res.data);
            setQuizData(res.data);
        })
        .catch((err) => console.log(err));
    }, []);

    const fullViewNavigate=(id)=>{
        navigate('/viewquestion',{
            state:{id:id},
        });


    }

    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
            <Box
                display='flex'
                alignItems='center'
                justifyContent='center'
                border='2px solid #ccc'
                padding='20px'
                bgcolor='#8fbc8f'
            >
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(6, 1fr)', gap: '20px', paddingBottom: '60px', paddingTop: '30px', padding: '20px' }}>
                    {quizData.map((val, i) => (
                        <Card key={i}>
                            <CardMedia>
                                <Typography variant='h6'>{val.topic}</Typography>
                            </CardMedia>
                            <CardContent>
                                <Button onClick={() => fullViewNavigate(val._id)}>View</Button>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </Box>
        </div>
    );
}

export default ViewQuiz;
