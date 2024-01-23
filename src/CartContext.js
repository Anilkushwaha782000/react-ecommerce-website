import React, { createContext, useContext, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './index.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const MAX_CART_ITEMS = 10;
  const [showPopUp, setShowPopUp] = useState(false);
  const [showDeletePopUp, setShowDeletePopUp] = useState(false);
  const [showMaxItemsPopUp, setShowMaxItemsPopUp] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  const addItemToCart = (item) => {
    var itemlength = calculateTotalItems();

    const existingItemIndex = cartItems.findIndex(cartItem => cartItem.id === item.id);

    if (existingItemIndex !== -1) {
      if (itemlength < MAX_CART_ITEMS) {
        const updatedCart = [...cartItems];
        updatedCart[existingItemIndex].quantity += 1;
        setCartItems(updatedCart);
        // setShowPopUp(true);
        toast.success('🛍️ Item Added to Cart Succesfully 🛍️', {
          position: "top-right",
          autoClose: 1500,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
          });
        setTimeout(() => {
          setShowPopUp(false);
        }, 1000);
      }
      else {
        setShowMaxItemsPopUp(true);
        setTimeout(() => {
          setShowMaxItemsPopUp(false);
        }, 3000);
      }
    } else
      if (itemlength < MAX_CART_ITEMS) {
        const updatedCart = [...cartItems, { ...item, quantity: 1 }];
        setCartItems(updatedCart);
        // setShowPopUp(true);
        toast.success('🛍️ Item Added to Cart Succesfully 🛍️', {
          position: "top-right",
          autoClose: 1500,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
          });
        setTimeout(() => {
          setShowPopUp(false);
        }, 1000);
      }

      else {
        setShowMaxItemsPopUp(true);
        setTimeout(() => {
          setShowMaxItemsPopUp(false);
        }, 3000);
      }



  };

  const removeItemFromCart = (itemId) => {
    const updatedCart = cartItems.filter(item => item.id !== itemId);
    setCartItems(updatedCart);
    setShowDeletePopUp(true); // Show the delete confirmation popup
    setTimeout(() => {
      setShowDeletePopUp(false); // Hide the popup after a few seconds
    }, 1000);
  };

  const calculateTotalPrice = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const calculateTotalItems = () => {
    return cartItems.reduce((total, item) => total + item.quantity, 0);
  };
  const [searchTerm, setSearchTerm] = useState('');
  const handleChange = (e) => {
    console.log(e.target.value)
    setSearchTerm(e.target.value);
  };
  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={1500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      <CartContext.Provider
        value={{
          cartItems,
          addItemToCart,
          removeItemFromCart,
          calculateTotalPrice,
          calculateTotalItems,
          handleChange,
          searchTerm
        }}
      >
        {children}
        {showPopUp && (
          <div className="pop-message" style={{ animation: 'bounceAndFadeIn 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275)' }}>

            <h2 className='popmsg'>🛍️ Item Added to Cart Succesfully 🛍️</h2>

          </div>
        )}
        {showDeletePopUp && (
          <div className="delete-pop-message">

            <h2 className='popmsg' >🛍️ Item deleted  Succesfully 🛍️</h2>

          </div>
        )}
        {showMaxItemsPopUp && (
          <motion.div
            className="pop-message" >
            {/* Customize the max items exceeded content */}
            <motion.h2
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, }}
              transition={{ duration: 0.5 }} style={{ zIndex: "9999999", border: "1px solid black", color: "white", padding: "5px" }}>Cart has reached its maximum capacity.</motion.h2>

          </motion.div>
        )}

      </CartContext.Provider>
    </>

  );
};

export const useCart = () => {
  return useContext(CartContext);
};
