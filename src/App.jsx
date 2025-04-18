import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BASE_URL } from './utils/constants'
import axios from "axios";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Body from './components/Body'
import DashBoard from './components/dashBoard'
import { Provider } from 'react-redux'
import issueStore from './utils/issueStore'
import IssueList from './components/IssueList'
import SearchPage from './components/searchPage'
import CreateIssue from './components/AddIssue'
import EditIssue from './components/EditIssue'


function App() {

  // let hello = async()=>{
  //   try{
  //     let res = await axios.get(BASE_URL + "/hello", {}, {withCredentials:true});
  //     console.log(res);
  //   }catch(err){
  //     console.log(err.message);
  //   }
  // }
  // useEffect(()=>{
  //   hello();
  // },[])

  return (
    <>
    <Provider store={issueStore}>
    <BrowserRouter>
    <Routes>
    <Route path='/' element={<Body />} >

    {/* children Routes */}
    <Route path='/dashBoard' element={<DashBoard/>} />
    <Route path='/issueList' element={<IssueList/>} />
    <Route path='/searchPage' element={<SearchPage/>} />
    <Route path='/createIssue' element={<CreateIssue/>} />
    <Route path='/editIssue' element={<EditIssue/>} />

    </Route>
    </Routes>
    </BrowserRouter>
    </Provider>
    </>
  )
}

export default App
