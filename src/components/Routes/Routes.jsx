import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

//Pages
import Index from '../Index/Index'
import Navbar from '../Navbar/Navbar'
import Table from '../Table/Table'

export default function RouterNavSystem() {
  return (
    <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path='/' element={<Index />} />
      <Route path='/students' element={<Table />} />
      <Route path='/activities' element={<Table />} />
      <Route path='/employees' element={<Table />} />
      <Route path='/payments' element={<Table />} />
      <Route path='/SignIn' element={<Table />} />
      <Route path='/SignOut' element={<Table />} />
    </Routes>
    </BrowserRouter>
  )
}
