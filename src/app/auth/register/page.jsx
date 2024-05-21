/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useState } from "react";
import InputField from "../../../components/common/InputField";

const Register = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    phone: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <section class="bg-white w-10/12 mx-auto my-14">
        <div class="flex item-center justify-center">
          <img
            src="https://images.pexels.com/photos/135620/pexels-photo-135620.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            className="w-8/12 rounded-tl-2xl rounded-bl-2xl"
            alt=""
          />

          <div class="flex items-center w-full max-w-3xl p-8 mx-auto lg:px-12 lg:w-3/5 shadow-xl">
            <div class="w-full">
              <h1 class="text-2xl font-semibold  text-gray-800 capitalize">
                Create your Babut Hut Account.
              </h1>
              <form class="grid grid-cols-1 gap-6 mt-8 md:grid-cols-2">
                <InputField
                  label="Name"
                  placeholder="First & Last Name"
                  id="email"
                  required
                  value={form.name}
                  name="name"
                  onChange={handleChange}
                />

                <InputField
                  label="Email Address"
                  required
                  placeholder="johnsnow@example.com"
                  value={form.email}
                  name="email"
                  onChange={handleChange}
                />
                <InputField
                  label="Phone Number"
                  required
                  placeholder="XXX-XX-XXXX-XXX"
                  value={form.phone}
                  name="phone"
                  onChange={handleChange}
                />
                <InputField
                  label="Password"
                  id="password"
                  required
                  placeholder="password"
                  value={form.password}
                  name="password"
                  onChange={handleChange}
                />
                <InputField
                  label="Confirm Password"
                  placeholder="confirm password"
                  required
                  value={form.confirmPassword}
                  name="confirmPassword"
                  onChange={handleChange}
                />

                <button class="flex items-center justify-between w-full px-6 py-3 text-sm tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-lg hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50">
                  <span>Sign Up </span>

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="w-5 h-5 rtl:-scale-x-100"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Register;
