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
const Singleproduct = () => {
    const { cartItems, addItemToCart, removeItemFromCart, calculateTotalPrice, calculateTotalItems }=useCart();
    function addtocart(item){
        addItemToCart(item);
    }
    const styles = {
        productContainer: {
            textAlign: "center",
            margin: "20px",
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
            position:"absolute"
        }
    };
    const cardData1 = [
        {
            id: 1,
            title: 'Shoes',
            content: 'This is the content of Card 1.',
            image: shoes,
            price:12,
            quantity:1
        },
        {
            id: 2,
            title: 'Eye Googales',
            content: 'This is the content of Card 2.',
            image: eyeglasses,
            price:13,
            quantity:1
        },
        {
            id: 3,
            title: 'Jeans',
            content: 'This is the content of Card 3.',
            image: jeans,
            price:14,
            quantity:1
        },
        {
            id: 4,
            title: 'All clothes',
            content: 'This is the content of Card 3.',
            image: hanger,
            price:15,
            quantity:1
        },
        {
            id: 5,
            title: 'Shoes',
            content: 'This is the content of Card 1.',
            image: shoes,
            price:16,
            quantity:1
        },
        {
            id: 6,
            title: 'Eye Googales',
            content: 'This is the content of Card 2.',
            image: eyeglasses,
            price:18,
            quantity:1
        },
        {
            id: 7,
            title: 'Jeans',
            content: 'This is the content of Card 3.',
            image: jeans,
            price:19,
            quantity:1
        },
        {
            id: 8,
            title: 'All clothes',
            content: 'This is the content of Card 3.',
            image: hanger,
            price:11,
            quantity:1
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
            <div style={styles.productContainer}>
                <h1 style={styles.productTitle}>{selectedCard[0].title}</h1>
                <img
                    src={selectedCard[0].image}
                    alt='Image not found'
                    style={styles.productImage}
                />
                <p style={styles.productDescription}>{selectedCard[0].content}</p>
            </div>
            <div>
                <button style={{marginTop:"20px"}} onClick={()=>addtocart(selectedCard)}>Add To Cart +</button>
            </div>
            
        </>

    )
}

export default Singleproduct