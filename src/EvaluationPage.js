import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

function EvaluationPage() {
  const { studentName } = useParams();
  const [evaluationParams, setEvaluationParams] = useState({
    param1: '',
    param2: '',
    param3: '',
    param4: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEvaluationParams(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Send evaluation data to the server or perform necessary actions
    console.log('Evaluation submitted:', evaluationParams);
    // Optionally, you can redirect back to the Mentor Dashboard after submission
    // history.push('/mentordashboard');
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '80vh' }}>
      <div style={{ background: '#fff', padding: '40px', borderRadius: '12px', boxShadow: '0 8px 12px rgba(0, 0, 0, 0.1)', maxWidth: '600px', width: '100%', marginTop : '90px' }}>
        <h2 style={{ textAlign: 'center', marginBottom: '30px' }}>Evaluation of Project</h2>
        <h3 style={{ textAlign: 'center', marginBottom: '20px' }}>Student Name: {studentName}</h3>
        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: '20px' }}>
            <label>Parameter 1:</label>
            <input type="text" name="param1" value={evaluationParams.param1} onChange={handleChange} style={{ marginLeft: '10px', padding: '8px', borderRadius: '5px', border: '1px solid #ccc' }} />
          </div>
          <div style={{ marginBottom: '20px' }}>
            <label>Parameter 2:</label>
            <input type="text" name="param2" value={evaluationParams.param2} onChange={handleChange} style={{ marginLeft: '10px', padding: '8px', borderRadius: '5px', border: '1px solid #ccc' }} />
          </div>
          <div style={{ marginBottom: '20px' }}>
            <label>Parameter 3:</label>
            <input type="text" name="param3" value={evaluationParams.param3} onChange={handleChange} style={{ marginLeft: '10px', padding: '8px', borderRadius: '5px', border: '1px solid #ccc' }} />
          </div>
          <div style={{ marginBottom: '20px' }}>
            <label>Parameter 4:</label>
            <input type="text" name="param4" value={evaluationParams.param4} onChange={handleChange} style={{ marginLeft: '10px', padding: '8px', borderRadius: '5px', border: '1px solid #ccc' }} />
          </div>
          <div style={{ textAlign: 'center' }}>
            <button type="submit" style={{ padding: '10px 20px', backgroundColor: '#007bff', color: '#fff', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default EvaluationPage;
