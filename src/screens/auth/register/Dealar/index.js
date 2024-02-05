import React, { useState } from "react";
import Input from "../../../../components/Input";
import Button from "../../../../components/Button";
import { FaRegEyeSlash } from "react-icons/fa6";
import { Link, useNavigate } from "react-router-dom";
import { Base_url } from "../../../../utils/Base_url";
import { auth, provider } from "../../../../utils/config";
import { signInWithPopup } from "firebase/auth";
import axios from "axios";
import { toast } from "react-toastify";
export const Dealar = () => {
  const [value, setValue] = useState({});
  const navigate = useNavigate();
  const [selectedOption, setSelectedOption] = useState("dealer");
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
        // phone: "0903450343",
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
          toast.error(error.response.data.message);
        });
    });
  };

  const [state, setState] = useState({
    companyName: "",
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    tradeLicenseNumber: "",
    password: "",
    confirm_password: "",
  });

  console.log(state);

  const handleInputs = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    console.log(e);
    e.preventDefault();

    if (state.password !== state.confirm_password) {
      toast.error("Password and Confirm password must be same!");
    } else {
      const params = {
        type: selectedOption,
        companyName: state.companyName,
        email: state.email,
        firstName: state.firstName,
        lastName: state.lastName,
        phone: state.phone,
        tradeLicenseNumber: state.tradeLicenseNumber,
        password: state.password,
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
          toast.error(error.response.data.message);
          console.log(error.response.data.message);
        });
    }
  };

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
    if (event.target.value === "dealer") {
      navigate("/register");
    } else {
      navigate("/dealar");
    }
  };

  return (
    <div>
      <section className=" block md:flex  pb-20">
        {/* login section */}

        <div className="  w-[100%] px-8 md:w-[55%] pt-12">
          <h3 className="   pb-3 font-bold  text-black  text-3xl">
            Register to sell your Vehicle
          </h3>
          <p>Create new account today.</p>

          <div className=" pt-10 gap-6 md:flex block items-center">
            <h6> Continue with:</h6>
            <div className=" flex gap-2">
              <Button
                onClick={handleClick}
                label={"Google"}
                Icons={
                  <img
                    src={require("../../../../assets/images/google.png")}
                    alt=""
                  />
                }
                className={
                  " bg-white border-gray-200 border-2  py-2 px-14 rounded-md  text-black"
                }
              />
              <Button
                label={"Facebook"}
                Icons={
                  <img
                    src={require("../../../../assets/images/facebook.png")}
                    alt=""
                  />
                }
                className={
                  "bg-white border-gray-200 border-2  rounded-md py-2  px-14  text-black"
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
                value="dealer"
                checked={selectedOption === "dealer"}
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
                value={state.companyName}
                name={"companyName"}
                label={`Company Name`}
                star={"*"}
                placeholder={"Enter your company name"}
                className={"border-2 w-full border-gray-200"}
                required
              />
              <Input
                type="text"
                star={"*"}
                onChange={handleInputs}
                value={state.firstName}
                name={"firstName"}
                label={"First Name"}
                placeholder={"Enter First Name"}
                className={"border-2 w-full border-gray-200"}
                required
              />
              <Input
                type="text"
                star={"*"}
                onChange={handleInputs}
                value={state.lastName}
                name={"lastName"}
                label={"Last Name"}
                placeholder={"Enter Last Name"}
                className={"border-2 w-full border-gray-200"}
                required
              />
              <Input
                star={"*"}
                type="number"
                onChange={handleInputs}
                value={state.phone}
                name={"phone"}
                label={"Contact Number"}
                placeholder={"Enter Contact Number"}
                className={"border-2 w-full border-gray-200"}
                required
              />
              <Input
                star={"*"}
                type="email"
                onChange={handleInputs}
                value={state.email}
                name={"email"}
                label={"Email"}
                placeholder={"Enter Email"}
                className={"border-2 w-full border-gray-200"}
                required
              />
              <Input
                star={"*"}
                type="number"
                onChange={handleInputs}
                value={state.tradeLicenseNumber}
                name={"tradeLicenseNumber"}
                label={"Trade License Number"}
                placeholder={"Enter your Trade License Number"}
                className={"border-2 w-full border-gray-200"}
                required
              />
              <Input
                star={"*"}
                type="text"
                onChange={handleInputs}
                value={state.password}
                name={"password"}
                Icon={<FaRegEyeSlash className=" text-gray-500" />}
                label={"Password"}
                placeholder={"Enter Password"}
                className={"border-2 w-full border-gray-200"}
                required
              />

              <Input
                star={"*"}
                type="text"
                onChange={handleInputs}
                value={state.confirm_password}
                name={"confirm_password"}
                Icon={<FaRegEyeSlash className=" text-gray-500" />}
                label={"Confirm Password"}
                placeholder={"Enter Confirm Password"}
                className={"border-2 w-full border-gray-200"}
                required
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
            <div className=" pt-12">
              <Button
                label={"Register"}
                className={" bg-orange-600 rounded-md  px-8  py-2 text-white"}
              />
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};
