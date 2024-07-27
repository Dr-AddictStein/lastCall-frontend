import React, { useState } from "react";
import bgImg from "../../assets/images/Login/login.jpg";
import SignUpImg from '../../assets/images/Login/login-logo.png'
import { FaApple, FaArrowLeft, FaFacebook } from "react-icons/fa";
import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import '../SignUp/SignUp.css'
import { Helmet } from "react-helmet-async";
import { useLogin } from '../../hooks/useLogin';
import { GoogleAuthProvider, getAuth } from "firebase/auth";
import { signInWithPopup } from "firebase/auth";
import { app } from '../../auth/firebase';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Login() {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  const { login, gLogin, error } = useLogin();

  const auth = getAuth(app);
  const handleGoogleLogin = async () => {
    const provider = new GoogleAuthProvider();
    provider.setCustomParameters({ prompt: "select_account" });
    try {
      const resultsFromGoogle = await signInWithPopup(auth, provider);
      console.log("APAPAPAPAPAPAPA", resultsFromGoogle.user)
      const response = await gLogin(resultsFromGoogle.user.email);
      if (response) alert(response)
    }
    catch (error) {
      console.log(error);
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    if(!email || !password)return;

    const response = await login(email, password);

    if(response){
      alert(response);
      setemail("");
      setpassword("");
    }
    
  }
  return (
    <div>
      <Helmet>
        <title>Login</title>
      </Helmet>
      <div className="flex flex-col md:flex-row lg:flex-row md:pl-4 lg:pl-4">
        <div className="lg:w-1/2 my-6">
          <p className="text-blue-900 mb-4 font-bold mt-8 pl-2">
            <Link to={"/"} className="flex gap-3 items-center">
              <FaArrowLeft /> Back to home
            </Link>
          </p>
          {/* Other content */}
          <div className="text-center mx-auto lg:px-40 px-12">
            <img
              src={SignUpImg}
              alt="Sign up to Last Call"
              className="my-16 mx-auto"
              width="217"
              height="214"
            />

            <div className="flex flex-col justify-center items-center w-full">
              <div className="flex justify-center items-center  signup-btn-signup  ">
                <input
                  type="text"
                  value={email}
                  className="input input-bordered  w-full  "
                  placeholder="Enter email to Login"
                  onChange={(e) => {
                    setemail(e.target.value);
                  }}
                />
              </div>
              <div className="flex justify-center items-center  signup-btn-signup  ">
                <input
                  type="password"
                  value={password}
                  className="input input-bordered  w-full  "
                  placeholder="Password"
                  onChange={(e) => {
                    setpassword(e.target.value);
                  }}
                />
              </div>
              <button
                className="btn signup-btn btn-google bg-slate-700 text-white"
                onClick={handleSubmit}
              >
                Log In
              </button>

              <hr className="my-6 w-full max-w-xs" />

              <p className="mb-3">
                <button
                  className="btn signup-btn btn-google"
                  onClick={handleGoogleLogin}
                >
                  <FcGoogle className="text-xl mr-2" /> Continue with Google
                </button>
              </p>
              <p className="mb-3">
                <button className="btn signup-btn btn-facebook">
                  <FaFacebook className="text-xl mr-2" /> Continue with Facebook
                </button>
              </p>
              <p className="mb-3">
                <button className="btn signup-btn btn-apple">
                  <FaApple className="text-xl mr-2" /> Continue with Apple
                </button>
              </p>
            </div>
          </div>
        </div>
        <div
          style={{
            backgroundImage: `url(${bgImg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            minHeight: "100vh",
          }}
          className="md:w-1/2 lg:w-1/2 hero  items-start"
        >
          {/* Content with background image */}
          <div className="hero-overlay bg-opacity-60"></div>
          <div className="lg:mx-20 mx-4 pt-20 text-white ">
            <div className="flex  gap-6 items-center justify-start">
              <svg
                width="1em"
                height="1.2em"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                viewBox="0 0 40 48"
                font-size="34px"
                color="white"
                class="sc-e700408c-0 dEgpzN"
              >
                <path
                  d="M36.803 9.878c-.103 0-.208.002-.308.007h-.057c-.63 0-6.424.247-15.574 8.833-1.731 1.624-1.333 2.689-.949 3.719.368.985.716 1.916-.81 3.348-.019.016-1.8 1.586-4.273 3.678-1.208-3.974-1.844-7.153-1.999-9.996-.159-2.927.679-3.987 1.488-5.012 1.406-1.782 2.62-3.321-2.298-14.125-.088-.194-.251-.33-.397-.33a.22.22 0 0 0-.16.067c-.073.073-.105.199-.098.373.011.281.566 3.142 1.103 5.909.421 2.175.82 4.23.834 4.418.004.053-.02.107-.07.158-.116.122-.348.207-.565.207-.1 0-.34-.021-.399-.218l-.427-1.427C11.063 6.876 9.44 1.443 9.226.764 9.158.547 9.01.407 8.848.407a.262.262 0 0 0-.194.086C8.6.552 8.54.665 8.56.87c.025.236.315 2.294.621 4.473.375 2.659.8 5.671.816 5.903.011.165-.219.316-.436.366-.277.018-.522-.078-.57-.224-.075-.224-.824-3.217-1.485-5.858-.531-2.119-1.033-4.121-1.099-4.349-.078-.266-.24-.36-.363-.36a.27.27 0 0 0-.199.089c-.08.085-.117.218-.104.375.06.726.623 6.7.864 9.25l.114 1.205a.23.23 0 0 1-.065.187c-.095.101-.285.165-.495.165-.242 0-.432-.084-.473-.207-.058-.181-.463-2.237-.891-4.414-.543-2.764-1.105-5.621-1.2-5.89-.103-.285-.24-.346-.337-.346-.17 0-.31.19-.322.443-.541 11.61 1.188 12.712 3.19 13.988 1.154.736 2.347 1.497 3.309 4.307 1.399 4.088 1.85 8.686 2.084 12.246-4.504 3.69-7.912 6.23-10.131 7.546-.927.55-1.394 1.176-1.388 1.86.011 1.358 1.867 2.436 1.94 2.477.053.038 1.334.926 2.837.926 1.123 0 2.057-.496 2.788-1.486.32-.663 2.025-3.056 4.246-5.813.085 1.681.2 3.557.432 5.009C12.945 47.105 14.1 48 15.618 48c.344 0 .708-.047 1.018-.093.873-.13 1.697-.303 2.186-1.004.61-.874.61-2.51.005-5.145-.399-1.728-1.143-3.858-2.004-6.324-.284-.814-.58-1.657-.873-2.522 2.335-2.529 4.341-4.36 5.97-5.445 1.969-1.714 5.443-4.728 8.805-7.644 4.53-3.928 8.807-7.64 9.018-7.838.252-.236.321-.535.196-.84-.25-.61-1.338-1.267-3.136-1.267Z"
                  fill="currentColor"
                ></path>
              </svg>
              <div className="bg-white lg:w-[160px] md:w-[140px] h-[1px]"></div>
            </div>

            <h2 className="text-3xl lg:text-6xl   mb-8 mt-8 font-bold">
              You made it just in time for Last Call
            </h2>
            <p>
              Here to make sure your latest dining experience will be one to
              remember
            </p>
            <p className="mt-7">
              © First Table Limited 2024 <Link className="border-b " to={'/privacyPolicy'}>Privacy and Terms</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
