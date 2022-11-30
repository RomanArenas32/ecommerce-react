import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getNewsThunk } from "../store/slices/products.slice";
import Button from 'react-bootstrap/Button';

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
  console.log(productList);

    const addCart = ()=>{
       const prod = {
        id: news.id,
        quantity: quantity
       }
       console.log(prod)
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

      <section className="related">
        {relatedProducts.map((related) => (
          <h6>{related.title}</h6>
        ))}
      </section>
    </div>
  );
};

export default ProductId;
