/* eslint-disable @next/next/no-html-link-for-pages */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable @next/next/link-passhref */
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { AiOutlineClose, AiOutlinePlusCircle, AiOutlineMinusCircle, AiOutlineMenu } from 'react-icons/ai';
import { BsFillBagCheckFill } from 'react-icons/bs';
import { CgTrashEmpty } from 'react-icons/cg';
import { MdAccountCircle } from 'react-icons/md';
import { useRef, useState, useEffect } from 'react';
import { HiShoppingCart } from "react-icons/hi"
import { IoIosArrowDown } from "react-icons/io"
import { Squash as Hamburger } from 'hamburger-react'
import Router from 'next/router';
import { Dialog } from '@headlessui/react'
import { GoogleOAuthProvider } from '@react-oauth/google';
import { GoogleLogin } from '@react-oauth/google';
import jwtDecode from 'jwt-decode';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
import { Fade, LightSpeed, Slide } from 'react-reveal';
import { BsWhatsapp } from "react-icons/bs"

function Navbar({ logout, user, cart, addToCart, removeFromCart, clearCart, subTotal, products }) {
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

  useEffect(() => {

    if (screen.width > 500) {
      setsw(true)
    }
  
   
  }, []);
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
  useEffect(() => {
    setadmin(localStorage.getItem("admin"));
    fetch(`${process.env.NEXT_PUBLIC_HOST}/api/getproducts`)
      .then((res) => res.json())
      .then((data) => {
        setdata(data.products)
        
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

  }, []);
setInterval(() => {
  setitem(Object.keys(cart).length)
}, 1000);
 
  async function getData(e) {
    const data = e.target.id

    let res = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/getsub`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      }, body: JSON.stringify({ data })
    })
    let response = await res.json()

    if (response[0] == null) {
      setsubcategory(false)
    }
    else {
      setsubcategory(response)
      setlistd(true)
      
    }
   

  }
  const show=(e)=>{
    setmethod(e.target.id)
  }


  const ref = useRef();
 
  return (<>
  <div className=" fixed overflow-hidden bottom-8 h-12 min-w-fit right-12 z-50 cursor-pointer text-white bg-green-500 rounded-full  items-center whatsapp flex justify-end"><a style={{ fontFamily: "'lato', sans-serif"}} id="what" className="absolute  right-44 bottom-3 w-0  " href="//api.whatsapp.com/send?phone=+919920223462&text=hii" title="Share on whatsapp">+919920223462</a><BsWhatsapp className='text-white p-2 rounded-3xl z-50 text-5xl ' /></div>

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
                <h1 className='text-2xl font-bold text-center text-gray-600'>Welcome to sketchart</h1>
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
                <div className='pb-8 text-center'><GoogleOAuthProvider clientId="390204161646-6noec67uc8qleni584kq3ojnbbebeo1i.apps.googleusercontent.com"><GoogleLogin
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
                <h1 className='text-2xl font-bold text-center text-gray-600'>Welcome to sketchart</h1>
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
                <div className='pb-8 text-center'><GoogleOAuthProvider clientId="390204161646-6noec67uc8qleni584kq3ojnbbebeo1i.apps.googleusercontent.com"><GoogleLogin
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

   {nav && <div style={{right:"17vw"}} onMouseLeave={offproducts} className='absolute animate-fade-in-down  md:right-64 2xl:text-2xl md:text-base bg-white  shadow-black shadow-sm text-center  top-16 px-5  text-lg md:px-0   md:acctext ' >
     
      <div style={{ fontFamily: "'poppins', sans-serif" }} className="flex flex-col  ">
        {
          Object.keys(data).map((p) => {
            return (<>
              <div  key={p} className="flex justify-center z-50">
                <li  id={data[p]} onMouseEnter={function(e){getData(e);}} className='flex items-center  phover  w-full py-2 px-4 '  ><a href={`${process.env.NEXT_PUBLIC_HOST}/${sub[p]?"category":"product"}/${data[p]}`}>{data[p]}</a></li>
              </div>
              {listd && sub[p] && <div style={{left:"14.3vw"}}  className='z-50 absolute min-w-full left-44 flex flex-col'>
              { Object.keys(subcategory).map((s)=>{return(<a key={s} style={{backgroundColor:"#bfb1c4"}} href={`${process.env.NEXT_PUBLIC_HOST}/product/${subcategory[s]}`} className='hover:border-2 px-4 py-2 text-sm cursor-pointer' >{subcategory[s]}</a>)})}
                </div>}
                </>
            )


          })
        }

      </div>


    </div>}
    {dropDown && <div onMouseLeave={() => setdropDown(false)} style={{ fontFamily: "'Montserrat', sans-serif" }} className='absolute animate-fade-in-down right-14 md:right-7 2xl:text-2xl md:text-base bg-white  shadow-black shadow-sm text-center z-50 top-16 px-5  text-lg md:px-0 py-3  md:acctext '>
      <ul>
        <a className='  font-bold' href={"/myaccount"}><li className='px-2 account'>Account</li></a>
        <a className='  font-bold' href={'/orders'}><li className='px-2 account'>Orders</li></a>
        <li className='px-2 account font-bold cursor-pointer' onClick={logout}>Logout</li>
        {admin == "true" && <a className=' text-center font-bold' href={"/adminpanel"}><li className='px-2 account'>Admin Panel</li></a>}
      </ul>
    </div>}
    <div ref={ref}  style={{fontFamily: "'Roboto Slab', serif"}} className="sidebar scrollbar-hide text-lg md:text-xl 2xl:text-2xl bg-black bg-opacity-80 fixed right-0 top-0 flex  items-center flex-col p-10 2xl:w-96 transform transition-transform duration-500 ease-in-out  translate-x-full z-50 text-white shadow-xl overflow-y-scroll h-full">
      <h2 style={{fontFamily: "'Fjalla One', sans-serif",letterSpacing:1.2,wordSpacing:2}} className='font-bold text-xl  lg:text-3xl'>CART</h2>
      <AiOutlineClose onClick={toggleCart} className='hover:bg-black hover:text-white  cart fixed top-4 left-4 cursor-pointer  text-white' />
      <div onChange={toggleCart}>
        <ol className='list-decimal text-lg mx-1 my-3'>
          {Object.keys(cart).length == 0 && <div>
            No items in the cart
          </div>}
          {Object.keys(cart).map((k) => {
         
            return <li key={k}>
              
              <div className='flex my-2'>
                <div className='ml-2 w-2/3'>{cart[k].name} ({cart[k].width} X {cart[k].height}/{cart[k].variant})</div>
                <div className='w-2/3 flex items-center justify-between '><AiOutlineMinusCircle onClick={() => { removeFromCart(k, 1, cart[k].price, cart[k].name, cart[k].size, cart[k].variant); }} className=' cursor-pointer' />{cart[k].qty}<AiOutlinePlusCircle onClick={() => { addToCart(k, 1, cart[k].price, cart[k].name, cart[k].size, cart[k].variant); }} className=' cursor-pointer' /></div>
              </div>
            </li>;
          })}
        </ol>
      </div>
      <div className='font-bold mt-10'>Total: ₹ {subTotal}</div>
      <a href={"/Checkout"}><button style={{ backgroundColor: "#bfb1c4" }} className="flex text-black hover:opacity-80   border-0 py-2 w-36 justify-center my-7 mr-3 focus:outline-none   "><BsFillBagCheckFill className='my-auto mr-1' />Check out</button></a>
      <button onClick={clearCart} style={{ backgroundColor: "#bfb1c4" }} className="flex text-black   hover:opacity-80 border-0 py-2 w-36 justify-center  mr-3 focus:outline-none   "><CgTrashEmpty className='my-auto mr-1' />Empty cart</button>
    </div>


    {/**main nav**/}
    <nav  id='nav' className=" z-40  sticky ">

      <div className=" px-4">
        <div className="flex justify-between">
          <div className="flex space-x-7">
            <div>

              <a href="/" className="flex  items-center py-1 ">
                <img id='img' src="/logo.svg" alt="Logo" className="h-10 md:h-16 invert w-auto " />
              </a>
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-6 ">
            <div id='navtext' className="hidden md:flex items-center text-white  2xl:text-lg text-base space-x-1">
              <a style={{ textUnderlineOffset: 8, fontFamily: "'poppins', sans-serif" }} href="/" className="py-4 px-2   hover:underline  decoration-2   ">Home</a>
              <a style={{ textUnderlineOffset: 8, fontFamily: "'poppins', sans-serif" }} onMouseEnter={toggleproducts} className="py-4 cursor-pointer px-2    hover:underline  decoration-2 ">Products</a>
              <a style={{ textUnderlineOffset: 8, fontFamily: "'poppins', sans-serif" }} href="/about" className="py-4 px-2     hover:underline  decoration-2   ">About Us</a>
              <a style={{ textUnderlineOffset: 8, fontFamily: "'poppins', sans-serif" }} href="/contact" className="py-4 px-2     hover:underline  decoration-2   ">Contact Us</a>
            </div>
            {!user.value && <a id="login"  onClick={() => setlogin(true)} style={{fontFamily: "'Montserrat', sans-serif"}} className=" font-bold text-white text-lg cursor-pointer 2x:text-xl hover:opacity-80  hover:text-white transition duration-300">Log In</a>}
            {user.value && <MdAccountCircle  className=" font-medium  cursor-pointer transition text-white duration-300 md:text-3xl  2xl:text-4xl" onMouseEnter={() => setdropDown(true)} />}
            {item!=0 && <div className='text-white absolute bg-black right-3 top-2 px-2 rounded-full'>{item}</div>}
            <HiShoppingCart id="cart" onClick={toggleCart} onMouseEnter={() => setdropDown(false)} className='hover:text-white cart text-white cursor-pointer md:text-3xl 2xl:text-4xl ' />
          </div>

          <div id='mnav' className="md:hidden flex space-x-5 items-center">

            {!user.value && <a href="/Login" className=" text-black transition duration-300">Log In</a>}
            {user.value && <MdAccountCircle className="  text-black text-xl  cursor-pointer transition duration-300 " onClick={() => setdropDown(!dropDown)} />}
            <HiShoppingCart onMouseOver={toggleCart} onMouseEnter={() => setdropDown(false)} className='  cart  cursor-pointer text-xl text-black  ' />


            <Hamburger size={20} toggled={isOpen} toggle={setOpen} className=" mobile-menu-button" />

          </div>
        </div>
      </div>

      {isOpen && <div id='mv' className=" mobile-menu absolute w-full animate-fade-in-down ">
        <ul className="bg-white text-center">
          <li className="active"><a href="/" className="block text-sm px-2 pb-4  phover ">Home</a></li>
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