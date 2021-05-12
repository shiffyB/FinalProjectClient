import React from 'react';
// import {useParams } from 'react-router-dom'
import './CirclePercent.css';

export default function Product() {
  // const classes = useStyles();
  // const name=useParams();
    const product={
      id:"123",
      price:100.4,
      img:"/rolls.jpg",
      amount:30,
      company:"aaaa",

    }
    console.log(product);
    const style1={

    }
  return (
    <div>
      <h1>{product.name}</h1>
      {/* עיגול לאחוזים */}
      <img src={product.img} style={{width:"200px"}}/>
      <h3>מחיר   {product.price}</h3>
      <h3>מחיר ליחידה{product.price/product.amount}</h3>
      {/* http://circle.firchow.net/ */}
      {/* <div class="c100 p12 small">
              <span>12%</span>
              <div class="slice">
                  <div class="bar"></div>
                  <div class="fill"></div>
              </div>
      </div> */}
    </div>
  );
}