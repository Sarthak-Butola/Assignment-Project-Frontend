import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import axios from 'axios';
import { BASE_URL } from '../utils/constants';
import { useNavigate } from 'react-router-dom';

const EditIssue = () => {
  const navigate = useNavigate();
  const editIssueSub = useSelector((store) => store.EditIssue);

  // If store is empty after reload, redirect to dashboard
  useEffect(() => {
    if (!editIssueSub || Object.keys(editIssueSub).length === 0) {
      navigate('/dashBoard');
    }
  }, [editIssueSub, navigate]);

  if (!editIssueSub) return null; // Prevent rendering before redirect

  const { _id, title, description, status, priority } = editIssueSub;

  const [formData, setFormData] = useState({
    title,
    description,
    status,
    priority,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      let res = await axios.patch(BASE_URL + "/issues/update/" + _id, formData);
      console.log(res);
    console.log(BASE_URL + "/issues/update/" + _id);
    console.log(formData);
      alert('Issue updated successfully!');
      navigate('/dashBoard');
    } catch (err) {
      console.error('Update failed:', err);
      alert('Error updating issue');
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white border border-gray-300 rounded shadow">
      <h2 className="text-xl font-semibold mb-4">Edit Issue</h2>
      <form onSubmit={handleUpdate} className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-1">Title</label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Description</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Status</label>
          <input
            type="text"
            name="status"
            value={formData.status}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Priority</label>
          <input
            type="text"
            name="priority"
            value={formData.priority}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-indigo-600 text-white py-2 px-4 rounded hover:bg-indigo-500 transition"
          onClick={handleUpdate}
        >
          Update Issue
        </button>
      </form>
    </div>
  );
};

export default EditIssue;
