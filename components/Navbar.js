/* eslint-disable @next/next/no-img-element */
/* eslint-disable @next/next/link-passhref */
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { AiOutlineShoppingCart,AiOutlinePlusCircle,AiOutlineMinusCircle ,AiOutlineMenu} from 'react-icons/ai';
import { BsFillBagCheckFill } from 'react-icons/bs';
import { CgTrashEmpty } from 'react-icons/cg';
import { MdAccountCircle,MdCancel } from 'react-icons/md';
import {RiArrowDownSFill } from 'react-icons/ri';
import { useRef,useState,useEffect } from 'react';

function Navbar({ logout, user, cart, addToCart, removeFromCart, clearCart, subTotal,products }) {
    const [dropDown, setdropDown] = useState(false);
    const [admin, setadmin] = useState(false);
    const [listd, setlistd] = useState(false);
    const [nav, setnav] = useState(false);
    const [data, setdata] = useState([]);
    const [sw, setsw] = useState();
   
    
const navbar=()=>{
    setnav(true)
}    
    const toggleDropdown = () => {
        setdropDown(!dropDown);
    };
    const toggleCart = () => {
        if (ref.current.classList.contains("translate-x-full")) {
            ref.current.classList.replace("translate-x-full", "translate-x-0");
        }
        else if (!ref.current.classList.contains("translate-x-full")) {
            ref.current.classList.remove("translate-x-0");
            ref.current.classList.add("translate-x-full");
        }
    };
    useEffect (() => {
        setadmin(localStorage.getItem("admin"));
        fetch(`${process.env.NEXT_PUBLIC_HOST}/api/getproducts`)
        .then((res) => res.json())
        .then((data) => {
          setdata(data)
        })
      if(screen.width>768){
          setsw(true)
      }
    }, []);
    function list(){
        setlistd(!listd)
        
    }

    const ref = useRef();
    return (<>
        <div  className=' top-0 bg-amber-300 flex justify-center items-center flex-col md:flex-row md:justify-start  shadow-xl'>


            <div className='logo mx-5 '>
                <Link href={"/"}><a><Image width={60} height={60} src="/logo.svg" alt="" /></a></Link>

            </div>
            {sw?<div className="nav  w-full">
                <ul className='flex items-center justify-center flex-col md:flex-row  md:text-md'>
                    <Link href={"/"}><a><li className='md:hover:bg-slate-700 md:hover:text-white py-4 px-8'>Home</li></a></Link>
                    <Link href={"/about"}><a><li className='md:hover:bg-slate-700 md:hover:text-white py-4 px-8'>About</li></a></Link>
                    <a onMouseEnter={list}  className='md:hover:bg-slate-700  hover:md:text-white py-4 px-8 flex items-center space-x-1 '><li   className='cursor-pointer '>Products</li><span><RiArrowDownSFill className={`${listd ? 'rotate-180 transform' : ''} `}/></span></a>
                   
                    <Link href={"/contact"}><a><li className='md:hover:bg-slate-700 md:hover:text-white py-4 px-8'>Contact</li></a></Link>
                </ul>
            </div>
           : nav ? <div className="nav  w-full">
                <ul className='flex  flex-col ml-10 md:flex-row md:space-x-14 md:text-md'>
                    <Link href={"/"}><a><li className='md:hover:bg-slate-700 md:hover:text-white py-4 px-8'>Home</li></a></Link>
                    <Link href={"/about"}><a><li className='md:hover:bg-slate-700 md:hover:text-white py-4 px-8'>About</li></a></Link>
                    <a  className='flex items-center space-x-1 '><li onClick={list} className='cursor-pointer md:hover:bg-slate-700 md:hover:text-white py-4 px-8'>Products</li><span><RiArrowDownSFill className={`${listd ? 'rotate-180 transform' : ''} `}/></span></a>
                   
                    <Link href={"/contact"}><a><li className='md:hover:bg-slate-700 md:hover:text-white py-4 px-8'>Contact</li></a></Link>
                </ul>
            </div>:<AiOutlineMenu className='cursor-pointer' onClick={navbar}/>}
       
            {dropDown && <div className='absolute right-5 md:mr-4 z-20 top-10 md:top-12 border shadow-lg bg-yellow-50 rounded-md px-4 py-3 text-l md:text-xl'>
                <ul>
                    <a className='hover:text-yellow-600 font-bold' href={"/myaccount"}><li>Account</li></a>
                    <a className='hover:text-yellow-600 font-bold' href={'/orders'}><li>Orders</li></a>
                    <li className='hover:text-yellow-600 font-bold cursor-pointer' onClick={logout}>Logout</li>
                    {admin == "true" && <a className='hover:text-yellow-600 font-bold' href={"/adminpanel"}><li>Admin Panel</li></a>}
                </ul>
            </div>}
            {user.value && <MdAccountCircle onClick={toggleDropdown} className='absolute right-14 md:mr-4 top-4 cursor-pointer hover:text-white text-xl md:text-2xl' />}
            {!user.value && <div className="absolute right-14 md:mr-4 top-4 cursor-pointer">
                <a href={'/Login'}><button className=' hover:text-black  hover:font-bold md:px-2 text-gray-600  '>Login</button></a>
            </div>}
            <div onClick={toggleCart} className="cart absolute right-0 mx-5 top-4 cursor-pointer">
                <AiOutlineShoppingCart className='hover:text-white text-xl md:text-2xl' />
            </div>
            <div ref={ref} className="sidebar fixed right-0 top-0 bg-gray-800 p-10 transform transition-transform translate-x-full z-20 text-white shadow-xl overflow-y-scroll h-full">
                <h2 className='font-bold text-xl'>Shopping Cart</h2>
                <span onClick={toggleCart} className='absolute top-3 right-3 hover:text-amber-300 text-2xl cursor-pointer'><MdCancel /></span>
                <div onChange={toggleCart}>
                    <ol className='list-decimal font-semibold mx-1 my-3'>
                        {Object.keys(cart).length == 0 && <div>
                            No items in the cart
                        </div>}
                        {Object.keys(cart).map((k) => {
                            return <li key={k}>
                                <div className='flex my-2'>
                                    <div className='ml-2 w-2/3'>{cart[k].name} ({cart[k].size}/{cart[k].variant})</div>
                                    <div className='w-2/3 flex items-center justify-between '><AiOutlineMinusCircle onClick={() => { removeFromCart(k, 1, cart[k].price, cart[k].name, cart[k].size, cart[k].variant); } } className='fill-yellow-500 cursor-pointer' />{cart[k].qty}<AiOutlinePlusCircle onClick={() => { addToCart(k, 1, cart[k].price, cart[k].name, cart[k].size, cart[k].variant); } } className='fill-yellow-500 cursor-pointer' /></div>
                                </div>
                            </li>;
                        })}
                    </ol>
                </div>
                <div className='font-bold mt-10'>Total: ₹ {subTotal}</div>
                <a href={"/Checkout"}><button className="flex text-white bg-yellow-500 border-0 py-2 px-4 my-7 mr-3 focus:outline-none hover:bg-yellow-600 rounded text-lg"><BsFillBagCheckFill className='my-auto mr-1' />Check out</button></a>
                <button onClick={clearCart} className="flex text-white bg-yellow-500 border-0 py-2 px-4  mr-3 focus:outline-none hover:bg-yellow-600 rounded text-lg"><CgTrashEmpty className='my-auto mr-1' />Empty cart</button>
            </div>
        </div>
        <div className='w-full bg-slate-900 text-white h-10'>
        <div className=" flex justify-center flex-wrap ">
           {
       Object.keys(data).map((p)=>{ 
           return <a className='px-4 py-2 hover:bg-amber-400 hover:text-slate-900 hover:font-bold ' href={`${process.env.NEXT_PUBLIC_HOST}/category/${data[p]}`} key={p}>{data[p]}</a>
       })
            }
         </div>
        </div>
        </>
    );
                    }
export default Navbar