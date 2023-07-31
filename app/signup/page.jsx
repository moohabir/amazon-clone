'use client';

import { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';

export default function SignUp() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  //const [confirmPassword, setConfirmPassword] = useState('');

  const router = useRouter();

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/signup', {
        name,
        email,
        password,
      });

      console.log('User Created', { status: 201 }, response.data);
      router.push('/login');
    } catch (error) {
      console.log({ Error: error.message });
    }
  };

  return (
    <div className="border border-slate-200 rounded-md p-10 hover:bg-slate-100">
      <h1>Sign Up</h1>
      <form onSubmit={handleSignup}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Name"
          required
        />
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          required
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />
        {/*<input
          type="password"
          placeholder="Confirm password"
  />*/}
        <button type="submit">Sign up</button>
      </form>
    </div>
  );
}
