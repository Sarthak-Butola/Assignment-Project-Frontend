import React, { useState } from 'react';
import { BASE_URL } from '../utils/constants';
import { useDispatch, useSelector } from 'react-redux';
import { addSearch } from '../utils/searchSlice';
import axios from 'axios';
import IssueList from './IssueList';

const SearchPage = () => {
  const [query, setQuery] = useState('');
  const dispatch = useDispatch();
  const searchSub = useSelector((store)=>store.searchIssues);
  
  const handleSearch = async() => {
    try{
    let issue = await axios.get(BASE_URL + "/issues/search/" + query);
    // console.log(issue?.data);
    dispatch(addSearch(issue?.data));
    }catch(err){
      console.log(err.message);
    }
  };

  return (
    <div className="min-h-screen bg-white justify-start items-center p-4">
      <div className="flex gap-4">
        {/* Search Bar */}
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Enter Issue ID"
          className="w-1/2 px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
        />
        
        {/* Search Button */}
        <button
          onClick={handleSearch}
          className="px-4 py-2 bg-indigo-600 text-white font-semibold rounded cursor-pointer hover:bg-indigo-500 transform hover:scale-105 transition duration-200"
        >
          Search
        </button>
      </div>

      {
      searchSub && <IssueList issue={searchSub} />
      }

    </div>
  );
};

export default SearchPage;
