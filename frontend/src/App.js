import React, { useState } from 'react';
import FeedbackForm from './components/FeedbackForm';
import FeedbackList from './components/FeedbackList';
import Dashboard from './components/Dashboard';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  const [currentView, setCurrentView] = useState('form');
  const [newFeedback, setNewFeedback] = useState(null); // store newly submitted feedback

  // Callback to add new feedback
  const handleNewFeedback = (feedback) => {
    setNewFeedback(feedback);
    setCurrentView('list'); // optionally switch to list view after submission
  };

  return (
    <div className="App d-flex flex-column min-vh-100">
      {/* Bootstrap Navbar */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary shadow-sm">
        <div className="container">
          <span className="navbar-brand fw-bold text-light">
            Student Feedback App
          </span>
          <div className="navbar-nav ms-auto">
            <button 
              className={`nav-link btn btn-link text-light ${currentView === 'form' ? 'fw-bold' : ''}`}
              onClick={() => setCurrentView('form')}
            >
              Submit Feedback
            </button>
            <button 
              className={`nav-link btn btn-link text-light ${currentView === 'list' ? 'fw-bold' : ''}`}
              onClick={() => setCurrentView('list')}
            >
              View Feedback
            </button>
            <button 
              className={`nav-link btn btn-link text-light ${currentView === 'dashboard' ? 'fw-bold' : ''}`}
              onClick={() => setCurrentView('dashboard')}
            >
              Dashboard
            </button>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="container mt-4 flex-grow-1">
        {currentView === 'form' && <FeedbackForm onSubmitFeedback={handleNewFeedback} />}
        {currentView === 'list' && <FeedbackList newFeedback={newFeedback} />}
        {currentView === 'dashboard' && <Dashboard />}
      </div>

      {/* Footer */}
      <footer className="bg-dark text-light text-center py-3 mt-auto">
        <div className="container">
          <p className="mb-1">© {new Date().getFullYear()} Student Feedback App. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
