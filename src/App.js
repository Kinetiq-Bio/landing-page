import React from 'react';
import './App.css';

function App() {
  return (
    <div className="error-page">
      <div className="error-container">
        <h1 className="error-code">404</h1>
        <h2 className="error-message">Page Not Found</h2>
        <p className="error-description">
          The page you are looking for doesn't exist or has been moved.
        </p>
      </div>
    </div>
  );
}

export default App;
