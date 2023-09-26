import { NavLink, useNavigate } from "react-router-dom";
import { checkUserLoggedIn, logout } from "../services/AuthService";


const HeaderComponent = () => {

  const isAuth = checkUserLoggedIn();

  const navigator = useNavigate();


  const handleLogout = () => {
    logout();
    navigator('/login')
  }


  return (
    <div>
      <header>
        <nav className='navbar navbar-expand-md navbar-dark bg-dark'>
          <div>
            <a href='/home' className='navbar-brand'>
              React App
            </a>
          </div>

          {isAuth &&
            <div>
              <ul className='navbar-nav'>
                <li className='nav-item'>
                  <NavLink to="/employees" className="nav-link">Employee</NavLink>
                </li>
                <li className='nav-item'>
                  <NavLink to="/add-employee" className="nav-link">Employee Management</NavLink>
                </li>
                <li className='nav-item'>
                  <NavLink to="/departments" className="nav-link">Department</NavLink>
                </li>
                <li className='nav-item'>
                  <NavLink to="/add-department" className="nav-link">Department Management</NavLink>
                </li>
                <li className='nav-item'>
                  <NavLink to="/todos" className="nav-link">Todo</NavLink>
                </li>
                <li className='nav-item'>
                  <NavLink to="/add-todo" className="nav-link">Todo Management</NavLink>
                </li>

              </ul>
            </div>
          }

          <div className='collapse navbar-collapse'>
            <ul className='navbar-nav'>
            </ul>

          </div>

          <ul className='navbar-nav'>
            {
              !isAuth &&
              <li className='nav-item'>
                <NavLink to="/register" className="nav-link">Register</NavLink>
              </li>
            }

            {
              !isAuth &&
              <li className='nav-item'>
                <NavLink to="/login" className="nav-link">Login</NavLink>
              </li>
            }

            {
              isAuth &&
              <li className='nav-item'>
                <NavLink to="/login" className="nav-link" onClick={handleLogout}>Logout</NavLink>
              </li>
            }

          </ul>
        </nav>
      </header>

    </div>
  )


}

export default HeaderComponent;