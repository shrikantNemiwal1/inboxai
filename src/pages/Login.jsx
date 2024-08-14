import { NavLink, useNavigate } from "react-router-dom";
import LoginHeader from "../components/LoginHeader";
import GoogleIcon from "../assets/google.svg?react";
import Footer from "../components/Footer";

function Login() {
  const Navigate = useNavigate();
  const token = localStorage.getItem("token");
  if (token) {
    Navigate("/");
  }

  const handleGoogleLogin = () => {
    window.location.href =
      "https://hiring.reachinbox.xyz/api/v1/auth/google-login?redirect_to=https://reach-inbox.netlify.app/onebox";
  };

  return (
    <div>
      <LoginHeader />
      <div className="bg-black text-white w-screen h-screen flex flex-col justify-center items-center">
        <div className="bg-[#111214] text-center space-y-10 px-16 mx-2 rounded-2xl border border-[#343A40]">
          <div className="">
            <div className="text-xl font-semibold mt-6">
              Create a new account
            </div>
            <div
              className="mt-6 justify-center border-white/40 border text-center px-5 py-2 text-sm  flex items-center text-[#CCCCCC] rounded-lg cursor-pointer"
              onClick={handleGoogleLogin}
            >
              <GoogleIcon className="w-7 mr-2" />
              <span>Sign Up with Google</span>
            </div>
          </div>
          <div className="">
            <NavLink
              to="/login"
              className="bg-gradient-to-r from-[#4B63DD] to-[#0524BFFC] mt-5 px-6 text-sm py-3 rounded-md cursor-pointer"
            >
              Create an Account
            </NavLink>
            <div className="my-8 mb-10 text-[#909296]">
              Already have an account?{" "}
              <NavLink to="/login" className="text-[#C1C2C5]">
                Sign In
              </NavLink>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Login;
