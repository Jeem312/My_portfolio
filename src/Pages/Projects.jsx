import React from 'react';

const MyDevelopmentWork = () => {
  const projects = [
    {
      id: 1,
      name: 'Art and Craft Page',
      link: 'https://assignment-10-b3b81.web.app',
      image: 'https://i.postimg.cc/zfkbSh1d/Whats-App-Image-2024-07-03-at-22-10-16-77d40cbf.jpg', // Replace with actual image URLs
      tech: ['React', 'Firebase'],
      overview: 'A beautiful art and craft page showcasing various creative projects with Firebase for data handling.'
    },
    {
      id: 2,
      name: 'Blogging Page',
      link: 'https://bloging-page.web.app',
      image: 'https://i.postimg.cc/KjCRvrnY/Whats-App-Image-2024-07-03-at-22-10-59-c52ec576.jpg', // Replace with actual image URLs
      tech: ['React', 'MongoDB'],
      overview: 'A blogging platform where users can create, read, and comment on posts.'
    },
    {
      id: 3,
      name: 'Asset Management Site',
      link: 'https://assignment-12-f1692.web.app',
      image: 'https://i.postimg.cc/CM2ZNYWV/Whats-App-Image-2024-07-03-at-22-11-56-9e42d618.jpg', // Replace with actual image URLs
      tech: ['React', 'Stripe', 'Firebase'],
      overview: 'An asset management site with payment integration and secure authentication.'
    },
  ];

  return (
    <div className="my-10 px-4">
      <div className="text-center">
        <h1 className='text-[#FF5400] font-bold text-3xl'>My Development Work</h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
        {projects.map((project) => (
          <a key={project.id} href={project.link} target="_blank" rel="noopener noreferrer" className="block border border-gray-200 rounded-lg shadow hover:bg-indigo-100 transition duration-300">
            <img src={project.image} alt={project.name} className="w-full h-48 object-cover rounded-t-lg" />
            <div className="p-4">
              <h2 className="text-xl font-semibold text-gray-700 mb-2">{project.name}</h2>
              <p className="text-gray-500 mb-2">{project.overview}</p>
              <div className="flex flex-wrap mb-2 justify-center items-center">
                {project.tech.map((tech, index) => (
                  <span key={index} className="bg-[#FF5400] text-white text-sm px-2 py-1 rounded mr-2 mb-2">{tech}</span>
                ))}
              </div>
              <p className="text-blue-500 hover:underline">Check out this project!</p>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}

export default MyDevelopmentWork;
