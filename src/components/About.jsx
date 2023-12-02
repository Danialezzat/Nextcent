import React from 'react'

const About = () => {
  return (
    <div>
        <div className='px-4 lg:px-14 max-w-screen-2xl mx-auto my-8' id='about'>
            <div className='md:w-11/12 mx-auto flex flex-col md:flex-row justify-between items-center gap-12'>
                <div>
                    <img src="../../images/about.jpg" alt="" />
                </div>
                <div className='md:w-3/5 mx-auto '>
                    <h2 className='text-4xl text-neutralDGrey font-semibold mb-4 md:w-4/5'>
                        Lorem ipsum dolor sit amet consectetur adipisicing.
                    </h2>
                    <p className='md:w-3/4 text-sm textneutralGrey mb-8'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, laboriosam minima? Quasi, unde iusto totam similique quas quos incidunt magni! Lorem ipsum dolor sit amet.
                    </p>
                    <button className='btn-primary'>Learn More</button>
                </div>
            </div>
        </div>

        <div className='px-4 lg:px-14 max-w-screen-2xl mx-auto bg-neutralSilver py-16 ' >
            <div className='flex flex-col md:flex-row justify-between items-center gap-8 '>
                <div className='md:w-1/2 '>
                    <h2 className='text-4xl text-neutralDGrey font-semibold mb-4 md:w-2/3'>
                        Helping a Local <br /> 
                    <span className='text-brandPrimary'> business reinvent itself</span>
                    </h2>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    </p>
                </div>


                <div className='md:w-1/2 mx-auto flex sm:flex-row flex-col sm:items-center justify-around gap-12'>
                    <div className='space-y-8 '>
                        <div className='flex items-center gap-4'>
                            <img src="../../images/membership.png" height={40} width={40} alt="" />
                            <div>
                                <h4 className='text-2xl text-neutralDGrey font-semibold'>2,345,678</h4>
                                <p>Members</p>
                            </div>
                        </div>
                        <div className='flex items-center gap-4'>
                            <img src="../../images/clubs.png" height={40} width={40} alt="" />
                            <div>
                                <h4 className='text-2xl text-neutralDGrey font-semibold'>2,345,678</h4>
                                <p>Club</p>
                            </div>
                        </div>
                    </div>
                    <div className='space-y-8 '>
                        <div className='flex items-center gap-4'>
                            <img src="../../images/payment.png" height={40} width={40} alt="" />
                            <div>
                                <h4 className='text-2xl text-neutralDGrey font-semibold'>2,345,678</h4>
                                <p>Peyment</p>
                            </div>
                        </div>
                        <div className='flex items-center gap-4'>
                            <img src="../../images/event.png" height={40} width={40} alt="" />
                            <div>
                                <h4 className='text-2xl text-neutralDGrey font-semibold'>2,345,678</h4>
                                <p>Event Booking</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About;