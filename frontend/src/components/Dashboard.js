import React from 'react';
import { Button } from 'react-bootstrap';

const Dashboard = ({ onStart }) => {
  return (
    <div className="d-flex flex-column align-items-center justify-content-center vh-100 text-center">
      <h1 className="mb-3 fw-bold text-primary">Welcome to the Student Feedback App </h1>
      <p className="lead mb-4 text-secondary">
        Your opinions matter! Use this platform to share valuable feedback about your courses and view insights.
      </p>
      <Button variant="primary" size="lg" onClick={onStart}>
        Get Started
      </Button>
    </div>
  );
};

export default Dashboard;
