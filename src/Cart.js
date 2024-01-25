import React, { createContext, useContext, useState, useRef } from 'react';
import './index.css';
import { useCart } from './CartContext';
import Footer from './Footer'
import Checkoutcart from './Checkoutcart';
import { motion } from 'framer-motion';
import CheckoutForm from './CheckoutForm';
import Modal from './Modal.js'
import { Link } from 'react-router-dom';
const Cart = () => {
    const [checkmodal, setModal] = useState(false);
    const { cartItems, addItemToCart, removeItemFromCart, calculateTotalPrice, calculateTotalItems } = useCart();
    const Country = ["India", "Pakistan", "England", "Austrlia", "Newzeland"];
    const name1 = useRef();
    const addresss = useRef();
    const States = {
        India: ['Mumbai', 'Banglore', 'Noida'],
        Pakistan: ['Lohore', 'Punjav', 'Secundra'],
        England: ['Connrty', 'Greebt', 'Stte3C'],
        Austrlia: ['Sydne', 'Manchester', 'Perth'],
        Newzeland: ['Nwrta', 'jonjhs', 'qwts'],
        Select: ["Select"]
    };
    const [selectedState, setSelectedState] = useState('');
    const [country, setCountry] = useState("Select");
    const [isModalOpen, setModalOpen] = useState(false);
    const handleCheckout = () => {
        setModal(!checkmodal);
    }

    const handleChange = (e) => {
        console.log("handle change called" + e.target.value);
        setCountry(e.target.value);
    }
    const handleChangeState = (e) => {
        const selectedcountry = e.target.value;
        setSelectedState(selectedcountry);
    }

    const handleCloseModal = () => {
        setModal(false);
    };

    const handleModalCheckout = () => {
        alert('Closing modal and finalizing checkout');
        setModal(false);
    };
    const [checkoutVisible, setCheckoutVisible] = useState(false);

    const handleCheckout1 = () => {
        if (!checkoutVisible) {
            setCheckoutVisible(true);
        }
        else {
            setCheckoutVisible(false);
        }
    };

    const handleCloseCheckout = () => {
        setCheckoutVisible(false);
        // window.location.href = '/';

    };
    // const handleCheckout1 = () => {
    //     setModalOpen(true);
    // };

    // const closeModal = () => {
    //     setModalOpen(false);
    // };
    return (
        <>
            <div style={{ marginTop: "100px" }}>
                <div className="cart-container text-center">
                    <h2>Your Cart</h2>
                    <div className="cart-items">
                        {cartItems.length === 0 ?
                            <>
                                <p>Cart is empty.</p>
                                <Link to={"/products"}>
                                    <button style={{ marginTop: "20px", backgroundColor: "#956d92", padding: "10px", color: "white", borderRadius: "8px" }} >Continue Shopping...</button>
                                </Link>
                            </> : null}

                        {cartItems.map(item => (
                            <div key={item.id} className="cart-item">
                                <img className="mb-4" style={{ maxWidth: '10%' }} src={item.image} />
                                <p>{item.name} - ${item.price} x {item.quantity}</p>
                                <button className='cart-button' style={{ marginLeft: 'auto' }} onClick={() => addItemToCart(item)}>Add</button>
                                <button className='cart-button' onClick={() => removeItemFromCart(item.id)}>Remove</button>


                            </div>
                        ))}
                    </div>

                </div>
                {cartItems.length > 0 ? (<div className="cart-container text-center" style={{ marginTop: '20px' }}>
                    <h2>Product Summary</h2>

                    <div className="cart-summary1">
                        {cartItems.length > 0 ? (
                            <button onClick={handleCheckout1} className="checkout-button">
                                Checkout
                            </button>
                        ) : null}
                        {/* {isModalOpen && (
                            <Modal isOpen={isModalOpen} onClose={closeModal}>
                                <h2>Modal Content</h2>
                                <p>This is your modal content.</p>
                            </Modal>
                        )} */}
                        <CheckoutForm isVisible={checkoutVisible} onClose={handleCloseCheckout} />
                        <p className='total-items'>Total Items: {calculateTotalItems()}</p>
                        <p className='total-price'>Total Price: ${calculateTotalPrice().toFixed(2)}</p>
                    </div>
                </div>) : null}



            </div>
            <div id='ftr'>
                <Footer />
            </div>
        </>
    );
}

export default Cart;
