

const HeaderComponent = () => {
    return (
        <div>
            <header>
                <nav className='navbar navbar-dark bg-dark'>
                    <a className="navbar-brand " href="/home">Home</a>
                    <a className="navbar-brand" href="/employees">Employee</a>
                    <a className="navbar-brand" href="/add-employee">Add Employee</a>
                    <a className="navbar-brand" href="/departments">Department</a>
                    <a className="navbar-brand" href="/add-department">Add Department</a>
                </nav>

            </header>
        </div>
    )


}

export default HeaderComponent;