/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useState } from "react";
import InputField from "../../../components/common/InputField";
import PrimaryButton from "../../../components/common/PrimaryButton";
import { FcGoogle } from "react-icons/fc";

const Register = () => {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
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

          <div class="flex items-center w-full max-w-3xl p-8 mx-auto lg:px-12 lg:w-3/5 shadow-xl rounded-tr-2xl rounded-br-2xl">
            <div class="w-full">
              <a
                href="#"
                className="flex items-center justify-center mt-4 text-white rounded-lg shadow-md hover:bg-gray-100"
              >
                <div className="px-4 py-3">
                  <FcGoogle size={24} />
                </div>
                <h1 className="px-4 py-3 w-5/6 text-center text-gray-600 font-bold">
                  Sign in with Google
                </h1>
              </a>
              <div className="divider text-gray-500 mt-4 text-sm uppercase">
                Or
              </div>
              <form class="grid grid-cols-1 gap-4 mt-4 md:grid-cols-2">
                <InputField
                  label="First Name"
                  placeholder="First Name"
                  id="firstName"
                  required
                  value={form.firstName}
                  name="firstName"
                  onChange={handleChange}
                />
                <InputField
                  label="Last Name"
                  placeholder="Last Name"
                  id="lastName"
                  required
                  value={form.lastName}
                  name="lastName"
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
                <PrimaryButton value={"Register"} />
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Register;
