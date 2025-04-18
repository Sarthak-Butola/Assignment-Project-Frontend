import React, { useEffect } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import Header from './Header';

const Body = () => {
    const navigate = useNavigate();
    useEffect(()=>{
        navigate('/dashBoard')
    },[])

  return (
    <>
    <Header/>
    <Outlet/>
    </>
  )
}

export default Body
