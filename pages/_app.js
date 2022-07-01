/* eslint-disable @next/next/no-page-custom-font */
/* eslint-disable react/jsx-no-undef */
import '../styles/globals.css'
import Footer from '../components/Footer'
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Router from 'next/router';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from '../components/Navbar';
import Head from 'next/head';
import NProgress from 'nprogress'; //nprogress module
import 'nprogress/nprogress.css'; //styles of nprogress
 
function MyApp({ Component, pageProps }) {
  const [cart, setCart] = useState({});
  const [subTotal, setSubTotal] = useState(0);
  const [user, setUser] = useState({value:null});
  const [key, setkey] = useState(0);
  const [progress, setProgress] = useState(0)

  Router.events.on('routeChangeStart', () => NProgress.start()); Router.events.on('routeChangeComplete', () => NProgress.done()); Router.events.on('routeChangeError', () => NProgress.done());
  
  
  const router = useRouter()
  useEffect(() => {
    router.events.on('routeChangeStart',()=>{
      setProgress(40)
    })
    router.events.on('routeChangeComplete',()=>{
      setProgress(100)
    })
    try {
      if (localStorage.getItem("cart")) {
        setCart(JSON.parse(localStorage.getItem("cart")))
        saveCart(JSON.parse(localStorage.getItem("cart")))
      }
    }
    catch (error) {
      console.error(error);
      localStorage.clear()
    }
    const token= localStorage.getItem("token")
    if(token){
      setUser({value:token})
      setkey(Math.random())
    }
  }, [router.events, router.query]);

  const saveCart = (myCart) => {
    localStorage.setItem("cart",JSON.stringify(myCart))
    let subt = 0;
    let keys = Object.keys(myCart)
    for(let i=0; i<keys.length;i++){
      subt += myCart[keys[i]]["price"]*myCart[keys[i]].qty
    }
    setSubTotal(subt)
  }
  const addToCart = (itemCode, qty, price, name, height,width, variant,mechanism,img) => {
    let newCart = cart;
    var item = `${itemCode}${height}${width}${variant}`
   
    if (item in cart) {
      newCart[item].qty = cart[item].qty + qty
    }
    else {
      newCart[item] = { qty, price, name, height,width, variant,mechanism,img }
    }
      setCart(newCart)
      saveCart(newCart)
    
    toast.success("Product added to the cart", {
      position: "top-right",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      })
  }
  const removeFromCart = (itemCode, height,width, variant) => {
    let newCart = cart;
    let item = `${itemCode}${height}${width}${variant}`
   console.log(item)
      delete newCart[item]
    
    setCart(newCart)
    saveCart(newCart)
  }
  const buyNow=(itemCode,qty, price, name, height,width, variant,mechanism,img)=>{
    saveCart({})
    let newCart = cart;
    let item = `${itemCode}${height}${width}${variant}`
    newCart[item] = { qty, price, name, height,width, variant,mechanism,img }
    setCart(newCart)
    saveCart(newCart)
    router.push("/Checkout") 
  }
  const clearCart = () => {
    setCart({})
    saveCart({})
  }
  const logout=()=>{
    localStorage.removeItem("token")
    localStorage.removeItem("admin")
    setkey(Math.random())
    setUser({value:null})
    router.push("/")
    
  }

  const showHeader = router.pathname === '/adminpanel' ? false : true;
  return <>
   <Head>
   <title>Sketch Art</title>
      </Head>
    
  {showHeader && <Navbar saveCart={saveCart} logout={logout} user={user} key={key} cart={cart} addToCart={addToCart} removeFromCart={removeFromCart} {...pageProps} clearCart={clearCart} subTotal={subTotal}/>}
  <Component saveCart={saveCart} logout={logout} buyNow={buyNow} cart={cart} addToCart={addToCart} removeFromCart={removeFromCart} clearCart={clearCart} {...pageProps} subTotal={subTotal}/>
  {showHeader && <Footer />}
 
</>
  
}
 


export default MyApp
