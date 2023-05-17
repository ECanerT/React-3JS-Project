import Header from './Products/ProductHeader';
import {useState,useEffect} from 'react'
import {Container} from 'react-bootstrap';
// import productjson from './products.json'
import Products from './Products/Products';
import Basket from './Products/Basket';

function ProductPage() {

  const [money,setMoney]= useState(200);
  const [basket,setBasket] = useState([]);
  const [total,setTotal] = useState(0);
  const [products,setProducts] = useState([]);

  const resetBasket= () => {
    setBasket([]);
  }

  useEffect(() => {
    fetch("http://localhost:3000/products")
      .then((response) => response.json())
      .then((data) => setProducts(data));
    },[])

  useEffect(()=>{
    setTotal(basket.reduce((acc,item)=>{
      return acc+ (item.amount*(products.find(product=>product.id===item.id).price))
    },0))
  
  }, [basket])

  return (
    <div className="ProductPage">
      <Header money={money} total={total}/>
      {total>0&&(
        <Basket basket={basket} resetBasket={resetBasket} total={total} products={products}/>
      )}
      <Container className="bg-light border">
      {products.map(product=> (
      <div id="div1" className="product" key={product.id}>
      <Products 
      money={money} 
      total={total} 
      basket={basket} 
      setBasket={setBasket} 
      product={product}/>
      
      </div>
      ))
      } 
      </Container>
       
    </div>
  );
}

export default ProductPage;
