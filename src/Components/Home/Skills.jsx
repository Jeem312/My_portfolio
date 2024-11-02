import React from 'react';
import { DiMongodb } from 'react-icons/di';
import { FaCss3, FaHtml5, FaJs, FaReact, FaGithub } from 'react-icons/fa';

const Skills = () => {
    return (
        <div className='container mx-auto justify-center items-center my-24'>
            <h1 className='flex justify-center items-center font-bold text-4xl'>My <span className='text-indigo-900 mx-2'>Skills</span></h1>
            <div className='grid grid-cols-1 md:grid-cols-4 gap-4 my-14'>

                {/* HTML Card */}
                <div className="card bg-slate-800 w-72 shadow-xl">
                    <div className="card-body">
                        <h2 className="card-title justify-center items-center text-white">HTML</h2>
                        <div className='flex justify-center items-center'>
                            <FaHtml5 className='w-24 h-24 text-orange-700' />
                        </div>
                    </div>
                </div>

                {/* JavaScript Card */}
                <div className="card bg-slate-800 w-72 shadow-xl">
                    <div className="card-body">
                        <h2 className="card-title justify-center items-center text-white">JavaScript</h2>
                        <div className='flex justify-center items-center'>
                            <FaJs className='w-24 h-24 text-yellow-300' />
                        </div>
                    </div>
                </div>

                {/* CSS Card */}
                <div className="card bg-slate-800 w-72 shadow-xl">
                    <div className="card-body">
                        <h2 className="card-title justify-center items-center text-white">CSS</h2>
                        <div className='flex justify-center items-center'>
                            <FaCss3 className='w-24 h-24 text-blue-400' />
                        </div>
                    </div>
                </div>

                {/* ReactJS Card */}
                <div className="card bg-slate-800 w-72 shadow-xl">
                    <div className="card-body">
                        <h2 className="card-title justify-center items-center text-white">ReactJS</h2>
                        <div className='flex justify-center items-center'>
                            <FaReact className='w-24 h-24 text-blue-600' />
                        </div>
                    </div>
                </div>

                {/* Firebase Card */}
                <div className="card bg-slate-800 w-72 shadow-xl">
                    <div className="card-body">
                        <h2 className="card-title justify-center items-center text-white">Firebase</h2>
                        <div className='flex justify-center items-center'>
                            <a href="https://firebase.google.com/" target="_blank" rel="noreferrer">
                                <img src="https://www.vectorlogo.zone/logos/firebase/firebase-icon.svg" alt="firebase" width="90" height="90" />
                            </a>
                        </div>
                    </div>
                </div>

                {/* MongoDB Card */}
                <div className="card bg-slate-800 w-72 shadow-xl">
                    <div className="card-body">
                        <h2 className="card-title justify-center items-center text-white">MongoDB</h2>
                        <div className='flex justify-center items-center'>
                            <a href="https://www.mongodb.com/" target="_blank" rel="noreferrer">
                                <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg" alt="mongodb" width="90" height="90" />
                            </a>
                        </div>
                    </div>
                </div>

                {/* TailwindCSS Card */}
                <div className="card bg-slate-800 w-72 shadow-xl">
                    <div className="card-body">
                        <h2 className="card-title justify-center items-center text-white">TailwindCSS</h2>
                        <div className='flex justify-center items-center'>
                            <a href="https://tailwindcss.com/" target="_blank" rel="noreferrer">
                                <img src="https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg" alt="tailwind" width="90" height="90" />
                            </a>
                        </div>
                    </div>
                </div>

                {/* Node.js Card */}
                <div className="card bg-slate-800 w-72 shadow-xl">
                    <div className="card-body">
                        <h2 className="card-title justify-center items-center text-white">Node.js</h2>
                        <div className='flex justify-center items-center'>
                            <a href="https://nodejs.org/" target="_blank" rel="noreferrer">
                                <img src="https://www.vectorlogo.zone/logos/nodejs/nodejs-icon.svg" alt="nodejs" width="90" height="90" />
                            </a>
                        </div>
                    </div>
                </div>

                {/* Express.js Card */}
                <div className="card bg-slate-800 w-72 shadow-xl">
                    <div className="card-body">
                        <h2 className="card-title justify-center items-center text-white">Express.js</h2>
                        <div className='flex justify-center items-center'>
                            <a href="https://expressjs.com/" target="_blank" rel="noreferrer">
                                <img src="https://www.vectorlogo.zone/logos/expressjs/expressjs-icon.svg" alt="expressjs" width="90" height="90" />
                            </a>
                        </div>
                    </div>
                </div>

                {/* Vercel Card */}
                <div className="card bg-slate-800 w-72 shadow-xl">
                    <div className="card-body">
                        <h2 className="card-title justify-center items-center text-white">Vercel</h2>
                        <div className='flex justify-center items-center'>
                            <a href="https://vercel.com/" target="_blank" rel="noreferrer">
                                <img src="https://www.vectorlogo.zone/logos/vercel/vercel-icon.svg" alt="vercel" width="90" height="90" />
                            </a>
                        </div>
                    </div>
                </div>

                {/* Netlify Card */}
                <div className="card bg-slate-800 w-72 shadow-xl">
                    <div className="card-body">
                        <h2 className="card-title justify-center items-center text-white">Netlify</h2>
                        <div className='flex justify-center items-center'>
                            <a href="https://www.netlify.com/" target="_blank" rel="noreferrer">
                                <img src="https://www.vectorlogo.zone/logos/netlify/netlify-icon.svg" alt="netlify" width="90" height="90" />
                            </a>
                        </div>
                    </div>
                </div>

                {/* GitHub Card */}
                <div className="card bg-slate-800 w-72 shadow-xl">
                    <div className="card-body">
                        <h2 className="card-title justify-center items-center text-white">GitHub</h2>
                        <div className='flex justify-center items-center'>
                            <a href="https://github.com/" target="_blank" rel="noreferrer">
                                <FaGithub className='w-24 h-24 text-white' />
                            </a>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Skills;
