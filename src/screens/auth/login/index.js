import React, { useEffect, useState } from "react";
import Button from "../../../components/Button";
import Input from "../../../components/Input";
import { useNavigate } from "react-router-dom";
import { auth, provider,providerFacebook } from "../../../utils/config";
import { signInWithPopup } from "firebase/auth";
import { Base_url } from "../../../utils/Base_url";
import axios from "axios";
import { toast } from "react-toastify";

const Login = () => {
  const [value, setValue] = useState({});
  console.log(value);
  const handleClick = () => {
    signInWithPopup(auth, provider).then((data) => {
      setValue(data.user);
      console.log(data.user.email);
      console.log(data.user.uid);
      const params = {
        emailOrPhone: data.user.email,
        password: data.user.uid,
      };

      axios
        .post(`${Base_url}/loginUser`, params)
        .then((res) => {
          console.log(res);
          if (res.data.success === true) {
            localStorage.setItem("user_data", res?.data?.user?._id);
            toast.success(res?.data?.message);
            navigate("/");
          } else {
            toast.error(res?.data?.message);
          }
        })
        .catch((error) => {
          console.log(error);
        });
    });
  };

  const handleFacebook = () => {
    signInWithPopup(auth, providerFacebook).then((data) => {
      // setValue(data.user);
      // console.log(data.user.email);
      // console.log(data.user.uid);
      console.log(data.user);
     
    });
  };

  const navigate = useNavigate();
  const [state, setState] = useState({
    email: "",
    password: "",
  });
  const handleInputs = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };
  console.log(state);

  const handlerLogin = (e) => {
    console.log(e);
    e.preventDefault();

    const params = {
      emailOrPhone: state.email,
      password: state.password,
    };

    axios
      .post(`${Base_url}/loginUser`, params)
      .then((res) => {
        console.log(res);

        if (res.data.success === true) {
          localStorage.setItem("user_data", res?.data?.user?._id);
          toast.success(res?.data?.message);
          navigate("/");
        } else {
          toast.error(res?.data?.message);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <div className=" bg-[#f2f5fb] py-12  px-12 w-[100%] md:w-[50%]">
        <h3 className="  font-bold  pb-3  text-black  text-2xl">
          Log in to your account
        </h3>
        <p className="">Welcome back! Sign in to your account</p>

        <div className=" pt-10 gap-6 md:flex block items-center">
          <h6> Continue with:</h6>
          <div className=" flex gap-2">
            <Button
              label={"Google"}
              onClick={handleClick}
              Icons={
                <img
                  src={require("../../../assets/images/google.png")}
                  alt=""
                />
              }
              className={
                " bg-white border-gray-200 border-2  py-2 px-8  text-black"
              }
            />
            <Button
              // onClick={handleFacebook}
              label={"Facebook"}
              Icons={
                <img
                  src={require("../../../assets/images/facebook.png")}
                  alt=""
                />
              }
              className={
                "bg-white border-gray-200 border-2 py-2  px-10  text-black"
              }
            />
          </div>
        </div>
        <h3 className="   font-semibold  text-black  py-7 text-xl">OR</h3>

        <form onSubmit={handlerLogin}>
          <div className=" sm:w-[70%] w-[100%] flex flex-col gap-5">
            <Input
              label={"Email or Username"}
              type="email"
              onChange={handleInputs}
              value={state.email}
              name={"email"}
              placeholder={"Email or Username"}
              className={"border-2 w-full border-gray-200"}
              required={"required"}
            />

            <Input
              label={"Password"}
              type="password"
              onChange={handleInputs}
              value={state.password}
              name={"password"}
              placeholder={"Password"}
              className={"border-2  w-full border-gray-200"}
              required={"required"}
            />
            <div className=" flex items-center justify-between">
              <div className=" gap-2 flex items-center">
                <Input type="checkbox" />
                <p className="text-gray-400  font-semibold">Reminder</p>
              </div>
              <div>
                <a
                  href=""
                  className="text-gray-400  font-semibold border-b border-gray-400"
                >
                  Forgotten password?
                </a>
              </div>
            </div>
          </div>
          <div className=" pt-12">
            <Button
              type={"submit"}
              label={"Login"}
              className={" bg-orange-600 rounded-md  px-8  py-2 text-white"}
            />
          </div>
        </form>
      </div>
    </>
  );
};

export default Login;
