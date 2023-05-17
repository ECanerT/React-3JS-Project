import React, { useState, useEffect, useContext } from "react";
import { Card, CardImg, ListGroup, ListGroupItem } from "react-bootstrap";
import menu from './menu.json'

function MenuProducts(props) {

    const [products,setProducts] = useState([]);
    const [currentProduct,setCurrentProduct] = useState([]);
    const [pCategoryId,setPCategoryId] = useState("");

  return (
    <div className="MenuProducts">
        <h3>{props.title} : {pCategoryId}</h3>
            <ListGroup>
            {menu.products.map(product=> (<>
              {props.cid===product.categoryId?( <div id="div1" className="product" key={product.id}>
              <Card onClick={() =>setPCategoryId(product.productName )}>
                <CardImg
                  src={product.productImage}
                ></CardImg>
              </Card>
              <ListGroupItem
                action active
                onClick={() =>setPCategoryId(product.productName )}>
                   {product.productName} 
              </ListGroupItem>
            </div>):null}
            </>))}   
            </ListGroup>
    </div>
  )
}

export default MenuProducts