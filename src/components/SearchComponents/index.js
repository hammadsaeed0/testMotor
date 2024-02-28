import React, { useEffect, useState } from "react";
import Button from "../Button";
import axios from "axios";
import { Base_url } from "../../utils/Base_url";
import { useNavigate } from "react-router-dom";
const SearchComponents = () => {
  const [filter, setFilter] = useState("all");

  const [state, setState] = useState({
    make: "",
    model: "",
    yearFrom: "",
    yearTo: "",
    vehicleCondition: "",
    priceFrom: "",
    priceTo: "",
    KmsFrom: "",
    KmsTo: "",
    cylinder: "",
    engine_size: "",
    Transmission: "",
    warranty: "",
    exterior_colour: "",
    interior_colour: "",
    specifications: "",
    Owner: "",
    type_of_ad: "",
  });

  const handleInputs = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  const navigate = useNavigate();
  const [loading, setLoader] = useState(false);

  const [filteredResults, setFilteredResults] = useState([]);
  console.log(filteredResults);
  const AllFilterFun = () => {
    setLoader(true)
    const url = `${Base_url}/users/advance-searching`;
    const params = {
      make: state.make,
      model: state.model,
      yearFrom: state.yearFrom,
      yearTo: state.yearTo,
      vehicleCondition: state.vehicleCondition,
      priceFrom: state.priceFrom,
      priceTo: state.priceTo,
      KmsFrom: state.KmsFrom,
      KmsTo: state.KmsTo,
      cylinder: state.cylinder,
      engine_size: state.engine_size,
      Transmission: state.Transmission,
      warranty: state.warranty,
      exterior_colour: state.exterior_colour,
      interior_colour: state.interior_colour,
      specifications: state.specifications,
      Owner: state.Owner,
      type_of_ad: state.type_of_ad,
    };

    axios
      .get(url, { params })
      .then((response) => {
        console.log("Response data:", response.data);
        setFilteredResults(response.data);

        

        navigate("/new_lists", { state: { filter: response.data } });
        setLoader(false)
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };

  return (
    <div>
      <div className="bg-[#ECECEC] py-9 rounded-2xl  border border-primary">
        <div className=" w-[85%] mx-auto text-center">
          <div className="scroll-container mt-3  flex gap-2 md:justify-center justify-start items-center productOverflow  overflow-x-auto whitespace-nowrap">
            <Button
              label={"All cars"}
              onClick={() => setFilter("all")}
              className={`  ${
                filter === "all"
                  ? " border-primary text-primary bg-white border-b-2"
                  : "bg-white text-secondary"
              } font-semibold rounded-md  py-2.5 px-12`}
            />
            <Button
              label={"New cars"}
              onClick={() => setFilter("new")}
              className={`  ${
                filter === "new"
                  ? " border-primary text-primary bg-white border-b-2"
                  : "bg-white text-secondary"
              } font-semibold rounded-md  py-2.5 px-12`}
            />
            <Button
              label={"Scraped cars"}
              onClick={() => setFilter("scraped")}
              className={`  ${
                filter === "scraped"
                  ? " border-primary text-primary bg-white border-b-2"
                  : "bg-white text-secondary"
              } font-semibold rounded-md  py-2.5 px-12`}
            />
            <Button
              label={"Find Garage"}
              onClick={() => setFilter("garage")}
              className={`  ${
                filter === "garage"
                  ? " border-primary text-primary bg-white border-b-2"
                  : "bg-white text-secondary"
              } font-semibold rounded-md  py-2.5 px-12`}
            />
          </div>
          {filter === "all" ? (
            <>
              <div className="grid xl:grid-cols-5  w-full lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 mt-9 gap-5">
                <div className="  md:w-48 w-full">
                  <label className="block text-sm text-left  font-semibold  text-textColor">
                    Make
                  </label>
                  <select
                    onChange={handleInputs}
                    name="make"
                    value={state.make}
                    className="mt-1 bg-[#FEFBFB] text-gray-600 p-2 border rounded-lg w-full border-[#E9DBDB]"
                  >
                    <option selected>Select Make</option>
                    <option value={"honda"}>Honda</option>
                    <option value={"toyota"}>Toyota</option>
                    <option value={"honda"}>Volkswagen</option>
                    <option value={"honda"}>BMW</option>
                  </select>
                </div>
                <div className="  md:w-48 w-full">
                  <label className="block text-sm text-left  font-semibold  text-textColor">
                    Model
                  </label>
                  <select
                    name="model"
                    onChange={handleInputs}
                    value={state.model}
                    className="mt-1 bg-[#FEFBFB] text-gray-600 p-2 border rounded-lg w-full border-[#E9DBDB]"
                  >
                    <option>Select Model</option>
                    <option value={"Jeep Gladiator"}>Jeep Gladiator</option>
                    <option value={"Toyota Camry"}>Toyota Camry</option>
                    <option value={"Chevorlet Corvette"}>
                      Chevorlet Corvette
                    </option>
                    <option value={"Chevrolet"}>Chevrolet</option>
                    <option value={"Dodge"}>Dodge</option>
                    <option value={"Ford"}>Ford</option>
                  </select>
                </div>
                <div className="  md:w-48 w-full">
                  <label className="block text-sm text-left  font-semibold  text-textColor">
                    Year Form
                  </label>
                  <select
                    name="yearFrom"
                    onChange={handleInputs}
                    value={state.yearFrom}
                    className="mt-1 bg-[#FEFBFB] text-gray-600 p-2 border rounded-lg w-full border-[#E9DBDB]"
                  >
                    <option>Select Year</option>
                    <option value={"2019"}>2019</option>
                    <option value={"2020"}>2020</option>
                    <option value={"2021"}>2021</option>
                    <option value={"2022"}>2022</option>
                    <option value={"2023"}>2023</option>
                    <option value={"2024"}>2024</option>
                  </select>
                </div>

                <div className="  md:w-48 w-full">
                  <label className="block text-sm text-left  font-semibold  text-textColor">
                    Year To
                  </label>
                  <select
                    name="yearTo"
                    onChange={handleInputs}
                    value={state.yearTo}
                    className="mt-1 bg-[#FEFBFB] text-gray-600 p-2 border rounded-lg w-full border-[#E9DBDB]"
                  >
                    <option>Select Year</option>
                    <option value={"2019"}>2019</option>
                    <option value={"2020"}>2020</option>
                    <option value={"2021"}>2021</option>
                    <option value={"2022"}>2022</option>
                    <option value={"2023"}>2023</option>
                    <option value={"2024"}>2024</option>
                  </select>
                </div>
                <div className=" md:w-48 w-full">
                  <label className="block text-sm text-left  font-semibold  text-textColor">
                    Vehicle Condition
                  </label>
                  <select
                    name="vehicleCondition"
                    onChange={handleInputs}
                    value={state.vehicleCondition}
                    className="mt-1 bg-[#FEFBFB] text-gray-600 p-2 border rounded-lg w-full border-[#E9DBDB]"
                  >
                    <option>Select Condition</option>
                    <option value={"New"}>New</option>
                    <option value={"Old"}>Old</option>
                  </select>
                </div>
                <div className="  md:w-48 w-full">
                  <label className="block text-sm text-left  font-semibold  text-textColor">
                    Price Form
                  </label>
                  <select
                    name="priceFrom"
                    onChange={handleInputs}
                    value={state.priceFrom}
                    className="mt-1 bg-[#FEFBFB] text-gray-600 p-2 border rounded-lg w-full border-[#E9DBDB]"
                  >
                    <option>Price Form</option>
                    <option value={"200"}>200</option>
                    <option value={"12000"}>12000</option>
                    <option value={"30000"}>30000</option>
                    <option value={"3000"}>3000</option>
                    <option value={"2023"}>2023</option>
                    <option value={"2024"}>2024</option>
                  </select>
                </div>
                <div className="  md:w-48 w-full">
                  <label className="block text-sm text-left  font-semibold  text-textColor">
                    Price To
                  </label>
                  <select
                    name="priceTo"
                    onChange={handleInputs}
                    value={state.priceTo}
                    className="mt-1 bg-[#FEFBFB] text-gray-600 p-2 border rounded-lg w-full border-[#E9DBDB]"
                  >
                    <option>Price To</option>
                    <option value={"honda"}>200</option>
                    <option value={"honda"}>12000</option>
                    <option value={"honda"}>30000</option>
                    <option value={"honda"}>3000</option>
                    <option value={"honda"}>2023</option>
                    <option value={"honda"}>2024</option>
                  </select>
                </div>
                <div className="  md:w-48 w-full">
                  <label className="block text-sm text-left  font-semibold  text-textColor">
                    Kms From
                  </label>
                  <select
                    name="KmsFrom"
                    onChange={handleInputs}
                    value={state.KmsFrom}
                    className="mt-1 bg-[#FEFBFB] text-gray-600 p-2 border rounded-lg w-full border-[#E9DBDB]"
                  >
                    <option>Select Kms</option>
                    <option value={"honda"}>200</option>
                    <option value={"honda"}>12000</option>
                    <option value={"honda"}>30000</option>
                    <option value={"honda"}>3000</option>
                    <option value={"honda"}>2023</option>
                    <option value={"honda"}>2024</option>
                  </select>
                </div>
                <div className="  md:w-48 w-full">
                  <label className="block text-sm text-left  font-semibold  text-textColor">
                    Kms To
                  </label>
                  <select
                    name="KmsTo"
                    onChange={handleInputs}
                    value={state.KmsTo}
                    className="mt-1 bg-[#FEFBFB] text-gray-600 p-2 border rounded-lg w-full border-[#E9DBDB]"
                  >
                    <option>Select Kms</option>
                    <option value={"honda"}>200</option>
                    <option value={"honda"}>12000</option>
                    <option value={"honda"}>30000</option>
                    <option value={"honda"}>3000</option>
                    <option value={"honda"}>2023</option>
                    <option value={"honda"}>2024</option>
                  </select>
                </div>
                <div className="  md:w-48 w-full">
                  <label className="block text-sm text-left  font-semibold  text-textColor">
                    Seller Type
                  </label>
                  <select className="mt-1 bg-[#FEFBFB] text-gray-600 p-2 border rounded-lg w-full border-[#E9DBDB]">
                    <option>Select Seller</option>
                    <option value={"honda"}>200</option>
                    <option value={"honda"}>12000</option>
                    <option value={"honda"}>30000</option>
                    <option value={"honda"}>3000</option>
                    <option value={"honda"}>2023</option>
                    <option value={"honda"}>2024</option>
                  </select>
                </div>
                <div className="  md:w-48 w-full">
                  <label className="block text-sm text-left  font-semibold  text-textColor">
                    Cylinder
                  </label>
                  <select  name="cylinder"
                    onChange={handleInputs}
                    value={state.cylinder} className="mt-1 bg-[#FEFBFB] text-gray-600 p-2 border rounded-lg w-full border-[#E9DBDB]">
                    <option>Select Cylinder</option>
                    <option value={"honda"}>200</option>
                    <option value={"honda"}>12000</option>
                    <option value={"honda"}>30000</option>
                    <option value={"honda"}>3000</option>
                    <option value={"honda"}>2023</option>
                    <option value={"honda"}>2024</option>
                  </select>
                </div>
                <div className="  md:w-48 w-full">
                  <label className="block text-sm text-left  font-semibold  text-textColor">
                    Engine Size
                  </label>
                  <select  name="engine_size"
                    onChange={handleInputs}
                    value={state.engine_size} className="mt-1 bg-[#FEFBFB] text-gray-600 p-2 border rounded-lg w-full border-[#E9DBDB]">
                    <option>Select Engine Size</option>
                    <option value={"honda"}>200</option>
                    <option value={"honda"}>12000</option>
                    <option value={"honda"}>30000</option>
                    <option value={"honda"}>3000</option>
                    <option value={"honda"}>2023</option>
                    <option value={"honda"}>2024</option>
                  </select>
                </div>
                <div className="  md:w-48 w-full">
                  <label className="block text-sm text-left  font-semibold  text-textColor">
                    Transmission
                  </label>
                  <select  name="Transmission"
                    onChange={handleInputs}
                    value={state.Transmission} className="mt-1 bg-[#FEFBFB] text-gray-600 p-2 border rounded-lg w-full border-[#E9DBDB]">
                    <option>Select Transmission</option>
                    <option value={"honda"}>200</option>
                    <option value={"honda"}>12000</option>
                    <option value={"honda"}>30000</option>
                    <option value={"honda"}>3000</option>
                    <option value={"honda"}>2023</option>
                    <option value={"honda"}>2024</option>
                  </select>
                </div>
                <div className="  md:w-48 w-full">
                  <label className="block text-sm text-left  font-semibold  text-textColor">
                    Warranty
                  </label>
                  <select name="warranty"
                    onChange={handleInputs}
                    value={state.warranty} className="mt-1 bg-[#FEFBFB] text-gray-600 p-2 border rounded-lg w-full border-[#E9DBDB]">
                    <option>Select</option>
                    <option value={"honda"}>200</option>
                    <option value={"honda"}>12000</option>
                    <option value={"honda"}>30000</option>
                    <option value={"honda"}>3000</option>
                    <option value={"honda"}>2023</option>
                    <option value={"honda"}>2024</option>
                  </select>
                </div>
                <div className="  md:w-48 w-full">
                  <label className="block text-sm text-left  font-semibold  text-textColor">
                    Exterior Colour
                  </label>
                  <select name="exterior_colour"
                    onChange={handleInputs}
                    value={state.exterior_colour} className="mt-1 bg-[#FEFBFB] text-gray-600 p-2 border rounded-lg w-full border-[#E9DBDB]">
                    <option>Select </option>
                    <option value={"honda"}>200</option>
                    <option value={"honda"}>12000</option>
                    <option value={"honda"}>30000</option>
                    <option value={"honda"}>3000</option>
                    <option value={"honda"}>2023</option>
                    <option value={"honda"}>2024</option>
                  </select>
                </div>
                <div className="  md:w-48 w-full">
                  <label className="block text-sm text-left  font-semibold  text-textColor">
                    Interior Colour
                  </label>
                  <select name="interior_colour"
                    onChange={handleInputs}
                    value={state.interior_colour} className="mt-1 bg-[#FEFBFB] text-gray-600 p-2 border rounded-lg w-full border-[#E9DBDB]">
                    <option>Select </option>
                    <option value={"honda"}>200</option>
                    <option value={"honda"}>12000</option>
                    <option value={"honda"}>30000</option>
                    <option value={"honda"}>3000</option>
                    <option value={"honda"}>2023</option>
                    <option value={"honda"}>2024</option>
                  </select>
                </div>
                <div className="  md:w-48 w-full">
                  <label className="block text-sm text-left  font-semibold  text-textColor">
                    Specifications
                  </label>
                  <select name="specifications"
                    onChange={handleInputs}
                    value={state.specifications} className="mt-1 bg-[#FEFBFB] text-gray-600 p-2 border rounded-lg w-full border-[#E9DBDB]">
                    <option>Select Specifications </option>
                    <option value={"honda"}>200</option>
                    <option value={"honda"}>12000</option>
                    <option value={"honda"}>30000</option>
                    <option value={"honda"}>3000</option>
                    <option value={"honda"}>2023</option>
                    <option value={"honda"}>2024</option>
                  </select>
                </div>
            
                <div className="  md:w-48 w-full">
                  <label className="block text-sm text-left  font-semibold  text-textColor">
                    Type of listing
                  </label>
                  <select name="specifications"
                    onChange={handleInputs}
                    value={state.type_of_ad} className="mt-1 bg-[#FEFBFB] text-gray-600 p-2 border rounded-lg w-full border-[#E9DBDB]">
                    <option>Select </option>
                    <option value={"honda"}>200</option>
                    <option value={"honda"}>12000</option>
                    <option value={"honda"}>30000</option>
                    <option value={"honda"}>3000</option>
                    <option value={"honda"}>2023</option>
                    <option value={"honda"}>2024</option>
                  </select>
                </div>
              </div>

              <div className=" pt-12">
                {loading===true?(
                   <button
                   disabled
                   type="button"
                   class="text-white w-48 bg-primary hover:bg-primary focus:ring-4 focus:ring-blue-300 font-medium rounded-3xl text-sm px-5 py-2.5 text-center me-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 inline-flex items-center"
                 >
                   <svg
                     aria-hidden="true"
                     role="status"
                     class="inline w-4 h-4 me-3 text-white animate-spin"
                     viewBox="0 0 100 101"
                     fill="none"
                     xmlns="http://www.w3.org/2000/svg"
                   >
                     <path
                       d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                       fill="#E5E7EB"
                     />
                     <path
                       d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                       fill="currentColor"
                     />
                   </svg>
                   Loading...
                 </button>
                ):(
<Button
                  onClick={AllFilterFun}
                  label={"Search"}
                  className={
                    " bg-primary py-2 w-48 mx-auto text-white rounded-3xl"
                  }
                />
                )}
                

                <div className=" flex gap-2 justify-center pt-2">
                  <p className="text-secondary  border-b  border-secondary  font-semibold">
                    Advance search
                  </p>
                  <p className=" text-secondary  border-b  border-secondary  font-semibold">
                    Clear search
                  </p>
                </div>
              </div>
            </>
          ) : filter === "scraped" ? (
            <>
              <div className=" md:flex  block mt-6 justify-center w-full gap-3">
                <div className="  md:w-60 w-full">
                  <label className="block text-sm text-left  font-semibold  text-textColor">
                    Make
                  </label>
                  <select className="mt-1 bg-[#FEFBFB] text-gray-600 p-2 border rounded-lg w-full border-[#E9DBDB]">
                    <option>Select Make</option>
                    <option value={"honda"}>Honda</option>
                    <option value={"honda"}>Toyota</option>
                    <option value={"honda"}>Volkswagen</option>
                    <option value={"honda"}>BMW</option>
                  </select>
                </div>
                <div className="  md:w-60 w-full">
                  <label className="block text-sm text-left  font-semibold  text-textColor">
                    Model
                  </label>
                  <select className="mt-1 bg-[#FEFBFB] text-gray-600 p-2 border rounded-lg w-full border-[#E9DBDB]">
                    <option>Select Model</option>
                    <option value={"honda"}>Jeep Gladiator</option>
                    <option value={"honda"}>Toyota Camry</option>
                    <option value={"honda"}>Chevorlet Corvette</option>
                    <option value={"honda"}>Chevrolet</option>
                    <option value={"honda"}>Dodge</option>
                    <option value={"honda"}>Ford</option>
                  </select>
                </div>
                <div className="  md:w-60 w-full">
                  <label className="block text-sm text-left  font-semibold  text-textColor">
                    Year
                  </label>
                  <select className="mt-1 bg-[#FEFBFB] text-gray-600 p-2 border rounded-lg w-full border-[#E9DBDB]">
                    <option>Select Year</option>
                    <option value={"honda"}>2019</option>
                    <option value={"honda"}>2020</option>
                    <option value={"honda"}>2021</option>
                    <option value={"honda"}>2022</option>
                    <option value={"honda"}>2023</option>
                    <option value={"honda"}>2024</option>
                  </select>
                </div>
              </div>

              <div className=" pt-12">
              {loading===true?(
                   <button
                   disabled
                   type="button"
                   class="text-white w-48 bg-primary hover:bg-primary focus:ring-4 focus:ring-blue-300 font-medium rounded-3xl text-sm px-5 py-2.5 text-center me-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 inline-flex items-center"
                 >
                   <svg
                     aria-hidden="true"
                     role="status"
                     class="inline w-4 h-4 me-3 text-white animate-spin"
                     viewBox="0 0 100 101"
                     fill="none"
                     xmlns="http://www.w3.org/2000/svg"
                   >
                     <path
                       d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                       fill="#E5E7EB"
                     />
                     <path
                       d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                       fill="currentColor"
                     />
                   </svg>
                   Loading...
                 </button>
                ):(
<Button
                  onClick={AllFilterFun}
                  label={"Search"}
                  className={
                    " bg-primary py-2 w-48 mx-auto text-white rounded-3xl"
                  }
                />
                )}

                <div className=" flex gap-2 justify-center pt-2">
                  <p className=" text-secondary  border-b  border-secondary  font-semibold">
                    Clear search
                  </p>
                </div>
              </div>
            </>
          ) : filter === "new" ? (
            <>
              <>
              <div className="grid xl:grid-cols-5  w-full lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 mt-9 gap-5">
                <div className="  md:w-48 w-full">
                  <label className="block text-sm text-left  font-semibold  text-textColor">
                    Make
                  </label>
                  <select
                    onChange={handleInputs}
                    name="make"
                    value={state.make}
                    className="mt-1 bg-[#FEFBFB] text-gray-600 p-2 border rounded-lg w-full border-[#E9DBDB]"
                  >
                    <option selected>Select Make</option>
                    <option value={"honda"}>Honda</option>
                    <option value={"toyota"}>Toyota</option>
                    <option value={"honda"}>Volkswagen</option>
                    <option value={"honda"}>BMW</option>
                  </select>
                </div>
                <div className="  md:w-48 w-full">
                  <label className="block text-sm text-left  font-semibold  text-textColor">
                    Model
                  </label>
                  <select
                    name="model"
                    onChange={handleInputs}
                    value={state.model}
                    className="mt-1 bg-[#FEFBFB] text-gray-600 p-2 border rounded-lg w-full border-[#E9DBDB]"
                  >
                    <option>Select Model</option>
                    <option value={"Jeep Gladiator"}>Jeep Gladiator</option>
                    <option value={"Toyota Camry"}>Toyota Camry</option>
                    <option value={"Chevorlet Corvette"}>
                      Chevorlet Corvette
                    </option>
                    <option value={"Chevrolet"}>Chevrolet</option>
                    <option value={"Dodge"}>Dodge</option>
                    <option value={"Ford"}>Ford</option>
                  </select>
                </div>
                <div className="  md:w-48 w-full">
                  <label className="block text-sm text-left  font-semibold  text-textColor">
                    Year Form
                  </label>
                  <select
                    name="yearFrom"
                    onChange={handleInputs}
                    value={state.yearFrom}
                    className="mt-1 bg-[#FEFBFB] text-gray-600 p-2 border rounded-lg w-full border-[#E9DBDB]"
                  >
                    <option>Select Year</option>
                    <option value={"2019"}>2019</option>
                    <option value={"2020"}>2020</option>
                    <option value={"2021"}>2021</option>
                    <option value={"2022"}>2022</option>
                    <option value={"2023"}>2023</option>
                    <option value={"2024"}>2024</option>
                  </select>
                </div>

                <div className="  md:w-48 w-full">
                  <label className="block text-sm text-left  font-semibold  text-textColor">
                    Year To
                  </label>
                  <select
                    name="yearTo"
                    onChange={handleInputs}
                    value={state.yearTo}
                    className="mt-1 bg-[#FEFBFB] text-gray-600 p-2 border rounded-lg w-full border-[#E9DBDB]"
                  >
                    <option>Select Year</option>
                    <option value={"2019"}>2019</option>
                    <option value={"2020"}>2020</option>
                    <option value={"2021"}>2021</option>
                    <option value={"2022"}>2022</option>
                    <option value={"2023"}>2023</option>
                    <option value={"2024"}>2024</option>
                  </select>
                </div>
                <div className=" md:w-48 w-full">
                  <label className="block text-sm text-left  font-semibold  text-textColor">
                    Vehicle Condition
                  </label>
                  <select
                    name="vehicleCondition"
                    onChange={handleInputs}
                    value={state.vehicleCondition}
                    className="mt-1 bg-[#FEFBFB] text-gray-600 p-2 border rounded-lg w-full border-[#E9DBDB]"
                  >
                    <option>Select Condition</option>
                    <option value={"New"}>New</option>
                    <option value={"Old"}>Old</option>
                  </select>
                </div>
                <div className="  md:w-48 w-full">
                  <label className="block text-sm text-left  font-semibold  text-textColor">
                    Price Form
                  </label>
                  <select
                    name="priceFrom"
                    onChange={handleInputs}
                    value={state.priceFrom}
                    className="mt-1 bg-[#FEFBFB] text-gray-600 p-2 border rounded-lg w-full border-[#E9DBDB]"
                  >
                    <option>Price Form</option>
                    <option value={"200"}>200</option>
                    <option value={"12000"}>12000</option>
                    <option value={"30000"}>30000</option>
                    <option value={"3000"}>3000</option>
                    <option value={"2023"}>2023</option>
                    <option value={"2024"}>2024</option>
                  </select>
                </div>
                <div className="  md:w-48 w-full">
                  <label className="block text-sm text-left  font-semibold  text-textColor">
                    Price To
                  </label>
                  <select
                    name="priceTo"
                    onChange={handleInputs}
                    value={state.priceTo}
                    className="mt-1 bg-[#FEFBFB] text-gray-600 p-2 border rounded-lg w-full border-[#E9DBDB]"
                  >
                    <option>Price To</option>
                    <option value={"honda"}>200</option>
                    <option value={"honda"}>12000</option>
                    <option value={"honda"}>30000</option>
                    <option value={"honda"}>3000</option>
                    <option value={"honda"}>2023</option>
                    <option value={"honda"}>2024</option>
                  </select>
                </div>
                
                <div className="  md:w-48 w-full">
                  <label className="block text-sm text-left  font-semibold  text-textColor">
                    Seller Type
                  </label>
                  <select className="mt-1 bg-[#FEFBFB] text-gray-600 p-2 border rounded-lg w-full border-[#E9DBDB]">
                    <option>Select Seller</option>
                    <option value={"honda"}>200</option>
                    <option value={"honda"}>12000</option>
                    <option value={"honda"}>30000</option>
                    <option value={"honda"}>3000</option>
                    <option value={"honda"}>2023</option>
                    <option value={"honda"}>2024</option>
                  </select>
                </div>
                <div className="  md:w-48 w-full">
                  <label className="block text-sm text-left  font-semibold  text-textColor">
                    Cylinder
                  </label>
                  <select  name="cylinder"
                    onChange={handleInputs}
                    value={state.cylinder} className="mt-1 bg-[#FEFBFB] text-gray-600 p-2 border rounded-lg w-full border-[#E9DBDB]">
                    <option>Select Cylinder</option>
                    <option value={"honda"}>200</option>
                    <option value={"honda"}>12000</option>
                    <option value={"honda"}>30000</option>
                    <option value={"honda"}>3000</option>
                    <option value={"honda"}>2023</option>
                    <option value={"honda"}>2024</option>
                  </select>
                </div>
              
                <div className="  md:w-48 w-full">
                  <label className="block text-sm text-left  font-semibold  text-textColor">
                    Transmission
                  </label>
                  <select  name="Transmission"
                    onChange={handleInputs}
                    value={state.Transmission} className="mt-1 bg-[#FEFBFB] text-gray-600 p-2 border rounded-lg w-full border-[#E9DBDB]">
                    <option>Select Transmission</option>
                    <option value={"honda"}>200</option>
                    <option value={"honda"}>12000</option>
                    <option value={"honda"}>30000</option>
                    <option value={"honda"}>3000</option>
                    <option value={"honda"}>2023</option>
                    <option value={"honda"}>2024</option>
                  </select>
                </div>
                <div className="  md:w-48 w-full">
                  <label className="block text-sm text-left  font-semibold  text-textColor">
                    Warranty
                  </label>
                  <select name="warranty"
                    onChange={handleInputs}
                    value={state.warranty} className="mt-1 bg-[#FEFBFB] text-gray-600 p-2 border rounded-lg w-full border-[#E9DBDB]">
                    <option>Select</option>
                    <option value={"honda"}>200</option>
                    <option value={"honda"}>12000</option>
                    <option value={"honda"}>30000</option>
                    <option value={"honda"}>3000</option>
                    <option value={"honda"}>2023</option>
                    <option value={"honda"}>2024</option>
                  </select>
                </div>
                <div className="  md:w-48 w-full">
                  <label className="block text-sm text-left  font-semibold  text-textColor">
                    Exterior Colour
                  </label>
                  <select name="exterior_colour"
                    onChange={handleInputs}
                    value={state.exterior_colour} className="mt-1 bg-[#FEFBFB] text-gray-600 p-2 border rounded-lg w-full border-[#E9DBDB]">
                    <option>Select </option>
                    <option value={"honda"}>200</option>
                    <option value={"honda"}>12000</option>
                    <option value={"honda"}>30000</option>
                    <option value={"honda"}>3000</option>
                    <option value={"honda"}>2023</option>
                    <option value={"honda"}>2024</option>
                  </select>
                </div>
                <div className="  md:w-48 w-full">
                  <label className="block text-sm text-left  font-semibold  text-textColor">
                    Interior Colour
                  </label>
                  <select name="interior_colour"
                    onChange={handleInputs}
                    value={state.interior_colour} className="mt-1 bg-[#FEFBFB] text-gray-600 p-2 border rounded-lg w-full border-[#E9DBDB]">
                    <option>Select </option>
                    <option value={"honda"}>200</option>
                    <option value={"honda"}>12000</option>
                    <option value={"honda"}>30000</option>
                    <option value={"honda"}>3000</option>
                    <option value={"honda"}>2023</option>
                    <option value={"honda"}>2024</option>
                  </select>
                </div>
                <div className="  md:w-48 w-full">
                  <label className="block text-sm text-left  font-semibold  text-textColor">
                    Specifications
                  </label>
                  <select name="specifications"
                    onChange={handleInputs}
                    value={state.specifications} className="mt-1 bg-[#FEFBFB] text-gray-600 p-2 border rounded-lg w-full border-[#E9DBDB]">
                    <option>Select Specifications </option>
                    <option value={"honda"}>200</option>
                    <option value={"honda"}>12000</option>
                    <option value={"honda"}>30000</option>
                    <option value={"honda"}>3000</option>
                    <option value={"honda"}>2023</option>
                    <option value={"honda"}>2024</option>
                  </select>
                </div>
            
                <div className="  md:w-48 w-full">
                  <label className="block text-sm text-left  font-semibold  text-textColor">
                    Type of listing
                  </label>
                  <select name="specifications"
                    onChange={handleInputs}
                    value={state.type_of_ad} className="mt-1 bg-[#FEFBFB] text-gray-600 p-2 border rounded-lg w-full border-[#E9DBDB]">
                    <option>Select </option>
                    <option value={"honda"}>200</option>
                    <option value={"honda"}>12000</option>
                    <option value={"honda"}>30000</option>
                    <option value={"honda"}>3000</option>
                    <option value={"honda"}>2023</option>
                    <option value={"honda"}>2024</option>
                  </select>
                </div>
              </div>

                <div className=" pt-12">
                {loading===true?(
                   <button
                   disabled
                   type="button"
                   class="text-white w-48 bg-primary hover:bg-primary focus:ring-4 focus:ring-blue-300 font-medium rounded-3xl text-sm px-5 py-2.5 text-center me-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 inline-flex items-center"
                 >
                   <svg
                     aria-hidden="true"
                     role="status"
                     class="inline w-4 h-4 me-3 text-white animate-spin"
                     viewBox="0 0 100 101"
                     fill="none"
                     xmlns="http://www.w3.org/2000/svg"
                   >
                     <path
                       d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                       fill="#E5E7EB"
                     />
                     <path
                       d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                       fill="currentColor"
                     />
                   </svg>
                   Loading...
                 </button>
                ):(
<Button
                  onClick={AllFilterFun}
                  label={"Search"}
                  className={
                    " bg-primary py-2 w-48 mx-auto text-white rounded-3xl"
                  }
                />
                )}

                  <div className=" flex gap-2 justify-center pt-2">
                    <p className="text-secondary  border-b  border-secondary  font-semibold">
                      Advance search
                    </p>
                    <p className=" text-secondary  border-b  border-secondary  font-semibold">
                      Clear search
                    </p>
                  </div>
                </div>
              </>
            </>
          ) : (
            <>
              <div className=" md:flex block mt-6 justify-center w-full gap-3">
                <div className="  md:w-60 w-full">
                  <label className="block text-sm text-left  font-semibold  text-textColor">
                    Make
                  </label>
                  <select name="make"
                    onChange={handleInputs}
                    value={state.make} className="mt-1 bg-[#FEFBFB] text-gray-600 p-2 border rounded-lg w-full border-[#E9DBDB]">
                    <option>Select Make</option>
                    <option value={"honda"}>Honda</option>
                    <option value={"honda"}>Toyota</option>
                    <option value={"honda"}>Volkswagen</option>
                    <option value={"honda"}>BMW</option>
                  </select>
                </div>
                <div className="  md:w-60 w-full">
                  <label className="block text-sm text-left  font-semibold  text-textColor">
                    Model
                  </label>
                  <select  name="model"
                    onChange={handleInputs}
                    value={state.model}
                    className="mt-1 bg-[#FEFBFB] text-gray-600 p-2 border rounded-lg w-full border-[#E9DBDB]">
                    <option>Select Model</option>
                    <option value={"honda"}>Jeep Gladiator</option>
                    <option value={"honda"}>Toyota Camry</option>
                    <option value={"honda"}>Chevorlet Corvette</option>
                    <option value={"honda"}>Chevrolet</option>
                    <option value={"honda"}>Dodge</option>
                    <option value={"honda"}>Ford</option>
                  </select>
                </div>
                <div className="  md:w-60 w-full">
                  <label className="block text-sm text-left  font-semibold  text-textColor">
                    Year
                  </label>
                  <select name="yearFrom"
                    onChange={handleInputs}
                    value={state.yearFrom} className="mt-1 bg-[#FEFBFB] text-gray-600 p-2 border rounded-lg w-full border-[#E9DBDB]">
                    <option>Select Year</option>
                    <option value={"honda"}>2019</option>
                    <option value={"honda"}>2020</option>
                    <option value={"honda"}>2021</option>
                    <option value={"honda"}>2022</option>
                    <option value={"honda"}>2023</option>
                    <option value={"honda"}>2024</option>
                  </select>
                </div>

                <div className="  md:w-60 w-full">
                  <label className="block text-sm text-left  font-semibold  text-textColor">
                    Service
                  </label>
                  <select   className="mt-1 bg-[#FEFBFB] text-gray-600 p-2 border rounded-lg w-full border-[#E9DBDB]">
                    <option>Select Service</option>
                    <option value={"honda"}>New</option>
                    <option value={"honda"}>Old</option>
                  </select>
                </div>
              </div>

             
              <div className=" pt-12">
                {loading===true?(
                   <button
                   disabled
                   type="button"
                   class="text-white w-48 bg-primary hover:bg-primary focus:ring-4 focus:ring-blue-300 font-medium rounded-3xl text-sm px-5 py-2.5 text-center me-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 inline-flex items-center"
                 >
                   <svg
                     aria-hidden="true"
                     role="status"
                     class="inline w-4 h-4 me-3 text-white animate-spin"
                     viewBox="0 0 100 101"
                     fill="none"
                     xmlns="http://www.w3.org/2000/svg"
                   >
                     <path
                       d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                       fill="#E5E7EB"
                     />
                     <path
                       d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                       fill="currentColor"
                     />
                   </svg>
                   Loading...
                 </button>
                ):(
<Button
                  onClick={AllFilterFun}
                  label={"Search"}
                  className={
                    " bg-primary py-2 w-48 mx-auto text-white rounded-3xl"
                  }
                />
                )}

                  <div className=" flex gap-2 justify-center pt-2">
                    <p className="text-secondary  border-b  border-secondary  font-semibold">
                      Advance search
                    </p>
                    <p className=" text-secondary  border-b  border-secondary  font-semibold">
                      Clear search
                    </p>
                  </div>
                </div>
            </>
          )}
        </div>
        
      </div>
    </div>
  );
};

export default SearchComponents;
