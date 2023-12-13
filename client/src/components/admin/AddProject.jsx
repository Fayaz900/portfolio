import React, { useState } from 'react'
import axios from 'axios';

function AddProject() {

    const [project, setProject] = useState({
        projectName: '',
        image: '',
        title: '',
        stack: '',
        url: '',
        description: '',
      });


    const handleChange = (e) => {
        const { id, value } = e.target;
        setProject((prevProject) => ({
          ...prevProject,
          [id]: value,
        }));
    };

    const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:8980/add', project);
      console.log('Project added successfully:', response.data);
    } catch (error) {
      console.error('Error adding project:', error);
    }
  };

  return (
    <div className="mt-4 flex flex-col bg-gray-900 rounded-lg p-4 shadow-sm">
  <h2 className="text-white font-bold text-lg">Add a new Project</h2>
  <form onSubmit={handleSubmit}>
  <div className="mt-4">
    <label className="text-white" htmlFor="project name">
      Project Name
    </label>
    <input
      placeholder="Enter Project name"
      className="w-full bg-gray-800 rounded-md border-gray-700 text-white px-2 py-1"
      type="text"
      id="projectName"
          value={project.projectName}
          onChange={handleChange}
    />
  </div>
  <div className="mt-4">
    <label className="text-white" htmlFor="image url">
      Image URL
    </label>
    <textarea
      placeholder="Paste Image URL here.."
      className="w-full bg-gray-800 rounded-md border-gray-700 text-white px-2 py-1"
      id="image"
      value={project.image}
      onChange={handleChange}
    />
  </div>
  <div className="mt-4 flex flex-row space-x-2">
    <div className="flex-1">
      <label className="text-white" htmlFor="title">
        Title
      </label>
      <input
        placeholder="Project Title"
        className="w-full bg-gray-800 rounded-md border-gray-700 text-white px-2 py-1"
        id="title"
        value={project.title}
        onChange={handleChange}
        type="text"
      />
    </div>
    <div className="flex-1">
      <label className="text-white" htmlFor="stack">
        Stack
      </label>
      <input
        placeholder="Technologies used.."
        className="w-full bg-gray-800 rounded-md border-gray-700 text-white px-2 py-1"
        id="stack"
        value={project.stack}
        onChange={handleChange}
        type="text"
      />
    </div>
  </div>
  <div className="mt-4 flex flex-row space-x-2">
    <div className="flex-1">
      <label className="text-white" htmlFor="url">
        URL
      </label>
      <input
        placeholder="Enter Github URL"
        className="w-full bg-gray-800 rounded-md border-gray-700 text-white px-2 py-1"
        id="url"
        value={project.url}
        onChange={handleChange}
        type="text"
      />
    </div>

    <div className="flex-1">
      <label className="text-white" htmlFor="description">
        Description
      </label>
      <input
        placeholder="Enter description"
        className="w-full bg-gray-800 rounded-md border-gray-700 text-white px-2 py-1"
        id="description"
        value={project.description}
        onChange={handleChange}
        type="text"
      />
    </div>
    
  </div>
  <div className="mt-4 flex justify-end">
    <button
      className="bg-white text-black rounded-md px-4 py-1 hover:bg-blue-500 hover:text-white transition-all duration-200"
      type="submit"
    >
      Submit
    </button>
  </div>
  </form>
</div>

  )
}

export default AddProject