import React, { useState } from "react";
import axios from "axios";
import { styled } from "@mui/material/styles";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import CircularProgress from "@mui/material/CircularProgress";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import ButtonBase from "@mui/material/ButtonBase";
import Alert from "@mui/material/Alert";

const Img = styled("img")({
  margin: "auto",
  display: "block",
  maxWidth: "100%",
  maxHeight: "100%",
});

const Palindrome: React.FunctionComponent = () => {
  const [lengthData, setLengthData] = useState("");
  const [loading, setLoading] = useState(false);
  const [showResult, setShowResult] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [errMessage, setErrMessage] = useState("");
  const [fizzBuzzData, setFizzBuzzData] = useState("");
  const isUrlValid = (url: any) => url > 0;
  const handleSubmit = () => {
    setLoading(true);
    setErrMessage("");
    setShowAlert(false);
    axios
      .post(`http://178.128.54.119:3000/palindrome`, {
        keyword: lengthData,
      })
      .then((res) => {
        const data = res.data.data;
        const stringData = `${
          data.isPalindrome
            ? "Kata tsb Palindrome"
            : "Kata tsb bukan Palindrome"
        }`;
        setFizzBuzzData(stringData);
        setLoading(false);
        setShowResult(true);
      })
      .catch((e) => {
        setErrMessage(e.message);
        setLoading(false);
        setShowAlert(true);
      });
  };
  return (
    <Paper
      sx={{
        p: 2,
        margin: "auto",
        maxWidth: 500,
        flexGrow: 1,
        backgroundColor: (theme) =>
          theme.palette.mode === "dark" ? "#1A2027" : "#fff",
      }}
    >
      <Grid container spacing={2}>
        <Alert severity="info">
          Palindrome adalah kata, frasa, dan angka yang akan terdengar sama
          walaupun dibaca dari belakang Contoh : Never odd or even, Was it a car
          or a cat I saw?, 12321, No, Mel Gibson is a casino's big lemon
        </Alert>
      </Grid>
      {showAlert ? <Alert severity="error">{errMessage}</Alert> : ""}
      <Grid container spacing={2}>
        <Grid item>
          <ButtonBase sx={{ width: 128, height: 128 }}>
            <Img alt="complex" src="/static/images/grid/complex.jpg" />
          </ButtonBase>
        </Grid>
        <Grid item xs={12} sm container>
          <Grid item xs container direction="column" spacing={2}>
            <Grid item xs>
              <Typography gutterBottom variant="subtitle1" component="div">
                Palindrome Validator
              </Typography>
              {/* <Typography variant="body2" gutterBottom> */}
              <TextField
                id="length-data"
                label="Word / Sentence"
                variant="outlined"
                type="text"
                InputProps={{ inputProps: { minLength: 1, maxLength: 150 } }}
                onChange={(event) => setLengthData(event.target.value)}
                // error={isUrlValid(lengthData)}
                helperText={
                  isUrlValid(lengthData) ? "Length data required" : ""
                }
                required
              />
              {/* </Typography> */}
              <Typography variant="body2" color="text.secondary"></Typography>
            </Grid>
            <Grid item>
              <Button variant="outlined" color="success" onClick={handleSubmit}>
                Generate
              </Button>
            </Grid>
            {loading ? <CircularProgress color="inherit" /> : ""}
          </Grid>
          <Grid item>
            <Typography variant="subtitle1" component="div"></Typography>
          </Grid>
        </Grid>
      </Grid>
      {showResult ? (
        <Grid container spacing={2}>
          <Grid item>
            <ButtonBase sx={{ width: 128, height: 128 }}>
              <Img alt="complex" src="/static/images/grid/complex.jpg" />
            </ButtonBase>
          </Grid>
          <Grid item xs={12} sm container>
            <Typography gutterBottom variant="subtitle1" component="div">
              Result : {fizzBuzzData}
            </Typography>
          </Grid>
        </Grid>
      ) : (
        ""
      )}
    </Paper>
  );
};

export default Palindrome;
