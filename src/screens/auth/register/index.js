import React, { useEffect, useState } from "react";
import Input from "../../../components/Input";
import Button from "../../../components/Button";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { auth, provider } from "../../../utils/config";
import { signInWithPopup } from "firebase/auth";
import { Base_url } from "../../../utils/Base_url";
import Login from "../login";
import axios from "axios";
export const Register = () => {
  const navigate = useNavigate();

  const [value, setValue] = useState({});
  console.log(value);
  const handleClick = () => {
    signInWithPopup(auth, provider).then((data) => {
      setValue(data.user);
      console.log(data.user.email);
      console.log(data.user.uid);
      const params = {
        type: selectedOption,
        username: data.user.displayName,
        email: data.user.email,
        phone: "0903450343",
        password: data.user.uid,
      };

      axios
        .post(`${Base_url}/registerUser`, params)
        .then((res) => {
          console.log(res);
          if (res.data.success === true) {
            localStorage.setItem("user_data", res?.data?.newUser?._id);
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

  const [state, setState] = useState({
    username: "",
    email: "",
    phone: "",
    password: "",
  });

  console.log(state);

  const handleInputs = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    console.log(e);
    e.preventDefault();

    const params = {
      type: selectedOption,
      username: state.username,
      email: state.email,
      phone: state.phone,
      password: state.password,
    };

    axios
      .post(`${Base_url}/registerUser`, params)
      .then((res) => {
        console.log(res);
        if (res.data.success === true) {
        
          toast.success(res?.data?.message);
        
        } else {
          toast.error(res?.data?.message);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const [selectedOption, setSelectedOption] = useState("seller");

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
    if (event.target.value === "seller") {
      navigate("/register");
    } else {
      navigate("/dealar");
    }
  };

  return (
    <div>
      <section className=" block md:flex  pb-20">
        {/* login section */}
        <Login />
        <div className="  w-[100%] px-8 md:w-[50%] pt-12">
          <h3 className="   pb-3 font-bold  text-black  text-2xl">Register</h3>
          <p>Create new account today.</p>

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
                  " bg-white border-gray-200 border-2 py-2  px-10  text-black"
                }
              />
              <Button
                label={"Facebook"}
                Icons={
                  <img
                    src={require("../../../assets/images/facebook.png")}
                    alt=""
                  />
                }
                className={
                  "bg-white border-gray-200 border-2 py-2   px-10  text-black"
                }
              />
            </div>
          </div>
          <h3 className="   font-semibold  text-black  py-7 text-xl">OR</h3>
          <div className="  pb-7 pt-3 flex items-center gap-6">
            <div className=" gap-2 flex items-center">
              <input
                type="radio"
                name="gender"
                value="seller"
                checked={selectedOption === "seller"}
                onChange={handleOptionChange}
              />
              <p className=" text-gray-400  font-semibold">Private Seller</p>
            </div>
            <div className=" gap-2 flex items-center">
              <input
                type="radio"
                name="gender"
                value="dealar"
                checked={selectedOption === "dealar"}
                onChange={handleOptionChange}
              />
              <p className=" text-gray-400  font-semibold">Dealar</p>
            </div>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="  sm:w-[70%] w-[100%] flex flex-col gap-4">
              <Input
                type="text"
                onChange={handleInputs}
                value={state.username}
                name={"username"}
                label={"Username"}
                placeholder={"Username"}
                className={"border-2 w-full border-gray-200"}
                required={"required"}
              />
              <Input
                type="email"
                onChange={handleInputs}
                value={state.email}
                name={"email"}
                label={"Email"}
                placeholder={"Email"}
                className={"border-2 w-full border-gray-200"}
                required={"required"}
              />
              <Input
                type="number"
                onChange={handleInputs}
                value={state.phone}
                name={"phone"}
                label={"Phone"}
                placeholder={"Phone"}
                className={"border-2 w-full border-gray-200"}
              />
              <Input
                type="password"
                onChange={handleInputs}
                value={state.password}
                name={"password"}
                label={"Password"}
                placeholder={"Password"}
                className={"border-2 w-full border-gray-200"}
              />
              <p className="  text-gray-400 font-bold">
                Terms, Conditions & Privacy Policy*
              </p>
              <div className=" flex items-center justify-between">
                <div className=" gap-2 flex items-center">
                  <Input type="checkbox" />
                  <p className=" text-gray-400  font-semibold">
                    By sign up you agree to terms & Conditions and Privacy
                    Policy{" "}
                  </p>
                </div>
              </div>
            </div>

            <Button
              label={"Register"}
              type={"submit"}
              className={
                " bg-orange-600 rounded-md  mt-8 py-2 px-8  text-white"
              }
            />
          </form>
        </div>
      </section>
    </div>
  );
};
