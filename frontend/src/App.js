import React, { useState } from 'react';
import StudentList from './components/StudentList';
import StudentForm from './components/StudentForm';
import EditStudentForm from './components/EditStudentForm';
import './App.css';

function App() {
  const [editingStudent, setEditingStudent] = useState(null);
  const [refreshKey, setRefreshKey] = useState(0); // to refresh list after any change

  const handleEdit = (student) => {
    setEditingStudent(student);
  };

  const handleFormSuccess = () => {
    setEditingStudent(null); // reset editing
    setRefreshKey((prev) => prev + 1); // refresh student list
  };

  return (
    <div className="app-container">
      {/* ✅ Show student list first */}
      <StudentList onEdit={handleEdit} key={refreshKey} />

      {/* ✅ Then show Add/Edit form below */}
      <div className="form-section">
        {editingStudent ? (
          <EditStudentForm student={editingStudent} onSuccess={handleFormSuccess} />
        ) : (
          <StudentForm onSuccess={handleFormSuccess} />
        )}
      </div>
    </div>
  );
}

export default App;
