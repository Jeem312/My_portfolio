import React from 'react';
import { Typewriter } from 'react-simple-typewriter';

const Hireme = () => {
    const email = 'shanjidajeem312@gmail.com';

    return (
        <div className='container mx-auto my-24'>
            <div className='flex flex-col md:flex-row'>
                <div className='flex-1'>
                    <h1 className='text-5xl font-bold' style={{ paddingTop: '5rem', margin: 'auto 0', fontWeight: 'normal' }}>
                        Let's
                        <span className='mx-2' style={{ color: 'black', fontWeight: 'bold' }}>
                            {/* Style will be inherited from the parent element */}
                            <Typewriter
                                words={['Work Together']}
                                loop={25}
                                typeSpeed={90}
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

            <div className='my-12'>
                <p className='text-xl text-start'>Over the past 6 to 7 months, I have been dedicated to learning and honing my skills in front-end development, building delightful web experiences with a user-centered approach. Even as a fresher, I have worked on numerous projects that showcase my ability to create engaging and user-friendly interfaces using technologies like React.js, HTML, CSS, and more.

                    I am passionate about helping teams understand their users and improve their processes through innovative and efficient web solutions.</p>

                <div className=''>
                    <p className='text-xl text-start font-semibold my-8'>I can help your team with:</p>
                    <div>
                        <p className='text-2xl text-start font-black text-blue-600'>Front-End Development Solutions</p>
                        <ul className='list-disc ml-6'>
                            <li className='text-start my-6'><span className='text-blue-800 font-semibold'>Responsive Design:</span> Ensure that your website looks and functions well on all devices, providing a seamless experience for users.</li>
                            <li className='text-start my-6'><span className='text-blue-800 font-semibold'>User Experience Design/Research:</span> Work with you to design interactions that are easy to use and intuitive for your users.</li>
                            <li className='text-start my-6'><span className='text-blue-800 font-semibold'>Data Visualizations:</span> Tell a story through your data in a way that is easy to understand, self-explanatory, and interesting.</li>
                            <li className='text-start my-6'><span className='text-blue-800 font-semibold'>Advising:</span> Answer technical questions about front-end development best practices, do code reviews, or offer feedback and suggestions for improvement.</li>
                        </ul>
                    </div>

                    <div className='my-8'>
                        <p className='text-2xl text-start font-black text-blue-600'>Team Collaboration</p>
                        <ul className='list-disc ml-6'>
                            <li className='text-start my-6'><span className='text-blue-800 font-semibold'>Project Scoping:</span> Figure out and prioritize the core features of your application based on what your users actually need.</li>
                            <li className='text-start my-6'><span className='text-blue-800 font-semibold'>Debugging Your Team:</span> Help you figure out why your team might be stuck and have trouble focusing on features or delivering them.</li>
                            <li className='text-start my-6'><span className='text-blue-800 font-semibold'>Mentorship, Guidance & Leadership:</span> Brainstorm creative ideas, offer feedback on your written materials and presentations, and help you craft your key messaging.</li>
                        </ul>
                    </div>

                    <p className='text-xl text-start'>If this sounds like something you're interested in, send me an email at <a href={`mailto:${email}`} className="text-blue-600">{email}</a>.</p>
                </div>
            </div>
        </div>
    );
};

export default Hireme;
