import React from 'react';

const MyDevelopmentWork = () => {
  const projects = [
    {
      id: 1,
      name: 'GiftAp - Virtual Gift Store',
      link: 'https://giftap901.web.app',
      image: 'https://i.ibb.co.com/t2Gntxj/Whats-App-Image-2024-11-02-at-23-52-52-424d4fed.jpg',
      tech: ['React', 'Firebase', 'Payment', 'MongoDB', 'Mvc Pattern'],
      overview: 'A virtual gift store featuring a discount spinner for premium users, recent views, wishlist, and dynamic filtering.',
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
      id: 3,
      name: 'Blogging Page',
      link: 'https://bloging-page.web.app',
      image: 'https://i.postimg.cc/KjCRvrnY/Whats-App-Image-2024-07-03-at-22-10-59-c52ec576.jpg',
      tech: ['React', 'MongoDB'],
      overview: 'A blogging platform where users can create, read, and comment on posts.',
      category: 'solo'
    },
    {
      id: 4,
      name: 'Art and Craft Page',
      link: 'https://assignment-10-b3b81.web.app',
      image: 'https://i.postimg.cc/zfkbSh1d/Whats-App-Image-2024-07-03-at-22-10-16-77d40cbf.jpg',
      tech: ['React', 'Firebase'],
      overview: 'A beautiful art and craft page showcasing various creative projects with Firebase for data handling.',
      category: 'solo'
    }
  ];

  const soloProjects = projects.filter(project => project.category === 'solo');
  const teamProjects = projects.filter(project => project.category === 'team');

  return (
    <div className="my-10 px-4">
      {/* Team Projects Section */}
      <div className="my-8">
        <div className='border border-gray-300 my-4'></div>
        <h2 className="text-2xl font-semibold text-indigo-700 mb-4">----Team Projects----</h2>
        <div className='border border-gray-300 my-4 mb-8'></div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
          {teamProjects.map((project) => (
            <a key={project.id} href={project.link} target="_blank" rel="noopener noreferrer" className="block border border-gray-200 rounded-lg shadow hover:bg-indigo-100 transition duration-300">
              <img src={project.image} alt={project.name} className="w-full h-48 object-cover rounded-t-lg" />
              <div className="p-4">
                <h2 className="text-xl font-semibold text-gray-700 mb-2">{project.name}</h2>
                <p className="text-gray-500 mb-2">{project.overview}</p>
                <div className="flex flex-wrap mb-2 justify-center items-center">
                  {project.tech.map((tech, index) => (
                    <span key={index} className="bg-indigo-400 text-white text-sm px-2 py-1 rounded mr-2 mb-2">{tech}</span>
                  ))}
                </div>
                
                {/* Conditional Role Access Info */}
                {project.roleAccess && (
                  <div className="mt-4 bg-gray-100 p-2 rounded">
                    <h3 className="text-md font-semibold text-gray-600">Access Details:</h3>
                    {project.roleAccess.seller && (
                      <p className="text-sm text-gray-700">
                        <strong>Seller</strong>: {project.roleAccess.seller.email} / {project.roleAccess.seller.password}
                      </p>
                    )}
                    {project.roleAccess.admin && (
                      <p className="text-sm text-gray-700">
                        <strong>Admin</strong>: {project.roleAccess.admin.email} / {project.roleAccess.admin.password}
                      </p>
                    )}
                  </div>
                )}

                <p className="text-blue-500 hover:underline mt-2">Check out this project!</p>
              </div>
            </a>
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
            <a key={project.id} href={project.link} target="_blank" rel="noopener noreferrer" className="block border border-gray-200 rounded-lg shadow hover:bg-indigo-100 transition duration-300">
              <img src={project.image} alt={project.name} className="w-full h-48 object-cover rounded-t-lg" />
              <div className="p-4">
                <h2 className="text-xl font-semibold text-gray-700 mb-2">{project.name}</h2>
                <p className="text-gray-500 mb-2">{project.overview}</p>
                <div className="flex flex-wrap mb-2 justify-center items-center">
                  {project.tech.map((tech, index) => (
                    <span key={index} className="bg-indigo-400 text-white text-sm px-2 py-1 rounded mr-2 mb-2">{tech}</span>
                  ))}
                </div>
                
                {/* Conditional Role Access Info */}
                {project.roleAccess && (
                  <div className="mt-4 bg-gray-100 p-2 rounded">
                    <h3 className="text-md font-semibold text-gray-600">Access Details:</h3>
                    {project.roleAccess.hr && (
                      <p className="text-sm text-gray-700">
                        <strong>HR</strong>: {project.roleAccess.hr.email} / {project.roleAccess.hr.password}
                      </p>
                    )}
                    {project.roleAccess.employee && (
                      <p className="text-sm text-gray-700">
                        <strong>Employee</strong>: {project.roleAccess.employee.email} / {project.roleAccess.employee.password}
                      </p>
                    )}
                  </div>
                )}

                <p className="text-blue-500 hover:underline">Check out this project!</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

export default MyDevelopmentWork;
