import React from 'react';
import { Typewriter } from 'react-simple-typewriter';

const Hireme = () => {
    return (
        <div>
            <div className='flex flex-col md:flex-row'>
                <div className='flex-1'>
                <h1 style={{ paddingTop: '5rem', margin: 'auto 0', fontWeight: 'normal' }}>
        Let's 
        <span style={{ color: 'black', fontWeight: 'bold' }}>
          {/* Style will be inherited from the parent element */}
          <Typewriter
            words={['Work Together']}
            loop={5}
            cursor
            cursorStyle='_'
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
           
          />
        </span>
      </h1>
                </div>
                <div className='flex-1'>
              <img src="https://i.ibb.co/WKD87Yq/6256187.jpg" alt="" />
                </div>
            </div>
        </div>
    );
};

export default Hireme;