import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

//Pages
import Homepage from '../Routes/Homepage/Homepage'
import Navbar from '../components/Navbar/Navbar'
import Students from '../Routes/Students/Students'
import Activities from '../Routes/Activities/Activities'
import Employees from '../Routes/Employees/Employees'
import Payments from '../Routes/Payments/Payments'

export default function NavSystem() {

  return (
    <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path='/' element={<Homepage />} />
      <Route path='/students' element={<Students />} />
      <Route path='/activities' element={<Activities />} />
      <Route path='/employees' element={<Employees />} />
      <Route path='/payments' element={<Payments />} />
    </Routes>
    </BrowserRouter>
  )
}
