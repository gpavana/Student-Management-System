import React, { useState, useEffect } from 'react';
import axios from 'axios';

function EditStudentForm({ student, onSuccess }) {
  const [formData, setFormData] = useState(student);

  useEffect(() => {
    setFormData(student); // reset form on new student prop
  }, [student]);

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.put(`http://localhost:8080/students/${formData.id}`, formData);
    onSuccess();
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Edit Student</h3>
      <input name="rollNo" value={formData.rollNo} onChange={handleChange} required />
      <input name="name" value={formData.name} onChange={handleChange} required />
      <input name="email" value={formData.email} onChange={handleChange} required />
      <input name="phone" value={formData.phone} onChange={handleChange} required />
      <input name="department" value={formData.department} onChange={handleChange} required />
      <button type="submit">Update</button>
    </form>
  );
}

export default EditStudentForm;
