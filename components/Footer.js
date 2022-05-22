import React from 'react'
import Image from 'next/dist/client/image'
import { useEffect,useState } from 'react'

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
    <div><footer className=" bg-yellow-300 font-bold">
    <div className="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
      <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
        <a href={"/"} className="flex title-font font-medium items-center md:justify-start justify-center text-gray">
          <Image width={100} height={100} src="/logo.svg" alt="" />
        </a>
        <p className="mt-2 text-sm text-black">{data.phone}</p>
        <p className="mt-2 text-sm text-black">{data.email}</p>
        <p className="mt-2 text-sm text-black">{data.address}</p>
      </div>
      <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
        <div className="lg:w-1/3 md:w-1/3 w-full px-4">
          <h2 className="title-font font-medium text-gray tracking-widest text-sm mb-3">SHOP</h2>
          <nav className="list-none mb-10">
           {Object.keys(category).map((p)=>{return <li key={p}>
              <a  href={`/category/${category[p]}`} className="text-black hover:text-gray">{category[p]}</a>
            </li>})}
           
          </nav>
        </div>
        <div className=" md:w-1/3 w-full px-4">
          <h2 className="title-font font-medium text-gray tracking-widest text-sm mb-3">POLICY</h2>
          <nav className="list-none mb-10">
            <li>
              <a href={''} className="text-black hover:text-gray">Return Policy</a>
            </li>
            <li>
              <a href={''} className="text-black hover:text-gray">Terms Of Use</a>
            </li>
            <li>
              <a href={''} className="text-black hover:text-gray">Privacy</a>
            </li>
            <li>
              <a href={''} className="text-black hover:text-gray">Security</a>
            </li>
          </nav>
        </div>
        <div className="lg:w-1/3 md:w-1/2 w-full px-4">
          <h2 className="title-font font-medium text-gray tracking-widest text-sm mb-3">ABOUT</h2>
          <nav className="list-none mb-10">
            <li>
              <a href={'contact '} className="text-black hover:text-gray">Contact Us</a>
            </li>
            <li>
              <a href={''} className="text-black hover:text-gray">About Us</a>
            </li>
           
          </nav>
        </div>
        
      </div>
    </div>
    <div className="bg-black ">
      <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
        <p className="text-white text-sm text-center sm:text-left">© 2022 Sketch Art —
          <a href="https://www.linkedin.com/in/rohit-rawat-a41b411a9/" rel="noopener noreferrer" className="text-gray-100 ml-1" target="_blank">@rohitrawat</a>
        </p>
        <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
          <a className="text-white">
            <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
              <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
            </svg>
          </a>
          <a className="ml-3 text-white">
            <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
              <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
            </svg>
          </a>
          <a className="ml-3 text-white">
            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
              <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
              <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
            </svg>
          </a>
          <a className="ml-3 text-white">
            <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0" className="w-5 h-5" viewBox="0 0 24 24">
              <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
              <circle cx="4" cy="4" r="2" stroke="none"></circle>
            </svg>
          </a>
        </span>
      </div>
    </div>
  </footer></div>
  )
}


export default Footer