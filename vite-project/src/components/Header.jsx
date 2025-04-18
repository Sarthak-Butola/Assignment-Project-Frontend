import React from 'react';
import SearchPage from './searchPage';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { BASE_URL } from '../utils/constants';
import { useDispatch } from 'react-redux';
import { addIssues } from '../utils/dashBoardSlice';

const Header = () => {
const dispatch =useDispatch();

  let handlePriorityClick = async(e)=>{
    let issues = await axios.get(BASE_URL + `/issues/` + e.target.innerText, {}, {withCredentials:true});
    console.log(issues.data);
    dispatch(addIssues(issues?.data));
  }

  let showAllIssues = async()=>{
    let issues = await axios.get(BASE_URL + "/issues/getAll", {}, {withCredentials:true});
    console.log(issues.data);
    dispatch(addIssues(issues?.data));
  }

  const navigate = useNavigate();
  return (
    <div className="w-full p-4 bg-black text-white shadow-md sticky top-0 z-50 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
      {/* Priority Buttons */}
      <div className="flex flex-wrap gap-2">
        <button className="px-4 py-2 hover:cursor-pointer  bg-green-600 text-white font-semibold rounded hover:bg-green-500 transform hover:scale-105 transition duration-200" onClick={handlePriorityClick}>
          Low
        </button>
        <button className="px-4 py-2 bg-yellow-500 text-black font-semibold rounded hover:bg-yellow-400 hover:cursor-pointer transform hover:scale-105 transition duration-200" onClick={handlePriorityClick}>
          Medium
        </button>
        <button className="px-4 py-2 bg-red-600 text-white font-semibold rounded hover:cursor-pointer  hover:bg-red-500 transform hover:scale-105 transition duration-200" onClick={handlePriorityClick}>
          High
        </button>

        <button
  className="px-5 py-2 bg-gray-600 cursor-pointer text-white font-semibold rounded hover:bg-gray-600 transform hover:scale-105 transition duration-200" onClick={showAllIssues}>
  Show All Issues
</button>


        <button
  className="px-5 py-2 bg-indigo-600 text-white font-semibold rounded hover:bg-indigo-500 transform hover:scale-105 transition duration-200 cursor-pointer"> + Add Issue </button>
        
      </div>

      {/* Search Bar + Button */}
      <div className="w-full sm:w-auto flex gap-2">
        <button className="px-4 py-2 bg-blue-600 text-white font-semibold rounded hover:bg-blue-500 transform hover:scale-105 transition duration-200 hover:cursor-pointer " onClick={()=>{navigate('/searchPage')}}>
          Search
        </button>
      </div>
    </div>
  );
};

export default Header;
