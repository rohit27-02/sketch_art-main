/* eslint-disable @next/next/no-img-element */

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useState } from 'react'
import Product from '../../models/Product';
import mongoose from "mongoose";
const Post = ({ buyNow, addToCart, product, variants }) => {

  const [pin, setPin] = useState();
  const [service, setService] = useState();
  const checkServiceablilty = async () => {
    let pins = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/pincode`)
    let pinJson = await pins.json()
    if (pinJson.includes(parseInt(pin))) {
      setService(true)
      toast.success('Yay! your area is serviceable', {
        position: "bottom-center",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        });
    }
    else {
      setService(false)
      toast.error('sorry, your area is not serviceable', {
        position: "bottom-center",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        });
    }
  }
  const onChangePin = (e) => {
    setPin(e.target.value)
  }
  const [color, setolor] = useState(product.color);
  const [size, setSize] = useState(product.size);

  const refreshVariants = (newsize, newcolor) => {
    let url = `${process.env.NEXT_PUBLIC_HOST}/product/${variants[newcolor][newsize]["slug"]}`
    window.location = url;
  }


  return <>
    <section className="text-gray-600 body-font overflow-hidden">
    <ToastContainer
position="top-right"
autoClose={1000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
/>
      <div className="container px-2 py-10 mx-auto">
        <div className="lg:w-4/5 mx-auto flex flex-wrap">
          <img alt="ecommerce" className="md:w-1/2 w-full lg:h-auto px-8 object-cover object-center rounded" src={product.img} />
          <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
            <h2 className="text-sm title-font text-gray-500 tracking-widest">Sketch Arts</h2>
            <h1 className="text-gray-900 text-3xl title-font font-medium mb-4">{product.title} ({product.size}/{product.color})</h1>

          
            <p className="leading-relaxed">{product.desc}</p>
            <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5">
              <div className="flex">
                <span className="mr-3">Color</span>
                {Object.keys(variants).map((p)=>{<div className='h-10 w-10' style={{backgroundColor:`${p.colorpic}`}}></div>})}
                {Object.keys(variants).map((p)=>{Object.keys(variants).includes(p.color) && Object.keys(variants[p.color]).includes(p.size) && <button onClick={() => { refreshVariants(p.size, p.color) }} className={` border-2 bg-black  w-15 h-15 focus:outline-none ${color === p.color ? "border-yellow-500" : "border-gray-50"}`}></button>})}
              </div>
              <div className="flex ml-6 items-center">
                <span className="mr-3">Size</span>
                <div className="relative">
                 
                  <span className="absolute right-0 top-0 h-full w-10 text-center text-gray-600 pointer-events-none flex items-center justify-center">
                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4" viewBox="0 0 24 24">
                      <path d="M6 9l6 6 6-6"></path>
                    </svg>
                  </span>
                </div>
              </div>
            </div>
            <div className="flex justify-evenly">
              <span className="title-font font-medium text-2xl text-gray-900">₹ {product.price}</span>
              <button className="flex  md:ml-10 text-white bg-yellow-500 border-0 md:py-2 py-1 px-1 md:px-6 focus:outline-none hover:bg-yellow-600 rounded" onClick={() => { buyNow(product.slug, product.price, product.title, size, color) }}>Buy now</button>
              <button onClick={() => { addToCart(product.slug, 1, product.price, product.title, size, color) }} className="flex  md:ml-10 text-white bg-yellow-500 border-0 md:py-2 py-1 px-1 md:px-6 focus:outline-none hover:bg-yellow-600 rounded">Add to cart</button>
              
            </div>
            <div className='flex mt-12 '>
              <input onChange={onChangePin} className='text-lg font-bold px-2 border-2 border-gray-400 rounded-md' type="text" placeholder='Enter your pin'></input>
              <button onClick={checkServiceablilty} className='ml-2 text-white bg-yellow-500 border-0 py-2 px-6 focus:outline-none hover:bg-yellow-600 rounded'>Check</button>
            </div>
            {!service && service != null && <div className='text-red-600 mt-3 '>sorry! we are not available in your area</div>}
            {service && service != null && <div className='text-green-600 mt-3 '>Yay! we are available at your area</div>}
          </div>
        </div>
      </div>
    </section>
  </>
}
export async function getServerSideProps(context) {
  if (!mongoose.connections[0].readyState) {
    await mongoose.connect(process.env.MONGO_URI)
  }
  let product = await Product.findOne({ slug: context.query.slug })
  let variants = await Product.find({ title: product.title })
  let colorSizeSlug = {}
  console.log(variants)
  for (let item of variants) {
    if (Object.keys(colorSizeSlug).includes(item.colorpic)) {
      colorSizeSlug[item.colorpic][item.size] = { slug: item.slug }
    }
    else {
      colorSizeSlug[item.colorpic] = {colorpic:item.colorpic}
      colorSizeSlug[item.colorpic][item.size] = { slug: item.slug }
    }
  }
  console.log(colorSizeSlug)
  return {
    props: { product: JSON.parse(JSON.stringify(product)), variants: JSON.parse(JSON.stringify(colorSizeSlug)) }, // will be passed to the page component as props
  }
}

export default Post