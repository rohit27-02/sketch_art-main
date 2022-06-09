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

    <div style={{height:"170vh"}}>

      <div className='overflow-hidden sticky top-0 bg-black w-full'>
  
        <Pulse><video style={{height:"100vh"}} className=" object-cover object-center md:object-fill w-full" src="/main2.mp4" autoPlay muted loop /></Pulse>
      </div>
      <div style={{height:"70vh",backgroundColor:"black"}} className="absolute  top-0  w-full">
        <div className=' mt-20  flex flex-col'>
        <div style={{height:65,marginTop:90}} className='bg-black z-20 w-full absolute '></div>
        <div style={{height:65,marginTop:210}} className='bg-black z-20 w-full absolute '></div>
        <div style={{height:65,marginTop:330}} className='bg-black z-20 w-full absolute '></div>
        <p  className=' text-6xl leading-loose effect text-center text-white  font-extrabold'><i>" IF A <span style={{color:"#bfb1c4"}}>WINDOW</span> OF "</i></p>
        <p  className=' text-6xl leading-loose text-center text-white  font-extrabold'><i><span style={{color:"#bfb1c4"}}> OPPURTUNITY</span> APPEARS, DON'T </i> </p>
        <p  className=' text-6xl leading-loose text-center  text-white  font-extrabold'><i> PULL DOWN THE <span style={{color:"#bfb1c4"}}>SHADES</span></i></p>
      </div>
      </div>
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

     

      <div style={{height:"61vh"}} className='bg-white w-full flex justify-center items-center '>
        <Pulse><div className='space-y-10 text-center text-lg'>
          <h1 style={{ fontFamily: "'Poppins', sans-serif",lineHeight:1.5}} className="2xl:text-6xl md:text-5xl text-4xl text-center ">"If a window of oppourtunity appears,<br></br> don't pull down the shade."</h1>
          <p>—Tom Peters</p>
        </div></Pulse>
      </div>

      <Slide bottom><div  className='w-full  overflow-hidden '>
        <h1 style={{ fontFamily: "'Poppins', sans-serif",lineHeight:1.5,textShadow:"0.5px 0.5px black"}} className='absolute my-10 z-20  w-full ml-4 md:text-center text-white text-5xl md:text-6xl 2xl:text-7xl'>The difference between style <br></br>and fashion is quality.</h1>
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
          <div className='font-thin flex w-full justify-around'><div className=' w-1/2 flex flex-col justify-center items-center '><FaFacebookF className='2xl:text-3xl md:text-2xl  hover:animate-pulse cursor-pointer'/>Facebook</div><div className='w-1/2 flex flex-col justify-center items-center '><FaTwitter className='2xl:text-3xl md:text-2xl  hover:animate-pulse cursor-pointer'/>Twitter</div></div>
          <div className='font-thin flex w-full justify-around '><div className=' w-1/2 flex flex-col justify-center items-center '><BsPinterest className='2xl:text-3xl md:text-2xl  hover:animate-pulse cursor-pointer'/>Pinterest</div><div className='w-1/2 flex flex-col justify-center items-center '><FaInstagram className='2xl:text-3xl md:text-2xl  hover:animate-pulse cursor-pointer'/>Instagram</div></div>
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
        <input id="Full Name" name="Full Name" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-sm md:text-base outline-none text-gray-700 py-1 px-3 md:leading-8 transition-colors duration-200 ease-in-out"/>
      </div>
      <div className="relative mb-4">
        <label htmlFor="email" className="leading-7 text-sm text-gray-600">Email</label>
        <input type="email" id="email" name="email" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-sm md:text-base outline-none text-gray-700 py-1 px-3 md:leading-8 transition-colors duration-200 ease-in-out"/>
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
