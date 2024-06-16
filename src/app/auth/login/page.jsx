/* eslint-disable @next/next/no-img-element */
"use client";
import { FcGoogle } from "react-icons/fc";
import Navbar from "../../../components/layout/Navbar";
import Footer from "../../../components/layout/Footer";
import LoginForm from "../../../components/auth/LoginForm";
import { signIn, useSession } from "next-auth/react";

const Login = () => {
  const { data: session, status } = useSession();
  console.log(session);
  return (
    <section>
      <Navbar />
      <div className="py-16 w-10/12 mx-auto">
        <div className="flex bg-white rounded-lg shadow-lg overflow-hidden mx-auto ">
          <img
            className="lg:block hidden w-full"
            src="https://images.pexels.com/photos/1884584/pexels-photo-1884584.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt=""
          />
          <div className="w-full p-8 shadow-lg">
            <p className="text-xl text-gray-600 text-center">Welcome Back</p>
            <button
              className="flex items-center justify-center mt-4 text-white rounded-lg shadow-md hover:bg-gray-100"
              onClick={() => signIn("google")}
            >
              <div className="px-4 py-3">
                <FcGoogle size={24} />
              </div>
              <h1 className="px-4 py-3 w-5/6 text-center text-gray-600 font-bold">
                Sign in with Google
              </h1>
            </button>
            <div className="mt-4 flex items-center justify-between">
              <span className="border-b w-1/5 lg:w-1/4"></span>
              <a
                href="#"
                className="text-xs text-center text-gray-500 uppercase"
              >
                or login with email
              </a>
              <span className="border-b w-1/5 lg:w-1/4"></span>
            </div>
            <LoginForm />
            <div className="divider text-gray-500 mt-4 text-sm uppercase">
              Or <span className="underline cursor-pointer">Register</span>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </section>
  );
};

export default Login;
