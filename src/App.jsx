import { useState } from "react";
import { ThemeProvider, createTheme, CssBaseline } from "@mui/material";
import Registration from "./Registration";
import Quiz from "./Quiz";
import Result from "./Result";


// Design - Material UI theme configuration to ensure consistent styling across the application
const theme = createTheme({
  palette: {
    primary: {
      main: "#1976d2",
    },
    secondary: {
      main: "#dc004e",
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    button: {
      textTransform: "none",
    },
  },
});

// Logic
function App() {
  // State variables to track registration status, quiz completion and user answers
  const [registered, setRegistered] = useState(false);
  const [finished, setFinished] = useState(false);
  const [answers, setAnswers] = useState([]);

  // Handles the registration 
  const handleRegister = () => {
    setRegistered(true);
  };

  // Handles the quiz completion
  const handleFinish = (userAnswers) => {
    setAnswers(userAnswers);
    setFinished(true);
  };

  return (
    // Applies the custom theme to the entire application 
    <ThemeProvider theme={theme}>
      {/* Normalize CSS baseline for consistent rendering across browsers*/}
      <CssBaseline />
      <div>
        {/* Render registration component if user is not registered and quiz if not finished */}
        {!registered && !finished && (
          <Registration onRegister={handleRegister} />
        )}
        {/* Render Quiz component if user is registered but quiz is not finished */}
        {registered && !finished && <Quiz onFinish={handleFinish} />}
        {/* Render Result component if quiz is finished */}
        {finished && <Result answers={answers} />}
      </div>
    </ThemeProvider>
  );
}


export default App;
