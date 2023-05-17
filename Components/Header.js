import React from 'react'
import { Container, Nav, Navbar, NavbarBrand, NavLink } from 'react-bootstrap'
import {Outlet} from 'react-router-dom'

function Header() {
  return (
    <div className='Header'>
        <Navbar bg='secondary' variant='dark' fixed='top' expand="sm" className='navbar'>
            <Container>
            <NavbarBrand className='navbarbrand' >
                <NavLink href='/'>

            <img
              src="https://www.mustafayemural.com/wp-content/uploads/2020/09/Cover_C_1.png"
              width="45"
              height="45"
              className="d-inline-block align-top"
              alt="caner logo"
            />
                ANER
                
                </NavLink>
             </NavbarBrand>
            
             <Navbar.Toggle aria-controls="basic-navbar-nav" />
             <Navbar.Collapse id='basic-navbar-nav'>
             <Container>
            <Nav className='me-auto'>
                <NavLink className='navtab' style={{}} href='/home'>
                    Home
                </NavLink>
                <NavLink className='projecttab' style={{color:"aqua"}} href='/project'>
                    Project
                </NavLink>
                <NavLink className='navtab' style={{}} href='/products'>
                    Products
                </NavLink>
                <NavLink className='navtab' style={{}} href='threejs'>
                    Three JS
                </NavLink>
                <NavLink className='navtab' style={{}} href='models'>
                    Models
                </NavLink>
                <NavLink className='navtab' style={{}} href='menu'>
                    Menu
                </NavLink>
                <NavLink className='navtab' style={{}} href='about'>
                    About
                </NavLink>
                {/* <Navbar.Toggle />
                <Navbar.Collapse className='justify-content-end'>
                <Navbar.Text>hey</Navbar.Text>
                </Navbar.Collapse> */}
            </Nav>
            <Outlet />
             </Container>
             </Navbar.Collapse>
            
            </Container>
            
        <Container className='container'> 
        <Nav style={{display:'flex',marginLeft:'auto', float:'right',marginRight:'10px'}}><NavLink >
            <img 
            src="https://global-uploads.webflow.com/6097e0eca1e875de53031ff6/61b812be9cb997bdb94301bd_react%20logo%20transparent.png"
              width="60"
              height="60"
              className="reactico"
              alt='reactico'/>
              </NavLink></Nav> 
        </Container>    
        </Navbar>
    </div>
  )
}

export default Header