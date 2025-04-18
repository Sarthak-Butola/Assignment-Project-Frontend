import React, { useState } from 'react';
import axios from 'axios';
import { BASE_URL } from '../utils/constants';
import { useNavigate } from 'react-router-dom';

const CreateIssue = () => {
const navigate =useNavigate();


  const [formData, setFormData] = useState({
    priority: '',
    title: '',
    description: '',
    status: ''
  });

  

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post( BASE_URL + '/issues/create', formData); // Replace with your actual endpoint
        alert('Issue Created successfully :) ');
        //go to dashboaard after creating a new issue successfully :)
        navigate("/dashBoard");
      // reset form
      setFormData({ priority: '', title: '', description: '', status: '' });
    } catch (err) {
      alert("-->COULD NOT CREATE ISSUE<--. please check entered values carefully and fill all the fields.")
      console.error('Error creating issue:', err.message);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white border border-gray-800 rounded shadow">
      <h2 className="text-xl font-semibold mb-4">Create New Issue</h2>
      <form onSubmit={handleSubmit} className="space-y-4">

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Priority : [Low, Medium or High]</label>
          <input
            type="text"
            name="priority"
            value={formData.priority}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Title [keep short]</label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Status [Open, In Progress or Closed]</label>
          <input
            type="text"
            name="status"
            value={formData.status}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-indigo-600 text-white py-2 px-4 rounded hover:bg-indigo-500 transition duration-200 cursor-pointer"
          onClick={handleSubmit}
        >
          Create Issue
        </button>
      </form>
    </div>
  );
};

export default CreateIssue;
