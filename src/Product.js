import React, { useContext } from 'react';
import {useParams } from 'react-router-dom'
import {productsContext} from './ProductsContext'


export default function Product(props) {
  const classes = useStyles();
  const name=useParams();
    const products=useContext(productsContext);
    const product={
      id:"123",
      price:100.4,
      img:"fdfd.jpg",
      amount:30
    }
    console.log(product);
  return (
    <div>
      <h1>{product.name}</h1>
      {/* עיגול לאחוזים */}
      <img>תמונהה {product.img}</img>
      <h3>מחיר   {product.price}</h3>
      <h3>כמות ליחידה{product.price/product.amount}</h3>
    </div>
  );
}