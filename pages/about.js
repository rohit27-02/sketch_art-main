/* eslint-disable @next/next/no-page-custom-font */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import React from 'react'
import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';
import Head from 'next/head'
import { Fade, LightSpeed, Slide, Zoom } from 'react-reveal';
const About = () => {
  
  return (
  
    <div>
       <Head>
      <link rel="preconnect" href="https://fonts.googleapis.com"/>
<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin/>
<link href="https://fonts.googleapis.com/css2?family=Lato:wght@700&family=Montserrat:wght@300&family=Poppins:wght@500&display=swap" rel="stylesheet"/>
        <title>Sketch Art</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div style={{height:"80vh"}}>
      <div style={{height:"90vh"}} className='w-full overflow-hidden top-0 absolute '>
      <h1 className='2xl:text-8xl text-6xl font-bold w-full text-center absolute 2xl:my-52 md:my-40 z-50 text-gray-200  '>You imagine, we create.</h1>
       <Slide bottom><img  className='object-cover h-full  w-full ' src='/pexels-curtis-adams-3773571 (1).jpg'></img></Slide >
      
      </div>
        </div>


      <div style={{fontFamily:"'Montserrat', sans-serif"}}  className='text-center md:py-40 py-8 px-1  md:flex-row flex flex-col justify-center items-center '>
        <div>
         <Slide bottom> <h1 style={{ fontFamily: "'Lato', sans-serif"}} className='text-3xl text-slate-600 font-bold'>How we do it</h1></Slide>
         <Slide bottom><p className='  py-7 px-7 leading-loose font-thin text-xl'>A systemised process ensures that we deliver only the best.
In the commitment of importing top-notch quality products
from authentic vendors only, we have employed a distinguished
team of proficient procurement agents who incurs years of
experience in this business domain. This team selects the most
genuine and experienced vendors after an in-depth research.</p></Slide>
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
      <video className=" w-11/12 object-cover" src="/main2.mp4" autoPlay muted loop />
      <h1 style={{fontFamily:"'poppins', sans-serif",textShadow:"1px 1px black"}} className='absolute text-white text-5xl text-center px-40 my-20'>Sketch arts strives for excellence by providing customized solutions.</h1>
      </div>

      
      <div  style={{fontFamily:"'poppins', sans-serif"}} className='text-center md:py-20 py-8 px-10  text-slate-700 bg-slate-50 md:flex-row flex flex-col justify-center items-center '>
       <div> <h1 className='text-2xl font-bold'>Global Leading Manufacturer</h1>
        <p className=' py-7 px-7 md:text-base 2xl:text-xl leading-relaxed font-thin'>With an industry experience of over 25 years, Dooya private limited is the leading manufacturer and importer of Window Blinds and Accessories, Motorized Blinds and Interior Flims in the country catering to clients across the globe. It is also the marketing partner for Dooya Motors based in China. Keen on widening its portfolio, Dooya is open to expanding its imports and exports as and when opportunities present themselves.

Dooya strives for excellence by providing customized solutions. An expansive range of world-class home fashion products while providing premium customer services that include global sourcing, quality assurance, logistics and finance.</p>
<button style={{backgroundColor:"#bfb1c4"}} className='text-base hover:opacity-80 p-2 font-bold'>Contact Us</button>
</div>

      </div>
    
     
      <VisibilitySensor partialVisibility offset={{ bottom: 200 }}>
        {({ isVisible }) => (
           <div style={{backgroundColor:"#ebeaeb"}} className='w-full md:h-56 h-96 '>
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
     
      </div>
  )
}

export default About