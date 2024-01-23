import React from 'react'
import { useRef, useEffect } from 'react'
import News from './Newsletter'
import image1 from './programmer-gc0741234d_1280.png'
import { GlobalStyle } from './Globalstyle'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'
import Subproduct from './Subproduct'
import Productstore from './Productstore'
import Ecm from './ecommerce-g56c412573_1280.png'
import Herosection from './Herosection'
import CardComponent from './CardComponent'
import shoes from './shoes-1433925_1280.jpg'
import eyeglasses from './glasses-1934296_1280.jpg'
import heroimg from './ecommerce-3562005_1281.jpg';
import jeans from './jeans-428613_1280.jpg'
import hanger from './hangers-1850082_1280.jpg'
import Cart from './Cart'
import { useState } from 'react'
import creditcard from './credit-card-5459711_1280.png'
import TestimonialCarousel from './Testmonials'
import Footer from './Footer'
import { motion, useScroll, useTransform } from 'framer-motion'
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Link } from 'react-router-dom';
gsap.registerPlugin(ScrollTrigger);
const Home = () => {
    const { scrollY } = useScroll();
    const opacitiHero = useTransform(scrollY, [0, 200, 300, 500], [1, 0.5, 0.5, 0]);

    const data = { Name: "Product Store" }
    const initialCartItems1 = [
        { id: 1, name: 'Item 1', price: 10, quantity: 2 },
        { id: 2, name: 'Item 2', price: 15, quantity: 1 },
    ];
    const [cartItems, setCartItems] = useState(initialCartItems1);
    const cardData = [
        {
            id: 1,
            title: 'Shoes',
            content: 'This is the content of Card 1.',
            imagesrc: shoes,
        },
        {
            id: 2,
            title: 'Eye Googales',
            content: 'This is the content of Card 2.',
            imagesrc: eyeglasses,
        },
        {
            id: 3,
            title: 'Jeans',
            content: 'This is the content of Card 3.',
            imagesrc: jeans,
        },
        {
            id: 4,
            title: 'All clothes',
            content: 'This is the content of Card 3.',
            imagesrc: hanger,
        },
        {
            id: 5,
            title: 'Shoes',
            content: 'This is the content of Card 1.',
            imagesrc: shoes,
        },
        {
            id: 6,
            title: 'Eye Googales',
            content: 'This is the content of Card 2.',
            imagesrc: eyeglasses,
        },
        {
            id: 7,
            title: 'Jeans',
            content: 'This is the content of Card 3.',
            imagesrc: jeans,
        },
        {
            id: 8,
            title: 'All clothes',
            content: 'This is the content of Card 3.',
            imagesrc: hanger,
        },
    ];
    const cardContainerRef = useRef(null);
    const items = [
        { id: 1, name: 'Item 1', description: 'Description 1' },
        { id: 2, name: 'Item 2', description: 'Description 2' },
        { id: 3, name: 'Item 2', description: 'Description 2' },
        { id: 4, name: 'Item 2', description: 'Description 2' },
        { id: 5, name: 'Item 2', description: 'Description 2' },
        
      ];
    return (
        <>
            <motion.div className='card1' style={{ height: "350px", opacity: opacitiHero }}>
                <Herosection data={data} />

            </motion.div>
            <div><h1 className='title-header'>Our Features Product</h1>
                <div className='container1' ref={cardContainerRef}>
                    {console.log('cardData:', cardData)}
                    {cardData.map((card, index) => (

                        <Link key={index} to={{ pathname: `/singleproduct/${card.id}`, state: { cardData: items } }}>
                            <CardComponent {...card} />
                        </Link>

                    ))}
                </div>
            </div>
            <div>
                <News />
            </div>
            <div id='ftr'>
                <Footer />
            </div>
        </>
    )
}

const Wrapper = styled.section`
`

export default Home