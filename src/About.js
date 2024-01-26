import React from 'react'
import image1 from './programmer-gc0741234d_1280.png'
import { GlobalStyle } from './Globalstyle'
import FAQSection from './Faqs'
import News from './Newsletter'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'
import Herosection from './Herosection'
import heroimg from './ecommerce-3562005_1281.jpg';
import Footer from './Footer'
import vd from './1.mp4';
import gsap from 'gsap';
import './index.css'
import { useEffect } from 'react';
import Navbar from './Navbar'
import { useScroll, useTransform, useAnimation, motion } from 'framer-motion'
const About = () => {
    const { scrollY } = useScroll();
    const controls = useAnimation();

    useEffect(() => {

        controls.start({ opacity: 1, y: 0, transition: { duration: 0.5 }, });
    }, [controls]);
    const mission = "Our Mission: To provide high-quality products and exceptional service to our customers while promoting sustainability and ethical business practices.";

    const values = [
        "Customer-Centric: We prioritize the needs and satisfaction of our customers in everything we do.",
        "Quality: We are committed to delivering products of the highest quality and craftsmanship.",
    ];
    const testimonials = [
        {
            id: 1,
            author: "John Doe",
            text: "I absolutely love the products I bought from this store. The quality is outstanding!",
        },
        {
            id: 2,
            author: "Jane Smith",
            text: "The customer service here is top-notch. They went above and beyond to help me with my order.",
        },
        {
            id: 3,
            author: "Mike Johnson",
            text: "I'm a repeat customer, and I can't recommend this store enough. Fast shipping and great products!",
        },
    ];
    useEffect(() => {


        gsap.fromTo(
            '#p1',
            { opacity: 0, x: -100 },
            { opacity: 1, x: 0, duration: 1, delay: 0.3 }
        );
        gsap.fromTo(
            '#kn',
            { opacity: 0, x: 100 },
            { opacity: 1, x: 0, duration: 1, delay: 0.3 }
        );
    }, []);
    const data = { Name: "Our trusted product" }
    return (
        <>
        <Navbar/>
            <div>
                <motion.section
                    id="page-header"
                    className="about-header"
                    initial={{ opacity: 0, y: 20 }} // Initial state (invisible and slightly moved up)
                    animate={controls}
                >
                    <h2 id="kn">#KnowUs</h2>
                    <p id="p1">Read All Case Studies About Our Products!</p>
                </motion.section>
            </div>
            <div className='mission'>
                <p className="par" style={{ margin: "5rem" }}>{mission}</p>
                <h2 className="h2s" style={{
                    position: "absolute",
                    left: "50%",
                    transform: "translate(-50%,-50%)", marginBottom: "5rem"
                }}>Our Values</h2>
                <ul className="ult">
                    {values.map((value, index) => (
                        <li className="list" style={{
                            display: "grid",
                            margin: "5rem"
                        }} key={index}>{value}</li>
                    ))}
                </ul>
            </div>
            <div>
                <section id="about-app" className="section-p1">
                    <h1 id="d1" >Download Our <a href="#">App</a></h1>
                    <div className="video">
                        <video autoPlay muted loop src={vd} style={{ borderRadius: "20px" }}></video><div class="selectextShadowHost"></div>
                    </div>
                </section>
            </div>
            <div className="testimonials">
                <h2>Customer Testimonials</h2>
                <div className="testimonial-list">
                    {testimonials.map((testimonial) => (
                        <div className="testimonial" key={testimonial.id}>
                            <p>{testimonial.text}</p>
                            <p className="author">- {testimonial.author}</p>
                        </div>
                    ))}
                </div>
            </div>
            <div style={{ marginTop: "10rem" }}>
                <News />
            </div>
            <div style={{ marginTop: "10rem" }}>
                <FAQSection />
            </div>
            <div>
                <Footer />
            </div>
        </>
    )
}

const Wrapper = styled.section`
`

export default About