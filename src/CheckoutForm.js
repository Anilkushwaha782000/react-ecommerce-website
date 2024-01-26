import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useCart } from './CartContext';
import { Link } from 'react-router-dom';
const CheckoutForm = ({ isVisible, onClose }) => {
  const { clearCart } = useCart();
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [paymentMode, setPaymentMode] = useState('creditCard');
  const [submitted, setSubmitted] = useState(false);
  const [formName, setFormName] = useState("Checkout Form");
  const[home,setHome]=useState(false);
  const labelStyle = {
    display: 'block',
    marginBottom: '8px',
    fontSize: '16px',
    color: 'white',
    textAlign: 'left',     // Added text-align property
    marginLeft: '11%',
  };
  const labelStyle1 = {
    display: 'block',
    marginBottom: '8px',
    fontSize: '16px',
    color: 'white',
    textAlign: 'left',     // Added text-align property
  };

  const inputStyle = {
    width: '100%',
    padding: '8px',
    borderRadius: '4px',
    border: '1px solid #ccc',
    color: "black"

  };

  const textareaStyle = {
    width: '100%',
    padding: '8px',
    borderRadius: '4px',
    border: '1px solid #ccc',
    color: "black"
  };

  const selectStyle = {
    width: '100%',
    padding: '8px',
    borderRadius: '4px',
    border: '1px solid #ccc',
    color: 'black'
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitted(!submitted);
    setFormName("");
    setTimeout(() => {
      clearCart();
    }, 2000);
    const formData = new FormData(e.target);

    formData.append("access_key", "9ca6f783-b768-4318-9797-2948729e7ec7");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      console.log("Success", res);
      console.log("Form has been submitted successfully");
    }

    console.log('Name:', name);
    console.log('Address:', address);
    console.log('Payment Mode:', paymentMode);
    setHome(true);
    

  };

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : -20 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      style={{
        display: isVisible ? 'block' : 'none',
        position: 'fixed',
        top: '25%',
        left: '25%',
        transform: 'translate(-50%, -50%)',
        backgroundColor:'rgb(51 39 57)',
        padding: '20px',
        borderRadius: '8px',
        boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
        width: "50%",
        height: "auto",
        color: "white",
        zIndex: "99999"
      }}
    ><button id='closecheckout'
      onClick={onClose}
      style={{
        position: 'absolute',
        top: '10px',
        right: '10px',
        padding: '8px',
        background: 'none',
        border: 'none',
        cursor: 'pointer',
        fontSize: '16px',
      }}
    >
        &#10006;
      </button>
      <h2>{formName}</h2>
      {submitted ? (
        <>
         <motion.p
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
        >
          Thank you for your order! We will process it shortly.
        </motion.p></>
       
       
      ) : (
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
        >
          <div >
            <label style={labelStyle} htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required style={inputStyle}
            />
          </div>
          <div>
            <label style={labelStyle} htmlFor="address">Address:</label>
            <textarea
              id="address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              required style={textareaStyle}
            />
          </div>
          <div style={{ marginLeft: "10%", marginRight: "10%" }}>
            <label style={labelStyle1} htmlFor="paymentMode">Payment Mode:</label>
            <select
              id="paymentMode"
              value={paymentMode}
              onChange={(e) => setPaymentMode(e.target.value)}
              style={selectStyle}
            >
              <option value="creditCard" >Credit Card</option>
              <option value="paypal">PayPal</option>
              <option value="other">Other</option>
            </select>
          </div>
          <motion.button
            type="submit"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            style={{ margin: "10px", padding: "5px 10px", border: "1px solid black", backgroundColor: "blueviolet", borderRadius: "5px", color: "whitesmoke" }}
          >
            Submit Order
          </motion.button>
        </motion.form>
      )}

    </motion.div>
  );
};

export default CheckoutForm;
