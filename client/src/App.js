// /* eslint-disable react/prefer-stateless-function */
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Welcome from "./pages/Welcome";
import Member from "./pages/Member";
import Footer from "./components/Footer";
import SignUp from "./components/SignUp";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path={["/", "/welcome"]}>
            <Welcome />
          </Route>
          <Route exact path={["/member"]}>
            <Member />
          </Route>
          <Route path="/sign-up" component={SignUp} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
  