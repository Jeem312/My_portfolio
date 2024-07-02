import React from 'react';

const MyEducation = () => {
    return (
        <div className="hero  ">
            <div className="hero-content flex-col lg:flex-row">
                <div className='flex-1 relative'>
                    <img src="https://i.postimg.cc/BZmxPfhD/city-committed-education-collage-concept.jpg" className="w-3/4 rounded-lg shadow-2xl" />
                    <img src="https://i.postimg.cc/0ybKw661/front-view-stacked-books-graduation-cap-open-book-education-day.jpg" className="w-1/2 absolute right-5 top-1/2 rounded-lg border-8 border-white shadow-2xl" />
                </div>
               
                <div className='flex-1 '>
              
                   <h1 className='flex justify-start text-3xl font-bold text-blue-800'>My Education </h1>
                   <div className='my-6'>
                   <p className='text-blue-500 font-bold text-start'>2019: Completed SSC from Sataish School and College</p>
                   <p className='text-start'>I completed my Secondary School Certificate (SSC) in 2019 at Sataish School and College. </p>
                   </div>
                   <div className='my-6'>
                   <p className='text-blue-500 font-bold text-start'>2021: Completed HSC from Nawab Habibulla Model School and College</p>
                   <p className='text-start'>In 2021, I completed my Higher Secondary Certificate (HSC) at Nawab Habibulla Model School and College. This period of my education further enhanced my analytical abilities and prepared me for higher education. My performance during this time was instrumental in shaping my future academic and career goals.
                   </p>
                   </div>
                   <div className='my-6'>
                   <p className='text-blue-500 font-bold text-start'>Present: Pursuing Honors in Economics from Govt. Titumir College</p>
                   <p className='text-start'>Currently, I am pursuing an honors degree in Economics from Govt. Titumir College. This program is equipping me with a deep understanding of economic theories, quantitative methods, and their applications in real-world scenarios. The skills I am gaining in economics, such as data analysis and strategic thinking, complement my technical skills in web development and broaden my perspective on solving complex problems.
                   </p>
                   </div>
                   <div className='my-6'>
                   <p className='text-blue-500 font-bold text-start'>Completed: Junior Web Development Course from Programming Hero (Online Platform)</p>
                   <p className='text-start'>I have completed a Junior Web Development course from the Programming Hero online platform. This comprehensive program covered essential web development technologies and tools, including HTML, CSS, JavaScript, and React.js. The course also provided hands-on experience with MongoDB for database management, React Router for navigation, and Firebase for authentication. This practical training has been crucial in building my capabilities as a front-end developer
                   </p>
                   </div>
                  
                </div>
            </div>
        </div>
    );
};

export default MyEducation;