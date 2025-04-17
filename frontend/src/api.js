import axios from 'axios';

const BASE_URL = 'http://localhost:8080/students';

export const fetchStudents = () => axios.get(BASE_URL);
export const createStudent = (student) => axios.post(BASE_URL, student);
export const updateStudent = (id, updatedStudent) => axios.put(`${BASE_URL}/${id}`, updatedStudent);
export const deleteStudent = (id) => axios.delete(`${BASE_URL}/${id}`);
