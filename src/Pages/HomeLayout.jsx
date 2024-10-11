import React from 'react'
import {Outlet} from "react-router-dom";
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';

function HomeLayout() {
  return (
    <div>
        <NavBar/>
        <div className="min-h-scree">
            <Outlet/>
        </div>
        <Footer/>
    </div>
  )
}

export default HomeLayout
