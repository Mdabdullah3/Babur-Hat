/* eslint-disable @next/next/no-img-element */
import Navbar from "../../../components/layout/Navbar";
import Footer from "../../../components/layout/Footer";
import LoginForm from "../../../components/auth/LoginForm";
import Link from "next/link";
export const metadata = {
  title: "Login - Babur Hat",
  description: "Login section of Babur Hat",
};
const Login = () => {
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
            <LoginForm />
            <div className="divider text-gray-500 mt-4 text-sm uppercase">
              Or{" "}
              <Link href="/auth/register">
                <span className="underline cursor-pointer">Register</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </section>
  );
};

export default Login;
