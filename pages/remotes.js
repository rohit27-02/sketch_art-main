/* eslint-disable @next/next/no-img-element */
import React from 'react'
import { Slide } from 'react-reveal'
import { useRef, useState, useEffect } from 'react';
import  Router  from 'next/router';
import Remotes2 from '../models/Remotes2';
const mongoose = require('mongoose');

const Remotes = ({product}) => {

    const [sw, setsw] = useState(false);

  useEffect(() => {
    if(screen.width>768){
      setsw(true)
    }},[]);

    return (<>
        {!sw && <div style={{backgroundColor:"#bfb1c4"}} className='w-full absolute top-0 h-12'></div>}
           {sw &&<div style={{height:"6.2vw",backgroundClip:""}} className='absolute border-b  border-black  top-0 w-full  '></div>}
          <div style={sw?{padding:"6.275vw 4.5vw 3.125vw",marginTop:"4vw"}:{padding:"6.275vh 7.5vw 3.125vh",marginTop:"4vh"}} className='px-24 pt-20 pb-10'>
            <Slide bottom> <div ><img style={sw?{height:"37.1vw",width:"89.75vw"}:{height:"45vw",width:"83.75vh"}} alt='img' src='https://www.mac.in/assets/site/images/product/MOTORISED-BLINDS/slider-1.jpg'></img></div></Slide>
      
            <div style={sw?{ fontFamily: "'Fjalla One', sans-serif",fontSize:"3.75vw",marginTop:"4vw",marginBottom:"2vw" }:{ fontFamily: "'Fjalla One', sans-serif",fontSize:"3.75vh",marginTop:"4vh",marginBottom:"2vh" }} className='text-center text-gray-700 '>REMOTE</div>
            <div style={sw?{fontFamily: "'Roboto Slab', serif", fontSize:"2vw",marginBottom:"4vw" }:{ fontFamily: "'Roboto Slab', serif",fontSize:"2",marginBottom:"4vh" }} className='text-center text-gray-700 '>Essence of Design Beyond Appearance</div>
      
      {Object.keys(product).map((p)=>{return <Slide left key={p}><div style={sw?{marginBottom:"4vw", height: "61vh",fontSize:"1.5vw", fontFamily: "'Roboto Slab', serif" }:{marginBottom:"4vh", height: "65vw",fontSize:"1.5vh", backgroundColor: "#ebeaeb", fontFamily: "'Roboto Slab', serif" }} className="flex w-full rhover">
               <img  src={product[p].poster} style={{padding:"3vw 5vw"}}  alt='img'></img>
              <div style={sw?{padding:"1.56vw"}:{padding:"1.56vh"}} className='p-5 w-full space-y-8'>
                <ul style={sw?{marginTop:"2.5vw",paddingRight:"2.5vw",lineHeight:"1.6vw "}:{marginTop:"1.5vh",paddingRight:"2.5vh",lineHeight:"1.8vh "}} className=' list list-disc leading-relaxed pr-8 '>
                <h1 style={sw?{ marginTop:"2.5vw"}:{ marginTop:"1vh"}} className='mt-8  text-gray-800 uppercase'>{product[p].title}</h1>
                <h5 style={{margin:"0.5vw 0vw 3.5vw"}} className='  text-gray-800 '>({product[p].slug})</h5>
                    
                    {product[p].features.map((f)=>{return  <li style={{marginBottom:"1vw"}} key={f}>{f}</li>})}
                   
                   
                </ul>
                <div className='float-right font-bold text-gray-700'>₹ {product[p].price}
                <button style={sw?{ color: "#bfb1c4" ,fontSize:"1.1vw",width:"8.75vw",height:"2.8125vw",marginTop:"1vw"}:{ color: "#bfb1c4" ,fontSize:"1.5vh",width:"10vh",height:"3.5vh",marginTop:"1vh"}} onClick={() => { addToCart(product.slug, qty="1", product.price, product.title,"1", "2", "white", undefined ,product.img) }} className="flex items-center z-50 font-bold hover:border-0 bg-white justify-center focus:outline-none   border-2">Add to cart</button>
                </div>
              </div>
            </div></Slide>})}
            
      
           
      
      
          </div>
        </>
        )
}

export async function getServerSideProps(context) {
    if (!mongoose.connections[0].readyState) {
      await mongoose.connect(process.env.MONGO_URI)
    }
  
    let product = await Remotes2.find()
  
  
    return {
      props: { product: JSON.parse(JSON.stringify(product)) }, // will be passed to the page component as props
    }
  }

export default Remotes