import { Container, Typography, Paper, Box, Button } from "@mui/material";
import { pink } from "@mui/material/colors";
import PropTypes from "prop-types";

// Quiz results
const Result = ({ answers }) => {
  // Calculate the total score by counting the number of correct answers
  const score = answers.filter((answer) => answer.isCorrect).length;

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
        background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
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
        <Typography variant="h4" align="center" gutterBottom>
          Quiz Results
        </Typography>
        <Typography variant="h6" align="center" sx={{ mb: 2 }}>
          You scored: {score} / {answers.length}
          {/* Display the user's score out of the total number of questions */}
        </Typography>
        {answers.map((answer, index) => (
          <Typography key={index} paragraph>
            <strong>Question {index + 1}:</strong> {answer.question}
            <br />
            <strong>Your Answer:</strong> {answer.userAnswer}
            <br />
            <strong>Result:</strong>{" "}
            {answer.isCorrect ? "Correct" : "Incorrect"}
            {/* Display the details of each question, the user's answer, and whether it was correct */}
          </Typography>
        ))}
        <Box textAlign="center" sx={{ mt: 2 }}>
          <Button
            variant="contained"
            sx={{ backgroundColor: pink[500] }}
            onClick={() => window.location.reload()}
          >
            Restart Quiz
          </Button>
        </Box>
      </Paper>
    </Container>
  );
};

// PropTypes to ensure correct data type for 'answers' prop
Result.propTypes = {
  answers: PropTypes.arrayOf(
    PropTypes.shape({
      question: PropTypes.string.isRequired,
      userAnswer: PropTypes.string.isRequired,
      isCorrect: PropTypes.bool.isRequired,
    })
  ).isRequired,
};

export default Result;
