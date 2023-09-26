// import { useState } from 'react'
import './App.css';
import ListDepartmentComponent from './components/department/ListDepartmentComponent';
import AddEmployeeComponent from './components/employee/AddEmployeeComponent';
import FooterComponent from './components/FooterComponent';
import HeaderComponent from './components/HeaderComponent';
import HomePage from './components/HomePage';
import ListEmployeeComponent from './components/employee/ListEmployeeComponent';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import DepartmentComponent from './components/department/DepartmentComponent';
import ListTodoComponent from './components/todo/ListTodoComponent';
import TodoComponent from './components/todo/TodoComponent';
import RegisterComponent from './components/login/RegisterComponent';
import LoginComponent from './components/login/LoginComponent';
import { checkUserLoggedIn } from './services/AuthService';

function App() {

  function AuthenticatedRoute({ children }) {
    const isAuthen = checkUserLoggedIn();

    if (isAuthen) {
      return children;
    }
    return <Navigate to="/" />
  }


  return (
    <>
      <BrowserRouter>
        <HeaderComponent />
        <Routes>
          <Route path="/home" element={<HomePage />}></Route>
          <Route path="/" element={<HomePage />}></Route>

          {/* employee */}
          <Route path="/employees" element={
            <AuthenticatedRoute>
              <ListEmployeeComponent />
            </AuthenticatedRoute>
          }></Route>
          <Route
            path="/add-employee"
            element={
              <AuthenticatedRoute>
                <AddEmployeeComponent />
              </AuthenticatedRoute>
            }
          ></Route>
          <Route
            path="/edit-employee/:idEmployee"
            element={
              <AuthenticatedRoute>
                <AddEmployeeComponent />
              </AuthenticatedRoute>
            }
          ></Route>

          {/* department */}
          <Route
            path="/departments"
            element={
              <AuthenticatedRoute>
                <ListDepartmentComponent />
              </AuthenticatedRoute>
            }
          ></Route>

          <Route
            path="/add-department"
            element={
              <AuthenticatedRoute>
                <DepartmentComponent />
              </AuthenticatedRoute>
            }
          ></Route>
          <Route
            path="/add-department/:id"
            element={
              <AuthenticatedRoute>
                <DepartmentComponent />
              </AuthenticatedRoute>
            }
          ></Route>

          {/* Todo */}
          <Route path='/todos' element={
            <AuthenticatedRoute>
              <ListTodoComponent />
            </AuthenticatedRoute>
          }></Route>
          <Route path='/add-todo' element={
            <AuthenticatedRoute>
              <TodoComponent />
            </AuthenticatedRoute>
          }></Route>
          <Route path='/update-todo/:id' element={
            <AuthenticatedRoute>
              <TodoComponent />
            </AuthenticatedRoute>}></Route>

          {/* login */}
          <Route path='/register' element={<RegisterComponent />}></Route>
          <Route path='/login' element={<LoginComponent />}></Route>

        </Routes>
        <FooterComponent />
      </BrowserRouter>
    </>
  );
}

export default App;
