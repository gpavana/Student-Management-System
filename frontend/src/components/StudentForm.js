import React, { useState } from 'react';
import axios from 'axios';
import './StudentForm.css'; // Import the new CSS file for styling

function StudentForm({ onSuccess }) {
  const [formData, setFormData] = useState({
    rollNo: '',
    name: '',
    email: '',
    phone: '',
    department: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post('http://localhost:8080/students', formData);
    setFormData({ rollNo: '', name: '', email: '', phone: '', department: '' }); // Clear form
    onSuccess();
  };

  return (
    <div className="form-container">
      <h3>Add Student</h3>
      <form onSubmit={handleSubmit} className="student-form">
        <div className="form-group">
          <label htmlFor="rollNo">Roll No:</label>
          <input
            name="rollNo"
            id="rollNo"
            value={formData.rollNo}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            name="name"
            id="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            name="email"
            id="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="phone">Phone:</label>
          <input
            name="phone"
            id="phone"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="department">Department:</label>
          <input
            name="department"
            id="department"
            value={formData.department}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit" className="submit-btn">
          Add Student
        </button>
      </form>
    </div>
  );
}

export default StudentForm;
