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
import { RiArrowDownSFill } from 'react-icons/ri';
import { useRef, useState, useEffect } from 'react';
import { HiShoppingCart } from "react-icons/hi"
import { IoIosMail } from "react-icons/io"
import { BsFillTelephoneFill } from "react-icons/bs"
import { Squash as Hamburger } from 'hamburger-react'
import  Router  from 'next/router';
import { Dialog } from '@headlessui/react'
import { GoogleOAuthProvider } from '@react-oauth/google';
import { GoogleLogin } from '@react-oauth/google';
import jwtDecode from 'jwt-decode';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';



function Navbar({ logout, user, cart, addToCart, removeFromCart, clearCart, subTotal, products }) {
    const [dropDown, setdropDown] = useState(false);
    const [admin, setadmin] = useState(false);
    const [listd, setlistd] = useState();
    const [nav, setnav] = useState(false);
    const [data, setdata] = useState([]);
    const [sw, setsw] = useState(false);
    const [subcategory, setsubcategory] = useState();
    const [info, setinfo] = useState({});
    const [isOpen, setOpen] = useState(false)
    const [login, setlogin] = useState(false)
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
  
    useEffect(() => {
    
    if (screen.width > 500) {
      setsw(true)
  }
    }, []);
    const handleChange = (e) => {
  
      if (e.target.name == "email") {
        setEmail(e.target.value)
      }
      if (e.target.name == "password") {
        setPassword(e.target.value)
      }
    }
    const handleSubmit = async (e) => {
      e.preventDefault()
      const data = { email, password}
      let res = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        }, body: JSON.stringify(data)
      })
      let response = await res.json()
      setEmail("")
      setPassword("")
      if(response.admin){
        localStorage.setItem("admin",response.admin)
      }
      if (response.success) {
        localStorage.setItem("token",response.token)
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
    function assign(obj){
      return {email:obj.email}
    }
    const auth= async(res)=>{
         const obj = await jwtDecode(res.credential)
         setEmail(obj.email)
         const data=await assign(obj)
         let response = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/auth`,{
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          }, body: JSON.stringify(data)
        })
         let status = await response.json()
         setEmail("")
         if (status.success) {
          localStorage.setItem("token",status.token)
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



    const navbar = () => {
        setnav(true)
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

        if (menu.current.classList.contains("-translate-x-full")) {
            menu.current.classList.replace("-translate-x-full", "translate-x-0");
        }
        else if (!menu.current.classList.contains("-translate-x-full")) {
            menu.current.classList.remove("translate-x-0");
            menu.current.classList.add("-translate-x-full");
        }
    };
    useEffect(() => {
        setadmin(localStorage.getItem("admin"));
        fetch(`${process.env.NEXT_PUBLIC_HOST}/api/getproducts`)
            .then((res) => res.json())
            .then((data) => {
                setdata(data)
            })
        fetch(`${process.env.NEXT_PUBLIC_HOST}/api/info`)
            .then((res) => res.json())
            .then((data) => {
                setinfo(data)
            })
        setnav(false)
        if (screen.width > 768) {
            setsw(true)
        }
       

    }, []);
    useEffect(() => {
        setlistd(true)
    }, [subcategory]);
    function list() {

        setlistd(!listd)
    }
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
        }

    }
  
    const ref = useRef();
    const menu = useRef();
    return (<>

<Dialog style={{width:"100vw",height:"100vh"}} className="fixed  flex justify-center items-center top-0 bg-black  bg-opacity-60 z-50" open={login} onClose={() => setlogin(false)}>
      <Dialog.Panel >
      
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
      <div style={{fontFamily:"'Montserrat', sans-serif"}} className='flex drop-shadow-md rounded-xl'>
      <div className='bg-white block px-10 py-2  rounded-md'>
      <div className="max-w-md  w-full space-y-6">
      
        <form onSubmit={handleSubmit} className="mt-8 scale-90 w-full md:scale-100 space-y-6" method="POST">
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
              style={{backgroundColor:"#3e3e3e"}} className="group drop-shadow-sm relative w-full flex justify-center py-2 px-4 border hover:shadow-lg text-white text-sm font-bold  "
            >

              Sign in
            </button>
            <div className="text-sm space-x-4 mt-2 flex font-medium text-gray-800 justify-center">
              <a className='hover:text-gray-600' href="/Forgot" >
                Forgot password?
              </a>
              <p className='hover:text-gray-600'>Create account</p>
            </div>
          </div>
          <div className='flex justify-center space-x-2 '>
            <div className='border-b border-gray-800 my-3 w-32'></div>
            <div className=''>Or</div>
            <div className='border-b border-gray-800 my-3 w-32'></div>
          </div>
          <div className='md:text-center'><GoogleOAuthProvider clientId="390204161646-6noec67uc8qleni584kq3ojnbbebeo1i.apps.googleusercontent.com"><GoogleLogin
  onSuccess={res=> auth(res)}
  onError={() => {
    console.log('Login Failed');
  }}
  auto_select
  useOneTap
/></GoogleOAuthProvider></div>
       </form>
      </div>
    </div>
   
    </div>
   
      </Dialog.Panel>
    </Dialog>

        <div ref={menu} className='text-lg md:text-xl 2xl:text-2xl transform transition-transform duration-300  ease-in-out  -translate-x-full  shadow-xl overflow-y-hidden  left-0 py-4 top-0 h-full md:bg-opacity-90 bg-black text-white fixed  z-50 ' >
            <AiOutlineClose className='float-right mx-3 cursor-pointer ' onClick={toggleproducts} />
            <div style={{ fontFamily: "'Montserrat', sans-serif"}} className="mt-16 flex justify-center flex-col flex-wrap ">
                {
                    Object.keys(data).map((p) => {
                        return (
                            <div key={p} className=" group flex ">
                                <a id={data[p]} onMouseEnter={function (e) { getData(e); setlistd(!listd) }} className=' px-4 py-2 phover w-full  ' href={`${process.env.NEXT_PUBLIC_HOST}/category/${data[p]}`} >{data[p]}</a>
                               
                            </div>
                        )


                    })
                }

            </div>


        </div>
        {dropDown && <div onMouseLeave={() => setdropDown(false)} style={{ fontFamily: "'Montserrat', sans-serif"}} className='absolute animate-fade-in-down right-14 md:right-7 2xl:text-2xl md:text-base bg-white shadow-black shadow-sm text-center z-50 top-16 px-5  text-lg md:px-0 py-3  md:acctext '>
            <ul>
                <a className='  font-bold' href={"/myaccount"}><li className='px-2 account'>Account</li></a>
                <a className='  font-bold' href={'/orders'}><li className='px-2 account'>Orders</li></a>
                <li className='px-2 account font-bold cursor-pointer' onClick={logout}>Logout</li>
                {admin == "true" && <a className=' text-center font-bold' href={"/adminpanel"}><li className='px-2 account'>Admin Panel</li></a>}
            </ul>
        </div>}
        <div ref={ref} style={{ fontFamily: "'Poppins', sans-serif"}} className="sidebar scrollbar-hide text-lg md:text-xl 2xl:text-2xl bg-black bg-opacity-80 fixed right-0 top-0 flex  items-center flex-col p-10 2xl:w-96 transform transition-transform duration-500 ease-in-out  translate-x-full z-50 text-white shadow-xl overflow-y-scroll h-full">
            <h2 className='font-bold text-xl  lg:text-3xl'>Shopping Cart</h2>
            <AiOutlineClose onClick={toggleCart} className='hover:bg-black hover:text-white  cart fixed top-4 left-4 cursor-pointer  text-white' />
            <div onChange={toggleCart}>
                <ol className='list-decimal font-semibold mx-1 my-3'>
                    {Object.keys(cart).length == 0 && <div>
                        No items in the cart
                    </div>}
                    {Object.keys(cart).map((k) => {
                        return <li key={k}>
                            <div className='flex my-2'>
                                <div className='ml-2 w-2/3'>{cart[k].name} ({cart[k].size}/{cart[k].variant})</div>
                                <div className='w-2/3 flex items-center justify-between '><AiOutlineMinusCircle onClick={() => { removeFromCart(k, 1, cart[k].price, cart[k].name, cart[k].size, cart[k].variant); }} className=' cursor-pointer' />{cart[k].qty}<AiOutlinePlusCircle onClick={() => { addToCart(k, 1, cart[k].price, cart[k].name, cart[k].size, cart[k].variant); }} className=' cursor-pointer' /></div>
                            </div>
                        </li>;
                    })}
                </ol>
            </div>
            <div className='font-bold mt-10'>Total: ₹ {subTotal}</div>
            <a href={"/Checkout"}><button  style={{backgroundColor:"#bfb1c4"}} className="flex text-black hover:opacity-80   border-0 py-2 px-4 my-7 mr-3 focus:outline-none  rounded "><BsFillBagCheckFill className='my-auto mr-1' />Check out</button></a>
            <button onClick={clearCart} style={{backgroundColor:"#bfb1c4"}}  className="flex text-black   hover:opacity-80 border-0 py-2 px-4  mr-3 focus:outline-none  rounded "><CgTrashEmpty className='my-auto mr-1' />Empty cart</button>
        </div>


        {/**main nav**/}
        <nav style={{backgroundColor:"#ebeaeb"}} id='nav' className=" z-40  sticky ">
            
            <div className=" px-4">
                <div className="flex justify-between">
                    <div className="flex space-x-7">
                    <div>

<a href="/" className="flex  items-center py-1 ">
   <img id='img' src="/logo.svg" alt="Logo" className="h-10 md:h-16   w-auto " />
</a>
</div>
                    </div>

                    <div className="hidden md:flex items-center space-x-6 ">
                    <div  id='navtext' className="hidden md:flex items-center text-black 2xl:text-lg text-base space-x-1">
                           <a style={{textUnderlineOffset:8,fontFamily: "'Montserrat', sans-serif"}} href="/" className="py-4 px-2   font-semibold  hover:underline  decoration-2   ">Home</a>
                           <a style={{textUnderlineOffset:8,fontFamily: "'Montserrat', sans-serif"}} onClick={toggleproducts} className="py-4 cursor-pointer px-2   font-semibold   hover:underline  decoration-2   ">Products</a>
                           <a style={{textUnderlineOffset:8,fontFamily: "'Montserrat', sans-serif"}} href="/about" className="py-4 px-2    font-semibold   hover:underline  decoration-2   ">About</a>
                           <a style={{textUnderlineOffset:8,fontFamily: "'Montserrat', sans-serif"}} href="/contact" className="py-4 px-2    font-semibold   hover:underline  decoration-2   ">Contact Us</a>
                        </div>
                        {!user.value && <a style={{backgroundColor:"#bfb1c4"}}  onClick={() => setlogin(true)} className=" font-base text-lg 2x:text-xl hover:opacity-80 text-black px-4 py-2  hover:text-white transition duration-300">Log In</a>}
                        {user.value && <MdAccountCircle style={{color:"black"}} className=" font-medium  hover:text-black cursor-pointer transition duration-300 md:text-3xl  2xl:text-4xl" onMouseEnter={() => setdropDown(true)} />}
                        <HiShoppingCart  onPointerEnter={toggleCart} onMouseEnter={() => setdropDown(false)} className='hover:text-white cart  cursor-pointer  text-black md:text-3xl 2xl:text-4xl ' />
                    </div>

                    <div id='mnav' className="md:hidden flex space-x-5 items-center">

                        {!user.value && <a href="/Login" className=" text-black transition duration-300">Log In</a>}
                        {user.value && <MdAccountCircle className="  text-black text-xl  cursor-pointer transition duration-300 " onClick={() => setdropDown(!dropDown)} />}
                        <HiShoppingCart onMouseOver={toggleCart} onMouseEnter={() => setdropDown(false)} className='  cart  cursor-pointer text-xl text-black  ' />

                      
                        <Hamburger size={20} toggled={isOpen} toggle={setOpen} className=" mobile-menu-button" />
                        
                    </div>
                </div>
            </div>

            {isOpen&&<div id='mv' className=" mobile-menu absolute w-full animate-fade-in-down ">
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