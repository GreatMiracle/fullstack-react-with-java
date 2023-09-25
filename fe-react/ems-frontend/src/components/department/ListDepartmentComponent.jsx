import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { deleteDepartment, getAllDepartments } from '../../services/DepartmentService';

const ListDepartmentComponent = () => {
  const [departments, setDepartments] = useState([]);
  const navigator = useNavigate()

  useEffect(() => {
    funcGetAllDepartments();
  }, []);

  const updateDepartment = (id) => {
    navigator(`/add-department/${id}`)
  };

  const removeDepartment = (id) => {
    deleteDepartment(id)
    .then(() => {
      funcGetAllDepartments()
    }).catch((err) => {
      console.error(err);
    });
  };

  return (
    <div className="container">
      <h2 className="text-center">List of Departments</h2>
      <Link to="/add-department" className="btn btn-primary mb-2">
        Add Department
      </Link>
      <table className="table table-striped table-bordered">
        <thead>
          <tr>
            <th>Department Name</th>
            <th>Department Description</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {departments.map((department) => (
            <tr key={department.id}>
              <td> {department.departmentName} </td>
              <td> {department.departmentDescription} </td>
              <td>
                <button
                  onClick={() => updateDepartment(department.id)}
                  className="btn btn-info"
                >
                  Update
                </button>
                <button
                  onClick={() => removeDepartment(department.id)}
                  className="btn btn-danger"
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


  function funcGetAllDepartments() {
    getAllDepartments()
      .then((response) => {
        // Xử lý phản hồi thành công
        console.log('kien', response.data);
        navigator('/departments')
        return setDepartments(response.data);
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
  

};

export default ListDepartmentComponent;



