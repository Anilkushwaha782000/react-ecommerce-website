import React from 'react'
import GlobalStyle from './Globalstyle'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components';
import './index.css';
import Ecm from './ecommerce-g56c412573_1280.png';
import heroimg from './ecommerce-3562005_1281.jpg';
import creditcard from './credit-card-5459711_1280.png'
import gsap from 'gsap';
import { useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion'
function Herosection({ data }) {
    const { scrollY } = useScroll();
    const opacitiHero = useTransform(scrollY, [0, 200, 300, 500], [1, 1.2, 1.3, 1.2]);
    console.log(data);
    console.log(data)
    useEffect(() => {

        gsap.fromTo(
            '#btnp',
            { opacity: 0, x: -100 },
            { opacity: 1, x: 0, duration: 1, delay: 0.5 }
        );
        gsap.fromTo(
            '.section-hero-data',
            { opacity: 0, x: -100 },
            { opacity: 1, x: 0, duration: 1, delay: 0.5 }
        );
        gsap.fromTo(
            '.section-hero-img',
            { opacity: 0, x: 100 },
            { opacity: 1, x: 0, duration: 1, delay: 0.5 }
        );
        gsap.fromTo(
            '#p1',
            { opacity: 0, x: -100 },
            { opacity: 1, x: 0, duration: 1, delay: 0.5 }
        );
        gsap.fromTo(
            '#kn',
            { opacity: 0, x: 100 },
            { opacity: 1, x: 0, duration: 1, delay: 0.5 }
        );
    }, []);
    return (
        <Wrapper>
            <div className='container' style={{ marginTop: '', color: 'white' }}>



                <main>
                    <section className='section-hero section'>
                        <div className='container grid1 grid1-two-column '>
                            <motion.div className='section-hero-data' style={{ scale: opacitiHero }}>
                                <div style={{top:"25%",position:"absolute"}}>
                                <p className='hero-top-data'>Welcome To</p>
                                <h1 className='hero-heading text-white'>The Best Online Shopping Site!</h1>
                                <p className='hero-par'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tristique justo eu luctus. </p>
                                <NavLink to="/productstore">
                                    <button id="btnp" className='bg-darkslateblue text-white rounded-md px-3 py-2'>{data.Name}</button>
                                </NavLink>
                                </div>
                            </motion.div>
                            <motion.div className='section-hero-img' style={{ scale: '' }}>
                                <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className='' style={{ }}>
                                    <defs>
                                        <clipPath id="clipPath">
                                        <path fill="#8A3FFC" d="M60.2,-58.5C75.2,-45.2,82.7,-22.6,83,0.3C83.2,23.1,76.3,46.3,61.3,56.5C46.3,66.7,23.1,64,1.9,62.1C-19.3,60.2,-38.7,59.1,-51.1,48.9C-63.5,38.7,-69,19.3,-65.8,3.2C-62.6,-12.9,-50.6,-25.8,-38.2,-39.1C-25.8,-52.4,-12.9,-66.2,4.8,-71C22.6,-75.9,45.2,-71.8,60.2,-58.5Z" transform="translate(100 90)" />
                                        </clipPath>
                                    </defs>
                                    <g clipPath="url(#clipPath)">
                                        {/* Add any other SVG elements inside the clip path if needed */}
                                        <image className='image-container12' xlinkHref={heroimg} alt='Image not found' style={{ height: '85%', objectFit: 'cover' }} />
                                    </g>
                                </svg>
                            </motion.div>

                        </div>
                    </section>
                </main>
            </div>
        </Wrapper>

    )
}
const Wrapper = styled.section`

`
export default Herosection