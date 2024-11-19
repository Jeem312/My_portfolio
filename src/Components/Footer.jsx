import React from 'react';
import { FaEnvelope, FaFacebook, FaGithub, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="footer footer-center bg-indigo-900 text-base-content rounded p-10">
       
        <nav>
          <div className="grid grid-flow-col gap-4">
          <a href="https://github.com/Jeem312" target="_blank" rel="noopener noreferrer" className='text-white text-3xl'>
                    <FaGithub />
                </a>
                <a href="https://www.facebook.com/profile.php?id=61554856264070&mibextid=ZbWKwL" target="_blank" rel="noopener noreferrer" className='text-white text-3xl'>
                    <FaFacebook />
                </a>
                <a href="https://linkedin.com/in/shanjida-jahan-jeem" target="_blank" rel="noopener noreferrer" className='text-white text-3xl'>
                    <FaLinkedin />
                </a>
                <a href="mailto:shanjidajeem312@gmail.com" className='text-white text-3xl'>
                    <FaEnvelope />
                </a>
          </div>
        </nav>
        <aside>
          <p className='text-white'>Copyright © ${new Date().getFullYear()} -Shanjida Jahan Jeem All right reserved </p>
        </aside>
      </footer>
    );
};

export default Footer;