import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import AppBar from "material-ui/AppBar";
import RaisedButton from "material-ui/RaisedButton";
import TextField from "material-ui/TextField";
import { useState } from "react";
import axios from "axios";

const AddCourse = () => {
  const [name, setName] = useState("");
  const [TA, setTA] = useState("");
  const [difficulty, setDifficulty] = useState("");
  const [time, setTime] = useState("");
  const [semester, setSemester] = useState("");
  const [location, setLocation] = useState("");
  const [courses, setCourses] = useState([]);
  const [coursesSchedule, setCoursesShedule] = useState([]);
  const [grades, setGrades] = useState([]);

  let role = localStorage.getItem('type');
  const handleAddCourse = () => {
    var apiBaseUrl = "http://localhost:8080/admin/addCourse";
    var payload = {
      name,
      TA: TA,
      difficulty:difficulty,
      time:time,
      semester:semester,
      location:location
    };
    axios
      .post(apiBaseUrl, payload)
      .then(function (response) {
        console.log(response);
        if (response.status === 200) {
          console.log("added Successfully");
          window.location.href = "http://localhost:3000/dashboard";
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  const handlegetSchedule = ()=>{
    var apiBaseUrl = "http://localhost:8080/ta/getCourses";
    axios
    .get(apiBaseUrl)
    .then(function (response) {
      console.log(response);
      if (response.status === 200) {
       let coursesObj = response.data.courses
       setCoursesShedule(coursesObj)
       setCourses([])
         setGrades([])
        console.log(courses)
      }
    })
    .catch(function (error) {
      console.log(error);
    });
  }
  const handlegetCourses = ()=>{
    var apiBaseUrl = "http://localhost:8080/ta/getCourses";
    axios
    .get(apiBaseUrl)
    .then(function (response) {
      console.log(response);
      if (response.status === 200) {
       let coursesObj = response.data.courses
       setCourses(coursesObj)
       setGrades([])
       setCoursesShedule([])
        console.log(courses)
      }
    })
    .catch(function (error) {
      console.log(error);
    });
  }
  const handlegetGrades = ()=>{
    var apiBaseUrl = "http://localhost:8080/student/getGrades";
    axios
    .get(apiBaseUrl)
    .then(function (response) {
      console.log(response);
      if (response.status === 200) {
       let coursesObj = response.data.courses
         setGrades(coursesObj)
         setCourses([])
         setCoursesShedule([])
        console.log(courses)
      }
    })
    .catch(function (error) {
      console.log(error);
    });
  }
if(role === 'Admin'){
  return (
    <div>
      <MuiThemeProvider>
        <AppBar title="Uni-System - Admin" />
        <div style={mainDiv}>
          <TextField
            hintText="Enter course name"
            style={inputOne}
            onChange={(e) => setName(e.target.value)}
          />
          <br />
          <TextField
            hintText="Enter TA name"
            style={inputOne}
            onChange={(e) => setTA(e.target.value)}
          />
          <br />
          <TextField
            style={inputOne}
            hintText="set difficulty"
            onChange={(e) => setDifficulty(e.target.value)}
          />         <br />
          <TextField
            style={inputOne}
            hintText="set time"
            onChange={(e) => setTime(e.target.value)}
          />
          <br />
          <TextField
            style={inputOne}
            hintText="semester"
            onChange={(e) => setSemester(e.target.value)}
          />
          <br />
          <TextField
            style={inputOne}
            hintText="location"
            onChange={(e) => setLocation(e.target.value)}
          />
          <br />
          <RaisedButton
            label="Submit"
            primary={true}
            style={style}
            onClick={handleAddCourse}
          />
        </div>
      </MuiThemeProvider>
    </div>
  );
}else if (role === 'TA'){
    return (
        <div>
          <MuiThemeProvider>
            <AppBar title="Uni-System - TA" />
            <h3>Assigned classes:</h3>
            <div style={TADiv}>
            {
      courses.map((i) => (
        i.TA == 'Layla' || i.TA == 'layla'?

          <h4 style={{border: '1px solid black',borderRadius: '5px!important',width:400}} key={i}>
                     name: {i.name} <br></br>
                  semester: {i.semester} <br></br>
                 time: {i.time} <br></br>
                 difficulty: {i.difficulty} <br></br>
              </h4>
                  :''
        ))
       
      }
    
            </div>
            <RaisedButton
                label="Show my Courses"
                primary={true}
                style={style}
                onClick={handlegetCourses}
              />
          </MuiThemeProvider>
        </div>
      );
}else if(role === 'student'){
        return (
            <div>
              <MuiThemeProvider>
                <AppBar title="Uni-System - Student" />
                <h3>Student:</h3>

                <div style={studentDiv1} > 
                {
          grades.map((i) => (
              <h4 style={{border: '1px solid black',borderRadius: '5px!important',width:400}} key={i}>
       
                 name: {i.course} <br></br>
              semester: {i.semester} <br></br>
             grade: {i.grade} <br></br>
                  </h4>
            ))         
          }
            <RaisedButton
                    label="Show my Grades"
                    primary={true}
                    onClick={handlegetGrades}
                  />
                </div>
                <div style={studentDiv2}> 
                <div style={TADiv}>
            {
      courses.map((i) => (

          <h4 style={{border: '1px solid black',borderRadius: '5px!important',width:400}} key={i}>
                     name: {i.name} <br></br>
                  semester: {i.semester} <br></br>
                 time: {i.time} <br></br>
                 difficulty: {i.difficulty} <br></br>
              </h4>
        ))
    
      }
     <RaisedButton
                label="Show my Courses"
                primary={true}
                onClick={handlegetCourses}
              />
            </div>

                </div>
                <div style={studentDiv1} > 
                {
          coursesSchedule.map((i) => (
              <h4 style={{border: '1px solid black',borderRadius: '5px!important',width:400}} key={i}>
       
                 name: {i.course} <br></br>
              semester: {i.semester} <br></br>
             time: {i.time} <br></br>
             location: {i.location} <br></br>

                  </h4>
            ))         
          }
            <RaisedButton
                    label="Show my Schedule"
                    primary={true}
                    onClick={handlegetSchedule}
                  />
                </div>
              </MuiThemeProvider>
            </div>

          );
}
};

const style = {
  marginTop: 40,
  marginBottom: 30,
  marginLeft: 800,
};
const mainDiv = {
  marginTop: 80,
};
const TADiv = {
    marginTop: 80,
    marginLeft:550
}
const studentDiv1={
    marginTop: 80,
    marginLeft:80
}
const studentDiv2={
    marginTop: 80,
    marginLeft:280
}
const inputOne = {
  width: 300,
  marginLeft: 700,
};

export default AddCourse;
