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

const Fizzbuzz: React.FunctionComponent = () => {
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
      .post(`http://178.128.54.119:3000/fizzbuzz`, {
        length: parseInt(lengthData),
      })
      .then((res) => {
        const data = res.data.data;
        let stringData = "";
        for (let i = 0; i < data.length; i++) {
          stringData += ` ${data[i]}`;
        }
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
          Fizz dan Buzz mengacu pada angka berapapun yang akan habis bila di
          bagi 3 dan 5, atau bisa di sebut juga dengan kelipatan, dengan kata
          lain apabila suatu bilangan tersebut habis di bagi dengan 3 maka itu
          akan menjadi fizz, jika habis di bagi 5 maka angka tersebut menjadi
          buzz,dan jika angka tersebut kelipatan dari keduanya 3 dan 5 maka itu
          akan menjadi "Fizz Buzz",
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
                Fizzbuzz Generator
              </Typography>
              {/* <Typography variant="body2" gutterBottom> */}
              <TextField
                id="length-data"
                label="Length Data"
                variant="outlined"
                type="number"
                InputProps={{ inputProps: { min: 1, max: 150 } }}
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

export default Fizzbuzz;
