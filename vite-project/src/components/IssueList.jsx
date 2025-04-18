import axios from 'axios';
import React from 'react';
import { BASE_URL } from '../utils/constants';
import { Navigate, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addInfo } from '../utils/editIssueslice';


const IssueList = ({issue}) => {
      const navigate = useNavigate();
      const dispatch = useDispatch();

        const {_id, title, description, status, priority, createdAt} = issue;

      const handleDelete = async()=>{
        try{
        const confirmDelete = window.confirm("Are you sure you want to delete this issue?");
        if (!confirmDelete) return;
        let issue = await axios.delete(BASE_URL + "/issues/delete/" + _id);
        // console.log(issue);
        alert("Issue successfully deleted");

        window.location.reload();
        }
        catch(err){
          console.log(err.message);
        }
      }

  return (
      
        <div className="p-4">
        <div className="p-4 w-full sm:w-11/12 md:w-4/5 lg:w-3/4 xl:w-2/3 m-auto border border-gray-300 rounded-lg shadow-sm bg-white hover:shadow-md transition">
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-2 gap-2 sm:gap-0">
            <h3 className="text-lg font-bold">{title}</h3>
            <div className="flex flex-col items-start sm:items-end">
              <span
                className={`text-sm font-medium px-2 py-1 rounded text-center w-fit mb-2 ${
                  issue.status === 'Open'
                    ? 'bg-red-100 text-red-600'
                    : issue.status === 'In Progress'
                    ? 'bg-yellow-100 text-yellow-600'
                    : 'bg-green-100 text-green-600'
                }`}
              >
                {status}
              </span>
              <button
                className="text-sm px-4 py-2 bg-black text-white rounded hover:cursor-pointer hover:scale-110 transition"
                onClick={() => {
                  dispatch(addInfo({_id,title, description, status, priority}));
                  navigate('/editIssue')
                }}
              >
                Edit Issue
              </button>

              <button
                className=" p-2 text-sm px-z4 py-2 bg-red-600 text-white rounded hover:cursor-pointer hover:scale-110 transition mt-2"
                onClick={handleDelete}
              >
                Delete Issue
              </button>

            </div>
          </div>
      
          <p className="text-gray-600 text-sm mb-2">Description: {description}</p>
      
          <div className="text-sm text-gray-500 space-y-1">
            <div>
              ID: <strong>{_id}</strong>
            </div>
            <div>
              Priority:{' '}
              <span
                className={`font-semibold ${
                  priority === 'High'
                    ? 'text-red-600'
                    : issue.priority === 'Medium'
                    ? 'text-yellow-600'
                    : 'text-green-600'
                }`}
              >
                {issue.priority}
              </span>
            </div>
            <div>
              Created At: <strong>{new Date(createdAt).toLocaleString()}</strong>
            </div>
          </div>
        </div>
      </div>
      

  );
};

export default IssueList;
