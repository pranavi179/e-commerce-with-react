import React from "react";
// import logo from "./logo.svg";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import "antd/dist/antd.css";
// import Navbar from "./component/Navbar";
import View from "./component/view";
import SignInForm from "./component/signinform";
import SignUpForm from "./component/signupform";

function App() {
  return (
    <React.Fragment>
      {/* <Navbar /> */}
      <Switch>
        <Route exact path="/" component={View} />
        <Route exact path="/signinform" component={SignInForm} />
        <Route exact path="/signupform" component={SignUpForm} />
      </Switch>
    </React.Fragment>
  );
}

export default App;
