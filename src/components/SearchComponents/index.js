import React, { useState } from "react";
import Button from "../Button";
const SearchComponents = () => {


  const [filter, setFilter] = useState("all");
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
                  <select className="mt-1 bg-[#FEFBFB] text-gray-600 p-2 border rounded-lg w-full border-[#E9DBDB]">
                    <option>Select Make</option>
                    <option value={"honda"}>Honda</option>
                    <option value={"honda"}>Toyota</option>
                    <option value={"honda"}>Volkswagen</option>
                    <option value={"honda"}>BMW</option>
                  </select>
                </div>
                <div className="  md:w-48 w-full">
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
                <div className="  md:w-48 w-full">
                  <label className="block text-sm text-left  font-semibold  text-textColor">
                    Year Form
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

                <div className="  md:w-48 w-full">
                  <label className="block text-sm text-left  font-semibold  text-textColor">
                    Year To
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
                <div className=" md:w-48 w-full">
                  <label className="block text-sm text-left  font-semibold  text-textColor">
                    Vehicle Condition
                  </label>
                  <select className="mt-1 bg-[#FEFBFB] text-gray-600 p-2 border rounded-lg w-full border-[#E9DBDB]">
                    <option>Select Condition</option>
                    <option value={"honda"}>Good Condition (G)</option>
                    <option value={"honda"}>Fair Condition (F)</option>
                    <option value={"honda"}>Poor Condition (P)</option>
                    <option value={"honda"}>
                      Non-Permitted Construction (N)
                    </option>
                  </select>
                </div>
                <div className="  md:w-48 w-full">
                  <label className="block text-sm text-left  font-semibold  text-textColor">
                    Price Form
                  </label>
                  <select className="mt-1 bg-[#FEFBFB] text-gray-600 p-2 border rounded-lg w-full border-[#E9DBDB]">
                    <option>Price Form</option>
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
                    Price To
                  </label>
                  <select className="mt-1 bg-[#FEFBFB] text-gray-600 p-2 border rounded-lg w-full border-[#E9DBDB]">
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
                  <select className="mt-1 bg-[#FEFBFB] text-gray-600 p-2 border rounded-lg w-full border-[#E9DBDB]">
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
                  <select className="mt-1 bg-[#FEFBFB] text-gray-600 p-2 border rounded-lg w-full border-[#E9DBDB]">
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
                  <select className="mt-1 bg-[#FEFBFB] text-gray-600 p-2 border rounded-lg w-full border-[#E9DBDB]">
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
                  <select className="mt-1 bg-[#FEFBFB] text-gray-600 p-2 border rounded-lg w-full border-[#E9DBDB]">
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
                  <select className="mt-1 bg-[#FEFBFB] text-gray-600 p-2 border rounded-lg w-full border-[#E9DBDB]">
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
                  <select className="mt-1 bg-[#FEFBFB] text-gray-600 p-2 border rounded-lg w-full border-[#E9DBDB]">
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
                  <select className="mt-1 bg-[#FEFBFB] text-gray-600 p-2 border rounded-lg w-full border-[#E9DBDB]">
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
                  <select className="mt-1 bg-[#FEFBFB] text-gray-600 p-2 border rounded-lg w-full border-[#E9DBDB]">
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
                  <select className="mt-1 bg-[#FEFBFB] text-gray-600 p-2 border rounded-lg w-full border-[#E9DBDB]">
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
                    Owner
                  </label>
                  <select className="mt-1 bg-[#FEFBFB] text-gray-600 p-2 border rounded-lg w-full border-[#E9DBDB]">
                    <option>Select Owner </option>
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
                  <select className="mt-1 bg-[#FEFBFB] text-gray-600 p-2 border rounded-lg w-full border-[#E9DBDB]">
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
                <Button
                  label={"Search"}
                  className={
                    " bg-primary py-2 w-48 mx-auto text-white rounded-3xl"
                  }
                />

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
                <Button
                  label={"Search"}
                  className={
                    " bg-primary py-2 w-48 mx-auto text-white rounded-3xl"
                  }
                />

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
                <div className="grid xl:grid-cols-5  lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1  w-full mt-9 gap-5">
                  <div className="  md:w-48 w-full">
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
                  <div className="  md:w-48 w-full">
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
                  <div className="  md:w-48 w-full">
                    <label className="block text-sm text-left  font-semibold  text-textColor">
                      Year Form
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

                  <div className="  md:w-48 w-full">
                    <label className="block text-sm text-left  font-semibold  text-textColor">
                      Year To
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
                  <div className=" md:w-48 w-full">
                    <label className="block text-sm text-left  font-semibold  text-textColor">
                      Vehicle Condition
                    </label>
                    <select className="mt-1 bg-[#FEFBFB] text-gray-600 p-2 border rounded-lg w-full border-[#E9DBDB]">
                      <option>Select Condition</option>
                      <option value={"honda"}>Good Condition (G)</option>
                      <option value={"honda"}>Fair Condition (F)</option>
                      <option value={"honda"}>Poor Condition (P)</option>
                      <option value={"honda"}>
                        Non-Permitted Construction (N)
                      </option>
                    </select>
                  </div>
                  <div className="  md:w-48 w-full">
                    <label className="block text-sm text-left  font-semibold  text-textColor">
                      Price Form
                    </label>
                    <select className="mt-1 bg-[#FEFBFB] text-gray-600 p-2 border rounded-lg w-full border-[#E9DBDB]">
                      <option>Price Form</option>
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
                      Price To
                    </label>
                    <select className="mt-1 bg-[#FEFBFB] text-gray-600 p-2 border rounded-lg w-full border-[#E9DBDB]">
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
                    <select className="mt-1 bg-[#FEFBFB] text-gray-600 p-2 border rounded-lg w-full border-[#E9DBDB]">
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
                    <select className="mt-1 bg-[#FEFBFB] text-gray-600 p-2 border rounded-lg w-full border-[#E9DBDB]">
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
                    <select className="mt-1 bg-[#FEFBFB] text-gray-600 p-2 border rounded-lg w-full border-[#E9DBDB]">
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
                    <select className="mt-1 bg-[#FEFBFB] text-gray-600 p-2 border rounded-lg w-full border-[#E9DBDB]">
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
                    <select className="mt-1 bg-[#FEFBFB] text-gray-600 p-2 border rounded-lg w-full border-[#E9DBDB]">
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
                    <select className="mt-1 bg-[#FEFBFB] text-gray-600 p-2 border rounded-lg w-full border-[#E9DBDB]">
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
                    <select className="mt-1 bg-[#FEFBFB] text-gray-600 p-2 border rounded-lg w-full border-[#E9DBDB]">
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
                  <Button
                    label={"Search"}
                    className={
                      " bg-primary py-2 w-48 mx-auto text-white rounded-3xl"
                    }
                  />

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

                <div className="  md:w-60 w-full">
                  <label className="block text-sm text-left  font-semibold  text-textColor">
                    Service
                  </label>
                  <select className="mt-1 bg-[#FEFBFB] text-gray-600 p-2 border rounded-lg w-full border-[#E9DBDB]">
                    <option>Select Service</option>
                    <option value={"honda"}>New</option>
                    <option value={"honda"}>Old</option>
                  </select>
                </div>
              </div>

              <div className=" pt-12">
                <Button
                  label={"Search"}
                  className={
                    " bg-primary py-2 w-48 mx-auto text-white rounded-3xl"
                  }
                />

                <div className=" flex gap-2 justify-center pt-2">
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
