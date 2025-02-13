/* eslint-disable @next/next/no-img-element */
import RegisterForm from "../../../components/auth/Register";
import Footer from "../../../components/layout/Footer";
import Navbar from "../../../components/layout/Navbar";
export const metadata = {
  title: "Register - Ready How",
  description: "Register section of Ready How",
};
const Register = () => {
  return (
    <div>
      <Navbar />
      <section className="bg-white lg:w-10/12 w-11/12 mx-auto lg:my-14 my-4">
        <div className="flex item-center justify-center">
          <img
            src="/auth.png"
            className="w-6/12 rounded-tl-2xl rounded-bl-2xl hidden lg:block"
            alt=""
          />

          <div className="flex items-center w-full max-w-3xl p-8 mx-auto lg:px-12 lg:w-3/5 shadow-xl rounded-tr-2xl rounded-br-2xl">
            <RegisterForm />
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Register;
