/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-page-custom-font */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */

import "react-multi-carousel/lib/styles.css";
import { useState,useEffect, useRef } from 'react';
import { Bounce, Fade, Slide } from 'react-reveal';
import {FaFacebookF,FaTwitter,FaInstagram} from "react-icons/fa"
import Pulse from 'react-reveal/Pulse';
import RubberBand from 'react-reveal/RubberBand';
import "react-multi-carousel/lib/styles.css";
import {VscGear} from "react-icons/vsc"
import {VscTools} from "react-icons/vsc"
import {BsWhatsapp} from "react-icons/bs"
import {CgMail} from "react-icons/cg"
import {MdLocalParking} from "react-icons/md"
import "react-multi-carousel/lib/styles.css";
import { auto } from '@popperjs/core';
import Link from "next/link";



export default function Home() {

  const [sw, setsw] = useState(false);
  const [whatsapp, setwhatsapp] = useState(false);

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 400 },
      items: 1,
      slidesToSlide: 1
    }
  };

 
 const show=()=>{
  setwhatsapp(true)
 }
 const off=()=>{
  setwhatsapp(false)
 }
  
  return (
    
    <div >
     



<div onMouseLeave={off} onMouseEnter={show} className=" fixed bottom-8 right-12 z-50 cursor-pointer text-white bg-green-500 rounded-full transition transform  w-auto hover:w-52 duration-1000 delay-500 items-center  flex justify-end">{whatsapp && <a className="px-3 font-semibold" href="//api.whatsapp.com/send?phone=+919920223462&text=hii" title="Share on whatsapp">+91 992 022 3462</a>}<BsWhatsapp  className='text-white p-2 rounded-3xl z-50 text-5xl '/></div>




<div style={{height:"85vh"}} className=''>
          <div   style={{height:"90vh"}} className=' w-full overflow-hidden object-cover top-0 absolute '>

         <h1 style={{fontFamily:"'poppins', sans-serif"}} className='absolute md:top-56 top-28 text-center w-full font-extrabold z-20 2xl:text-7xl md:text-6xl text-gray-200  '>Pushing Limits <br></br> For Your Luxuries</h1>
         <Slide bottom><div  className="bg-black w-full h-full absolute top-0 bg-opacity-40 z-10"></div><img className="h-full w-full object-cover"  src='/Image for Sketch Art Home screen 3PNG.png'></img></Slide>
          </div>
         
      </div>

   

      <div style={{fontFamily:"'Montserrat', sans-serif",backgroundColor:"#bfb1c4"}} className=' md:-mt-12 2xl:-mt-10'>
      <section className="text-white">
  <div className="container mx-auto flex px-5  2xl:px-10 pt-36 md:pt-40 top-0 md:flex-row flex-col items-center">
    <div className='overflow-hidden'>
           <div  className=" hover:transition-transform ease-in duration-500  hover:scale-125 md:max-w-xl 2xl:max-w-2xl w-full mb-10  md:mb-0">
      <Slide left> <img  className="object-cover object-center" alt="hero" src="/1.jpg"/></Slide>
    </div>
    </div>
    <div className="lg:flex-grow md:w-7/12 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left">
     <Slide bottom> <h1 style={{ fontFamily: "'Lato', sans-serif"}} className=" md:text-6xl 2xl:text-7xl text-3xl mb-4 md:mb-6 2xl:mb-10  font- ">Benefits of motorized
         window blinds
      </h1></Slide>
      <Slide bottom><p className="mb-8 md:text-base text-sm 2xl:text-lg ">Window blinds are a common choice for homeowners that want to cover their window to block light or protect privacy. They are sleek in appearance, easy to maintain and quite durable - making them ideal for modern homes.
But shouldn't you expect your window treatments to do more than just open and close?
Motorized window blinds perform the same purpose of traditional window blinds. These blinds have added functions that make them a valuable addition to your home's interior design.
</p>
      <div className="flex items-start">
        <Link style={{color:"#bfb1c4"}}  className="inline-flex  bg-gray-100 font-semibold  border-0 py-2 px-6 focus:outline-none hover:opacity-90  text-lg" href="/motorizedblinds">Learn More</Link>
      </div>
      </Slide>
    </div>
  </div>
</section>
<section className="text-white">
  <div className="container mx-auto flex px-5 md:px-8 2xl:px-10 pt-8 md:py-24 md:flex-row flex-col-reverse items-center">
    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16   flex flex-col md:items-start md:text-left mb-16 md:mb-0 ">
    <Slide bottom> <h1 style={{ fontFamily: "'Lato', sans-serif"}} className=" md:text-6xl 2xl:text-7xl text-3xl mb-4 md:mb-6 2xl:mb-10  font- ">How to choose
        <br className="hidden lg:inline-block"/> your blinds?
      </h1></Slide>
      <Slide bottom><p  className="mb-8   md:text-base text-sm 2xl:text-lg "> Selecting window treatments for a specific room is all about assessing the way the space functions. </p>
      <div className="flex justify-start">
        <Link  style={{color:"#bfb1c4"}} className=" inline-flex  bg-gray-100 font-semibold border-0 py-2 px-6 focus:outline-none hover:opacity-90 text-lg" href="/motorizedblinds#second">Learn More</Link>
      </div>
      </Slide>
    </div>
    <div className="overflow-hidden">
    <div className="hover:transition-transform ease-in duration-500  hover:scale-125 flex justify-end mb-10 md:mb-0  md:max-w-xl 2xl:max-w-2xl w-full">
     <Slide right> <img className="object-cover object-center" alt="hero" src="/2.jpg"/></Slide>
    </div>
    </div>
  </div>
</section>
      </div>

     

      <div style={{height:"61vh"}} className='bg-white w-full flex justify-center items-center '>
        <Pulse><div className='space-y-10 text-center text-lg'>
          <h1 style={{ fontFamily: "'Poppins', sans-serif",lineHeight:1.5}} className="2xl:text-6xl md:text-5xl text-4xl text-center ">"If a window of oppourtunity appears,<br></br> don't pull down the shade."</h1>
          <p>—Tom Peters</p>
        </div></Pulse>
      </div>

      <Slide bottom><div  className='w-full  overflow-hidden '>
       {/**  <h1 style={{ fontFamily: "'Poppins', sans-serif",lineHeight:1.5,textShadow:"0.5px 0.5px black"}} className='absolute my-10 z-20  w-full ml-4 md:text-center text-white text-5xl md:text-6xl 2xl:text-7xl'>You imagine <br></br>We create.</h1>**/}
        <img style={{height:"102vh"}} className='w-full object-cover' src='/contact.png'></img>

      </div></Slide>
      <div style={{fontFamily:"'Montserrat', sans-serif",backgroundColor:"#ebeaeb",minHeight:100,height:"50vh"}} className='w-full justify-center  flex '>
        <div  className='flex flex-col  my-auto text-center space-y-8 md:space-y-16 w-full' >
          <h1 style={{ fontFamily: "'Lato', sans-serif"}} className='md:text-2xl mx-2 text-gray-800 2xl:text-3xl'>BENEFITS OF BEING ASSOCIATED WITH SKETCH ART</h1>
          <div className='flex flex-col md:flex-row'>
         <div className='flex md:text-sm text-xs 2xl:text-lg font-semibold items-center flex-wrap text-gray-600 justify-center px-2  border-r-2 border-gray-500 '><RubberBand><VscGear className='md:text-6xl md:mx-4 2xl:mx-6 mb-5 2xl:text-7xl text-3xl'/></RubberBand>Access to the best automation solutions for solar protection and tertiary access.</div>
          <div className='flex md:text-sm text-xs 2xl:text-lg font-semibold items-center flex-wrap text-gray-600 justify-center px-2  border-r-2 border-gray-500 '><RubberBand><MdLocalParking className='md:text-6xl md:mx-4  2xl:mx-6 mb-5 2xl:text-7xl text-3xl'/></RubberBand>Advice on motor and controller choice.Product training and installion training support electrial requirements.</div>
          <div className='flex md:text-sm text-xs 2xl:text-lg font-semibold items-center flex-wrap text-gray-600 justify-center px-2   '><RubberBand><VscTools className='md:text-6xl md:mx-4  2xl:mx-6 mb-5 2xl:text-7xl text-3xl'/></RubberBand>On site engineering support, Marketing support, Troubleshooting And After sales services.</div>
          </div>
        </div>
      </div>

      <div style={{backgroundColor:"#bfb1c4",height:"56vh"}} className="w-full grid content md:grid-flow-col">
        <div className='md:col-span-4 flex justify-center  items-center'>
         <div className='flex flex-col text-center border-b-2 pb-8 md:pb-0 md:border-none justify-center items-center md:border-r-2 space-y-6 md:space-y-10 '>
          <h1 style={{fontFamily:"'Montserrat', sans-serif"}} className='font-semibold 2xl:text-2xl text-lg px-10'>CONNECT  WITH  US</h1>
          <div className='font-thin flex w-full justify-around'><div className=' w-1/2 flex flex-col justify-center items-center '><FaFacebookF className='2xl:text-3xl md:text-2xl  hover:animate-pulse cursor-pointer'/>Facebook</div><div className='w-1/2 flex flex-col justify-center items-center '><CgMail className='2xl:text-3xl md:text-2xl  hover:animate-pulse cursor-pointer'/>Gmail</div></div>
          <div className='font-thin flex w-full justify-around '><div className=' w-1/2 flex flex-col justify-center items-center '><BsWhatsapp className='2xl:text-3xl md:text-2xl  hover:animate-pulse cursor-pointer'/>Whatsapp</div><div className='w-1/2 flex flex-col justify-center items-center '><FaInstagram className='2xl:text-3xl md:text-2xl  hover:animate-pulse cursor-pointer'/>Instagram</div></div>
        </div>
          </div>
       
        <div style={{fontFamily:"'Montserrat', sans-serif"}} className='md:col-span-8 flex justify-center items-center md:space-y-5 space-y-2 flex-col text-white text-xs md:text-sm 2xl:text-base'>
          <h1 className='md:text-2xl 2xl:text-3xl text-xl font-bold'>Contact Us</h1>
          <p>Sign up with your email to contact us</p>
          <section className="text-gray-600 body-font relative">
  <div className="container px-5  mx-auto flex ">
    <div className=" md:bg-white rounded-lg md:p-8 flex flex-col md:flex-row  items-center md:space-x-5 md:ml-auto w-full relative z-10 md:shadow-md">
      <div className="relative mb-4">
        <label htmlFor="Full Name" className="leading-7 text-sm text-gray-600">Name</label>
        <input type="text" id="Full Name" name="Full Name" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-sm md:text-base outline-none text-gray-700 py-1 px-3 md:leading-8 transition-colors duration-200 ease-in-out"/>
      </div>
      <div className="relative mb-4">
        <label htmlFor="email" className="leading-7 text-sm text-gray-600">Email</label>
        <input type="email" id="email" name="email" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-sm md:text-base outline-none text-gray-700 py-1 px-3 md:leading-8 transition-colors duration-200 ease-in-out"/>
      </div>
      <div className="relative mb-4">
        <label htmlFor="phone" className="leading-7 text-sm text-gray-600">Phone</label>
        <input type="tel" id="phone" name="phone" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-sm md:text-base outline-none text-gray-700 py-1 px-3 md:leading-8 transition-colors duration-200 ease-in-out"/>
      </div>
      <button className="text-white bg-black border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 rounded text-sm md:text-lg">Send</button>
    </div>
  </div>
</section>
          <p>We respect your privacy</p>
        </div>
      </div>

    </div>
  )
}
