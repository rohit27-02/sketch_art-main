/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import React from 'react'
import Product from '../../models/Product';
import mongoose from "mongoose";

const Tshirts = ({products}) => {
  return (
    <div>
      <div style={{ backgroundColor: "#bfb1c4" }} className='w-full h-20 absolute top-0'></div>
      <img className='' src="https://i.ibb.co/B2xYb9w/Group-39.png"></img>
      <section className="text-gray-600 body-font ">
  <div className="container px-5 py-20  mx-auto ">
    <div className="flex flex-wrap justify-evenly   -m-4">
      {Object.keys(products).map((item)=>{
       return <div key={products[item]._id} className="lg:w-1/4 md:w-1/3 p-2 m-4  w-full shadow-lg cursor-pointer ">
        <a href={`/product/${products[item].slug}`} className="block relative  rounded overflow-hidden">
          <img alt="ecommerce" className=" h-[36vh] m-auto block" src={products[item].poster}/>
        
        <div className="mt-4 ">
          <h2 className="text-center text-gray-900 title-font text-lg font-medium">{products[item].title}</h2>
          <p className="mt-1 text-center">₹{products[item].price}</p>
          
            <button className='mx-auto w-full p-4  hover:bg-slate-800 hover:text-white btn font-bold rounded'>Shop now</button>
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