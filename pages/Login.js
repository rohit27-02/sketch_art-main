/* eslint-disable @next/next/no-html-link-for-pages */
/* eslint-disable @next/next/no-img-element */
import { useState ,useEffect} from 'react';
import React from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Router from 'next/router';

const Login = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    if(localStorage.getItem("token"))
  Router.push("/")
  }, []);
  const handleChange = (e) => {

    if (e.target.name == "email") {
      setEmail(e.target.value)
    }
    if (e.target.name == "password") {
      setPassword(e.target.value)
    }
  }
  const handleSubmit = async (e) => {
    e.preventDefault()
    const data = { email, password}
    let res = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      }, body: JSON.stringify(data)
    })
    let response = await res.json()
    setEmail("")
    setPassword("")
    if(response.admin){
      localStorage.setItem("admin",response.admin)
    }
    if (response.success) {
      localStorage.setItem("token",response.token)
      toast.success('congratulation your are logged in', {
        position: "top-center",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      setTimeout(() => {
        Router.push(process.env.NEXT_PUBLIC_HOST)
      }, 2000);
    }
    else {
      toast.error(response.error, {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });

    }

  }

  return (
    <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <ToastContainer
        position="top-center"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <div className="max-w-md w-full space-y-8">
        <div>
          <img
            className="mx-auto h-20 w-auto"
            src="/logo.jpeg"
            alt="Workflow"
          />
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Sign in to your account</h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            Or{' '}
            <a href={"/Signup"} className="font-medium text-yellow-600 hover:text-yellow-500">
              Sign Up
            </a>
          </p>
        </div>
        <form onSubmit={handleSubmit} className="mt-8 space-y-6" method="POST">
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <label htmlFor="email" className="sr-only">
                Email address
              </label>
              <input
                onChange={handleChange}
                id="email"
                name="email"
                type="email"
                value={email}
                autoComplete="email"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-yellow-500 focus:border-yellow-500 focus:z-10 sm:text-sm"
                placeholder="Email address"
              />
            </div>
            <div>
              <label htmlFor="password" className="sr-only">
                Password
              </label>
              <input
                onChange={handleChange}
                value={password}
                id="password"
                name="password"
                type="password"
                autoComplete="password"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-yellow-500 focus:border-yellow-500 focus:z-10 sm:text-sm"
                placeholder="Password"
              />
            </div>
          </div>

          <div className="flex items-center justify-between">
  

            <div className="text-sm">
              <a href="/Forgot" className="font-medium text-yellow-600 hover:text-yellow-500">
                Forgot your password?
              </a>
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-yellow-600 hover:bg-yellow-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500"
            >

              Sign in
            </button>
          </div>
        </form>
      </div>
    </div>

  )
}

export default Login