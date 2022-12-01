import axios from "axios";
import { useEffect } from "react";
import { Button, Offcanvas } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { checkoutCart, createCartThunk, getCartThunk } from "../store/slices/cart.slice";
import { getPurchasesThunk } from "../store/slices/purchaseSlice.slice";

const CartSidebar = ({show, handleClose})=>{

    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(getCartThunk())
    }, []);

    const productsCart = useSelector(state => state.cart)

    return(
        <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>You Cart</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          {productsCart.map(el =>(
            <div key={el.title}>
                <h4>{el.title}</h4>
            </div>
          ))}
          <Button variant="primary" size="lg" onClick={() => dispatch(checkoutCart())}>
         Delete
        </Button>
        </Offcanvas.Body>
      </Offcanvas>
    )
}

export default CartSidebar;