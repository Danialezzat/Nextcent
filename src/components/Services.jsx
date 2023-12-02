import React from 'react'

const Services = () => {

    const services = [
        {
            id: 1,
            title: " Membership Orgnization",
             description: "our membership management software provides full automation of membership renewals and payments",
             image: "../../images/National.png"
        },
        {
            id: 2,
            title: "National Association",
             description: "our membership management software provides full automation of membership renewals and payments",
             image: "../../images/comunity.png"
        },
        {
            id: 3,
            title: "Clubs and Groups",
             description: "our membership management software provides full automation of membership renewals and payments",
             image: "../../images/clubs.png"
        }
    ]

  return (
    <div className='md:px-14 px-4 p-y-16 max-w-screen-2xl mx-auto' id='service'>
        <div className='text-center my-8'>
            <h2 className='text-4xl text-neutralDGrey font-semibold md-2'>Our Clients</h2>
            <p className='text-neutralDGrey '>We have been working with some fortune 500+ clients</p>

            <div className='my-12 flex flex-wrap justify-between items-center gap-8'>
                <img src="../../images/logo1.png" width={50} height={50} alt="" />
                <img src="../../images/logo2.png" width={50} height={50} alt="" />
                <img src="../../images/logo3.png" width={50} height={50} alt="" />
                <img src="../../images/logo4.png" width={50} height={50} alt="" />
                <img src="../../images/logo5.png" width={50} height={50} alt="" />
                <img src="../../images/logo6.webp" width={50} height={50} alt="" />
                <img src="../../images/logo7.png" width={50} height={50} alt="" />
            </div>
        </div>

        <div className='mt-20 md:w-1/2 mx-auto text-center'>
            <h2 className='text-4xl text-neutralDGrey font-semibold md-3'>Manage your intire community in a single system</h2>
            <p className='text-neutralDGrey '>Who is Nextcent suitable for?</p>
        </div>

        <div className='mt-14 grid lg:grid-cols-3 md:grid-cols-2  grid-cols-1 md:w-11/12 mx-auto gap-12'>
            {
                services.map(service => (
                    <div key={service.id} className='px-4 py-8 text-center md:w-[300px] mx-auto md:h-80 rounded-md shadow cursor-pointer hover:-translate-y-5 hover:border-b-4 hover:border-indigo-700 transition-all duration-300 flex items-center justify-center h-full'>
                        <div>
                            <div className='bg-[#E8FSE9] mb-4 h-14 w-14 mx-auto rounded-tl-3xl rounded-br-3xl'>
                                <img className='-ml-5' src={service.image} width={55} height={55} />
                            </div>
                                <h4 className='text-2xl font-bold text-neutralDGreymb-2 px-2'>{service.title}</h4>
                                <p className='text-sm text-neutralGrey'>{service.description}</p>
                        </div>
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default Services