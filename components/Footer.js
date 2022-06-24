/* eslint-disable @next/next/no-page-custom-font */
/* eslint-disable @next/next/no-img-element */
import React from 'react'
import { useEffect, useState } from 'react'
import { RiAccountCircleFill } from "react-icons/ri"
import { BsFillTelephoneFill } from "react-icons/bs"
import Head from 'next/head'
import { Zoom } from 'react-reveal'
import  RubberBand  from 'react-reveal/RubberBand'

const Footer = () => {
  const [data, setdata] = useState({});
  const [category, setcategory] = useState([]);
  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_HOST}/api/info`)
      .then((res) => res.json())
      .then((data) => {
        setdata(data)
      })
    fetch(`${process.env.NEXT_PUBLIC_HOST}/api/getproducts`)
      .then((res) => res.json())
      .then((data) => {
        setcategory(data)
      })


  }, []);

  return (<>

    <Head>
    <link rel="preconnect" href="https://fonts.googleapis.com"/>
<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin/>
<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300&display=swap" rel="stylesheet"/>
</Head>

   <div style={{height:"40vh"}} className="w-full bg-white">
     <div style={{fontFamily: "'Poppins', sans-serif"}} className='grid md:grid-flow-col py-6 2xl:py-10 2xl:px-24 md:py-8 md:px-20 px-7  w-full h-full'>
       <div className='col-span-11  flex justify-evenly flex-col '>
         <p>SKETCH ART BY DEVELOPER INFOTECH</p>
         <h1 style={{fontWeight:'bolder',fontSize:"2em"}} className=''>You belong here. </h1>
         <p>MADE WITH LOVE <RubberBand><span className='font-bold text-xl ml-2'>♡</span></RubberBand></p>
       </div>
       <div className='col-span-1 flex flex-col py-6 space-y-4'>
        
         <div className='underline underline-offset-4'><a href={"/"}>HOME</a></div>
         <div className='underline underline-offset-4'><a href={"/about"}>ABOUT US</a></div>
         <div className='underline underline-offset-4'><a href=''>PRODUCTS</a></div>
         <div className='underline underline-offset-4'><a href={"/contact"}>CONTACT US</a></div>
        
       </div>
     </div>
   </div>
   </>
  )
}


export default Footer