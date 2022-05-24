/* eslint-disable @next/next/no-img-element */

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useState, useEffect } from 'react'
import Product from '../../models/Product';
import mongoose from "mongoose";
const Post = ({ buyNow, addToCart, product }) => {
  const [selectedheight, setselectedheight] = useState("");
  const [selectedwidth, setselectedwidth] = useState("");
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
    console.log(e.target)
  }
  useEffect(() => {
    document.getElementById(prevcolor).classList.remove("shadow-md")
    setprevcolor(selectedcolor)
  }, [selectedcolor]);

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
      <div className="container mx-14 py-14">

        <div className='w-full shadow-lg flex-col md:flex-row flex   '>
          <div className=''><img alt="ecommerce" className=" w-full " src={product.variants[selectedcolor].img} />
            <div className='px-10 '><h1 className=' text-xl font-bold font-serif py-4'>Product Details</h1>
              <table className=' w-full mb-8 '>
                <tr className=''>
                  <td>Style</td>
                  <td>{product.category}</td>
                </tr>
                <tr>
                  <td>Height</td>
                  <td>{selectedheight}</td>
                </tr>
                <tr>
                  <td>Width</td>
                  <td>{selectedwidth}</td>
                </tr>
                <tr>
                  <td>Color</td>
                  <td >{product.variants[selectedcolor].color}</td>
                </tr>
              </table>
            </div></div>
          <div  className='flex flex-col  px-14 bg-slate-200 '>
            <h1 className=" text-gray-900  text-xl md:text-3xl mt-10 title-font font-bold font-serif mb-8">{product.title} </h1><span className='text-xl font-medium p-2'>Color Selection</span>
            <div className=" flex md:h-2/3 w-full px-6  drop-shadow-md  justify-evenly h-80 text-center overflow-y-scroll bg-white flex-wrap ">
              {Object.keys(product.variants).map((p) => { return <div className='' key={p} ><div id={p} onClick={(e) => { selectcolor(e) }} style={{ backgroundColor: `${product.variants[p].colorcode}` }} className="h-40 mt-4 cursor-pointer  w-32"></div><span className=' font-semibold'>{product.variants[p].color}</span></div> })}
            </div><div className="flex my-auto mx-auto items-center space-x-10 ">

              <div><span className="mr-3 text-lg font-medium">Height</span>

                <select  id='h' onChange={(e) => selecth(e)} className='w-24  border-2 font-semibold text-lg '>
                  {product.height.map((i) => { return <option className='text-lg font-semibold ' key={i}>{i}  </option> })}
                </select></div>

              <div><span className="mr-3 text-lg font-medium">Width</span>

                <select  id='w' onChange={(e) => selectw(e)} className='w-24  border-2 font-semibold text-lg'>
                  {product.width.map((i) => { return <option className='text-lg font-semibold' key={i}>{i}  </option> })}
                </select></div>
            </div></div></div>
        <div className='flex justify-around mt-20'>
          <h1 className='text-xl font-bold'>Description</h1>
          <p className="leading-relaxed md:pr-60 mt-10">{product.desc}</p><div>

            <div className="flex justify-start ">
              <span className="title-font font-medium  text-2xl text-gray-900">₹ {product.price}</span>
              <button className="flex  ml-10 text-white bg-yellow-500 border-0 md:py-2 py-1 px-1 md:px-6 focus:outline-none hover:bg-slate-800 " onClick={() => { buyNow(product.slug, product.price, product.title,height,width,product.variants[selectedcolor].color) }}>Buy now</button>
              <button onClick={() => { addToCart(product.slug, 1, product.price, product.title, height,width,product.variants[selectedcolor].color) }} className="flex ml-10 text-white bg-yellow-500 border-0 md:py-2 py-1 px-1 md:px-6 focus:outline-none hover:bg-slate-800 ">Add to cart</button>

            </div>
            <div className='flex mt-12 mb-20 '>
              <input onChange={onChangePin} className='text-sm md:text-lg font-bold px-2 border-2 border-gray-400 -md' type="text" placeholder='Enter your pin'></input>
              <button onClick={checkServiceablilty} className='ml-2 text-white bg-yellow-500 border-0 py-2 px-4 focus:outline-none hover:bg-slate-800 '>Check</button>
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