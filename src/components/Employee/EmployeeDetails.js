import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import API from '../../services/api';

function EditEmployee() {
  const { id } = useParams();
  const [employee, setEmployee] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    const fetchEmployee = async () => {
      try {
        const response = await API.get(`/employees/${id}`, {
          headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
        });
        setEmployee(response.data);
      } catch (err) {
        console.error(err.message);
      }
    };
    fetchEmployee();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEmployee((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await API.put(`/employees/${id}`, employee, {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
      });
      alert('Employee updated successfully');
      navigate('/employees');
    } catch (err) {
      console.error(err.message);
      alert('Failed to update employee');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Edit Employee</h2>
      <input
        type="text"
        name="name"
        value={employee.name || ''}
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="position"
        value={employee.position || ''}
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="department"
        value={employee.department || ''}
        onChange={handleChange}
        required
      />
      <input
        type="number"
        name="salary"
        value={employee.salary || ''}
        onChange={handleChange}
        required
      />
      <button type="submit">Update Employee</button>
    </form>
  );
}

export default EditEmployee;
