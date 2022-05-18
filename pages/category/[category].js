/* eslint-disable @next/next/no-img-element */
import React from 'react'
import Product from '../../models/Product';
import mongoose from "mongoose";

const Tshirts = ({products}) => {
  return (
    <div>
      <section className="text-gray-600 body-font ">
  <div className="container px-5 py-20  mx-auto ">
    <div className="flex flex-wrap justify-evenly   -m-4">
      {Object.keys(products).map((item)=>{
       return <div key={products[item]._id} className="lg:w-1/5 md:w-1/3 p-2 m-4  w-full shadow-lg cursor-pointer ">
        <a href={`/product/${products[item].slug}`} className="block relative  rounded overflow-hidden">
          <img alt="ecommerce" className=" h-[36vh] m-auto block" src={products[item].img}/>
        
        <div className="mt-4 ">
          <h3 className="text-center text-gray-500 text-xs tracking-widest title-font mb-1">T-Shirts</h3>
          <h2 className="text-center text-gray-900 title-font text-lg font-medium">{products[item].title}</h2>
          <p className="mt-1 text-center">₹{products[item].price}</p>
          <div className='mt-1'>
            {products[item].size.includes("S") && <span className='border border-gray-300 mx-1 px-1'>S</span>}
            {products[item].size.includes("M") && <span className='border border-gray-300 mx-1 px-1'>M</span>}
            {products[item].size.includes("L") && <span className='border border-gray-300 mx-1 px-1'>L</span>}
            {products[item].size.includes("XL") && <span className='border border-gray-300 mx-1 px-1'>XL</span>}
            {products[item].size.includes("XXL") && <span className='border border-gray-300 mx-1 px-1'>XXL</span>}
            </div>
          <div className='mt-2'>
            {products[item].color.includes("Red") && <button className=" bg-red-500 rounded-full w-5 h-5 focus:outline-none mx-1"></button>}
            {products[item].color.includes("Black") && <button className=" bg-black rounded-full w-5 h-5 focus:outline-none mx-1"></button>}
            {products[item].color.includes("Blue") && <button className=" bg-blue-500 rounded-full w-5 h-5 focus:outline-none mx-1"></button>}
            {products[item].color.includes("Yellow") && <button className=" bg-yellow-500 rounded-full w-5 h-5 focus:outline-none mx-1"></button>}
            {products[item].color.includes("Green") && <button className=" bg-green-500 rounded-full w-5 h-5 focus:outline-none mx-1"></button>}
            </div>
        </div>
        </a>
      </div>})}

    </div>
  </div>
</section>
    </div>
  )
}
export async function getServerSideProps(context) {
  if(!mongoose.connections[0].readyState){
    await mongoose.connect(process.env.MONGO_URI)
}
  let products = await Product.find({category:context.query.category})
  let tshirts={}
  for (let item of products){
      if(item.title in tshirts){
          if(!tshirts[item.title].color.includes(item.color)&& item.availableQty>0){
              tshirts[item.title].color.push(item.color)
          }
          if(!tshirts[item.title].size.includes(item.size)&& item.availableQty>0){
              tshirts[item.title].size.push(item.size)
          }
      }
      else {
          tshirts[item.title] = JSON.parse(JSON.stringify(item))
          if(item.availableQty >0){
              tshirts[item.title].color = [item.color]
              tshirts[item.title].size = [item.size]
          }
      }
  }
  return {
    props: {products:JSON.parse(JSON.stringify(tshirts))}, // will be passed to the page component as props
  }
}

export default Tshirts