/* eslint-disable @next/next/no-img-element */
import Navbar from "../../../components/layout/Navbar";
import Footer from "../../../components/layout/Footer";
import LoginForm from "../../../components/auth/LoginForm";
import Link from "next/link";
export const metadata = {
  title: "Login - Ready How",
  description: "Login section of Ready How",
};
const Login = () => {
  return (
    <section>
      <Navbar />
      <div className="lg:py-16 py-4 lg:w-10/12 w-11/12 mx-auto">
        <div className="flex bg-white rounded-lg shadow-lg overflow-hidden mx-auto ">
          <img className="lg:block hidden w-6/12 " src="/auth.png" alt="" />
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
