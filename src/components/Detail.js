import React from "react";
import { Link } from "react-router-dom";
import Home from './Home'
import { Container } from "react-bootstrap";

const Detail=()=>{

return (
<>
<Home/>
<Container className="detail">
    <div>

        <p>Company:<span>Geeksynergy Technologies Pvt Ltd</span></p>
        <p>Address:<span>Sanjayanagar, Bengaluru-56</span></p>
    </div>
    <div>
        <p>Phone:<span>xxxxxxxx09</span></p>
        <p>Email:<span>xxxx@gmail.com</span></p>
    </div>
        
      </Container>
</>


)

}
export default Detail;