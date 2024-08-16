import React, { useState } from 'react';
import customAxios from '../hooks/requestHandler';

export default function SignUp() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignup = (e) => {
    e.preventDefault();
    customAxios
      .post('/auth/signup', {
        name: name,
        email: email,
        password: password,
      })
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  return (
    <div>
      <form onSubmit={handleSignup}>
        <label>Name</label>
        <input type="text" onChange={(e) => setName(e.target.value)}></input>
        <label>Email</label>
        <input type="text" onChange={(e) => setEmail(e.target.value)}></input>
        <label>Password</label>
        <input
          type="text"
          onChange={(e) => setPassword(e.target.value)}
        ></input>
        <button>Submit</button>
      </form>
    </div>
  );
}
