import { useState } from "react";
import {
  TextField,
  Button,
  Container,
  Typography,
  Paper,
  Box,
  Avatar,
} from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import LockIcon from "@mui/icons-material/Lock";
import { pink } from "@mui/material/colors";
import PropTypes from "prop-types";

const Registration = ({ onRegister }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const userData = { firstName, lastName, email };
    localStorage.setItem("user", JSON.stringify(userData));
    onRegister();
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
        <Avatar sx={{ bgcolor: pink[500], margin: "0 auto", mb: 2 }}>
          <PersonIcon />
        </Avatar>
        <Typography variant="h4" align="center" gutterBottom>
          Register
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            label="First Name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            fullWidth
            margin="normal"
            required
            variant="outlined"
            InputProps={{
              startAdornment: (
                <Box component="span" sx={{ color: pink[500], mr: 1 }}>
                  <PersonIcon />
                </Box>
              ),
            }}
          />
          <TextField
            label="Last Name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            fullWidth
            margin="normal"
            required
            variant="outlined"
            InputProps={{
              startAdornment: (
                <Box component="span" sx={{ color: pink[500], mr: 1 }}>
                  <PersonIcon />
                </Box>
              ),
            }}
          />
          <TextField
            label="Email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            fullWidth
            margin="normal"
            required
            variant="outlined"
            InputProps={{
              startAdornment: (
                <Box component="span" sx={{ color: pink[500], mr: 1 }}>
                  <LockIcon />
                </Box>
              ),
            }}
          />
          <Box textAlign="center" sx={{ mt: 2 }}>
            <Button
              variant="contained"
              sx={{ backgroundColor: pink[500] }}
              type="submit"
            >
              Submit
            </Button>
          </Box>
        </form>
      </Paper>
    </Container>
  );
};

Registration.propTypes = {
  onRegister: PropTypes.func.isRequired,
};

export default Registration;
