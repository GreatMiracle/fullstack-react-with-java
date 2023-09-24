import axios from 'axios';

const DEPARTMENT_REST_API_BASE_URL = 'http://localhost:8089/api/departments';

export const getAllDepartments = () => axios.get(DEPARTMENT_REST_API_BASE_URL);
export const addDepartment = (body) => axios.post(DEPARTMENT_REST_API_BASE_URL, body);
export const updateDepartment = (id, body) =>axios.put(DEPARTMENT_REST_API_BASE_URL + `/${id}`, body);
export const deleteDepartment = (id) => axios.delete(DEPARTMENT_REST_API_BASE_URL + `/${id}`);
export const getDetaileDepartment = (id) => axios.get(DEPARTMENT_REST_API_BASE_URL + `/${id}`);
