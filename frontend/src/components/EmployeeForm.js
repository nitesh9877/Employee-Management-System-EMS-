import React, { useState, useEffect } from 'react';
import axios from 'axios';

const EmployeeForm = ({ employee, onSubmit }) => {
  const initialState = {
    id: 0,
    name: '',
    email: '',
    mobile: '',
    age: 25,
    gender: 'Male',
    department: '',
    isActive: true,
    joiningDate: '',
    address: ''
  };

  const [form, setForm] = useState(initialState);
  const [isFormEnabled, setIsFormEnabled] = useState(true);

  useEffect(() => {
    if (employee) {
      setForm({
        ...employee,
        joiningDate: employee.joiningDate ? employee.joiningDate.split('T')[0] : '',
        email: employee.email || '',
        age: employee.age || 25
      });
    } else {
      setForm(initialState);
    }
  }, [employee]);

  const handleChange = e => {
    const { name, value, type, checked } = e.target;
    setForm({ ...form, [name]: type === 'checkbox' ? checked : value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    if (form.id === 0) {
      await axios.post('http://localhost:5000/api/employee', form);
    } else {
      await axios.put(`http://localhost:5000/api/employee/${form.id}`, form);
    }
    setForm(initialState);
    if (onSubmit) {
      onSubmit();
    }
    window.location.reload();
  };

  const toggleFormEnabled = () => {
    setIsFormEnabled(!isFormEnabled);
  };

  return (
    <div className="card shadow-sm">
      <div className="card-header d-flex justify-content-between align-items-center">
        <h5 className="mb-0">Employee Information</h5>
        <button 
          type="button" 
          className={`btn btn-sm ${isFormEnabled ? 'btn-secondary' : 'btn-success'}`}
          onClick={toggleFormEnabled}
        >
          {isFormEnabled ? 'Disable Form' : 'Enable Form'}
        </button>
      </div>
      <div className="card-body">
        <form onSubmit={handleSubmit}>
          <div className="row g-3">
            <div className="col-md-6">
              <label htmlFor="name" className="form-label">Full Name</label>
              <input 
                id="name"
                name="name" 
                className="form-control" 
                placeholder="Enter full name" 
                value={form.name} 
                onChange={handleChange} 
                required 
                disabled={!isFormEnabled}
              />
            </div>
            <div className="col-md-6">
              <label htmlFor="email" className="form-label">Email Address</label>
              <input 
                id="email"
                name="email" 
                type="email" 
                className="form-control" 
                placeholder="Enter email address" 
                value={form.email} 
                onChange={handleChange} 
                required 
                disabled={!isFormEnabled}
              />
            </div>
            <div className="col-md-6">
              <label htmlFor="mobile" className="form-label">Mobile Number</label>
              <input 
                id="mobile"
                name="mobile" 
                className="form-control" 
                placeholder="Enter mobile number" 
                value={form.mobile} 
                onChange={handleChange} 
                required 
                disabled={!isFormEnabled}
              />
            </div>
            <div className="col-md-6">
              <label htmlFor="age" className="form-label">Age</label>
              <input 
                id="age"
                name="age" 
                type="number" 
                className="form-control" 
                min="18" 
                max="100" 
                value={form.age} 
                onChange={handleChange} 
                required 
                disabled={!isFormEnabled}
              />
            </div>
            <div className="col-md-6">
              <label htmlFor="department" className="form-label">Department</label>
              <select 
                id="department"
                name="department" 
                className="form-select" 
                value={form.department} 
                onChange={handleChange} 
                required 
                disabled={!isFormEnabled}
              >
                <option value="">Select Department</option>
                <option>HR</option>
                <option>Development</option>
                <option>Marketing</option>
                <option>Finance</option>
                <option>Operations</option>
              </select>
            </div>
            <div className="col-md-6">
              <label htmlFor="joiningDate" className="form-label">Joining Date</label>
              <input 
                id="joiningDate"
                name="joiningDate" 
                type="date" 
                className="form-control" 
                value={form.joiningDate} 
                onChange={handleChange} 
                required 
                disabled={!isFormEnabled}
              />
            </div>
            <div className="col-md-12">
              <label htmlFor="address" className="form-label">Address</label>
              <textarea 
                id="address"
                name="address" 
                className="form-control" 
                placeholder="Enter address" 
                value={form.address} 
                onChange={handleChange}
                disabled={!isFormEnabled}
              ></textarea>
            </div>
            <div className="col-md-6">
              <div className="form-check">
                <input 
                  id="isActive"
                  type="checkbox" 
                  name="isActive" 
                  className="form-check-input" 
                  checked={form.isActive} 
                  onChange={handleChange}
                  disabled={!isFormEnabled}
                />
                <label className="form-check-label" htmlFor="isActive">Active Employee</label>
              </div>
            </div>
            <div className="col-md-6">
              <label className="form-label d-block">Gender</label>
              <div className="form-check form-check-inline">
                <input 
                  id="genderMale"
                  type="radio" 
                  name="gender" 
                  value="Male" 
                  className="form-check-input" 
                  checked={form.gender === 'Male'} 
                  onChange={handleChange}
                  disabled={!isFormEnabled}
                />
                <label className="form-check-label" htmlFor="genderMale">Male</label>
              </div>
              <div className="form-check form-check-inline">
                <input 
                  id="genderFemale"
                  type="radio" 
                  name="gender" 
                  value="Female" 
                  className="form-check-input" 
                  checked={form.gender === 'Female'} 
                  onChange={handleChange}
                  disabled={!isFormEnabled}
                />
                <label className="form-check-label" htmlFor="genderFemale">Female</label>
              </div>
            </div>
          </div>
          <div className="mt-4">
            <button 
              className="btn btn-primary" 
              type="submit"
              disabled={!isFormEnabled}
            >
              {form.id === 0 ? 'Add Employee' : 'Update Employee'}
            </button>
            <button 
              type="button" 
              className="btn btn-outline-secondary ms-2"
              onClick={() => setForm(initialState)}
              disabled={!isFormEnabled}
            >
              Reset Form
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EmployeeForm;
