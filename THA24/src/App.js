import Header from "./components/Header";
import {Route, Switch, Redirect} from "react-router-dom";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import authctx from "./context/auth-context";
import {useContext} from "react";
import Notloggedin from "./pages/Notloggedin";

function App() {
  const ctx = useContext(authctx);
  console.log(ctx.isloggedin);
  return (
    <div className="app">
      <Header />
      <Switch>
        <Route path="/" exact>
          <Redirect to="/home" />
        </Route>
        <Route path="/home">
          <Home />
        </Route>
        <Route path="/login">
          <Login/>
        </Route>
        {ctx.isloggedin && (
          <Route path="/dashboard">
            <Dashboard />
          </Route>
        )}
        {ctx.isloggedin && (
          <Route path="/profile">
            <Profile />
          </Route>
        )}
        <Route path="*">
          <Notloggedin />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
