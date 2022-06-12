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
      breakpoint: { max: 3000, min: 1024 },
      items: 8,
      slidesToSlide: 3 // optional, default to 1.
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
  
    <div>
     
      <div style={{height:"80vh"}}>
      <div style={{height:"90vh"}} className='w-full overflow-hidden top-0 absolute '>
      <h1 className='2xl:text-8xl text-6xl font-bold w-full text-center absolute 2xl:my-52 md:my-40 z-50 text-gray-200  '>You imagine, we create.</h1>
       <Slide bottom><img  className='object-cover h-full  w-full ' src='/pexels-curtis-adams-3773571 (1).jpg'></img></Slide >
      
      </div>
        </div>


      <div style={{fontFamily:"'Montserrat', sans-serif"}}  className='text-center md:py-40 py-8 px-1  md:flex-row flex flex-col justify-center items-center '>
      <div  style={{fontFamily:"'poppins', sans-serif"}} className='text-left px-10  text-slate-700  md:flex-row flex flex-col justify-center items-center '>
      <Slide left> <div > <h1 className='text-4xl text-center font-bold'>Global Leading Manufacturer</h1>
        <p style={{lineHeight:2}} className=' py-7 px-7 md:text-base 2xl:text-xl  font-thin'>With an industry experience of over 25 years, Dooya private limited is the leading manufacturer and importer of Window Blinds and Accessories, Motorized Blinds and Interior Flims in the country catering to clients across the globe. It is also the marketing partner for Dooya Motors based in China. Keen on widening its portfolio, Dooya is open to expanding its imports and exports as and when opportunities present themselves.

Dooya strives for excellence by providing customized solutions. An expansive range of world-class home fashion products while providing premium customer services that include global sourcing, quality assurance, logistics and finance.</p>
<div className='w-full flex justify-center '><button style={{backgroundColor:"#bfb1c4"}} className='text-base  hover:opacity-80  p-2 font-bold'>Contact Us</button></div>
</div></Slide>
      </div>
        <Slide right><img width={500} height={500} className="p-8" src='https://media.istockphoto.com/photos/little-boy-opening-the-roller-blinds-in-the-morning-picture-id1178700357?k=20&m=1178700357&s=612x612&w=0&h=zZMixHxDvjJj4ce_fEjPEFE9ReFw5xabNAPh3Rypdxo='></img></Slide>
      </div>
      <div style={{fontFamily:"'Montserrat', sans-serif",backgroundColor:"#bfb1c4"}} className='flex flex-col md:flex-row bg-white justify-around items-center leading-10  '>
<img style={{height:600}} className='w-5/12  my-10' src='https://www.lvtron.com/wp-content/uploads/2019/09/1591582913-5.jpg'></img>
<div className=''><h1 className='font-bold text-center text-3xl'>Our Capabilities</h1>
<ul className='list-disc text-xl space-y-4  my-12'>
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
      <h1 style={{fontFamily:"'poppins', sans-serif",textShadow:"1px 1px black"}} className='absolute text-white text-5xl text-center px-40 my-20'>Sketch arts strives for excellence by providing customized solutions.</h1>
      </div>

      
    

      <div style={{height:"50vh"}}>
        <div className=' flex items-center px-4 my-16'>
          <div className='absolute pt-12 '><img src="/Assest for Sketch Art-09.png"></img></div>
          <div ><Slide bottom><img src="/Assest for Sketch Art-08.png"></img></Slide></div>
          <div ><Slide top><img src="/Assest for Sketch Art-07.png"></img></Slide></div>
          <div ><Slide bottom><img src="/Assest for Sketch Art-06.png"></img></Slide></div>
          <div ><Slide top><img src="/Assest for Sketch Art-05.png"></img></Slide></div>
          <div ><Slide bottom><img src="/Assest for Sketch Art-04.png"></img></Slide></div>
          <div ><Slide top><img src="/Assest for Sketch Art-03.png"></img></Slide></div>
          <div ><Slide bottom><img src="/Assest for Sketch Art-02.png"></img></Slide></div>
           </div>
           </div>
    
     
      <VisibilitySensor partialVisibility offset={{ bottom: 200 }}>
        {({ isVisible }) => (
           <div style={{backgroundColor:"#ebeaeb"}} className='w-full md:h-52 mt-16 h-96 '>
           {isVisible ?<div style={{fontFamily:"'poppins', sans-serif",backgroundColor:"#bfb1c4"}} className='h-full flex flex-col md:flex-row  text-black items-center justify-evenly'> <CountUp
           className='text-4xl font-bold  py-5'
       start={0}
       end={20}
       duration={2}
       separator=" "
       suffix='+ Years'
     
       
     ></CountUp>
           <CountUp
           className='text-4xl font-bold  py-5'
       start={0}
       end={50}
       duration={2}
       separator=" "
       suffix='+ Experts'
     
       
     ></CountUp>
           <CountUp
           className='text-4xl font-bold  py-5'
       start={0}
       end={5000}
       duration={2}
       separator=", "
       suffix='+ Projects'
     
       
     ></CountUp>
           <CountUp
           className='text-4xl font-bold  py-5'
       start={0}
       end={2000}
       duration={2}
       separator=" ,"
       suffix='+ Clients'
     
       
     ></CountUp></div>:null}
           </div>
        )}
      </VisibilitySensor>

      <div style={{height:"25vh"}}  className='flex flex-col justify-center items-center space-y-8 text-white text-3xl font-bold text-center py-5  bg-black'>
        <h1>OUR PRESTIGIOUS CLIENTS</h1>
        <Carousel
  swipeable={false}
  draggable={false}
  showDots={false}
  responsive={responsive}
  ssr={true} // means to render carousel on server-side.
  infinite={true}
  autoPlay={true}
  autoPlaySpeed={1000}
  keyBoardControl={true}
  transitionDuration={500}
  containerClass="carousel-container"
  removeArrowOnDeviceType={["tablet", "mobile","desktop"]}
  dotListClass="custom-dot-list-style"
  itemClass="carousel-item-padding-40-px"
>
  <div  className='h-40 w-40 '> <img src='/c1.jpeg'></img></div>
  <div  className='h-40 w-40 '> <img src='/c2.jpeg'></img></div>
  <div  className='h-40 w-40 '> <img src='/c3.jpeg'></img></div>
  <div  className='h-40 w-40 '> <img src='/c4.jpeg'></img></div>
  <div  className='h-40 w-40 '> <img src='/c5.jpeg'></img></div>
  <div  className='h-40 w-40 '> <img src='/c6.jpeg'></img></div>
  <div  className='h-40 w-40 '> <img src='/c7.jpeg'></img></div>
  <div  className='h-40 w-40 '> <img src='/c8.jpeg'></img></div>
  <div  className='h-40 w-40 '> <img src='/c9.jpeg'></img></div>
  <div  className='h-40 w-40 '> <img src='/c10.jpeg'></img></div>
  <div  className='h-40 w-40 '> <img src='/c11.jpeg'></img></div>
  
</Carousel>

     
      </div>
     
      </div>
  )
}

export default About