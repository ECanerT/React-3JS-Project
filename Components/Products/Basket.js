import React from 'react'
import { Button, ListGroup, ListGroupItem } from 'react-bootstrap';
import Basketitem from './Basketitem'

export default function Basket(props) {
  return (
    <div className='Basket'> <ListGroup className='basketlist'>
        <ListGroupItem className='basketlist' >
        {props.basket.map(item=>(
        <div className='basketlistitem' key={item.id}>
        <Basketitem 
        item={item} 
        product={props.products.find(p=>p.id===item.id)}
        />
        </div>
    ))} 
        </ListGroupItem>
    </ListGroup>
    <div className='baskettotal'> Toplam: {props.total} TL </div>
    <Button color='warning' onClick={props.resetBasket}> Sepeti Sıfırla</Button>
    </div>
  )
} 
