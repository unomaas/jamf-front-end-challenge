import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import './LandingPage.css';


function LandingPage() {
  const [heading, setHeading] = useState('Welcome');
  const history = useHistory();


  return (
    <div className="container">
      <h2>Add new User Profile</h2>
    </div>
  );
}

export default LandingPage;
