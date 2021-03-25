// /* eslint-disable react/prefer-stateless-function */
import React, {useEffect, useState} from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Welcome from "./pages/Welcome";
import NoMatch from "./pages/NoMatch";
import Footer from "./components/Footer";
import Login from "./pages/Login";
import SignUp from "./pages/Signup";
import Profile from "./components/Profile";
import NewsFeed from "./components/NewsFeed";

function App() {
  const [user, setUser] = useState({});

  useEffect(() => {
    let myUser = sessionStorage.getItem("myUser");
    setUser({ username: myUser })
  },[])

  const handeUserUpdate = (user) => {
    setUser(user)
  }
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path={["/", "/welcome"]}>
            <Welcome />
          </Route>
          <Route exact path={["/login"]} render={(props) => <Login {...props} handleUser={handeUserUpdate} />}>
            
          </Route>
          <Route exact path={["/signup"]}>
            <SignUp />
          </Route>
          <Route exact path={["/profile"]} render={ (props) => user.username ? <Profile /> : <Login {...props} handleUser={handeUserUpdate} />}/>
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
  