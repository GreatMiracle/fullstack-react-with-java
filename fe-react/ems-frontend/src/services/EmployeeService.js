// import axios from 'axios';
import axios from "./AxiosInterceptor";

const REST_API_BASE_URL ='http://localhost:8089/api/employees'
export const listEmployees = () => axios.get(REST_API_BASE_URL);
export const addEmployee = (body) => axios.post(REST_API_BASE_URL, body);
export const detailEmployee = (employeeId) => axios.get(REST_API_BASE_URL + '/' + employeeId);
export const updateEmployee = (employeeId, body) => axios.put(REST_API_BASE_URL + '/' + employeeId, body);
export const deleteEmployee = (employeeId) => axios.delete(REST_API_BASE_URL+ '/' + employeeId)


export const dummyData = [
    {
      "id": 1,
      "firstName": "Quan",
      "lastName": "Le",
      "email": "quan.le@gamil.com"
    },
    {
      "id": 2,
      "firstName": "Nam",
      "lastName": "Pham",
      "email": "nam.pham@gamil.com"
    }
    , {
      "id": 3,
      "firstName": "Nhu",
      "lastName": "Quynh",
      "email": "nhu.quynh@gamil.com"
    }
  ];


export default listEmployees;
 