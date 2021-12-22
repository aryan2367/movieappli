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

class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      email:"",
      phone:""
    };
  }
  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSignupClick = () => {
    const userData = {
      username: this.state.username,
      password: this.state.password,
      email:this.state.email,
      phone:this.state.phone,
    };
    console.log("Sign up " + userData.username + " " + userData.password + userData.email + " " + userData.phone );
    alert(" Congrats! Thank you for sign up");
    const { username, password } = this.state;

    if (username && password) {
       
      this.props.history.push("/Login");
    }
    else{
      alert("ERROR")
    }
  };

  render() {
    return (
      <>
      <Home/>
            <Container className="sign-up">
        <Row>
          <Col md="12">
            <h1>Sign up</h1>
            <Form>
              <Form.Group controlId="usernameId">
                <Form.Label>User name</Form.Label>
                <Form.Control
                  type="text"
                  name="username"
                  placeholder="Enter user name"
                  value={this.state.username} className="input"
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
                  value={this.password}
                  onChange={this.onChange} className="input" required
                />
                <Form.Control.Feedback type="invalid"></Form.Control.Feedback>
              </Form.Group>
              <Form.Group controlId="emailId">
                <Form.Label>Your Email</Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  placeholder="Enter Email"
                  value={this.password}
                  onChange={this.onChange} className="input" required
                />
                <Form.Control.Feedback type="invalid"></Form.Control.Feedback>
              </Form.Group>
              <Form.Group controlId="phoneId">
                <Form.Label>Your Phone Number</Form.Label>
                <Form.Control
                  type="text"
                  name="phone"
                  placeholder="Enter phone number"
                  value={this.phone}
                  onChange={this.onChange} className="input" required
                />
                <Form.Control.Feedback type="invalid"></Form.Control.Feedback>
              </Form.Group>
              <Form.Group controlId="professionId">

              <Form.Label>Your Profession</Form.Label>
               <br/>
                <select onChange={this.onChange} className="input" required>
                <option>- Select Proffession</option>

                <option>-  Engineering Manager</option>
                <option>-  Business Owner</option>
                <option>-  Accountant, Auditor</option>
                <option>-  Sales Representative</option>
                </select>
                <Form.Control.Feedback type="invalid"></Form.Control.Feedback>
              </Form.Group>
            </Form>
            <Button 
              color="primary"
              onClick={this.onSignupClick} className="submit-button" 
            >Sign up</Button>
            <p className=" in-out">
              Already have account? <Link to="/login">Login</Link>
            </p>
          </Col>
        </Row>
      </Container>
      </>

    );
  }
}

export default Signup;