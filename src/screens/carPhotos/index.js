import React, { useEffect, useState } from "react";
import { FaAngleRight } from "react-icons/fa6";
import Button from "../../components/Button";
import { LiaLongArrowAltLeftSolid } from "react-icons/lia";
import { LiaLongArrowAltRightSolid } from "react-icons/lia";
import { Link, useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import { Base_url } from "../../utils/Base_url";
import { toast } from "react-toastify";
const CarPhotos = () => {
  const location = useLocation();
  const receivedData = location.state;


  

  console.log(receivedData);

  const navigate = useNavigate();

  const [choose, setChoose] = useState([]);

  console.log(choose, "choose");

  const userId = localStorage.getItem("plane_id");

  useEffect(() => {
    axios
      .get(`${Base_url}/plans/${userId}`)
      .then((res) => {
        console.log(res);
        setChoose(res.data.plan);
      })
      .catch((error) => {});
  }, []);

  const [selectedImages, setSelectedImages] = useState([]);
  const [selectedImage, setSelectedImage] = useState([]);

  console.log(selectedImages);
  console.log(selectedImage);

  useEffect(() => {
    if (choose && choose.photoLimit) {
      setSelectedImages(Array(choose.photoLimit).fill(null));
    }
  }, [choose]);

  const handleFileChange = (index) => (e) => {
    const file = e.target.files[0];
    if (file && file.type.startsWith("image/")) {
      setSelectedImage((prevImages) => {
        const newImages = [...prevImages];
        newImages[index] = file;
        return newImages;
      });

      const reader = new FileReader();
      reader.onload = () => {
        setSelectedImages((prevImages) => {
          const newImages = [...prevImages];
          newImages[index] = reader.result;
          return newImages;
        });
      };
      reader.readAsDataURL(file);
    }
  };


     const [multiple,setMultiple] = useState([])

     console.log(multiple);

    const uploadImages = async()=>{

      if(!selectedImage.length>0){

        toast.success('Please upload your image')

      }else{


        let profilephoto = " ";

        try {
          let param = new FormData();
          selectedImage?.map((item)=>{
            param.append("avatars",item);
          })
       
  
          profilephoto = await axios.post(`${Base_url}/uploadImage`, param);
  
          console.log(profilephoto, "=====profile photo===");
      
          if(profilephoto.status===200){
  
            setMultiple(profilephoto.data)
            navigate(`/contact_details`,{
              state: {
                receivedData: receivedData,
                upload:profilephoto.data,    
              }
            })
          }
        } catch (error) {
          console.log(error);
        }

      }
     


    }




  return (
    <div>
      {" "}
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
            <div className="w-8 h-8 bg-white border-textColor border items-center  rounded-full flex justify-center">
              <p className=" text-textColor">2</p>
            </div>
            <Link to={"/car_details"}>
              <span className="  font-bold text-textColor">Car Details</span>
            </Link>
          </li>
          <li>
            <FaAngleRight className=" text-gray-500" />
          </li>
          <li className=" flex items-center gap-2">
            <div className=" w-8 h-8 bg-primary items-center  rounded-full flex justify-center">
              <p className=" text-white">3</p>
            </div>
            <Link to={"/car_photos"}>
              <span className=" text-primary font-semibold">Photo</span>
            </Link>
          </li>
          <li>
            <FaAngleRight className=" text-gray-500" />
          </li>
          <li className=" flex items-center gap-2">
            <div className=" w-8 h-8 bg-white border-textColor border items-center  rounded-full flex justify-center">
              <p className=" text-textColor">3</p>
            </div>
            <Link to={"/contact_details"}>
              <span className=" text-textColor font-semibold">
                Contact Details
              </span>
            </Link>
          </li>
        </ul>
      </div>
      <div className=" shadow-md rounded-xl text-center mt-8 py-5 px-12 mx-auto  w-[80%]">
        <div className="">
          <h2 className=" h4  text-center">Upload Car Images</h2>
        </div>

        <div className=" flex justify-center mt-5  gap-10 mb-12  flex-wrap">
          {selectedImages.map((image, index) => (
            <>
              <label
                key={index}
                htmlFor={`fileInput${index}`}
                className={
                  image
                    ? "rounded-md border overflow-hidden flex w-32 h-24"
                    : "bg-[#FEFBFB] border rounded-md p-1 w-32 flex justify-center items-center"
                }
              >
                {image ? (
                  <img
                    src={image}
                    className="object-cover w-full h-full"
                    alt={`Selected ${index}`}
                  />
                ) : (
                  <div>
                    <img
                      src={require("../../assets/images/upload.png")}
                      className="mx-auto mb-2 w-16"
                      alt=""
                    />
                    <span className="text-secondary font-semibold mt-2">
                      Upload
                    </span>
                  </div>
                )}
                <input
                  accept="image/*"
                  onChange={handleFileChange(index)}
                  name="images"
                  type="file"
                  id={`fileInput${index}`}
                  className="hidden"
                />
              </label>
            </>
          ))}
        </div>

        <span className=" text-textColor font-bold ">
          Note:Plans: SIlver upto 5 images, Gold upto 10 Images, Platinum upto
          15 Images
        </span>
      </div>
      <div className=" container flex justify-between items-center mx-auto mt-10 mb-20">
        <div className="  flex items-center gap-3">
          <LiaLongArrowAltLeftSolid />
          <span className=" text-textColor font-semibold">Back</span>
        </div>
     
          <Button
          onClick={uploadImages}
            type={"submit"}
            label={"Next"}
            rIcons={<LiaLongArrowAltRightSolid />}
            className={" bg-primary rounded-3xl text-white w-44 py-1.5"}
          />
       
      </div>
    </div>
  );
};

export default CarPhotos;
