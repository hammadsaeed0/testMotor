import React, { useState } from "react";
import { FaAngleRight, FaLocationDot } from "react-icons/fa6";
import Input from "../../components/Input";
import Option from "../../components/Option";
import { FaCalendarAlt } from "react-icons/fa";
import {
  LiaLongArrowAltLeftSolid,
  LiaLongArrowAltRightSolid,
} from "react-icons/lia";
import Button from "../../components/Button";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { Base_url } from "../../utils/Base_url";
import axios from "axios";
const ContactDetails = () => {
  const location = useLocation();
  const { receivedData, upload } = location.state || {};

  console.log(receivedData);
  console.log(upload);

  const [state, setState] = useState({
    name: "",
    // contact_details: "",
    mobile_no: "",
    whatsapp_no: "",
    email_address: "",
  });

  console.log(state);

  const handleInputs = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  const navigate = useNavigate();
  const userId = localStorage.getItem("user_data");
  const handlerSubmit = (e) => {
    e.preventDefault();
    const params = {
      user_id: userId,
      title: receivedData.title,
      type_of_ad: receivedData.type_of_ad,
      make: receivedData.make,
      model: receivedData.model,
      contact_name: "hammad",
      year: receivedData.year,
      vehicle_condition: receivedData.vehicle_condition,
      mileage: receivedData.mileage,
      vehicle_category: receivedData.vehicle_category,
      specifications: receivedData.specifications,
      cylinder: receivedData.cylinder,
      engine_size: receivedData.engine_size,
      wheel_drive: receivedData.wheel_drive,
      gear_box: receivedData.gear_box,
      exterior_colour: receivedData.exterior_colour,
      interior_colour: receivedData.interior_colour,
      fuel_type: receivedData.fuel_type,
      registration_date: receivedData.registration_date,
      warranty: receivedData.warranty,
      warranty_date: receivedData.warranty_date,
      inspected: receivedData.inspected,
      inspection_report: "inspection_report_image_url",
      price_QR: receivedData.price_QR,
      price_range: receivedData.price_range,
      negotiable: receivedData.negotiable,
      description: receivedData.description,
      vehicle_location: "Car Location",
      longitude: 123.456,
      latitude: 78.91,
      engine_oil: receivedData.engine_oil,
      engine_oil_filter: receivedData.engine_oil_filter,
      gearbox_oil: receivedData.gearbox_oil,
      ac_filter: receivedData.ac_filter,
      air_filter: receivedData.air_filter,
      fuel_filter: receivedData.fuel_filter,
      spark_plugs: receivedData.spark_plugs,
      front_brake_pads: receivedData.front_brake_pads,
      rear_brake_pads: receivedData.rear_brake_pads,
      front_brake_discs: receivedData.front_brake_discs,
      rear_brake_discs: receivedData.rear_brake_discs,
      battery: receivedData.battery,
      front_tire_size: receivedData.front_tire_size,
      front_tire_price: receivedData.front_tire_price,
      rear_tire_size: receivedData.rear_tire_size,
      rear_tire_price: receivedData.rear_tire_price,
      name: state.name,
      contact_details: "email234@gmail.com",
      mobile_no: state.mobile_no,
      whatsapp_no: state.whatsapp_no,
      email_address: state.email_address,
      car_images: upload.map((item) => item.url),
    };

    axios
      .post(`${Base_url}/createCar`, params)
      .then((res) => {
        console.log(res);
        if (res.data.success === true) {
          navigate("/new_lists");

          toast.success(res?.data?.message);
        } else {
          toast.error(res?.data?.message);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <form onSubmit={handlerSubmit}>
      <div className=" py-8 text-center">
        <h2 className=" h2  text-center">Sell Your Car</h2>
        <p className=" pt-2 text-gray-400">
          Sell your car in seconds with just a few clicks
        </p>
      </div>
      <div className=" py-8">
        <ul className=" flex gap-8 justify-center items-center">
          <li className=" flex items-center gap-2">
            <div className=" w-8 h-8 bg-secondary items-center  rounded-full flex justify-center">
              <p className=" text-white">1</p>
            </div>
            <div>
              <span className=" text-secondary font-bold">Type Of Package</span>
            </div>
          </li>
          <li>
            <FaAngleRight className=" text-gray-500" />
          </li>
          <li className=" flex items-center gap-2">
            <div className=" w-8 h-8 bg-white border-textColor border items-center  rounded-full flex justify-center">
              <p className=" text-textColor">2</p>
            </div>
            <Link to={"/car_details"}>
              <span className=" text-textColor font-semibold ">
                Car Details
              </span>
            </Link>
          </li>
          <li>
            <FaAngleRight className=" text-gray-500" />
          </li>
          <li className=" flex items-center gap-2">
            <div className=" w-8 h-8 bg-white border-textColor border items-center  rounded-full flex justify-center">
              <p className=" text-textColor">3</p>
            </div>
            <Link to={"/car_photos"}>
              <span className=" text-textColor font-semibold">Photo</span>
            </Link>
          </li>
          <li>
            <FaAngleRight className=" text-gray-500" />
          </li>
          <li className=" flex items-center gap-2">
            <div className="w-8 h-8 bg-primary items-center  rounded-full flex justify-center">
              <p className=" text-white">4</p>
            </div>
            <Link to={"/contact_details"}>
              <span className=" text-primary font-bold">Contact Details</span>
            </Link>
          </li>
        </ul>
      </div>

      <div className=" pb-12 shadow-md rounded-xl mt-8 py-5 px-12 mx-auto  w-[80%]">
        <div className="">
          <h2 className=" h3  text-center">Contact Details</h2>
        </div>

        <div className=" flex flex-col gap-6">
          <div>
            <Input
              type="text"
              onChange={handleInputs}
              value={state.name}
              name={"name"}
              className={"  border w-full p-2  bg-[#FEFBFB]"}
              placeholder={"Enter Your Name"}
              label={"Name"}
              required={"required"}
            />
          </div>
          <div>
            <Input
              type="number"
              onChange={handleInputs}
              value={state.mobile_no}
              name={"mobile_no"}
              className={"  border w-full p-2  bg-[#FEFBFB]"}
              placeholder={"Mobile No."}
              label={"Enter Mobile No"}
              required={"required"}
            />
          </div>
          <div>
            <Input
              type="number"
              onChange={handleInputs}
              value={state.whatsapp_no}
              name={"whatsapp_no"}
              className={"  border w-full p-2  bg-[#FEFBFB]"}
              placeholder={"Whatsapp No."}
              label={"Enter Whatsapp No"}
              required={"required"}
            />
          </div>
          <div>
            <Input
              type="email"
              onChange={handleInputs}
              value={state.email_address}
              name={"email_address"}
              className={"  border w-full p-2  bg-[#FEFBFB]"}
              placeholder={"Email Address"}
              label={"Enter Email Address"}
              required={"required"}
            />
          </div>
        </div>
      </div>

      <div className=" container flex justify-between items-center mx-auto mt-10 mb-20">
        <div className="  flex items-center gap-3">
          <LiaLongArrowAltLeftSolid />
          <span className=" text-textColor font-semibold">Back</span>
        </div>
        <div>
          <Button
            type={"submit"}
            label={"Submit"}
            className={
              " bg-primary font-bold rounded-3xl text-white w-44 py-1.5"
            }
          />
        </div>
      </div>
    </form>
  );
};

export default ContactDetails;
