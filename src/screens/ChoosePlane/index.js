import React, { useEffect, useState } from "react";
import Button from "../../components/Button";
import { FaCheckCircle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Base_url } from "../../utils/Base_url";
import { toast } from "react-toastify";
import Header from "../../components/header";
import Footer from "../../components/footer";
const ChoosePlane = () => {
  const navigate = useNavigate();

  const [choose, setChoose] = useState([]);

  const userId = localStorage.getItem("user_data");

  useEffect(() => {
    axios
      .get(`${Base_url}/plans`)
      .then((res) => {
        console.log(res);
        setChoose(res.data.plans);
      })
      .catch((error) => {});
  }, []);

  const selectPackage = (id) => {
    const params = {
      user_id: userId,
      plan_id: id,
    };

    axios
      .post(`${Base_url}/selectPlan`, params)
      .then((res) => {
        console.log(res);
        if (res.data.success === true) {
          navigate("/car_details");

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
    <>
     <Header/>
     <div className=" py-10 container mx-auto">
      <h2 className="  text-4xl  font-semibold text-textColor pb-7 text-center">
        Choose a Plan
      </h2>
      <div className=" flex gap-4 justify-center">
        {choose?.map((item, index) => {
          return (
            <>
              <div className=" rounded-3xl relative  w-96 h-[650px] py-8 bg-gray-100">
                <div className=" text-center">
                  <img
                    src={require("../../assets/images/plane3.png")}
                    className=" w-24 mx-auto"
                    alt=""
                  />

                  <h1 className=" text-primary uppercase text-3xl font-bold my-2">
                    {item?.name}
                  </h1>
                </div>

                <hr />
                <div className=" py-8 px-12">
                  <ul className=" leading-8">
                    <li className=" flex gap-2 items-center">
                      <FaCheckCircle color="" className=" text-primary" />
                      <p className=" font-semibold text-textColor">
                        Upload up to {item?.photoLimit} Photos{" "}
                      </p>
                    </li>
                    <li className=" flex gap-2 items-center">
                      <FaCheckCircle color="" className=" text-primary" />
                      <p className=" font-semibold text-textColor">
                        2 Cars may be active on this package{" "}
                      </p>
                    </li>
                    <li className=" flex gap-2 items-center">
                      <FaCheckCircle color="" className=" text-primary" />
                      <p className=" font-semibold text-textColor">
                        {item?.listingDuration} Days Active Listing
                      </p>
                    </li>
                  </ul>

                  <Button
                    label={"Select Package"}
                    onClick={() => selectPackage(item?._id)}
                    className={
                      " bg-primary absolute py-2  bottom-12 mx-auto rounded-3xl w-72 text-white"
                    }
                  />
                </div>
              </div>
            </>
          );
        })}
      </div>
    </div>
     <Footer/>
    </>
  );
};

export default ChoosePlane;
