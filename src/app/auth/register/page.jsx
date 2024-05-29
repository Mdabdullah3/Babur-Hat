/* eslint-disable @next/next/no-img-element */
import RegisterForm from "../../../components/auth/Register";
import Footer from "../../../components/layout/Footer";
import Navbar from "../../../components/layout/Navbar";
export const metadata = {
  title: "Register - Babur Hat",
  description: "Register section of Babur Hat",
};
const Register = () => {
  return (
    <div>
      <Navbar />
      <section class="bg-white w-10/12 mx-auto my-14">
        <div class="flex item-center justify-center">
          <img
            src="https://images.pexels.com/photos/135620/pexels-photo-135620.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            className="w-8/12 rounded-tl-2xl rounded-bl-2xl"
            alt=""
          />

          <div class="flex items-center w-full max-w-3xl p-8 mx-auto lg:px-12 lg:w-3/5 shadow-xl rounded-tr-2xl rounded-br-2xl">
            <RegisterForm />
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Register;
