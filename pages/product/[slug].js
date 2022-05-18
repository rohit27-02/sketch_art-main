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
      <div className="container px-5 py-10 mx-auto">
        <div className="lg:w-4/5 mx-auto flex flex-wrap">
          <img alt="ecommerce" className="lg:w-1/2 w-full lg:h-auto px-10 object-cover object-center rounded" src={product.img} />
          <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
            <h2 className="text-sm title-font text-gray-500 tracking-widest">BRAND NAME</h2>
            <h1 className="text-gray-900 text-3xl title-font font-medium mb-4">{product.title} ({product.size}/{product.color})</h1>

            {/* <div className="flex mb-4">

              <span className="flex items-center">
                <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 text-yellow-500" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                </svg>
                <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 text-yellow-500" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                </svg>
                <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 text-yellow-500" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                </svg>
                <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 text-yellow-500" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                </svg>
                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 text-yellow-500" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                </svg>
                <span className="text-gray-600 ml-3">4 Reviews</span>
              </span>
              
              <span className="flex ml-3 pl-3 py-2 border-l-2 border-gray-200 space-x-2s">
                <a className="text-gray-500">
                  <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                    <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                  </svg>
                </a>
                <a className="text-gray-500">
                  <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                    <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                  </svg>
                </a>
                <a className="text-gray-500">
                  <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                    <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                  </svg>
                </a>
              </span>
            </div> */}
            <p className="leading-relaxed">{product.desc}</p>
            <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5">
              <div className="flex">
                <span className="mr-3">Color</span>
                {Object.keys(variants).includes("Black") && Object.keys(variants["Black"]).includes(size) && <button onClick={() => { refreshVariants(size, "Black") }} className={` border-2 bg-black rounded-full w-6 h-6 focus:outline-none ${color === "Black" ? "border-yellow-500" : "border-gray-50"}`}></button>}
                {Object.keys(variants).includes("Green") && Object.keys(variants["Green"]).includes(size) && <button onClick={() => { refreshVariants(size, "Green") }} className={`border-2 ml-1 bg-green-500 rounded-full w-6 h-6 focus:outline-none ${color === "Green" ? "border-yellow-500" : "border-gray-50"}`}></button>}
                {Object.keys(variants).includes("Yellow") && Object.keys(variants["Yellow"]).includes(size) && <button onClick={() => { refreshVariants(size, "Yellow") }} className={`border-2 ml-1 bg-yellow-500 rounded-full w-6 h-6 focus:outline-none ${color === "Yellow" ? "border-yellow-500" : "border-gray-50"}`}></button>}
                {Object.keys(variants).includes("Red") && Object.keys(variants["Red"]).includes(size) && <button onClick={() => { refreshVariants(size, "Red") }} className={`border-2 ml-1 bg-red-500 rounded-full w-6 h-6 focus:outline-none ${color === "Red" ? "border-yellow-500" : "border-gray-50"}`}></button>}
                {Object.keys(variants).includes("Blue") && Object.keys(variants["Blue"]).includes(size) && <button onClick={() => { refreshVariants(size, "Blue") }} className={`border-2 ml-1 bg-blue-500 rounded-full w-6 h-6 focus:outline-none ${color === "Blue" ? "border-yellow-500" : "border-gray-50"}`}></button>}
              </div>
              <div className="flex ml-6 items-center">
                <span className="mr-3">Size</span>
                <div className="relative">
                  <select value={size} onChange={(e) => { refreshVariants(e.target.value, color) }} className="rounded border appearance-none border-gray-300 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-200 focus:border-yellow-500 text-base pl-3 pr-10">
                    {Object.keys(variants[color]).includes("S") && <option value={"S"}>S</option>}
                    {Object.keys(variants[color]).includes("M") && <option value={"M"}>M</option>}
                    {Object.keys(variants[color]).includes("L") && <option value={"L"}>L</option>}
                    {Object.keys(variants[color]).includes("XL") && <option value={"XL"}>XL</option>}
                  </select>
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
              <button className="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4 hover:bg-yellow-500 hover:text-white ">
                <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                  <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
                </svg>
              </button>
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
  for (let item of variants) {
    if (Object.keys(colorSizeSlug).includes(item.color)) {
      colorSizeSlug[item.color][item.size] = { slug: item.slug }
    }
    else {
      colorSizeSlug[item.color] = {}
      colorSizeSlug[item.color][item.size] = { slug: item.slug }
    }
  }
  return {
    props: { product: JSON.parse(JSON.stringify(product)), variants: JSON.parse(JSON.stringify(colorSizeSlug)) }, // will be passed to the page component as props
  }
}

export default Post