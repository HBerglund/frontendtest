import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from '../Components/Header';
import CompaniesPage from './CompaniesPage';
import EmployeesPage from './EmployeesPage';

const Router = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<EmployeesPage />} />
        <Route path='/companies' element={<CompaniesPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
