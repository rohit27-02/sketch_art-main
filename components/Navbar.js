/* eslint-disable @next/next/no-html-link-for-pages */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable @next/next/link-passhref */
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { AiOutlineClose, AiOutlinePlus, AiOutlineMinus, AiOutlineMenu } from 'react-icons/ai';
import { MdAccountCircle } from 'react-icons/md';
import { useRef, useState, useEffect } from 'react';
import { HiShoppingCart } from "react-icons/hi"
import { IoIosArrowDown} from "react-icons/io"
import { Squash as Hamburger } from 'hamburger-react'
import Router from 'next/router';
import { Dialog } from '@headlessui/react'
import { GoogleOAuthProvider } from '@react-oauth/google';
import { GoogleLogin } from '@react-oauth/google';
import jwtDecode from 'jwt-decode';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
import { Flip} from 'react-reveal';
import { BsWhatsapp } from "react-icons/bs"
import {ImArrowLeft2 ,ImBin2 } from "react-icons/im"


function Navbar({ saveCart,logout, user, cart, addToCart, removeFromCart, clearCart, subTotal, products }) {
  const [dropDown, setdropDown] = useState(false);
  const [admin, setadmin] = useState(false);
  const [listd, setlistd] = useState(false);
  const [nav, setnav] = useState(false);
  const [data, setdata] = useState([]);
  const [sw, setsw] = useState(false);
  const [subcategory, setsubcategory] = useState([]);
  const [info, setinfo] = useState({});
  const [isOpen, setOpen] = useState(false)
  const [login, setlogin] = useState(false)
  const [email, setemail] = useState("");
  const [password, setPassword] = useState("");
  const [sub, setsub] = useState([]);
  const [method, setmethod] = useState("login");
  const [name, setname] = useState("");
  const [item, setitem] = useState(0);
  const [navqty, setnavqty] = useState({});



 
  const handleChange = (e) => {

    if (e.target.name == "email") {
      setemail(e.target.value)
    }
    if (e.target.name == "password") {
      setPassword(e.target.value)
    }
    if(e.target.name=="name"){
      setname(e.target.value)
    }
  }
  const handleSubmit = async (e) => {
    e.preventDefault()
    const data = { email, password }
    let res = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      }, body: JSON.stringify(data)
    })
    let response = await res.json()
    setemail("")
    setPassword("")
    if (response.admin) {
      localStorage.setItem("admin", response.admin)
    }
    if (response.success) {
      localStorage.setItem("token", response.token)
      toast.success('congratulation your are logged in', {
        position: "top-center",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      setTimeout(() => {
        Router.push(process.env.NEXT_PUBLIC_HOST)
      }, 2000);
    }
    else {
      toast.error(response.error, {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });

    }

  }
  function assign(obj) {
    return { email: obj.email }
  }
  const auth = async (res) => {
    const obj = await jwtDecode(res.credential)
    setemail(obj.email)
    const data = await assign(obj)
    let response = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/auth`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      }, body: JSON.stringify(data)
    })
    let status = await response.json()
    setemail("")
    if (status.success) {
      localStorage.setItem("token", status.token)
      toast.success('congratulation your are logged in', {
        position: "top-center",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      setTimeout(() => {
        Router.push(process.env.NEXT_PUBLIC_HOST)
      }, 2000);
    }
    else {
      toast.warning(status.error, {
        position: "top-center",
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  }
  const handleSubmit2 = async (e) => {
    e.preventDefault()
    const data = { name, email, password }
    let res = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/signup`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      }, body: JSON.stringify(data)
    })
    let response = await res.json()
    if(response.success){
    setemail("")
    setname("")
    setPassword("")
    toast.success('congratulation your account is signed up', {
      position: "top-center",
      autoClose: 1200,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
    
    setTimeout(() => {
      setmethod("login")
    }, 2000);
   
  }
  }
  const assign2=(obj)=>{
    return { name:obj.name, email:obj.email, password:obj.email}
  }
  const auth2 = async (e) => {
    let obj= await jwtDecode(e.credential)
    const data = await assign2(obj)

    let res = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/signup`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      }, body: JSON.stringify(data)
    })
    let response = await res.json()
    setemail("")
    setname("")
    setpassword("")
    if(response.success){
    toast.success('congratulation your account is signed up', {
      position: "top-center",
      autoClose: 1200,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
    setTimeout(() => {
      Router.push("/Login")
    }, 2000);
  }
  }
 

  const toggleCart = () => {
    if (ref.current.classList.contains("translate-x-full")) {
      ref.current.classList.replace("translate-x-full", "translate-x-0");
    }
    else if (!ref.current.classList.contains("translate-x-full")) {
      ref.current.classList.replace("translate-x-0", "translate-x-full");
    }
  };
  const toggleproducts = () => {
setnav(true)
  };
  const offproducts = () => {
setnav(false)
setlistd(false)
  };
  const off=()=>{
    setlistd(false)
  }
  useEffect(() => {
    setadmin(localStorage.getItem("admin"));
    fetch(`${process.env.NEXT_PUBLIC_HOST}/api/getproducts`)
      .then((res) => res.json())
      .then((data) => {
        setdata(data.products)
        setsubcategory(data.subproduct)
        setsub(data.idea)
      })
    fetch(`${process.env.NEXT_PUBLIC_HOST}/api/info`)
      .then((res) => res.json())
      .then((data) => {
        setinfo(data)
      })
    
    if (screen.width > 768) {
      setsw(true)
    }
  setitem(Object.keys(cart).length)
  console.log(Router.beforePopState)
  if(Router.isReady == true){
if(Router.pathname=="/product/[slug]" || Router.pathname=="/Checkout" || Router.pathname=="/motorizedblinds"){
document.getElementById("nav").classList.remove("text-white")
document.getElementById("img").classList.remove("invert")
}
 console.log(Router.pathname) 
}
  }, []);

setInterval(() => {
  if(Object.keys(cart).length>=0 && Object.keys(cart).length !== item){
  setitem(Object.keys(cart).length)}
}, 1000);
 


  
 

 const minus=(e)=>{
  console.log(e.target.id)
  const item = JSON.parse(localStorage.getItem("cart"))
if(item[e.target.id].qty >1){
 item[e.target.id].qty=item[e.target.id].qty-1
 saveCart(item)
 localStorage.setItem("cart",JSON.stringify(item))
 cart[e.target.id].qty=item[e.target.id].qty
}
 }


 const plus=(e)=>{
  console.log(e.target.id)
  const item = JSON.parse(localStorage.getItem("cart"))
 item[e.target.id].qty=item[e.target.id].qty+1
 localStorage.setItem("cart",JSON.stringify(item))
 cart[e.target.id].qty=item[e.target.id].qty
 saveCart(item)

 }

 
  const show=(e)=>{
    setmethod(e.target.id)
  }
  const on=()=>{
    setlistd(true)
    console.log(subcategory)
  }


  const ref = useRef();
 
  return (<>
  <div style={{fontSize:"1.25vw",height:"3.75vw",right:"3.5vw",bottom:"2.6vw"}} className=" fixed overflow-hidden bottom-8 h-12 min-w-fit right-12 z-50 cursor-pointer text-white bg-green-500 rounded-full  items-center whatsapp flex justify-end"><a style={{ fontFamily: "'lato', sans-serif",right:"14vw",bottom:"1vw"}} id="what" className="absolute  right-44 bottom-3 w-0  " href="//api.whatsapp.com/send?phone=+919920223462&text=hii" title="Share on whatsapp">+919920223462</a><BsWhatsapp style={{padding:"0.625vw",fontSize:"3.8vw"}} className=' p-2  z-50 text-5xl ' /></div>

<ToastContainer
          position="top-center"
          autoClose={2000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
    <Dialog style={{ width: "100vw", height: "100vh" }} className="fixed  flex justify-center items-center top-0 bg-black  bg-opacity-60 z-50" open={login} onClose={() => setlogin(false)}>
      <Dialog.Panel >
        {method =="login" && <div style={{fontFamily: "'Roboto Slab', serif"}} className='flex drop-shadow-md rounded-xl'>
          <div className='bg-white block px-10 py-2  rounded-md'>
            <div className="max-w-md  w-full space-y-6">

              <form  onSubmit={handleSubmit} className="mt-8 scale-90 w-full md:scale-100 space-y-6" method="POST">
                <h1 className='text-2xl font-bold text-center text-gray-600'>Welcome to SketchArt</h1>
                <div className=" shadow-sm">
                  <div>
                    <label htmlFor="email" className="sr-only">
                      Email address
                    </label>
                    <input
                      onChange={handleChange}
                      id="email"
                      name="email"
                      type="email"
                      value={email}
                      autoComplete="email"
                      required

                      className="appearance-nonerelative block w-full px-3  py-2 border mb-2 bg-gray-200 placeholder-gray-500 text-gray-900  focus:outline-none focus:ring-black focus:border-black focus:z-10 text-lg"
                      placeholder="Email"
                    />
                  </div>
                  <div>
                    <label htmlFor="password" className="sr-only">
                      Password
                    </label>
                    <input
                      onChange={handleChange}
                      value={password}
                      id="password"
                      name="password"
                      type="password"
                      autoComplete="password"
                      required
                      className="appearance-none  relative block w-96 px-3 py-2 border bg-gray-200 placeholder-gray-500 text-gray-900  focus:outline-none focus:ring-black focus:border-black focus:z-10 text-lg"
                      placeholder="Password"
                    />
                  </div>
                </div>
                <div className=''>
                  <button
                    type="submit"
                    style={{ backgroundColor: "#bfb1c4" }} className="group drop-shadow-sm relative w-full flex justify-center py-2 px-4 border hover:shadow-lg text-white text-sm font-bold  "
                  >

                    Sign in
                  </button>
                  <div className="text-sm space-x-4 mt-2 flex font-medium text-gray-800 justify-center">
                    <a id='forgot' onClick={(e)=>{show(e)}} className='hover:text-black cursor-pointer' href="/Forgot" >
                      Forgot password?
                    </a>
                    <p id='signup' onClick={(e)=>{show(e)}} className='hover:text-black cursor-pointer'>Create account</p>
                  </div>
                </div>
                <div className='flex justify-center space-x-2 '>
                  <div className='border-b border-gray-800 my-3 w-32'></div>
                  <div className=''>Or</div>
                  <div className='border-b border-gray-800 my-3 w-32'></div>
                </div>
                <div className='pb-8 text-center'><GoogleOAuthProvider clientId="306346834844-dut40venl0hhf8vii57vbvimfq3rbb9l.apps.googleusercontent.com"><GoogleLogin
                  onSuccess={res => auth(res)}
                  onError={() => {
                    console.log('Login Failed');
                  }}
                  auto_select
                  useOneTap
                /></GoogleOAuthProvider></div>
              </form>
            </div>
          </div>

        </div>}

        {method =="signup" && <div style={{fontFamily: "'Roboto Slab', serif"}} className='flex drop-shadow-md rounded-xl'>
          <div className='bg-white block px-10 py-2  rounded-md'>
            <div className="max-w-md  w-full space-y-6">

              <form onSubmit={handleSubmit2} className="mt-8 scale-90 w-full md:scale-100 space-y-6" method="POST">
                <h1 className='text-2xl font-bold text-center text-gray-600'>Welcome to SketchArt</h1>
                <div className=" shadow-sm">
                  <div>
                   
                    <input
                      onChange={handleChange}
                      id="name"
                      name="name"
                      type="text"
                      value={name}
                      autoComplete="name"
                      required

                      className="appearance-nonerelative block w-full px-3  py-2 border mb-2 bg-gray-200 placeholder-gray-500 text-gray-900  focus:outline-none focus:ring-black focus:border-black focus:z-10 text-lg"
                      placeholder="Name"
                    />
                  </div>
                  <div>
                   
                    <input
                      onChange={handleChange}
                      id="email"
                      name="email"
                      type="email"
                      value={email}
                      autoComplete="email"
                      required

                      className="appearance-nonerelative block w-full px-3  py-2 border mb-2 bg-gray-200 placeholder-gray-500 text-gray-900  focus:outline-none focus:ring-black focus:border-black focus:z-10 text-lg"
                      placeholder="Email"
                    />
                  </div>
                  <div>
                   
                    <input
                      onChange={handleChange}
                      value={password}
                      id="password"
                      name="password"
                      type="password"
                      autoComplete="password"
                      required
                      className="appearance-none  relative block w-96 px-3 py-2 border bg-gray-200 placeholder-gray-500 text-gray-900  focus:outline-none focus:ring-black focus:border-black focus:z-10 text-lg"
                      placeholder="Password"
                    />
                  </div>
                </div>
                <div className=''>
                  <button
                    type="submit"
                    style={{ backgroundColor: "#bfb1c4" }} className="group drop-shadow-sm relative w-full flex justify-center py-2 px-4 border hover:shadow-lg text-white text-sm font-bold  "
                  >

                    Sign up
                  </button>
                  <div className="text-sm space-x-4 mt-2 flex font-medium text-gray-800 justify-center">
                   
                    <p id='login' onClick={(e)=>{show(e)}} className='hover:text-black cursor-pointer pt-2 '>Already have an account ?</p>
                  </div>
                </div>
                <div className='flex justify-center space-x-2 '>
                  <div className='border-b border-gray-800 my-3 w-32'></div>
                  <div className=''>Or</div>
                  <div className='border-b border-gray-800 my-3 w-32'></div>
                </div>
                <div className='pb-8 text-center'><GoogleOAuthProvider clientId="306346834844-dut40venl0hhf8vii57vbvimfq3rbb9l.apps.googleusercontent.com"><GoogleLogin
                  onSuccess={res => auth2(res)}
                  onError={() => {
                    console.log('Login Failed');
                  }}
                  auto_select
                  useOneTap
                /></GoogleOAuthProvider></div>
              </form>
            </div>
          </div>

        </div>}

      </Dialog.Panel>
    </Dialog>

  
    {dropDown && <div onMouseLeave={() => setdropDown(false)} style={{fontSize:"1.4vw",marginRight:"2.6vw",top:"4.6vw",padding:"0.2vw"}} className='absolute animate-fade-in-down right-14 md:right-7 2xl:text-2xl md:text-base bg-white  shadow-black shadow-sm text-center z-50 top-16 px-5  text-lg md:px-0 py-3  md:acctext '>
      <ul>
        
        <a className='  ' href={'/orders'}><li className=''>Orders</li></a>
        <li className='cursor-pointer' onClick={logout}>Logout</li>
        {admin == "true" && <a className=' text-center ' href={"/adminpanel"}><li className=''>Admin Panel</li></a>}
      </ul>
    </div>}
    <div ref={ref}  style={{fontFamily: "'lato', sans-serif",width:"35vw",padding:"1.5vw 0.5vw",fontSize:"0.8vw"}} className="sidebar text-gray-600 overflow-y-scroll scrollbar-hide text-lg md:text-xl 2xl:text-2xl fixed right-0 top-0 flex   flex-col p-10 2xl:w-96 transform transition-transform duration-500 ease-in-out  translate-x-full z-50 bg-white shadow-xl  h-full">
      <h2  style={{fontFamily: "'Fjalla One', sans-serif" ,letterSpacing:"0.5vw",fontSize:"2.8vw",lineHeight:"3vw"}} className=" w-full text-center">CART</h2>
      <ImArrowLeft2 style={{fontSize:"2vw",top:'2vw',left:"1.2vw"}} onClick={toggleCart} className=' cart fixed  left-4 cursor-pointer ' />
      <div className='' onChange={toggleCart}>
        <ul style={{padding:"1vw 1vw",height:"70vh"}} className=' overflow-y-scroll  rounded-xl  '>
          {Object.keys(cart).length == 0 && <div style={{fontSize:"1.2vw"}}>
            No items in the cart 😭
          </div>}
          {Object.keys(cart).map((k) => {
         
            return <li style={{marginTop:"1.5vw",padding:"0vw 1vw 1vw",lineHeight:"1.3vw",backgroundColor:"#ebeaeb",height:"20vh"}} className='  ' key={k}>
              
              <div style={{}} className='flex my-2 justify-between items-center'>
                <div style={{width:"5.2vw",marginRight:"1vw",marginTop:"1vw"}} className="overflow-hidden self-start"><img className='object-scale-down' alt='cart' src={cart[k].img}></img></div>
                <div style={{marginLeft:"0.5"}} className=' w-4/5'>
                  <div style={{fontSize:"1.5vw"}} className="flex justify-between"><span style={{marginTop:"2vw"}} className="text-gray-800">{cart[k].name}</span> <ImBin2 style={{marginTop:"1vw"}} className='cursor-pointer text-gray-500 ' onClick={() => { removeFromCart(cart[k].name,cart[k].height,cart[k].width,cart[k].variant) }}/></div>
                <div style={{margin:"0.7vw 0vw"}} className='flex'><div style={{marginRight:"1vw"}}><span className='text-gray-500'>Size</span> : <span style={{fontSize:"1vw"}}>{cart[k].width} x {cart[k].height}</span></div>
                <div><span className='text-gray-500'>Color</span> :  <span style={{fontSize:"1vw"}}>{cart[k].variant}</span></div></div>
               
               <div className='flex justify-between w-full'> <div className=' flex justify-end flex-col items-end' style={{fontSize:"1.5vw",fontFamily: "'Fjalla One', sans-serif"}}>₹ {cart[k].price*cart[k].qty}
                </div>
                <div style={{fontSize:"1.25vw",lineHeight:"1.6vw"}} className='flex items-center  bg-white border border-black '>
                <AiOutlineMinus id={k} onClick={(e)=>minus(e)}className=' cursor-pointer mx-2' style={{margin:"0vw 0.5vw"}} />
                <span style={{width:"3vw"}} className='h-full border-x  border-black w-10 text-center'>{cart[k].qty}</span>
                <AiOutlinePlus id={k} onClick={(e)=>plus(e)} className=' cursor-pointer mx-2' style={{margin:"0vw 0.5vw"}} />
                </div>
                </div>
               
                </div>
              </div>
              
            </li>;
          })}
        </ul>
      </div>
      <div style={{fontSize:"1.5vw",marginTop:"2vw",padding:"0vw 1vw"}} className='font-bold w-full flex justify-between mt-10'>
        <span>Total ({item} items) </span> <span>₹ {subTotal}</span></div>
     <div style={{marginTop:"1.8vw"}} className='w-full flex justify-center'>
      <a href={"/Checkout"}><button style={{ backgroundColor: "#bfb1c4",fontSize:"1.25vw",height:"3.125vw",width:"10.45vw" }} className="flex  text-white hover:opacity-80     border-0  justify-center focus:outline-none   "><span className='my-auto'>Check out</span></button></a>
      </div>
    </div>


    {/**main nav**/}
    <nav  id='nav' onMouseLeave={offproducts} className=" z-40 text-white  absolute top-0 w-full ">

      <div style={{padding:"0vw 1vw"}}>
        <div className="flex ">
         

          <div style={{margin:"1vw 0vw"}} className="hidden md:flex  justify-between w-full  ">
          
            <div>

              <a href="/" className="flex   ">
                <img style={{height:"5vw"}} id='img' src="/logo.svg" alt="Logo" className="h-10 md:h-16 invert w-auto " />
              </a>
            
          </div>

            <div id='navtext' style={{fontSize:"1.25vw",paddingTop:"1.3vw"}} className="hidden md:flex  absolute w-full justify-center    ">
              <Link style={{ textUnderlineOffset: 8 }} href="/" onMouseEnter={offproducts} className="  hover:underline  decoration-2 ">HOME</Link>
              <a style={{ textUnderlineOffset: 8}}  className=" "><span style={{padding:"0vw 2vw"}} onMouseEnter={toggleproducts} className='flex  justify-center px-6 cursor-pointer '>PRODUCTS< IoIosArrowDown style={{marginLeft:"1vw"}} className={`${nav ? 'rotate-180 transform ml-4 self-center' : 'ml-4 self-center'} `}/></span><div> {nav && <Flip top><div style={{fontSize:"1.25vw",marginTop:"0.4vw"}} className='  md:text-base bg-black bg-opacity-70  shadow-black shadow-sm  text-lg md:px-0 my-1  md:acctext ' >
     
     <div style={{ }} className="flex flex-col  text-white">
       {
         Object.keys(data).map((p) => {
           return (<div key={p} style={{fontSize:"1vw"}} className="flex z-50">
            
               <li  id={data[p]} onMouseEnter={sub[p] ? on:off} style={{height:"2.85vw",width:"11vw",marginLeft:"0.4vw"}} className='flex items-center  '  ><span className='flex items-center '><span className='w-full uppercase'><Link  href={`${process.env.NEXT_PUBLIC_HOST}/${sub[p]?"category":"product"}/${data[p]}`}>{data[p]}</Link></span><span>{sub[p] && < IoIosArrowDown style={{marginLeft:"1vw"}} className={`${listd ? '-rotate-90 transform' : ''} `}/>}</span></span></li>
             
             {listd && sub[p] && <div style={{left:"12.45vw"}}  className='z-50 absolute shadow-black shadow-sm bg-black bg-opacity-70 left-44 min-w-max flex flex-col'>
             { subcategory[0].map((s)=>{return(<div key={s}  style={{fontSize:"1vw",height:"2.85vw",width:"11vw",margin:"0vw 0.5vw"}} className=' text-white min-w-max uppercase cursor-pointer flex items-center'><Link   href={`${process.env.NEXT_PUBLIC_HOST}/product/${s}`}  >{s}</Link></div>)})}
             
               </div>}
               </div>
           )


         })
       }

     </div>


   </div></Flip>}</div></a>
              <Link style={{ textUnderlineOffset: 8 }}  href="/about" className="  hover:underline  decoration-2   z-50">ABOUT US</Link>
              <div style={{ textUnderlineOffset: 8 ,margin:"0vw 2vw" }} ><Link  onMouseEnter={offproducts} href="/contact" className=" hover:underline  decoration-2   ">CONTACT US</Link></div>
            </div>
            <div style={{marginTop:"-0.5vw"}} className='flex items-center'>
            {!user.value && <a id="login"  onClick={() => setlogin(true)} style={{fontSize:"1.25vw"}} className="z-50   text-lg cursor-pointer 2x:text-xl hover:opacity-80  hover: transition duration-300">LOG IN</a>}
            {user.value && <MdAccountCircle style={{fontSize:"2.37vw"}} className=" font-medium  cursor-pointer transition  duration-300 md:text-3xl z-50 2xl:text-4xl" onMouseEnter={() => setdropDown(true)} />}
            <HiShoppingCart style={{fontSize:"2.37vw",margin:"0vw 2vw"}} id="cart" onClick={toggleCart} onMouseEnter={() => setdropDown(false)} className='hover: cart  z-50 cursor-pointer md:text-3xl 2xl:text-4xl ' />
            {item!=0 && <div style={{fontSize:"1.2vw",padding:"0vw 0.6vw",right:"2.3vw",top:"1.2vw"}} className=' z-50 absolute bg-black text-white right-3 top-2 px-2 rounded-full'>{item}</div>}
          </div>
          </div>
          <div id='mnav' className="md:hidden text-white justify-between w-full flex  ">
          <div> <a href="/" className="flex  py-1 ">
                <img id='img' src="/logo.svg" alt="Logo" className="h-10 md:h-16 invert w-auto " />
              </a></div>
              <div className='flex  items-center space-x-4'>
            {!user.value && <a href="/Login" className="  transition duration-300">LOG IN</a>}
            {user.value && <MdAccountCircle className="   text-xl  cursor-pointer transition duration-300 " onClick={() => setdropDown(!dropDown)} />}
            <HiShoppingCart onMouseOver={toggleCart} onMouseEnter={() => setdropDown(false)} className='  cart  cursor-pointer text-xl  ' />
            <Hamburger size={20} toggled={isOpen} toggle={setOpen} className=" mobile-menu-button" />
            </div>
          </div>
        </div>
      </div>

      {isOpen && <div id='mv' className=" mobile-menu absolute w-full animate-fade-in-down ">
        <ul className="bg-white text-center">
          <li className="active"><a href="/" className="block text-sm px-2 py-4  phover ">Home</a></li>
          <li><a onClick={toggleproducts} className="block text-sm px-2 py-4 phover transition duration-300">Products</a></li>
          <li><a href="/about" className="block text-sm px-2 py-4 phover transition duration-300">About</a></li>
          <li><a href="/contact" className="block text-sm px-2 py-4 phover transition duration-300">Contact Us</a></li>
        </ul>
      </div>}



    </nav>
  </>
  );
}
export default Navbar