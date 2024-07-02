import React from 'react';
import Banner from '../Banner';
import Skills from './Skills';
import MyEducation from './MyEducation';

const Home = () => {
    return (
        <div className='container mx-auto my-24'>
          <Banner></Banner>
            <Skills></Skills>
            <MyEducation></MyEducation>
        </div>
    );
};

export default Home;