import React, { Component } from "react";
import { Link } from "react-router-dom";
import Home from './Home'


import {
  Container,
  Button,
  Row,
  Col,
  Form,
  FormControl
} from "react-bootstrap";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
  }
  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onLoginClick = () => {
    const userData = {
      username: this.state.username,
      password: this.state.password
    };
    console.log("Login " + userData.username + " " + userData.password);
    // this.props.history.push("htps://hoblist.com/api/movielist");
    // var apiBaseUrl = "https://hoblist.com/api/movielist"
    // const payload = {
    //     method: "POST",
    //     headers: {
    //         'Content-Type': 'application/json; charset=utf-8'
    //     },
    //     body: JSON.stringify({
    //         'username': this.state.username,
    //         'password': this.state.password
    //     })
    // };
    const { username, password } = this.state;

    if (username && password) {
       
      this.props.history.push("/MessageLogin");
    }
    else{
      alert("Error");
    }
  };
  render() {
    return (
      <>
      <Home/>
      <Container className="login">
        <Row>
          <Col md="12">
            <h1>Login</h1>
            <Form>
              <Form.Group controlId="usernameId">
                <Form.Label>User name</Form.Label>
                <Form.Control
                  type="text"
                  name="username"
                  placeholder="Enter user name"
                  value={this.state.username}
                  onChange={this.onChange}
                />
                <FormControl.Feedback type="invalid"></FormControl.Feedback>
              </Form.Group>

              <Form.Group controlId="passwordId">
                <Form.Label>Your password</Form.Label>
                <Form.Control
                  type="password"
                  name="password"
                  placeholder="Enter password"
                  value={this.state.password}
                  onChange={this.onChange}
                />
                <Form.Control.Feedback type="invalid"></Form.Control.Feedback>
              </Form.Group>
            </Form>
            <Button color="primary" onClick={this.onLoginClick} className="submit-button">Login</Button>
            <p className=" in-out">
              Don't have account? <Link to="/signup">Signup</Link>
            </p>
          </Col>
        </Row>
      </Container>
      </>
    );
  }
}

export default Login;