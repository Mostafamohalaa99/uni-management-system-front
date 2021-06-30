import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import AppBar from "material-ui/AppBar";
import RaisedButton from "material-ui/RaisedButton";
import TextField from "material-ui/TextField";
import { useState } from "react";
import axios from "axios";

const ChangePassword = () => {
  const [email, setEmail] = useState("");
  const [newPassword, setPassword] = useState("");
  const [oldPassword, setOldPassword] = useState("");

  const handleChangePassword = () => {
    var apiBaseUrl = "http://localhost:8080/changePassword";
    var payload = {
      email,
      newPassword: newPassword,
      password:oldPassword,
    };
    axios
      .post(apiBaseUrl, payload)
      .then(function (response) {
        console.log(response);
        if (response.status === 200) {
          console.log("Changed Successfully");
          window.location.href = "http://localhost:3000/";

          //Route to login
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
            hintText="Enter your old password"
            style={inputOne}
            onChange={(e) => setOldPassword(e.target.value)}
          />
          <br />
          <TextField
            type="password"
            style={inputOne}
            hintText="Enter your new password"
            onChange={(event, newValue) => setPassword(newValue)}
          />
          <br />
          <RaisedButton
            label="Submit"
            primary={true}
            style={style}
            onClick={handleChangePassword}
          />
        </div>
      </MuiThemeProvider>
    </div>
  );
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

export default ChangePassword;
