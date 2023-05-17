import React from 'react'
import { Button, Card, CardImg, ListGroup, ListGroupItem } from 'react-bootstrap';

export default function Product(props) {

    const basketItem = props.basket.find(item=>item.id===props.product.id)
    const addBasket=()=>{
        // console.log("satın alındı")
        // props.setBasket(...props.basket,props.product)
        const checkBasket=props.basket.find(item=>item.id===props.product.id)
        if (checkBasket){
            checkBasket.amount += 1
            props.setBasket([...props.basket.filter(item=>item.id!==props.product.id),checkBasket])
        }else{
            props.setBasket([...props.basket,{
                id: props.product.id,
                amount:1
        }])
        }
    } 
    const removeBasket=()=>{
        // console.log("satın alındı")
        // props.setBasket(...props.basket,props.product)
        const checkBasket=props.basket.find(item=>item.id===props.product.id)
        const basketWithoutCurrent=props.basket.filter(item=>item.id!==props.product.id)
            checkBasket.amount -= 1
            props.setBasket([...basketWithoutCurrent,checkBasket])
        if(checkBasket.amount===0){
            props.setBasket([...basketWithoutCurrent])
        }else{
            props.setBasket([...basketWithoutCurrent,checkBasket])
        }
    } 


  return (
    <div className='products'>
        <ListGroup>
            
            <ListGroupItem className='product-item'>
            <Card className='product-card'>
                <CardImg 
                style={{ height: 270, width:270}} src={props.product.img}></CardImg>
            </Card>
            <h6>{props.product.title}</h6>
            <div className='price'>{props.product.price} TL</div> 
            <div className='actions'>
                <Button color='danger' disabled={!basketItem } onClick={removeBasket}>-</Button>
                <span className='amount'> -{basketItem&&basketItem.amount||0}- </span>
                <Button color='success' disabled={props.product.price>props.money-props.total} onClick={addBasket}>+</Button>
            </div>
            </ListGroupItem>
        </ListGroup>
    </div>
  )
}
