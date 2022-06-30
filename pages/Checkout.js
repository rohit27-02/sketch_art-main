/* eslint-disable @next/next/no-img-element */
import React from 'react'
import { CgTrashEmpty } from 'react-icons/cg';
import {MdOutlinePayment} from "react-icons/md"
import Head from "next/head"
import Script from "next/script"
const Checkout = ({cart,removeFromCart,addToCart,subTotal}) => {
    const initiatepayment= async ()=>{
        let email="xyz@gmail.com"
        let Oid = Math.floor(Math.random()*Date.now())
        const data ={cart,subTotal,Oid,email}
       const res = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/pretransaction`,
       {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        }, body: JSON.stringify(data)
      })
       let txnToken = await res.json()
       console.log(txnToken)
        var config = {
            "root": "",
            "flow": "DEFAULT",
            "data": {
            "orderId":Oid, 
            "token": txnToken, /* update token value */
            "tokenType": "TXN_TOKEN",
            "amount": subTotal /* update amount */
            },
            "handler": {
              "notifyMerchant": function(eventName,data){
                console.log("notifyMerchant handler function called");
                console.log("eventName => ",eventName);
                console.log("data => ",data);
              } 
            }
          };

                  window.Paytm.CheckoutJS.init(config).then(function onSuccess() {
                      // after successfully updating configuration, invoke JS Checkout
                      window.Paytm.CheckoutJS.invoke();
                  }).catch(function onError(error){
                      console.log("error => ",error);
                  });
              
    }
    return (<>
            <div style={{backgroundColor:"#bfb1c4",height:"6.2vw"}} className='absolute top-0 w-full h-20 '></div>
        <div style={{fontFamily: "'Roboto Slab', serif"}} className=' m-auto'>
           
            <h1 style={{fontFamily: "'Fjalla One', sans-serif",letterSpacing:1.5,paddingTop:"12vw",paddingBottom:"6vw",fontSize:"3vw"}} className='font-bold text-xl md:text-4xl text-center text-gray-800  '>CHECKOUT</h1>
            <div style={{fontSize:"1.1vw"}}>
                <h2 style={{fontSize:"1.5vw",marginBottom:"2vw"}} className='font-bold text-xl md:mx-52 mx-8'>1. Contact Details</h2>
            <div className="flex lg:w-2/3 w-full sm:flex-row flex-col mx-auto px-8 sm:space-x-4 sm:space-y-0 space-y-4 sm:px-0 items-end">
                <div className="relative flex-grow w-full">
                    <label forhtml="full-name" className="leading-7  text-gray-600">Full Name</label>
                    <input type="text" id="full-name" name="full-name" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                </div>
                <div className="relative flex-grow w-full">
                    <label forhtml="email" className="leading-7  text-gray-600">Email</label>
                    <input type="email" id="email" name="email" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                </div>
            </div>
            <div className="flex lg:w-2/3 w-full sm:flex-row flex-col mx-auto px-8 sm:space-x-4 sm:space-y-0 space-y-4 sm:px-0 items-end">
                <div className="relative flex-grow w-full">
                    <label forhtml="address" className="leading-7  text-gray-600">Address</label>
                    <textarea type="text" id="address" name="address" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                </div>
            </div>
            <div className="flex lg:w-2/3 w-full sm:flex-row flex-col mx-auto px-8 sm:space-x-4 sm:space-y-0 space-y-4 sm:px-0 items-end">
                <div className="relative flex-grow w-full">
                    <label forhtml="phone" className="leading-7  text-gray-600">Phone number</label>
                    <input type="phone" id="phone" name="phone" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                </div>
                <div className="relative flex-grow w-full">
                    <label forhtml="city" className="leading-7  text-gray-600">City</label>
                    <input type="text" id="city" name="city" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                </div>
            </div>
            <div className=" flex lg:w-2/3 w-full sm:flex-row flex-col mx-auto px-8 sm:space-x-4 sm:space-y-0 space-y-4 sm:px-0 items-end">
                <div className="relative flex-grow w-full">
                    <label forhtml="state" className="leading-7  text-gray-600">State</label>
                    <input type="text" id="state" name="state" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                </div>
                <div className="relative flex-grow w-full">
                    <label forhtml="pincode" className="leading-7  text-gray-600">Pincode</label>
                    <input type="number" id="pincode" name="pincode" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                </div>
            </div>
            </div>
            <div>
            <h2 className='font-bold text-xl md:mx-52 md:py-10 py-6 mx-8'>2. Review Cart</h2> 
           <div className='mx-12 md:mx-56 my-3 '>
           <ol className='list-decimal font-semibold '>
                    {Object.keys(cart).length ==0 && <div>
                       No items in the cart 
                    </div> }
                    <table className='w-full'>
   
                    {Object.keys(cart).map((k)=>{return <li key={k}>
                        

    <tbody className='flex flex-row justify-between w-full items-center my-4'>
                       <td className='w-52'> <div className='mx-4 flex flex-col '>
                      <span> style : {cart[k].name}</span>
                      <span> width : {cart[k].width} inches</span>
                      <span> height : {cart[k].height} inches</span>
                      <span> color : {cart[k].variant}</span>
                        </div>
                        </td>

                       <td > <span>Qty : {cart[k].qty}</span></td>

                        <td><CgTrashEmpty className='cursor-pointer' onClick={() => { removeFromCart(cart[k].name,cart[k].height,cart[k].width,cart[k].variant) }}/></td>
                        
                        <td><div><img alt='product' height={200} width={120} src={cart[k].img}></img></div></td></tbody>
                       
                       
                    </li>})}    </table>
                </ol>
                <div className='font-bold mt-10'>Total : ₹ {subTotal}</div>
           </div>
                <button style={{backgroundColor:"#bfb1c4"}} onClick={initiatepayment} className="flex text-white border-0 py-1 px-2 my-7 md:mx-56 mx-12 focus:outline-none  md:text-base 2xl:text-lg"><MdOutlinePayment className='my-auto mr-1'/>Pay now</button>
            </div>
        </div>
        </>
    )
}

export default Checkout