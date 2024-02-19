import React, { useState } from "react";
import Button from "../Button";

const SearchForCar = () => {
  const [allFilter, setFilter] = useState("body_type");
  return (
    <div className=" container mx-auto mt-16 px-10">
      <h2 className=" h2  text-center">Search for a car by</h2>

      <hr className=" m-0 border-b-2 w-64 border-primary mt-2 mx-auto" />
      <div className="scroll-container mt-8  flex  gap-1 md:justify-center justify-start  items-center productOverflow  overflow-x-auto whitespace-nowrap">
        <Button
          label={"Body Type"}
          onClick={() => setFilter("body_type")}
          className={` border-2 py-2.5 border-primary bg-secondary  ${
            allFilter === "body_type"
              ? "bg-secondary text-white"
              : "bg-white text-secondary"
          }   font-bold rounded-lg w-44 sm:text-base text-sm`}
        />
        <Button
          label={"Brands"}
          onClick={() => setFilter("brands")}
          className={` border-2 py-2.5 border-primary  ${
            allFilter === "brands"
              ? " bg-secondary text-white"
              : " text-secondary"
          } rounded-lg font-bold  w-44 sm:text-base text-sm`}
        />
        <Button
          label={"Budget"}
          onClick={() => setFilter("budget")}
          className={` border-2 py-2.5 border-primary font-bold ${
            allFilter === "budget" ? "bg-secondary text-white " : "bg-white "
          } text-secondary rounded-lg w-44 sm:text-base text-sm`}
        />
        <Button
          label={"Year"}
          onClick={() => setFilter("year")}
          className={` border-2 py-2.5 border-primary  ${
            allFilter === "year"
              ? " bg-secondary text-white"
              : " text-secondary"
          } rounded-lg font-bold  w-44 sm:text-base text-sm`}
        />
        <Button
          label={"Engine Size"}
          onClick={() => setFilter("engine")}
          className={` border-2 py-2.5 border-primary  ${
            allFilter === "engine"
              ? " bg-secondary text-white"
              : " text-secondary"
          } rounded-lg font-bold  w-44 sm:text-base text-sm`}
        />
      </div>

      {allFilter === "body_type" ? (
        <>
          <div className=" grid md:grid-cols-6 grid-cols-2 mt-8 gap-10">
            <div>
              <div className=" text-center">
                <img src={require("../../assets/images/car1.png")} alt="" />
                <span className=" uppercase text-textColor font-semibold">
                  SUV
                </span>
              </div>
            </div>
            <div>
              <div className=" text-center">
                <img src={require("../../assets/images/car2.png")} alt="" />
                <span className=" uppercase text-textColor font-semibold">
                  Coupe
                </span>
              </div>
            </div>
            <div>
              <div className=" text-center">
                <img src={require("../../assets/images/car3.png")} alt="" />
                <span className=" uppercase text-textColor font-semibold">
                  bus
                </span>
              </div>
            </div>
            <div>
              <div className=" text-center">
                <img src={require("../../assets/images/car4.png")} alt="" />
                <span className=" uppercase text-textColor font-semibold">
                  SUV
                </span>
              </div>
            </div>
            <div>
              <div className=" text-center">
                <img src={require("../../assets/images/car5.png")} alt="" />
                <span className=" uppercase text-textColor font-semibold">
                  SUV
                </span>
              </div>
            </div>
            <div>
              <div className=" text-center">
                <img src={require("../../assets/images/car5.png")} alt="" />
                <span className=" uppercase text-textColor font-semibold">
                  SUV
                </span>
              </div>
            </div>
            <div>
              <div className=" text-center">
                <img src={require("../../assets/images/car5.png")} alt="" />
                <span className=" uppercase text-textColor font-semibold">
                  SUV
                </span>
              </div>
            </div>
            <div>
              <div className=" text-center">
                <img src={require("../../assets/images/car5.png")} alt="" />
                <span className=" uppercase text-textColor font-semibold">
                  SUV
                </span>
              </div>
            </div>
            <div>
              <div className=" text-center">
                <img src={require("../../assets/images/car5.png")} alt="" />
                <span className=" uppercase text-textColor font-semibold">
                  SUV
                </span>
              </div>
            </div>
            <div>
              <div className=" text-center">
                <img src={require("../../assets/images/car5.png")} alt="" />
                <span className=" uppercase text-textColor font-semibold">
                  SUV
                </span>
              </div>
            </div>
            <div>
              <div className=" text-center">
                <img src={require("../../assets/images/car5.png")} alt="" />
                <span className=" uppercase text-textColor font-semibold">
                  SUV
                </span>
              </div>
            </div>
            <div>
              <div className=" text-center">
                <img src={require("../../assets/images/car5.png")} alt="" />
                <span className=" uppercase text-textColor font-semibold">
                  SUV
                </span>
              </div>
            </div>
            <div>
              <div className=" text-center">
                <img src={require("../../assets/images/car5.png")} alt="" />
                <span className=" uppercase text-textColor font-semibold">
                  SUV
                </span>
              </div>
            </div>
          </div>
        </>
      ) : allFilter === "year" ? (
        <>
          <div className=" flex items-center   flex-wrap justify-center mt-14 gap-4">
            <Button
              label={"2024"}
              className={
                "  border shadow-lg w-52 rounded-md py-1.5  font-medium  text-secondary border-secondary"
              }
            />

            <Button
              label={"2023"}
              className={
                "  border shadow-lg w-52 rounded-md py-1.5  font-medium  text-secondary border-secondary"
              }
            />

            <Button
              label={"2022"}
              className={
                "  border shadow-lg w-52 rounded-md py-1.5  font-medium  text-secondary border-secondary"
              }
            />
            <Button
              label={"2021"}
              className={
                "  border shadow-lg w-52 rounded-md py-1.5  font-medium  text-secondary border-secondary"
              }
            />
            <Button
              label={"2020"}
              className={
                "  border shadow-lg w-52 rounded-md py-1.5  font-medium  text-secondary border-secondary"
              }
            />
            <Button
              label={"2019"}
              className={
                "  border shadow-lg w-52 rounded-md py-1.5  font-medium  text-secondary border-secondary"
              }
            />
            <Button
              label={"2018"}
              className={
                "  border shadow-lg w-52 rounded-md py-1.5  font-medium  text-secondary border-secondary"
              }
            />
            <Button
              label={"2017"}
              className={
                "  border shadow-lg w-52 rounded-md py-1.5  font-medium  text-secondary border-secondary"
              }
            />
            <Button
              label={"2016"}
              className={
                "  border shadow-lg w-52 rounded-md py-1.5  font-medium  text-secondary border-secondary"
              }
            />
          </div>
        </>
      ) : allFilter === "engine" ? (
        <>
          <div className=" flex items-center   flex-wrap justify-center mt-14 gap-4">
            <Button
              label={"Under 1.0L"}
              className={
                "  border shadow-lg w-52 rounded-md py-1.5  font-medium  text-secondary border-secondary"
              }
            />

            <Button
              label={"1.1L-1.6L"}
              className={
                "  border shadow-lg w-52 rounded-md py-1.5  font-medium  text-secondary border-secondary"
              }
            />

            <Button
              label={"1.7L-2.0L"}
              className={
                "  border shadow-lg w-52 rounded-md py-1.5  font-medium  text-secondary border-secondary"
              }
            />
            <Button
              label={"2.1L-2.5L"}
              className={
                "  border shadow-lg w-52 rounded-md py-1.5  font-medium  text-secondary border-secondary"
              }
            />
            <Button
              label={"2.6L-3.0L"}
              className={
                "  border shadow-lg w-52 rounded-md py-1.5  font-medium  text-secondary border-secondary"
              }
            />
            <Button
              label={"3.1L-3.5L"}
              className={
                "  border shadow-lg w-52 rounded-md py-1.5  font-medium  text-secondary border-secondary"
              }
            />
            <Button
              label={"3.6L-4.0L"}
              className={
                "  border shadow-lg w-52 rounded-md py-1.5  font-medium  text-secondary border-secondary"
              }
            />
            <Button
              label={"4.1L-4.5L"}
              className={
                "  border shadow-lg w-52 rounded-md py-1.5  font-medium  text-secondary border-secondary"
              }
            />
            <Button
              label={"4.6L-5.0L"}
              className={
                "  border shadow-lg w-52 rounded-md py-1.5  font-medium  text-secondary border-secondary"
              }
            />
            <Button
              label={"Above 5.0L"}
              className={
                "  border shadow-lg w-52 rounded-md py-1.5  font-medium  text-secondary border-secondary"
              }
            />
          </div>
        </>
      ) : allFilter === "brands" ? (
        <>
          <div className=" flex flex-wrap justify-center items-center mt-14 gap-3">
            <div className="  m-2  bg-white w-64  rounded">
              <img src={require("../../assets/images/b1.png")} alt=""  className=" w-full  h-full object-cover" />
            </div>
            <div className="  scroll-item inline-block :w-64  p-2 bg-white rounded">
              <img src={require("../../assets/images/b2.png")} alt=""   className=" w-full h-full object-cover" />
            </div>
            <div className=" scroll-item inline-block p-2 w-64  bg-white rounded">
              <img src={require("../../assets/images/b3.png")} alt=""  className=" w-full  h-full object-cover"   />
            </div>
            <div className=" scroll-item inline-block p-2 w-64   bg-white rounded">
              <img src={require("../../assets/images/b4.png")} alt=""  className=" w-full  h-full object-cover" />
            </div>
            <div className=" scroll-item inline-block p-2 w-64  bg-white rounded">
              <img src={require("../../assets/images/b4.png")} alt="" className=" w-full  h-full object-cover"    />
            </div>
          </div>
        </>
      ) : (
        <>
          <div className=" flex items-center   flex-wrap justify-center mt-14 gap-4">
            <Button
              label={"Under QAR 10,000"}
              className={
                "  border shadow-lg w-52 rounded-md py-1.5  font-medium  text-secondary border-secondary"
              }
            />

            <Button
              label={"Under QAR 15,000"}
              className={
                "  border shadow-lg w-52 rounded-md py-1.5  font-medium  text-secondary border-secondary"
              }
            />

            <Button
              label={"Under QAR 20,000"}
              className={
                "  border shadow-lg w-52 rounded-md py-1.5  font-medium  text-secondary border-secondary"
              }
            />
            <Button
              label={"Under QAR 30,000"}
              className={
                "  border shadow-lg w-52 rounded-md py-1.5  font-medium  text-secondary border-secondary"
              }
            />
            <Button
              label={"Under QAR 50,000"}
              className={
                "  border shadow-lg w-52 rounded-md py-1.5  font-medium  text-secondary border-secondary"
              }
            />
            <Button
              label={"Under QAR 50,000"}
              className={
                "  border shadow-lg w-52 rounded-md py-1.5  font-medium  text-secondary border-secondary"
              }
            />
          </div>
        </>
      )}

      <div className=" mt-12">
        <Button
          label={"View Less"}
          className={
            " border-2 md:float-end float-none mx-auto rounded-3xl border-primary w-48 text-secondary font-bold py-1.5"
          }
        />
      </div>
    </div>
  );
};

export default SearchForCar;
