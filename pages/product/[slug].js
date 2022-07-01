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
import { Router } from 'next/router';

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

  {sw && <div style={{height:"6.2vw",backgroundClip:""}} className='absolute border-b  border-black  top-0 w-full  '></div>}
    {sw && <div style={{height:"73vh",marginBottom:"4.5vw",marginTop:"10vw" ,padding:"0vw 7.5vw"}}  className='w-full overflow-hidden '><img className='  w-full' alt='img' src={product.poster}></img></div>}
{!sw && <div style={{backgroundColor:"#bfb1c4"}} className='w-full absolute top-0 h-12'></div>}
    <section id='main'   style={{  fontFamily: "'poppins', sans-serif"}} className="text-gray-900  justify-center flex body-font overflow-hidden">
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
      <div  className=" w-full ">

        <div  className='w-full  flex-col justify-center md:flex-row flex '>
          <div style={{ backgroundColor: "#ebeaeb"}} className='md:w-5/12 w-full'>
           {sw && <img alt="ecommerce" style={{height:"100vh"}} className=" w-full" src="/Wall Image.png" />}
            <img alt="ecommerce" style={{height:"45vh",bottom:"-55vh",left:"24.5vw"}} className=" md:absolute mx-auto md:py-0 py-10 " src={product.variants[selectedcolor].img} />
            <div style={{fontSize:"1.1vw",paddingLeft:"1.875vw"}} className='w-full pl-6  pb-4'>
              
              <div style={{fontSize:"1.25vw",padding:"1.875vw"}} className='text-gray-800 flex items-center  pb-2 pt-6'><p style={{backgroundColor: "#bfb1c4",height:"1.1vw",width:"2vw",marginLeft:"-2.3vw"}} className='w-5 -ml-6 absolute h-3'></p>Product Summary</div>
              <div className='w-full  grid grid-flow-col  '>
                <div  className='text-gray-800 border-r  border-gray-300'>
                  <p className='leading-loose '>Style</p>
                  <p className='leading-loose '>Color</p>
                  <p className='leading-loose '>Height</p>
                  <p className='leading-loose '>Width</p>
                  <p className='leading-loose '>Mechanism</p>
                 
                  
                </div>
                <div  className='ml-8 '>
                  <p className='leading-loose '>{product.category}</p>
                  <p className='leading-loose '>{product.variants[selectedcolor].color}</p>
                  <p className='leading-loose '>{selectedheight}{selectedexactheight} inches</p>
                  <p className='leading-loose '>{selectedwidth}{selectedexactwidth} inches</p>
                  <p className='leading-loose '>{mechanism}</p>
                 
                </div>
              </div>
            </div>
            </div>

            <div style={{ backgroundColor: "#ebeaeb",padding:"3.75vw 3.125vw" }} className='py-12 text-gray-800 md:w-1/2 w-full px-4 md:px-10 '>
          <div  className='flex flex-col '>
            <span style={{fontFamily: "'Fjalla One', sans-serif",fontSize:"3.8vw"}} className="  text-5xl uppercase ">{product.title} </span>
            <div style={{fontSize:"1.25vw",padding:"1.875vw 0vw"}} className='space-x-6 flex py-6  text-base'>
              <a href='#details' className='cursor-pointer flex items-center  space-x-3  pr-4 border-black underline underline-offset-2 '><BsInfoCircleFill /><span>Products Details</span></a>
              <a className='cursor-pointer underline flex items-center   space-x-3 underline-offset-2 '><BsImages /><span>Products Gallery</span></a>
            </div>
           
            <div style={{padding:"0vw 2.5vw",marginBottom:"1.875vw"}} className="  w-full px-8 mb-6 bg-white  ">
              <div style={{fontSize:"1.25vw",marginTop:"1.25vw"}} className='  font-medium mt-4  flex items-center'><p style={{backgroundColor: "#bfb1c4", fontFamily: "'poppins', sans-serif",height:"1vw",width:"2.75vw",marginLeft:"-3.2vw"}}  className='w-8 -ml-10 absolute h-3'></p>Color Selection</div>
              <div style={{height:"30vw"}} className='overflow-y-scroll '>
              <div className='flex justify-center items-center flex-col md:grid md:grid-flow-row w-full md:md:grid-cols-2 2xl:grid-cols-3'>
                {

                  Object.keys(product.variants).map((p) => { return <div key={p} ><div id={p} onClick={(e) => { selectcolor(e) }} style={{ backgroundImage: `url(${product.variants[p].colorcode})`, borderColor: "red",height:"20vh",width:"10vw",minWidth:"8rem"}} className="  mt-8  cursor-pointer "></div><span style={{fontSize:"1.1vw"}}>{product.variants[p].color}</span></div> })}
              </div>
              </div>

              <div style={{marginTop:"3.75vw"}} className='mt-12 flex space-x-8 items-center justify-start '>
                <span style={{fontSize:"1.25vw"}}>Quantity</span>
                <div style={{fontSize:"1.25vw"}} className='flex items-center  border border-black '>
                <AiOutlineMinus onClick={() => {qty>1?setqty(qty-1):setqty(qty)}} className=' cursor-pointer mx-2' style={{margin:"0vw 1vw"}} />
                <span style={{width:"3.5vw"}} className='h-full border-x  border-black w-10 text-center'>{qty}</span>
                <AiOutlinePlus onClick={() => { setqty(qty+1)}} className=' cursor-pointer mx-2' style={{margin:"0vw 1vw"}} />
                </div>
                </div>
             
              <div style={{margin:"1.875vw 0vw",paddingTop:"1.6vw"}} className="flex flex-col md:flex-row justify-between items-center my-6 pt-5">
              <div style={{fontSize:"1.25vw"}}> Your Price
              <span style={{fontFamily: "'Fjalla One', sans-serif",fontSize:"1.58vw"}} className="title-font ml-4  text-xl text-gray-900">₹ {product.price*qty}</span></div>
              <div className='flex space-x-4 mt-4 md:mt-0'>
              <button style={{ backgroundColor: "#bfb1c4" ,fontSize:"1.1vw",width:"8.75vw",height:"2.8125vw"}} className="flex items-center border-0 md:py-2 py-1 w-28 justify-center focus:outline-none text-white " onClick={() => { buyNow(product.slug,qty, product.price, product.title, cartheight, cartwidth, product.variants[selectedcolor].color,mechanism ,product.variants[selectedcolor].img) }}>Buy now</button>
              <button style={{ backgroundColor: "#bfb1c4" ,fontSize:"1.1vw",width:"8.75vw",height:"2.8125vw"}} onClick={() => { addToCart(product.slug, qty, product.price, product.title,cartheight, cartwidth, product.variants[selectedcolor].color, mechanism ,product.variants[selectedcolor].img) }} className="flex items-center   border-0 md:py-2 py-1 w-28 justify-center focus:outline-none text-white  ">Add to cart</button>
              </div>
            </div>
            </div>
            </div>


            <div style={{fontSize:"1.1vw"}} className='flex flex-col'>

              <Disclosure className="">
                {({ open }) => (
                  <>
                    <Disclosure.Button style={{padding:"0vw 2.1875vw"}} className="flex w-full items-center bg-white px-7  text-left text-sm font-medium   focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                    <p style={{backgroundColor: "#bfb1c4",height:"1vw",width:"2.75vw",marginLeft:"-3.2vw"}} className='w-8 -ml-10 absolute h-3'></p>
                     <div style={{fontSize:"1.25vw",padding:"1.875vw 0vw"}} className='flex justify-between w-full py-6'>
                      <span  >Product measurement</span>
                      <IoIosArrowDown
                        className={`${open ? 'rotate-180 transform' : ''
                          }  `}
                      />
                      </div>
                    </Disclosure.Button>
                    <Disclosure.Panel style={{padding:"1.25vw 2.25vw 1.875vw "}} className="px-7  pt-4 pb-6  bg-white text-gray-900">
                      <h1>Provide exact measurements. we will deduct for inside mount.
                      </h1>
                      <div className="flex my-10 flex-col md:flex-row mx-auto space-y-4 md:space-y-0 md:space-x-10 ">

                        <div className='flex items-center'><span className="">Height</span>

                          <select id='h' onChange={(e) => selecth(e)} style={{fontFamily:"'montstrrat,sans-serif",height:"3.45vw",width:"6.25vw",marginLeft:"0.625vw",paddingLeft:"0.625vw",fontSize:"1.25vw"}} className='w-20 border ml-2 pl-2   h-11'>
                            {/* {product.height.map((i) => { return <option className='text-lg font-semibold ' key={i}>{i}  </option> })} */}
                            {height.map((i) => { return <option className=' ' key={i}>{i}  </option> })}
                          </select>


                          <select id='exactheight' onChange={(e) => selecteh(e)} style={{fontFamily:"'montstrrat,sans-serif",height:"3.45vw",width:"6.25vw",marginLeft:"0.625vw",paddingLeft:"0.625vw",fontSize:"1.25vw"}} className='w-20 h-11  border ml-2 pl-2   '>
                            {/* {product.height.map((i) => { return <option className=' ' key={i}>{i}  </option> })} */}
                            {exactHeightOrWidth.map((i) => { return <option className=' ' key={i}>{i}  &quot;</option> })}
                          </select>
                        </div>


                        <div className='flex items-center'><span className="">Width</span>

                          <select id='w' onChange={(e) => selectw(e)} style={{fontFamily:"'montstrrat,sans-serif",height:"3.45vw",width:"6.25vw",marginLeft:"0.625vw",paddingLeft:"0.625vw",fontSize:"1.25vw"}} className='w-20 h-11  border ml-2 pl-2  '>
                            {/* {product.width.map((i) => { return <option className='' key={i}>{i}  </option> })} */}
                            {width.map((i) => { return <option className='' key={i}>{i}  </option> })}
                          </select>


                          <select id='exactwidth' onChange={(e) => selectew(e)} style={{fontFamily:"'montstrrat,sans-serif",height:"3.45vw",width:"6.25vw",marginLeft:"0.625vw",paddingLeft:"0.625vw",fontSize:"1.25vw"}} className='w-20 h-11 border ml-2 pl-2   '>
                            {/* {product.height.map((i) => { return <option className=' ' key={i}>{i}  </option> })} */}
                            {exactHeightOrWidth.map((i) => { return <option className=' ' key={i}>{i}  &quot;</option> })}
                          </select>
                        </div>

                      </div>
                      <div onClick={measuringguide} className='underline underline-offset-4 cursor-pointer '>Measuring Guide</div>
                      <Dialog style={{ width: "100vw", height: "100vh" }} className="fixed  flex justify-center items-center top-0 bg-black  bg-opacity-60 z-50" open={isenable} onClose={() => setisenable(false)}>
                        <Dialog.Panel > 
                          <MdOutlineCancel style={{top:"2vw",right:"10vw",fontSize:"2vw"}} onClick={measuringguide} className=" text-white md:text-black cursor-pointer  absolute" />
                          <div style={{padding:"1vw 8vw"}} className='flex flex-col md:px-40 md:py-10 '>
                          <img className='' alt='img' src='/Untitled-3.png'></img>
                          <div className='bg-white p-8 grid md:grid-flow-col grid-flow-row'>
                            <h1 style={{fontFamily: "'Fjalla One', sans-serif",fontSize:"1.6vw",paddingRight:'1.3vw'}} className='md:pr-4 text-xl 2xl:text-4xl pb-4 md:pb-0 text-gray-700 md:border-r-2'>HOW TO MEASURE</h1>
                            <p style={{fontFamily: "'Roboto Slab', serif",fontSize:"1.1vw",paddingLeft:"1.3vw"}} className='text-sm 2xl:text-lg md:pl-4'>Measure the Width(side to side) between the two outermost points of the window frame, or the area which is to be covered.
                              Measure the height(top to bottom) of the outermost point of the frame to the window sill of the bottom of the frame, or from where ever you want your blind to begin to where you want it to end.</p>
                          </div>
                          </div>
                        </Dialog.Panel>
                      </Dialog>

                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
              <Disclosure as="div" style={{fontSize:"1.25vw"}}>
                {({ open }) => (
                  <>
                    <Disclosure.Button style={{padding:"0vw 2.1875vw"}} className="flex w-full justify-between  bg-white px-7 text-left text-sm font-medium  items-center focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                    <p style={{backgroundColor: "#bfb1c4",height:"1vw",width:"2.75vw",marginLeft:"-3.2vw"}} className='w-8 -ml-10 absolute h-3'></p>
                    <div style={{fontSize:"1.25vw",padding:"1.875vw 0vw"}} className='flex justify-between border-t-2 w-full py-6'>
                      <span  >Select Mechanism</span>
                      <IoIosArrowDown
                        className={`${open ? 'rotate-180 transform' : ''
                          } `}
                      />
                      </div>
                    </Disclosure.Button>
                    <Disclosure.Panel style={{padding:"0.625vw 2.1875vw 2.5vw"}} className=" pt-2 pb-8  text-gray-500 flex justify-start px-7 bg-white">
                      <button id="Manual"  onClick={(e)=>mechanismtype(e)} style={{borderColor:"#bfb1c4",height:"3.4375vw",width:"10vw"}} className='items-center btn  border-2  py-2 w-32 flex justify-center '>Manual</button>
                      <button style={{borderColor:"#bfb1c4",height:"3.4375vw",width:"10vw",marginLeft:"1.875vw"}} className='items-center btn  border-2 ml-6 py-2 w-32 flex justify-center'>Motorized</button>
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>

            </div>

           
            </div>
            </div>

        <div style={{fontFamily: "'Roboto Slab', serif",marginTop:"4.375vw",padding:"0vw 3.75vw"}} className='grid grid-flow-row mb-20 md:mb-0 px-12 mt-14'>
          <div className='flex flex-col md:flex-row'>
            
            <div id='details' className='mr-11 w-8/12  text-left 'style={{fontSize:"1.25vw",marginRight:"5vw"}}>
            <div style={{backgroundColor: "#bfb1c4",height:"1.5vw",width:"5vw",marginBottom:"0.75vw"}} className='w-10 mb-2  h-3'></div><span  style={{fontFamily: "'poppins', sans-serif"}}>Care & Cleaning</span>
              <p className="leading-relaxed   mt-7 " style={{fontSize:"1.1vw",marginTop:"2.188vw"}}>{product.care}</p>
            </div>

            <div className=' w-11/12 mt-6 md:mt-0 text-left 'style={{fontSize:"1.25vw"}}>
            <p style={{backgroundColor: "#bfb1c4",height:"1.5vw",width:"5vw",marginBottom:"0.75vw"}} className='w-10 h-3 mb-2'></p><span style={{fontFamily: "'poppins', sans-serif"}}> Product Details</span>
              <p className="leading-relaxed   mt-7  " style={{fontSize:"1.1vw",marginTop:"2.188vw"}}>{product.desc}</p>
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