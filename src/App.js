import React from "react";
import { BrowserRouter as Router, Switch, Route, } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Home from "./Pages/Home/Home/Home";
import Header from "./Pages/Home/Header/Header";
import NotFound from "./Pages/Home/NotFound/NotFound";
import Products from "./Pages/Home/Products/Products";
import AddProducts from "./Pages/AddProducts/AddProducts";
import ProductDetails from "./Pages/Home/ProductDetails/ProductDetails"
import LogIn from "./Pages/LogIn/LogIn";
import Register from "./Pages/Register/Register";
import Footer from "./Pages/Home/Footer/Footer";
import AuthProvider from "./Context/AuthProvider";
import PrivateRoute from "./PrivateRoute/PrivateRoute";
import Dashboard from "./Dashboard/Dashboard";
import MyOrders from "./MyOrders/MyOrders";
// import AddServices from "./components/AddServices/AddServices";
// import Register from "./components/Register/Register";
// import Services from "./components/Services/Services";
// import Dashbaord from "./components/Dasboard/Dashbaord";
// import Details from "./components/Details/Details";/
// import MyBookings from "./components/MyBookings/MyBookings";
// import MangeOrder from "./components/MangeOrder/MangeOrder";

function App() {
  return (
    <div>
      <AuthProvider>
        {/* <BrowserRouter> */}
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
           <Route exact path="/home">
            <Home></Home>
          </Route>
          <Route exact path="/products">
            <Products></Products>
          </Route> 
          <Route exact path="/myOrder">
            <MyOrders></MyOrders>
          </Route> 
        
           {/* <Route exact path="/myOrder">
            <MyBookings></MyBookings>
          </Route>  */}
           <PrivateRoute exact path="/services/:serviceId">
            <ProductDetails></ProductDetails>
          </PrivateRoute> 
           <Route exact path="/addProducts">
            <AddProducts></AddProducts>
          </Route>
           <Route exact path="/login">
            <LogIn></LogIn>
          </Route>
           <Route exact path="/register">
            <Register></Register>
          </Route>
          {/* <Route exact path="/manageOrders">
            <MangeOrder></MangeOrder>
          </Route> */}
           <Route path="/dashboard">
            <Dashboard></Dashboard>
          </Route>
          {/* <Route exact path="/addService">
            <AddServices></AddServices>
          </Route> */}
        <Route path="*">
              <NotFound></NotFound>
            </Route> 
        </Switch>
        <Footer></Footer>
        </Router>

        </AuthProvider>
        {/* </BrowserRouter> */}
    
    </div>
  );
}

export default App;
