/* eslint-disable @next/next/no-page-custom-font */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import React from 'react'
import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";


import { Fade, LightSpeed, Slide, Zoom } from 'react-reveal';
const About = () => {

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1300 },
      items: 6,
      slidesToSlide: 1 // optional, default to 1.
    },
    14:{
      breakpoint: { max: 1300, min: 1024 },
      items: 6,
      slidesToSlide: 1 
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 5,
      slidesToSlide: 2 // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 5,
      slidesToSlide: 1 // optional, default to 1.
    }
  };
  
  return (
  
    <div style={{fontFamily: "'Roboto Slab', serif"}}>
     
      <div style={{height:"85vh"}} className="w-full">
      <div style={{height:"90vh"}} className='w-full overflow-hidden object-cover top-0 absolute '>
      <div className='bg-black w-full h-full absolute top-0 bg-opacity-40 z-30'></div>
      <h1 style={{fontFamily: "'Fjalla One', sans-serif",letterSpacing:1.2,fontSize:"4.75vw",top:"15vw"}} className='2xl:text-7xl text-6xl font-bold w-full text-center absolute  z-30 text-gray-200  '>YOU IMAGINE, WE CREATE</h1>
       <Slide bottom><img  className='h-full w-full object-cover' src='/About us image.png'></img></Slide >
      
      </div>
        </div>


      <div style={{padding:"10vw 3.75vw"}} className='text-center md:py-32 py-8 px-8 md:flex-row flex flex-col justify-center items-center '>
      <div   className='text-left ml-10  text-slate-700  md:flex-row flex flex-col justify-center items-center '>
      <Slide left> <div  > <h1 style={{fontFamily: "'Fjalla One', sans-serif",fontSize:"2.8125vw"}} className='text-4xl  font-bold'>GLOBAL LEADING MANUFACTURER</h1>
        <p  style={{fontSize:"1.25vw",padding:"2.1875vw 0vw",marginRight:"3.75vw",lineHeight:"1.9vw"}} className=' py-7 leading-relaxed mr-12  md:text-base 2xl:text-xl  font-thin'>With an industry experience of over 25 years, Dooya private limited is the leading manufacturer and importer of Window Blinds and Accessories, Motorized Blinds and Interior Flims in the country catering to clients across the globe. It is also the marketing partner for Dooya Motors based in China. Keen on widening its portfolio, Dooya is open to expanding its imports and exports as and when opportunities present themselves.

Dooya strives for excellence by providing customized solutions. An expansive range of world-class home fashion products while providing premium customer services that include global sourcing, quality assurance, logistics and finance.</p>
<div  className=' '><a href={"/contact"} style={{backgroundColor:"#bfb1c4",fontFamily:`"Montserrat",sans-serif`,fontSize:"1.4vw",padding:"0.625vw 1.875vw"}} className='text-lg   hover:opacity-80  py-2 px-6  text-white'>Contact Us</a></div>
</div></Slide>
      </div>
        <Slide right><img  style={{margin:"0vw 2.5vw ",padding:"1vw",width:"39vw",height:"26.7vw"}} className="mx-8 p-3" src='https://media.istockphoto.com/photos/little-boy-opening-the-roller-blinds-in-the-morning-picture-id1178700357?k=20&m=1178700357&s=612x612&w=0&h=zZMixHxDvjJj4ce_fEjPEFE9ReFw5xabNAPh3Rypdxo='></img></Slide>
      </div>
      <div style={{backgroundColor:"#bfb1c4",padding:"3.125vw 0vw"}} className='flex flex-col md:flex-row text-white py-10 justify-around items-center leading-10  '>
<img className='w-6/12  ' src='/pexels-max-vakhtbovych-6980665.jpg'></img>
<div className=''><h1  style={{fontFamily: "'Fjalla One', sans-serif",fontSize:"2.8125vw"}} className='font-bold  text-4xl'>OUR CAPABILITIES</h1>
<ul style={{fontSize:"1.55vw",margin:"3.75vw 0vw",lineHeight:"3.4vw"}} className='list-disc text-xl  my-12 '>
  <LightSpeed><li>Team of expert inspectors</li></LightSpeed>
  <LightSpeed><li>Team of experienced procurement agents</li></LightSpeed>
  <LightSpeed><li>Reliable vendor base</li></LightSpeed>
  <LightSpeed><li>Competitive prices </li></LightSpeed>
  <LightSpeed><li>Wide Distribution Network</li></LightSpeed>
  <LightSpeed><li>Timely deliver of consignment</li></LightSpeed>
</ul></div>
      </div>

      <div style={{height:"50vh"}} className="flex mt-20 justify-center">
      <video className=" w-11/12 object-cover" src="/main4.mp4" autoPlay muted loop />
      <h1  style={{fontFamily: "'Fjalla One', sans-serif",textShadow:"1px 1px black",fontSize:"3.75vw",margin:"7.5vw 0vw",padding:"0vw 12.5vw",lineHeight:"5vw"}} className='absolute w-full  text-white text-5xl text-center uppercase px-40 my-24'>Sketch arts strives for excellence by providing customized solutions.</h1>
      </div>

      
    

      <div style={{height:"40vh"}} >
        <div style={{margin:"2.5vw 0vw",padding:"0vw 1vw"}} className=' flex items-center px-3 my-8 '>
          <div style={{paddingTop:"3.75vw",marginRight:"1vw"}} className='absolute  pt-12 mr-3'><img src="/Assest for Sketch Art-09.png"></img></div>
          <div style={{marginLeft:"0.5vw"}} className='w-2/12 scale-75 '><Slide bottom><img className='object-scale-down' src="/Assest for Sketch Art-08.png"></img></Slide></div>
          <div className='w-2/12 scale-75'><Slide top><img className='object-scale-down' src="/Assest for Sketch Art-07.png"></img></Slide></div>
          <div className='w-2/12 scale-75'><Slide bottom><img className='object-scale-down' src="/Assest for Sketch Art-06.png"></img></Slide></div>
          <div className='w-2/12 scale-75'><Slide top><img className='object-scale-down' src="/Assest for Sketch Art-05.png"></img></Slide></div>
          <div className='w-2/12 scale-75'><Slide bottom><img className='object-scale-down' src="/Assest for Sketch Art-04.png"></img></Slide></div>
          <div className='w-2/12 scale-75'><Slide top><img className='object-scale-down' src="/Assest for Sketch Art-03.png"></img></Slide></div>
          <div className='w-2/12 scale-75'><Slide bottom><img className='object-scale-down' src="/Assest for Sketch Art-02.png"></img></Slide></div>
           </div>
           </div>
    
     
      <VisibilitySensor partialVisibility offset={{ bottom: 200 }}>
        {({ isVisible }) => (
           <div style={{backgroundColor:"#ebeaeb",height:"32vh"}} className='w-full md:h-52 mt-16 h-96 '>
           {isVisible ?<div style={{backgroundColor:"#bfb1c4",fontFamily: "'poppins', sans-serif",fontSize:"2.8125vw"}} className='h-full flex flex-col md:flex-row  text-white items-center justify-evenly'> <CountUp
           className=' font-bold '
       start={0}
       end={20}
       duration={2}
       separator=" "
       suffix='+ Years'
     
       
     ></CountUp>
           <CountUp
           className=' font-bold '
       start={0}
       end={50}
       duration={2}
       separator=" "
       suffix='+ Experts'
     
       
     ></CountUp>
           <CountUp
           className=' font-bold '
       start={0}
       end={5000}
       duration={2}
       separator=", "
       suffix='+ Projects'
     
       
     ></CountUp>
           <CountUp
           className=' font-bold '
       start={0}
       end={2000}
       duration={2}
       separator=" ,"
       suffix='+ Clients'
     
       
     ></CountUp></div>:null}
           </div>
        )}
      </VisibilitySensor>

      <div style={{marginTop:"3.7vw",padding:"1.5vw 10vw",}}  className=' text-black mt-12 px-32 text-4xl font-bold text-center py-5  bg-white'>
        <h1  style={{fontFamily: "'Fjalla One', sans-serif",fontSize:"2.8125vw",marginBottom:"5vw"}} className="text-gray-700">OUR PRESTIGIOUS CLIENTS</h1>
     

      <Carousel
  swipeable={false}
  draggable={false}
  showDots={false}
  responsive={responsive}
  ssr={true} // means to render carousel on server-side.
  infinite={true}
  autoPlay={true}
  autoPlaySpeed={2500}
  keyBoardControl={true}
  transitionDuration={1000}
  containerClass="carousel-container"
  removeArrowOnDeviceType={["tablet", "mobile","desktop","14"]}
  dotListClass="custom-dot-list-style"
  itemClass="carousel-item-padding-40-px"
>
  <div style={{margin:"0vw 3vw",height:"7.5vw",width:"13.125vw"}}  className='flex justify-center items-center '> <img style={{height:"10vw"}} className='object-contain' src='/Aditya Birla Group.png'></img></div>
  <div style={{margin:"0vw 3vw",height:"7.5vw",width:"13.125vw"}}  className='flex justify-center items-center '> <img style={{height:"10vw"}} className='object-contain' src='/Barbeque.png'></img></div>
  <div style={{margin:"0vw 3vw",height:"7.5vw",width:"13.125vw"}}  className='flex justify-center items-center '> <img style={{height:"10vw"}} className='object-contain' src='/Hindustani.png'></img></div>
  <div style={{margin:"0vw 3vw",height:"7.5vw",width:"13.125vw"}}  className='flex justify-center items-center '> <img style={{height:"10vw"}} className='object-contain' src='/intelent impact.png'></img></div>
  <div style={{margin:"0vw 3vw",height:"7.5vw",width:"13.125vw"}}  className='flex justify-center items-center '> <img style={{height:"10vw"}} className='object-scale-down scale-75' src='/jio.png'></img></div>
  <div style={{margin:"0vw 3vw",height:"7.5vw",width:"13.125vw"}}  className='flex justify-center items-center '> <img style={{height:"10vw"}} className='object-contain' src='/Kalpa Taru.png'></img></div>
  <div style={{margin:"0vw 3vw",height:"7.5vw",width:"13.125vw"}}  className='flex justify-center items-center '> <img style={{height:"10vw"}} className='object-contain scale-95' src='/podar.png'></img></div>
  <div style={{margin:"0vw 3vw",height:"7.5vw",width:"13.125vw"}}  className='flex justify-center items-center '> <img style={{height:"10vw"}} className='object-contain' src='/Raymond.png'></img></div>
  <div style={{margin:"0vw 3vw",height:"7.5vw",width:"13.125vw"}}  className='flex justify-center items-center '> <img style={{height:"10vw"}} className='object-contain' src='/Rustomjee.png'></img></div>
  <div style={{margin:"0vw 3vw",height:"7.5vw",width:"13.125vw"}}  className='flex justify-center items-center '> <img style={{height:"10vw"}} className='object-contain' src='/citi bank.png'></img></div>
  <div style={{margin:"0vw 3vw",height:"7.5vw",width:"13.125vw"}}  className='flex justify-center items-center '> <img style={{height:"10vw"}} className='object-contain' src='/Essel.png'></img></div>
  
</Carousel>
</div>
      </div>
      
  )
}

export default About