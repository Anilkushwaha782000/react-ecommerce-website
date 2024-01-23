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
import {motion ,useScroll, useTransform} from 'framer-motion'
function Herosection({ data }) {
    const {scrollY} = useScroll();
    const opacitiHero=useTransform(scrollY,[0,200,300,500],[1,1.2,1.3,1.2]);
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
            <div className='container' style={{marginTop: '80px', color: 'white' }}>



                <main>
                    <section className='section-hero section'>
                        <div className='container grid1 grid1-two-column '>
                            <motion.div className='section-hero-data' style={{scale:opacitiHero}}>
                                <p className='hero-top-data'>Welcome To</p>
                                <h1 className='hero-heading text-white'>The Best Online Shopping Site!</h1>
                                <p className='hero-par'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tristique justo eu luctus. </p>
                                <NavLink to="/productstore">
                                    <button id="btnp" className='bg-darkslateblue text-white rounded-md px-3 py-2'>{data.Name}</button>
                                </NavLink>
                            </motion.div>
                            <motion.div className='section-hero-img' style={{scale:opacitiHero}}>
                                <img className='image-container1' src={heroimg} alt='Image not found' />
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