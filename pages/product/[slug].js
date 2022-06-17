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


const Post = ({ buyNow, addToCart, product }) => {
  const [selectedheight, setselectedheight] = useState(16);
  const [selectedwidth, setselectedwidth] = useState(16);
  const [selectedexactwidth, setselectedexactwidth] = useState();
  const [selectedexactheight, setselectedexactheight] = useState();
  const [selectedcolor, setselectedcolor] = useState(0);
  const [prevcolor, setprevcolor] = useState(0);
  const [pin, setPin] = useState();
  const [service, setService] = useState();
  const [isenable, setisenable] = useState(false);
  const [mechanism, setmechanism] = useState("");

  const height = []
  const width = []
  const exactHeightOrWidth = ["0", "1/8", "1/4", "3/8", "1/2", "5/8", "3/4", "7/8"]

  for (let i = 6; i < 121; i++) {
    height.push(i)
  }
  for (let i = 14; i < 97; i++) {
    width.push(i)
  }

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
  function selecteh(e) {
    let a= eval(e.target.value)
    let b=a.toString()
    let c=b.slice(1)
    setselectedexactheight(c)
  }
  function selectew(e) {
    let a= eval(e.target.value)
    let b=a.toString()
    let c=b.slice(1)
   
    setselectedexactwidth(c)
  }
  function selectw(e) {
    setselectedwidth(e.target.value)
  }
  function selectcolor(e) {
    setselectedcolor(e.target.id)

    document.getElementById(e.target.id).classList.add("border-4")


  }
  useEffect(() => {
    document.getElementById(prevcolor).classList.remove("border-4")
    setprevcolor(selectedcolor)
  }, [selectedcolor]);
  useEffect(() => {
    console.log(product)
    document.getElementById(0).classList.add("border-4")
  }, []);

  const measuringguide = () => {
    setisenable(!isenable)
  }
  const mechanismtype=(e)=>{
    setmechanism(e.target.id)
  }


  return <>
    <div style={{ backgroundColor: "#bfb1c4" }} className='w-full h-20 absolute top-0'></div>

    <section style={{ fontFamily: "'lato', sans-serif" }} className="text-gray-900 flex justify-center  body-font overflow-hidden">
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
      <div style={{ width: "90vw" }} className=" md:py-20">

        <div className='w-full  flex-col md:flex-row flex   '>
          <div style={{ width: "44vw" }} className=' '><img alt="ecommerce" className=" w-full p-16 md:p-0  " src={product.variants[selectedcolor].img} />
            <div className=' '><h1 style={{ fontFamily: "'lato',sans-serif" }} className='text-black text-lg font-bold py-4'>Product Summary</h1>
              <div className='w-full  grid grid-flow-col pr-10'>
                <div style={{ fontFamily: "'lato',sans-serif" }} className='text-black border-r border-gray-300'>
                  <p className='leading-loose font-semibold'>Style</p>
                  <p className='leading-loose font-semibold'>Color</p>
                  <p className='leading-loose font-semibold'>Height</p>
                  <p className='leading-loose font-semibold'>Width</p>
                  <p className='leading-loose font-semibold'>Mechanism</p>
                </div>
                <div style={{ fontFamily: "'lato',sans-serif" }} className='ml-8 '>
                  <p className='leading-loose '>{product.category}</p>
                  <p className='leading-loose '>{product.variants[selectedcolor].color}</p>
                  <p className='leading-loose '>{selectedheight}{selectedexactheight} inches</p>
                  <p className='leading-loose '>{selectedwidth}{selectedexactwidth} inches</p>
                  <p className='leading-loose '>{mechanism}</p>
                </div>
              </div>
            </div></div>
          <div style={{ width: "55vw", backgroundColor: "#ebeaeb" }} className='flex flex-col  px-2 md:px-14 '>
            <h1 className=" text-gray-900  text-2xl md:text-3xl md:first-letter:mt-10 title-font font-bold  mt-14 mb-8">{product.title} </h1>
            <div style={{ fontFamily: "'poppins',sans-serif" }} className='space-x-6 flex mb-8 text-sm'>
              <a href='#details' className='cursor-pointer flex items-center  space-x-3 border-r-2 pr-4 border-black underline underline-offset-2 '><BsInfoCircleFill /><span>Products Details</span></a>
              <a className='cursor-pointer underline flex items-center space-x-3 underline-offset-2 '><BsImages /><span>Products Gallery</span></a>
            </div>

            <div  className="  w-full px-8   h-80 mb-8 overflow-y-scroll bg-white  ">
              <p className='  font-medium pt-2 '>COLOR SELECTION</p>
              <div className='grid grid-flow-row grid-cols-3'>
                {

                  Object.keys(product.variants).map((p) => { return <div key={p} ><div id={p} onClick={(e) => { selectcolor(e) }} style={{ backgroundColor: `${product.variants[p].colorcode}`, borderColor: "#bfb1c4", borderBlockColor: "#ebeaeb" }} className=" h-32 mt-8  cursor-pointer w-32"></div><span className='text-sm  '>{product.variants[p].color}</span></div> })}
              </div>
            </div>



            <div className='flex flex-col'>

              <Disclosure>
                {({ open }) => (
                  <>
                    <Disclosure.Button className="flex w-full justify-between items-center bg-white px-4 py-4 text-left text-sm font-medium   focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                      <span className='text-lg 2xl:text-xl'>Product measurement</span>
                      <IoIosArrowDown
                        className={`${open ? 'rotate-180 transform' : ''
                          } h-5 w-5 `}
                      />
                    </Disclosure.Button>
                    <Disclosure.Panel className="px-4 pt-4 pb-6 text-sm bg-white text-gray-900">
                      <h1>PROVIDE EXACT MEASUREMENTS. WE WILL DEDUCT FOR INSIDE MOUNT.
                      </h1>
                      <div className="flex my-10  mx-auto  space-x-10 ">

                        <div className='flex items-center'><span className="">Height</span>

                          <select id='h' onChange={(e) => selecth(e)} className='w-16  border ml-2  text-xs 2xl:text-base md:text-sm '>
                            {/* {product.height.map((i) => { return <option className='text-lg font-semibold ' key={i}>{i}  </option> })} */}
                            {height.map((i) => { return <option className=' ' key={i}>{i}  </option> })}
                          </select>


                          <select id='exactheight' onChange={(e) => selecteh(e)} className='w-16  border ml-2  text-xs 2xl:text-base md:text-sm '>
                            {/* {product.height.map((i) => { return <option className=' ' key={i}>{i}  </option> })} */}
                            {exactHeightOrWidth.map((i) => { return <option className=' ' key={i}>{i}  </option> })}
                          </select>
                        </div>


                        <div className='flex items-center'><span className="">Width</span>

                          <select id='w' onChange={(e) => selectw(e)} className='w-16  border ml-2  text-xs 2xl:text-base md:text-sm'>
                            {/* {product.width.map((i) => { return <option className='' key={i}>{i}  </option> })} */}
                            {width.map((i) => { return <option className='' key={i}>{i}  </option> })}
                          </select>


                          <select id='exactwidth' onChange={(e) => selectew(e)} className='w-16 border ml-2  text-xs 2xl:text-base md:text-sm '>
                            {/* {product.height.map((i) => { return <option className=' ' key={i}>{i}  </option> })} */}
                            {exactHeightOrWidth.map((i) => { return <option className=' ' key={i}>{i}  </option> })}
                          </select>
                        </div>

                      </div>
                      <div onClick={measuringguide} className='underline underline-offset-4  cursor-pointer '>Measuring Guide</div>
                      <Dialog style={{ width: "100vw", height: "100vh" }} className="fixed  flex justify-center items-center top-0 bg-black  bg-opacity-60 z-50" open={isenable} onClose={() => setisenable(false)}>
                        <Dialog.Panel > 
                          <MdOutlineCancel onClick={measuringguide} className="text-2xl  cursor-pointer 2xl:text-4xl absolute right-44 top-8" />
                          <div className='flex flex-col px-40 py-10'>
                          <img className='' alt='img' src='https://i.ibb.co/8BPV95M/IMAGE-PRODUCT-MEASUREMENTS.png'></img>
                          <div className='bg-white p-8 grid grid-flow-col'>
                            <h1 style={{fontFamily: "'Fjalla One', sans-serif"}} className='pr-4 text-xl 2xl:text-4xl text-gray-700 border-r-2'>HOW TO MEASURE<br></br> OUTSIDE MOUNT</h1>
                            <p style={{fontFamily: "'Roboto Slab', serif"}} className='text-sm 2xl:text-lg pl-4'>Measure the Width(side to side) between the two outermost points of the window frame, or the area which is to be covered.
                              Measure the height(top to bottom) of the outermost point of the frame to the window sill of the bottom of the frame, or from where ever you want your blind to begin to where you want it to end.</p>
                          </div>
                          </div>
                        </Dialog.Panel>
                      </Dialog>

                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
              <Disclosure as="div" className="mt-2">
                {({ open }) => (
                  <>
                    <Disclosure.Button className="flex w-full justify-between  bg-white px-4 py-4 text-left text-sm font-medium  items-center focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                      <span className='text-lg 2xl:text-xl'>Select Mechanism</span>
                      <IoIosArrowDown
                        className={`${open ? 'rotate-180 transform' : ''
                          } h-5 w-5 `}
                      />
                    </Disclosure.Button>
                    <Disclosure.Panel className="px-4 pt-2 pb-8 text-sm  text-gray-500 flex justify-evenly bg-white">
                      <button id="Manual"  onClick={(e)=>mechanismtype(e)} style={{borderColor:"#bfb1c4"}} className='btn  border-2  py-2 px-6'>Manual</button>
                      <button style={{borderColor:"#bfb1c4"}} className='btn  border-2 py-2 px-6'>Motorized</button>
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>

            </div>

            <div style={{ fontFamily: "'Montserrat', sans-serif" }} className="flex justify-center items-center space-x-6 my-6 pt-10">
              <div> Your Price</div>
              <span className="title-font font-medium  text-2xl text-gray-900">₹ {product.price}</span>
              <button style={{ backgroundColor: "#bfb1c4" }} className="flex   font-semibold border-0 md:py-2 py-1 px-1 md:px-6 focus:outline-none text-white " onClick={() => { buyNow(product.slug, product.price, product.title, height, width, product.variants[selectedcolor].color) }}>Buy now</button>
              <button style={{ backgroundColor: "#bfb1c4" }} onClick={() => { addToCart(product.slug, 1, product.price, product.title, height, width, product.variants[selectedcolor].color) }} className="flex   border-0 md:py-2 py-1 px-1 md:px-6 focus:outline-none text-white font-semibold ">Add to cart</button>

            </div></div></div>

        <div className='grid grid-flow-row md:grid-flow-col mt-20'>
          <div>
            <div id='details' className='text-xl lg:text-3xl text-center md:text-left '>Product Details
              <p className="leading-relaxed text-base lg:text-xl font-normal md:pr-60 mt-10">{product.desc}</p>
            </div>

            <div className='text-xl lg:text-3xl text-center md:text-left mt-20'>Care & Cleaning
              <p className="leading-relaxed text-base lg:text-xl font-normal md:pr-60 mt-10">{product.desc}</p>
            </div>
          </div>

          <div>
            <div className='flex mt-12 mb-20 '>
              <input onChange={onChangePin} className='text-sm md:text-lg px-2 border-2 border-gray-400 -md' type="text" placeholder='Enter your pin'></input>
              <button style={{ backgroundColor: "#bfb1c4" }} onClick={checkServiceablilty} className='ml-2 text-white btn border-0 py-2 px-4  focus:outline-none  '>Check</button>
            </div>
          </div>
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