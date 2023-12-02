import React from 'react'

const Blog = () => {
  const blogs =[
    {id: 1, title: "creat streamlined safeguared Processed with Oneren", image: "../../images/blog1.webp"},
    {id: 2, title: "What are your safeguard responsibilities nd how can you manage them", image: "../../images/blog2.webp"},
    {id: 3, title: "Remapping the membership odel with Traithload Australia", image: "../../images/blog3.webp"},
  ]
  return (
    <div className='px-4 lg:px-14 max-w-screen-2xl mx-auto my-12' id='fag'>
        <div className='text-center md:w-1/2 mx-auto'>
            <h2 className='text-4xl text-neutralDGrey font-semibold mb-4'>
                        Caring is a new marketing
            </h2>
            <p className='text-sm text-neutralGrey mb-8 md:w-3/4 mx-auto'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, laboriosam minima? Quasi, unde iusto totam similique quas quos incidunt magni! Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse ex molestias architecto. Odio corporis, ea sint enim voluptatem soluta tenetur laudantium facere repudiandae, obcaecati et dolores fugiat vel? Veniam, quam!.
            </p>
        </div>

        {/* all blogs */}

        <div className='grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8 items-center justify-between'>
            {
                blogs.map(blog => (
                    <div key={blog.id} className='mx-auto relative mb-12 cursor-pointer'>
                        <img src={blog.image} className='hover:scale-55 transition-all duration-300' />
                        <div className='text-center px-4 py-8 bg-white shadow-lg rounded-md md:w-3/4 mx-auto absolute  left-0 right-0 -bottom-12'>
                            <h3 className='mb-3 text-neutralGrey font-semibold '>{blog.title}</h3>
                            <div className='flex items-center justify-center  gap-8' >
                                    <a href="/" className='font-bold text-brandPrimary hover:text-neutral-700'>Read More...</a>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default Blog