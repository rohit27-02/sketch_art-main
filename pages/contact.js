/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import React from 'react'
import Info from '../models/Info'
import mongoose from "mongoose";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useState } from 'react';
import {GrMapLocation} from "react-icons/gr"
import {AiOutlineFlag} from "react-icons/ai"
import {IoIosPhonePortrait} from "react-icons/io"
import Router from 'next/router';

const Contact = ({ info }) => {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [message, setmessage] = useState("");

  function handleChange(e) {
    if (e.target.id == "name") {
      setname(e.target.value)
    }
    else if (e.target.id == "email") {
      setemail(e.target.value)
    }
    if (e.target.id == "message") {
      setmessage(e.target.value)
    }
  }
  async function submit(e) {
    const data = { name, email, message }
    let res = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/feedback`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      }, body: JSON.stringify(data)
    })
    let response = await res.json()
    console.log(response)
    if (response.success == "success") {
      setemail("")
      setname("")
      setmessage("")
      toast.success('Your feedback has been submitted', {
        position: "top-center",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      setTimeout(() => {
        Router.push("/")
      }, 3000);
    }
  }
  return (<>
  
  <div style={{height:"70vh"}} className="overflow-hidden absolute z-10  top-0 bg-black w-full">
    <img src='/pexels-angela-roma-7319189.jpg' className='object-cover h-full w-full'></img>
  </div>
  <div style={{height:"100vh"}}>
  <div style={{height:"170vh"}} className="flex items-center w-full">
    <div className='flex justify-evenly px-28 w-full'>
       <div className='text-center  flex space-y-5 flex-col justify-center items-center w-1/3'> 
        <GrMapLocation className='text-5xl'/>
        <h1>Our address</h1>
        <p>{info[0].address}</p>
      </div>
       <div className='text-center  flex space-y-5 flex-col justify-center items-center w-1/3'> 
        <AiOutlineFlag className='text-5xl'/>
        <h1>Our email</h1>
        <p>{info[0].email}</p>
      </div>
       <div className='text-center  flex space-y-5 flex-col justify-center items-center w-1/3'>
        <IoIosPhonePortrait className='text-5xl'/>
        <h1>Call us</h1>
        <p>{info[0].phone}</p>
        </div>
    </div>
  </div>
  </div>

<section  style={{ fontFamily: "'Poppins', sans-serif" }} className="text-gray-600 body-font relative">
  <div className="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap">
    <div className="lg:w-1/2 md:w-1/2 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
      
     
    </div>
    <div className="lg:w-1/2 md:w-1/2 bg-white flex space-y-8 flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
      <h2 className="text-gray-900 text-3xl mb-1 font-medium title-font">Leave a comment</h2>
      
      <div className="flex space-x-5 relative mb-4">
      <div >
        <label htmlFor="name" className="leading-7 text-sm text-gray-600">Name</label>
        <input type="text" id="name" name="name" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
      </div>
      <div >
        <label htmlFor="company" className="leading-7 text-sm text-gray-600">company</label>
        <input type="text" id="company" name="company" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
      </div>
      </div>
      <div className="flex space-x-5 relative mb-4">
      <div >
        <label htmlFor="email" className="leading-7 text-sm text-gray-600">Email</label>
        <input type="email" id="email" name="email" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
      </div>
      <div >
        <label htmlFor="number" className="leading-7 text-sm text-gray-600">number</label>
        <input type="tel" id="number" name="number" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
      </div>
      </div>
      <div className="relative mb-4">
        <label htmlFor="message" className="leading-7 text-sm text-gray-600">Message</label>
        <textarea id="message" name="message" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
      </div>
     
      <button className="text-white mx-72 bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">SUMBIT</button>
    </div>
  </div>
</section>

    {/*<section className=" body-font relative">
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <div style={{ fontFamily: "'Poppins', sans-serif" }} className="container px-5 py-20 mx-auto flex sm:flex-nowrap flex-wrap">
        <div className="lg:w-2/3 md:w-1/2 overflow-hidden sm:mr-10 p-10 flex flex-col justify-start relative">
          <div className='self-start space-y-8  '>
            <h1 className='text-3xl font-bold'>Work with us</h1>
            <p className='leading-loose font-thin'>Our help center is fresh and always open for business. <br></br>If you can&apos;t find the answers you&apos;re looking for, <br></br>we&apos;re are here to lend a hand.</p>
          </div>
        </div>
        <div className="bg-white relative flex flex-wrap py-6 ">

          <div className="space-y-4">
            <h2 className="title-font font-bold text-black tracking-widest text-2xl">Email</h2>
            <p><a className="underline underline-offset-4 leading-loose">{info[0].email}</a></p>
            <h2 className="title-font font-bold text-black tracking-widest text-2xl mt-4">Phone</h2>
            <p className="leading-loose">{info[0].phone}</p>
          </div>
        </div>
      </div>

      <div className="">
        <h1 className='absolute text-7xl leading-normal font-bold my-24 mx-10 float-right w-full text-white'>A Right Window <br></br>Is a Bright Window .</h1>
        <img style={{ height: "60vh" }} className='w-full  object-center object-cover ' src='/pexels-savvas-stavrinos-814544.jpg'></img>
      </div>

      <section className="body-font w-full">
        <div className="container px-5  mx-auto flex ">
          <div className=" md:bg-white justify-center md:p-8 flex flex-col md:flex-row  items-center md:space-x-5 md:ml-auto w-full relative z-10 ">
            <div className="relative mb-4">
              <label htmlFor="Full Name" className="leading-7 text-lg text-gray-600">Name</label>
              <input type="text" id="Full Name" name="Full Name" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-lg md:text-base outline-none text-gray-700 py-1 px-3 md:leading-8 transition-colors duration-200 ease-in-out" />
            </div>
            <div className="relative mb-4">
              <label htmlFor="email" className="leading-7 text-lg text-gray-600">Email</label>
              <input type="email" id="email" name="email" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-lg md:text-base outline-none text-gray-700 py-1 px-3 md:leading-8 transition-colors duration-200 ease-in-out" />
            </div>
            <div className="relative mb-4">
              <label htmlFor="phone" className="leading-7 text-lg text-gray-600">Phone</label>
              <input type="tel" id="phone" name="phone" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-lg md:text-base outline-none text-gray-700 py-1 px-3 md:leading-8 transition-colors duration-200 ease-in-out" />
            </div>
            <button className="text-white bg-black border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 rounded text-lg md:text-lg">Send</button>
          </div>
        </div>
      </section>
     
    </section>*/}
    </>
  )
}
export async function getStaticProps(context) {
  if (!mongoose.connections[0].readyState) {
    await mongoose.connect(process.env.MONGO_URI)
  }
  let info = await Info.find()
  return {
    props: { info: JSON.parse(JSON.stringify(info)) },
  }
}

export default Contact