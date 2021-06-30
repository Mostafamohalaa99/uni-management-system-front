import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import AppBar from "material-ui/AppBar";
import RaisedButton from "material-ui/RaisedButton";
import TextField from "material-ui/TextField";
import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleClick = (event) => {
    var apiBaseUrl = "http://localhost:8080/";
    var payload = {
      email,
      password,
    };
    axios
      .post(apiBaseUrl, payload)
      .then(function (response) {
        console.log(response);
        if (response.status === 200) {
          console.log("Login successfull");
          let role = response.data.user.role;
          localStorage.setItem("type", role);
          window.location.href = "http://localhost:3000/dashboard";
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <div>
      <MuiThemeProvider>
        <AppBar title="Uni-System" />
        <div style={mainDiv}>
          <TextField
            hintText="Enter your email"
            style={inputOne}
            onChange={(e) => setEmail(e.target.value)}
          />
          <br />
          <TextField
            type="password"
            style={inputOne}
            hintText="Enter your Password"
            onChange={(event, newValue) => setPassword(newValue)}
          />
          <br />
          <RaisedButton
            label="Submit"
            primary={true}
            style={style}
            onClick={(event) => handleClick(event)}
          />

          <Link to="/changePassword">
            <RaisedButton
              label="Change Password"
              primary={true}
              style={stylechangePassword}
            />
          </Link>
          <Link to="/applications">
            <RaisedButton
              label="create new application"
              primary={true}
              style={stylechangePassword}
            />
          </Link>
        </div>
      </MuiThemeProvider>
    </div>
  );
};
const stylechangePassword = {
  marginTop: 40,
  marginBottom: 30,
  marginLeft: 760,
};
const style = {
  marginTop: 40,
  marginBottom: 30,
  marginLeft: 800,
};
const mainDiv = {
  marginTop: 80,
};
const inputOne = {
  width: 300,
  marginLeft: 700,
};

export default Login;
