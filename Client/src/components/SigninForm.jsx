// import React from 'react'

import { useState } from "react"
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai"
import { useNavigate } from "react-router-dom"
import axios from "axios";

const SigninForm = () => {

  const [formData, setFormData] = useState({
    username: "",
    password: "",
  })

  const [showPassword, setShowPassword] = useState(false)

  const { email, password } = formData;
  const navigate = useNavigate()

  const handleOnSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:3000/api/auth/signin', formData)
        .then(result => {
            if(result.data.success){
                console.log(result.data);
                localStorage.setItem("token",result.data.token);
                navigate(`/`);
            }
            else{
                alert(result.data.message);
            }
        })
        .catch(err => console.log(err))
  }

  const handleOnChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }))
  }
  return (
    <form
      onSubmit={handleOnSubmit}
      className="mt-6 flex w-full flex-col gap-y-4 rounded-3xl md:p-16 p-8 bg-[#5846F9]"
    >
        <label className="w-full">
            <p className="mb-1 text-white font-semibold">
                Email <sup className="text-red-600 text-md">*</sup>
            </p>
            <input
                required
                type="text"
                name="username"
                value={email}
                onChange={handleOnChange}
                placeholder="Enter your username"
                className="form-style w-full p-2 rounded-lg"
            />
        </label>
        <label className="relative">
            <p className="mb-1 text-white font-semibold">
                Password <sup className="text-red-600 text-md">*</sup>
            </p>
            <input
                required
                type={showPassword ? "text" : "password"}
                name="password"
                value={password}
                onChange={handleOnChange}
                placeholder="Enter Password"
                className="form-style w-full p-2 rounded-lg"
            />
            <span
                onClick={() => setShowPassword((prev) => !prev)}
                className="absolute right-3 top-[38px] z-[10] cursor-pointer"
            >
                {showPassword ? (
                    <AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF" />
                ) : (
                    <AiOutlineEye fontSize={24} fill="#AFB2BF" />
                )}
            </span>
        </label>
        <button
            type="submit"
            className="mt-6 rounded-lg p-2 w-full bg-white text-xl"
        >
            Sign In
        </button>
    </form>
  )
}

export default SigninForm