/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable @next/next/no-img-element */
import React from 'react'
import Product from '../models/Product';
import User from '../models/User';
import Info from '../models/Info';
import Order from '../models/Order';
import Feed from '../models/Feed';
import mongoose from "mongoose";
import { GrDocumentUpdate } from "react-icons/gr"
import { AiFillFileAdd } from "react-icons/ai"
import { RiDeleteBin5Fill } from "react-icons/ri"
import { Dialog, Transition,Disclosure } from '@headlessui/react'
import { useState, Fragment } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useEffect } from 'react';
import { MdCancel } from 'react-icons/md';
import Router from 'next/router';



const adminpanel = ({ logout, products, users,info,feed ,orders}) => {
  const [isOpen, setIsOpen] = useState(false)
  const [title, settitle] = useState("");
  const [desc, setdesc] = useState("");
  const [price, setprice] = useState(0);
  const [availableQty, setavailableQty] = useState(0);
  const [category, setcategory] = useState("");
  const [subcategory, setsubcategory] = useState("");
  const [color, setcolor] = useState("");
  const [colorpic, setcolorpic] = useState("");
  const [size, setsize] = useState("");
  const [img, setimg] = useState();
  const [slug, setslug] = useState("");
  const [au, setau] = useState(false);
  const [pid, setpid] = useState();
  const [nav, setnav] = useState("home");
  const [data, setdata] = useState("false");
  const [index, setindex] = useState();
  const [email, setemail] = useState("");
  const [address, setaddress] = useState("");
  const [phone, setphone] = useState("");
  const [ready, setready] = useState(false);


useEffect(() => {
  setdata(localStorage.getItem("admin"))
if(!localStorage.getItem("admin")){
Router.push("/")
}

}, []);
useEffect(() => {
setready(true)


}, [pid]);
useEffect(() => {
 if(au == false && isOpen){
  settitle(products[index].title)
  setdesc(products[index].desc)
  setprice(products[index].price)
  setsize(products[index].size)
  setcolor(products[index].color)
  setcolorpic(products[index].colorpic)
  setavailableQty(products[index].availableQty)
  setimg(products[index].img)
  setslug(products[index].slug)
  setcategory(products[index].category)
  setsubcategory(products[index].subcategory)
 }

}, [index]);

  function handleChange(e) {
    if (e.target.id == "title") {
      settitle(e.target.value)
    }
    else if (e.target.id == "desc") {
      setdesc(e.target.value)
    }
    else if (e.target.id == "price") {
      setprice(e.target.value)
    }
    else if (e.target.id == "category") {
      setcategory(e.target.value)
    }
    else if (e.target.id == "subcategory") {
      setsubcategory(e.target.value)
    }
    else if (e.target.id == "quantity") {
      setavailableQty(e.target.value)
    }
    else if (e.target.id == "size") {
      setsize(e.target.value)
    }
    else if (e.target.id == "color") {
      setcolor(e.target.value)
    }
    else if (e.target.id == "colorpic") {
      setcolorpic(e.target.value)
    }

    else if (e.target.id == "slug") {
      setslug(e.target.value)
    }
  }
  function closeModal() {
    setIsOpen(false)
    setau(false)
    settitle("")
    setdesc("")
    setprice(0)
    setcolor("")
    setcolorpic("")
    setsize("")
    setavailableQty(0)
    setimg("")
    setcategory("")
    setsubcategory("")
    setslug("")
    
   
  }
const selectedproduct= (event)=>{
  setpid(event.currentTarget.id)
  setindex(event.currentTarget.value)
 openModal()
 
 console.log(index)
 console.log(pid)
 
}

  function openModal() {
    setIsOpen(true)
          } 
  
  function addup() {
    setau(true)
  }
  const handleSubmit = async (e) => {
   
    e.preventDefault()
    if(au){
      const data = [{ title, desc, img,colorpic, category, size, color, price, availableQty, slug,subcategory }]
      let res = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/addproducts`, {
        method: "POST",
      headers: {
        "Content-Type": "application/json"
      }, body: JSON.stringify(data)
    })
  
    toast.success('Product added to site', {
      position: "top-center",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });}
    else{
    if(index !=null && ready){
      const data = [{ title, desc, img,colorpic, category, size, color, price, availableQty,subcategory, slug }]
   
      let res = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/updateproducts`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        }, body: JSON.stringify({pid,data})
      })
    }
   
    toast.success('Product updated', {
      position: "top-center",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });  
 
  }
   
    closeModal()
    Router.push("/adminpanel")
  }
  const removeItem = async (e) => {
setpid(e.currentTarget.id)
   if(ready ==true && pid != null){
    const data =  pid 
    let res = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/removeproduct`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      }, body: JSON.stringify(data)
    })
    let response = await res.json()
   
   {response.success=="success" && toast.success('Product removed', {
      position: "top-center",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });}
    setpid()
    Router.push("/adminpanel")
   }
  }
  const removefeed = async (e) => {

    setpid(e.currentTarget.id)
    const data = {pid}
    let res = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/removefeed`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      }, body: JSON.stringify(data)
    })
    let response = await res.json()
    Router.push("/adminpanel")
  }
 
  function layout(e) {
    if (e.target.id == "products") {
      setnav(e.target.id)
    }
    else if (e.target.id == "users") {
      setnav(e.target.id)
    }
    else if (e.target.id == "orders") {
      setnav(e.target.id)
    }
    else if (e.target.id == "info") {
      setnav(e.target.id)
    }
    else if (e.target.id == "query") {
      setnav(e.target.id)
    }
  }
  function change(e){
    if(e.target.id=="email"){
      setemail(e.target.value)
    }
    else if(e.target.id=="phone"){
      setphone(e.target.value)
    }
    else if(e.target.id=="address"){
      setaddress(e.target.value)
    }
  }
 async function update(e){
    const data = {address,email,phone}
    let res = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/updateinfo`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      }, body: JSON.stringify(data)
    })
    let response = await res.json()
   toast.success('Info Updated', {
      position: "top-center",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
    Router.push("/adminpanel")
  }
 async function upload(e){
   
  var file = document.getElementById('img');
  var form = new FormData();
  form.append("image", file.files[0])
  let res = await fetch(`https://api.imgbb.com/1/upload?key=47756aea4064f79d79d4cba1f59ee5ba`,{
    method:"POST",body:form,
  })
  let response = await res.json()
  setimg(response.data.url)
if(response.success){
  toast.success('Image uploaded', {
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
 
  return (
    <div>
      {data && <div>
        <ToastContainer
          position="top-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />


        <Transition appear show={isOpen} as={Fragment}>
          <Dialog as="div" className="relative z-10" onClose={closeModal}>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-black bg-opacity-25" />
            </Transition.Child>

            <div className="fixed inset-0 overflow-y-auto">
              <div className="flex min-h-full items-center justify-center p-4 text-center">
                <Transition.Child
                  as={Fragment}
                  enter="ease-out duration-300"
                  enterFrom="opacity-0 scale-95"
                  enterTo="opacity-100 scale-100"
                  leave="ease-in duration-200"
                  leaveFrom="opacity-100 scale-100"
                  leaveTo="opacity-0 scale-95"
                >
                  <Dialog.Panel className="w-full  max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <button onClick={closeModal} className='text-2xl hover:text-yellow-400'><MdCancel/></button>
                    {au ? <Dialog.Title
                      
                      className="text-lg font-bold leading-6 text-gray-900 text-center mb-10"
                    >
                      Add New Product
                    </Dialog.Title>
                      : <Dialog.Title
                        
                        className="text-lg font-bold leading-6 text-gray-900 text-center mb-10"
                      >
                      
                        Update Product:  {pid}
                      </Dialog.Title>}
                    
                    <form onSubmit={handleSubmit} className="w-full max-w-sm">
                      <div className="md:flex md:items-center mb-6">
                        <div className="md:w-1/3">
                          <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="title">
                            Title
                          </label>
                        </div>
                        <div className="md:w-2/3">
                        
                          <input value={title} name='title'  onChange={(e) => handleChange(e)} className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-yellow-500" id="title" type="text" ></input>
                        </div>
                      </div>
                      <div className="md:flex md:items-center mb-6">
                        <div className="md:w-1/3">
                          <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="slug">
                            Slug
                          </label>
                        </div>
                        <div className="md:w-2/3">
                          <input  value={slug} onChange={(e) => handleChange(e)} className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-yellow-500" id="slug" type="text" />
                        </div>
                      </div>
                      <div className="md:flex md:items-center mb-6">
                        <div className="md:w-1/3">
                          <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="description">
                            Description
                          </label>
                        </div>
                        <div className="md:w-2/3">
                          <textarea value={desc} onChange={(e) => handleChange(e)} className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-yellow-500" id="desc" type="text" />
                        </div>
                      </div>
                      <div className="md:flex md:items-center mb-6">
                        <div className="md:w-1/3">
                          <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="price">
                            Price
                          </label>
                        </div>
                        <div className="md:w-2/3">
                          <input value={price} onChange={(e) => handleChange(e)} className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-yellow-500" id="price" type="number" />
                        </div>
                      </div>
                      <div className="md:flex md:items-center mb-6">
                        <div className="md:w-1/3">
                          <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="category">
                            Category
                          </label>
                        </div>
                        <div className="md:w-2/3">
                          <input value={category} onChange={(e) => handleChange(e)} className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-yellow-500" id="category" type="text" />
                        </div>
                      </div>
                      <div className="md:flex md:items-center mb-6">
                        <div className="md:w-1/3">
                          <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="subcategory">
                            subcategory
                          </label>
                        </div>
                        <div className="md:w-2/3">
                          <input value={subcategory} onChange={(e) => handleChange(e)} className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-yellow-500" id="subcategory" type="text" />
                        </div>
                      </div>
                      <div className="md:flex md:items-center mb-6">
                        <div className="md:w-1/3">
                          <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="quantity">
                            Quantity
                          </label>
                        </div>
                        <div className="md:w-2/3">
                          <input  value={availableQty} onChange={(e) => handleChange(e)} className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-yellow-500" id="quantity" type="number" />
                        </div>
                      </div>
                      <div className="md:flex md:items-center mb-6">
                        <div className="md:w-1/3">
                          <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="size">
                            Size
                          </label>
                        </div>
                        <div className="md:w-2/3">
                          <input value={size} onChange={(e) => handleChange(e)} className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-yellow-500" id="size" type="text" />
                        </div>
                      </div>
                      <div className="md:flex md:items-center mb-6">
                        <div className="md:w-1/3">
                          <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="color">
                            Color
                          </label>
                        </div>
                        <div className="md:w-2/3">
                          <input value={color} onChange={(e) => handleChange(e)} className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-yellow-500" id="color" type="text" />
                          
                        </div>
                      </div>
                      <div className="md:flex md:items-center mb-6">
                        <div className="md:w-1/3">
                          <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="color">
                            Colorpic
                          </label>
                        </div>
                        <div className="md:w-2/3">
                        <input value={colorpic} onChange={(e) => handleChange(e)} className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-yellow-500" id="colorpic" type="color" />
                          
                        </div>
                      </div>
                      <div className="md:flex md:items-center mb-6">
                        <div className="md:w-1/3">
                          <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="img">
                            Image
                          </label>
                        </div>
                        <div className="md:w-2/3">
                          <input  onChange={(e)=>upload(e)} className="form-control block w-full px-3 py-1.5
    text-base
    font-normal
    text-gray-700
    bg-white bg-clip-padding
    border border-solid border-gray-300
    rounded
    transition
    ease-in-out
    m-0
    focus:text-gray-700 focus:bg-white focus:border-yellow-600 focus:outline-none" type="file" id="img" accept="image/*"/>
    
                        </div>
                      </div>

                      <div className="md:flex md:items-center">
                        <div className="md:w-1/3"></div>
                        <div className="md:w-2/3">
                          {au ? <button className="shadow bg-yellow-400 hover:bg-yellow-300 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="submit">
                            Add product
                          </button> :
                            ready && <button className="shadow bg-yellow-400 hover:bg-yellow-300 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="submit">
                              update product
                            </button>}
                        </div>
                      </div>
                    </form>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </Dialog>
        </Transition>


        <header className="text-gray-600 body-font">
          <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
            <a href={"/"} className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
              <img src='/logo.jpeg' width={60} height={50}></img>
              <span className="ml-3 text-xl">Admin Panel</span>
            </a>
            <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">

              <button onClick={(e) => layout(e)} id="products" className='rounded-md hover:bg-yellow-300 p-1 mr-5' >Products</button>
              <button onClick={(e) => layout(e)} id="users" className='rounded-md hover:bg-yellow-300 p-1 mr-5' >Users</button>
              <button onClick={(e) => layout(e)} id="orders" className='rounded-md hover:bg-yellow-300 p-1 mr-5' >Orders</button>
              <button onClick={(e) => layout(e)} id="info" className='rounded-md hover:bg-yellow-300 p-1 mr-5' >Info</button>
              <button onClick={(e) => layout(e)} id="query" className='rounded-md hover:bg-yellow-300 p-1 mr-5' >query</button>

            </nav>
            <button onClick={logout} className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-yellow-300 rounded text-base mt-4 md:mt-0">Logout
              <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </button>
          </div>
        </header>
        {nav == "products" && <div className="flex flex-col">
          <button onClick={function () { openModal(); addup(); }} className='   text-2xl mx-10 my-3 hover:text-yellow-600'><AiFillFileAdd /></button>
          <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="py-4 inline-block min-w-full sm:px-6 lg:px-8">
              <div className="overflow-hidden">
                <table className="min-w-full text-center">
                  <thead className="border-b bg-gray-800">
                    <tr>
                      <th scope="col" className="text-sm font-medium text-white px-6 py-4">
                        id
                      </th>
                      <th scope="col" className="text-sm font-medium text-white px-6 py-4">
                        Name
                      </th>
                      <th scope="col" className="text-sm font-medium text-white px-6 py-4">
                        Category
                      </th>
                      <th scope="col" className="text-sm font-medium text-white px-6 py-4">
                        subcategory
                      </th>
                      <th scope="col" className="text-sm font-medium text-white px-6 py-4">
                        Size
                      </th>
                      <th scope="col" className="text-sm font-medium text-white px-6 py-4">
                        Color
                      </th>
                      <th scope="col" className="text-sm font-medium text-white px-6 py-4">
                        Price
                      </th>
                      <th scope="col" className="text-sm font-medium text-white px-6 py-4">
                        Quantity
                      </th>
                      <th scope="col" className="text-sm font-medium text-white px-6 py-4">
                        Image
                      </th>
                      <th scope="col" className="text-sm font-medium text-white px-6 py-4">
                        Update
                      </th>
                      <th scope="col" className="text-sm font-medium text-white px-6 py-4">
                        Delete
                      </th>
                    </tr>
                  </thead >
                  {Object.keys(products).map((p,i) => {
  
                    return <tbody key={products[p]._id}>

                      <tr className="bg-white border-b ">
                        <td id='id' className=" px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{products[p]._id}</td>
                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                          {products[p].title}
                        </td>
                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                          {products[p].category}
                        </td>
                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                          {products[p].subcategory}
                        </td>
                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                          {products[p].size}
                        </td>
                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                          {products[p].color}
                        </td>
                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                          {products[p].price}
                        </td>
                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                          {products[p].availableQty}
                        </td>
                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                          <img src={products[p].img} />
                        </td>
                        <td className="text-xl text-gray-900 font-light px-6 py-4 whitespace-nowrap">

                          <button
                        id={products[p]._id}
                        value={i}
                      
                            type="button"
                            onClick={function(event){selectedproduct(event);}}
                            className="rounded-md bg-black bg-opacity-20 px-4 py-2 text-sm font-medium text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
                          >
                            <GrDocumentUpdate />
                          
                          </button>

                        </td>
                        <td className="text-xl text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                          <button id={products[p]._id} onClick={(e)=>removeItem(e)}><RiDeleteBin5Fill /></button>
                        </td>
                      </tr >
                    </tbody>
                  })}
                </table>
              </div>
            </div>
          </div>
        </div>}
        {nav == "users" && <div className="flex flex-col">
          <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="py-4 inline-block min-w-full sm:px-6 lg:px-8">
              <div className="overflow-hidden">
                <table className="min-w-full text-center">
                  <thead className="border-b bg-gray-800">
                    <tr>
                      <th scope="col" className="text-sm font-medium text-white px-6 py-4">
                        id
                      </th>
                      <th scope="col" className="text-sm font-medium text-white px-6 py-4">
                        username
                      </th>
                      <th scope="col" className="text-sm font-medium text-white px-6 py-4">
                        email
                      </th>
                      <th scope="col" className="text-sm font-medium text-white px-6 py-4">
                        sign up date
                      </th>
                     
                    </tr>
                  </thead>
                  {Object.keys(users).map((u) => {

                    return <tbody key={users[u]._id}>

                      <tr className="bg-white border-b">
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{users[u]._id}</td>
                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                          {users[u].name}
                        </td>
                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                          {users[u].email}
                        </td>
                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                          {users[u].createdAt}
                        </td>
                        
                      </tr>
                    </tbody>
                  })}
                </table>
              </div>
            </div>
          </div>
        </div>}
        {nav == "orders" && <div className="flex flex-col">
          <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="py-4 inline-block min-w-full sm:px-6 lg:px-8">
              <div className="overflow-hidden">
                <table className="min-w-full text-center">
                  <thead className="border-b bg-gray-800">
                    <tr>
                      <th scope="col" className="text-sm font-medium text-white px-6 py-4">
                        id
                      </th>
                      <th scope="col" className="text-sm font-medium text-white px-6 py-4">
                        username
                      </th>
                      <th scope="col" className="text-sm font-medium text-white px-6 py-4">
                        email
                      </th>
                      <th scope="col" className="text-sm font-medium text-white px-6 py-4">
                        sign up date
                      </th>
                      <th scope="col" className="text-sm font-medium text-white px-6 py-4">
                        delete
                      </th>
                    </tr>
                  </thead>
                  {Object.keys(orders).map((o) => {

                    return <tbody key={orders[o]._id}>

                      <tr className="bg-white border-b">
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{users[u]._id}</td>
                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                          {orders[u].name}
                        </td>
                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                          {orders[u].email}
                        </td>
                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                          {orders[u].createdAt}
                        </td>
                        <td className="text-xl text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                          <button><RiDeleteBin5Fill /></button>
                        </td>
                      </tr>
                    </tbody>
                  })}
                </table>
              </div>
            </div>
          </div>
        </div>}
        {nav=="info" && <div>
         
        <section className="text-gray-600 body-font">
  <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
    <img className="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded" alt="hero" src="/logo.jpeg"/>
    <div className="text-center lg:w-2/3 w-full">
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">{info[0].email}</h1>
      <p className="mb-8 leading-relaxed">{info[0].address}</p>
      <p className="mb-8 leading-relaxed">{info[0].phone}</p>
      <div className="flex justify-center">
       
        <div className="w-full px-4 pt-16">
      <div className="mx-auto w-full max-w-md rounded-2xl bg-white p-2">
        <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button className=" inline-flex text-white bg-yellow-500 border-0 py-2 px-6 focus:outline-none hover:bg-yellow-600 rounded text-lg">
                <span>Update Info</span>
               
              </Disclosure.Button>
              <Disclosure.Panel className="  px-4 pt-4 pb-2 text-gray-500">
              <form className="flex flex-col mx-auto px-8 sm:space-x-4 sm:space-y-0 space-y-4 sm:px-0 items-end">
      <div className="relative flex-grow w-full">
        <label htmlFor="address" className="leading-7 text-sm text-gray-600">Address</label>
        <textarea onChange={(e)=>change(e)} type="text" id="address" name="address" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-yellow-500 focus:bg-transparent focus:ring-2 focus:ring-yellow-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
      </div>
      <div className="relative flex-grow w-full">
        <label htmlFor="email" className="leading-7 text-sm text-gray-600">Email</label>
        <input onChange={(e)=>change(e)} type="email" id="email" name="email" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-yellow-500 focus:bg-transparent focus:ring-2 focus:ring-yellow-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
      </div>
      <div className="relative flex-grow w-full">
        <label htmlFor="phone" className="leading-7 text-sm text-gray-600">Phone</label>
        <input onChange={(e)=>change(e)} type="tel" id="phone" name="phone" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-yellow-500 focus:bg-transparent focus:ring-2 focus:ring-yellow-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
      </div>
      <button onClick={(e)=>update(e)} className="text-white inline-flex relative top-7 bg-yellow-300 border-0 py-2 px-8 focus:outline-none hover:bg-yellow-400 rounded text-lg">Update</button>
    </form>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
        
      </div>
    </div>
      </div>
    </div>
  </div>
</section>
      </div>}
      {nav == "query" && <div className="flex flex-col">
          <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="py-4 inline-block min-w-full sm:px-6 lg:px-8">
              <div className="overflow-hidden">
                <table className="min-w-full text-center">
                  <thead className="border-b bg-gray-800">
                    <tr>
                      <th scope="col" className="text-sm font-medium text-white px-6 py-4">
                        name
                      </th>
                      <th scope="col" className="text-sm font-medium text-white px-6 py-4">
                        email
                      </th>
                      <th scope="col" className="text-sm font-medium text-white px-6 py-4">
                        feedback
                      </th>
                      <th scope="col" className="text-sm font-medium text-white px-6 py-4">
                        delete
                      </th>
                     
                    </tr>
                  </thead>
                  {Object.keys(feed).map((f) => {

                    return <tbody key={feed[f]._id}>

                      <tr className="bg-white border-b">
                        
                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                          {feed[f].name}
                        </td>
                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                          {feed[f].email}
                        </td>
                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                          {feed[f].message}
                        </td>
                        <td className="text-xl text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                          <button id={feed[f]._id} onClick={(e)=>removefeed(e)}><RiDeleteBin5Fill /></button>
                        </td>
                      </tr>
                    </tbody>
                  })}
                </table>
              </div>
            </div>
          </div>
        </div>}
      </div>}
      

    </div>
  )
}

export async function getServerSideProps(context) {
  if (!mongoose.connections[0].readyState) {
    await mongoose.connect(process.env.MONGO_URI)
  }
  let products = await Product.find()
  let users = await User.find().sort({createdAt:-1})
  let orders = await Order.find().sort({createdAt:-1})
let info = await Info.find()
let feed = await Feed.find().sort({createdAt:-1})
  return {
    props: { products: JSON.parse(JSON.stringify(products)), users: JSON.parse(JSON.stringify(users)),orders: JSON.parse(JSON.stringify(orders)),info: JSON.parse(JSON.stringify(info)),feed: JSON.parse(JSON.stringify(feed)) },
  }
}

export default adminpanel