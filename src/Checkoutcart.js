import React from 'react'
import { motion, AnimatePresence } from 'framer-motion';

const Checkoutcart = ({ isOpen, onClose, onCheckout }) => {
  const modalVariants = {
    hidden: { opacity: 0, y: '-100%' },
    visible: { opacity: 1, y: '0%' },
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="modal"
          variants={modalVariants}
          initial="hidden"
          animate="visible"
          exit="hidden"
        >
          <div className="modal-content">
            <span className="close" onClick={onClose}>
              &times;
            </span>
            <p>Your order has been placed!</p>
            <button onClick={onCheckout}>Close</button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Checkoutcart;
