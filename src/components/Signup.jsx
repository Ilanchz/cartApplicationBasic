import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function SignUp() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSignUp = async () => {
    try {
      const response = await fetch('http://localhost:5000/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });
      const data = await response.json();
      console.log(data);
      // Handle successful signup
    } catch (error) {
      console.error('Error signing up:', error);
      // Handle error
    }
  };

  return (
    <div>
      <h2>Sign Up</h2>
      <form>
        <div>
          <label>Username:</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="button" onClick={handleSignUp}>Sign Up</button>
      </form>
      <div>
        Already have an account? <Link to="/">Login</Link>
      </div>
    </div>
  );
}

export default SignUp;
