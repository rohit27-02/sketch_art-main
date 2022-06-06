/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-page-custom-font */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import Head from 'next/head'
import "react-multi-carousel/lib/styles.css";
import { useState,useEffect } from 'react';
import { Bounce, Fade, Slide } from 'react-reveal';
import {FaFacebookF,FaTwitter,FaInstagram} from "react-icons/fa"
import Pulse from 'react-reveal/Pulse';
import RubberBand from 'react-reveal/RubberBand';
import {BsPinterest} from "react-icons/bs"
import {VscGear} from "react-icons/vsc"
import {VscTools} from "react-icons/vsc"
import {MdLocalParking} from "react-icons/md"
import "react-multi-carousel/lib/styles.css";


export default function Home() {
  const [sw, setsw] = useState(false);
  
  return (
    
    <div >
      <Head>
      <link rel="preconnect" href="https://fonts.googleapis.com"/>
<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin/>
<link href="https://fonts.googleapis.com/css2?family=Lato:wght@700&family=Montserrat:wght@300&family=Poppins:wght@500&display=swap" rel="stylesheet"/>
        <title>Sketch Art</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className='-my-24 '>
       <Fade bottom> <h1 style={{ fontFamily: "'Poppins', sans-serif",lineHeight:1.5,textShadow:"1px 1px black"}} className='absolute my-52 z-20 w-full text-white mx-10 text-7xl drop-shadow-2xl'>A Bright Window is<br></br> a Right Window.</h1></Fade>
        <Pulse><img style={{height:"100vh"}} src="/main.png" alt="" /></Pulse>
      </div>

      <div style={{fontFamily:"'Montserrat', sans-serif",backgroundColor:"#bfb1c4"}} className=''>
      <section className="text-white">
  <div className="container mx-auto flex px-5 md:px-8 2xl:px-10 pt-36 md:pt-40  md:flex-row flex-col items-center">
    <div className='overflow-hidden'>
           <div  className=" hover:transition-transform ease-in duration-500  hover:scale-125 md:max-w-xl 2xl:max-w-2xl w-full mb-10  md:mb-0">
      <Slide left> <img  className="object-cover object-center" alt="hero" src="/1.jpg"/></Slide>
    </div>
    </div>
    <div className="lg:flex-grow md:w-7/12 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left">
     <Slide bottom> <h1 style={{ fontFamily: "'Lato', sans-serif"}} className=" md:text-6xl 2xl:text-7xl text-3xl mb-4 md:mb-6 2xl:mb-10  font- ">Before they sold out
        <br className="hidden lg:inline-block"/>readymade gluten
      </h1></Slide>
      <Slide bottom><p className="mb-8 md:text-base text-sm 2xl:text-lg ">Copper mug try-hard pitchfork pour-over freegan heirloom neutra air plant cold-pressed tacos poke beard tote bag. Heirloom echo park mlkshk tote bag selvage hot chicken authentic tumeric truffaut hexagon try-hard chambray.</p>
      <div className="flex items-start">
        <button style={{color:"#bfb1c4"}}  className="inline-flex  bg-gray-100 font-semibold  border-0 py-2 px-6 focus:outline-none hover:opacity-90  text-lg">Learn More</button>
      </div>
      </Slide>
    </div>
  </div>
</section>
<section className="text-white">
  <div className="container mx-auto flex px-5 md:px-8 2xl:px-10 pt-8 md:py-24 md:flex-row flex-col-reverse items-center">
    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16   flex flex-col md:items-start md:text-left mb-16 md:mb-0 ">
    <Slide bottom> <h1 style={{ fontFamily: "'Lato', sans-serif"}} className=" md:text-6xl 2xl:text-7xl text-3xl mb-4 md:mb-6 2xl:mb-10  font- ">Before they sold out
        <br className="hidden lg:inline-block"/>readymade gluten
      </h1></Slide>
      <Slide bottom><p  className="mb-8   md:text-base text-sm 2xl:text-lg ">Copper mug try-hard pitchfork pour-over freegan heirloom neutra air plant cold-pressed tacos poke beard tote bag. Heirloom echo park mlkshk tote bag selvage hot chicken authentic tumeric truffaut hexagon try-hard chambray.</p>
      <div className="flex justify-start">
        <button  style={{color:"#bfb1c4"}} className=" inline-flex  bg-gray-100 font-semibold border-0 py-2 px-6 focus:outline-none hover:bopacity-90t-lg">Learn More</button>
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

      <div style={{fontFamily:"'Montserrat', sans-serif",backgroundColor:"#ebeaeb",minHeight:100,height:"50vh"}} className='w-full justify-center  flex '>
        <div  className='flex flex-col  my-auto text-center space-y-16 w-full' >
          <h1 style={{ fontFamily: "'Lato', sans-serif"}} className='md:text-2xl text-gray-800 2xl:text-3xl'>BENEFITS OF BEING ASSOCIATED WITH SKETCH ART</h1>
          <div className='flex '>
         <div className='flex md:text-sm 2xl:text-lg font-semibold items-center flex-wrap text-gray-600 justify-center px-2  border-r-2 border-gray-500 '><RubberBand><VscGear className='md:text-6xl md:mx-4 2xl:mx-6 mb-5 2xl:text-5xl'/></RubberBand>Access to the best automation solutions for solar protection and tertiary access.</div>
          <div className='flex md:text-sm 2xl:text-lg font-semibold items-center flex-wrap text-gray-600 justify-center px-2  border-r-2 border-gray-500 '><RubberBand><MdLocalParking className='md:text-6xl md:mx-4  2xl:mx-6 mb-5 2xl:text-5xl'/></RubberBand>Advice on motor and controller choice.Product training and installion training support electrial requirements.</div>
          <div className='flex md:text-sm 2xl:text-lg font-semibold items-center flex-wrap text-gray-600 justify-center px-2   '><RubberBand><VscTools className='md:text-6xl md:mx-4  2xl:mx-6 mb-5 2xl:text-5xl'/></RubberBand>On site engineering support, Marketing support, Troubleshooting And After sales services.</div>
          </div>
        </div>
      </div>

      <div style={{height:"61vh"}} className='bg-white w-full flex justify-center items-center '>
        <Pulse><div className='space-y-10 text-center text-lg'>
          <h1 style={{ fontFamily: "'Poppins', sans-serif",lineHeight:1.5}} className="2xl:text-6xl md:text-5xl text-center ">"If a window of oppourtunity appears,<br></br> don't pull down the shade."</h1>
          <p>—Tom Peters</p>
        </div></Pulse>
      </div>

      <div style={{height:"102vh"}} className='w-full overflow-hidden '>
        <h1 style={{ fontFamily: "'Poppins', sans-serif",lineHeight:1.5,textShadow:"1px 1px black"}} className='absolute my-10  w-full text-center text-white text-5xl'>The difference between style <br></br>and fashion is quality.</h1>
        <img className='w-full' src='/contact.png'></img>

      </div>

      <div style={{backgroundColor:"#bfb1c4",height:"56vh"}} className="w-full grid grid-flow-col">
        <div className='col-span-4 flex justify-center items-center'>
         <div className='flex flex-col text-center justify-center items-center border-r-2 space-y-10 '>
          <h1 style={{fontFamily:"'Montserrat', sans-serif"}} className='font-semibold 2xl:text-2xl px-10'>CONNECT  WITH  US</h1>
          <div className='font-thin flex w-full justify-around'><div className=' w-1/2 flex flex-col justify-center items-center'><FaFacebookF className='text-2xl'/>Facebook</div><div className='w-1/2 flex flex-col justify-center items-center'><FaTwitter className='text-2xl'/>Twitter</div></div>
          <div className='font-thin flex w-full justify-around'><div className=' w-1/2 flex flex-col justify-center items-center'><BsPinterest className='text-2xl'/>Pinterest</div><div className='w-1/2 flex flex-col justify-center items-center'><FaInstagram className='text-2xl'/>Instagram</div></div>
        </div>
          </div>
       
        <div style={{fontFamily:"'Montserrat', sans-serif"}} className='col-span-8 flex justify-center items-center space-y-5 flex-col text-white md:text-sm 2xl:text-base'>
          <h1 className='md:text-2xl 2xl:text-3xl font-bold'>Contact Us</h1>
          <p>Sign up with your email to contact us</p>
          <section className="text-gray-600 body-font relative">
  <div className="container px-5  mx-auto flex ">
    <div className=" bg-white rounded-lg p-8 flex flex-row items-center space-x-5 md:ml-auto w-full mt-10 md:mt-0 relative z-10 shadow-md">
      <div className="relative mb-4">
        <label htmlFor="Full Name" className="leading-7 text-sm text-gray-600">Full Name</label>
        <input id="Full Name" name="Full Name" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200  text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"></input>
      </div>
      <div className="relative mb-4">
        <label htmlFor="email" className="leading-7 text-sm text-gray-600">Email</label>
        <input type="email" id="email" name="email" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
      </div>
      <button className="text-white bg-black border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 rounded text-lg">Send</button>
    </div>
  </div>
</section>
          <p>We respect your privacy</p>
        </div>
      </div>

    </div>
  )
}
