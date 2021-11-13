import React from 'react';
import { Button, Col, Container, Image, Row } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';
import aboutImg from '../../../images/bannerbg.jpg';
import './AboutUs.css';

const About = () => {
    return (
        <section className="about-container mt-5">
            <Container fluid>
                <Row className="align-items-center justify-content-center banner">
                    <Col md={6}>
                        <Fade left duration={2000} distance="40px">
                            <Image src={aboutImg} fluid />
                        </Fade>
                    </Col>
                    <Col md={4} className="p-md-5 mt-md-0 mt-4">
                        <Fade right duration={2000} distance="40px">
                            <p>About Our Company</p>
                            <h3>We’re a company of cassic car $ top brands</h3>
                            <p className="text-muted my-4 pr-md-5">In the mass market, Toyota is undoubtedly the most popular car brand in the United States, followed by Honda, Chevrolet, and Ford.

Mercedes-Benz is the most popular luxury car brand. Mercedes-Benz is described by fans as Reliable, Well made, Good quality, Expensive and Luxurious. followed by BMW, Cadillac, and Lexus.

Porsche is the most popular luxury sports car brand. Ferrari is the most popular super luxury sports car brand. Bugatti is the most popular luxury supercars brand.

Tesla is far and away the most popular battery electric car brands in the world.

Let's take a look! Which car brands are on the list.</p>
                            <Button
                                className="btn-main"
                                href="#pricing">
                                Learn More
                            </Button>
                        </Fade>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default About;