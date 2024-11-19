import React, { useState } from 'react';
import { FaLink, FaUnlockAlt } from 'react-icons/fa'; // Importing React Icons

const MyDevelopmentWork = () => {
  const [modalContent, setModalContent] = useState(null);

  const projects = [
    {
      id: 1,
      name: 'GiftAp - Virtual Gift Store',
      link: 'https://giftap901.web.app',
      image: 'https://i.ibb.co.com/t2Gntxj/Whats-App-Image-2024-11-02-at-23-52-52-424d4fed.jpg',
      tech: ['React', 'Firebase', 'Payment', 'MongoDB', 'Mvc Pattern'],
      overview: 'A user-friendly e-commerce platform for personalized, real-time gift services aimed at individuals and businesses.',
      category: 'team',
      roleAccess: {
        seller: {
          email: 'aysha@gmail.com',
          password: 'asdfghjkL@1'
        },
        admin: {
          email: 'adiba@gmail.com',
          password: 'asdfghjkL@1'
        }
      }
    },
    {
      id: 2,
      name: 'Laptop Gallery',
      link: 'https://laptop-gallery.netlify.app',
      image: 'https://i.ibb.co.com/WPvVFnL/photo-2024-11-18-14-11-04.jpg',
      tech: ['React', 'Tailwind', 'MongoDB','Express.js','node.js'],
      overview: '**Laptop Gallery** is a responsive platform inspired by Star Tech, designed to help users explore and compare laptops',
      category: 'team'
    },
    {
      id: 3,
      name: 'Asset Management Site',
      link: 'https://assignment-12-f1692.web.app',
      image: 'https://i.postimg.cc/CM2ZNYWV/Whats-App-Image-2024-07-03-at-22-11-56-9e42d618.jpg',
      tech: ['React', 'Stripe', 'Firebase'],
      overview: 'An asset management site with payment integration and secure authentication.',
      category: 'solo',
      roleAccess: {
        hr: {
          email: 'shanjidajeem312@gmail.com',
          password: 'asdfghjkL@1'
        },
        employee: {
          email: 'shamima@gmail.com',
          password: 'asdfghjkL@1'
        }
      }
    },
    {
      id: 4,
      name: 'Blogging Page',
      link: 'https://bloging-page.web.app',
      image: 'https://i.postimg.cc/KjCRvrnY/Whats-App-Image-2024-07-03-at-22-10-59-c52ec576.jpg',
      tech: ['React', 'MongoDB'],
      overview: 'A blogging platform where users can create, read, and comment on posts.',
      category: 'solo'
    },
      // {
    //   id: 5,
    //   name: 'Art and Craft Page',
    //   link: 'https://assignment-10-b3b81.web.app',
    //   image: 'https://i.postimg.cc/zfkbSh1d/Whats-App-Image-2024-07-03-at-22-10-16-77d40cbf.jpg',
    //   tech: ['React', 'Firebase'],
    //   overview: 'A beautiful art and craft page showcasing various creative projects with Firebase for data handling.',
    //   category: 'solo'
    // }
  ];

  const soloProjects = projects.filter(project => project.category === 'solo');
  const teamProjects = projects.filter(project => project.category === 'team');

  return (
    <div className="my-10 px-4">
      {/* Team Projects Section */}
      <div className="my-8">
        <div className='border border-gray-300 my-4'></div>
        <h2 className="text-2xl font-semibold text-indigo-700 mb-4">----Team Projects----</h2>
        <div className='bg-white my-4 mb-8'></div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
          {teamProjects.map((project) => (
            <div key={project.id} className="block border border-gray-200 rounded-lg shadow  transition duration-300 hover:scale-105">
              <img src={project.image} alt={project.name} className="w-full h-1/2 object-cover rounded-lg" />
              <div className="p-4">
                <h2 className="text-xl font-semibold text-white mb-2">{project.name}</h2>
                <p className="text-gray-500 mb-2">{project.overview}</p>
                <div className="flex flex-wrap mb-2 justify-center items-center">
                  {project.tech.map((tech, index) => (
                    <span key={index} className="bg-indigo-400 text-white text-sm px-2 py-1 rounded mr-2 mb-2">{tech}</span>
                  ))}
                </div>
                <div className="flex justify-between items-center mt-4">
                  <button
                    className="border border-gray-300 text-white py-2 px-4 rounded flex items-center space-x-2 hover:bg-blue-600"
                    onClick={() => setModalContent(project)}
                  >
                    <FaUnlockAlt /> <span>Access Details</span>
                  </button>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border border-gray-300 text-white py-2 px-4 rounded flex items-center space-x-2 hover:bg-green-600"
                  >
                    <FaLink /> <span>Live Link</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Solo Projects Section */}
      <div className="mt-12">
        <div className='border border-gray-300 my-4'></div>
        <h2 className="text-2xl font-semibold text-indigo-700 my-4">----Solo Projects----</h2>
        <div className='border border-gray-300 my-4'></div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 my-4">
          {soloProjects.map((project) => (
            <div key={project.id} className="block border border-gray-200 rounded-lg shadow  transition duration-300 hover:scale-105">
              <img src={project.image} alt={project.name} className="w-full h-1/2 object-cover rounded-lg" />
              <div className="p-4">
                <h2 className="text-xl font-semibold text-white mb-2">{project.name}</h2>
                <p className="text-gray-500 mb-2">{project.overview}</p>
                <div className="flex flex-wrap mb-2 justify-center items-center">
                  {project.tech.map((tech, index) => (
                    <span key={index} className="bg-indigo-400 text-white text-sm px-2 py-1 rounded mr-2 mb-2">{tech}</span>
                  ))}
                </div>
                <div className="flex justify-between items-center mt-4 mb-10 pb-8">
                  <button
                    className="border border-gray-300 text-white py-2 px-4 rounded flex items-center space-x-2 hover:bg-blue-600"
                    onClick={() => setModalContent(project)}
                  >
                    <FaUnlockAlt /> <span>Access Details</span>
                  </button>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border border-gray-300 text-white py-2 px-4 rounded flex items-center space-x-2 hover:bg-indigo-600"
                  >
                    <FaLink /> <span>Live Link</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

     {/* Modal for Access Details */}
{modalContent && (
  <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center">
    <div className="bg-white text-gray-800 p-6 rounded-lg shadow-lg w-96">
      <h3 className="text-xl font-semibold mb-4">Access Details for {modalContent.name}</h3>
      {modalContent?.roleAccess?.seller && (
        <p><strong>Seller:</strong> {modalContent.roleAccess.seller.email} / {modalContent.roleAccess.seller.password}</p>
      )}
      {modalContent?.roleAccess?.admin && (
        <p><strong>Admin:</strong> {modalContent.roleAccess.admin.email} / {modalContent.roleAccess.admin.password}</p>
      )}
      {modalContent?.roleAccess?.hr && (
        <p><strong>HR:</strong> {modalContent.roleAccess.hr.email} / {modalContent.roleAccess.hr.password}</p>
      )}
      {modalContent?.roleAccess?.employee && (
        <p><strong>Employee:</strong> {modalContent.roleAccess.employee.email} / {modalContent.roleAccess.employee.password}</p>
      )}
      {!modalContent.roleAccess && (
        <p className="text-gray-500">No access details available for this project.</p>
      )}
      <button
        onClick={() => setModalContent(null)}
        className="bg-red-500 text-white py-2 px-4 rounded mt-4 hover:bg-red-600"
      >
        Close
      </button>
    </div>
  </div>
)}

    </div>
  );
};

export default MyDevelopmentWork;
