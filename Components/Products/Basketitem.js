import React from 'react'
import { NavItem } from 'react-bootstrap';

export default function Basketitem(props) {
  return (
    <div>{props.item.amount} x {props.product.title} : {props.item.amount*props.product.price} TL</div>
  )
}
