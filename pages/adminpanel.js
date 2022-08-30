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
import { AiFillFileAdd,AiOutlinePlus } from "react-icons/ai"
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
  const [isOpen2, setIsOpen2] = useState(false)
  const [isOpen3, setIsOpen3] = useState(false)
  const [title, settitle] = useState("");
  const [desc, setdesc] = useState("");
  const [price, setprice] = useState(0);
  const [category, setcategory] = useState("");
  const [subcategory, setsubcategory] = useState(null);
  const [variants, setvariants] = useState([]);
  const [slug, setslug] = useState("");
  const [color, setcolor] = useState("");
  const [colorcode, setcolorcode] = useState("");
  const [au, setau] = useState(false);
  const [au2, setau2] = useState(false);
  const [au3, setau3] = useState(false);
  const [pid, setpid] = useState();
  const [nav, setnav] = useState("products");
  const [data, setdata] = useState("false");
  const [index, setindex] = useState();
  const [email, setemail] = useState("");
  const [address, setaddress] = useState("");
  const [phone, setphone] = useState("");
  const [ready, setready] = useState(false);
  const [img, setimg] = useState("");
  const [poster, setposter] = useState("");
  const [care, setcare] = useState("");
  const [feature, setfeature] = useState("");
  const [sub, setsub] = useState(false);
  const [features, setfeatures] = useState([]);
  const [specs, setspecs] = useState([]);
  const [spec, setspec] = useState("");
  const [tagline, settagline] = useState("");


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
  setvariants(products[index].variants)
  setslug(products[index].slug)
  setcategory(products[index].category)
  setsubcategory(products[index].subcategory)
  setcare(products[index].care)
  setposter(products[index].poster)
  settagline(products[index].tagline)
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
      setsub(true)
    }
    else if (e.target.id == "color") {
      setcolor(e.target.value)
    }
    else if (e.target.id == "features") {
      setfeature(e.target.value)
    }
    else if (e.target.id == "specs") {
      setspec(e.target.value)
    }

    else if (e.target.id == "care") {
      setcare(e.target.value)
    }
    else if (e.target.id == "tagline") {
      settagline(e.target.value)
    }
  }
  function closeModal() {
    setIsOpen(false)
    setIsOpen2(false)
    setIsOpen3(false)
    setau(false)
    settitle("")
    setdesc("")
    setprice(0)
    setvariants([])
    setcategory("")
    setsubcategory(null)
    setslug("")
    setcolor("")
    setcolorcode("")
    setimg("")
    setcare("")
    setposter("")
    settagline("")
    setfeatures([])
    setspecs([])
   
  }
const selectedproduct= (event)=>{
  setpid(event.currentTarget.id)
  setindex(event.currentTarget.value)
  openModal()
 
}

  function openModal() {
    setIsOpen(true)
          } 
  
  function addup() {
    setau(true)
  }
  function openModal2() {
    setIsOpen2(true)
          } 
  
  function addup2() {
    setau2(true)
  }
  function openModal3() {
    setIsOpen3(true)
          } 
  
  function addup3() {
    setau3(true)
  }
 
  const handleSubmit = async (e) => {
   
    e.preventDefault()
    if(au){
      const data = [{ title, desc,poster,tagline, variants, category,care, price,subcategory }]
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
     
      const data = [{ title, desc,poster,tagline, variants, category,care,sub, price, subcategory }]
   
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
  const handleSubmit2 = async (e) => {
   
    e.preventDefault()
    if(au2){
      const data = [{ title, poster,specs, category, price, slug,subcategory ,features}]
      let res = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/addmotors`, {
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
  
   
    closeModal()
    Router.push("/adminpanel")
  }
  const handleSubmit3 = async (e) => {
    e.preventDefault()
   
    if(au3){
      const data = [{ title, poster, features, price, slug }]
      console.log(data)
      let res = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/addremote`, {
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
 
   
    closeModal()
    Router.push("/adminpanel")
  }


  const removeItem = async (e) => {
  
    const data =  e.currentTarget.id;
    let res = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/removeproduct`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      }, body: JSON.stringify(data)
    })
    let response = await res.json()
   
   {response.success=="success" && toast.success('Product removed, Refresh the page to see changes', {
      position: "top-center",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    }); }
   
  }
  const removefeed = async (e) => {

    const data = e.currentTarget.id
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
 async function upload2(e){
   
  var file = document.getElementById('poster');
  var form = new FormData();
  form.append("image", file.files[0])
  let res = await fetch(`https://api.imgbb.com/1/upload?key=47756aea4064f79d79d4cba1f59ee5ba`,{
    method:"POST",body:form,
  })
  let response = await res.json()
  setposter(response.data.url)
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
 async function uploadposter(){
   
  var file = document.getElementById('colorcode');
  var form = new FormData();
  form.append("image", file.files[0])
  let res = await fetch(`https://api.imgbb.com/1/upload?key=47756aea4064f79d79d4cba1f59ee5ba`,{
    method:"POST",body:form,
  })
  let response = await res.json()
  setcolorcode(response.data.url)
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


  function addvariant(){
   
    setvariants(arr=>[...arr,{color:color,colorcode:colorcode,img:img}])
    document.getElementById("colorcode").value=""
    document.getElementById("img").value=""
  }

  useEffect(() => {
  setcolor("")
  setimg("")
  }, [variants]);

  function addfeature(){
   
    setfeatures(arr=>[...arr,feature])
   
  }

  useEffect(() => {
setfeature("")
  }, [features]);

  function addspec(){
   
    setspecs(arr=>[...arr,spec])
   
  }

  useEffect(() => {
setspec("")
  }, [specs]);
 
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

            <div  className="fixed inset-0 overflow-y-auto">
              <div  className="flex min-h-full  w-full items-center justify-center p-4 text-center">
                <Transition.Child
                  as={Fragment}
                  enter="ease-out duration-300"
                  enterFrom="opacity-0 scale-95"
                  enterTo="opacity-100 scale-100"
                  leave="ease-in duration-200"
                  leaveFrom="opacity-100 scale-100"
                  leaveTo="opacity-0 scale-95"
                >
                  <Dialog.Panel className=" max-w-6xl transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
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
                    
                    <form onSubmit={handleSubmit} className="w-full">
                      <div className="md:flex md:items-center mb-6">
                        <div className="md:w-2/6">
                          <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="title">
                            Title
                          </label>
                        </div>
                        <div className="md:w-4/6">
                        
                          <input  value={title} name='title'  onChange={(e) => handleChange(e)} className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-yellow-500" id="title" type="text" ></input>
                        </div>
                      </div>
                      <div className="md:flex md:items-center mb-6">
                        <div className="md:w-2/6">
                          <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="title">
                            Tagline
                          </label>
                        </div>
                        <div className="md:w-4/6">
                        
                          <input  value={tagline} name='tagline'  onChange={(e) => handleChange(e)} className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-yellow-500" id="tagline" type="text" ></input>
                        </div>
                      </div>
                      <div className="md:flex md:items-center mb-6">
                        <div className="md:w-2/6">
                          <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="poster">
                            Poster
                          </label>
                        </div>
                        <div className="md:w-4/6">
                        
                        <input  onChange={upload2} className="" id="poster" type="file" accept='image/*' />
                        </div>
                      </div>
                    
                      <div className="md:flex md:items-center mb-6">
                        <div className="md:w-2/6">
                          <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="description">
                            Description
                          </label>
                        </div>
                        <div className="md:w-4/6">
                          <textarea value={desc} onChange={(e) => handleChange(e)} className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-yellow-500" id="desc" type="text" />
                        </div>
                      </div>
                      <div className="md:flex md:items-center mb-6">
                        <div className="md:w-2/6">
                          <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="care">
                            Care & Cleaning
                          </label>
                        </div>
                        <div className="md:w-4/6">
                          <textarea value={care} onChange={(e) => handleChange(e)} className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-yellow-500" id="care" type="text" />
                        </div>
                      </div>
                      <div className="md:flex md:items-center mb-6">
                        <div className="md:w-2/6">
                          <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="price">
                            Price
                          </label>
                        </div>
                        <div className="md:w-4/6">
                          <input  value={price} onChange={(e) => handleChange(e)} className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-yellow-500" id="price" type="number" />
                        </div>
                      </div>
                      <div className="md:flex md:items-center mb-6">
                        <div className="md:w-2/6">
                          <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="category">
                            Category
                          </label>
                        </div>
                        <div className="md:w-4/6">
                          <input  value={category} onChange={(e) => handleChange(e)} className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-yellow-500" id="category" type="text" />
                        </div>
                      </div>
                      <div className="md:flex md:items-center mb-6">
                        <div className="md:w-2/6">
                          <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="subcategory">
                            subcategory
                          </label>
                        </div>
                        <div className="md:w-4/6">
                          <input  value={subcategory} onChange={(e) => handleChange(e)} className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-yellow-500" id="subcategory" type="text" />
                        </div>
                      </div>
                  
                    
                     {/* <div className="md:flex md:items-center mb-6">
                        <div className="md:w-2/6">
                          <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="height">
                            height
                          </label>
                        </div>
                        <div className="md:w-2/6 mr-2 ">
                          <input  value={h} onChange={(e) => handleChange(e)} className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-yellow-500" id="height" type="text" />
                        </div>
                        <AiOutlinePlus onClick={add} className='cursor-pointer hover:bg-yellow-400 '/>
                      </div>
                      <div className="md:flex md:items-center mb-6">
                        <div className="md:w-2/6">
                          <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="width">
                            width
                          </label>
                        </div>
                        <div className="md:w-2/6 mr-2 ">
                          <input  value={w} onChange={(e) => handleChange(e)} className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-yellow-500" id="width" type="text" />
                        </div>
                        <AiOutlinePlus onClick={addwidth} className='cursor-pointer hover:bg-yellow-400 '/>
                    </div>*/}
                      <div className='grid grid-flow-row grid-cols-2 bg-slate-100 pt-6'>
                      <div className="md:flex md:items-center mb-6">
                        <div className="md:w-2/6">
                          <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="color">
                            Color
                          </label>
                    </div>
                        <div className="md:w-40">
                          <input  value={color} onChange={(e) => handleChange(e)} className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-yellow-500" id="color" type="text" />
                          
                        </div>
                      </div>
                      <div className="md:flex md:items-center mb-6">
                        <div className="md:w-20">
                          <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="colorcode">
                            colorcode
                          </label>
                        </div>
                        <div className="md:w-20">
                        <input  onChange={uploadposter} className="" id="colorcode" type="file" accept='image/*' />
                          
                        </div>
                      </div>
                      <div className="md:flex md:items-center  mb-6">
                        <div className="md:w-20">
                          <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="img">
                            Image
                          </label>
                        </div>
                        <div className="md:w-fit">
                          <input   onChange={(e)=>upload(e)}  type="file" id="img" accept="image/*"/>
    
                        </div>
                      </div>
                      <AiOutlinePlus onClick={addvariant} className='cursor-pointer text-2xl mx-auto my-1 hover:bg-yellow-400 border-2 border-yellow-400 '/>
                      </div>
                      <div className="md:flex md:items-center">
                        <div className="md:w-2/6"></div>
                        <div className="md:w-4/6">
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


        <Transition appear show={isOpen2} as={Fragment}>
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

            <div  className="fixed inset-0 overflow-y-auto">
              <div  className="flex min-h-full  w-full items-center justify-center p-4 text-center">
                <Transition.Child
                  as={Fragment}
                  enter="ease-out duration-300"
                  enterFrom="opacity-0 scale-95"
                  enterTo="opacity-100 scale-100"
                  leave="ease-in duration-200"
                  leaveFrom="opacity-100 scale-100"
                  leaveTo="opacity-0 scale-95"
                >
                  <Dialog.Panel className=" max-w-6xl transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <button onClick={closeModal} className='text-2xl hover:text-yellow-400'><MdCancel/></button>
                    {au2 ? <Dialog.Title
                      
                      className="text-lg font-bold leading-6 text-gray-900 text-center mb-10"
                    >
                      Add New Motor
                    </Dialog.Title>
                      : <Dialog.Title
                        
                        className="text-lg font-bold leading-6 text-gray-900 text-center mb-10"
                      >
                      
                        Update Product:  {pid}
                      </Dialog.Title>}
                    
                    <form onSubmit={handleSubmit2} className="w-full">
                      <div className="md:flex md:items-center mb-6">
                        <div className="md:w-2/6">
                          <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="title">
                            Title
                          </label>
                        </div>
                        <div className="md:w-4/6">
                        
                          <input required value={title} name='title'  onChange={(e) => handleChange(e)} className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-yellow-500" id="title" type="text" ></input>
                        </div>
                      </div>
                      <div className="md:flex md:items-center mb-6">
                        <div className="md:w-2/6">
                          <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="poster">
                            Poster
                          </label>
                        </div>
                        <div className="md:w-4/6">
                        
                        <input required onChange={upload2} className="" id="poster" type="file" accept='image/*' />
                        </div>
                      </div>
                      <div className="md:flex md:items-center mb-6">
                        <div className="md:w-2/6">
                          <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="slug">
                            Slug
                          </label>
                        </div>
                        <div className="md:w-4/6">
                          <input required  value={slug} onChange={(e) => handleChange(e)} className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-yellow-500" id="slug" type="text" />
                        </div>
                      </div>
                      
                      <div className="md:flex md:items-center mb-6">
                        <div className="md:w-2/6">
                          <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="price">
                            Price
                          </label>
                        </div>
                        <div className="md:w-4/6">
                          <input required value={price} onChange={(e) => handleChange(e)} className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-yellow-500" id="price" type="number" />
                        </div>
                      </div>
                      <div className="md:flex md:items-center mb-6">
                        <div className="md:w-2/6">
                          <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="category">
                            Category
                          </label>
                        </div>
                        <div className="md:w-4/6">
                          <input required value={category} onChange={(e) => handleChange(e)} className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-yellow-500" id="category" type="text" />
                        </div>
                      </div>
                      <div className="md:flex md:items-center mb-6">
                        <div className="md:w-2/6">
                          <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="subcategory">
                            subcategory
                          </label>
                        </div>
                        <div className="md:w-4/6">
                          <input required value={subcategory} onChange={(e) => handleChange(e)} className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-yellow-500" id="subcategory" type="text" />
                        </div>
                      </div>
                      <div className="md:flex md:items-center mb-6">
                        <div className="md:w-2/6">
                          <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="features">
                            features
                          </label>
                        </div>
                        <div className="md:w-4/6">
                          <input value={feature} onChange={(e) => handleChange(e)} className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-yellow-500" id="features" type="text" />
                        </div>
                        <AiOutlinePlus onClick={addfeature} className='cursor-pointer text-2xl mx-auto my-1 hover:bg-yellow-400 border-2 border-yellow-400 '/>
                      </div>
                      <div className="md:flex md:items-center mb-6">
                        <div className="md:w-2/6">
                          <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="specs">
                            specification
                          </label>
                        </div>
                        <div className="md:w-4/6">
                          <input value={spec} onChange={(e) => handleChange(e)} className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-yellow-500" id="specs" type="text" />
                        </div>
                        <AiOutlinePlus onClick={addspec} className='cursor-pointer text-2xl mx-auto my-1 hover:bg-yellow-400 border-2 border-yellow-400 '/>
                      </div>
                     
                      <div className="md:flex md:items-center">
                        <div className="md:w-2/6"></div>
                        <div className="md:w-4/6">
                          {au2 ? <button className="shadow bg-yellow-400 hover:bg-yellow-300 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="submit">
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

        <Transition appear show={isOpen3} as={Fragment}>
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

            <div  className="fixed inset-0 overflow-y-auto">
              <div  className="flex min-h-full  w-full items-center justify-center p-4 text-center">
                <Transition.Child
                  as={Fragment}
                  enter="ease-out duration-300"
                  enterFrom="opacity-0 scale-95"
                  enterTo="opacity-100 scale-100"
                  leave="ease-in duration-200"
                  leaveFrom="opacity-100 scale-100"
                  leaveTo="opacity-0 scale-95"
                >
                  <Dialog.Panel className=" max-w-6xl transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <button onClick={closeModal} className='text-2xl hover:text-yellow-400'><MdCancel/></button>
                    {au3 ? <Dialog.Title
                      
                      className="text-lg font-bold leading-6 text-gray-900 text-center mb-10"
                    >
                      Add New Remote
                    </Dialog.Title>
                      : <Dialog.Title
                        
                        className="text-lg font-bold leading-6 text-gray-900 text-center mb-10"
                      >
                      
                        Update Product:  {pid}
                      </Dialog.Title>}
                    
                    <form onSubmit={handleSubmit3} className="w-full">
                      <div className="md:flex md:items-center mb-6">
                        <div className="md:w-2/6">
                          <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="title">
                            Title
                          </label>
                        </div>
                        <div className="md:w-4/6">
                        
                          <input required value={title} name='title'  onChange={(e) => handleChange(e)} className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-yellow-500" id="title" type="text" ></input>
                        </div>
                      </div>
                      <div className="md:flex md:items-center mb-6">
                        <div className="md:w-2/6">
                          <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="poster">
                            Poster
                          </label>
                        </div>
                        <div className="md:w-4/6">
                        
                        <input required onChange={upload2} className="" id="poster" type="file" accept='image/*' />
                        </div>
                      </div>
                      <div className="md:flex md:items-center mb-6">
                        <div className="md:w-2/6">
                          <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="slug">
                            Slug
                          </label>
                        </div>
                        <div className="md:w-4/6">
                          <input required  value={slug} onChange={(e) => handleChange(e)} className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-yellow-500" id="slug" type="text" />
                        </div>
                      </div>
                      
                      <div className="md:flex md:items-center mb-6">
                        <div className="md:w-2/6">
                          <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="price">
                            Price
                          </label>
                        </div>
                        <div className="md:w-4/6">
                          <input required value={price} onChange={(e) => handleChange(e)} className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-yellow-500" id="price" type="number" />
                        </div>
                      </div>
                      <div className="md:flex md:items-center mb-6">
                        <div className="md:w-2/6">
                          <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="features">
                            features
                          </label>
                        </div>
                        <div className="md:w-4/6">
                          <input value={feature} onChange={(e) => handleChange(e)} className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-yellow-500" id="features" type="text" />
                        </div>
                        <AiOutlinePlus onClick={addfeature} className='cursor-pointer text-2xl mx-auto my-1 hover:bg-yellow-400 border-2 border-yellow-400 '/>
                      </div>
                     
                     
                      <div className="md:flex md:items-center">
                        <div className="md:w-2/6"></div>
                        <div className="md:w-4/6">
                          {au3 ? <button  className="shadow bg-yellow-400 hover:bg-yellow-300 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="submit">
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
          <div className='flex'>
          <button onClick={function () { openModal(); addup(); }} className='   flex items-center mx-10 text-xl my-2   hover:text-yellow-600'><AiFillFileAdd className='mr-4' />Add new product</button>
          <button onClick={function () { openModal2(); addup2(); }} className='   flex items-center mx-10 text-xl my-2   hover:text-yellow-600'><AiFillFileAdd className='mr-4' />Add new motor</button>
          <button onClick={function () { openModal3(); addup3(); }} className='   flex items-center mx-10 text-xl my-2   hover:text-yellow-600'><AiFillFileAdd className='mr-4' />Add new remote</button>
          </div>
          <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="py-4 inline-block min-w-full sm:px-6 lg:px-8">
              <div className="overflow-hidden">
                <table className="min-w-full text-center">
                  <thead className="border-b bg-gray-800">
                    <tr>
                    
                      <th scope="col" className="text-sm font-medium text-white px-6 py-4">
                        Name
                      </th>
                      <th scope="col" className="text-sm font-medium text-white px-6 py-4">
                        Category
                      </th>
                      <th scope="col" className="text-sm font-medium text-white px-6 py-4">
                        subcategory
                      </th>
                    {/*  <th scope="col" className="text-sm font-medium text-white px-6 py-4">
                        sizes
                  </th>*/}
                     
                      <th scope="col" className="text-sm font-medium text-white px-6 py-4">
                        Price
                      </th>
                    
                      <th  className="text-sm  font-medium text-white px-6 py-4">
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
                      <tr className="bg-white border-b  ">
                       
                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                          {products[p].title}
                        </td>
                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                          {products[p].category}
                        </td>
                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                          {products[p].subcategory}
                        </td>
                      {/*  <td className="text-sm grid grid-flow-col  text-gray-900 font-light px-6 py-4 space-x-1 whitespace-nowrap">
                         <div>{products[p].height.map((i)=>{ return <div key={i}>{i} x </div>}) }</div>
                         <div>{products[p].width.map((i)=>{ return <div key={i}>{i}  </div>}) }</div>
                  </td>*/}
                       
                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                          {products[p].price}
                        </td>
                       
                        <td className="  flex justify-center overflow-y-scroll h-[17vw]">
                        <div className='  grid grid-flow-row w-full  grid-cols-2   '>{products[p].variants.map((i)=>{return <div className='mb-[2vw] h-[15vw] w-[10vw]' key={i}><img src={i.img} />{i.color}</div>})}</div>
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
                       order id
                      </th>
                    
                      <th scope="col" className="text-sm font-medium text-white px-6 py-4">
                        username
                      </th>
                      <th scope="col" className="text-sm font-medium text-white px-6 py-4">
                        email
                      </th>
                      <th scope="col" className="text-sm font-medium text-white px-6 py-4">
                        date
                      </th>
                      <th scope="col" className="text-sm font-medium text-white px-6 py-4">
                        amount
                      </th>
                      <th scope="col" className="text-sm font-medium text-white px-6 py-4">
                        phone
                      </th>
                      <th scope="col" className="text-sm font-medium text-white px-6 py-4">
                        address
                      </th>
                      <th scope="col" className="text-sm font-medium text-white px-6 py-4">
                        picode
                      </th>
                      <th scope="col" className="text-sm font-medium text-white px-6 py-4">
                        products
                      </th>
                      <th scope="col" className="text-sm font-medium text-white px-6 py-4">
                        payment
                      </th>
                      <th scope="col" className="text-sm font-medium text-white px-6 py-4">
                        status
                      </th>
                      <th scope="col" className="text-sm font-medium text-white px-6 py-4">
                        delete
                      </th>
                     
                    </tr>
                  </thead>
                  {Object.keys(orders).map((o) => {

                    return <tbody key={orders[o]._id}>

                      <tr className="bg-white border-b">
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{orders[o]._id}</td>
                        <td className="text-sm font-bold text-gray-900  px-6 py-4 whitespace-nowrap">
                          {orders[o].name}
                        </td>
                        <td className="text-sm font-bold text-gray-900  px-6 py-4 whitespace-nowrap">
                          {orders[o].email}
                        </td>
                        <td className="text-sm font-bold text-gray-900  px-6 py-4 whitespace-nowrap">
                          {orders[o].createdAt}
                        </td>
                        <td className="text-sm font-bold text-gray-900  px-6 py-4 whitespace-nowrap">
                          ₹ {orders[o].amount}
                        </td>
                        <td className="text-sm font-bold text-gray-900  px-6 py-4 whitespace-nowrap">
                          {orders[o].phone}
                        </td>
                        <td className="text-sm font-bold text-gray-900  px-6 py-4 whitespace-nowrap">
                          {orders[o].address}
                        </td>
                        <td className="text-sm font-bold text-gray-900  px-6 py-4 whitespace-nowrap">
                          {orders[o].pincode}
                        </td>
                        <td className="text-sm font-bold text-gray-900 ce-y-8 flex flex-col px-6 py-4 whitespace-nowrap">
                          <span className='w-full flex '><span className='w-40'>name</span> <span className='w-40'>color</span> <span className='w-40'>size</span> <span className='w-40'>quantity</span></span>
                        {Object.keys(orders[o].products).map((p)=>{
                          return  <span className='font-bold  flex ' key={p}><span className='w-40'>{orders[o].products[p].productId}</span><span className='w-40'> {orders[o].products[p].color}</span><span className='w-40'>{orders[o].products[p].size}</span><span className='w-40'> {orders[o].products[p].quantity}</span>  </span>
                          
                        })}
                        </td>
                        
                        <td className="text-sm font-bold text-gray-900    whitespace-nowrap">
                         <span className='flex'>payment_id : {orders[o].paymentinfo.payid}</span>
                         <span>Order_id : {orders[o].paymentinfo.orderid}</span>
                        
                        </td>
                        <td className="text-sm font-bold text-gray-900  px-6 py-4 whitespace-nowrap">
                          {orders[o].status}
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
    <div className="text-center lg:w-4/6 w-full">
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
        <input required onChange={(e)=>change(e)} type="email" id="email" name="email" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-yellow-500 focus:bg-transparent focus:ring-2 focus:ring-yellow-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
      </div>
      <div className="relative flex-grow w-full">
        <label htmlFor="phone" className="leading-7 text-sm text-gray-600">Phone</label>
        <input required onChange={(e)=>change(e)} type="tel" id="phone" name="phone" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-yellow-500 focus:bg-transparent focus:ring-2 focus:ring-yellow-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
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