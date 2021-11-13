import React, { useEffect, useState } from 'react';
import Banner from '../Banner/Banner';
import Contact from '../Contact/Contact';
import AboutUs from '../AboutUs/AboutUs';
// import Footer from '../Footer/Footer';
import Products from '../Products/Products';
import { Link } from 'react-router-dom';
// import About from '../components/Home/About/About';
// import Contact from '../components/Home/Contact/Contact';
// import Footer from '../components/Home/Footer/Footer';
// import Header from '../Header/Header';
// import ServicePricing from '../components/Home/ServicePricing/ServicePricing';
// import Services from '../components/Home/Services/Services';
// import Testimonials from '../components/Home/Testimonials/Testimonials';

const Home = () => {
    // const services = Products  ()
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch("http://localhost:5000/addProducts")
          .then((res) => res.json())
          .then((data) => setServices(data));
      }, []);
      console.log(services);


    return (
        <div>
        
        <Banner></Banner>
        <AboutUs></AboutUs>

        <div className="mt-5 ">
      <h1 className="text-success text-center">We Provide Unique Products</h1>
      <p className="text-center">We are one of the leading auto car companies.</p>
      <div className="services ">
        <div className="row container"> 
          {services.slice(0,6).map((pd, index) => (
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
       {/* <Products></Products> */}
         {/* <div>
            <h1 className="heading py-2 text-light"> Here Popular</h1>
            <div className="row row-cols-lg-4 row-cols-1 mt-4 ms-1">
             {
                  services?.map((pd, index).slice(0,6).map(services => <Products id={pd.id} services={services}></Products>)
            }  */}
             {
            // // services.slice(0,6).map(services=><Products>id</Products>
            // services.slice(0,6).map(services => <Products services={services}></Products>)

            }
            {/* </div> 
          </div>  */} 
       <Contact></Contact>
        {/* <Services></Services> */}
        {/* <Review></Review> */}
        {/* <Footers></Footers> */}
         {/* <Footer></Footer> */}
      </div>
    );
};

export default Home;