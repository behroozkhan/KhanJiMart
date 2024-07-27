import React from 'react'
import AboutImg from '../../assets/images/AboutSideImg.png';
const AboutHeroRightImg = () => {
  return (
    <div className='w-full xl:w-[50%] lg:w-[50%] md:w-[50%] flex flex-wrap'>
        <img src={AboutImg} alt="main-image" className='w-[100%] h-[500px] object-fit' />
    </div>
  )
}

export default AboutHeroRightImg;