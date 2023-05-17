import React from "react";
import { Card, CardImg, Navbar, NavbarBrand } from 'react-bootstrap';

export default function ProductHeader(props) {
  return (
    <div className="ProductHeader">
      {" "} 
      <div className="pheaderpage">
        {/* <Card>
        <CardImg src="https://www.duvee.com.tr/Data/EditorFiles/kampanyalarimiz/doner-yaprak.gif"></CardImg>
        </Card> */}
     </div>
      
      <Navbar className="phnavbar" >
        <NavbarBrand className="phnavbartxt" href="/">
          {(props.money - props.total > 0 && (
            <>Hesabınızda {props.money - props.total} Lira Paranız Var !</>
          )) || <>Paranız Kalmadı!</>}
        </NavbarBrand>
      </Navbar>
    </div>
  );
}
