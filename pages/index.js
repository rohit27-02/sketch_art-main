/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import Head from 'next/head'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

export default function Home() {
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
  return (
    <div >
      <Head>
        <title>Sketch Art</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className='animate-fade-in-down carosuel' >
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
          <div className='  w-full   h-full relative '><img className='object-scale-down ' src='https://i.ibb.co/C9YbYgL/Home-page-Screen-1-image.jpg'></img>
            <div className='absolute md:top-56 top-28 text-center w-full font-extrabold text-2xl md:text-7xl text-white '>Take Control Of Your Home</div>
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
      <section className="text-white   bg-gray-900 body-font">
        <div className="container  mx-auto">
          <div className="w-full bg-white md:pt-10  text-center">
              <div className='border-b-2 border-black font-bold p-4 w-full md:text-2xl text-black font-serif '>Our Speciality Products</div>
            
              <Carousel className='py-4 md:py-8'
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
        removeArrowOnDeviceType={["tablet", "mobile"]}
        dotListClass="custom-dot-list-style"
       

      >
        <div className=' block mx-2'>
          <img className='drop-shadow-2xl  p-6 hover:scale-110 hover:opacity-60'  src='https://ae01.alicdn.com/kf/HTB186DcJFXXXXagXXXXq6xXFXXX4/Free-shipping-lithium-battery-Motorized-zebra-blinds-double-layer-roller-blinds-for-customized-size.jpg'></img>
          <legend className=' text-center  px-10 text-black py-4  font-light'>Sketch Art is proud to offer the largest
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
        <div className=' block mx-2'>
          <img className='drop-shadow-2xl  p-6 hover:scale-110 hover:opacity-60'  src="https://ae01.alicdn.com/kf/HTB186DcJFXXXXagXXXXq6xXFXXX4/Free-shipping-lithium-battery-Motorized-zebra-blinds-double-layer-roller-blinds-for-customized-size.jpg"></img>
          <legend className=' text-center  px-10 text-black py-4  font-light'>With a strong focus on style & functionality,
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
        <div className=' block mx-2'>
          <img className='drop-shadow-2xl  p-6 hover:scale-110 hover:opacity-60'  src='https://ae01.alicdn.com/kf/HTB186DcJFXXXXagXXXXq6xXFXXX4/Free-shipping-lithium-battery-Motorized-zebra-blinds-double-layer-roller-blinds-for-customized-size.jpg'></img>
          <legend className='text-black text-center  px-10 py-4  font-light'>Create a luxurious and captivating9
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
        <div className=' block mx-2'>
          <img className='drop-shadow-2xl  p-6 hover:scale-110 hover:opacity-60'  src="https://ae01.alicdn.com/kf/HTB186DcJFXXXXagXXXXq6xXFXXX4/Free-shipping-lithium-battery-Motorized-zebra-blinds-double-layer-roller-blinds-for-customized-size.jpg" />
          <legend className='text-black text-center  px-10 py-4  font-light'>Create a luxurious and captivating9
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
            
            <div className='md:py-7  bg-yellow-100' ><div className='md:h-32 md:w-96 relative -mb-96 float-right mt-20 bg-black bg-opacity-60'>
              <h1 className='md:text-4xl w-fit mx-auto pt-3 border-b-2 border-yellow-400 font-sans'>BLINDS GALLERY</h1>
              <h1 className='md:mx-14 mx-6 text-yellow-400 float-right'>INSPIRED BY SKETCH ART</h1>
              </div>
              <div className='md:h-96 w-full scrollbar-hide overflow-y-scroll'>
              <img className=' ' src="https://images.pexels.com/photos/7045941/pexels-photo-7045941.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"></img>
             
            </div>
            </div>
          </div>
         
        </div>
      </section>
      <div className='bg-gray-900'>
        <div className="h-20 font-serif text-white text-center py-6 mb-10 border-white border-b-2 md:text-2xl ">Shop like a local at home</div>
      <Carousel className='bg-black '
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
        removeArrowOnDeviceType={["tablet", "mobile"]}
        dotListClass="custom-dot-list-style"
      

      >
        <div >
          <img className='p-6 hover:scale-110 hover:opacity-60  ' src='https://cdn11.bigcommerce.com/s-6663a/images/stencil/1280x1280/products/178/494/cell-phone_controlled__00457.1519867255.jpg?c=2'></img>
          <legend className='text-white text-center pb-10 font-bold'>Battery Motor</legend>
        </div>
        <div >
          <img className='p-6 hover:scale-110 hover:opacity-60  ' src="https://cdn11.bigcommerce.com/s-6663a/images/stencil/1280x1280/products/178/494/cell-phone_controlled__00457.1519867255.jpg?c=2"></img>
          <legend className='text-white text-center pb-10 font-bold'>Motorized Window System</legend>
        </div>
        <div >
          <img className='p-6 hover:scale-110 hover:opacity-60  ' src='https://cdn11.bigcommerce.com/s-6663a/images/stencil/1280x1280/products/178/494/cell-phone_controlled__00457.1519867255.jpg?c=2'></img>
          <legend className='text-white text-center pb-10 font-bold'>Window Control System</legend>
        </div>
        <div >
          <img className='p-6 hover:scale-110 hover:opacity-60  ' src="https://cdn11.bigcommerce.com/s-6663a/images/stencil/1280x1280/products/178/494/cell-phone_controlled__00457.1519867255.jpg?c=2" />
          <legend className='text-white text-center pb-10 font-bold'>Wifi System</legend>
        </div>
      </Carousel>
      <div className='flex flex-col md:flex-row'>
        <img className='object-scale-down p-8 drop-shadow-xl ' src='https://img2.exportersindia.com/product_images/bc-full/dir_141/4206534/curtain-motor-automatic-motorized-curtains-price-1478851079-2548372.jpeg'></img>
        <div className=' p-12 space-y-14'>
          <h1 className='text-white text-5xl font-semibold text-right'>INNOVATIVE <span className='text-yellow-300'>DESIGN</span> IS <br/>OUR <span className='underline underline-offset-8 text-yellow-300'>PASSION</span></h1>
          <p className='text-gray-400 text-right'>Sketch Arts strives for excellence by providing<br/>
customized solutions. Our knowledgeable experts
selects the most genuine and experienced
vendors after in depth research.</p>
          <button className='float-right font-semibold px-5  py-1 bg-yellow-300 '>SHOP NOW</button>
        </div>
      </div>
      </div>
    </div>
  )
}
