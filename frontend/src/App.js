// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;


import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './styles/layout.css';
import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import EmployeeForm from './components/EmployeeForm';
import EmployeeList from './components/EmployeeList';

function App() {
  const [editingEmployee, setEditingEmployee] = useState(null);

  const handleEdit = (employee) => {
    setEditingEmployee(employee);
  };

  const handleFormSubmit = () => {
    setEditingEmployee(null);
  };

  return (
    <Router>
      <div className="app-container">
        <Navbar />
        <Sidebar />
        <div className="content-wrapper">
          <Routes>
            <Route path="/" element={
              <div className="card shadow-sm">
                <div className="card-body">
                  <h2 className="card-title">Dashboard</h2>
                  <p className="card-text">Welcome to the Employee Management System</p>
                </div>
              </div>
            } />
            <Route path="/employees" element={
              <div className="card shadow-sm">
                <div className="card-body">
                  <h2 className="card-title mb-4">Employee Management</h2>
                  <EmployeeForm employee={editingEmployee} onSubmit={handleFormSubmit} />
                  <hr className="my-4" />
                  <EmployeeList onEdit={handleEdit} />
                </div>
              </div>
            } />
            <Route path="/departments" element={
              <div className="card shadow-sm">
                <div className="card-body">
                  <h2 className="card-title">Departments</h2>
                  <p className="card-text">Department management coming soon</p>
                </div>
              </div>
            } />
            <Route path="/reports" element={
              <div className="card shadow-sm">
                <div className="card-body">
                  <h2 className="card-title">Reports</h2>
                  <p className="card-text">Reports and analytics coming soon</p>
                </div>
              </div>
            } />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
