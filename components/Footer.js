/* eslint-disable @next/next/no-img-element */
import React from 'react'
import { useEffect, useState } from 'react'
import { RiAccountCircleFill } from "react-icons/ri"
import { BsFillTelephoneFill } from "react-icons/bs"


const Footer = () => {
  const [data, setdata] = useState({});
  const [category, setcategory] = useState([]);
  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_HOST}/api/info`)
      .then((res) => res.json())
      .then((data) => {
        setdata(data)
      })
    fetch(`${process.env.NEXT_PUBLIC_HOST}/api/getproducts`)
      .then((res) => res.json())
      .then((data) => {
        setcategory(data)
      })


  }, []);

  return (
    <div><footer style={{ backgroundColor: "yellow" }} className="">
      <div className=' border-b border-black text-center w-full'><a href='#' className='cursor-pointer ease-in-out hover:font-semibold'>Back to top</a></div>
      <div className="container  py-4 mx-auto flex items-center  md:flex-row   flex-col">
        <div className="w-80 flex flex-col justify-center items-center mx-auto flex-wrap   md:text-left">
          <a href={"/"} >
            <img className=' mx-auto pb-4 mb-6 border-b border-black' width={100} height={100} src="/logo.svg" alt="" />
          </a>
          <p className=" text-sm  flex items-center text-black"><RiAccountCircleFill className='mr-2' />{data.email}</p>
          <p className="mt-3 text-sm flex items-center text-black">< BsFillTelephoneFill className='mr-2' />{data.phone}</p>
          <p className="mt-3 text-sm flex  text-center text-black">{data.address}</p>
        </div>
        <div className="flex-grow text-sm  flex flex-wrap md:px-20 md:mt-0 mt-10 md:text-left text-center">
          <div className=" md:w-1/4 w-full px-4 mb-6 border-l border-black">
            <h2 className="title-font font-medium text-gray w-fit tracking-widest border-b border-black mx-auto md:mx-0 pb-2 mb-3">PRODUCTS</h2>
            <nav className="list-none ">
              {Object.keys(category).map((p) => {
                return <li key={p}>
                  <a href={`/category/${category[p]}`} className="text-black account leading-7 ">{category[p]}</a>
                </li>
              })}

            </nav>
          </div>
          <div className=" md:w-1/4 w-full px-4  mb-6 border-l border-black">
            <h2 className="title-font font-medium w-fit text-gray tracking-widest mx-auto md:mx-0  border-b border-black pb-2 mb-3">POLICY</h2>
            <nav className="list-none ">
              <li>
                <a href={''} className="text-black account leading-7">Return Policy</a>
              </li>
              <li>
                <a href={''} className="text-black account leading-7">Terms Of Use</a>
              </li>
              <li>
                <a href={''} className="text-black account">Secure Shopping</a>
              </li>
              <li>
                <a href={''} className="text-black account leading-7">Privacy</a>
              </li>
              <li>
                <a href={''} className="text-black account leading-7">Security</a>
              </li>
            </nav>
          </div>
          <div className=" md:w-1/4 w-full px-4  mb-6 border-l border-black">
            <h2 className="title-font font-medium w-fit text-gray tracking-widest mx-auto md:mx-0  border-b border-black pb-2 mb-3">ABOUT US</h2>
            <nav className="list-none ">
              <li>
                <a href={''} className="text-black account leading-7">Who We Are</a>
              </li>

              <li>
                <a href={'contact '} className="text-black account leading-7">Contact Us</a>
              </li>
            </nav>
          </div>
          <div className=" md:w-1/4 w-full px-4  mb-6 border-l border-black">
            <h2 className="title-font font-medium w-fit text-gray tracking-widest mx-auto md:mx-0  border-b border-black pb-2 mb-3">LETS HELP YOU</h2>
            <nav className="list-none ">
              <li>
                <a href={''} className="text-black account leading-7">Your Account</a>
              </li>

              <li>
                <a href={'contact '} className="text-black account leading-7">100% Purchase Protection</a>
              </li>
              <li>
                <a href={'contact '} className="text-black account leading-7">Return Center</a>
              </li>
              <li>
                <a href={'contact '} className="text-black account leading-7">Help</a>
              </li>

            </nav>

          </div>

        </div>

      </div>

      <div className="bg-black items-center  md:flex-row flex-col flex justify-between">
        <div className=" text-white  md:ml-4 ">© Copyright 2022 Sketch Art
        </div>
 
          <div className="inline-flex  py-4 ">
            <a style={{ color: "yellow" }} className=" scale-125 mr-4">
              <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
              </svg>
            </a>
            <a style={{ color: "yellow" }} className="ml-3  scale-125 mr-4">
              <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
              </svg>
            </a>
            <a style={{ color: "yellow" }} className="ml-3  scale-125 mr-4">
              <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
              </svg>
            </a>
            <a style={{ color: "yellow" }} className="ml-3  scale-125 mr-4">
              <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0" className="w-5 h-5" viewBox="0 0 24 24">
                <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
                <circle cx="4" cy="4" r="2" stroke="none"></circle>
              </svg>
            </a>
          </div>
  
          <div className='text-white md:mr-4'>Created by <a href='https://developersinfotech.com/' className='text-yellow-300'>Developers Infotech</a></div>
      </div>
    </footer></div>
  )
}


export default Footer