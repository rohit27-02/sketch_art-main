/* eslint-disable @next/next/no-page-custom-font */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import Head from 'next/head'
import "react-multi-carousel/lib/styles.css";
import { useState,useEffect } from 'react';
import Zoom from 'react-reveal/Zoom';
import { Bounce, Slide } from 'react-reveal';
import VisibilitySensor from 'react-visibility-sensor';
import {FaFacebookF,FaTwitter,FaInstagram} from "react-icons/fa"
import {BsPinterest} from "react-icons/bs"
export default function Home() {
  const [sw, setsw] = useState(false);
  
  return (
    
    <div >
      <Head>
      <link rel="preconnect" href="https://fonts.googleapis.com"/>
<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin/>
<link href="https://fonts.googleapis.com/css2?family=Lato:wght@700&family=Montserrat:wght@300&display=swap" rel="stylesheet"/>
        <title>Sketch Art</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className='-my-24'>
        <img src="/main.png" alt="" />
      </div>

      <div style={{fontFamily:"'Montserrat', sans-serif",backgroundColor:"#bfb1c4"}} className=''>
      <section className="text-white">
  <div className="container mx-auto flex px-5 md:px-8 2xl:px-10 pt-36 md:pt-40  md:flex-row flex-col items-center">
    <div className='overflow-hidden'>
           <div className=" hover:transition-transform ease-in duration-500  hover:scale-125 md:max-w-xl 2xl:max-w-2xl w-full mb-10  md:mb-0">
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

      <div style={{backgroundColor:"#ebeaeb",minHeight:100,height:"41vh"}} className='w-full '>
        <div className='flex'>
        </div>
      </div>

      <div style={{height:"61vh"}} className='bg-white w-full '></div>

      <div style={{height:"102vh"}} className='w-full bg-black'></div>

      <div style={{backgroundColor:"#bfb1c4",height:"56vh"}} className="w-full grid grid-flow-col">
        <div className='col-span-4'>
          <h1>CONNECT WITH US</h1>
          <FaFacebookF/>
          <FaTwitter/>
          <BsPinterest/>
          <FaInstagram/>
        </div>
        <div className='col-span-8'>
          <h1>Contact Us</h1>
          <p>Sign up with your email to contact us</p>
          <form></form>
          <p>We respect your privacy</p>
        </div>
      </div>

    </div>
  )
}
