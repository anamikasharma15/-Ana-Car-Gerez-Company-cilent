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
  const [isAdmi, setIsAdmin] = useState(false);

  useEffect(() => {
    fetch(`http://localhost:5000/checkAdmin/${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        if (data[0]?.role === "admin") {
          setIsAdmin(true);
        } else {
          setIsAdmin(false);
        }
      });
  }, [user?.email]);
  console.log(isAdmi);
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
                <li className="dashboard-menu mt-5">Orders list</li>

                {isAdmi && (
                  <Link to={`${url}/addProduct`}>
                    <li className="dashboard-menu">Add Product</li>
                  </Link>
                )}
                <Link to={`${url}/addProduct`}>
                    <li className="dashboard-menu">Add Product</li>
                  </Link>
                <Link to={`${url}/makeAdmin`}>
                  <li className="dashboard-menu">Make Admin</li>
                </Link>
                <Link to={`${url}/manageAllOrder`}>
                  <li className="dashboard-menu">Manage All Order</li>
                </Link>
                <Link to={`${url}/manageProducts`}>
                  <li className="dashboard-menu">Manage Products</li>
                </Link>
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
