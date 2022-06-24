/* eslint-disable @next/next/no-img-element */

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useState, useEffect } from 'react'
import Product from '../../models/Product';
import mongoose from "mongoose";
import { Disclosure, Dialog } from '@headlessui/react'
import { IoIosArrowDown } from "react-icons/io"
import { MdOutlineCancel } from "react-icons/md"
import { BsInfoCircleFill } from "react-icons/bs"
import { BsImages } from "react-icons/bs"
import { AiOutlinePlus,AiOutlineMinus } from 'react-icons/ai';

const Post = ({ buyNow, addToCart, product }) => {
  const [selectedheight, setselectedheight] = useState(6 );
  const [cartheight, setcartheight] = useState(6 );
  const [cartwidth, setcartwidth] = useState(16 );
  const [selectedwidth, setselectedwidth] = useState(16 );
  const [selectedexactwidth, setselectedexactwidth] = useState(".0");
  const [selectedexactheight, setselectedexactheight] = useState(".0");
  const [selectedcolor, setselectedcolor] = useState(0);
  const [prevcolor, setprevcolor] = useState(0);
  const [isenable, setisenable] = useState(false);
  const [mechanism, setmechanism] = useState("Manual");
  const [qty, setqty] = useState(1);
  const [sw, setsw] = useState(false);

  const height = []
  const width = []
  const exactHeightOrWidth = ['0', '1/8', '1/4', '3/8', '1/2', '5/8', '3/4', '7/8']

  for (let i = 6; i < 121; i++) {
    height.push(i +'  "')
  }
  for (let i = 14; i < 97; i++) {
    width.push(i +'  "')
  }

 
  function selecth(e) {
    let m = (e.target.value).split(" ")
    setselectedheight(m[0])
  }
  function selecteh(e) {
    let m = (e.target.value).split(" ")
    let a= eval(m[0])
    let b=a.toString()
    let c=b.slice(1)
    setselectedexactheight(c)
  }
  function selectew(e) {
    let m = (e.target.value).split(" ")
    let a= eval(m[0])
    let b=a.toString()
    let c=b.slice(1)
   
    setselectedexactwidth(c)
  }
  function selectw(e) {
    let m = (e.target.value).split(" ")
    setselectedwidth(m[0])
  }
  function selectcolor(e) {
    setselectedcolor(e.target.id)

    document.getElementById(e.target.id).classList.add("border-2")

  }
useEffect(() => {
 setcartheight(`${selectedheight}${selectedexactheight}`)
}, [selectedexactheight,selectedheight]);
useEffect(() => {
 setcartwidth(`${selectedwidth}${selectedexactwidth}`)
}, [selectedexactwidth,selectedwidth]);

  useEffect(() => {
    document.getElementById(prevcolor).classList.remove("border-2")
    setprevcolor(selectedcolor)
  }, [selectedcolor]);
  useEffect(() => {
    if (screen.width > 768) {
      setsw(true)
    }
    document.getElementById(0).classList.add("border-2")
  }, []);

  const measuringguide = () => {
    setisenable(!isenable)
  }
  const mechanismtype=(e)=>{
    setmechanism(e.target.id)
  }


  return <>
    {sw && <div style={{height:"90vh"}}  className='w-full -my-20'><img className='h-full  w-full' alt='img' src='/zebra blind.jpg'></img></div>}

    <section style={{  fontFamily: "'poppins', sans-serif"}} className="text-gray-900 flex justify-center  body-font overflow-hidden">
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
      <div  className="md:w-11/12 w-full md:py-12 mt-10 md:mt-20">

        <div className='w-full  flex-col justify-center md:flex-row flex '>
          <div  className='md:w-5/12 w-full'>
           {sw && <img alt="ecommerce" style={{height:"100vh"}} className=" w-full" src="/Wall Image.png" />}
            <img alt="ecommerce" style={{height:"45vh",bottom:"-48.9vh",left:"24.5vw"}} className=" md:absolute mx-auto pb-10 " src={product.variants[selectedcolor].img} />
            <div style={{ backgroundColor: "#ebeaeb"}} className='w-full pl-6  pb-4'>
              
              <div  className='text-gray-800 flex items-center text-base  pb-2 pt-6'><p style={{backgroundColor: "#bfb1c4"}} className='w-5 -ml-6 absolute h-3'></p>Product Summary</div>
              <div className='w-full  grid grid-flow-col  '>
                <div  className='text-gray-800 border-r text-sm  border-gray-300'>
                  <p className='leading-loose '>Style</p>
                  <p className='leading-loose '>Color</p>
                  <p className='leading-loose '>Height</p>
                  <p className='leading-loose '>Width</p>
                  <p className='leading-loose '>Mechanism</p>
                  <p className='leading-loose '>Mount Type</p>
                  <p className='leading-loose '>Cordlock Position</p>
                  <p className='leading-loose '>Valance Options</p>
                  <p className='leading-loose '>Ladder Type</p>
                  
                </div>
                <div  className='ml-8 text-sm'>
                  <p className='leading-loose '>{product.category}</p>
                  <p className='leading-loose '>{product.variants[selectedcolor].color}</p>
                  <p className='leading-loose '>{selectedheight}{selectedexactheight} inches</p>
                  <p className='leading-loose '>{selectedwidth}{selectedexactwidth} inches</p>
                  <p className='leading-loose '>{mechanism}</p>
                  <p className='leading-loose '>Unkonwn</p>
                  <p className='leading-loose '>Unkonwn</p>
                  <p className='leading-loose '>Unkonwn</p>
                  <p className='leading-loose '>Unkonwn</p>
                </div>
              </div>
            </div>
            </div>

            <div style={{ backgroundColor: "#bfb1c4" }} className='py-12 md:w-1/2 w-full px-10 '>
          <div  className='flex flex-col '>
            <span style={{fontFamily: "'Fjalla One', sans-serif"}} className=" text-white text-5xl uppercase ">{product.title} </span>
            <div  className='space-x-6 flex py-6  text-base'>
              <a href='#details' className='cursor-pointer flex items-center text-white  space-x-3  pr-4 border-black underline underline-offset-2 '><BsInfoCircleFill /><span>Products Details</span></a>
              <a className='cursor-pointer underline flex items-center text-white  space-x-3 underline-offset-2 '><BsImages /><span>Products Gallery</span></a>
            </div>
           
            <div  className="  w-full px-8 mb-6 bg-white  ">
              <div className='  font-medium mt-4  flex items-center'><p style={{backgroundColor: "#bfb1c4", fontFamily: "'poppins', sans-serif"}}  className='w-8 -ml-10 absolute h-3'></p>Color Selection</div>
              <div className='overflow-y-scroll max-h-96'>
              <div className='grid grid-flow-row  md:grid-cols-3'>
                {

                  Object.keys(product.variants).map((p) => { return <div key={p} ><div id={p} onClick={(e) => { selectcolor(e) }} style={{ backgroundImage: `url(${product.variants[p].colorcode})`, borderColor: "red"}} className=" h-32 mt-8  cursor-pointer w-32"></div><span className='text-sm'>{product.variants[p].color}</span></div> })}
              </div>
              </div>

              <div className='mt-12 flex space-x-8 items-center justify-start '>
                <span>Quantity</span>
                <div className='flex items-center  border border-black '>
                <AiOutlineMinus onClick={() => {qty>1?setqty(qty-1):setqty(qty)}} className=' cursor-pointer mx-2' />
                <span className='h-full border-x  border-black w-10 text-center'>{qty}</span>
                <AiOutlinePlus onClick={() => { setqty(qty+1)}} className=' cursor-pointer mx-2' />
                </div>
                </div>
             
              <div  className="flex flex-col md:flex-row justify-between items-center my-6 pt-5">
              <div className='text-base'> Your Price
              <span style={{fontFamily: "'Fjalla One', sans-serif"}} className="title-font ml-4  text-xl text-gray-900">₹ {product.price*qty}</span></div>
              <div className='flex space-x-4 mt-4 md:mt-0'>
              <button style={{ backgroundColor: "#bfb1c4" }} className="flex text-sm   border-0 md:py-2 py-1 w-28 justify-center focus:outline-none text-white " onClick={() => { buyNow(product.slug,qty, product.price, product.title, cartheight, cartwidth, product.variants[selectedcolor].color,mechanism ,product.variants[selectedcolor].img) }}>Buy now</button>
              <button style={{ backgroundColor: "#bfb1c4" }} onClick={() => { addToCart(product.slug, qty, product.price, product.title,cartheight, cartwidth, product.variants[selectedcolor].color, mechanism ,product.variants[selectedcolor].img) }} className="flex text-sm   border-0 md:py-2 py-1 w-28 justify-center focus:outline-none text-white  ">Add to cart</button>
              </div>
            </div>
            </div>
            </div>


            <div className='flex flex-col'>

              <Disclosure className="">
                {({ open }) => (
                  <>
                    <Disclosure.Button className="flex w-full items-center bg-white px-7  text-left text-sm font-medium   focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                    <p style={{backgroundColor: "#bfb1c4"}} className='w-8 -ml-10 absolute h-3'></p>
                     <div className='flex justify-between w-full py-6'>
                      <span className='text-base 2xl:text-lg'>Product measurement</span>
                      <IoIosArrowDown
                        className={`${open ? 'rotate-180 transform' : ''
                          } h-5 w-5 `}
                      />
                      </div>
                    </Disclosure.Button>
                    <Disclosure.Panel className="px-7  pt-4 pb-6 text-sm bg-white text-gray-900">
                      <h1>Provide exact measurements. we will deduct for inside mount.
                      </h1>
                      <div className="flex my-10 flex-col md:flex-row mx-auto space-y-4 md:space-y-0 md:space-x-10 ">

                        <div className='flex items-center'><span className="">Height</span>

                          <select id='h' onChange={(e) => selecth(e)} style={{fontFamily:"'montstrrat,sans-serif"}} className='w-20 border ml-2 pl-2  text-xs 2xl:text-base md:text-lg  h-11'>
                            {/* {product.height.map((i) => { return <option className='text-lg font-semibold ' key={i}>{i}  </option> })} */}
                            {height.map((i) => { return <option className=' ' key={i}>{i}  </option> })}
                          </select>


                          <select id='exactheight' onChange={(e) => selecteh(e)} style={{fontFamily:"'montstrrat,sans-serif"}} className='w-20 h-11  border ml-2 pl-2  text-xs 2xl:text-base md:text-lg  '>
                            {/* {product.height.map((i) => { return <option className=' ' key={i}>{i}  </option> })} */}
                            {exactHeightOrWidth.map((i) => { return <option className=' ' key={i}>{i}  &quot;</option> })}
                          </select>
                        </div>


                        <div className='flex items-center'><span className="">Width</span>

                          <select id='w' onChange={(e) => selectw(e)} style={{fontFamily:"'montstrrat,sans-serif"}} className='w-20 h-11  border ml-2 pl-2  text-xs 2xl:text-base md:text-lg '>
                            {/* {product.width.map((i) => { return <option className='' key={i}>{i}  </option> })} */}
                            {width.map((i) => { return <option className='' key={i}>{i}  </option> })}
                          </select>


                          <select id='exactwidth' onChange={(e) => selectew(e)} style={{fontFamily:"'montstrrat,sans-serif"}} className='w-20 h-11 border ml-2 pl-2  text-xs 2xl:text-base md:text-lg  '>
                            {/* {product.height.map((i) => { return <option className=' ' key={i}>{i}  </option> })} */}
                            {exactHeightOrWidth.map((i) => { return <option className=' ' key={i}>{i}  &quot;</option> })}
                          </select>
                        </div>

                      </div>
                      <div onClick={measuringguide} className='underline underline-offset-4 cursor-pointer '>Measuring Guide</div>
                      <Dialog style={{ width: "100vw", height: "100vh" }} className="fixed  flex justify-center items-center top-0 bg-black  bg-opacity-60 z-50" open={isenable} onClose={() => setisenable(false)}>
                        <Dialog.Panel > 
                          <MdOutlineCancel onClick={measuringguide} className="text-2xl  cursor-pointer 2xl:text-4xl absolute right-44 top-8" />
                          <div className='flex flex-col md:px-40 md:py-10 '>
                          <img className='' alt='img' src='https://i.ibb.co/8BPV95M/IMAGE-PRODUCT-MEASUREMENTS.png'></img>
                          <div className='bg-white p-8 grid md:grid-flow-col grid-flow-row'>
                            <h1 style={{fontFamily: "'Fjalla One', sans-serif"}} className='md:pr-4 text-xl 2xl:text-4xl pb-4 md:pb-0 text-gray-700 md:border-r-2'>HOW TO MEASURE<br></br> OUTSIDE MOUNT</h1>
                            <p style={{fontFamily: "'Roboto Slab', serif"}} className='text-sm 2xl:text-lg md:pl-4'>Measure the Width(side to side) between the two outermost points of the window frame, or the area which is to be covered.
                              Measure the height(top to bottom) of the outermost point of the frame to the window sill of the bottom of the frame, or from where ever you want your blind to begin to where you want it to end.</p>
                          </div>
                          </div>
                        </Dialog.Panel>
                      </Dialog>

                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
              <Disclosure as="div" className="">
                {({ open }) => (
                  <>
                    <Disclosure.Button className="flex w-full justify-between  bg-white px-7 text-left text-sm font-medium  items-center focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                    <p style={{backgroundColor: "#bfb1c4"}} className='w-8 -ml-10 absolute h-3'></p>
                    <div className='flex justify-between border-t-2 w-full py-6'>
                      <span className='text-base 2xl:text-lg'>Select Mechanism</span>
                      <IoIosArrowDown
                        className={`${open ? 'rotate-180 transform' : ''
                          } h-5 w-5 `}
                      />
                      </div>
                    </Disclosure.Button>
                    <Disclosure.Panel className=" pt-2 pb-8 text-sm  text-gray-500 flex justify-start px-7 bg-white">
                      <button id="Manual"  onClick={(e)=>mechanismtype(e)} style={{borderColor:"#bfb1c4"}} className='btn  border-2  py-2 w-32 flex justify-center '>Manual</button>
                      <button style={{borderColor:"#bfb1c4"}} className='btn  border-2 ml-6 py-2 w-32 flex justify-center'>Motorized</button>
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>

            </div>

           
            </div>
            </div>

        <div style={{fontFamily: "'Roboto Slab', serif"}} className='grid grid-flow-row mb-20 md:mb-0 px-12 mt-14'>
          <div className='flex flex-col md:flex-row'>
            
            <div id='details' className='text-xl mr-11 w-8/12  lg:text-base text-left '>
            <div style={{backgroundColor: "#bfb1c4"}} className='w-10 mb-2  h-3'></div><span  style={{fontFamily: "'poppins', sans-serif"}}>Care & Cleaning</span>
              <p className="leading-relaxed text-sm    mt-7 ">{product.care}</p>
            </div>

            <div className='text-xl lg:text-base w-11/12 mt-6 md:mt-0 text-left '>
            <p style={{backgroundColor: "#bfb1c4"}} className='w-10 h-3 mb-2'></p><span style={{fontFamily: "'poppins', sans-serif"}}> Product Details</span>
              <p className="leading-relaxed text-sm    mt-7  ">{product.desc}</p>
            </div>
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


  return {
    props: { product: JSON.parse(JSON.stringify(product)) }, // will be passed to the page component as props
  }
}

export default Post