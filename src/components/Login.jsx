import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const response = await fetch('http://localhost:5000/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });
      
      if (!response.ok) {
        // Handle non-successful response (status code other than 2xx)
        console.error('Login failed:', response.status, response.statusText);
        return;
      }
      
      const data = await response.json();
      console.log(data);
      
      // If response.ok is true, proceed with navigation
      navigate('/home',{state: { username: username }});

    } catch (error) {
      console.error('Error logging in:', error);
      // Handle error
    }
  };

  return (
    <div>
      <h2>Login</h2>
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
        <button type="button" onClick={handleLogin}>Login</button>
      </form>
      <div>
        Don't have an account? <Link to="/signup">Register for new account</Link>
      </div>
    </div>
  );
}

export default Login;
