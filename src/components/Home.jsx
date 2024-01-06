import React from 'react'
import { Carousel } from 'flowbite-react';

const Home = () => {
  return (
    <div className='bg-neutralSilver h-[140vh] pt-0 mt-0 p-4' id='home'>
        <div className='px-4 lg:px-4 max-w-screen-3xl mx-auto h-[140vh]  '>
                <Carousel className='w-full mx-auto min-h-[100%]  pt-0 mt-0'>
                    <div className="mb-28 md:mb-8 pb-12 flex flex-col md:flex-row-reverse items-center justify-between  gap-12">
                        <div>
                            <img src="../../images/slide1.png" alt="" />
                        </div>

                        <div className='md:w-1/2'>
                            <h1 className='text-5xl font-semibold mb-4 text-neutralDGrey md:w-3/4 leading-snug'>Lets Learn and Earn Money<span className='text-brandPrimary leading-snug '> from 4 Months</span></h1>
                            <p className='text-neutralGrey text-base mb-8'>
                                Where to grow your business as a photographer: site or social media?
                            </p>
                            <button className='btn-primary'>
                                Register
                            </button>
                        </div>
                    </div>
                    <div className="mb-28 md:mb-8 pb-12 flex flex-col md:flex-row-reverse items-center justify-between  gap-12">
                        <div>
                            <img src="../../images/slide1.png" alt="" />
                        </div>

                        <div className='md:w-1/2'>
                            <h1 className='text-5xl font-semibold mb-4 text-neutralDGrey md:w-3/4 leading-snug'>Lessons and insights <span className='text-brandPrimary leading-snug '>from 8 years</span></h1>
                            <p className='text-neutralGrey text-base mb-8'>
                                Where to grow your business as a photographer: site or social media?
                            </p>
                            <button className='btn-primary'>
                                Register
                            </button>
                        </div>
                    </div>
                    
                </Carousel>
        </div>
    </div>
  )
}

export default Home