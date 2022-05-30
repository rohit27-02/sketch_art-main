/* eslint-disable @next/next/no-img-element */
/* eslint-disable @next/next/link-passhref */
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import {  AiOutlineClose, AiOutlinePlusCircle, AiOutlineMinusCircle, AiOutlineMenu } from 'react-icons/ai';
import { BsFillBagCheckFill } from 'react-icons/bs';
import { CgTrashEmpty } from 'react-icons/cg';
import { MdAccountCircle, MdCancel } from 'react-icons/md';
import { RiArrowDownSFill } from 'react-icons/ri';
import { useRef, useState, useEffect } from 'react';
import {HiShoppingCart} from "react-icons/hi"
import {IoIosMail} from "react-icons/io"
import {BsFillTelephoneFill} from "react-icons/bs"


function Navbar({ logout, user, cart, addToCart, removeFromCart, clearCart, subTotal, products }) {
    const [dropDown, setdropDown] = useState(false);
    const [admin, setadmin] = useState(false);
    const [listd, setlistd] = useState();
    const [nav, setnav] = useState(false);
    const [data, setdata] = useState([]);
    const [sw, setsw] = useState(false);
    const [subcategory, setsubcategory] = useState();
    const [info, setinfo] = useState({});



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
  {sw && <div className='h-10 w-full bg-lime-100'><div className='w-2/6 float-right transform bg-black h-10'><div className='text-white float-right flex items-center border-l-2  px-4'><IoIosMail className='mx-2 text-xl text-yellow-300'/><a href="mailto:">Email us</a><div onClick={toggleCart} onMouseEnter={() => setdropDown(false)} className="cart ml-6 bg-white h-10 w-8  cursor-pointer">
                <HiShoppingCart className='hover:text-slate-900  mx-auto mt-2  text-xl  text-black md:text-2xl' /></div>
            </div><div className='text-white font-mono mx-16 mt-2 flex '><BsFillTelephoneFill className='mx-2 text-yellow-300 my-auto'/><a href='tel:+91931-840-9519'>{info.phone}</a></div></div></div>}
        
        <div style={{ minHeight: 50, backgroundColor:'yellow'  }} onMouseLeave={() => setdropDown(false)} className='text-xs md:text-base top-0   justify-center flex  items-center flex-col md:flex-row md:justify-start  shadow-xl'>
     <div className='logo  mx-1 absolute scale-50 md:scale-100  md:top-2 left-0'>
                <Link href={"/"}><a><Image width={100} height={80} src="/logo.svg" alt="" /></a></Link>
            </div>
            {sw ?"" : !nav ? <AiOutlineMenu className='text-lg' onClick={() => setnav(!nav)} /> : <AiOutlineClose className='mt-4 text-lg ' onClick={() => setnav(!nav)} />}
            <div className="nav  w-full">
                {sw ? <ul className=' flex items-center justify-center flex-row  md:font-bold'>
                    <Link href={"/"}><a><li className='md:hover:bg-black md:hover:text-white py-4  md:px-8'>Home</li></a></Link>
                    <a onMouseEnter={list} className='md:hover:bg-black  hover:md:text-white py-4  flex items-center space-x-1 md:px-8 '><li className='cursor-pointer '>Products</li><span><RiArrowDownSFill className={`${listd ? 'rotate-180 transform' : ''} `} /></span></a>
                    <Link href={"/about"}><a><li className='md:hover:bg-black md:hover:text-white py-4 px-8'>About Us</li></a></Link>

                    <Link href={"/contact"}><a><li className='md:hover:bg-black md:hover:text-white py-4 px-8'>Contact</li></a></Link>
                </ul> : nav && <ul className=' flex flex-col justify-center items-center  '>
                
                    <a href={"/"}><li className=' hover:text-white py-4   '>Home</li></a>
                    <a href={"/about"}><li className='  hover:text-white py-4  '>About</li></a>
                    <a onClick={toggleproducts} className='  hover:text-white py-4    space-x-1  '><li className='grid grid-flow-col cursor-pointer '>Products</li></a>
                    <a href={"/contact"}><li className=' hover:text-white py-4  '>Contact</li></a>
                </ul>}

            </div>
{!sw && <div onClick={toggleCart} onMouseEnter={() => setdropDown(false)} className="cart  absolute right-2 top-2   cursor-pointer">
                <HiShoppingCart className='hover:text-slate-900  mx-auto mt-2  text-xl  text-black md:text-2xl' /></div>}

            {dropDown && <div className='absolute right-5  z-40 top-10 md:top-20 border shadow-lg bg-yellow-50 rounded-md px-4 py-3 text-lg md:text-xl'>
                <ul>
                    <a className='hover:text-yellow-600 font-bold' href={"/myaccount"}><li>Account</li></a>
                    <a className='hover:text-yellow-600 font-bold' href={'/orders'}><li>Orders</li></a>
                    <li className='hover:text-yellow-600 font-bold cursor-pointer' onClick={logout}>Logout</li>
                    {admin == "true" && <a className='hover:text-yellow-600 font-bold' href={"/adminpanel"}><li>Admin Panel</li></a>}
                </ul>
            </div>}
            {user.value && <MdAccountCircle onMouseEnter={() => setdropDown(true)} className='absolute right-9 top-4 md:top-14 cursor-pointer text-slate-600 hover:text-slate-900 text-xl md:text-2xl' />}
            {!user.value && <div className="absolute right-9 top-4 md:top-14 cursor-pointer">
                <a href={'/Login'}><button className='md:text-base  bg-black flex  px-2 text-white  '>Login<MdAccountCircle className='md:ml-2 my-auto md:text-xl'/></button></a>
            </div>}
            
            <div ref={ref} className="sidebar fixed right-0 top-0 bg-gray-800 p-10 transform transition-transform delay-300 ease-in-out  translate-x-full z-40 text-white shadow-xl overflow-y-scroll h-full">
                <h2 className='font-bold text-xl'>Shopping Cart</h2>
                <span onClick={toggleCart} className='absolute top-3 right-3 hover:text-yellow-300 text-2xl cursor-pointer'><MdCancel /></span>
                <div onChange={toggleCart}>
                    <ol className='list-decimal font-semibold mx-1 my-3'>
                        {Object.keys(cart).length == 0 && <div>
                            No items in the cart
                        </div>}
                        {Object.keys(cart).map((k) => {
                            return <li key={k}>
                                <div className='flex my-2'>
                                    <div className='ml-2 w-2/3'>{cart[k].name} ({cart[k].size}/{cart[k].variant})</div>
                                    <div className='w-2/3 flex items-center justify-between '><AiOutlineMinusCircle onClick={() => { removeFromCart(k, 1, cart[k].price, cart[k].name, cart[k].size, cart[k].variant); }} className='fill-yellow-500 cursor-pointer' />{cart[k].qty}<AiOutlinePlusCircle onClick={() => { addToCart(k, 1, cart[k].price, cart[k].name, cart[k].size, cart[k].variant); }} className='fill-yellow-500 cursor-pointer' /></div>
                                </div>
                            </li>;
                        })}
                    </ol>
                </div>
                <div className='font-bold mt-10'>Total: ₹ {subTotal}</div>
                <a href={"/Checkout"}><button className="flex text-white bg-yellow-400 border-0 py-2 px-4 my-7 mr-3 focus:outline-none hover:bg-yellow-600 rounded text-lg"><BsFillBagCheckFill className='my-auto mr-1' />Check out</button></a>
                <button onClick={clearCart} className="flex text-white bg-yellow-400 border-0 py-2 px-4  mr-3 focus:outline-none hover:bg-yellow-600 rounded text-lg"><CgTrashEmpty className='my-auto mr-1' />Empty cart</button>
            </div>
        </div>
        {sw && <div onMouseLeave={function(){setlistd(false);setsubcategory(false);}} className='w-full bg-black text-white h-14 sticky top-0 z-30 ' >
            <div className=" flex justify-center  flex-wrap ">
                {
                    Object.keys(data).map((p) => {
                        return (
                            <div key={p} className=" group flex ">
                                <a id={data[p]} onMouseOver={() => setlistd(true)} onMouseEnter={function (e) { getData(e); }} className='border-l-2 w-36 px-4 my-2 text-sm  font-sans hover:bg-yellow-300 hover:text-black hover:font-bold ' href={`${process.env.NEXT_PUBLIC_HOST}/category/${data[p]}`} >{data[p]}</a>
                                {subcategory && listd && <li className=' bg-slate-100  rounded-sm  transform scale-0 group-hover:scale-100 absolute  top-14 z-40  text-gray-700  flex flex-col  '>{Object.keys(subcategory).map((s) => {
                                    return <a className='py-3 hover:border-l-4 border-black  px-6  hover:text-slate-900 hover:font-semibold   hover:bg-yellow-300 '  href={`${process.env.NEXT_PUBLIC_HOST}/sub/${subcategory[s]}`} key={s}>{subcategory[s]}</a>
                                })}</li>}
                            </div>
                        )


                    })
                }

            </div>


        </div>}
       <div ref={menu} style={{minWidth:180}}  className=' transform transition-transform delay-300 ease-in-out  -translate-x-full  shadow-xl overflow-y-hidden  left-0 py-4 top-0 h-full bg-black text-white fixed  z-30 ' >
       <AiOutlineClose className='float-right mx-3 text-lg ' onClick={toggleproducts} />
            <h1 className='font-bold mb-8 text-yellow-400 mx-4 text-xl underline underline-offset-4'>Products</h1>
            <div className=" flex justify-center flex-col flex-wrap ">
                {
                    Object.keys(data).map((p) => {
                        return (
                            <div key={p} className=" group flex ">
                                <a  id={data[p]} onClick={function (e) { getData(e);  setlistd(!listd)}}  className=' px-4 py-2 hover:bg-yellow-400 hover:text-black text-sm font-thin ' href={`${process.env.NEXT_PUBLIC_HOST}/category/${data[p]}`} >{data[p]}</a>
                            </div>
                        )


                    })
                }

            </div>
          

        </div>

    </>
    );
}
export default Navbar