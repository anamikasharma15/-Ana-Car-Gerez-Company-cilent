import React, { useEffect, useState } from "react";
import { Switch, Route, Link, useRouteMatch } from "react-router-dom";

import "./Dashboard.css";
import AddProducts from "../Pages/AddProducts/AddProducts";
import Review from "../Review/Review";
import MakeAdmin from "./../MakeAdmin/MakeAdmin";
import ManageAllOrder from "../ManageAllOrder/ManageAllOrder";
import ManageProducts from "../ManageProducts/ManageProducts"
import useFirebase from "../hooks/useFirebase";
import MyOrders from "../MyOrders/MyOrders";
import Pay from "../Pay/Pay";

const Dashbaord = () => {
  let { path, url } = useRouteMatch();
  const { user } = useFirebase();
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    fetch(`https://calm-sands-82191.herokuapp.com/checkAdmin/${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        if (data[0]?.role === "admin") {
          setIsAdmin(true);
        } else {
          setIsAdmin(false);
        }
      });
  }, [user?.email]);
  console.log(isAdmin);
  return (
    <div>
      <div className="dashboard-container ">
        <div className="row">
          <div className="col-md-3 ">
            <div className="dashboard">
              <h5>Dashboard</h5>
              <Link to={`${url}/pay`}>
                <li className="dashboard-menu mt-5">Pay</li>
              </Link>

              <Link to={`${url}/myOrder`}>
                <li className="dashboard-menu mt-5">My Orders</li>
              </Link>

              <Link to={`${url}/review`}>
                <li className="dashboard-menu mt-5">Review</li>
              </Link>
              <div className="admin-dashboard">
                {/* <li className="dashboard-menu mt-5">Orders list</li> */}

                {isAdmin && (
                  <Link to={`${url}/addProduct`}>
                    <li className="dashboard-menu">Add Product</li>
                  </Link>
                )}

                {/* <Link to={`${url}/addProduct`}>
                    <li className="dashboard-menu">Add Product</li>
                  </Link> */}
                  {isAdmin && (
                <Link to={`${url}/makeAdmin`}>
                  <li className="dashboard-menu">Make Admin</li>
                </Link>
                  )}
                  {isAdmin && (
                <Link to={`${url}/manageAllOrder`}>
                  <li className="dashboard-menu">Manage All Order</li>
                </Link>
                  )}
                  {isAdmin && (
                <Link to={`${url}/manageProducts`}>
                  <li className="dashboard-menu">Manage Products</li>
                </Link>
                  )}
              </div>
            </div>
          </div>
          <div className="col-md-9">
            <Switch>
              <Route exact path={path}>
                <MyOrders></MyOrders>
              </Route>
              <Route exact path={`${path}/pay`}>
                <Pay></Pay>
              </Route>
              <Route exact path={`${path}/review`}>
                <Review></Review>
              </Route>
              <Route exact path={`${path}/myOrder`}>
                <MyOrders></MyOrders>
              </Route>
              <Route exact path={`${path}/makeAdmin`}>
                <MakeAdmin></MakeAdmin>
              </Route>
              <Route exact path={`${path}/addProduct`}>
                <AddProducts></AddProducts>
              </Route>
              <Route exact path={`${path}/manageAllOrder`}>
                <ManageAllOrder></ManageAllOrder>
              </Route>
              <Route exact path={`${path}/manageProducts`}>
                <ManageProducts></ManageProducts>
              </Route>
            </Switch>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashbaord;


// import { faBars } from '@fortawesome/free-solid-svg-icons';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import React, { useState } from 'react';
// import { Button, Col, Container, ListGroup, Offcanvas, Row } from 'react-bootstrap';
// import { BrowserRouter as Router, Switch, Route, Link, useRouteMatch } from 'react-router-dom';
// import useAuth from '../../../hooks/useAuth';
// import AdminRoute from '../../Shared/Login/AdminRoute/AdminRoute';
// import PrivateRoute from '../../Shared/Login/PrivateRoute/PrivateRoute';
// import AddReview from '../AddReview/AddReview';
// import AddBike from '../AdminDashboard/AddBike/AddBike';
// import MakeAdmin from '../AdminDashboard/MakeAdmin/MakeAdmin';
// import ManageAllOrder from '../AdminDashboard/ManageAllOrder/ManageAllOrder';
// import MyOrder from '../MyOrder/MyOrder';
// import Pay from '../pay/Pay';


// const DashboardHome = () => {
//     const [show, setShow] = useState(false);
//     const { user, logout, isLoading, admin } = useAuth();
//     let { path, url } = useRouteMatch();
//     const handleClose = () => setShow(false);
//     const handleShow = () => setShow(true);

//     return (
//         <>
//             <Offcanvas className="bg-danger" show={show} onHide={handleClose}>
//                 <Offcanvas.Header closeButton>
//                     {/* <Offcanvas.Title className=" fw-bold text-light">Menu</Offcanvas.Title> */}
//                     {user?.displayName ?
//                         <Offcanvas.Title className=" fw-bold text-light">
//                             <h6 className="text-light">Name: {user?.displayName}</h6>
//                             <p className="text-light">Email: {user?.email}</p>
//                         </Offcanvas.Title>
//                         :
//                         ''
//                     }
//                 </Offcanvas.Header>
//                 <Offcanvas.Body className="">
//                     <ListGroup as="ul" className="my-5">
//                         <Link to="/">
//                             <ListGroup.Item className="bg-transparent border-bottom fw-bold text-light" as="li"  >
//                                 <Button className="text-light fw-bold fs-5" variant="transparent">
//                                     Home
//                                 </Button>
//                             </ListGroup.Item>
//                         </Link>
//                         <Link to={`${url}/myorder/${user?.email}`}>
//                             <ListGroup.Item className="bg-transparent border-bottom fw-bold text-light" as="li"  >
//                                 <Button className="text-light fw-bold fs-5" variant="transparent">
//                                     My Orders
//                                 </Button>
//                             </ListGroup.Item>
//                         </Link>
//                         <Link to={`${url}/addReviews`}>
//                             <ListGroup.Item className="bg-transparent border-bottom border-0  fw-bold text-light py-1 my-1" as="li"  >
//                                 <Button className="text-light fw-bold fs-5" variant="transparent">
//                                     Add Reviews
//                                 </Button>
//                             </ListGroup.Item>
//                         </Link>
//                         {admin &&
//                             <Link to={`${url}/manageAllOrders`}>
//                                 <ListGroup.Item className="bg-transparent border-bottom border-0  fw-bold text-light py-1 my-1" as="li"  >
//                                     <Button className="text-light fw-bold fs-5" variant="transparent">
//                                         All Orders
//                                     </Button>
//                                 </ListGroup.Item>
//                             </Link>
//                         }
//                         {admin &&
//                             <Link to={`${url}/addBike`}>
//                                 <ListGroup.Item className="bg-transparent border-bottom border-0  fw-bold text-light py-1 my-1" as="li"  >
//                                     <Button className="text-light fw-bold fs-5" variant="transparent">
//                                         Add Bike
//                                     </Button>
//                                 </ListGroup.Item>
//                             </Link>
//                         }
//                         {admin &&
//                             <Link to={`${url}/makeAdmin`}>
//                                 <ListGroup.Item className="bg-transparent border-bottom border-0  fw-bold text-light py-1 my-1" as="li"  >
//                                     <Button className="text-light fw-bold fs-5" variant="transparent">
//                                         Make Admin
//                                     </Button>
//                                 </ListGroup.Item>
//                             </Link>
//                         }
//                         <Link to={`${url}/pay`}>
//                             <ListGroup.Item className="bg-transparent border-bottom border-0  fw-bold text-light py-1 my-1" as="li"  >
//                                 <Button className="text-light fw-bold fs-5" variant="transparent">
//                                     Payment Method
//                                 </Button>
//                             </ListGroup.Item>
//                         </Link>
//                         <ListGroup.Item className="bg-transparent border-bottom border-0  fw-bold text-light py-1 my-1" as="li"  >
//                             <Button onClick={logout} className="text-light fw-bold fs-5" variant="transparent" >Log Out</Button>
//                         </ListGroup.Item>

//                     </ListGroup>
//                 </Offcanvas.Body>
//             </Offcanvas>

//             <div className="p-3 text-start">
//                 <Button className="ms-5" variant="outline-dark" onClick={handleShow}>
//                     Open Dashboard Menu <FontAwesomeIcon icon={faBars}></FontAwesomeIcon>
//                 </Button>
//             </div>

//             <Container fluid className="mt-">
//                 <Switch>
//                     <PrivateRoute path={`${path}/myOrder/:email`}>
//                         <MyOrder></MyOrder>
//                     </PrivateRoute>
//                     <Route path={`${path}/pay`}>
//                         <Pay></Pay>
//                     </Route>
//                     <PrivateRoute path={`${path}/addreviews`}>
//                         <AddReview></AddReview>
//                     </PrivateRoute>
//                     <Route path={`${path}/manageAllOrders`}>
//                         <ManageAllOrder></ManageAllOrder>
//                     </Route>
//                     <PrivateRoute path={`${path}/addmobiles`}>
//                         <AddBike></AddBike>
//                     </PrivateRoute>
//                     <AdminRoute path={`${path}/makeAdmin`}>
//                         <MakeAdmin></MakeAdmin>
//                     </AdminRoute>
//                 </Switch>
//             </Container>
//         </>
//     );
// };

// export default DashboardHome;