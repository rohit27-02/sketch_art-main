/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import Head from 'next/head'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useState,useEffect } from 'react';

export default function Home() {
  const [sw, setsw] = useState(false);
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 600 },
      items: 1,
      slidesToSlide: 1
    },
    mobile: {
      breakpoint: { max: 600, min: 200 },
      items: 1,
      slidesToSlide: 1
    }
  };
  const responsive2 = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
      slidesToSlide: 1,
      // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 3,
      // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1,
      // optional, default to 1.
    }
  };
  const responsive3 = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 1,
      // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 3,
      // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1,
      // optional, default to 1.
    }
  };
  useEffect(() => {
    if (screen.width > 768) {
      setsw(true)
  }
  }, []);
  return (
    <div >
      <Head>
        <title>Sketch Art</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className='animate-fade-in-down carosuel' >
        <button className='bg-yellow-300 md:p-2 p-1 hover:bg-black  hover:text-yellow-400  cursor-pointer explore md:font-semibold absolute  right-60 z-20'>EXPLORE NOW</button>
        <button className='border-2 text-yellow-400 hover:bg-black hover:border-none hover:scale-110 border-yellow-300 md:p-2 p-1 cursor-pointer explore md:font-semibold absolute  right-20 z-20'><a href={'/contact'}>CONTACT US</a></button>
        <Carousel
          className='h-full '
          autoPlay={true}
          swipeable={false}
          draggable={false}
          showDots={true}
          responsive={responsive}
          ssr={true} // means to render carousel on server-side.
          infinite={true}
          autoPlaySpeed={3000}
          keyBoardControl={true}
          transitionDuration={2200}
          containerClass="carousel-container"
          removeArrowOnDeviceType={["tablet", "mobile"]}
          dotListClass="custom-dot-list-style"
        >
          <div className='  w-full bg-gray-700  h-full relative '><img className='md:mt-44 mt-12 ' src='https://i.ibb.co/CWjMC5L/Group-162.png'></img>
          </div>
          <div className='  w-full   h-full  relative '><img className='object-scale-down ' src='https://i.ibb.co/C9YbYgL/Home-page-Screen-1-image.jpg'></img>
            <div className='absolute md:top-56 top-28 text-center w-full font-extrabold text-2xl md:text-7xl text-white '>Pushing Limits <br></br> For Your Luxuries</div>
          </div>
          <div className='  w-full   h-full  relative '><img className='object-scale-down ' src="https://i.ibb.co/RSBJK54/Home-page-Screen-1-1-image6.jpg"></img>
            <div className='absolute md:top-56 top-28 text-center w-full font-extrabold text-2xl md:text-7xl text-white '>Live In Comfort</div>
          </div>
          <div className='  w-full   h-full  relative '><img className='object-scale-down ' src="https://i.ibb.co/RS0snZR/dining-room-g0dcc99ec7-1920.jpg"></img>
            <div className='absolute md:top-56 top-28 text-center w-full font-extrabold text-2xl md:text-7xl text-white '>Make Home a Better<br></br> Place</div>
          </div>



        </Carousel>
      </div>
      <section className="text-white  bg-gray-900 body-font">
        <div className="container  mx-auto ">
          <div className="w-full bg-white md:pt-10 pt-4 text-center">
            <div className='border-b-2 border-black font-bold px-10 w-full  md:text-2xl text-black font-serif '>Our Speciality Products</div>

            <Carousel className='py-4 scale-90  mx-4 md:scale-100 md:py-8 '
              swipeable={false}
              draggable={false}

              responsive={responsive3}
              ssr={true} // means to render carousel on server-side.
              infinite={true}
              autoPlay={true}
              autoPlaySpeed={4000}
              keyBoardControl={true}
              transitionDuration={500}
              containerClass="carousel-container"
              removeArrowOnDeviceType={["desktop", "tablet", "mobile"]}
              dotListClass="custom-dot-list-style"


            >
              <div className=' block mx-5'>
                <img className='drop-shadow-lg hover:scale-110 hover:opacity-60' src='https://i.ibb.co/Fq4Bjpb/Group-156.png'></img>
                <legend className=' text-center  md:px-10 text-black py-4 text-sm md:text-base font-light'>Sketch Art is proud to offer the largest
                  collection of wooden venetian blinds in India.
                  With more than 80 shades that are spread
                  across 11 collections, our wooden venetian
                  blinds in Mumbai promise to create a look
                  that is uniquely yours. The wood collection
                  includes slats in various materials like faux
                  wood & basswood. This blind type is offered
                  in ladder string and tape options which are
                  available in more than 30 colors. For more
                  information on wooden blinds, please
                  contact Sketch Art office in Mumbai or
                  explore our wooden blinds page online.</legend>
                <span className=' border-b-2   border-black'>dfghjkldfghjkl;fghjkl;fghjfgha</span>
              </div>
              <div className=' block mx-5'>
                <img className='drop-shadow-lg  hover:scale-110 hover:opacity-60' src="https://i.ibb.co/JzwQ74j/Group-157.png"></img>
                <legend className=' text-center text-sm md:text-base  md:px-10 text-black py-4  font-light'>With a strong focus on style & functionality,
                  these window blinds are one of the most
                  popular window shadings product in India
                  and the world. Roller blinds are not only a
                  perfect choice for your commercial space but
                  also for your bedroom and drawing-room.
                  The roller blind fabric collections include
                  translucent, blackout & light filtering and are
                  available in extensive fabric options with a
                  wide range of colors, qualities & designs.
                  Do not miss out on exploring our motorised
                  roller blinds for windows that are super easy
                  operate</legend>
                <span className=' border-b-2   border-black'>dfghjkldfghjkl;fghjkl;fghjfgha</span>
              </div>
              <div className=' block mx-5'>
                <img className='drop-shadow-lg   hover:scale-110 hover:opacity-60' src='https://i.ibb.co/fMrnMNb/Group-158.png'></img>
                <legend className='text-black text-center text-sm md:text-base  md:px-10 py-4  font-light'>Create a luxurious and captivating
                  atmosphere with our aluminium venetian
                  blinds. With more than 150 colour options
                  spread across three collections, these blinds
                  offer the maximum colour choice for your
                  windows. With the largest window blinds
                  online collection in India, Mac promises to be
                  the inspiration for tomorrow is trends. These
                  metal venetian blinds are offered in various
                  slat width options of 25mm and 50mm, and
                  promise to be an eye-catching window
                  covering. As a leading venetian blinds
                  manutacturer based in Delhi, you can count
                  on us to offer you unique solutions.</legend>
                <span className=' border-b-2   border-black'>dfghjkldfghjkl;fghjkl;fghjfgha</span>
              </div>

            </Carousel>

            <div className='md:py-7  bg-yellow-100' ><div className='md:h-32 md:w-96 relative -mb-96 float-right mt-24 bg-gray-900 bg-opacity-80'>
              <h1 className='md:text-4xl w-fit mx-4 float-right pt-7 border-b-2 font-semibold border-yellow-400 font-sans'>BLINDS GALLERY</h1>
              <h1 className='md:mx-5  text-yellow-400 float-right'>INSPIRED BY SKETCH ART</h1>
            </div>
              <div className='md:h-96 w-full scrollbar-hide overflow-y-scroll'>
                <img className=' ' src="https://i.ibb.co/RSBJK54/Home-page-Screen-1-1-image6.jpg"></img>

              </div>
            </div>
          </div>

        </div>
      </section>
      <div className='bg-gray-900'>
        <div className="h-20 font-serif text-white text-center py-6 mb-10 border-white border-b-2 md:text-2xl ">Shop like a local at home</div>
        <Carousel className='bg-black  '
          swipeable={false}
          draggable={false}

          responsive={responsive2}
          ssr={true} // means to render carousel on server-side.
          infinite={true}
          autoPlay={true}
          autoPlaySpeed={4000}
          keyBoardControl={true}
          transitionDuration={500}
          containerClass="carousel-container"
          removeArrowOnDeviceType={["desktop", "tablet", "mobile"]}
          dotListClass="custom-dot-list-style"


        >

          <div className=' rounded-xl  h-72 md:scale-100 scale-75 mt-4'>
            <img className='rounded-xl hover:scale-110 h-full hover:opacity-60  ' src='https://i.ibb.co/Fq4Bjpb/Group-156.png'></img>

          </div>
          <div >
            <div className='m-4 rounded-xl h-72 md:scale-100 scale-75 mt-4'>
              <img className='rounded-xl hover:scale-110 h-full hover:opacity-60  ' src="https://i.ibb.co/fMrnMNb/Group-158.png"></img>

            </div></div>
          <div >
            <div className='m-4 rounded-xl  h-72 md:scale-100 scale-75'>
              <img className='rounded-xl hover:scale-110 h-full hover:opacity-60  ' src='https://i.ibb.co/smN0BVt/Group-147.png'></img>

            </div></div>
          <div >
            <div className='m-4 rounded-xl  h-72 md:scale-100 scale-75'>
              <img className='rounded-xl hover:scale-110 h-full hover:opacity-60  ' src="https://i.ibb.co/JzwQ74j/Group-157.png" />

            </div></div>
        </Carousel>
        { sw ? <div><img className='md:p-10 p-2' src='https://i.ibb.co/QYky3cJ/Group-160.png'></img></div>:""}
      </div>
    </div>
  )
}
