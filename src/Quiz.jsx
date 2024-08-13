// import React from 'react'
import { useState } from "react";
import {
  TextField,
  Button,
  Container,
  Typography,
  Paper,
  Box,
} from "@mui/material";
import { pink } from "@mui/material/colors";
import PropTypes from "prop-types";

const questions = [
  { question: "What's the capital of France?", answer: "Paris" },
  { question: "What's 2 + 2?", answer: "4" },
  { question: "Who wrote 'Romeo and Juliet'?", answer: "Shakespeare" },
  { question: "What year did the Titanic sink?", answer: "1912" },
  { question: "What is the largest mammal?", answer: "Blue whale" },
];

const Quiz = ({ onFinish }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [userAnswers, setUserAnswers] = useState([]);
  const [userInput, setUserInput] = useState("");

  const handleAnswer = () => {
    const isCorrect =
      userInput.trim().toLowerCase() ===
      questions[currentQuestion].answer.toLowerCase();
    const updatedAnswers = [
      ...userAnswers,
      {
        question: questions[currentQuestion].question,
        userAnswer: userInput,
        isCorrect: isCorrect,
      },
    ];
    setUserAnswers(updatedAnswers);
    setUserInput("");
    // const updatedAnswers = [...userAnswers, userInput];
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      localStorage.setItem("answers", JSON.stringify(updatedAnswers));
      onFinish(updatedAnswers);
    }
  };
  return (
    <Container
      maxWidth={false}
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        width: "100vw",
        background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%",
      }}
    >
      <Paper
        elevation={3}
        sx={{
          p: 4,
          borderRadius: "20px",
          width: "90%",
          maxWidth: "400px",
          textAlign: "center",
        }}
      >
        <Typography variant="h5" align="center" gutterBottom>
          Quiz
        </Typography>
        <Typography variant="h6" sx={{ mb: 2 }}>
          {questions[currentQuestion].question}
        </Typography>
        <TextField
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
          fullWidth
          margin="normal"
          placeholder="Type your answer..."
          variant="outlined"
          InputProps={{
            sx: { borderRadius: "30px", borderColor: pink[500] },
          }}
        />
        <Box textAlign="center" sx={{ mt: 2 }}>
          <Button
            variant="contained"
            sx={{ backgroundColor: pink[500] }}
            onClick={handleAnswer}
          >
            Submit Answer
          </Button>
        </Box>
      </Paper>
    </Container>
  );
};

Quiz.propTypes = {
  onFinish: PropTypes.func.isRequired,
};

export default Quiz;
