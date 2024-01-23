import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import './index.css'
import ecm from './ecommerce-g56c412573_1280.png'

function CardComponent({ id, title, content, imagesrc }) {

  console.log(id + "___title__" + title + "__content__" + content + "__img__" + imagesrc)
  return (
    <>
      <div>


        <div className="card">
          <img className='card-image' src={imagesrc} alt='Image not found' />
          <h2 className="card-title">{title}</h2>
          <p className="card-content">{content}</p>
        </div>


      </div>

    </>
  )
}

export default CardComponent