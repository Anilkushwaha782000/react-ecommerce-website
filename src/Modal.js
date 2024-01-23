import React from 'react'
import { createPortal } from 'react-dom'
function Modal({ children, onClose }) {
    const modalOverlayStyle = {
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      };
    
      const modalBackdropStyle = {
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent black
      };
    
      const modalContentStyle = {
        backgroundColor: 'white',
        padding: '20px',
        borderRadius: '8px',
        boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)',
      };
    return (
        createPortal(
            <div style={modalOverlayStyle}>
                <div style={modalBackdropStyle} onClick={onClose}></div>
                <div style={modalContentStyle}>
                    {children}
                    <button onClick={onClose}>Close Modal</button>
                </div>
            </div>,
            document.getElementById("modal-root")
        )
    )
}

export default Modal