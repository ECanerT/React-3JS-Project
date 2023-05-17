import React, { createContext, useEffect, useState } from "react";
import { Col, Container, ListGroup, ListGroupItem, Row } from "react-bootstrap";
import MenuProducts from "./MenuProducts";
import menu from './menu.json'

function MenuCategory(props) {

  const [categories, setCategories] = useState([]);
  const [currentCategory, setCurrentCategory] = useState([
    {
      name: "",
      id: 1,
    },
  ]);
  const [showProduct, setShowProduct] = useState(false);

  return (
    <div className="MenuCategory">
      <Container >
        <Row>
          <Col >
            <h3>
              {props.title} : {currentCategory.name}{" "}
            </h3>
            <ListGroup >
              {menu.categories.map((category) => (
                <div className="menu" key={category.id}>
                  <ListGroupItem
                    action
                    color="danger"
                    onClick={() =>
                      setCurrentCategory({
                        id: category.id,
                        name: category.categoryName,
                      })
                    }
                  >
                    {category.categoryName}
                  </ListGroupItem>
                </div>
              ))}
            </ListGroup>{" "}
            {console.log(currentCategory.id)}
          </Col>
          <Col className="colProduct"> <MenuProducts cid={currentCategory.id } title={props.ptitle} /></Col>
        </Row>
        <Row></Row>
      </Container>
    </div>
  );
}

export default MenuCategory;
