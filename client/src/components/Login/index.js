import React, {useState} from "react";
import "./style.css";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import API from "../../utils/userAPI.js";

function Login() {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLoginForm = (event) => {
    event.preventDefault();
    if (username && password) {
        API.login({
          username,
          password
        })
        .then(res => {
          const token = res.data.token;
          const myUser = res.data.user;
          console.log(res.data)
          console.log("token " + token)
          sessionStorage.setItem("myToken", token);
          sessionStorage.setItem("myUser", myUser);
        })
        .then(() => {
          // If the user is logged in, continue with the request to the restricted route
          if (username) {
            window.location.replace("/newsfeed");
          } 
        })
        .catch((err) => {
          if (err) {
          console.log(err) 
          alert("Incorrect username or password")
          }
        });
    }
  };
  
  const updateUsername = (event) => {
    setUsername(event.target.value);
  };
  const updatePassword = (event) => {
    setPassword(event.target.value);
  };

  return (
    <div>
      <Form 
        className="login-form"
      >
        <Form.Group controlId="formGroupUsername">
          <h2 className="animate__animated animate__fadeIn">Log In</h2>
          <Form.Label>
            Username
          </Form.Label>
          <Form.Control 
            name="username"
            type="text"
            autoComplete="username"
            placeholder="Username"
            onChange={(e) => updateUsername(e)}
          />
        </Form.Group>
        <Form.Group controlId="formGroupPassword">
          <Form.Label>
            Password
          </Form.Label>
          <Form.Control 
            name="password"
            type="password"
            autoComplete="current-password"
            placeholder="Password"
            onChange={(e) => updatePassword(e)}
          />
        </Form.Group>
        <Button 
          onClick={handleLoginForm}
          variant="dark"
          type="submit"
        >
          Login
        </Button>
      </Form>
    </div>
  );
};

export default Login;
