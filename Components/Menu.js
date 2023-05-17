import React, { useEffect } from 'react';
import { Col, Container, Row } from "react-bootstrap";
import MenuNavi from "./Menu/MenuNavi";
import MenuCategory from "./Menu/MenuCategory";
import Buttons from "./Menu/buttons"

function Menu() {

        let naviTitle = "Anasayfa"
        let categoryTitle = "Kategoriler"
        let productTitle = "Yemekler"

        useEffect(()=>{
            console.log("useEffect")
        },[])

    return(
        <div className="Menu" style={{paddingTop:100,paddingBottom:75}}>
        <Container>
            <Buttons/>
        <Row className="bg-light border">  <MenuNavi title={naviTitle}/>  </Row>
        <Row className="bg-light border"> <MenuCategory title={categoryTitle} ptitle={productTitle}/> </Row>
        <Row> <Col> Footer maybe? </Col> </Row>  
        </Container>
        </div>
    )
}

export default Menu;