import React, { useState } from "react";
import { FaAngleRight, FaLocationDot } from "react-icons/fa6";
import Input from "../../components/Input";
import Option from "../../components/Option";
import { FaCalendarAlt } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import {
  LiaLongArrowAltLeftSolid,
  LiaLongArrowAltRightSolid,
} from "react-icons/lia";
import Button from "../../components/Button";
import SearchLocationInput from "../../components/SearchLocationInput";
import MapComponent from "../../components/Map";
import { Base_url } from "../../utils/Base_url";
import axios from "axios";
import { toast } from "react-toastify";
import Header from "../../components/header";
import Footer from "../../components/footer";
const CarDetails = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  console.log(selectedImage);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file && file.type.startsWith("image/")) {
      const reader = new FileReader();
      reader.onload = () => {
        setSelectedImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const [selectedLocation, setSelectedLocation] = useState({
    lat: 31.5204,
    lng: 74.3587,
  });
const [report,setReport] = useState("")
  const [state, setState] = useState({
    title: "",
    type_of_ad: "",
    make: "",
    model: "",
    year: "",
    vehicle_condition: "",
    mileage: "",
    vehicle_category: "",
    specifications: "",
    cylinder: "",
    engine_size: "",
    wheel_drive: "",
    gear_box: "",
    exterior_colour: "",
    interior_colour: "",
    fuel_type: "",
    registration_date: "",
    warranty: "",
    warranty_date: "",
    inspected: "",
    price_QR: "",
    price_range: "",
    negotiable: "",
    description: "",
    vehicle_location: "Car Location",
    longitude: selectedLocation.lng,
    latitude: selectedLocation.lat,
    inspection_report:report,
    engine_oil: "",
    engine_oil_filter: "",
    gearbox_oil: "",
    ac_filter: "",
    air_filter: "",
    fuel_filter: "",
    spark_plugs: "",
    front_brake_pads: "",
    rear_brake_pads: "",
    front_brake_discs: "",
    rear_brake_discs: "",
    battery: "",
    front_tire_size: "",
    front_tire_price: "",
    rear_tire_size: "",
    rear_tire_price: "",
  });

  const handleInputs = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  const navigate = useNavigate();

  const handlerSubmit = async(e) => {
    e.preventDefault();

    if(!selectedImage){

      toast.error('Please choose your inspection report!')

    }else{

      let profilephoto = " ";

      try {
        let param = new FormData();
        param.append("avatars",selectedImage);

        profilephoto = await axios.post(`${Base_url}/uploadImage`, param);
  
        console.log(profilephoto, "=====profile photo===");
        setReport(profilephoto.data.url)
        
        if(profilephoto.status===200){
  
          navigate(`/car_photos`)
          
        }
      } catch (error) {
        console.log(error);
      }
  

    }

   
  };

  return (
    <div>
      <Header/>
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
            <div className=" w-8 h-8 bg-primary items-center  rounded-full flex justify-center">
              <p className=" text-white">2</p>
            </div>
            <div>
              <span className=" text-primary font-bold">Car Details</span>
            </div>
          </li>
          <li>
            <FaAngleRight className=" text-gray-500" />
          </li>
          <li className=" flex items-center gap-2">
            <Link
              to={"/car_photos"}
              className=" w-8 h-8 bg-white border-textColor border items-center  rounded-full flex justify-center"
            >
              <p className=" text-textColor">3</p>
            </Link>
            <div>
              <span className=" text-textColor font-semibold">Photo</span>
            </div>
          </li>
          <li>
            <FaAngleRight className=" text-gray-500" />
          </li>
          <li className=" flex items-center gap-2">
            <div className=" w-8 h-8 bg-white border-textColor border items-center  rounded-full flex justify-center">
              <p className=" text-textColor">3</p>
            </div>
            <div>
              <span className=" text-textColor font-semibold">
                Contact Details
              </span>
            </div>
          </li>
        </ul>
      </div>

      <form
        onSubmit={handlerSubmit}
        className=" shadow-md rounded-xl mt-8 py-5 px-12 mx-auto  w-[80%]"
      >
        <div className="">
          <h2 className=" h4  text-center">Car Details</h2>
        </div>

        <div className=" flex flex-col gap-6">
          <div>
            <Input
              type="text"
              onChange={handleInputs}
              value={state.title}
              name={"title"}
              className={"  border w-full p-2  bg-[#FEFBFB]"}
              placeholder={"Enter Title"}
              label={"Title of Listing"}
              required="required"
            />
          </div>
          <div>
            <label className="block text-sm text-left  font-medium  text-textColor">
              Type Of Ad
            </label>
            <select
              onChange={handleInputs}
              value={state.type_of_ad}
              name={"type_of_ad"}
              className="mt-1 bg-[#FEFBFB] text-gray-600 p-2 border rounded-md w-full"
              required
            >
              <option value={""} selected>
                Select Type
              </option>

              <option>Featured</option>
              <option>Standard</option>
            </select>
          </div>
          <div>
            <label className="block text-sm text-left  font-medium  text-textColor">
              Make
            </label>
            <select
              onChange={handleInputs}
              value={state.make}
              name={"make"}
              className="mt-1 bg-[#FEFBFB] text-gray-600 p-2 border rounded-md w-full"
              required
            >
              <option value={""} selected>
                Select Make
              </option>

              <option>Honda</option>
              <option>Toyota</option>
              <option>Bentley</option>
            </select>
          </div>
          <div>
            <label className="block text-sm text-left  font-medium  text-textColor">
              Model
            </label>
            <select
              onChange={handleInputs}
              value={state.model}
              name={"model"}
              className="mt-1 bg-[#FEFBFB] text-gray-600 p-2 border rounded-md w-full"
              required
            >
              <option value={""} selected>
                Select Model
              </option>

              <option>Honda</option>
              <option>Toyota</option>
              <option>Bentley</option>
            </select>
          </div>
          <div>
            <label className="block text-sm text-left  font-medium  text-textColor">
              Year
            </label>
            <select
              onChange={handleInputs}
              value={state.year}
              name={"year"}
              className="mt-1 bg-[#FEFBFB] text-gray-600 p-2 border rounded-md w-full"
              required
            >
              <option value={""} selected>
                Select Year
              </option>

              <option>2019</option>
              <option>2021</option>
              <option>2022</option>
              <option>2023</option>
              <option>2024</option>
            </select>
          </div>
          <div>
            <label className="block text-sm text-left  font-medium  text-textColor">
              Vehicle Condition/Status
            </label>
            <select
              onChange={handleInputs}
              value={state.vehicle_condition}
              name={"vehicle_condition"}
              className="mt-1 bg-[#FEFBFB] text-gray-600 p-2 border rounded-md w-full"
              required
            >
              <option value={""} selected>
                Select Vehicle Condition
              </option>
              <option>New</option>
              <option>Second Hand</option>
            </select>
          </div>
          <div>
            <Input
              type="number"
              onChange={handleInputs}
              value={state.mileage}
              name={"mileage"}
              className={"  border w-full  p-2 bg-[#FEFBFB]"}
              placeholder={"Enter Mileage"}
              label={"Mileage"}
              required={"required"}
            />
          </div>
          <div>
            <label className="block text-sm text-left  font-medium  text-textColor">
              Vehicle Category
            </label>
            <select
              onChange={handleInputs}
              value={state.vehicle_category}
              name={"vehicle_category"}
              className="mt-1 bg-[#FEFBFB] text-gray-600 p-2 border rounded-md w-full"
              required="required"
            >
              <option>Select Vehicle Category</option>

              <option>2019</option>
            </select>
          </div>
          <div>
            <label className="block text-sm text-left  font-medium  text-textColor">
              Specifications
            </label>
            <select
              onChange={handleInputs}
              value={state.specifications}
              name={"specifications"}
              className="mt-1 bg-[#FEFBFB] text-gray-600 p-2 border rounded-md w-full"
              required="required"
            >
              <option>Select Specifications</option>

              <option>2019</option>
            </select>
          </div>
          <div>
            <label className="block text-sm text-left  font-medium  text-textColor">
              Cylinder
            </label>
            <select
              onChange={handleInputs}
              value={state.cylinder}
              name={"cylinder"}
              className="mt-1 bg-[#FEFBFB] text-gray-600 p-2 border rounded-md w-full"
              required="required"
            >
              <option>Select Cylinder</option>

              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
              <option>6</option>
              <option>7</option>
              <option>8</option>
              <option>9</option>
              <option>10</option>
            </select>
          </div>
          <div>
            <label className="block text-sm text-left  font-medium  text-textColor">
              Engine Size
            </label>
            <select
              onChange={handleInputs}
              value={state.engine_size}
              name={"engine_size"}
              className="mt-1 bg-[#FEFBFB] text-gray-600 p-2 border rounded-md w-full"
              required="required"
            >
              <option>Select Engine Size</option>

              <option>2019</option>
            </select>
          </div>
          <div>
            <label className="block text-sm text-left  font-medium  text-textColor">
              Wheel Drive
            </label>
            <select
              onChange={handleInputs}
              value={state.wheel_drive}
              name={"wheel_drive"}
              className="mt-1 bg-[#FEFBFB] text-gray-600 p-2 border rounded-md w-full"
              required="required"
            >
              <option>Select Wheel Drive</option>

              <option>2019</option>
            </select>
          </div>
          <div>
            <label className="block text-sm text-left  font-medium  text-textColor">
              Gear Box
            </label>
            <select
              onChange={handleInputs}
              value={state.gear_box}
              name={"gear_box"}
              className="mt-1 bg-[#FEFBFB] text-gray-600 p-2 border rounded-md w-full"
              required="required"
            >
              <option>Select Gear Box</option>

              <option>2019</option>
            </select>
          </div>
          <div>
            <label className="block text-sm text-left  font-medium  text-textColor">
              Exterior Colour
            </label>
            <select
              onChange={handleInputs}
              value={state.exterior_colour}
              name={"exterior_colour"}
              className="mt-1 bg-[#FEFBFB] text-gray-600 p-2 border rounded-md w-full"
              required="required"
            >
              <option>SelectExterior Colour</option>

              <option>2019</option>
            </select>
          </div>
          <div>
            <label className="block text-sm text-left  font-medium  text-textColor">
              Interior Colour
            </label>
            <select
              onChange={handleInputs}
              value={state.interior_colour}
              name={"interior_colour"}
              className="mt-1 bg-[#FEFBFB] text-gray-600 p-2 border rounded-md w-full"
              required="required"
            >
              <option>Select Interior Colour</option>

              <option>2019</option>
            </select>
          </div>
          <div>
            <label className="block text-sm text-left  font-medium  text-textColor">
              Fuel Type
            </label>
            <select
              onChange={handleInputs}
              value={state.fuel_type}
              name={"fuel_type"}
              className="mt-1 bg-[#FEFBFB] text-gray-600 p-2 border rounded-md w-full"
              required="required"
            >
              <option>Select Fuel Type</option>

              <option>2019</option>
            </select>
          </div>
          <div>
            <Input
              type={"date"}
              onChange={handleInputs}
              value={state.registration_date}
              name={"registration_date"}
              className={"  border w-full  p-2 bg-[#FEFBFB]"}
              placeholder={"Enter Registration Date"}
              label={"Registration Date"}
              // Icon={<FaCalendarAlt className=" text-textColor" size={20} />}
              required="required"
            />
          </div>
          <div>
            <label className="block text-sm text-left  font-medium  text-textColor">
              Warranty
            </label>
            <select
              type={"text"}
              onChange={handleInputs}
              value={state.warranty}
              name={"warranty"}
              className="mt-1 bg-[#FEFBFB] text-gray-600 p-2 border rounded-md w-full"
              required="required"
            >
              <option>Select Warranty</option>

              <option value={true}>YES</option>
              <option value={false}>NO</option>
            </select>
          </div>
          <div>
            <Input
              type={"date"}
              onChange={handleInputs}
              value={state.warranty_date}
              name={"warranty_date"}
              className={"  border w-full  p-2 bg-[#FEFBFB]"}
              placeholder={"Enter Warranty Date"}
              label={"Warranty Date"}
              required="required"
              // Icon={<FaCalendarAlt className=" text-textColor" size={20} />}
            />
          </div>
          <div>
            <label className="block text-sm text-left  font-medium  text-textColor">
              Inspected
            </label>
            <select
              onChange={handleInputs}
              value={state.inspected}
              name={"inspected"}
              className="mt-1 bg-[#FEFBFB] text-gray-600 p-2 border rounded-md w-full"
              required="required"
            >
              <option>Select Inspected</option>
              <option value={true}>YES</option>
              <option value={false}>NO</option>
            </select>
          </div>
          <div>
            <p className=" text-textColor font-semibold">Inspection Report</p>
            {selectedImage ? (
              <label
                htmlFor="fileInput"
                className=" rounded-md  border overflow-hidden flex w-40  h-40 "
              >
                <img
                  src={selectedImage}
                  className="  object-cover w-full h-full"
                  alt=""
                />
                <input
                  accept="image/*"
                  onChange={handleFileChange}
                  name="images"
                  type="file"
                  id="fileInput"
                  className="hidden"
                />
              </label>
            ) : (
              <label
                htmlFor="fileInput"
                className="bg-[#FEFBFB] border rounded-md p-1 w-40 flex  justify-center items-center"
              >
                <div>
                  <img
                    src={require("../../assets/images/upload.png")}
                    className=" mx-auto w-20"
                    alt=""
                  />
                  <input
                    accept="image/*"
                    onChange={handleFileChange}
                    name="images"
                    type="file"
                    id="fileInput"
                    className="hidden"
                  />
                  <span className=" text-secondary font-semibold ">
                    Inspection report
                  </span>
                </div>
              </label>
            )}

            <p className=" pt-4 text-textColor text-sm">
              Maximum File Size 1Mb
            </p>
          </div>
          <div>
            <label className="block text-sm text-left  font-medium  text-textColor">
              Price (QR)
            </label>
            <select
              onChange={handleInputs}
              value={state.price_QR}
              name={"price_QR"}
              className="mt-1 bg-[#FEFBFB] text-gray-600 p-2 border rounded-md w-full"
              required="required"
            >
              <option>Select Price (QR)</option>

              <option>2019</option>
            </select>
          </div>
          <div>
            <label className="block text-sm text-left  font-medium  text-textColor">
              Price Range
            </label>
            <select
              onChange={handleInputs}
              value={state.price_range}
              name={"price_range"}
              className="mt-1 bg-[#FEFBFB] text-gray-600 p-2 border rounded-md w-full"
              required="required"
            >
              <option>Select Price Range</option>

              <option>2019</option>
            </select>
          </div>
          <div>
            <label className="block text-sm text-left  font-medium  text-textColor">
              Negotiable
            </label>
            <select
              onChange={handleInputs}
              value={state.negotiable}
              name={"negotiable"}
              className="mt-1 bg-[#FEFBFB] text-gray-600 p-2 border rounded-md w-full"
              required="required"
            >
              <option>Select Negotiable</option>

              <option value={true}>YES</option>
              <option value={false}>NO</option>
            </select>
          </div>

          <div>
            <Input
              type={"text"}
              onChange={handleInputs}
              value={state.description}
              name={"description"}
              className={"  border w-full h-24   p-2 bg-[#FEFBFB]"}
              placeholder={"Enter Description"}
              label={"Description"}
              required="required"
            />
          </div>
          <div>
            <SearchLocationInput setSelectedLocation={setSelectedLocation} />
            <MapComponent selectedLocation={selectedLocation} />
          </div>
        </div>

        <h2 className=" h4  text-center mt-10 pb-7"> Spare Parts</h2>
        <div className=" flex flex-wrap gap-6">
          <div className=" w-[48%]">
            <Input
              type={"text"}
              onChange={handleInputs}
              value={state.engine_oil}
              name={"engine_oil"}
              className={"  border w-full p-2  bg-[#FEFBFB]"}
              placeholder={"Price"}
              label={"Engine Oil"}
              required="required"
            />
          </div>
          <div className="  w-[48%]">
            <Input
              type={"text"}
              onChange={handleInputs}
              value={state.engine_oil_filter}
              name={"engine_oil_filter"}
              className={"  border w-full p-2  bg-[#FEFBFB]"}
              placeholder={"Price"}
              label={"Engine Oil Filter"}
              required="required"
            />
          </div>
          <div className="  w-[48%]">
            <Input
              type={"text"}
              onChange={handleInputs}
              value={state.gearbox_oil}
              name={"gearbox_oil"}
              className={"  border w-full p-2  bg-[#FEFBFB]"}
              placeholder={"Price"}
              label={"Gearbox Oil"}
              required="required"
            />
          </div>
          <div className="  w-[48%]">
            <Input
              type={"text"}
              onChange={handleInputs}
              value={state.ac_filter}
              name={"ac_filter"}
              className={"  border w-full p-2  bg-[#FEFBFB]"}
              placeholder={"Price"}
              label={"A.C Filter"}
              required="required"
            />
          </div>
          <div className="  w-[48%]">
            <Input
              type={"text"}
              onChange={handleInputs}
              value={state.air_filter}
              name={"air_filter"}
              className={"  border w-full p-2  bg-[#FEFBFB]"}
              placeholder={"Price"}
              label={"Air Filter"}
              required="required"
            />
          </div>
          <div className="  w-[48%]">
            <Input
              type={"text"}
              onChange={handleInputs}
              value={state.fuel_filter}
              name={"fuel_filter"}
              className={"  border w-full p-2  bg-[#FEFBFB]"}
              placeholder={"Price"}
              label={"Fuel Filter"}
              required="required"
            />
          </div>
          <div className="  w-[48%]">
            <Input
              type={"text"}
              onChange={handleInputs}
              value={state.spark_plugs}
              name={"spark_plugs"}
              className={"  border w-full p-2  bg-[#FEFBFB]"}
              placeholder={"Price"}
              label={"Spark Plugs"}
              required="required"
            />
          </div>
          <div className="  w-[48%]">
            <Input
              type={"text"}
              onChange={handleInputs}
              value={state.front_brake_pads}
              name={"front_brake_pads"}
              className={"  border w-full p-2  bg-[#FEFBFB]"}
              placeholder={"Price"}
              label={"Front Brake Pads"}
              required="required"
            />
          </div>
          <div className="  w-[48%]">
            <Input
              type={"text"}
              onChange={handleInputs}
              value={state.rear_brake_pads}
              name={"rear_brake_pads"}
              className={"  border w-full p-2  bg-[#FEFBFB]"}
              placeholder={"Price"}
              label={"Rear Brake Pads"}
              required="required"
            />
          </div>
          <div className="  w-[48%]">
            <Input
              type={"text"}
              onChange={handleInputs}
              value={state.front_brake_discs}
              name={"front_brake_discs"}
              className={"  border w-full p-2  bg-[#FEFBFB]"}
              placeholder={"Price"}
              label={"Front Brake Discs"}
              required="required"
            />
          </div>
          <div className="  w-[48%]">
            <Input
              type={"text"}
              onChange={handleInputs}
              value={state.rear_brake_discs}
              name={"rear_brake_discs"}
              className={"  border w-full p-2  bg-[#FEFBFB]"}
              placeholder={"Price"}
              label={"Rear Brake Discs"}
              required="required"
            />
          </div>
          <div className="  w-[48%]">
            <Input
              type={"text"}
              onChange={handleInputs}
              value={state.battery}
              name={"battery"}
              className={"  border w-full p-2  bg-[#FEFBFB]"}
              placeholder={"Price"}
              label={"Battery"}
              required="required"
            />
          </div>
        </div>

        <h2 className=" h4  text-center mt-10 pb-7"> Tyres</h2>
        <div className=" flex flex-wrap gap-6">
          <div className=" w-[48%]">
            <Input
              type={"text"}
              onChange={handleInputs}
              value={state.front_tire_size}
              name={"front_tire_size"}
              className={"  border w-full p-2  bg-[#FEFBFB]"}
              placeholder={"Price"}
              label={"Front Tire Size"}
              required="required"
            />
          </div>
          <div className="  w-[48%]">
            <Input
              type={"number"}
              onChange={handleInputs}
              value={state.front_tire_price}
              name={"front_tire_price"}
              className={"  border w-full p-2  bg-[#FEFBFB]"}
              placeholder={"Price"}
              label={"Front Tire Price"}
              required="required"
            />
          </div>
          <div className="  w-[48%]">
            <Input
              type={"text"}
              onChange={handleInputs}
              value={state.rear_tire_size}
              name={"rear_tire_size"}
              className={"  border w-full p-2  bg-[#FEFBFB]"}
              placeholder={"Price"}
              label={"Rear Tire Size"}
              required="required"
            />
          </div>
          <div className="  w-[48%]">
            <Input
              type={"number"}
              onChange={handleInputs}
              value={state.rear_tire_price}
              name={"rear_tire_price"}
              className={"  border w-full p-2  bg-[#FEFBFB]"}
              placeholder={"Price"}
              label={"Rear Tire Price"}
              required="required"
            />
          </div>
        </div>
        <div className=" container flex justify-between items-center mx-auto mt-10 mb-20">
          <div className="  flex items-center gap-3">
            <LiaLongArrowAltLeftSolid />
            <span className=" text-textColor font-semibold">Back</span>
          </div>

          <Button
            type={"submit"}
            label={"Next"}
            rIcons={<LiaLongArrowAltRightSolid />}
            className={" bg-primary rounded-3xl text-white w-44 py-1.5"}
          />
        </div>
      </form>
      <Footer/>
    </div>
  );
};

export default CarDetails;
