import React from 'react'
import Header from '../Header/Header';
import { Route, Routes } from 'react-router-dom';
import Admin from '../Admin/Admin';
import Dashboard from '../Dashboard/Dashboard';
import User from '../User/User';
import Setting from '../Setting/Setting';
import Product from '../Products/Product';

function MainContent({ handleSidebarToggle, handle}) {
  return (
    <div className='bg-light vh-100'>
      <Header handleSidebarToggle={handleSidebarToggle} handle={handle} />
      {/* <div className="container-fluid"> */}
        <Routes>
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/user' element={<User />} />
          <Route path='/admin' element={<Admin />} />
          <Route path='/product' element={<Product />} />
          <Route path='/setting' element={<Setting />} />

        </Routes>
      {/* </div> */}
    </div>
  )
}

export default MainContent;