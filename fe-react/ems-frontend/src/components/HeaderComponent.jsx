

const HeaderComponent = () => {
  return (
  <div>
    <header>
      <nav className='navbar navbar-dark bg-dark'>
        <div>
          <a className="navbar-brand " href="/home">Home</a>
        </div>

        <div>
          <a className="navbar-brand" href="/employees">Employee</a>
        </div>

        <div>
            <a className="navbar-brand" href="/add-employee">Employee Management</a>
        </div>

        <div>
          <a className="navbar-brand" href="/departments">Department</a>
        </div>

        <div>
          <a className="navbar-brand" href="/add-department">Department Management</a>
        </div>
          
        <div>
          <a className="navbar-brand" href="/todos">Todo</a>
        </div>
          
        <div>
          <a className="navbar-brand" href="/add-todo">Todo Management</a>
        </div>  
          
          
        

      </nav>
        
    </header>
  </div>
)


}

export default HeaderComponent;