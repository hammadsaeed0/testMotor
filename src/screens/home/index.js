import React, { useState } from "react";
import HomeBanner from "../../components/HomeBanner";
import SearchComponents from "../../components/SearchComponents";
import Accordion from "../../components/Accordion/Accordion";
import Button from "../../components/Button";
import SearchForCar from "../../components/SearchForCar";
import PopularShowRooms from "../../components/PopularShowRooms";

const Home = () => {
  const [accordions, setAccordion] = useState([
    {
      key: 1,
      title: "What services does Motorqe provide?",
      data: "Motorqe provides services that make car buying and selling easy, fast, and seamless in Qatar. If you want to sell your car, you can list it on our website and you will get its best value. Along with advertising your car, we can also help you navigate through the entire",
      isOpen: false,
    },
    {
      key: 2,
      title:
        "How do I make a payment on the website? What payment methods are available?",
      data: "Motorqe provides services that make car buying and selling easy, fast, and seamless in Qatar. If you want to sell your car, you can list it on our website and you will get its best value. Along with advertising your car, we can also help you navigate through the entire",
      isOpen: false,
    },
    {
      key: 3,
      title: "Is the payment refundable if I wish to cancel my purchase?",
      data: "Motorqe provides services that make car buying and selling easy, fast, and seamless in Qatar. If you want to sell your car, you can list it on our website and you will get its best value. Along with advertising your car, we can also help you navigate through the entire",
      isOpen: false,
    },
    {
      key: 4,
      title: "How do I search for a vehicle of my choice?",
      data: "Motorqe provides services that make car buying and selling easy, fast, and seamless in Qatar. If you want to sell your car, you can list it on our website and you will get its best value. Along with advertising your car, we can also help you navigate through the entire",
      isOpen: false,
    },
    {
      key: 5,
      title: "What should I keep in mind when viewing a vehicle?",
      data: "Motorqe provides services that make car buying and selling easy, fast, and seamless in Qatar. If you want to sell your car, you can list it on our website and you will get its best value. Along with advertising your car, we can also help you navigate through the entire",
      isOpen: false,
    },
    {
      key: 6,
      title: "Is the price mentioned on the Ad negotiable?",
      data: "Motorqe provides services that make car buying and selling easy, fast, and seamless in Qatar. If you want to sell your car, you can list it on our website and you will get its best value. Along with advertising your car, we can also help you navigate through the entire",
      isOpen: false,
    },
    {
      key: 7,
      title: "How long will it take you to sell my vehicle?",
      data: "Motorqe provides services that make car buying and selling easy, fast, and seamless in Qatar. If you want to sell your car, you can list it on our website and you will get its best value. Along with advertising your car, we can also help you navigate through the entire",
      isOpen: false,
    },
    {
      key: 8,
      title: "How do I ensure maximum response on my listings?",
      data: "Motorqe provides services that make car buying and selling easy, fast, and seamless in Qatar. If you want to sell your car, you can list it on our website and you will get its best value. Along with advertising your car, we can also help you navigate through the entire",
      isOpen: false,
    },
    {
      key: 9,
      title: "How do I ensure maximum response on my listings?",
      data: "Motorqe provides services that make car buying and selling easy, fast, and seamless in Qatar. If you want to sell your car, you can list it on our website and you will get its best value. Along with advertising your car, we can also help you navigate through the entire",
      isOpen: false,
    },
    {
      key: 10,
      title: "How do I ensure maximum response on my listings?",
      data: "Motorqe provides services that make car buying and selling easy, fast, and seamless in Qatar. If you want to sell your car, you can list it on our website and you will get its best value. Along with advertising your car, we can also help you navigate through the entire",
      isOpen: false,
    },
  ]);

  const toggleAccordion = (accordionkey) => {
    const updatedAccordions = accordions.map((accord) => {
      if (accord.key === accordionkey) {
        return { ...accord, isOpen: !accord.isOpen };
      } else {
        return { ...accord, isOpen: false };
      }
    });

    setAccordion(updatedAccordions);
  };

  return (
    <div>
      <HomeBanner />
      <div className=" -translate-y-[75px]">
        <div className=" w-[90%]  mx-auto">
          <SearchComponents />
        </div>
      </div>
      <div className=" container  mx-auto px-10">
        <h2 className=" h2  text-center">With Motorqe :</h2>

        <hr className=" m-0 border-b-2 w-64 border-primary mt-2 mx-auto" />

        <div className=" md:flex block   gap-7 mt-10 items-center">
          <div className=" text-center">
            <div className=" ">
              <img
                src={require("../../assets/images/time.png")}
                className=" mx-auto"
                alt=""
              />
            </div>
            <div className=" pt-6">
              <h5 className="h5">Selling Process</h5>
              <p>80% of our Customers sell their car with in 2 weeks </p>
            </div>
          </div>
          <div className=" text-center">
            <img
              src={require("../../assets/images/setting.png")}
              className=" mx-auto"
              alt=""
            />
            <div className="pt-6">
              <h5 className="h5">Free Listing</h5>
              <p>
                List your Car for 30 days for free then sit back & we will find
                you a potential buyer{" "}
              </p>
            </div>
          </div>
          <div className=" text-center">
            <img
              src={require("../../assets/images/compare.png")}
              className=" mx-auto"
              alt=""
            />
            <div className=" pt-6">
              <h5 className="h5">Compare cars</h5>
              <p>
                Choosing your favourite Car is now easier with the new
                comparison feature{" "}
              </p>
            </div>
          </div>
          <div className=" text-center">
            <img
              src={require("../../assets/images/find.png")}
              className=" mx-auto"
              alt=""
            />
            <div className=" text-center pt-6">
              <h5 className="h5">Find a Garage </h5>
              <p>
                Looking to fix or service your Car? find your ideal garage now
                hassle free.{" "}
              </p>
            </div>
          </div>
        </div>

        <Button
          label={"Sell your car now"}
          className={" bg-primary  text-white rounded-3xl py-1.5 mt-10 mx-auto"}
        />
      </div>

      <SearchForCar />

      <div className=" mt-28 mb-9  container mx-auto">
        <h2 className=" h2  text-center">Featured cars in Qatar:</h2>

        <hr className=" m-0 border-b-2 w-64 border-primary mt-2 mx-auto" />
        <p className=" text-center py-10">
          You will find your favourite cars on our website including Jaguar,
          Porsche, Mercedes, BMW, Ford, and many others. Have a look at our
          featured cars and check their price, specifications, and pictures to
          find your ideal car.
        </p>
        <div className=" flex justify-center gap-1">
          <Button
            label={"Featured Cars"}
            className={
              "border-2 bg-secondary py-2 text-white border-primary rounded-lg font-semibold w-48"
            }
          />
          <Button
            label={"Recently Added Cars"}
            className={
              "border-2 bg-white py-2  text-secondary border-primary rounded-lg font-bold"
            }
          />
        </div>

        <PopularShowRooms
          items={
            <>
              <div className=" mt-14 flex gap-6">
                <div className="border-4  w-[48%] border-primary  rounded-2xl overflow-hidden">
                  <div className="   h-4/4">
                    <img
                      src={require("../../assets/images/image 7.png")}
                      className=" w-full h-full object-cover object-center"
                      alt=""
                    />
                  </div>
                  <div className=" p-4">
                    <h5 className=" text-secondary font-bold uppercase">
                      Chevrolet Camaro 2-door{" "}
                    </h5>
                    <div className="  mt-3 flex justify-between items-center">
                      <div className=" flex gap-2 items-center">
                        <img
                          src={require("../../assets/images/can.png")}
                          className=" w-4"
                          alt=""
                        />
                        <span className=" text-textColor font-bold">2021</span>
                      </div>
                      <div className="flex gap-2 items-center">
                        <img
                          src={require("../../assets/images/cal.png")}
                          className=" w-6"
                          alt=""
                        />
                        <span className=" text-textColor font-bold">
                          4 Cylinder
                        </span>
                      </div>
                      <div className="flex gap-2 items-center">
                        <img
                          src={require("../../assets/images/road.png")}
                          className=" w-4"
                          alt=""
                        />
                        <span className=" text-textColor font-bold">
                          44, 882 KM
                        </span>
                      </div>
                    </div>

                    <div className=" flex justify-between items-center mt-3">
                      <h5 className=" text-green text-sm font-bold ">
                        QR. 15,233 / Month{" "}
                      </h5>
                      <h5 className=" text-secondary font-bold uppercase">
                        qr. 433,000{" "}
                      </h5>
                    </div>
                  </div>
                </div>
                <div className=" flex flex-wrap w-[60%] gap-5">
                  <div className="border-4   w-80 border-primary  rounded-2xl overflow-hidden">
                    <div className="   h-44">
                      <img
                        src={require("../../assets/images/image 7.png")}
                        className=" w-full h-full object-cover object-center"
                        alt=""
                      />
                    </div>
                    <div className=" p-2">
                      <h5 className=" text-secondary font-bold uppercase">
                        Chevrolet Camaro 2-door{" "}
                      </h5>
                      <div className="  mt-3 flex justify-between items-center">
                        <div className=" flex gap-2 items-center">
                          <img
                            src={require("../../assets/images/can.png")}
                            className=" w-4"
                            alt=""
                          />
                          <span className=" text-textColor font-bold">
                            2021
                          </span>
                        </div>
                        <div className="flex gap-2 items-center">
                          <img
                            src={require("../../assets/images/cal.png")}
                            className=" w-6"
                            alt=""
                          />
                          <span className=" text-textColor font-bold">
                            4 Cylinder
                          </span>
                        </div>
                        <div className="flex gap-2 items-center">
                          <img
                            src={require("../../assets/images/road.png")}
                            className=" w-4"
                            alt=""
                          />
                          <span className=" text-textColor font-bold">
                            44, 882 KM
                          </span>
                        </div>
                      </div>

                      <div className=" flex justify-between items-center mt-3">
                        <h5 className=" text-green text-sm font-bold ">
                          QR. 15,233 / Month{" "}
                        </h5>
                        <h5 className=" text-secondary font-bold uppercase">
                          qr. 433,000{" "}
                        </h5>
                      </div>
                    </div>
                  </div>
                  <div className="border-4  w-80 border-primary  rounded-2xl overflow-hidden">
                    <div className="   h-44">
                      <img
                        src={require("../../assets/images/image 7.png")}
                        className=" w-full h-full object-cover object-center"
                        alt=""
                      />
                    </div>
                    <div className=" p-2">
                      <h5 className=" text-secondary font-bold uppercase">
                        Chevrolet Camaro 2-door{" "}
                      </h5>
                      <div className="  mt-3 flex justify-between items-center">
                        <div className=" flex gap-2 items-center">
                          <img
                            src={require("../../assets/images/can.png")}
                            className=" w-4"
                            alt=""
                          />
                          <span className=" text-textColor font-bold">
                            2021
                          </span>
                        </div>
                        <div className="flex gap-2 items-center">
                          <img
                            src={require("../../assets/images/cal.png")}
                            className=" w-6"
                            alt=""
                          />
                          <span className=" text-textColor font-bold">
                            4 Cylinder
                          </span>
                        </div>
                        <div className="flex gap-2 items-center">
                          <img
                            src={require("../../assets/images/road.png")}
                            className=" w-4"
                            alt=""
                          />
                          <span className=" text-textColor font-bold">
                            44, 882 KM
                          </span>
                        </div>
                      </div>

                      <div className=" flex justify-between items-center mt-3">
                        <h5 className=" text-green text-sm font-bold ">
                          QR. 15,233 / Month{" "}
                        </h5>
                        <h5 className=" text-secondary font-bold uppercase">
                          qr. 433,000{" "}
                        </h5>
                      </div>
                    </div>
                  </div>
                  <div className="border-4 w-80  border-primary  rounded-2xl overflow-hidden">
                    <div className="   h-44">
                      <img
                        src={require("../../assets/images/image 7.png")}
                        className=" w-full h-full object-cover object-center"
                        alt=""
                      />
                    </div>
                    <div className=" p-2">
                      <h5 className=" text-secondary font-bold uppercase">
                        Chevrolet Camaro 2-door{" "}
                      </h5>
                      <div className="  mt-3 flex justify-between items-center">
                        <div className=" flex gap-2 items-center">
                          <img
                            src={require("../../assets/images/can.png")}
                            className=" w-4"
                            alt=""
                          />
                          <span className=" text-textColor font-bold">
                            2021
                          </span>
                        </div>
                        <div className="flex gap-2 items-center">
                          <img
                            src={require("../../assets/images/cal.png")}
                            className=" w-6"
                            alt=""
                          />
                          <span className=" text-textColor font-bold">
                            4 Cylinder
                          </span>
                        </div>
                        <div className="flex gap-2 items-center">
                          <img
                            src={require("../../assets/images/road.png")}
                            className=" w-4"
                            alt=""
                          />
                          <span className=" text-textColor font-bold">
                            44, 882 KM
                          </span>
                        </div>
                      </div>

                      <div className=" flex justify-between items-center mt-3">
                        <h5 className=" text-green text-sm font-bold ">
                          QR. 15,233 / Month{" "}
                        </h5>
                        <h5 className=" text-secondary font-bold uppercase">
                          qr. 433,000{" "}
                        </h5>
                      </div>
                    </div>
                  </div>
                  <div className="border-4 w-80  border-primary  rounded-2xl overflow-hidden">
                    <div className="   h-44">
                      <img
                        src={require("../../assets/images/image 7.png")}
                        className=" w-full h-full object-cover object-center"
                        alt=""
                      />
                    </div>
                    <div className=" p-2">
                      <h5 className=" text-secondary font-bold uppercase">
                        Chevrolet Camaro 2-door{" "}
                      </h5>
                      <div className="  mt-3 flex justify-between items-center">
                        <div className=" flex gap-2 items-center">
                          <img
                            src={require("../../assets/images/can.png")}
                            className=" w-4"
                            alt=""
                          />
                          <span className=" text-textColor font-bold">
                            2021
                          </span>
                        </div>
                        <div className="flex gap-2 items-center">
                          <img
                            src={require("../../assets/images/cal.png")}
                            className=" w-6"
                            alt=""
                          />
                          <span className=" text-textColor font-bold">
                            4 Cylinder
                          </span>
                        </div>
                        <div className="flex gap-2 items-center">
                          <img
                            src={require("../../assets/images/road.png")}
                            className=" w-4"
                            alt=""
                          />
                          <span className=" text-textColor font-bold">
                            44, 882 KM
                          </span>
                        </div>
                      </div>

                      <div className=" flex justify-between items-center mt-3">
                        <h5 className=" text-green text-sm font-bold ">
                          QR. 15,233 / Month{" "}
                        </h5>
                        <h5 className=" text-secondary font-bold uppercase">
                          qr. 433,000{" "}
                        </h5>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </>
          }
        />
      </div>

      <div className=" mt-28 mb-9 px-10">
        <h2 className=" h2  text-center">Popular Showrooms & Dealers:</h2>

        <hr className=" m-0 border-b-2 w-64 border-primary mt-2 mx-auto" />
        <PopularShowRooms
          items={
            <>
              <div className=" w-72">
                <img src={require("../../assets/images/b1.png")} alt="" />
              </div>
              <div className=" w-72">
                <img src={require("../../assets/images/b2.png")} alt="" />
              </div>
              <div className=" w-72">
                <img src={require("../../assets/images/b3.png")} alt="" />
              </div>
              <div className=" w-72">
                <img src={require("../../assets/images/b4.png")} alt="" />
              </div>
            </>
          }
        />

        <div className=" mt-12">
          <Button
            label={"View Less"}
            className={
              " border-2 ml-auto rounded-3xl border-primary w-48 text-secondary font-bold py-1.5"
            }
          />
        </div>
      </div>

      <div className=" mx-auto container  py-14  px-10 ">
        <h1 className=" pb-10 text-center  font-bold  text-4xl">FAQs</h1>
        {accordions.map((accordion) => (
          <Accordion
            key={accordion.key}
            title={accordion.title}
            data={accordion.data}
            isOpen={accordion.isOpen}
            toggleAccordion={() => toggleAccordion(accordion.key)}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
