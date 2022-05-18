import React from 'react'
import { AiOutlinePlusCircle,AiOutlineMinusCircle } from 'react-icons/ai';
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
    return (
        <div className='container m-auto'>
            <Head>
            <meta  name="viewport" content="width=device-width, height=device-height, initial-scale=1.0, maximum-scale=1.0"/>
            </Head>
            <Script type="application/javascript" crossorigin="anonymous" src={`${process.env.NEXT_PUBLIC_PAYTM_HOST}/merchantpgpui/checkoutjs/merchants/${process.env.NEXT_PUBLIC_PAYTM_MID}.js`} />
            <h1 className='font-bold text-xl md:text-4xl text-center py-5 md:my-10'>Checkout</h1>
            <div>
                <h2 className='font-bold text-xl md:mx-52 md:py-10 py-6 mx-8'>1. Contact Details</h2>
            <div className="flex lg:w-2/3 w-full sm:flex-row flex-col mx-auto px-8 sm:space-x-4 sm:space-y-0 space-y-4 sm:px-0 items-end">
                <div className="relative flex-grow w-full">
                    <label forhtml="full-name" className="leading-7 text-sm text-gray-600">Full Name</label>
                    <input type="text" id="full-name" name="full-name" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                </div>
                <div className="relative flex-grow w-full">
                    <label forhtml="email" className="leading-7 text-sm text-gray-600">Email</label>
                    <input type="email" id="email" name="email" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                </div>
            </div>
            <div className="flex lg:w-2/3 w-full sm:flex-row flex-col mx-auto px-8 sm:space-x-4 sm:space-y-0 space-y-4 sm:px-0 items-end">
                <div className="relative flex-grow w-full">
                    <label forhtml="address" className="leading-7 text-sm text-gray-600">Address</label>
                    <textarea type="text" id="address" name="address" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                </div>
            </div>
            <div className="flex lg:w-2/3 w-full sm:flex-row flex-col mx-auto px-8 sm:space-x-4 sm:space-y-0 space-y-4 sm:px-0 items-end">
                <div className="relative flex-grow w-full">
                    <label forhtml="phone" className="leading-7 text-sm text-gray-600">Phone number</label>
                    <input type="phone" id="phone" name="phone" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                </div>
                <div className="relative flex-grow w-full">
                    <label forhtml="city" className="leading-7 text-sm text-gray-600">City</label>
                    <input type="text" id="city" name="city" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                </div>
            </div>
            <div className=" flex lg:w-2/3 w-full sm:flex-row flex-col mx-auto px-8 sm:space-x-4 sm:space-y-0 space-y-4 sm:px-0 items-end">
                <div className="relative flex-grow w-full">
                    <label forhtml="state" className="leading-7 text-sm text-gray-600">State</label>
                    <input type="text" id="state" name="state" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                </div>
                <div className="relative flex-grow w-full">
                    <label forhtml="pincode" className="leading-7 text-sm text-gray-600">pincode</label>
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
                    {Object.keys(cart).map((k)=>{return <li key={k}>
                        <div className='flex my-2'>
                        <div className='mx-4 '>{cart[k].name} ({cart[k].size}/{cart[k].variant})</div>
                        <div className='w-32 flex items-center justify-evenly '>< AiOutlineMinusCircle onClick={()=>{removeFromCart(k,1,cart[k].price,cart[k].name,cart[k].size,cart[k].variant)}} className='fill-yellow-500 cursor-pointer'/>{cart[k].qty}<AiOutlinePlusCircle onClick={()=>{addToCart(k,1,cart[k].price,cart[k].name,cart[k].size,cart[k].variant)}} className='fill-yellow-500 cursor-pointer'/></div>
                        </div>
                    </li>})}   
                </ol>
                <div className='font-bold mt-10'>Total : ₹ {subTotal}</div>
           </div>
                <button onClick={initiatepayment} className="flex text-white bg-yellow-500 border-0 py-1 px-2 my-7 md:mx-56 mx-12 focus:outline-none hover:bg-yellow-600 rounded md:text-lg"><MdOutlinePayment className='my-auto mr-1'/>Pay now</button>
            </div>
        </div>
    )
}

export default Checkout