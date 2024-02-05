import React from "react";
import Button from "../Button";
import Input from "../Input";
import { Link } from "react-router-dom";
import { IoSearch } from "react-icons/io5";
const SearchComponents = () => {
  return (
    <div>
      <div className="bg-[#ECECEC] py-9 rounded-2xl  border border-primary">
        <div className=" w-[50%] mx-auto text-center">
          <div className=" flex justify-center gap-3">
            <Button
              label={"All cars"}
              className={
                " bg-white    border-b-2  border-primary text-primary py-2"
              }
            />
            <Button
              label={"New cars"}
              className={" bg-white   rounded-md  text-secondary py-2 px-12"}
            />
            <Button
              label={"Scrap cars"}
              className={" bg-white rounded-md text-secondary py-2 px-12"}
            />
            <Button
              label={"Find Garage"}
              className={" bg-white rounded-md text-secondary py-2 px-12"}
            />
          </div>
          <div className=" pt-6 text-left">
            <label className=" text-gray-500  font-bold">Make</label>
            <div className=" relative">
              <Input
                placeholder={"Search Car"}
                Icon={
                  <img src={require("../../assets/images/filter.png")} alt="" />
                }
                className={
                  " w-full  pl-8 p-4 border-primary border placeholder:text-gray-400"
                }
              />
              <IoSearch
                size={20}
                className=" absolute text-gray-500 left-2  top-5"
              />
            </div>
          </div>
          <div className=" pt-8">
            <Button
              label={"Search"}
              className={" bg-primary py-2 w-48 mx-auto text-white rounded-3xl"}
            />

            <div className=" flex gap-2 justify-center pt-2">
              <p className="text-secondary  border-b  border-secondary  font-medium">
                Advance search
              </p>
              <p className=" text-secondary  border-b  border-secondary  font-medium">
                Clear search
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchComponents;
