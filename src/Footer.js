import React, { useState } from 'react'
import bootstrap from 'bootstrap'
import { FaInstagram, FaFacebook, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { useEffect,useRef } from 'react';
import './index.css'
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);
function Footer() {
const myref=useRef();
const[myelement,setMyelement]=useState();
console.log("myelement",myelement)

useEffect(()=>{
console.log("myref>>",myref.current);
const observer=new IntersectionObserver((entries)=>{
  const entry=entries[0];
  setMyelement(entry.isIntersecting);
  console.log("entry>>>>",entry);
  gsap.fromTo(
    '#fytr',
    { opacity: 0,},
    { opacity: 1, duration: 1, delay: 0.5 }
);
})
observer.observe(myref.current);
},[])
  return (
    <div>
      <footer id="fytr" ref={myref}  className="py-5" style={{marginTop:"50px"}}>
        <div  className='container mx-auto' style={{display:"grid", placeItems:"center",borderTop:"2px solid #ddd"}}>
          <div className="grid grid-cols-2 md:grid-cols-2 mt-4" style={{gap:"32rem"}}>

            <div className="mb-3 flex flex-col justify-center items-center">
              <h5 className="text-lg font-semibold mb-2">Section</h5>
              <ul className="space-y-2">
                <li><a href="#" className="text-body-secondary hover:text-primary">Home</a></li>
                <li><a href="#" className="text-body-secondary hover:text-primary">Features</a></li>
                <li><a href="#" className="text-body-secondary hover:text-primary">Pricing</a></li>
                <li><a href="#" className="text-body-secondary hover:text-primary">FAQs</a></li>
                <li><a href="#" className="text-body-secondary hover:text-primary">About</a></li>
              </ul>
            </div>
           

            <div  className="mb-3 flex flex-col justify-center items-center">
              <h5 className="text-lg font-semibold mb-2">Section</h5>
              <ul className="space-y-2">
                <li><a href="#" className="text-body-secondary hover:text-primary">Home</a></li>
                <li><a href="#" className="text-body-secondary hover:text-primary">Features</a></li>
                <li><a href="#" className="text-body-secondary hover:text-primary">Pricing</a></li>
                <li><a href="#" className="text-body-secondary hover:text-primary">FAQs</a></li>
                <li><a href="#" className="text-body-secondary hover:text-primary">About</a></li>
              </ul>
            </div>


           
          </div>

        </div>

        <div id="cen" className="flex flex-col-reverse md:flex-row justify-center py-4 my-4 border-t" >
          <p className="text-sm text-gray-500 md:order-2 ml-20">
            © 2023 Company, Inc. All rights reserved.
          </p>
          <ul className="flex space-x-3 md:order-1 mt-2 md:mt-0">
            <li>
              <a href="#" className="text-body-emphasis ">

                <FaTwitter className="w-10 h-10" />


              </a>
            </li>
            <li>
              <a href="#" className="text-body-emphasis">
                <FaInstagram className="w-10 h-10" />
              </a>
            </li>
            <li>
              <a href="#" className="text-body-emphasis">
                <FaFacebook className="w-10 h-10" />
              </a>
            </li>
            <li>
              <a href="#" className="text-body-emphasis ">
                <FaLinkedin className="w-10 h-10" />
              </a>
            </li>
          </ul>
        </div>
      </footer>

    </div>
  )
}

export default Footer