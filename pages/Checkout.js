/* eslint-disable @next/next/no-img-element */
import React from 'react'
import { CgTrashEmpty } from 'react-icons/cg';
import {MdOutlinePayment} from "react-icons/md"
import {useEffect, useState } from 'react';
import jwt_decode from "jwt-decode";
import { decode } from 'jsonwebtoken';

const Checkout = ({cart,removeFromCart,addToCart,subTotal}) => {
    const [sw, setsw] = useState();
    const [name, setname] = useState();
    const [email, setemail] = useState();
    const [address, setaddress] = useState();
    const [phone, setphone] = useState();
    const [pin, setpin] = useState();
    const [order, setorder] = useState({});
    const [payment, setpayment] = useState();
    const [user, setuser] = useState({});

    function handleChange(e) {
        if (e.target.id == "name") {
          setname(e.target.value)
        }
        else if (e.target.id == "email") {
          setemail(e.target.value)
        }
        else if (e.target.id == "phone") {
          setphone(e.target.value)
        }
        else if (e.target.id == "state") {
          setstate(e.target.value)
        }
        else if (e.target.id == "pin") {
          setpin(e.target.value)
        }
        else if (e.target.id == "city") {
          setcity(e.target.value)
        }
        else if (e.target.id == "address") {
          setaddress(e.target.value)
        }
      }

      const initializeRazorpay = () => {
        return new Promise((resolve) => {
          const script = document.createElement("script");
          script.src = "https://checkout.razorpay.com/v1/checkout.js";
    
          script.onload = () => {
            resolve(true);
          };
          script.onerror = () => {
            resolve(false);
          };
    
          document.body.appendChild(script);
        });
      };

      const makePayment = async () => {
        const res = await initializeRazorpay();
    
        if (!res) {
          alert("Razorpay SDK Failed to load");
          return;
        }
    
        // Make API call to the serverless API
        const data = await fetch("/api/razorpay", { method: "POST" }).then((t) =>
          t.json()
        );
        console.log(data);
        var options = {
          key: "rzp_test_VlpBraARgWRC8D", // Enter the Key ID generated from the Dashboard
          name: "Sketch Art",
          currency: "INR",
          amount: subTotal,
          order_id: data.id,
          description: "Complete the payment",
          image: "/logo.jpeg",
          handler: function (response) {
            // Validate payment at server - using webhooks is a better idea.
            alert(response.razorpay_payment_id);
            alert(response.razorpay_order_id);
            alert(response.razorpay_signature);
          },
          prefill: {
            name: "Manu Arora",
            email: "manuarorawork@gmail.com",
            contact: "9999999999",
          },
        };
    
        const paymentObject = new window.Razorpay(options);
        paymentObject.open();
      };

    useEffect(() => {
        if(screen.width>768){
            setsw(true)
        }

        var decoded = jwt_decode(localStorage.getItem("token"));
        setuser(decoded)

       

      }, []);
      useEffect(() => {
      
        console.log(user)
        setemail(user.email)
        setname(user.name)
      
      }, [user]);
    
    return (<>
     {!sw && <div style={{backgroundColor:"#bfb1c4"}} className='w-full absolute top-0 h-12'></div>}
           {sw &&<div style={{height:"6.2vw"}} className='absolute border-b  border-black  top-0 w-full  '></div>}
        <div style={{fontFamily: "'Roboto Slab', serif"}} className=' m-auto'>
           
            <h1 style={sw?{fontFamily: "'Fjalla One', sans-serif",letterSpacing:1.5,paddingTop:"12vw",paddingBottom:"6vw",fontSize:"3vw"}:{fontFamily: "'Fjalla One', sans-serif",letterSpacing:1.5,paddingTop:"12vh",paddingBottom:"6vh",fontSize:"3vh"}} className='font-bold text-xl md:text-4xl text-center text-gray-800  '>CHECKOUT</h1>
            <div style={sw?{fontSize:"1.1vw",marginBottom:"2vw"}:{fontSize:"1.5vh",marginBottom:"2vh"}}>
                <h2 style={sw?{fontSize:"1.5vw",marginBottom:"2vw",marginLeft:"16vw"}:{fontSize:"2vh",marginBottom:"2vh"}} className='font-bold text-xl md:mx-52 mx-8'>1. Contact Details</h2>
            <div style={sw?{width:"66vw"}:{width:"48vh"}} className="flex lg:w-2/3 md:flex-row  w-full flex-col mx-auto px-8 sm:space-x-4 sm:space-y-0 space-y-4 sm:px-0 items-end">
                <div className="relative flex flex-col w-full ">
                    <label forhtml="full-name" className="leading-7  text-gray-600">Full Name</label>
                    <input value={name} onChange={(e)=>{handleChange(e)}} style={sw?{width:"32.5vw",height:"3.3vw",padding:"0.3vw 0.9vw",margin:"1vw 0vw"}:{width:"100%",height:"4.5vh",padding:"0.3vh 0.9vh"}} type="text" id="name" name="full-name" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                </div>
                <div className="relative flex-grow flex flex-col w-full">
                    <label forhtml="email" className="leading-7  text-gray-600">Email</label>
                    <input value={email} onChange={(e)=>{handleChange(e)}} style={sw?{width:"32.5vw",height:"3.3vw",padding:"0.3vw 0.9vw",margin:"1vw 0vw"}:{width:"100%",height:"4.5vh",padding:"0.3vh 0.9vh"}} type="email" id="email" name="email" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                </div>
            </div>
            <div style={sw?{width:"66vw"}:{width:"48vh"}} className="flex lg:w-2/3 w-full sm:flex-row flex-col mx-auto px-8 sm:space-x-4 sm:space-y-0 space-y-4 sm:px-0 items-end">
                <div className="relative flex-grow flex flex-col w-full">
                    <label forhtml="address" className="leading-7  text-gray-600">Address</label>
                    <textarea  value={address} onChange={(e)=>handleChange(e)} style={sw?{width:"66.2vw",height:"7vw",padding:"0.3vw 0.9vw",margin:"1vw 0vw"}:{width:"100%",height:"7vh",padding:"0.3vh 0.9vh"}} type="text" id="address" name="address" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                </div>
            </div>
            <div style={sw?{width:"66vw"}:{width:"48vh"}} className="flex lg:w-2/3 w-full sm:flex-row flex-col mx-auto px-8 sm:space-x-4 sm:space-y-0 space-y-4 sm:px-0 items-end">
                <div className="relative flex-grow flex flex-col w-full">
                    <label forhtml="phone" className="leading-7  text-gray-600">Phone number</label>
                    <input value={phone} onChange={(e)=>{handleChange(e)}} style={sw?{width:"32.5vw",height:"3.3vw",padding:"0.3vw 0.9vw",margin:"1vw 0vw"}:{width:"100%",height:"4.5vh",padding:"0.3vh 0.9vh"}} type="phone" id="phone" name="phone" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                </div>
         
                <div className="relative flex-grow flex flex-col w-full">
                    <label forhtml="pincode" className="leading-7  text-gray-600">Pincode</label>
                    <input value={pin} onChange={(e)=>{handleChange(e)}} style={sw?{width:"32.5vw",height:"3.3vw",padding:"0.3vw 0.9vw",margin:"1vw 0vw"}:{width:"100%",height:"4.5vh",padding:"0.3vh 0.9vh"}} type="number" id="pin" name="pincode" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                </div>
            </div>
            </div>
            <div>
            <h2 style={sw?{fontSize:"1.5vw",marginBottom:"2vw",marginLeft:"16vw"}:{fontSize:"2vh",marginBottom:"2vh"}} className='font-bold text-xl md:mx-52 md:py-10 py-6 mx-8'>2. Review Cart</h2> 
           <div style={sw?{margin:"3vw 17vw",fontSize:"1.3vw"}:{margin:"1vw 6.5vw",fontSize:"1.5vh"}} className='mx-12 md:mx-56 my-3 '>
           <ol className='list-decimal font-semibold '>
                    {Object.keys(cart).length ==0 && <div>
                       No items in the cart 😭
                    </div> }
                    <table className='w-full'>
   
                    {Object.keys(cart).map((k)=>{return <li key={k}>
                        

    <tbody className='flex flex-row justify-between w-full items-center my-4'>
                       <td style={sw?{width:"20vw"}:{width:"20vh"}} className='w-52'> <div className='mx-4 flex flex-col '>
                      <span><span className='text-gray-600'> style :  </span>{cart[k].name}</span>
                      <span><span className='text-gray-600'> width :  </span>{cart[k].width} meters</span>
                      <span><span className='text-gray-600'> height : </span> {cart[k].height} meters</span>
                      <span><span className='text-gray-600'> color :  </span>{cart[k].variant}</span>
                        </div>
                        </td>

                       <td > <span>Qty : {cart[k].qty}</span></td>

                        <td><CgTrashEmpty style={sw?{fontSize:"2vw"}:{fontSize:"2vh"}} className='cursor-pointer' onClick={() => { removeFromCart(cart[k].itemCode,cart[k].height,cart[k].width,cart[k].variant) }}/></td>
                        
                        <td><div><img alt='product' style={sw?{height:"12vw"}:{height:"12vh"}} src={cart[k].img}></img></div></td></tbody>
                       
                       
                    </li>})}    </table>
                </ol>
                <div style={sw?{fontSize:"2vw",marginTop:"3vw"}:{fontSize:"2vh",marginTop:"3vh"}} className='font-bold'>Total : ₹ {subTotal}</div>
           </div>
                <button style={sw?{backgroundColor:"#bfb1c4",fontFamily:`"Montserrat",sans-serif`,fontSize:"1.4vw",padding:"0.625vw 1.875vw",marginLeft:"16vw"}:{backgroundColor:"#bfb1c4",fontFamily:`"Montserrat",sans-serif`,fontSize:"1.4vh",padding:"0.625vh 1.875vh",marginLeft:"9vw"}} onClick={makePayment} className="flex text-white border-0 py-1 px-2 my-7 md:mx-56 mx-12   md:text-base 2xl:text-lg"><MdOutlinePayment className='my-auto mr-1'/>Pay now</button>
            </div>
        </div>
        </>
    )
}

export default Checkout