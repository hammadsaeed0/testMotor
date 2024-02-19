import React, { useEffect, useRef, useState } from "react";

const FeaturedCars = ({
  children: slides,
  autoSlide = false,
  autoSlideInterval = 3000,
}) => {
  const scrollContainerRef = useRef(null);

  const sliders = [
    require("../../assets/images/image 7.png"),
    require("../../assets/images/home.png"),
  ];

  const [curr, setCurr] = useState(0);
  const prev = () =>
    setCurr((curr) => (curr === 0 ? sliders.length - 1 : curr - 1));
  const next = () =>
    setCurr((curr) => (curr === sliders.length - 1 ? 0 : curr + 1));

  useEffect(() => {
    if (!autoSlide) return;
    const slideInterval = setInterval(next, autoSlideInterval);
    return () => clearInterval(slideInterval);
  }, []);

  const isAtStart = curr === 0;
  const isAtEnd = curr === sliders.length - 1;

  return (
    <div className="  overflow-hidden    relative w-full ">
      <div
        ref={scrollContainerRef}
        className=" flex     transition-transform ease-out duration-500"
        style={{ transform: `translateX(-${curr * 100}%)` }}
      >
        
        <div className="flex-none   w-full h-full">
          <div className="mt-14 w-[90%]  mx-auto md:flex block gap-6">
            <div className="border-4  md:w-[48%]   bg-cards  sm:block md:hidden lg:block xl:block w-[100%] border-primary  rounded-2xl overflow-hidden">
              <div className="   md:h-[500px] h-64">
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
                <div className="  mt-3 sm:flex block justify-between items-center">
                  <div className=" flex justify-between gap-2 items-center">
                    <img
                      src={require("../../assets/images/can.png")}
                      className=" w-4"
                      alt=""
                    />
                    <span className=" text-textColor font-bold sm:text-base text-sm">2021</span>
                  </div>
                  <div className="flex justify-between gap-2 items-center">
                    <img
                      src={require("../../assets/images/cal.png")}
                      className=" w-6"
                      alt=""
                    />
                    <span className=" text-textColor font-bold sm:text-base text-sm">
                      4 Cylinder
                    </span>
                  </div>
                  <div className="flex justify-between gap-2 items-center">
                    <img
                      src={require("../../assets/images/road.png")}
                      className=" w-4"
                      alt=""
                    />
                    <span className=" text-textColor font-bold sm:text-base text-sm">
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
            <div className="  grid  grid-cols-2 md:mt-0 mt-9  lg:w-[60%] w-[100%] gap-5">
              <div className="border-4   md:block hidden lg:w-80  w-80 border-primary  rounded-2xl overflow-hidden">
                <div className="   h-44">
                  <img
                    src={require("../../assets/images/image 7.png")}
                    className=" w-full h-full object-cover object-center"
                    alt=""
                  />
                </div>
                <div className=" p-2">
                  <h5 className=" text-secondary  md:text-base text-xs font-bold uppercase">
                    Chevrolet Camaro 2-door{" "}
                  </h5>
                  <div className="  md:mt-3 mt-0 md:flex block justify-between items-center">
                    <div className=" flex gap-2 justify-between items-center">
                      <img
                        src={require("../../assets/images/can.png")}
                        className=" w-4"
                        alt=""
                      />
                      <span className=" text-textColor md:text-sm text-xs font-bold">
                        2021
                      </span>
                    </div>
                    <div className="flex  justify-between gap-2 items-center">
                      <img
                        src={require("../../assets/images/cal.png")}
                        className=" w-6"
                        alt=""
                      />
                      <span className=" text-textColor md:text-sm text-xs font-bold">
                        4 Cylinder
                      </span>
                    </div>
                    <div className="flex justify-between gap-2 items-center">
                      <img
                        src={require("../../assets/images/road.png")}
                        className=" w-4"
                        alt=""
                      />
                      <span className=" text-textColor md:text-sm text-xs font-bold">
                        44, 882 KM
                      </span>
                    </div>
                  </div>

                  <div className=" md:flex block justify-between items-center mt-3">
                    <h5 className=" text-green text-sm font-bold ">
                      QR. 15,233 / Month{" "}
                    </h5>
                    <h5 className=" text-secondary font-bold uppercase">
                      qr. 433,000{" "}
                    </h5>
                  </div>
                </div>
              </div>
              <div className="border-4  md:block hidden  lg:w-80  w-80 border-primary  rounded-2xl overflow-hidden">
                <div className="   h-44">
                  <img
                    src={require("../../assets/images/image 7.png")}
                    className=" w-full h-full object-cover object-center"
                    alt=""
                  />
                </div>
                <div className=" p-2">
                  <h5 className=" text-secondary  md:text-base text-xs font-bold uppercase">
                    Chevrolet Camaro 2-door{" "}
                  </h5>
                  <div className="  md:mt-3 mt-0 md:flex block justify-between items-center">
                    <div className=" flex gap-2 justify-between items-center">
                      <img
                        src={require("../../assets/images/can.png")}
                        className=" w-4"
                        alt=""
                      />
                      <span className=" text-textColor md:text-sm text-xs font-bold">
                        2021
                      </span>
                    </div>
                    <div className="flex  justify-between gap-2 items-center">
                      <img
                        src={require("../../assets/images/cal.png")}
                        className=" w-6"
                        alt=""
                      />
                      <span className=" text-textColor md:text-sm text-xs font-bold">
                        4 Cylinder
                      </span>
                    </div>
                    <div className="flex justify-between gap-2 items-center">
                      <img
                        src={require("../../assets/images/road.png")}
                        className=" w-4"
                        alt=""
                      />
                      <span className=" text-textColor md:text-sm text-xs font-bold">
                        44, 882 KM
                      </span>
                    </div>
                  </div>

                  <div className=" md:flex block justify-between items-center mt-3">
                    <h5 className=" text-green text-sm font-bold ">
                      QR. 15,233 / Month{" "}
                    </h5>
                    <h5 className=" text-secondary font-bold uppercase">
                      qr. 433,000{" "}
                    </h5>
                  </div>
                </div>
              </div>
              <div className="border-4  md:block hidden  lg:w-80  w-80 border-primary  rounded-2xl overflow-hidden">
                <div className="   h-44">
                  <img
                    src={require("../../assets/images/image 7.png")}
                    className=" w-full h-full object-cover object-center"
                    alt=""
                  />
                </div>
                <div className=" p-2">
                  <h5 className=" text-secondary  md:text-base text-xs font-bold uppercase">
                    Chevrolet Camaro 2-door{" "}
                  </h5>
                  <div className="  md:mt-3 mt-0 md:flex block justify-between items-center">
                    <div className=" flex gap-2 justify-between items-center">
                      <img
                        src={require("../../assets/images/can.png")}
                        className=" w-4"
                        alt=""
                      />
                      <span className=" text-textColor md:text-sm text-xs font-bold">
                        2021
                      </span>
                    </div>
                    <div className="flex  justify-between gap-2 items-center">
                      <img
                        src={require("../../assets/images/cal.png")}
                        className=" w-6"
                        alt=""
                      />
                      <span className=" text-textColor md:text-sm text-xs font-bold">
                        4 Cylinder
                      </span>
                    </div>
                    <div className="flex justify-between gap-2 items-center">
                      <img
                        src={require("../../assets/images/road.png")}
                        className=" w-4"
                        alt=""
                      />
                      <span className=" text-textColor md:text-sm text-xs font-bold">
                        44, 882 KM
                      </span>
                    </div>
                  </div>

                  <div className=" md:flex block justify-between items-center mt-3">
                    <h5 className=" text-green text-sm font-bold ">
                      QR. 15,233 / Month{" "}
                    </h5>
                    <h5 className=" text-secondary font-bold uppercase">
                      qr. 433,000{" "}
                    </h5>
                  </div>
                </div>
              </div>
              <div className="border-4  md:block hidden  lg:w-80  w-80 border-primary  rounded-2xl overflow-hidden">
                <div className="   h-44">
                  <img
                    src={require("../../assets/images/image 7.png")}
                    className=" w-full h-full object-cover object-center"
                    alt=""
                  />
                </div>
                <div className=" p-2">
                  <h5 className=" text-secondary  md:text-base text-xs font-bold uppercase">
                    Chevrolet Camaro 2-door{" "}
                  </h5>
                  <div className="  md:mt-3 mt-0 md:flex block justify-between items-center">
                    <div className=" flex gap-2 justify-between items-center">
                      <img
                        src={require("../../assets/images/can.png")}
                        className=" w-4"
                        alt=""
                      />
                      <span className=" text-textColor md:text-sm text-xs font-bold">
                        2021
                      </span>
                    </div>
                    <div className="flex  justify-between gap-2 items-center">
                      <img
                        src={require("../../assets/images/cal.png")}
                        className=" w-6"
                        alt=""
                      />
                      <span className=" text-textColor md:text-sm text-xs font-bold">
                        4 Cylinder
                      </span>
                    </div>
                    <div className="flex justify-between gap-2 items-center">
                      <img
                        src={require("../../assets/images/road.png")}
                        className=" w-4"
                        alt=""
                      />
                      <span className=" text-textColor md:text-sm text-xs font-bold">
                        44, 882 KM
                      </span>
                    </div>
                  </div>

                  <div className=" md:flex block justify-between items-center mt-3">
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
        </div>
        <div className="flex-none   w-full h-full">
          <div className="mt-14 w-[90%]  mx-auto md:flex block gap-6">
            <div className="border-4  md:w-[48%] w-[100%] border-primary  rounded-2xl overflow-hidden">
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
            <div className="  grid  grid-cols-2 md:mt-0 mt-9  md:w-[60%] w-[100%] gap-5">
              <div className="border-4   md:block hidden md:w-80  w-56 border-primary  rounded-2xl overflow-hidden">
                <div className="   h-44">
                  <img
                    src={require("../../assets/images/image 7.png")}
                    className=" w-full h-full object-cover object-center"
                    alt=""
                  />
                </div>
                <div className=" p-2">
                  <h5 className=" text-secondary  md:text-base text-xs font-bold uppercase">
                    Chevrolet Camaro 2-door{" "}
                  </h5>
                  <div className="  md:mt-3 mt-0 md:flex block justify-between items-center">
                    <div className=" flex gap-2 justify-between items-center">
                      <img
                        src={require("../../assets/images/can.png")}
                        className=" w-4"
                        alt=""
                      />
                      <span className=" text-textColor md:text-sm text-xs font-bold">
                        2021
                      </span>
                    </div>
                    <div className="flex  justify-between gap-2 items-center">
                      <img
                        src={require("../../assets/images/cal.png")}
                        className=" w-6"
                        alt=""
                      />
                      <span className=" text-textColor md:text-sm text-xs font-bold">
                        4 Cylinder
                      </span>
                    </div>
                    <div className="flex justify-between gap-2 items-center">
                      <img
                        src={require("../../assets/images/road.png")}
                        className=" w-4"
                        alt=""
                      />
                      <span className=" text-textColor md:text-sm text-xs font-bold">
                        44, 882 KM
                      </span>
                    </div>
                  </div>

                  <div className=" md:flex block justify-between items-center mt-3">
                    <h5 className=" text-green text-sm font-bold ">
                      QR. 15,233 / Month{" "}
                    </h5>
                    <h5 className=" text-secondary font-bold uppercase">
                      qr. 433,000{" "}
                    </h5>
                  </div>
                </div>
              </div>
              <div className="border-4  md:block hidden  md:w-80  w-56 border-primary  rounded-2xl overflow-hidden">
                <div className="   h-44">
                  <img
                    src={require("../../assets/images/image 7.png")}
                    className=" w-full h-full object-cover object-center"
                    alt=""
                  />
                </div>
                <div className=" p-2">
                  <h5 className=" text-secondary  md:text-base text-xs font-bold uppercase">
                    Chevrolet Camaro 2-door{" "}
                  </h5>
                  <div className="  md:mt-3 mt-0 md:flex block justify-between items-center">
                    <div className=" flex gap-2 justify-between items-center">
                      <img
                        src={require("../../assets/images/can.png")}
                        className=" w-4"
                        alt=""
                      />
                      <span className=" text-textColor md:text-sm text-xs font-bold">
                        2021
                      </span>
                    </div>
                    <div className="flex  justify-between gap-2 items-center">
                      <img
                        src={require("../../assets/images/cal.png")}
                        className=" w-6"
                        alt=""
                      />
                      <span className=" text-textColor md:text-sm text-xs font-bold">
                        4 Cylinder
                      </span>
                    </div>
                    <div className="flex justify-between gap-2 items-center">
                      <img
                        src={require("../../assets/images/road.png")}
                        className=" w-4"
                        alt=""
                      />
                      <span className=" text-textColor md:text-sm text-xs font-bold">
                        44, 882 KM
                      </span>
                    </div>
                  </div>

                  <div className=" md:flex block justify-between items-center mt-3">
                    <h5 className=" text-green text-sm font-bold ">
                      QR. 15,233 / Month{" "}
                    </h5>
                    <h5 className=" text-secondary font-bold uppercase">
                      qr. 433,000{" "}
                    </h5>
                  </div>
                </div>
              </div>
              <div className="border-4  md:block hidden  md:w-80  w-56 border-primary  rounded-2xl overflow-hidden">
                <div className="   h-44">
                  <img
                    src={require("../../assets/images/image 7.png")}
                    className=" w-full h-full object-cover object-center"
                    alt=""
                  />
                </div>
                <div className=" p-2">
                  <h5 className=" text-secondary  md:text-base text-xs font-bold uppercase">
                    Chevrolet Camaro 2-door{" "}
                  </h5>
                  <div className="  md:mt-3 mt-0 md:flex block justify-between items-center">
                    <div className=" flex gap-2 justify-between items-center">
                      <img
                        src={require("../../assets/images/can.png")}
                        className=" w-4"
                        alt=""
                      />
                      <span className=" text-textColor md:text-sm text-xs font-bold">
                        2021
                      </span>
                    </div>
                    <div className="flex  justify-between gap-2 items-center">
                      <img
                        src={require("../../assets/images/cal.png")}
                        className=" w-6"
                        alt=""
                      />
                      <span className=" text-textColor md:text-sm text-xs font-bold">
                        4 Cylinder
                      </span>
                    </div>
                    <div className="flex justify-between gap-2 items-center">
                      <img
                        src={require("../../assets/images/road.png")}
                        className=" w-4"
                        alt=""
                      />
                      <span className=" text-textColor md:text-sm text-xs font-bold">
                        44, 882 KM
                      </span>
                    </div>
                  </div>

                  <div className=" md:flex block justify-between items-center mt-3">
                    <h5 className=" text-green text-sm font-bold ">
                      QR. 15,233 / Month{" "}
                    </h5>
                    <h5 className=" text-secondary font-bold uppercase">
                      qr. 433,000{" "}
                    </h5>
                  </div>
                </div>
              </div>
              <div className="border-4  md:block hidden  md:w-80  w-56 border-primary  rounded-2xl overflow-hidden">
                <div className="   h-44">
                  <img
                    src={require("../../assets/images/image 7.png")}
                    className=" w-full h-full object-cover object-center"
                    alt=""
                  />
                </div>
                <div className=" p-2">
                  <h5 className=" text-secondary  md:text-base text-xs font-bold uppercase">
                    Chevrolet Camaro 2-door{" "}
                  </h5>
                  <div className="  md:mt-3 mt-0 md:flex block justify-between items-center">
                    <div className=" flex gap-2 justify-between items-center">
                      <img
                        src={require("../../assets/images/can.png")}
                        className=" w-4"
                        alt=""
                      />
                      <span className=" text-textColor md:text-sm text-xs font-bold">
                        2021
                      </span>
                    </div>
                    <div className="flex  justify-between gap-2 items-center">
                      <img
                        src={require("../../assets/images/cal.png")}
                        className=" w-6"
                        alt=""
                      />
                      <span className=" text-textColor md:text-sm text-xs font-bold">
                        4 Cylinder
                      </span>
                    </div>
                    <div className="flex justify-between gap-2 items-center">
                      <img
                        src={require("../../assets/images/road.png")}
                        className=" w-4"
                        alt=""
                      />
                      <span className=" text-textColor md:text-sm text-xs font-bold">
                        44, 882 KM
                      </span>
                    </div>
                  </div>

                  <div className=" md:flex block justify-between items-center mt-3">
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
        </div>
      </div>

      <div className="">
        <button
           className={`arrow arrow-left absolute md:left-6 left-1 flex pr-1 justify-center items-center top-80  rounded-full bg-secondary sm:w-16 sm:h-16 w-12 h-12 ${isAtStart ? 'opacity-50 pointer-events-none' : ''}`}
          onClick={prev}
          disabled={isAtStart}
        >
        
          <img
            src={require("../../assets/images/leftarrow.png")}
            className=" sm:w-6 w-4"
            alt=""
          />
        </button>
        <button
          className={`arrow arrow-right absolute md:right-6 right-1 flex justify-center pl-1 items-center top-80  rounded-full bg-secondary sm:w-16 sm:h-16 w-12 h-12 ${isAtEnd ? 'opacity-50 pointer-events-none' : ''}`}
          onClick={next}
          disabled={isAtEnd}
        >
        
          <img
            src={require("../../assets/images/rightarrow.png")}
            className=" sm:w-6 w-4"
            alt=""
          />
        </button>
      </div>
    </div>
  );
};

export default FeaturedCars;
