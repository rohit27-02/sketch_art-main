/* eslint-disable @next/next/no-img-element */

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useState, useEffect } from 'react'
import Product from '../../models/Product';
import mongoose from "mongoose";
const Post = ({ buyNow, addToCart, product }) => {
  const [selectedheight, setselectedheight] = useState(product.height[0]);
  const [selectedwidth, setselectedwidth] = useState(product.width[0]);
  const [selectedcolor, setselectedcolor] = useState(0);
  const [prevcolor, setprevcolor] = useState(0);
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
  function selecth(e) {
    setselectedheight(e.target.value)
  }
  function selectw(e) {
    setselectedwidth(e.target.value)
  }
  function selectcolor(e) {
    setselectedcolor(e.target.id)

    document.getElementById(e.target.id).classList.add("shadow-md")
    document.getElementById(e.target.id).classList.add("shadow-slate-700")
   
  }
  useEffect(() => {
    document.getElementById(prevcolor).classList.remove("shadow-md")
    setprevcolor(selectedcolor)
  }, [selectedcolor]);
useEffect(() => {
 console.log(product)
}, []);
  return <>
    <section className="text-gray-600 flex justify-center  body-font overflow-hidden">
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
      <div className="container px-4 md:w-5/6 md:py-14">

        <div className='w-full shadow-lg flex-col md:flex-row flex   '>
          <div className='md:w-2/5 '><img alt="ecommerce" className=" w-full p-16 md:p-0 mx-auto " src={product.variants[selectedcolor].img} />
            <div className='px-10 '><h1 style={{fontFamily:"'poppins',sans-serif"}} className=' text-xl font-bold py-4'>Product Summary</h1>
            <div className='w-full  grid grid-flow-col'>
              <div style={{fontFamily:"'poppins',sans-serif"}} className=' border-r-2'>
                <p className='leading-loose font-semibold'>Style</p>
                <p className='leading-loose font-semibold'>Color</p>
                <p className='leading-loose font-semibold'>Height</p>
                <p className='leading-loose font-semibold'>Width</p>
                <p className='leading-loose font-semibold'>Mechanism</p>
              </div>
              <div style={{fontFamily:"'poppins',sans-serif"}} className='ml-4'>
                <p className='leading-loose'>{product.category}</p>
                <p className='leading-loose'>{product.variants[selectedcolor].color}</p>
                <p className='leading-loose'>{selectedheight}</p>
                <p className='leading-loose'>{selectedwidth}</p>
                <p className='leading-loose'></p>
              </div>
            </div>
            </div></div>
          <div  className='flex flex-col  md:w-3/5 px-2 md:px-14 bg-slate-200 '>
            <h1 style={{ fontFamily: "'poppins', sans-serif"}} className=" text-gray-900 px-2 text-2xl md:text-3xl md:first-letter:mt-10 title-font font-bold  my-8">{product.title} </h1>
            <div style={{fontFamily:"'poppins',sans-serif"}} className='space-x-4 mb-8 text-sm'>
            <a className='cursor-pointer underline underline-offset-2 '>Products Details</a>
            <a className='cursor-pointer underline underline-offset-2 '>Products Gallery</a>
            </div>
            
            <div className="grid md:h-2/5 w-full px-8  drop-shadow-md  h-80  overflow-y-scroll bg-white  ">
            <p className=' lg:text-2xl font-medium p-2'>Color Selection</p>
              {Object.keys(product.variants).map((p) => { return <div  key={p} ><div id={p} onClick={(e) => { selectcolor(e) }} style={{ backgroundColor: `${product.variants[p].colorcode}` }} className=" h-32 mt-8  cursor-pointer w-32"></div><span className=' font-semibold uppercase '>{product.variants[p].color}</span></div> })}
            </div><div className="flex my-12  mx-auto  space-x-10 ">

              <div><span className="ml-2 text-lg lg:text-2xl font-medium">Height</span>

                <select  id='h' onChange={(e) => selecth(e)} className='w-24  border-2 ml-2 font-semibold text-lg lg:text-xl '>
                  {product.height.map((i) => { return <option className='text-lg font-semibold ' key={i}>{i}  </option> })}
                </select></div>

              <div><span className="ml-2 text-lg lg:text-2xl font-medium">Width</span>

                <select  id='w' onChange={(e) => selectw(e)} className='w-24  border-2 ml-2 font-semibold text-lg lg:text-xl'>
                  {product.width.map((i) => { return <option className='text-lg font-semibold' key={i}>{i}  </option> })}
                </select></div>
            </div>
            <div className="flex justify-center space-x-6 mb-4 my-auto ">
              <span className="title-font font-medium  text-2xl text-gray-900">₹ {product.price}</span>
              <button className="flex  text-slate-700 btn font-semibold border-0 md:py-2 py-1 px-1 md:px-6 focus:outline-none hover:text-white " onClick={() => { buyNow(product.slug, product.price, product.title,height,width,product.variants[selectedcolor].color) }}>Buy now</button>
              <button onClick={() => { addToCart(product.slug, 1, product.price, product.title, height,width,product.variants[selectedcolor].color) }} className="flex  text-slate-700 btn border-0 md:py-2 py-1 px-1 md:px-6 focus:outline-none hover:text-white font-semibold ">Add to cart</button>

            </div></div></div>
        <div className='grid grid-flow-row md:grid-flow-col mt-20'>
          <div className='text-xl lg:text-3xl text-center md:text-left font-bold'>Description
          <p className="leading-relaxed text-base lg:text-xl font-normal md:pr-60 mt-10">{product.desc}</p></div><div>

          
            <div className='flex mt-12 mb-20 '>
              <input onChange={onChangePin} className='text-sm md:text-lg font-bold px-2 border-2 border-gray-400 -md' type="text" placeholder='Enter your pin'></input>
              <button onClick={checkServiceablilty} className='ml-2 text-slate-700 hover:text-white btn border-0 py-2 px-4 font-semibold focus:outline-none  '>Check</button>
            </div></div>
          {!service && service != null && <div className='text-red-600 mt-3 '>sorry! we are not available in your area</div>}
          {service && service != null && <div className='text-green-600 mt-3 '>Yay! we are available at your area</div>}
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
 

  return {
    props: { product: JSON.parse(JSON.stringify(product)) }, // will be passed to the page component as props
  }
}

export default Post