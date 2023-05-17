import { Container, Row } from 'react-bootstrap';
import './App.css';
import Header from './Components/Header';
import Home from './Components/Home';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import NoPage from './Components/NoPage';
import ProductPage from './Components/ProductPage';
import ThreeJs from './Components/Three';
import Menu from './Components/Menu';
import HelloWorld from './Components/HelloWorld';
import Models from './Components/Models';
import Project from './Components/Project';
// import UserLister from './Components/UserLister';



function App() {
  return (
    <div className="App">
      <Header />
      
      <Router> 
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/home' element={<Home/>}/>
          <Route path='/products' element={<ProductPage/>}/>
          <Route path='/threejs' element={<ThreeJs/>}/>
          <Route path='/models' element={<Models/>}/>
          <Route path='/menu' element={<Menu/>}/>
          <Route path='/hello_world' element={<HelloWorld/>}/>
          <Route path='/project' element={<Project/>}/>
          {/* <Route path='/userlist' element={<UserLister/>}/> */}
          <Route path="*" element={<NoPage/>} /> 
        </Routes>
      </Router>
    </div>
  );
}

export default App;
