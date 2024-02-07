import React from 'react';
import { RiArrowDropDownLine } from 'react-icons/ri';
import { RiSortAsc } from 'react-icons/ri';
import list  from "../../../../assets/images/list.png"
import vector from '../../../../assets/images/Vector.png';
import announcement from '../../../../assets/images/announcement.png'
import group  from  '../../../../assets/images/group.png';
import Pagination from '../../../../components/Pagination/pagination';
import {cardcar,uparrow,stats,refresh, edit, remove, feature,sold} from '../.././../../assets/images/images'
import Header from '../../../../components/header';
import Footer from '../../../../components/footer';
// import CarDetails from '../../../../carDetails';


const Input = ({ Icon, ...props }) => {
  return (
    <div className="relative flex items-center">
      <input {...props} />
      <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
        {Icon}
      </div>
    </div>
  );
};

const ProductData=[
 { img:cardcar,
   carName:'Aston Martin DBX',
   planName:'Silver  Plan',
   uparrow:{uparrow},
   createdAt:"11/22/24",
   expireAt:'12/22/24',
   remainingdays:" 3 Days",
   featured:"Yes",
   row1: [
    { icon: uparrow, text: 'row one first' },
    { icon: stats, text: 'Status' },
    { icon: refresh, text: 'Refresh' }
  ],
  row2:[
    { icon: edit, text: 'row one first' },
    { icon: remove, text: 'Remove' },
    { icon: feature, text: 'feature' },
  ],
 },
 { img:cardcar,
  carName:'Aston Martin DBX',
  planName:'Silver  Plan',
  uparrow:{uparrow},
  featured:"No",
  row1: [
   { icon: uparrow, text: 'row one first' },
   { icon: stats, text: 'Status' },
   { icon: refresh, text: 'Refresh' }
 ],
 row2:[
   { icon: edit, text: 'row one first' },
   { icon: remove, text: 'Remove' },
   { icon: feature, text: 'feature' },
 ],
},
{ img:cardcar,
  carName:'Aston Martin DBX',
  planName:'Silver  Plan',
  uparrow:{uparrow},
  row1: [
   { icon: uparrow, text: 'row one first' },
   { icon: stats, text: 'Status' },
   { icon: refresh, text: 'Refresh' }
 ],
 row2:[
   { icon: edit, text: 'row one first' },
   { icon: remove, text: 'Remove' },
   { icon: feature, text: 'feature' },
 ],
}
];


const MyGarage = () => {
  return (
    <>
    <Header/>
    <div className="flex flex-col items-center  mb-4">
      <div className="mt-16 flex items-center justify-between w-[90%]">
        <h1 className="font-inter text-3xl font-semibold leading-10 tracking-normal text-left">
          Welcome, Elite!
        </h1>
        <div className="relative">
          {/* Search Bar */}
          <Input
            Icon={<RiArrowDropDownLine className="size-7" />}
            placeholder="Filter by listing..."
            className="border-[#D2D2D2] border-2 md:w-50 w-60 pr-10"
          />
        </div>
      </div>


        {/* ------------------------------------- Blue Cards -------------------------------------- */}   
      <div className="w-[90%] h-[215px] top-499px left-112px gap-[35px] flex mb-2 mt-[99px]">
        <div className="w-[332px] h-[215px] px-15 py-34 border-20 rounded-xl justify-between flex" style={{ backgroundColor: "#0C53AB" }}>
          <div className=" text-white mx-[15px] mt-[54px] relative">
              <h1 className='font-inter font-bold text-4xl '>104</h1>
              <p className='text-18'>101 Published Listings</p> 
          </div>
          <img src={list} className='w-[72px] h-[72px] top-5 mt-[54px] mr-2'></img>
        </div>

        <div className="w-[332px] h-[215px] px-15 py-34 border-20 rounded-xl justify-between flex" style={{ backgroundColor: "#0C53AB" }}>
          <div className=" text-white mx-[15px] mt-[54px] relative">
              <h1 className='font-inter font-bold text-4xl '>104</h1>
              <p className='text-18'>101 Published Listings</p> 
          </div>
          <img src={vector} className='w-[72px] h-[72px] top-5 mt-[54px] mr-2'></img>
        </div>

        <div className="w-[332px] h-[215px] px-15 py-34 border-20 rounded-xl justify-between flex" style={{ backgroundColor: "#0C53AB" }}>
          <div className=" text-white mx-[15px] mt-[54px] relative">
              <h1 className='font-inter font-bold text-4xl '>104</h1>
              <p className='text-18'>101 Published Listings</p> 
          </div>
          <img src={announcement} className='w-[72px] h-[72px] top-5 mt-[54px] mr-2'></img>
        </div>

        <div className="w-[332px] h-[215px] px-15 py-34 border-20 rounded-xl justify-between flex" style={{ backgroundColor: "#0C53AB" }}>
          <div className=" text-white mx-[15px] mt-[54px] relative">
              <h1 className='font-inter font-bold text-4xl '>104</h1>
              <p className='text-18'>101 Published Listings</p> 
          </div>
          <img src={group} className='w-[72px] h-[72px] top-5 mt-[54px] mr-2'></img>
        </div>       
      </div>


      <div className="mt-16 flex items-center justify-between w-[90%]">
      
        <div className="relative flex gap-4 ml-3 mb-3">
          {/* Search Bar */}
          <Input
            Icon={<RiArrowDropDownLine className="size-7" />}
            placeholder="Filter by listing..."
            className="border-[#D2D2D2] border-2  rounded-[5px]"
          />
            <Input
            Icon={<RiArrowDropDownLine className="size-7" />}
            placeholder="Filter by listing..."
            className="border-[#D2D2D2] border-2 rounded-[5px]"
          />
        </div>

          
        <div className="relative flex gap-4 ml-3 mb-3">
          {/* Search Bar */}
          <Input
            Icon={<RiSortAsc className="size-3" />}
            placeholder="Sort By:Newly Added"
            // style={{ fontSize: '10px' }}
            className="border-[#D2D2D2] border-2 color=[#8B8989]"
          />
        </div>

      </div>

    
  
    {/* ------------------------------------- main product card -------------------------------------- */}   
    <div className="w-[90%]">
  <div className=" ml-4 mb-2">
    <Pagination currentPage={1} itemsPerPage={3} totalItems={ProductData?.length} />
  </div>
  <div className="flex justify-between justify-end">
    {/* Use map to create cards */}
    {ProductData?.map((product, index) => (
      <div
        key={index}
        className={`p-4 bg-[#F3F3F5] h-[460px] w-[350px] rounded-[20px] mt-2 ${product.featured === 'Yes' ? ' border-sky-800' : 'border-blue-500'}`}

      > 
        {/* Display card content */}
        <div className="flex-col w-[350px]">
          <img src={product.img} alt={product?.carName} className="h-[160px] w-[320px]" />
          <h2 className="text-xl font-bold p-2 text-center">{product?.carName}</h2>
          <p className="text-center">{product?.planName}</p>
        </div>

        {/* Display actions - Row 1 */}
        <div className="flex justify-center gap-3 mt-1 w-[320px]">
          {product?.row1.map((action, actionIndex) => (
            <div
              key={actionIndex}
              className="w-[100px] h-[50px] bg-[#0C53AB] rounded-[5px] text-white text-center"
            >
              <div className="w-full text-center mt-2">
                <img src={action.icon} className="mx-auto h-5" alt="Icon" />
                <p className="ml-2 text-sm">{action.text}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Display actions - Row 2 */}
        <div className="flex gap-3 mt-4 justify-center w-[320px]">
          {product?.row2.map((action, actionIndex) => (
            <div
              key={actionIndex}
              className="w-[100px] h-[50px] bg-[#0C53AB] rounded-[5px] text-white text-center"
            >
              <div className="w-full text-center mt-2">
                <img src={action.icon} className="mx-auto h-5" alt="Icon" />
                <p className="ml-2 text-sm">{action.text}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Sold indicator */}
        <div className="w-[320px] h-[30px] bg-[#FB5722] rounded mt-2 text-bold justify-center text-white font-bold flex align-center">
          <img src={sold} className="h-[20px] mt-1 mr-1" alt="Sold" />
          <p className="mt-[3px]"> Car Sold</p>
        </div>

        {/* Featured Ad information */}
        <div className='flex gap-x-3 flex-wrap font-bold text-[#666564] text-center'>
          {product?.featured && (
            <div>
              <div className='flex gap-3 '>
                <p>Created: {product?.createdAt}</p>
                <p>Expires: {product?.expireAt}</p>
              </div>
              <div> Featured Ad Days Remaining: {product?.remainingdays}</div>
             
            </div>
          )}{console.log(product?.featured)}
        </div>
      </div>
    ))}
  </div>
</div>


   
    
    </div>
    <Footer/>
    </>
  );
};

export default MyGarage;
