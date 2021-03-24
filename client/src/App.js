// /* eslint-disable react/prefer-stateless-function */
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Welcome from "./pages/Welcome";
import NoMatch from "./pages/NoMatch";
import Footer from "./components/Footer";
import Login from "./pages/Login";
import SignUp from "./pages/Signup";
import Profile from "./components/Profile";
import NewsFeed from "./components/NewsFeed";

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path={["/", "/welcome"]}>
            <Welcome />
          </Route>
          <Route exact path={["/login"]}>
            <Login />
          </Route>
          <Route exact path={["/signup"]}>
            <SignUp />
          </Route>
          <Route exact path={["/profile"]}>
            <Profile />
          </Route>
          <Route exact path={["/newsfeed"]}>
            <NewsFeed />
          </Route>
          <Route component={NoMatch} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
  