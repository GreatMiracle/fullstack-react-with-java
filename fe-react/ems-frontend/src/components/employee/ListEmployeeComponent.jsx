import { useEffect, useState } from 'react';
import { deleteEmployee, listEmployees } from '../../services/EmployeeService';
import { useNavigate } from 'react-router-dom';

function ListEmployeeComponent() {
  const navigator = useNavigate();
  const [employees, setEmployees] = useState([
    {
      id: '',
      firstName: '',
      lastName: '',
      email: '',
    },
  ]);

  useEffect(() => {
    funcListAllEmployee();
  }, []);

  const addNewEmployee = () => {
    navigator('/add-employee');
  };

  const updateEmployee = (id) => {
    navigator(`/edit-employee/${id}`);
  };

  const removeEmployee = (id) => {
    funcDeleteEmployee(id);
  };

  return (
    <div className="container">
      <h2 className="text-center">List of Employees</h2>
      <button className="btn btn-primary mb-2" onClick={addNewEmployee}>
        Add Employee
      </button>
      <h2>List of Employee</h2>
      <table className="styled-table">
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((item) => (
            <tr key={item.id}>
              <td>{item.firstName}</td>
              <td>{item.lastName}</td>
              <td>{item.email}</td>
              <td>
                <button
                  className="btn btn-info"
                  onClick={() => updateEmployee(item.id)}
                >
                  Update
                </button>
                <button
                  className="btn btn-danger"
                  onClick={() => removeEmployee(item.id)}
                  style={{ marginLeft: '10px' }}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );

  function funcDeleteEmployee(id) {
    deleteEmployee(id)
      .then(() => funcListAllEmployee())
      .catch((error) => {
        console.error(error);
      });
  }

  function funcListAllEmployee() {
    listEmployees()
      .then((response) => {
        // Xử lý phản hồi thành công
        console.log('kien', response.data);
        return setEmployees(response.data);
      })
      .catch((error) => {
        // Xử lý lỗi hoặc timeout
        if (error.response) {
          console.log('Lỗi phản hồi từ server:', error.response.data);
        } else {
          console.log('Lỗi kết nối:', error.message);
        }
      });
  }
}

export default ListEmployeeComponent;
