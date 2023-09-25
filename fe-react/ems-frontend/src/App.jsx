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
import ListTodoComponent from './components/todo/ListTodoComponent';
import TodoComponent from './components/todo/TodoComponent';
import RegisterComponent from './components/login/RegisterComponent';
import LoginComponent from './components/login/LoginComponent';

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

          {/* Todo */}
          <Route path='/todos' element = { <ListTodoComponent /> }></Route>
          <Route path='/add-todo' element = { <TodoComponent /> }></Route>
          <Route path='/update-todo/:id' element = { <TodoComponent /> }></Route>

          <Route path='/register' element = { <RegisterComponent />}></Route>
          <Route path='/login' element = { <LoginComponent /> }></Route>

        </Routes>
        <FooterComponent />
      </BrowserRouter>
    </>
  );
}

export default App;
