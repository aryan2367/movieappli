import React from "react";
import { Link } from "react-router-dom";
import Home from './Home'

import { Container } from "react-bootstrap";

const MessageLogin=()=>{

return (
<>
<Home/>
<Container className="message-login">
    <p>Thank You for signing<Link to="/MovieList">Go to the Movie List</Link></p>
        
      </Container>
</>


)

}
export default MessageLogin;