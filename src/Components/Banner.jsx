import React from 'react';
import { FaEnvelope, FaFacebook, FaGithub, FaLinkedin } from 'react-icons/fa';

const Banner = () => {
    return (
       <div className='container mx-auto'>
         <div className=' flex flex-col md:flex-row gap-4'>
           <div className='flex-1'>
            <h1 className='text-indigo-800 text-5xl font-bold text-start'>Shanjida  Jahan  Jeem</h1>
            <p className='text-indigo-950 text-xl my-12 text-start'>I'm a passionate front-end developer who builds delightful web experiences. With a strong foundation in React.js, HTML, and CSS, I create engaging and user-friendly interfaces.</p>
            <p className='text-indigo-950 text-xl  text-start'>Even as a fresher, my enthusiasm for web development drives me to continuously learn and stay updated with the latest technologies and best practices. I specialize in crafting responsive and accessible web applications that not only look great but also perform efficiently.</p>
            </div> 
           <div className='flex-1'>
            <img src="https://i.postimg.cc/8592K6yg/971.jpg" alt="" className='rounded-lg' />
            </div> 
        </div>
        <div>
        <p className='text-indigo-950 text-xl my-12 text-start'>I have experience working with MongoDB for database management, React Router for seamless navigation, and implementing various payment methods. For authentication, I rely on Firebase to ensure secure and reliable user access.</p>
        <p className='text-indigo-950 text-xl  text-start'>Although I don't have professional work experience yet, I have completed numerous projects that demonstrate my ability to deliver high-quality web solutions. You can explore my code and projects on GitHub.</p>
        </div>
        <div className='my-12 flex justify-start'>
            <button className='btn bg-[#FF5400] text-white '>Resume</button>
        </div>
        <div className="divider divider-info"></div>
        <div className='flex justify-center items-center space-x-4'>
                <a href="https://github.com/Jeem312" target="_blank" rel="noopener noreferrer" className='text-indigo-900 text-3xl'>
                    <FaGithub />
                </a>
                <a href="https://www.facebook.com/profile.php?id=61554856264070&mibextid=ZbWKwL" target="_blank" rel="noopener noreferrer" className='text-indigo-900 text-3xl'>
                    <FaFacebook />
                </a>
                <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" className='text-indigo-900 text-3xl'>
                    <FaLinkedin />
                </a>
                <a href="mailto:shanjidajeem312@gmail.com" className='text-indigo-900 text-3xl'>
                    <FaEnvelope />
                </a>
              
            </div>
            <div className="divider divider-info"></div>
       </div>
    );
};

export default Banner;