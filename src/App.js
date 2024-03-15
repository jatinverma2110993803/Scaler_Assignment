import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Login from './Login';
import MentorDashboard from './MentorDashboard';
import EvaluationPage from './EvaluationPage';

function App() {
  return (
    <Router>
      <div className="App">
        <Route path="/" exact component={Login} />
        <Route path="/mentordashboard" component={MentorDashboard} />
        <Route path="/evaluation/:studentName" component={EvaluationPage} />
      </div>
    </Router>
  );
}

export default App;
