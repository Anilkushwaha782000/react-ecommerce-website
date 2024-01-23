import React, { useState } from 'react';
import './index.css';
import News from './Newsletter'
import { useCart } from './CartContext';
import Footer from './Footer'
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
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
function Productstore() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const { addItemToCart } = useCart();
  const { handleChange } = useCart();

  // Sample product data
  const products = [
    // Define your product data here
    // Each product should have a "category" property
    { id: 1, name: 'Product 1', category: 'Men',image:shoes,price:"10"},
    { id: 2, name: 'Product 2', category: 'Women',image:hairdeyer,price:"10"},
    { id: 3, name: 'Product 3', category: 'Children',image: sneakers,price:"10"},
    { id: 4, name: 'Product 1', category: 'Men',image:wristwatch,price:"10"},
    { id: 5, name: 'Product 2', category: 'Women',image: cosmetic,price:"10"},
    { id: 6, name: 'Product 3', category: 'Children',image: mocup,price:"10"},
    { id: 7, name: 'Product 1', category: 'Men',image:wristwatch,price:"10"},
    { id: 8, name: 'Product 2', category: 'Women',image: cosmetic,price:"10"},
    { id: 9, name: 'Product 3', category: 'Children',image: mocup,price:"10"},
    { id: 10, name: 'Product 1', category: 'Men',image: sneakers ,price:"10"},
    { id: 11, name: 'Product 2', category: 'Women',image: hairdeyer,price:"10" },
    { id: 12, name: 'Product 3', category: 'Children',image: mocup,price:"10"},
    // Add more products with categories
  ];

  // Event handler to update the selected category
  const handleCategoryFilter = (category) => {
    setSelectedCategory(category);
  };

  // Filter the products based on the selected category
  const filteredProducts = selectedCategory
    ? products.filter((product) => product.category === selectedCategory)
    : products;

    const showAllProducts = () => {
      setSelectedCategory(null); // Reset the selected category to show all products
    };

  return (
    <>
      <div style={{ marginTop: '5px' }}>
        
        <div className="Container2">
          {/* Add filter buttons or dropdowns */}
          <h1 className="cat">Select category</h1>
          <div className="filter-buttons">
            
            <button className='btnp' onClick={() => handleCategoryFilter('Men')}>Men</button>
            <button  className='btnp' onClick={() => handleCategoryFilter('Women')}>Women</button>
            <button className='btnp' onClick={() => handleCategoryFilter('Children')}>Children</button>
            {/* Add more filter options as needed */}
          </div>
          <button className="showall" onClick={showAllProducts}>Show All</button>
          <div className="rightdiv">
            <div className="grid2">
              <div className="grid2-two-column">
                {/* Map and display the filtered products */}
                {filteredProducts.map((product) => (
                  <div className="card5" key={product.id}>
                    <img src={product.image} alt={product.name} className="card-image5" />
                    <div className="card-content5">
                      <h2 className="card-title5">{product.name}</h2>
                      <p className="">{product.description}</p>
                      <p className="card-price5">${product.price} 
                      <button className='cbtnp' onClick={() => addItemToCart(product)}>
        <FontAwesomeIcon icon={faShoppingCart} />
      </button></p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div style={{marginTop:"5rem"}}>
        <News/>
      </div>
      <div className='ftrm'>
        <Footer />
      </div>
    </>
  );
}

export default Productstore;
