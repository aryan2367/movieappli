import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Container } from "react-bootstrap";

class Home extends Component {
  render() {
    return (
      <Container className="nav-top">
        <h1><Link to ="/Detail">Company Info</Link></h1>
        <div className="nav-right">
        <p>
          <Link to="/login/">Login</Link>
        </p>
        <p>
          <Link to="/signup">Sign up</Link>
        </p>
        </div>
      </Container>
    );
  }
}

export default Home;