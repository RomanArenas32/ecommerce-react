import { useState } from "react";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";
import CartSidebar from "./CartSidebar";

const NavBar = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <Nav activeKey="/home" className="navegacion">
        <Nav.Item>
          <Nav.Link href="/home">Home</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link as={Link} to="/purchase">
            Purchase
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link onClick={handleShow}>Cart</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link as={Link} to="/login">
            Login
          </Nav.Link>
        </Nav.Item>
        <Nav.Item></Nav.Item>
      </Nav>
     <CartSidebar show={show} handleClose={handleClose}/>
    </>
  );
};
export default NavBar;
