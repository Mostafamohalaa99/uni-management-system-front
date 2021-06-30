import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams,
} from "react-router-dom";
import ChangePassword from "./pages/ChangePassword";
import Login from "./pages/Login";
import Admin from "./pages/Admin"
import Application from "./pages/SubmitApplication"
function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Switch>
          <Route path="/dashboard">
              <Admin />
            </Route>
            <Route path="/changePassword">
              <ChangePassword />
            </Route>
            <Route path="/applications">
              <Application />
            </Route>
            <Route path="/">
              <Login />
            </Route>
          </Switch>
        </header>
      </div>
    </Router>
  );
}

export default App;
