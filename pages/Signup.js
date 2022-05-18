/* eslint-disable @next/next/no-img-element */
/* eslint-disable @next/next/no-html-link-for-pages */
import React from 'react'
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useEffect } from 'react';
import Router from 'next/router';
const Signup = () => {
  
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    if(localStorage.getItem("token"))
    Router.push("/")
    }, []);
  const handleChange = (e) => {
    if (e.target.name == "name") {
      setName(e.target.value)
    }
    if (e.target.name == "email") {
      setEmail(e.target.value)
    }
    if (e.target.name == "password") {
      setPassword(e.target.value)
    }
  }
  const handleSubmit = async (e) => {
    e.preventDefault()
    const data = { name, email, password }
    let res = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/signup`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      }, body: JSON.stringify(data)
    })
    let response = await res.json()
    setEmail("")
    setName("")
    setPassword("")
    toast.success('congratulation your account is signed up', {
      position: "top-center",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  }
  return (
    <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <ToastContainer
        position="top-center"
        autoClose={5000}
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
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Sign up your new account</h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            Or{' '}
            <a href={"/Login"} className="font-medium text-yellow-600 hover:text-yellow-500">
              Login
            </a>
          </p>
        </div>
        <form onSubmit={handleSubmit} className="mt-8 space-y-6" method="POST">
          <input type="hidden" name="remember" defaultValue="true" />
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <label htmlFor="name" className="sr-only">
                Name
              </label>
              <input onChange={handleChange}
                id="name"
                name="name"
                type="text"
                autoComplete="name"
                required
                value={name}
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-yellow-500 focus:border-yellow-500 focus:z-10 sm:text-sm"
                placeholder="Name"
              />
            </div>
            <div>
              <label htmlFor="email" className="sr-only">
                Email address
              </label>
              <input onChange={handleChange}
                id="emai"
                name="email"
                type="email"
                autoComplete="email"
                required
                value={email}
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900  focus:outline-none focus:ring-yellow-500 focus:border-yellow-500 focus:z-10 sm:text-sm"
                placeholder="Email address"
              />
            </div>
            <div>
              <label htmlFor="password" className="sr-only">
                Password
              </label>
              <input onChange={handleChange}
                id="password"
                name="password"
                type="password"
                autoComplete="password"
                required
                value={password}
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-yellow-500 focus:border-yellow-500 focus:z-10 sm:text-sm"
                placeholder="Password"
              />
            </div>
          </div>

          <div className="flex items-center justify-between">



            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-yellow-600 hover:bg-yellow-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500"
            >

              Sign up
            </button>
          </div>
        </form>
      </div>
    </div>

  )
}

export default Signup