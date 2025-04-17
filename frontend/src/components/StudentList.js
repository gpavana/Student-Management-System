// src/components/StudentList.js
import React, { useEffect, useState } from 'react';
import { fetchStudents, deleteStudent } from '../api';
import './StudentList.css';

function StudentList({ onEdit }) {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    loadStudents();
  }, []);

  const loadStudents = async () => {
    try {
      const response = await fetchStudents();
      setStudents(response.data);
    } catch (error) {
      console.error("Failed to fetch students:", error);
    }
  };

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this student?");
    if (!confirmDelete) return;

    try {
      await deleteStudent(id);
      loadStudents();
    } catch (error) {
      console.error("Error deleting student:", error);
    }
  };

  return (
    <div className="student-list">
      <h1 className="page-title">Student Management System</h1>
      <div className="student-header">
        <div>ID</div>
        <div>Roll No</div>
        <div>Name</div>
        <div>Email</div>
        <div>Phone</div>
        <div>Department</div>
        <div>Actions</div>
      </div>
      {students.map((student) => (
        <div key={student.id} className="student-item">
          <div className="student-details">
            <div>{student.id}</div>
            <div>{student.rollNo}</div>
            <div>{student.name}</div>
            <div>{student.email}</div>
            <div>{student.phone}</div>
            <div>{student.department}</div>
            <div className="student-actions">
              <button className="edit-btn" onClick={() => onEdit(student)}>Edit</button>
              <button className="delete-btn" onClick={() => handleDelete(student.id)}>Delete</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default StudentList;