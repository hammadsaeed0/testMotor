import React, { useEffect, useState } from "react";
import DashboardNavbar from "../../NavBAr/DashboardNavbar";
import Header from "../../../../components/header";
import Footer from "../../../../components/footer";
import { FaList, FaSortAmountUpAlt } from "react-icons/fa";
import Button from "../../../../components/Button";
import Tabs from "../../../../components/Tabs";
import axios from "axios";
import { Base_url } from "../../../../utils/Base_url";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const GaragePageWhite = () => {
  const tabData = [
   
    { title: "About", content: <></> },
    { title: "Review", content: <></> },
    { title: "Price", content: <></> },
    { title: "Dates", content: <></> },
  ];
  const defaultTab = "About";

  const [garage, setGarage] = useState([]);
  var base_origin = window.location.origin;

  useEffect(() => {
    // Fetching garage data
    axios
      .get("http://34.216.84.212/api/users/get-all-garage")
      .then((res) => {
        console.log(res.data);
        setGarage(res.data.garage);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const navigate = useNavigate();



  return (
    <div>
      <Header />
      <DashboardNavbar />
      <div className=" container mx-auto">
        <div className=" my-8 px-4  md:flex block justify-between items-center">
          <div>
            <span className="  text-[#C1C1C1] text-lg font-medium">
              <strong>12</strong> garages found in your area
            </span>
          </div>
          <div className="  gap-5 md:pt-0 pt-4">
            <div className=" border rounded-md flex items-center justify-between p-2 w-64">
              <span className=" text-textColor font-semibold">
                Sort by : Distance
              </span>
              <FaSortAmountUpAlt size={20} className=" text-[#C1C1C1]" />
            </div>
          </div>
        </div>

        <div className=" gap-4 flex my-6">
          <div className=" bg-[#F0F5FA] border  p-2 rounded-lg w-[22%]">
            <div className=" pt-5">
              <span className="  font-semibold text-xl"> FILTERS</span>
            </div>
            {/* filter distance */}
            <div className=" pt-5">
              <span className="    text-textColor uppercase"> Distance</span>
              <div className="">
                <select className=" w-full py-1.5 bg-white border">
                  <option value={""}>3 kms</option>
                  <option value={""}>5 kms</option>
                </select>
              </div>
            </div>
          </div>
          <div className=" w-[75%] flex flex-col gap-5">
            {garage?.map((item, index) => {
              return (
                <div className="  bg-[#F0F5FA]  overflow-auto  border-primary border-2 rounded-2xl pt-3 w-full">
                  <div className=" w-full flex gap-5">
                    <div className=" w-[20%] px-3">
                      <img
                        src={require("../../../../assets/images/booking.png")}
                        className=" w-32"
                        alt=""
                      />

                      <h4 className=" text-black font-semibold pt-5">
                        CAR SPECIALIST
                      </h4>
                    </div>

                    <div className=" w-[80%]">
                      <div className=" flex  px-3 justify-between items-center">
                        <h3 className=" text-secondary text-xl font-semibold">
                          {item?.garageName}
                        </h3>
                        <Button
                           
                          label={"featured"}
                          className={
                            " uppercase py-1 bg-lightBlue  text-sm  text-white font-semibold rounded-3xl"
                          }
                        />
                      </div>
                      <div className=" flex px-3 justify-between">
                        <div>
                          <div className=" flex  py-1 gap-2">
                            <img
                              src={require("../../../../assets/images/heights-color 1.png")}
                              alt=""
                            />
                            <p className=" text-textColor   font-medium">
                              {" "}
                              1.15 Kms away
                            </p>
                          </div>
                          <div className=" flex py-1  gap-2">
                            <div>
                              <img
                                src={require("../../../../assets/images/booking/can.png")}
                                alt=""
                              />
                            </div>
                            <p className=" text-textColor    font-medium">
                              {" "}
                              Available from: 27/03/2023
                            </p>
                          </div>
                          <div className=" flex py-1  gap-2">
                            <div>
                              <img
                                src={require("../../../../assets/images/booking/check.png")}
                                alt=""
                              />
                            </div>
                            <p className=" text-textColor   font-medium">
                              {" "}
                              Collect & Deliver Bookable
                            </p>
                          </div>
                          <div className=" flex py-1  gap-2">
                            <div>
                              <img
                                src={require("../../../../assets/images/booking/check.png")}
                                alt=""
                              />
                            </div>
                            <p className=" text-textColor   font-medium">
                              {" "}
                              Services: Body Repair ,Paint,brakes ,Car Tires,Car
                              Wash
                            </p>
                          </div>
                        </div>

                        <div className=" text-center">
                          <div className="mt-6 mb-3">
                            <span className=" font-bold text-2xl   text-textColor">
                              QR 60
                            </span>
                          </div>
                          <Button
                           onClick={()=>navigate(`/garage_booking_confirmation/${item?._id}`,{item:item})}
                           
                            label={"Book Now"}
                            className={
                              " text-white py-1.5  rounded-md bg-primary"
                            }
                          />
                          <img
                            src={require("../../../../assets/images/booking/share.png")}
                            className=" mx-auto mt-5"
                            alt=""
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className=" w-full">
                    <Tabs tabs={tabData} defaultTab={defaultTab} />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default GaragePageWhite;
