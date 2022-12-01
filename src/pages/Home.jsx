import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { filterNewsThunk, getNewsThunk, filterHeadlineThunk } from "../store/slices/products.slice";
import { Link } from "react-router-dom";
import axios from "axios";
import { Button, Form, InputGroup } from "react-bootstrap";

const Home = () => {
  const dispatch = useDispatch();

  const products = useSelector((state )=>state.products)
  const [categoriesList, setCategoriesList] = useState([]);
  const [inputSearch, setInputSearch] = useState("");

  console.log(products)
  useEffect(() => {
    dispatch(getNewsThunk());
    axios.get(`https://e-commerce-api.academlo.tech/api/v1/products/categories/`)
    .then((res) => setCategoriesList(res.data.data.categories));
  }, []);
  return (
    <div className="container">
      <h2>E-commerce</h2>
      {categoriesList.map((category) => (
        <Button onClick={() => dispatch(filterNewsThunk(category.id))}>
          {category.name}
        </Button>
      ))}
      <InputGroup className="mb-3">
        <Form.Control
          placeholder="Recipient's username"
          aria-label="Recipient's username"
          aria-describedby="basic-addon2"
          value={inputSearch}
          onChange={(e) => setInputSearch(e.target.value)}
        />
        <Button
          variant="outline-secondary"
          onClick={() => dispatch(filterHeadlineThunk(inputSearch))}
        >
          Search
        </Button>
      </InputGroup>
      <div className="related">
      {products.map((el) => (
        <li key={el.title} className="related-card">
        <div>
           <Link to={`/productId/${el.id}`} ><h6>{el.title}</h6></Link>
            <h3>USD {el.price}</h3>
        </div>
          <img src={el.productImgs[0]} alt="" />
        </li>
      ))}
      
      </div>
      
    </div>
  );
};

export default Home;
