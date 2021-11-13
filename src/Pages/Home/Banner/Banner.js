import React from 'react';
import { Carousel,Button } from 'react-bootstrap';
// import banner1 from '../../../images/banner/banner1.jpg';
  import banner1 from '../../../images/banner.jpeg';
import banner2 from '../../../images/carbg.jpg';
 import banner3 from "../../../images/banner3.jpg";
// import Button from '@restart/ui/esm/Button';
// import banner2 from '../../../images/banner/banner2.jpg';
// import banner3 from '../../../images/banner/banner3.jpg';

const Banner = () => {
    return (
        <>
            <Carousel>
            
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={banner1}
                        alt="First slide"
                    />
                     <Carousel.Caption>
                        <h2 className="lighter" style={{ animationDelay:'1s' }}>Ana-Car-Gerez</h2>
                        <h1>MODERN-CASSIC-DECORATIVE</h1>
                        <p className="sub-title">GET 50% OFF ON SELECTED ITEMS!!.</p>
                        <Button className="text-dark bg-warning">Book Appointments</Button>
                    </Carousel.Caption> 
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={banner2}
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h2>SMART-SPORTS-CAR</h2>
                        <h1 className="lighter">TOP BRANDS OF 2021</h1>
                        <p className="sub-title">GET 50% OFF ON SELECTED ITEMS!!.</p>
                        <Button className="text-dark bg-warning">Book Appointments</Button>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={banner3}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h1 className="lighter ">LIMITED OFFERS BODY PARTS </h1>
                        <p className="sub-title">GET 50% OFF ON SELECTED ITEMS!!.</p>
                        <Button className="text-dark bg-warning">Book Appointments</Button>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </>
    );
};

export default Banner;