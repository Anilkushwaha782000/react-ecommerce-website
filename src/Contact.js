import React from 'react'
import { useState, useEffect, useRef } from 'react';
import Footer from './Footer'
import News from './Newsletter'
import { gsap } from 'gsap';
import Navbar from './Navbar';
const clipPathStyle = {
  clipPath: 'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)'
};
const Contact = () => {
  const formRef = useRef(null);
  const [firstName, setfirstName] = useState("");
  const [lastName, setlastName] = useState("");
  const [contact, setContact] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [company, setCompany] = useState("");
  const [submit, setSubmit] = useState(false);
  const [visibleform, setVisibleform] = useState(true);
  const form = useRef();



  const handleSubmit = async (event) => {
    event.preventDefault();
    setSubmit(true);
    setVisibleform(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
    
    const formData = new FormData(event.target);

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
  }

  const handleOnchange = (e) => {
    console.log(e.target.value);
    setlastName(e.target.value);
    setEmail(e.target.value);
    setMessage(e.target.value);
    setContact(e.target.value);
    setCompany(e.target.value);
  }
  const handleOnNamechange = (e) => {
    setfirstName(e.target.value);
  }

  useEffect(() => {
    gsap.fromTo(
      '#fanim',
      { opacity: 0, },
      { opacity: 1, duration: 1, delay: 0.5 }
    );
  }, []);
  return (
    <>
    <Navbar/>
      <div style={{ marginTop: "" }}>


        <div className=" px-6 py-24 sm:py-32 lg:px-8 " style={{ backgroundColor: "#ced7ed" }}>
          <div className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]" aria-hidden="true">
            <div className="relative left-1/2 -z-10 aspect-[1155/678] w-[36.125rem] max-w-none -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-40rem)] sm:w-[72.1875rem]" style={clipPathStyle} ></div>
          </div>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Contact Me</h2>

          </div>
          <form ref={form} id="fanim" onSubmit={handleSubmit} className="mx-auto mt-16 max-w-2xl sm:mt-20" style={{ border: "1px solid #23234b", backgroundColor: "floralwhite", display: visibleform ? "block" : "none" }}>
            <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2" style={{ margin: "20px" }}>
              <div>
                <label for="first-name" className="block text-sm font-semibold leading-6 text-gray-900">First name</label>
                <div className="mt-2.5">
                  <input onChange={handleOnNamechange} type="text" name="first-name" id="first-name" autocomplete="given-name" className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                </div>
              </div>
              <div>
                <label for="last-name" className="block text-sm font-semibold leading-6 text-gray-900">Last name</label>
                <div className="mt-2.5">
                  <input onChange={handleOnchange} type="text" name="last-name" id="last-name" autocomplete="family-name" className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                </div>
              </div>
              <div className="sm:col-span-2">
                <label for="company" className="block text-sm font-semibold leading-6 text-gray-900">Company</label>
                <div className="mt-2.5">
                  <input onChange={handleOnchange} type="text" name="company" id="company" autocomplete="organization" className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                </div>
              </div>
              <div className="sm:col-span-2">
                <label for="email" className="block text-sm font-semibold leading-6 text-gray-900">Email</label>
                <div className="mt-2.5">
                  <input onChange={handleOnchange} type="email" name="email" id="email" autocomplete="email" className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                </div>
              </div>
              <div className="sm:col-span-2">
                <label for="phone-number" className="block text-sm font-semibold leading-6 text-gray-900">Phone number</label>
                <div className="relative mt-2.5">

                  <input onChange={handleOnchange} type="tel" name="phone-number" id="phone-number" autocomplete="tel" className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                </div>
              </div>
              <div className="sm:col-span-2">
                <label for="message" className="block text-sm font-semibold leading-6 text-gray-900">Message</label>
                <div className="mt-2.5">
                  <textarea onChange={handleOnchange} name="message" id="message" rows="4" className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"></textarea>
                </div>
              </div>

            </div>
            <div className="" style={{ margin: "15px" }}>
              <button onSubmit={handleSubmit} type="submit" className="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Let's talk</button>
            </div>

          </form>
          {submit && (
            <div style={{ marginTop: '20px', textAlign: 'center', backgroundColor: '#f0f0f0', padding: '10px', borderRadius: '8px' }}>
              <p style={{ fontSize: '18px', fontWeight: 'bold', color: '#4CAF50' }}>
                {firstName} form has been submitted successfully!
              </p>
              <p style={{ fontSize: '16px', color: '#333' }}>Thanks for your interest!</p>
            </div>
          )}
        </div>

      </div>
      <div style={{ marginTop: "50px" }}>
        <News />
      </div>

      <div >
        <Footer />
      </div>
    </>
  )
}

export default Contact