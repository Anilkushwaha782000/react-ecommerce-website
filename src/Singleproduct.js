import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useLocation } from 'react-router-dom';
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
import { useCart } from './CartContext';
import Navbar from './Navbar';
const Singleproduct = () => {
    const { cartItems, addItemToCart, removeItemFromCart, calculateTotalPrice, calculateTotalItems } = useCart();
    function addtocart(item) {
        addItemToCart(item);
    }
    const styles = {
        productContainer: {
            // textAlign: "center",
            margin: "20px",
            width: "100%",
            display: "flex"
        },

        productTitle: {
            fontSize: "24px",
            marginBottom: "10px",
        },

        productImage: {
            maxWidth: "35%",
            height: "auto",
            marginBottom: "20px",
        },

        productDescription: {
            fontSize: "16px",
            lineHeight: "1.5",
            position: "absolute"
        }
    };
    const cardData1 = [
        {
            id: 1,
            name: 'Shoes',
            content: 'This is the content of Card 1.',
            image: shoes,
            price: 12,
            quantity: 1,
            details: ["Material (leather, canvas, etc.)",
                "Size options",
                "Colors available",
                "Style (sneakers, boots, loafers, etc.)",
                "Closure type (lace-up, slip-on, etc.)",
                "Sole type (rubber, leather, etc.)"]
        },
        {
            id: 2,
            name: 'Eye Googales',
            content: 'This is the content of Card 2.',
            image: eyeglasses,
            price: 13,
            quantity: 1,
            details: [
                "Frame material (metal, plastic, etc.)",
                "Frame color",
                "Lens material (glass, polycarbonate, etc.)",
                "Lens color/tint",
                "Frame style (round, square, aviator, etc.)",
                "Size options (frame width, temple length, etc.)"
            ]

        },
        {
            id: 3,
            name: 'Jeans',
            content: 'This is the content of Card 3.',
            image: jeans,
            price: 14,
            quantity: 1,
            details: ["Material (denim, stretch denim, etc.)",
                "Size options",
                "Colors available",
                "Fit type (skinny, straight, bootcut, etc.)",
                "Rise (low-rise, mid-rise, high-rise, etc.)",
                "Closure type (zipper, button, etc.)"]
        },
        {
            id: 4,
            name: 'All clothes',
            content: 'This is the content of Card 3.',
            image: hanger,
            price: 15,
            quantity: 1,
            details: [
                "Material (cotton, polyester, etc.)",
                "Size options",
                "Colors available",
                "Style (casual, formal, etc.)",
                "Neckline type (round neck, V-neck, etc.)",
                "Sleeve length (short, long, three-quarter, etc.)"
            ]
        },
        {
            id: 5,
            name: 'Shoes',
            content: 'This is the content of Card 1.',
            image: shoes,
            price: 16,
            quantity: 1,
            details: ["Material (leather, canvas, etc.)",
                "Size options",
                "Colors available",
                "Style (sneakers, boots, loafers, etc.)",
                "Closure type (lace-up, slip-on, etc.)",
                "Sole type (rubber, leather, etc.)"]
        },
        {
            id: 6,
            name: 'Eye Googales',
            content: 'This is the content of Card 2.',
            image: eyeglasses,
            price: 18,
            quantity: 1,
            details: [
                "Frame material (metal, plastic, etc.)",
                "Frame color",
                "Lens material (glass, polycarbonate, etc.)",
                "Lens color/tint",
                "Frame style (round, square, aviator, etc.)",
                "Size options (frame width, temple length, etc.)"
            ]
        },
        {
            id: 7,
            name: 'Jeans',
            content: 'This is the content of Card 3.',
            image: jeans,
            price: 19,
            quantity: 1,
            details: ["Material (denim, stretch denim, etc.)",
                "Size options",
                "Colors available",
                "Fit type (skinny, straight, bootcut, etc.)",
                "Rise (low-rise, mid-rise, high-rise, etc.)",
                "Closure type (zipper, button, etc.)"]
        },
        {
            id: 8,
            name: 'All clothes',
            content: 'This is the content of Card 3.',
            image: hanger,
            price: 11,
            quantity: 1,
            details: [
                "Material (cotton, polyester, etc.)",
                "Size options",
                "Colors available",
                "Style (casual, formal, etc.)",
                "Neckline type (round neck, V-neck, etc.)",
                "Sleeve length (short, long, three-quarter, etc.)"
            ]
        },
    ];
    const { id } = useParams();
    console.log("id<<<", id);
    const location = useLocation();
    console.log("cardData<<<", location.pathname);
    const productState = location.state;
    console.log("cardData<<<", productState);
    const selectedCard = cardData1.filter((item) => item.id == id);
    console.log("selectedCard<<<", selectedCard);
    useEffect(() => {

    }, [])
    return (
        <>
        <Navbar/>
            <div style={styles.productContainer}>
                <div style={{ width: "50%" }}>
                    <h1 style={styles.productTitle}>{selectedCard[0].name}</h1>
                    <img
                        src={selectedCard[0].image}
                        alt='Image not found'
                        style={styles.productImage}
                    />
                    <p style={styles.productDescription}>{selectedCard[0].content}</p>

                </div>
                <div style={{ width: "50%" }}>
                    <ul style={{ listStyleType: "disc" }}>
                        {selectedCard[0].details.map((list) => {
                            return (
                                <li style={{ fontSize: "20px" }} key={selectedCard[0].id}>{list}</li>


                            )

                        })}
                    </ul>
                    <div style={{ marginLeft: "20px" }}>
                        <button style={{ marginTop: "20px", backgroundColor: "#956d92", padding: "10px", color: "white", borderRadius: "8px" }} onClick={() => addtocart(selectedCard[0])}>Add To Cart +</button>
                    </div>
                </div>

            </div>

        </>

    )
}

export default Singleproduct