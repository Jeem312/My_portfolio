import React from 'react';
import { DiMongodb } from 'react-icons/di';
import { FaCss3, FaHtml5, FaJs, FaReact } from 'react-icons/fa';

const Skills = () => {
    return (
        <div className='container mx-auto justify-center items-center my-24'>
        
            <h1 className='flex justify-center items-center font-bold text-4xl'>My <span className='text-indigo-900 mx-2'>Skills</span></h1>
          <div className='grid grid-cols-2 md:grid-cols-4 gap-4 my-14'>
          <div className="card bg-slate-800 w-72 shadow-xl">
  <div className="card-body">
    <h2 className="card-title justify-center items-center  text-white">HTML</h2>
   <div  className=' flex justify-center items-center'>
   <FaHtml5 className='w-24 h-24 flex justify-center items-center  text-orange-700'></FaHtml5>
   </div>
    
  </div>
</div>
          <div className="card bg-slate-800 w-72 shadow-xl">
  <div className="card-body">
    <h2 className="card-title justify-center items-center  text-white">Java Script</h2>
   <div  className=' flex justify-center items-center'>
   <FaJs className='w-24 h-24 flex justify-center items-center  text-yellow-300'></FaJs>
   </div>
    
  </div>
</div>
          <div className="card bg-slate-800 w-72 shadow-xl">
  <div className="card-body">
    <h2 className="card-title justify-center items-center  text-white">CSS</h2>
   <div  className=' flex justify-center items-center'>
   <FaCss3 className='w-24 h-24 flex justify-center items-center  text-blue-400'></FaCss3>
   </div>
    
  </div>
</div>
          <div className="card bg-slate-800 w-72 shadow-xl">
  <div className="card-body">
    <h2 className="card-title justify-center items-center  text-white">ReactJs</h2>
   <div  className=' flex justify-center items-center'>
   <FaReact className='w-24 h-24 flex justify-center items-center  text-blue-600'></FaReact>
   </div>
    
  </div>
</div>
          <div className="card bg-slate-800 w-72 shadow-xl">
  <div className="card-body">
    <h2 className="card-title justify-center items-center  text-white">Firebase</h2>
   <div  className=' flex justify-center items-center'>
   <a href="https://firebase.google.com/" target="_blank" rel="noreferrer"> <img src="https://www.vectorlogo.zone/logos/firebase/firebase-icon.svg" alt="firebase" width="90" height="90"/> </a>
   </div>
    
  </div>
</div>
          <div className="card bg-slate-800 w-72 shadow-xl">
  <div className="card-body">
    <h2 className="card-title justify-center items-center  text-white">MongoDB</h2>
   <div  className=' flex justify-center items-center'>
   <a href="https://www.mongodb.com/" target="_blank" rel="noreferrer">
   <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg" alt="mongodb" width="90" height="90"/> </a> <a href="https://reactjs.org/" target="_blank" rel="noreferrer"></a>
   </div>
    
  </div>
</div>
          <div className="card bg-slate-800 w-72 shadow-xl">
  <div className="card-body">
    <h2 className="card-title justify-center items-center  text-white">TailwindCSS</h2>
   <div  className=' flex justify-center items-center'>
  <a href="https://tailwindcss.com/" target="_blank" rel="noreferrer"> <img src="https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg" alt="tailwind" width="90" height="90"/> </a> 
   </div>
    
  </div>
</div>

          </div>
        </div>
    );
};

export default Skills;