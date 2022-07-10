/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import React from 'react'
import Product from '../../models/Product';
import Motor from '../../models/Motor';
import mongoose from "mongoose";
import Router from 'next/router';
import { useState, useEffect } from 'react';

const Tshirts = ({ products, motors }) => {
  const [type, settype] = useState("roller");
  const [sw, setsw] = useState(false);

  useEffect(() => {
    if (screen.width > 768) {
      setsw(true)
    }
    if (Router.asPath == "/category/tubular%20motors/") {
      settype("tm");
    }
  }, []);



  return (<div style={sw ? { marginTop: "8vw" } : { marginTop: "8vh" }}>


    {!sw && <div style={{ backgroundColor: "#bfb1c4" }} className='w-full absolute top-0 h-12'></div>}
    {sw && <div style={{ height: "6.2vw", backgroundClip: "" }} className='absolute border-b  border-black  top-0 w-full  '></div>}


    {type == "roller" && <div>
      <img className='' src="https://i.ibb.co/B2xYb9w/Group-39.png"></img>
      <section className="text-gray-600 body-font ">
        <div className="container px-5 py-20  mx-auto ">
          <div className="flex flex-wrap justify-evenly   -m-4">
            {Object.keys(products).map((item) => {
              return <div key={products[item]._id} className="lg:w-1/4 md:w-1/3 p-2 m-4  w-full shadow-lg cursor-pointer ">
                <a href={`/product/${products[item].slug}`} className="block relative  rounded overflow-hidden">
                  <img alt="ecommerce" className=" h-[36vh] m-auto block" src={products[item].poster} />

                  <div className="mt-4 ">
                    <h2 className="text-center text-gray-900 title-font text-lg font-medium">{products[item].title}</h2>
                    <p className="mt-1 text-center">₹{products[item].price}</p>

                    <button className='mx-auto w-full p-4  hover:bg-slate-800 hover:text-white btn font-bold rounded'>Shop now</button>
                  </div>
                </a>
              </div>
            })}

          </div>
        </div>
      </section>
    </div>}


    {type == "tm" && <div className='flex justify-center'>
      <img className='w-full h-full' src='/DOOYA BROCHURE JAN 2022 (2)-compressed_page-0007.jpg'></img>
    </div>}

    <div>
    
      <section className="text-gray-600 body-font ">
        <div className="container px-5 py-20  mx-auto ">
          <div className="flex flex-wrap justify-evenly   -m-4">
            {Object.keys(motors).map((item) => {
              return <div key={motors[item]._id} className="lg:w-1/4 md:w-1/3 p-2 m-4  w-full shadow-lg cursor-pointer ">
                <a href={`/product/${motors[item].slug}`} className="block relative  rounded overflow-hidden">
                  <img alt="ecommerce" className=" h-[36vh] m-auto block" src={motors[item].poster} />

                  <div className="mt-4 ">
                    <h2 className="text-center text-gray-900 title-font text-lg font-medium">{motors[item].title}</h2>
                    <p className="mt-1 text-center">₹{motors[item].price}</p>

                    <button className='mx-auto w-full p-4  hover:bg-slate-800 hover:text-white btn font-bold rounded'>Shop now</button>
                  </div>
                </a>
              </div>
            })}

          </div>
        </div>
      </section>
    </div>

  </div>
  )
}
export async function getServerSideProps(context) {
  if (!mongoose.connections[0].readyState) {
    await mongoose.connect(process.env.MONGO_URI)
  }
console.log(context.query.category)
  let products = await Product.find({ category: context.query.category })
  let motors = await Motor.find({ category: context.query.category })

  return {
    props: { products: JSON.parse(JSON.stringify(products)), motors: JSON.parse(JSON.stringify(motors)) }, // will be passed to the page component as props
  }
}

export default Tshirts