import React, { useEffect, useState } from 'react';
import axios from 'axios';

const EmployeeList = ({ onEdit }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/employee')
      .then(res => setData(res.data));
  }, []);

  const handleDelete = async id => {
    await axios.delete(`http://localhost:5000/api/employee/${id}`);
    setData(data.filter(emp => emp.id !== id));
  };

  return (
    <div className="table-responsive">
      <table className="table table-bordered table-hover mt-3">
        <thead className="table-light">
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Mobile</th>
            <th>Age</th>
            <th>Gender</th>
            <th>Department</th>
            <th>Joining Date</th>
            <th>Active</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.map(emp => (
            <tr key={emp.id}>
              <td>{emp.name}</td>
              <td>{emp.email}</td>
              <td>{emp.mobile}</td>
              <td>{emp.age}</td>
              <td>{emp.gender}</td>
              <td>{emp.department}</td>
              <td>{emp.joiningDate ? emp.joiningDate.split('T')[0] : ''}</td>
              <td>
                <span className={`badge ${emp.isActive ? 'bg-success' : 'bg-danger'}`}>
                  {emp.isActive ? 'Yes' : 'No'}
                </span>
              </td>
              <td>
                <button className="btn btn-primary btn-sm me-2" onClick={() => onEdit(emp)}>
                  <i className="fas fa-edit"></i> Edit
                </button>
                <button className="btn btn-danger btn-sm" onClick={() => handleDelete(emp.id)}>
                  <i className="fas fa-trash"></i> Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EmployeeList;
