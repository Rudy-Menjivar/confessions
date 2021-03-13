// /* eslint-disable react/prefer-stateless-function */
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Welcome from "./pages/Welcome";
import Member from "./pages/Member";
import NoMatch from "./pages/NoMatch";
import Footer from "./components/Footer";
import Profile from "./components/Profile";

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
          <Route exact path={["/member/profile"]}>
            <Profile />
          </Route>
          
          <Route component={NoMatch} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
  