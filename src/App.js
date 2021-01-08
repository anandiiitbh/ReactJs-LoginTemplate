import React, { useState } from "react";
import "./styles.css";
import Button from "@material-ui/core/Button";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import InfoOutlinedIcon from "@material-ui/icons/InfoOutlined";

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1)
  },
  btnLog: {
    width: "360px",
    marginTop: "30px",
    backgroundColor: "#e5e5e5",
    textTransform: "none",
    fontFamily: '"Inter", sans-serif',
    "&:hover": {
      backgroundColor: "#e5e5e5"
    },
    "&$focused": {
      backgroundColor: "#e5e5ed"
    }
  },
  input: {
    width: "320px",
    marginTop: 15,
    height: "30px",
    fontSize: 15,
    paddingLeft: "35px",
    border: "2px solid black",
    borderRadius: "5px"
  },
  info: {
    paddingTop: 28,
    width: "4%",
    marginLeft: "10px",
    marginRight: "10px"
  }
}));

const ColorButton = withStyles((theme) => ({
  root: {
    margin: "auto",
    fontFamily: '"Inter", sans-serif',
    textTransform: "none",
    width: "360px",
    height: "56px",
    color: theme.palette.getContrastText("#181229"),
    backgroundColor: "#181209",
    "&:hover": {
      backgroundColor: "#181229"
    }
  }
}))(Button);

const useStylesReddit = makeStyles((theme) => ({
  root: {
    width: "360px",
    border: "1px solid #e2e2e1",
    overflow: "hidden",
    borderRadius: 4,
    fontFamily: '"Inter", sans-serif',
    backgroundColor: "#f3f3f6",
    "&:hover": {
      backgroundColor: "#e5e5e5"
    },
    "&$focused": {
      backgroundColor: "#e5e5ed"
    }
  },
  focused: {}
}));

function RedditTextField(props) {
  const classes = useStylesReddit();

  return (
    <TextField InputProps={{ classes, disableUnderline: true }} {...props} />
  );
}

export default function App() {
  const classes = useStyles();

  const [email, setEmail] = useState("rajabisek@hotmail.com");
  const [alert, setAlert] = useState("none");
  const [btn, setBtn] = useState("Next >>");

  return (
    <div className="main">
      <h1>Sign Up</h1>
      <ColorButton
        variant="contained"
        color="Primary"
        className={classes.button}
        startIcon={
          <svg
            class="svg"
            width="25"
            height="25"
            viewBox="0 0 18 18"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M17.64 9.2c0-.637-.057-1.251-.164-1.84H9v3.481h4.844c-.209 1.125-.843 2.078-1.796 2.717v2.258h2.908c1.702-1.567 2.684-3.874 2.684-6.615z"
              fill-rule="evenodd"
              fill-opacity="1"
              fill="#4285f4"
              stroke="none"
            ></path>
            <path
              d="M9.003 18c2.43 0 4.467-.806 5.956-2.18L12.05 13.56c-.806.54-1.836.86-3.047.86-2.344 0-4.328-1.584-5.036-3.711H.96v2.332C2.44 15.983 5.485 18 9.003 18z"
              fill-rule="evenodd"
              fill-opacity="1"
              fill="#34a853"
              stroke="none"
            ></path>
            <path
              d="M3.964 10.712c-.18-.54-.282-1.117-.282-1.71 0-.593.102-1.17.282-1.71V4.96H.957C.347 6.175 0 7.55 0 9.002c0 1.452.348 2.827.957 4.042l3.007-2.332z"
              fill-rule="evenodd"
              fill-opacity="1"
              fill="#fbbc05"
              stroke="none"
            ></path>
            <path
              d="M9.003 3.58c1.321 0 2.508.454 3.44 1.345l2.582-2.58C13.464.891 11.428 0 9.002 0 5.485 0 2.44 2.017.96 4.958L3.967 7.29c.708-2.127 2.692-3.71 5.036-3.71z"
              fill-rule="evenodd"
              fill-opacity="1"
              fill="#ea4335"
              stroke="none"
            ></path>
          </svg>
        }
      >
        Continue with Google
      </ColorButton>
      <div className="container">
        <RedditTextField
          label="Email Address"
          defaultValue={email}
          variant="filled"
          onChange={(value) => {
            setEmail(value.target.value);
            setAlert("none");
            setBtn("Next >>");
          }}
        />
        <div style={{ display: alert }}>
          <div className="alert">
            <InfoOutlinedIcon className={classes.info} />
            <div style={{ width: "85%", margin: 0 }}>
              <h4 style={{ padding: 0, margin: 0, float: "left" }}>
                Please check your email
              </h4>
              <br />
              <p
                style={{
                  textAlign: "justify",
                  textJustify: "inter-word",
                  margin: 0
                }}
              >
                We’ve sent a temporary authorization code to
                {" " + email}. It may take a few minutes to arrive.
              </p>
            </div>
          </div>

          <input
            className={classes.input}
            placeholder="| Please paste authorization code"
          />
        </div>
      </div>

      <Button
        onClick={() => {
          setAlert("block");
          setBtn("Log In");
        }}
        className={classes.btnLog}
      >
        {btn}
      </Button>
    </div>
  );
}
