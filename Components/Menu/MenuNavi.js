import { Card, CardImg,Nav,NavItem,NavLink,UncontrolledCarousel } from "reactstrap";

import React from 'react'

function MenuNavi(props) {
  return (
    <div className="Navi">
        
        
           
    <Nav style={{}} className="mainpage">
    <NavItem>
      <NavLink  active  href="#">
      <h5>{props.title}</h5>
      </NavLink>
    </NavItem> 
    <NavItem>
      <NavLink className="mainpage"  href="#">
      <h5> Ürünler </h5>
      </NavLink>
    </NavItem>
    <NavItem>
      <NavLink className="mainpage"  href="#">
      <h5> Kupon </h5>
      </NavLink>
    </NavItem>
    <NavItem>
      <NavLink className="mainpage"  href="#">
      <h5> Ayarlar </h5>
      </NavLink>
    </NavItem>
    <NavItem>
      <NavLink className="mainpage"  href="#">
      <h5>İletişim</h5>
      </NavLink>
    </NavItem>
    </Nav>


  <UncontrolledCarousel className="Carousel"
  items={[
    {
      altText: '-',
      caption: '',
      key: 1,
      src:'https://i.ibb.co/SmqVjr9/img1.jpg'
    },
    {
      altText: '-',
      caption: '',
      key: 2,
      src: 'https://i.ibb.co/fqs0WgD/img2.jpg'
    },
    {
      altText: '-',
      caption: '',
      key: 3,
      src:'https://i.ibb.co/1s7yphv/img3.png'
    }
  ]}
 />
        
      </div>
  )
}

export default MenuNavi