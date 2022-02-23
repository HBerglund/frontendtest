import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from '../Components/Header';
import Navbar from '../Components/Navbar';
import CompaniesPage from './CompaniesPage';
import EmployeesPage from './EmployeesPage';
import UnemployedPage from './UnemployedPage';

const Router = () => {
  return (
    <BrowserRouter>
      <Header />
      <Navbar />
      <Routes>
        <Route path='/' element={<EmployeesPage />} />
        <Route path='/companies' element={<CompaniesPage />} />
        <Route path='/unemployed' element={<UnemployedPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
