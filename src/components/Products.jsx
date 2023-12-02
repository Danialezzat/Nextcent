import React from 'react'

const Products = () => {
  return (
    <div id='product'>
        <div className='px-4 lg:px-14 max-w-screen-2xl mx-auto my-8'>
            <div className='md:w-11/12 mx-auto flex flex-col md:flex-row justify-between items-center gap-12'>
                <div>
                    <img src="../../images/loging.jpg" alt="" />
                </div>
                <div className='md:w-3/5 mx-auto '>
                    <h2 className='text-4xl text-neutralDGrey font-semibold mb-4 md:w-4/5'>
                        Lorem ipsum dolor sit amet consectetur adipisicing.
                    </h2>
                    <p className='md:w-3/4 text-sm textneutralGrey mb-8'>Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum similique libero delectus repellendus voluptatem quo? adipisicing elit. Architecto, laboriosam minima? Quasi, unde iusto totam similique quas quos incidunt magni! Lorem ipsum dolor sit amet.
                    </p>
                    <button className='btn-primary'>Learn More</button>
                </div>
            </div>
        </div>


{/* company state */}
        <div className='px-4 lg:px-14 max-w-screen-2xl mx-auto bg-neutralSilver py-16 ' >
            <div className='flex flex-col md:flex-row justify-between items-center gap-8 '>
                <div className='md:w-1/3 '>
                    <img src="../../images/tesla.webp" className='rounded-lg' />
                </div>


                {/* state */}

                <div className='md:w-2/3 mx-auto '>
                    <div>
                        <p className='md:w-4/5 text-sm text-neutralGrey mb-8 leading-7'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex officiis incidunt, consectetur magnam, perferendis recusandae aut, voluptatibus quas necessitatibus quo voluptas temporibus eos laboriosam a vitae repellendus fugit? Nemo, unde cupiditate. Corrupti neque consequatur expedita! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Provident aspernatur assumenda placeat, voluptate ratione optio repellendus in reprehenderit. Quidem tempora, placeat amet repellat quo delectus tempore non, iusto a sit cum, rerum optio ratione iste? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia beatae dolor vitae possimus totam numquam voluptatibus, facilis aliquid ad adipisci.
                        </p>
                        <h5 className='text-brandPrimary text-xl font-semibold mb-2'>Tim Smith</h5>
                        <p className='text-base text-neutralGrey mb-8'>British Dragon Boat racing Association</p>
                        <div>
                            <div className='flex items-center gap-8 flex-wrap'>
                                <img src="../../images/logo1.png" width={40} height={40} className='cursor-pointer' alt="" />
                                <img src="../../images/logo2.png" width={40} height={40} className='cursor-pointer' alt="" />
                                <img src="../../images/logo3.png" width={40} height={40} className='cursor-pointer' alt="" />
                                <img src="../../images/logo4.png" width={40} height={40} className='cursor-pointer' alt="" />
                                <img src="../../images/logo5.png" width={40} height={40} className='cursor-pointer' alt="" />
                                <img src="../../images/logo7.png" width={40} height={40} className='cursor-pointer' alt="" />
                                <div flex items-center gap-8>
                                    <a href="/" className='font-bold text-brandPrimary hover:text-neutral-700'>Meet all customers</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Products