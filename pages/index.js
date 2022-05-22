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
      slidesToSlide: 3,
      partialVisibilityGutter: 40 // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2,
      partialVisibilityGutter: 30 // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1,
      partialVisibilityGutter: 30 // optional, default to 1.
    }
  };
  return (
    <div >
      <Head>
        <title>Sketch Art</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className='animate-fade-in-down '>
        <Carousel
        className='container '
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
          <div className=' object-cover   md:h-auto  relative overflow-hidden   '><img  src='https://images.pexels.com/photos/1090638/pexels-photo-1090638.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'></img>
            <div className='absolute md:top-56 top-28 text-center w-full font-extrabold text-2xl md:text-7xl text-white '>Take Control Of Your Home</div>
          </div>
          <div className=' object-cover   md:h-auto  relative overflow-hidden   '><img  src='https://images.pexels.com/photos/7045941/pexels-photo-7045941.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'></img>
            <div className='absolute md:top-56 top-28 text-center w-full font-extrabold text-2xl md:text-7xl text-white '>Pushing Limits <br></br> For Your Luxuries</div>
          </div>
          <div className=' object-cover   md:h-auto  relative overflow-hidden   '><img  src="https://images.pexels.com/photos/6527067/pexels-photo-6527067.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"></img>
            <div className='absolute md:top-56 top-28 text-center w-full font-extrabold text-2xl md:text-7xl text-white '>Live In Comfort</div>
          </div>
          <div className=' object-cover   md:h-auto  relative overflow-hidden   '><img  src="https://images.pexels.com/photos/7534549/pexels-photo-7534549.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"></img>
            <div className='absolute md:top-56 top-28 text-center w-full font-extrabold text-2xl md:text-7xl text-white '>Make Home a Better<br></br> Place</div>
          </div>
 
           
          
        </Carousel>
      </div>
      <section className="text-white  pt-20  bg-gray-900 body-font">
        <div className="container px-5   mx-auto">
          <div className="flex flex-wrap w-full  flex-col items-center text-center">
            <h1 className="sm:text-3xl text-2xl font-meWhatever cdium title-font mb-2 ">Shop like a local at home</h1>
            <p className="lg:w-1/2 w-full leading-relaxed text-white">Now, why to go market when you can shop at best prices from your home !!</p>
          </div>
          <section className="text-white body-font">
            <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
              <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
                <img className="object-cover object-center rounded" alt="hero" src="https://images.dwell.com/photos/6063391372700811264/6590314608523845632/large.jpg" />
              </div>
              <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
                <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">INNOVATIVE DESIGN IS OUR PASSION
                </h1>
                <p className="mb-8 leading-relaxed">Sketch Arts strives for excellence by providing customized solutions. Our knowledgeable experts selects the most genuine and experienced
                  vendors after in-depth research.</p>
                <div className="flex justify-center">
                  <button className="inline-flex hover:scale-105 bg-yellow-500 text-black border-0 py-2 px-6 focus:outline-none hover:bg-yellow-400 rounded text-lg"><a href={'/about'}>Know more</a></button>
                </div>
              </div>
            </div>
          </section>
        </div>
      </section>
      <Carousel className='bg-gray-900 '
        swipeable={false}
        draggable={false}
        showDots={true}
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
        centerMode={true}

      >
        <div >
          <img className='p-6 hover:scale-110 hover:opacity-60  '  src='https://ae01.alicdn.com/kf/HTB186DcJFXXXXagXXXXq6xXFXXX4/Free-shipping-lithium-battery-Motorized-zebra-blinds-double-layer-roller-blinds-for-customized-size.jpg'></img>
          <legend className='text-white text-center pb-10 font-bold'>Battery Motor</legend>
        </div>
        <div >
          <img className='p-6 hover:scale-110 hover:opacity-60  '  src="https://m.media-amazon.com/images/I/91J9GAFWf1L._SL1500_.jpg"></img>
          <legend className='text-white text-center pb-10 font-bold'>Motorized Window System</legend>
        </div>
        <div >
          <img className='p-6 hover:scale-110 hover:opacity-60  '  src='https://www.spec-net.com.au/press/0212/uws_150212/images/uws150212_img01.jpg'></img>
          <legend className='text-white text-center pb-10 font-bold'>Window Control System</legend>
        </div>
        <div >
          <img className='p-6 hover:scale-110 hover:opacity-60  '  src="https://cdn11.bigcommerce.com/s-6663a/images/stencil/1280x1280/products/178/494/cell-phone_controlled__00457.1519867255.jpg?c=2" />
          <legend className='text-white text-center pb-10 font-bold'>Wifi System</legend>
        </div>


      </Carousel>

    </div>
  )
}
