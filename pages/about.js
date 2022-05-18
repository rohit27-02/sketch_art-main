/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import React from 'react'
import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';
const About = () => {
  
  return (
    <div>
      <div >
<img className='overflow-hidden' src='https://pbs.twimg.com/media/FO8RsG4VcAU2mHZ?format=jpg&name=large'></img>
<div className=' w-full absolute  top-48 animate-fade-in-down text-white text-3xl md:text-5xl font-extrabold text-center'>About Us</div>
      </div>
      <div className='text-center md:py-20 py-8 px-1 bg-slate-50 md:flex-row flex flex-col justify-center items-center '>
       <div> <h1 className='text-xl font-bold'>GLOBAL LEADING MANUFACTURER</h1>
        <p className='text-left  py-7 px-7 font-thin'>With an industry experience of over 25 years, sketch arts private limited is the leading manufacturer and importer of Window Blinds and Accessories, Motorized Blinds and Interior Flims in the country catering to clients across the globe. It is also the marketing partner for sketch arts based in China. Keen on widening its portfolio, sketch arts is open to expanding its imports and exports as and when opportunities present themselves.</p>
<p className='text-left  py-7 px-7 font-thin -my-6' >
sketch arts strives for excellence by providing customized solutions. An expansive range of world-class home fashion products while providing premium customer services that include global sourcing, quality assurance, logistics and finance.</p>
<button className='text-xl p-5 font-bold hover:text-yellow-500'>Contact Us</button>
</div>
<img className='p-10' width={500} height={500} src='https://blackoutcurtainabudhabi.com/wp-content/uploads/2020/12/Curtain-6.jpg'></img>
      </div>
      <div className='flex flex-col md:flex-row  justify-around items-center leading-10 bg-yellow-300  '>
<img width={500} height={500} className='p-16 ' src='https://www.lvtron.com/wp-content/uploads/2019/09/1591582913-5.jpg'></img>
<div><h1 className='font-bold text-xl'>OUR CAPABILITIES</h1>
<ul className='list-disc font-thin my-4'>
  <li>Team of expert inspectors</li>
  <li>Team of experienced procurement agents</li>
  <li>Reliable vendor base</li>
  <li>Competitive prices </li>
  <li>Wide Distribution Network</li>
  <li>Timely deliver of consignment</li>
</ul></div>
      </div>
      <div  className='text-center md:py-10 py-8 px-1 bg-slate-50 md:flex-row flex flex-col justify-center items-center '>
        <div>
          <h1 className='text-xl font-bold'>HOW WE DO IT</h1>
          <p className='text-left  py-7 px-7 font-thin'>A systemised process ensures that we deliver only the best.
In the commitment of importing top-notch quality products
from authentic vendors only, we have employed a distinguished
team of proficient procurement agents who incurs years of
experience in this business domain. This team selects the most
genuine and experienced vendors after an in-depth research.</p>
        </div>
        <img width={500} height={500} className="p-8" src='https://media.istockphoto.com/photos/little-boy-opening-the-roller-blinds-in-the-morning-picture-id1178700357?k=20&m=1178700357&s=612x612&w=0&h=zZMixHxDvjJj4ce_fEjPEFE9ReFw5xabNAPh3Rypdxo='></img>
      </div>
      <VisibilitySensor partialVisibility offset={{ bottom: 200 }}>
        {({ isVisible }) => (
           <div className='w-full md:h-56 h-96 bg-slate-700'>
           {isVisible ?<div  className='h-full flex flex-col md:flex-row bg-slate-700 text-white items-center justify-evenly'> <CountUp
           className='text-4xl font-bold  py-5'
       start={0}
       end={20}
       duration={2}
       separator=" "
       suffix='+ YEARS'
     
       
     ></CountUp>
           <CountUp
           className='text-4xl font-bold  py-5'
       start={0}
       end={50}
       duration={2}
       separator=" "
       suffix='+ EXPERTS'
     
       
     ></CountUp>
           <CountUp
           className='text-4xl font-bold  py-5'
       start={0}
       end={5000}
       duration={2}
       separator=", "
       suffix='+ PROJECTS'
     
       
     ></CountUp>
           <CountUp
           className='text-4xl font-bold  py-5'
       start={0}
       end={2000}
       duration={2}
       separator=" ,"
       suffix='+ CLIENTS'
     
       
     ></CountUp></div>:null}
           </div>
        )}
      </VisibilitySensor>
     
      </div>
  )
}

export default About