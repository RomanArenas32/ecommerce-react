import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getNewsThunk } from "../store/slices/products.slice";
import Button from 'react-bootstrap/Button';
import { createCartThunk } from "../store/slices/cart.slice";


const ProductId = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState("");



  useEffect(() => {
    dispatch(getNewsThunk());
  }, []);

  const productList = useSelector((state) => state.products);

  const news = productList?.find((el) => el.id === Number(id));
  const relatedProducts = productList.filter(
    (el) => el.category.name == news.category.name
  );


    const addCart = ()=>{
       const prod = {
        id: news.id,
        quantity: quantity
       }
       dispatch(createCartThunk(prod))
    };

  return (
    <div className="contaiderId">
      <div>
        <h5>{news?.title}</h5>
        <p>{news?.description}</p>
        <input type="number" value={quantity} onChange={e => setQuantity(e.target.value)}/>
        <Button variant="primary" size="lg" onClick={addCart}>
          add to cart
        </Button>
        <div>
          <img src={news?.productImgs[1]} />
          <img src={news?.productImgs[2]} />
        </div>
      </div>
      <h3>Related products:</h3>
      <section className="related">
        {relatedProducts.map((related) => (
          <div key={related.title} className="related-card">
            <h6>{related.title}</h6>
            <img src={related?.productImgs[1]} alt="" />
          </div>
        
        ))}
      </section>
    </div>
  );
};

export default ProductId;
