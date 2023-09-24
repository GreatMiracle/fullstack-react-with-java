// import { useState } from 'react'
import './App.css';
import ListDepartmentComponent from './components/department/ListDepartmentComponent';
import AddEmployeeComponent from './components/employee/AddEmployeeComponent';
import FooterComponent from './components/FooterComponent';
import HeaderComponent from './components/HeaderComponent';
import HomePage from './components/HomePage';
import ListEmployeeComponent from './components/employee/ListEmployeeComponent';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import DepartmentComponent from './components/department/DepartmentComponent';

function App() {

  return (
    <>
      <BrowserRouter>
        <HeaderComponent />
        <Routes>
          <Route path="/home" element={<HomePage />}></Route>
          <Route path="/" element={<HomePage />}></Route>

          {/* employee */}
          <Route path="/employees" element={<ListEmployeeComponent />}></Route>
          <Route
            path="/add-employee"
            element={<AddEmployeeComponent />}
          ></Route>
          <Route
            path="/edit-employee/:idEmployee"
            element={<AddEmployeeComponent />}
          ></Route>

          {/* department */}
          <Route
            path="/departments"
            element={<ListDepartmentComponent />}
          ></Route>

          <Route
            path="/add-department"
            element={<DepartmentComponent />}
          ></Route>
          <Route
            path="/add-department/:id"
            element={<DepartmentComponent />}
          ></Route>
        </Routes>
        <FooterComponent />
      </BrowserRouter>
    </>
  );
}

export default App;
