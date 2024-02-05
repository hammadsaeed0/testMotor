import React from 'react'
import Button from '../Button'

const SearchForCar = () => {
  return (
    <div className=' container mx-auto mt-16 px-10'>
        
        <h2 className=' h2  text-center'>Search for a car by</h2>

        <hr  className=' m-0 border-b-2 w-64 border-primary mt-2 mx-auto'/>
        <div className='scroll-container mt-8   items-center productOverflow  overflow-x-auto whitespace-nowrap'>
        <div className=' flex  gap-4 justify-center '>
            <Button label={'Body Type'} className={' border-2 py-2.5 border-primary bg-secondary   text-white font-bold rounded-lg w-44'} />
            <Button label={'Brands'} className={' border-2 py-2.5 border-primary text-secondary   font-bold rounded-lg w-44'} />
            <Button label={'Budget'} className={' border-2 py-2.5 border-primary font-bold  text-secondary rounded-lg w-44'} />
            <Button label={'Year'} className={' border-2 py-2.5 border-primary rounded-lg font-bold text-secondary w-44'} />
            <Button label={'Engine Size'} className={' border-2 py-2.5 border-primary rounded-lg font-bold text-secondary w-44'} />
        </div>
        </div>
       
        <div  className=' grid md:grid-cols-6 grid-cols-2 mt-8 gap-10'>
            <div>
                <div className=' text-center'>
                    <img src={require('../../assets/images/car1.png')}  alt='' />
                    <span className=' uppercase text-textColor font-semibold'>SUV</span>
                </div>
            </div>
            <div>
                <div className=' text-center'>
                    <img src={require('../../assets/images/car2.png')}  alt='' />
                    <span className=' uppercase text-textColor font-semibold'>SUV</span>
                </div>
            </div>
            <div>
                <div className=' text-center'>
                    <img src={require('../../assets/images/car3.png')}  alt='' />
                    <span className=' uppercase text-textColor font-semibold'>SUV</span>
                </div>
            </div>
            <div>
                <div className=' text-center'>
                    <img src={require('../../assets/images/car4.png')}  alt='' />
                    <span className=' uppercase text-textColor font-semibold'>SUV</span>
                </div>
            </div>
            <div>
                <div className=' text-center'>
                    <img src={require('../../assets/images/car5.png')}  alt='' />
                    <span className=' uppercase text-textColor font-semibold'>SUV</span>
                </div>
            </div>
            <div>
                <div className=' text-center'>
                    <img src={require('../../assets/images/car5.png')}  alt='' />
                    <span className=' uppercase text-textColor font-semibold'>SUV</span>
                </div>
            </div>
            <div>
                <div className=' text-center'>
                    <img src={require('../../assets/images/car5.png')}  alt='' />
                    <span className=' uppercase text-textColor font-semibold'>SUV</span>
                </div>
            </div>
            <div>
                <div className=' text-center'>
                    <img src={require('../../assets/images/car5.png')}  alt='' />
                    <span className=' uppercase text-textColor font-semibold'>SUV</span>
                </div>
            </div>
            <div>
                <div className=' text-center'>
                    <img src={require('../../assets/images/car5.png')}  alt='' />
                    <span className=' uppercase text-textColor font-semibold'>SUV</span>
                </div>
            </div>
            <div>
                <div className=' text-center'>
                    <img src={require('../../assets/images/car5.png')}  alt='' />
                    <span className=' uppercase text-textColor font-semibold'>SUV</span>
                </div>
            </div>
            <div>
                <div className=' text-center'>
                    <img src={require('../../assets/images/car5.png')}  alt='' />
                    <span className=' uppercase text-textColor font-semibold'>SUV</span>
                </div>
            </div>
            <div>
                <div className=' text-center'>
                    <img src={require('../../assets/images/car5.png')}  alt='' />
                    <span className=' uppercase text-textColor font-semibold'>SUV</span>
                </div>
            </div>
            <div>
                <div className=' text-center'>
                    <img src={require('../../assets/images/car5.png')}  alt='' />
                    <span className=' uppercase text-textColor font-semibold'>SUV</span>
                </div>
            </div>
        </div>

      <div className=' mt-12'>
      <Button label={'View Less'} className={' border-2 ml-auto rounded-3xl border-primary w-48 text-secondary font-bold py-1.5'} />
      </div>
    </div>
  )
}

export default SearchForCar