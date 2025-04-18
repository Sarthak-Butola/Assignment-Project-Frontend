import axios from 'axios';
import React, { useEffect } from 'react'
import { BASE_URL } from '../utils/constants';
import { useDispatch, useSelector } from 'react-redux';
import { addIssues } from '../utils/dashBoardSlice';
import { useNavigate } from 'react-router-dom';
import IssueList from './IssueList';

const DashBoard = () => {
    const dispatch=useDispatch();
    const navigate = useNavigate();
    const dashIssues = useSelector((store)=>store.dashBoardIssues);

    let fetchIssues = async()=>{
        try{
          let issues = await axios.get(BASE_URL + "/issues/getAll");
          // console.log(issues.data);

          //add data in redux store slice
          dispatch(addIssues(issues?.data));

        }catch(err){
          console.log(err.message);
        }
      }
    useEffect(()=>{
        fetchIssues();
      },[])


  return (
    <div>
        { dashIssues &&
           dashIssues.map((issue)=> <IssueList issue={issue} key={issue._id} />)
        }
    </div>
  )
}

export default DashBoard
