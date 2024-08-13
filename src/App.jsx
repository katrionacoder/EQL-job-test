import { useState } from "react";
import { ThemeProvider, createTheme, CssBaseline } from "@mui/material";
import Registration from "./Registration";
import Quiz from "./Quiz";
import Result from "./Result";


// Design
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
  const [registered, setRegistered] = useState(false);
  const [finished, setFinished] = useState(false);
  const [answers, setAnswers] = useState([]);

  const handleRegister = () => {
    setRegistered(true);
  };

  const handleFinish = (userAnswers) => {
    setAnswers(userAnswers);
    setFinished(true);
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div>
        {!registered && !finished && (
          <Registration onRegister={handleRegister} />
        )}
        {registered && !finished && <Quiz onFinish={handleFinish} />}
        {finished && <Result answers={answers} />}
      </div>
    </ThemeProvider>
  );
}


export default App;
