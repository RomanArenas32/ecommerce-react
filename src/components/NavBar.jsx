import Nav from 'react-bootstrap/Nav';
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <Nav
      activeKey="/home" className='navegacion'
    >
      <Nav.Item>
        <Nav.Link href="/home">Home</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link as={Link} to="/purchase" >Purchase</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link as={Link} to="/login" >Login</Nav.Link>
      </Nav.Item>
      <Nav.Item>
      </Nav.Item>
    </Nav>
  );
};
export default NavBar;
