import React from 'react'
import DashboardNavbar from '../../NavBAr/DashboardNavbar'
import Header from '../../../../components/header'
import Footer from '../../../../components/footer'
import { FaList, FaSortAmountUpAlt } from 'react-icons/fa'

const GaragePageWhite = () => {
  return (
    <div>
        <Header/>
        <DashboardNavbar/>
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

        <div className=' flex'>

            <div  className=' bg-[#CCDAEB]'>

            </div>
           <div className=' w-[70%]'>
           <div className=' border-primary border-2 p-3 rounded-2xl  w-full'>

</div>
           </div>
            
        </div>

        <Footer/>
    </div>
  )
}

export default GaragePageWhite