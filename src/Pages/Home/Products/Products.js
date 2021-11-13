import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Products = () => {
  const [services, setServices] = useState([]);
//   const {_id,name,img,description} = props.detail;

  useEffect(() => {
    fetch("http://localhost:5000/addProducts")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  console.log(services);
  return (
    <div className="mt-5 ">
      <h1 className="text-success text-center">We Provide Unique Products</h1>
      <p className="text-center">We are one of the leading auto car companies.</p>
      <div className="services ">
        <div className="row container"> 
          {services?.map((pd, index) => (
            <div className="col-md-6 col-lg-4">
              <div className="service p-3 border border m-2" style={{ width: '', height:'550px'}} >
                <div className="service-img ">
                  {/* <img className="w-50" src={pd?.image} alt="" /> */}
                  <img className="img-fluid" src={pd.img} alt="" />
                </div>
                <h1>{pd.name}</h1>
                <p>{pd.description}</p>
                <h3>Price:{pd.price}</h3>
                <Link to={`/services/${pd._id}`}>
                  {" "}
                  <button className="btn btn-success">Order Now</button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
