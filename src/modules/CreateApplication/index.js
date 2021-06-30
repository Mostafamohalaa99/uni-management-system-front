import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import AppBar from "material-ui/AppBar";
import RaisedButton from "material-ui/RaisedButton";
import TextField from "material-ui/TextField";
import { useState } from "react";
import axios from "axios";

const SubmitApplication = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [faculty, setFaculty] = useState("");

  const handleApplication = () => {
    var apiBaseUrl = "http://localhost:8080/applications";
    var payload = {
      email,
      name,
      age,
      faculty
    };
    axios
      .post(apiBaseUrl, payload)
      .then(function (response) {
        console.log(response);
        if (response.status === 200) {
         alert("Application submitted Successfully");
          window.location.href = "http://localhost:3000/";

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
            hintText="Enter your name"
            style={inputOne}
            onChange={(e) => setName(e.target.value)}
          />
          <br />
          <TextField
            hintText="Enter your age"
            style={inputOne}
            onChange={(e) => setAge(e.target.value)}
          />
          <br />
          <TextField
            style={inputOne}
            hintText="Enter faculty"
            onChange={(e) => setFaculty(e.target.value)}
          />
          <br />
          <RaisedButton
            label="Create Application"
            primary={true}
            style={style}
            onClick={handleApplication}
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

export default SubmitApplication;
