import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import logo from '../../../images/logo3.jpg';
 import useAuth from '../../../hooks/useAuth';
// import useAuth from '../';
// import './Header.css';

const Header = () => {
   const { user, logOut } = useAuth();

   return (
      <div className='navBorder header-container '>
         <Navbar expand="lg" variant="dark" className="bg-success bg-gradient
    
">
            <Container>
               <Navbar.Brand as={Link} to="/home"><img width="75px" src={logo} alt="" />Ana Car Gerez</Navbar.Brand>
               <Navbar.Toggle />
               <Navbar.Collapse className="justify-content-end">
                  <Nav className="me-auto">
                      <Nav.Link as={Link} to="/home">Home</Nav.Link> 
                      <Nav.Link as={Link} to="/products"> Our Products </Nav.Link> 
                      {/* <Nav.Link as={Link} to="/contact">Contact</Nav.Link> */}
                      <Nav.Link as={Link} to="/addProducts">Add Products</Nav.Link>
                      <Nav.Link as={Link} to="/dashboard">Dashboard</Nav.Link>
                      {/* <Nav.Link as={Link} to="/orders"></Nav.Link> */}
                     
                     <Nav.Link as={Link} to="/login">Log In</Nav.Link>
                  </Nav>
                  <Navbar.Text>
                     {
                        user?.email ?
                           <div className='d-flex align-items-center justify-content-center'>
                              <div>
                                 <h5> Log in as : {user.email}</h5>
                              </div>
                              <div className='ms-2'>
                                 <button className='btn btn-warning' onClick={logOut}>Log Out</button>
                              </div>
                           </div>
                           :
                           <p>Guest</p>
                     } 

                  </Navbar.Text>
               </Navbar.Collapse>
            </Container>
         </Navbar>
      </div>
   );
};

export default Header;