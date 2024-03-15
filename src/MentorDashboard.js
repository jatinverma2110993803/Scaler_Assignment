import React from 'react';
import { Link } from 'react-router-dom';
import mentorImage from './mentor-image.jpg'; // Import mentor image

function MentorDashboard() {
  const handleLogout = () => {
    // Perform logout actions if necessary
    // Redirect to the login page
    // window.location.href = '/'; // Directly redirecting
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', minHeight: '100vh', background: '#f0f0f0' }}>
      <div style={{ background: '#fff', padding: '60px', borderRadius: '12px', boxShadow: '0 8px 12px rgba(0, 0, 0, 0.1)', textAlign: 'left', width: '70%', marginBottom: '40px', marginTop: '120px' }}>
        <h2 style={{ color: '#333', marginBottom: '20px', textAlign: 'center' }}>Welcome to Mentor Dashboard</h2>
        <div style={{ display: 'flex' }}>
          <div style={{ flex: '1', marginRight: '20px', textAlign: 'center' }}>
            <div style={{ marginBottom: '20px' }}>
              <h3 style={{ color: '#333', marginBottom: '10px' }}>Mentor Details</h3>
              <div style={{ width: '150px', height: '150px', margin: 'auto', borderRadius: '50%', overflow: 'hidden', marginBottom: '10px' }}>
                <img src={mentorImage} alt="Mentor" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <p>Put your mentor details here</p>
            </div>
          </div>
          <div style={{ flex: '1', marginLeft: '20px' }}>
            <div style={{ marginBottom: '20px' }}>
              <h3 style={{ color: '#333', marginBottom: '10px' }}>Students Assigned</h3>
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                {/* Link to EvaluationPage for Student 1 */}
                <Link to="/evaluation/student1" style={{ textDecoration: 'none', color: '#333' }}>
                  <div style={{ marginBottom: '10px', cursor: 'pointer', border: '1px solid #ccc', borderRadius: '5px', padding: '10px', transition: 'background-color 0.3s' }}>
                    Student 1
                  </div>
                </Link>
                {/* Add similar links for other students */}
                <Link to="/evaluation/student2" style={{ textDecoration: 'none', color: '#333' }}>
                  <div style={{ marginBottom: '10px', cursor: 'pointer', border: '1px solid #ccc', borderRadius: '5px', padding: '10px', transition: 'background-color 0.3s' }}>
                    Student 2
                  </div>
                </Link>
                <Link to="/evaluation/student3" style={{ textDecoration: 'none', color: '#333' }}>
                  <div style={{ marginBottom: '10px', cursor: 'pointer', border: '1px solid #ccc', borderRadius: '5px', padding: '10px', transition: 'background-color 0.3s' }}>
                    Student 3
                  </div>
                </Link>
                <Link to="/evaluation/student4" style={{ textDecoration: 'none', color: '#333' }}>
                  <div style={{ marginBottom: '10px', cursor: 'pointer', border: '1px solid #ccc', borderRadius: '5px', padding: '10px', transition: 'background-color 0.3s' }}>
                    Student 4
                  </div>
                </Link>

              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Logout Button with Redirect to Login Page */}
      <Link to="/" style={{ textDecoration: 'none', color: '#fff' }}>
        <button onClick={handleLogout} style={{ padding: '10px 20px', border: 'none', borderRadius: '5px', backgroundColor: '#007bff', color: '#fff', cursor: 'pointer', transition: 'background-color 0.3s' }}>
          Logout
        </button>
      </Link>
    </div>
  );
}

export default MentorDashboard;
