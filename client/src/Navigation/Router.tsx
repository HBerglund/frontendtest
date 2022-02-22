import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from '../Components/Header';
import Employee from './Employee';

const Router = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Employee />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
