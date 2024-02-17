import React from 'react';
import { useCart } from './CartContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import News from './Newsletter'
import { useEffect } from 'react';
import './index.css';
import shoes from './shoes-1433925_1280.jpg'
import eyeglasses from './glasses-1934296_1280.jpg'
import heroimg from './ecommerce-3562005_1281.jpg';
import jeans from './jeans-428613_1280.jpg'
import hanger from './hangers-1850082_1280.jpg'
import mocup from './mockup-5206355_1280.jpg'
import music from './music-1561355_1280.jpg'
import icecream from './ice-cream-1713160_1280.jpg'
import hairdeyer from './hairdryer-295616_1280.jpg'
import cupcake from './cupcake-2749204_1280.jpg'
import cosmetic from './cosmetics-2746013_1280.jpg'
import energyball from './energy-ball-3973460_1280.jpg'
import sneakers from './sneakers-531172_1280.jpg'
import wristwatch from './wrist-watch-2159351_1280.jpg'
import perfume from './axe-bodyspray-191361_1280.jpg'
import { SearchForm } from './Searchfillter';
import { useState, useRef } from 'react';
import Footer from './Footer'
import b1 from './b1.jpg'
import Navbar from './Navbar';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
const Products = () => {
  const { scrollY } = useScroll();
  const opacitiHero = useTransform(scrollY, [0, 200, 300, 500], [0, 0.5, 0.8, 1]);
  const [showPopUp, setShowPopUp] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const { addItemToCart } = useCart();
  const { handleChange } = useCart();
  const [popup, showPopUp1] = useState(false);
  const products = [
    {
      id: 4,
      name: 'shoes',
      price: 10.99,
      image: shoes,
    },
    {
      id: 6,
      name: 'eyeglasses',
      price: 15.99,
      image: eyeglasses,
    },
    {
      id: 7,
      name: 'jeans',
      price: 95.99,
      image: jeans,
    },
    {
      id: 9,
      name: 'icecream',
      price: 5.99,
      image: icecream,
    },
    {
      id: 10,
      name: 'cosmetic',
      price: 25.99,
      image: cosmetic,
    },
    {
      id: 11,
      name: 'sneakers',
      price: 45.99,
      image: sneakers,
    },
    {
      id: 12,
      name: 'cupcake',
      price: 10.99,
      image: cupcake,
    },
    {
      id: 13,
      name: 'mocup',
      price: 215.99,
      image: mocup,
    },
    {
      id: 14,
      name: 'energyball',
      price: 150.99,
      image: energyball,
    },
    {
      id: 15,
      name: 'perfume',
      price: 85.99,
      image: perfume,
    },
    {
      id: 16,
      name: 'music',
      price: 145.99,
      image: music,
    },
    {
      id: 20,
      name: 'hairdeyer',
      price: 65.99,
      image: hairdeyer,
    },

  ];

  const [products1, setProduct] = useState(products)
  const updateFilteredProducts = () => {
    if (searchTerm.trim().length < 2) {
      setProduct(products1);
    }
    else {
      const filteredProducts = products1.filter(item =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
      if (filteredProducts.length > 0) {
        setProduct(filteredProducts);
      }
      else {
        //alert("No Products Found");
        showPopUp1(true);
        setTimeout(() => {
          showPopUp1(false);
          setSearchTerm("");
        }, 2000);

      }

    }

  };
  useEffect(() => {
    updateFilteredProducts();
  }, []);
  const handleSearchButtonClick = () => {
    updateFilteredProducts();
  };
  const handleClearButtonClick = () => {
    setSearchTerm('');
    showPopUp1(false);
    setProduct(products); // Reset to the original product list
  };
  return (
    <>
    <Navbar />
      <div id="filtc" style={{ marginTop: window.innerWidth <= 768 ? "10px" : "" }}>
        <div className="" style={{marginTop:"5px"}}>
          <div className="flex justify-center"> {/* Add a flex container to horizontally center */}
            <div id="filtw" className="relative m-0 -mr-0.5 min-w-0" style={{ width: '60%' }}>
              <div className="flex items-center gap-4">
                <input
                  type="search"
                  className="relative block w-full rounded-l border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:focus:border-primary"
                  placeholder="Search"
                  aria-label="Search"
                  aria-describedby="button-addon1"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  style={{ width: '60%', height: '4rem',borderRadius:"20px" }}
                />
                <button
                  className="relative z-[2] flex items-center gap-2 text-white rounded-full bg-primary px-6 py-2.5 text-2xl font-medium uppercase leading-tight text-blue shadow-md transition duration-150 ease-in-out hover:bg-primary-700 hover:shadow-lg focus:bg-primary-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-primary-800 active:shadow-lg"
                  type="button"
                  id="button-addon1"
                  data-te-ripple-init="true"
                  data-te-ripple-color="light"
                  style={{ backgroundColor: 'blueviolet', height: '4rem' }}
                  onClick={handleSearchButtonClick}
                > Search
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-8 w-8">
                    <path fillRule="evenodd" d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z" clipRule="evenodd" ></path>
                  </svg>
                </button>
                <button
                  className="flex-inline ml-2 rounded-full px-6 py-4 text-2xl font-medium uppercase leading-tight text-white shadow-md transition duration-150 ease-in-out hover:bg-primary-700 hover:shadow-lg focus:bg-primary-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-primary-800 active:shadow-lg"
                  onClick={handleClearButtonClick}
                  style={{ backgroundColor: 'blueviolet', height: '4rem' }}
                >
                  Clear&nbsp;Filter
                </button>
              </div>
            </div>
          </div>

        </div>
        <div className="mx-auto max-w-7xl px-4 text-center">
          <h2 className="text-2xl font-semibold mb-6" style={{ margin: "20px 0", fontSize: "3rem" }}>Our Products</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {products1.map(item => (
              <motion.div key={item.id} className="bg-white shadow-md rounded-lg p-4 flex flex-col mx-2 card2" style={{
                border: "1px solid #cce7d0",
                overflow: "hidden"


              }}
                whileHover={{
                  // translateX: 10, // Adjust the value based on your preference

                }}

              >

                <img src={item.image} alt={item.name} className="mx-auto mb-4" style={{
                  maxHeight: '51%', border: "1px solid #cce7d0",

                }} />
                <div style={{ marginTop: "35px" }}>
                  <h3 className="text-lg font-semibold flex justify-between" >{item.name}<p className="text-gray-600 text-right">${item.price.toFixed(2)}</p></h3>

                  <button className='hover:bg-blue-600 text-white py-2 px-4 rounded-md ' style={{ backgroundColor: '#00008b8c', width: "100%" }} onClick={() => addItemToCart(item)}>
                    <FontAwesomeIcon icon={faShoppingCart} className="mr-2" /></button>
                </div>

              </motion.div>
            ))}
          </div>
        </div>
      </div>
      <div>
        <AnimatePresence>
          {popup && (
            <motion.div
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, }}
              transition={{ duration: 0.5 }}
              style={{
                position: "absolute",
                top: "15%",
                left: "40%",
                zIndex: "99999",
                fontSize: "2rem",
                transform: "translate(-50%, -50%)",
                border: "1px solid blue",
                color: "white", backgroundColor: "black"
              }}
              className="popup"
            >
              <h1 style={{ padding: "10px" }}>No product found</h1>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      <div style={{ marginTop: "10rem" }}>
        <News />
      </div>

      <div>
        <Footer />
      </div>
    </>


  );
}

export default Products;
