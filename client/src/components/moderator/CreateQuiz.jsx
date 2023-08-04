import React, { useEffect, useState } from 'react';
import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from '@mui/material';
import axios from 'axios';



const CreateQuiz = () => {
  const [topic, setTopic] = useState('');
 const [sub , setsub ] = useState('');
   const [duration, setDuration] = useState('');
  const [tagdata,setTagData] = useState([]);
  const [questions, setQuestions] = useState([
    { question: '', options: ['', '', '', ''], correctAnswer: '' },
  ]);

  const handleQuestionChange = (index, event) => {
    const { name, value } = event.target;
    const updatedQuestions = [...questions];
    if (name === 'question') {
      updatedQuestions[index].question = value;
    } else if (name.startsWith('option')) {
      const optionIndex = parseInt(name.slice(-1));
      updatedQuestions[index].options[optionIndex] = value;
    } else if (name === 'correctAnswer') {
      updatedQuestions[index].correctAnswer = value;
    }
    setQuestions(updatedQuestions);
  };

  const handleAddQuestion = () => {
    setQuestions([
      ...questions,
      { question: '', options: ['', '', '', ''], correctAnswer: '' },
    ]);
  };

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     // Handle submitting the quiz data to your server or perform any required actions.
//     console.log({
//       topic,
//       duration,
//       questions,
//     });

//     // Reset the form fields
//     setTopic('');
//     setDuration('');
//     setQuestions([{ question: '', options: ['', '', '', ''], correctAnswer: '' }]);
//   };

const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(sub);
    try {
      const quizData = {
        topic,
        sub,
        duration,
        questions,
        status:'pending',
      };
  
      // Send the quiz data to the backend
      await axios.post("http://localhost:4010/quizQuestion", quizData)
        .then(() => {
          alert("Quiz data saved successfully");
          console.log("success");
          setTopic('');
          setsub('');
          setDuration('');
          setQuestions([{ question: '', options: ['', '', '', ''], correctAnswer: '' }]);
        })
        .catch((err) => {
          alert("error");
          console.log(err);
        });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(()=>{
    axios.get("http://localhost:4010/tags")
    .then((res)=>{
      console.log(res.data);
      setTagData(res.data);
      
    })
    .catch((err)=>console.log(err));
  },[]);
  

  return (
    <>
      {/* <ModeratorMain/> */}
      <div className='quiz-app' style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center',backgroundColor:`#cfe8fc` }}>
        <Typography variant='h4'fontWeight='600'>Create Quiz</Typography>
        <Box
          display='flex'
          alignItems='center'
          justifyContent='center'
          border='2px solid #ccc'
          padding='20px'
          width='80vh'
          bgcolor='#f8f8ff'
        >
          <form onSubmit={handleSubmit} className='quiz-form'>
          <div className='form-group'>
              <label>Quiz Topic:</label>
              <FormControl fullWidth sx={{ mb: 3 }}>
                <InputLabel id="tag-label">Topic</InputLabel>
                <Select
                  labelId="tag-label"
                  id="topic-select"
                  label="Topic"
                  value={topic}
                  onChange={(e) => setTopic(e.target.value)}
                  sx={{ my: 2 }}
                >
                  {/* Mapping tagdata to render MenuItem */}
                  {tagdata.map((val, i) => (
                    <MenuItem key={i} value={val.tagName}>{val.tagName}</MenuItem>
                  ))}
                </Select>
              </FormControl>
            </div>
            <div className='form-group'>
              <label>Sub:</label>
              <TextField
                fullWidth
                
                value={sub}
                onChange={(e)=> setsub(e.target.value)}
                required
              />
            </div>
            <div className='form-group'>
              <label>Time Duration:</label>
              <TextField
                fullWidth
                type='number'
                value={duration}
                onChange={(e) => setDuration(e.target.value)}
                required
              />
            </div>
            {questions.map((question, index) => (
              <div key={index} className='question'>
                <h3>Question {index + 1}</h3>
                <div className='form-group'>
                  <label>Question:</label>
                  <TextField
                    type='text'
                    name='question'
                    fullWidth
                    value={question.question}
                    onChange={(e) => handleQuestionChange(index, e)}
                    required
                  />
                </div>
                <div className='options'>
                  {question.options.map((option, optionIndex) => (
                    <div key={optionIndex} className='form-group'>
                      <label>Option {optionIndex + 1}:</label>
                      <TextField
                        type='text'
                        name={`option${optionIndex}`}
                        fullWidth
                        value={option}
                        onChange={(e) => handleQuestionChange(index, e)}
                        required
                      />
                    </div>
                  ))}
                </div>
                <div className='form-group'>
                  <label>Correct Answer:</label>
                  <select
                    value={question.correctAnswer}
                    name='correctAnswer'
                    onChange={(e) => handleQuestionChange(index, e)}
                    required
                  >
                    <option value=''>Select Correct Answer</option>
                    {question.options.map((option, optionIndex) => (
                      <option key={optionIndex} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            ))}
            <div style={{paddingTop:'20px'}}>
            <Button  onClick={handleAddQuestion}>
              Add Question
            </Button>
            <Button variant='contained' type='submit'>Submit Quiz</Button>
            </div>
          </form>
        </Box>
      </div>
    </>
  );
};

export default CreateQuiz;
