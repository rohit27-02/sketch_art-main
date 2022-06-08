import React from 'react'
import Info from '../models/Info'
import mongoose from "mongoose";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useState } from 'react';
import Router from 'next/router';

const Contact = ({info}) => {
 const [name, setname] = useState("");
 const [email, setemail] = useState("");
 const [message, setmessage] = useState("");

 function handleChange(e){
   if(e.target.id=="name"){
     setname(e.target.value)
   }
   else if(e.target.id=="email"){
     setemail(e.target.value)
   }
   if(e.target.id=="message"){
     setmessage(e.target.value)
   }
 }
 async function submit(e){
   const data={name,email,message}
   let res = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/feedback`, {
    method: "POST",
  headers: {
    "Content-Type": "application/json"
  }, body: JSON.stringify(data)
})
let response = await res.json()
console.log(response)
if(response.success=="success"){
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
  return (
    <section className="text-gray-600 body-font relative">
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
  <div className="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap">
    <div id='map' style={{backgroundImage:`url("https://i.ibb.co/g9ZXHZR/Home-page-Screen-1-image3.png")`}} className="lg:w-2/3 md:w-1/2  bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
      
      <div className="bg-white relative flex flex-wrap py-6 rounded shadow-md">
        <div className="lg:w-1/2 px-6">
          <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">ADDRESS</h2>
          <p className="mt-1">{info[0].address}</p>
        </div>
        <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
          <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">EMAIL</h2>
          <a className="text-yellow-500 leading-relaxed">{info[0].email}</a>
          <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4">PHONE</h2>
          <p className="leading-relaxed">{info[0].phone}</p>
        </div>
      </div>
    </div>
    <div className="lg:w-1/3 md:w-1/2 bg-white flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
      <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">Feedback</h2>
      <p className="leading-relaxed mb-5 text-gray-600">How can we help you</p>
      <div className="relative mb-4">
        <label htmlFor="name" className="leading-7 text-sm text-gray-600">Name</label>
        <input onChange={(e)=>handleChange(e)} type="text" id="name" name="name" className="w-full bg-white rounded border border-gray-300 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
      </div>
      <div className="relative mb-4">
        <label htmlFor="email" className="leading-7 text-sm text-gray-600">Email</label>
        <input onChange={(e)=>handleChange(e)} type="email" id="email" name="email" className="w-full bg-white rounded border border-gray-300 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
      </div>
      <div className="relative mb-4">
        <label htmlFor="message" className="leading-7 text-sm text-gray-600">Message</label>
        <textarea onChange={(e)=>handleChange(e)} id="message" name="message" className="w-full bg-white rounded border border-gray-300 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
      </div>
      <button style={{backgroundColor:"#bfb1c4"}}  onClick={(e)=>{submit(e)}} className="text-white  border-0 py-2 px-6 focus:outline-none hover:opacity-90 rounded text-lg">Send</button>
      <p className="text-xs text-center text-gray-500 mt-3">We are happy to help you.</p>
    </div>
  </div>
</section>
  )
}
export async function getStaticProps(context) {
  if (!mongoose.connections[0].readyState) {
    await mongoose.connect(process.env.MONGO_URI)
  }
let info = await Info.find()
  return {
    props: {info: JSON.parse(JSON.stringify(info)) },
  }
}

export default Contact