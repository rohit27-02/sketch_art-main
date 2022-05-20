import '../styles/globals.css'
import Footer from '../components/Footer'
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import LoadingBar from 'react-top-loading-bar'
import Navbar from '../components/Navbar';

function MyApp({ Component, pageProps }) {
  const [cart, setCart] = useState({});
  const [subTotal, setSubTotal] = useState(0);
  const [user, setUser] = useState({value:null});
  const [key, setkey] = useState(0);
  const [progress, setProgress] = useState(0)
  
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
  const addToCart = (itemCode, qty, price, name, size, variant) => {
    let newCart = cart;
    if (itemCode in cart) {
      newCart[itemCode].qty = cart[itemCode].qty + qty
    }
    else {
      newCart[itemCode] = { qty: 1, price, name, size, variant }
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
  const removeFromCart = (itemCode, qty, price, name, size, variant) => {
    let newCart = cart;
    if (itemCode in cart) {
      newCart[itemCode].qty = cart[itemCode].qty - qty
    }
    if (newCart[itemCode].qty <= 0) {
      delete newCart[itemCode]
    }
    setCart(newCart)
    saveCart(newCart)
  }
  const buyNow=(itemCode, price, name, size, variant)=>{
    saveCart({})
    let newCart = {itemCode:{qty:1,price,name,size,variant}};
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
    <LoadingBar
        color='black'
        progress={progress}
        waitingTime={400}
        height={4}
        onLoaderFinished={() => setProgress(0)}
      />
  {showHeader && <Navbar  logout={logout} user={user} key={key} cart={cart} addToCart={addToCart} removeFromCart={removeFromCart} {...pageProps} clearCart={clearCart} subTotal={subTotal}/>}
  <Component logout={logout} buyNow={buyNow} cart={cart} addToCart={addToCart} removeFromCart={removeFromCart} clearCart={clearCart} {...pageProps} subTotal={subTotal}/>
  {showHeader && <Footer />}
 
</>
  
}
 


export default MyApp
